"use client";
import { Moon } from "lucide-react";
import { PiBooksFill } from "react-icons/pi";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session } = authClient.useSession();

    const user = session?.user;
    console.log(user);

    return (
        <nav className="flex items-center justify-between px-6 py-3 shadow container mx-auto border-b">
            <div className="flex items-center gap-2">
                <Link href="/" className="flex">
                    <div className="">
                        <PiBooksFill className="" size={30} />
                    </div>
                    <span className="text-xl font-bold">StudyNook</span>
                </Link>
            </div>



{
 user ? 
            <div className="flex items-center gap-6">
                <Link href="/">Home</Link>
                <Link href="/all-rooms">Rooms</Link>
                <Link href="/add-rooms">Add Rooms</Link>
                <Link href="/bookings">My Bookings</Link>
            </div> : 
              <div className="flex items-center gap-6">
                <Link href="/">Home</Link>
                <Link href="/all-rooms">Rooms</Link>
               
            </div> 

}
            

            <div className="flex items-center gap-4">
                <Moon size={20} className="cursor-pointer" />

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
                        ></img>
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
                    <div className="flex items-center gap-4">
                    <Link href="/login">Login</Link>
                    <Link
                      href="/register"
                      className="bg-gray-900 text-white px-4 py-2 rounded-md"
                    >
                      Register
                    </Link>
                </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;