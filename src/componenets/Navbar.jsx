"use client";
import { useState } from "react";
import { Moon, Menu, X } from "lucide-react";
import { PiBooksFill } from "react-icons/pi";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session } = authClient.useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const user = session?.user;

    const loggedInLinks = [
        { href: "/", label: "Home" },
        { href: "/all-rooms", label: "Rooms" },
        { href: "/add-rooms", label: "Add Rooms" },
        { href: "/my-bookings", label: "My Bookings" },
        { href: "/my-listings", label: "My Listings" },
    ];

    const loggedOutLinks = [
        { href: "/", label: "Home" },
        { href: "/all-rooms", label: "Rooms" },
    ];

    const links = user ? loggedInLinks : loggedOutLinks;

    return (
        <nav className="px-6 py-3 shadow container mx-auto border-b">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex">
                        <PiBooksFill size={30} />
                        <span className="text-xl font-bold">StudyNook</span>
                    </Link>
                </div>

                {/* desktop links */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href}>{link.label}</Link>
                    ))}
                </div>

                {/* right side */}
                <div className="flex items-center gap-4">
                    <Moon size={20} className="cursor-pointer" />

                    {/* desktop auth */}
                    <div className="hidden md:flex items-center gap-4">
                        {user ? (
                            <>
                                <Link href={"/profile"} className="flex items-center gap-5">
                                    <h2>Hello {user?.name}</h2>
                                    <img
                                        src={user?.image}
                                        alt="user pic"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                </Link>
                                <Link
                                    href={"/login"}
                                    onClick={async () => await authClient.signOut()}
                                    className="bg-gray-900 text-white px-4 py-2 rounded-md"
                                >
                                    Log Out
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/login">Login</Link>
                                <Link
                                    href="/register"
                                    className="bg-gray-900 text-white px-4 py-2 rounded-md"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                    {/* mobile toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col gap-4 mt-4 pb-4">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="border-t pt-4 flex flex-col gap-4">
                        {user ? (
                            <>
                                <Link
                                    href={"/profile"}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-3"
                                >
                                    <img
                                        src={user?.image}
                                        alt="user pic"
                                        width={32}
                                        height={32}
                                        className="rounded-full"
                                    />
                                    <span>Hello {user?.name}</span>
                                </Link>
                                <Link
                                    href={"/login"}
                                    onClick={async () => {
                                        setIsMenuOpen(false);
                                        await authClient.signOut();
                                    }}
                                    className="bg-gray-900 text-white px-4 py-2 rounded-md text-center"
                                >
                                    Log Out
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                                <Link
                                    href="/register"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="bg-gray-900 text-white px-4 py-2 rounded-md text-center"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;