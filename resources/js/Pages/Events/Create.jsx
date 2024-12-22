import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, router } from "@inertiajs/react";
import React, { useState } from "react";
import { FaBackward } from "react-icons/fa";

const Create = ({ errors, users }) => {
    const [values, setValues] = useState({
        title: "",
        description: "",
        start_date: "",
        end_date: "",
        user_id: [],
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { type, name, value, checked } = e.target;
        if (type === "checkbox") {
            setValues((prev) => ({
                ...prev,
                [name]: checked //Melakukan checked?
                    ? [...prev[name], parseInt(value)] //Berarti value ditambahkan ke array
                    : prev[name].filter((id) => id !== parseInt(value)), //Berarti value di filter dan dihapus dari array
            }));
        } else {
            setValues((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(values);
        router.post(
            route("events.store"),
            {
                ...values,
                user_id: values.user_id,
            },
            {
                onFinish: () => setLoading(false),
            }
        );
    };

    return (
        <AuthenticatedLayout>
            <div className="mt-12 py-4 min-h-screen max-w-7xl mx-auto">
                <div className="max-w-7xl py-4 mx-auto flex flex-col gap-4 justify-between">
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl font-bold">Tambah Event</h1>
                        <Link
                            href={route("events.index")}
                            className="btn rounded-full text-center bg-neutral-100 text-neutral-950 hover:bg-neutral-300"
                        >
                            <FaBackward />
                            <p className="md:block hidden">Kembali</p>
                        </Link>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-start items-start"
                    >
                        <div className="flex flex-col gap-2 mb-3">
                            <label htmlFor="title">Judul</label>
                            <input
                                onChange={handleChange}
                                type="text"
                                id="title"
                                name="title"
                                className="w-full rounded-2xl bg-neutral-800 transition-all duration-300 ease-in-out"
                                placeholder="Judul..."
                            />
                            {errors.title && (
                                <div className="text-red-500">
                                    {errors.title}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-2 mb-3">
                            <label htmlFor="description">Deskripsi</label>
                            <textarea
                                onChange={handleChange}
                                type="text"
                                id="description"
                                name="description"
                                className="w-full rounded-2xl bg-neutral-800 transition-transform  ease-in-out"
                                placeholder="Deskripsi..."
                            />
                            {errors.description && (
                                <div className="text-red-500">
                                    {errors.description}
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-2 justify-start mb-3">
                            <label>Pilih Orang</label>
                            {users.map((user) => {
                                return (
                                    <label
                                        htmlFor={`user_id-${user.id}`}
                                        className="flex items-center gap-3"
                                        key={user.id}
                                    >
                                        <input
                                            onChange={handleChange}
                                            type="checkbox"
                                            id={`user_id-${user.id}`}
                                            name="user_id"
                                            value={user.id}
                                            className="p-2 rounded-full hover:text-accent checkbox-accent text-neutral-950 ms-2 bg-neutral-800 transition-all duration-300 ease-in-out"
                                        />
                                        {user.name}
                                    </label>
                                );
                            })}
                        </div>
                        <div className="flex flex-col gap-2 mb-3">
                            <label htmlFor="start_date">Tanggal Mulai</label>
                            <input
                                onChange={handleChange}
                                type="date"
                                id="start_date"
                                name="start_date"
                                className="w-full rounded-2xl bg-neutral-800 transition-all duration-300 ease-in-out"
                            />
                            {errors.start_date && (
                                <div className="text-red-500">
                                    {errors.start_date}
                                </div>
                            )}
                            <label htmlFor="end_date">Tanggal Selesai</label>
                            <input
                                onChange={handleChange}
                                type="date"
                                id="end_date"
                                name="end_date"
                                className="w-full rounded-2xl bg-neutral-800 transition-all duration-300 ease-in-out"
                            />
                            {errors.end_date && (
                                <div className="text-red-500">
                                    {errors.end_date}
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="md:col-span-2 btn bg-neutral-100 hover:bg-neutral-300 text-neutral-950 rounded-full"
                            disabled={loading}
                        >
                            <span
                                className={`${
                                    loading && "loading loading-spinner"
                                }`}
                            ></span>
                            SIMPAN
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
