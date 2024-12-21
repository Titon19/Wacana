import { Link } from "@inertiajs/react";
import React from "react";
import { FaBars } from "react-icons/fa";
import { usePage } from "@inertiajs/react";

const Index = () => {
    const user = usePage().props.auth.user;
    return (
        <>
            <nav className="bg-neutral-950 px-4 w-full fixed border-b-neutral-800 border-b z-50 top-0">
                <div className="flex max-w-6xl mx-auto items-center justify-center py-3">
                    <Link
                        href={"/home"}
                        className="flex-1 font-extrabold text-2xl"
                    >
                        Wacana.
                    </Link>
                    <ul>
                        <li className="hidden sm:flex gap-6 font-semibold items-center">
                            <Link
                                href={"/home"}
                                className={` transition-all duration-300 ease-in-out text-sm ${
                                    window.location.pathname === "/home"
                                        ? "bg-neutral-800 rounded-badge px-3 py-2 text-neutral-100"
                                        : "text-neutral-400"
                                }`}
                            >
                                Home
                            </Link>
                            <Link
                                href={"/events"}
                                className={`transition-all duration-300 ease-in-out text-sm ${
                                    window.location.pathname === "/events"
                                        ? "bg-neutral-800 rounded-badge text-neutral-100 px-3 py-1"
                                        : "text-neutral-400"
                                }`}
                            >
                                Event
                            </Link>

                            <div className="dropdown dropdown-end hidden md:block">
                                <button tabIndex={0} className="text-sm">
                                    <h1>{user.name}</h1>
                                </button>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu bg-neutral-950 border border-1 border-neutral-800 rounded-box z-[1] w-56 top-12 p-2 flex- flex-col gap-1"
                                >
                                    <li>
                                        <Link
                                            href={route("profile.edit")}
                                            className={`  hover:text-neutral-100 hover:bg-neutral-800 transition-all duration-300 ease-in-out  ${
                                                window.location.pathname ===
                                                "/profile"
                                                    ? "bg-neutral-800"
                                                    : ""
                                            }`}
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            className="hover:text-neutral-100 hover:bg-neutral-800 transition-all duration-300 ease-in-out"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div className="dropdown dropdown-end md:hidden block">
                        <div tabIndex={0} className="text-xl">
                            <FaBars />
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-neutral-950 border border-1 border-neutral-800 rounded-box z-[1] w-56 top-12 p-2 flex- flex-col gap-1"
                        >
                            <li>
                                <Link
                                    href={"/home"}
                                    className=" hover:text-neutral-100 hover:bg-neutral-800 transition-all duration-300 ease-in-out"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/events"}
                                    className=" hover:text-neutral-100 hover:bg-neutral-800 transition-all duration-300 ease-in-out"
                                >
                                    Event
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("profile.edit")}
                                    className=" hover:text-neutral-100 hover:bg-neutral-800 transition-all duration-300 ease-in-out"
                                >
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    className=" hover:text-neutral-100 hover:bg-neutral-800 transition-all duration-300 ease-in-out"
                                >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Index;
