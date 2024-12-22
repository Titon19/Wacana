import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FancyText from "@carefully-coded/react-text-gradient";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Index = () => {
    const [page, setPage] = useState(0);

    const prev = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    const next = () => {
        if (page < 2) {
            setPage(page + 1);
        }
    };
    return (
        <AuthenticatedLayout>
            <div className="mt-12 py-4 min-h-screen max-w-7xl mx-auto">
                <div className="max-w-7xl py-4 mx-auto flex flex-col gap-4 justify-between text-center">
                    <FancyText
                        className="text-6xl font-bold py-24"
                        gradient={{
                            from: "#F858E0",
                            to: "#77156C",
                            type: "linear",
                        }}
                        animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
                        animateDuration={2000}
                    >
                        Beberapa foto dan video dari wacana.
                    </FancyText>
                    <div className="columns-1 gap-4 sm:columns-2  md:columns-3 lg:columns-4">
                        <div
                            className="mb-4 overflow-hidden rounded-xl cursor-pointer"
                            onClick={() =>
                                document
                                    .getElementById("my_modal_3")
                                    .showModal()
                            }
                        >
                            <img
                                src="/images/photo.jpeg"
                                className="rounded-xl hover:scale-105 transition-all duration-300 ease-in-out"
                                alt="document"
                            />
                        </div>
                        <dialog
                            id="my_modal_3"
                            className="modal backdrop-blur-sm"
                        >
                            <div className="modal-box bg-neutral-950 max-w-7xl">
                                <form method="dialog" className="m-4">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                        ✕
                                    </button>
                                </form>
                                <div className="w-full flex justify-center">
                                    <img
                                        width={500}
                                        src="/images/photo2.jpg"
                                        alt="document"
                                    />
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
