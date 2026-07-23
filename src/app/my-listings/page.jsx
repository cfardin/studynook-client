"use client";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import RoomCard from "@/componenets/ui/RoomCard";

const MyListingPage = () => {
    const { data: session } = authClient.useSession();
    const [rooms, setRooms] = useState([]);

     
    useEffect(() => {
        if (!session?.user?.email) return;

        fetch(`http://localhost:5000/rooms/${session?.user?.email}`)
            .then((res) => res.json())
            .then((data) => setRooms(data))
    }, [session]);




    return (
        <div className="container mx-auto px-4 py-10">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-serif font-bold text-gray-900">My Listings</h1>
                    <p className="text-gray-500 mt-2">Rooms you currently host on StudyNook.</p>
                </div>

                <Link
                    href="/add-room"
                    className="flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold px-5 py-3 rounded-lg"
                >
                    <Plus size={18} /> Add Room
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {rooms.map((room) => (
                    <RoomCard key={room._id} room={room} />
                ))}
            </div>
        </div>
    );
};

export default MyListingPage;