import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";
import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = ({ events }) => {
    const deleteHandler = (id) => {
        console.log(id);
        router.delete(`/events/${id}`, {
            onSuccess: () => {
                console.log("berhasil");
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="mt-12 py-4 min-h-screen max-w-7xl mx-auto">
                <div className="max-w-7xl py-4 mx-auto flex flex-col gap-4 justify-between">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-bold">Events</h1>
                        <form action="">
                            <input
                                type="search"
                                name="search"
                                className="rounded-2xl max-w-xs md:w-96 bg-neutral-900 transition-all duration-300 ease-in-out text-neutral-100"
                                placeholder="Search..."
                            />
                        </form>
                        <Link
                            href={route("events.create")}
                            className="btn rounded-full bg-neutral-100 text-neutral-950 hover:bg-neutral-300"
                        >
                            <FaPlus />
                            <p className="md:block hidden">Tambah</p>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {events.map(
                            (event) => (
                                console.log(event),
                                (
                                    <div
                                        key={event.id}
                                        className="p-4 bg-neutral-950 border border-neutral-800 rounded-2xl"
                                    >
                                        <div className="flex justify-between">
                                            <Link
                                                href={route(
                                                    "events.show",
                                                    event.id
                                                )}
                                                className="text-xl font-bold hover:underline "
                                            >
                                                {event.title}
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    document
                                                        .getElementById(
                                                            "my_modal_5"
                                                        )
                                                        .showModal()
                                                }
                                                type="button"
                                                className="text-red-500 p-4 scale-75 bg-neutral-100 hover:bg-neutral-300 transition-colors duration-300 ease-in-out rounded-full"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                        <p className="text-sm font-semibold italic">
                                            {event.start_date}
                                        </p>
                                        <p className="mt-2 mb-2 text-justify truncate">
                                            {event.description}
                                        </p>
                                        <p>
                                            <span className="font-semibold badge badge-neutral">
                                                Dibuat oleh{" "}
                                                {event.creator?.name ||
                                                    "Tidak ada"}
                                            </span>
                                        </p>
                                        <dialog
                                            id="my_modal_5"
                                            className="modal modal-bottom sm:modal-middle backdrop-blur-sm bg-neutral-950/50"
                                        >
                                            <div className="modal-box bg-neutral-950 ">
                                                <h3 className="font-bold text-lg text-red-500">
                                                    <FaTrash />
                                                </h3>
                                                <p className="py-4">
                                                    Gondrong doang hapus data
                                                    mulu!
                                                </p>
                                                <div className="modal-action">
                                                    <form
                                                        method="dialog"
                                                        className="flex gap-2"
                                                    >
                                                        <button
                                                            className="btn btn-sm btn-error"
                                                            onClick={() =>
                                                                deleteHandler(
                                                                    event.id
                                                                )
                                                            }
                                                        >
                                                            Yakin Cok
                                                        </button>
                                                        <button className="btn btn-sm">
                                                            Gajadi
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>
                                )
                            )
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
