<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Event;
use App\Models\Participant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::with('creator')->get();
        return Inertia::render('Events/Index', compact('events'));
    }

    public function create()
    {
        $users = User::all();
        return Inertia::render('Events/Create', compact('users'));
    }

    public function store(Request $request)
    {

        $messages = [
            'title.required' => 'Judul diisi dulu lah kocak!',
            'description.required' => 'Deskripsi diisi dulu lah kocak!',
            'start_date.required' => 'Tanggal mulai diisi dulu lah kocak!',
            'end_date.required' => 'Tanggal selesai diisi dulu lah kocak!',
            'description.max' => 'Deskripsi maksimal 300 karakter kocak!',
            'user_id.required' => 'Pilih minimal 1 temen lah kocak!',
        ];

        $request->validate([
            'title' => 'required',
            'description' => 'required|max:300',
            'start_date' => 'required',
            'end_date' => 'required',
            'user_id' => 'array|required',
        ], $messages);


        $event = Event::create([
            'title' => $request->title,
            'description' => $request->description,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'created_by' => Auth::user()->id,
        ]);


        foreach ($request->user_id as $value) {
            Participant::create([
                'event_id' => $event->id,
                'user_id' => $value
            ]);
        }


        return redirect()->route('events.index')->with('Event berhasil dibuat!');
    }

    public function show($id)
    {
        $event = Event::with('creator', 'participants')->find($id);
        return Inertia::render('Events/Show', compact('event'));
    }


    public function destroy($id)
    {
        $event = Event::find($id);
        $event->delete();
        return redirect()->route('events.index')->with('Event berhasil dihapus!');
    }
}
