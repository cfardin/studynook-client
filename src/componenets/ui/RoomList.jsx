"use client";
import { useState } from "react";
import RoomCard from "@/componenets/ui/RoomCard";

const RoomList = ({ rooms }) => {

    // searching system 
    const [search, setSearch] = useState("");

    const filteredRooms = rooms.filter((room) =>
        room.title.toLowerCase().includes(search.toLowerCase())
    );

    // const filteredRooms = rooms;


    return (
        <div>
            <input
                type="text"
                placeholder="e.g. Quiet Pod"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded-lg px-4 py-2 mb-5 w-full max-w-xs"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {filteredRooms.map((room) => (
                    <RoomCard key={room._id} room={room} />
                ))}
            </div>
        </div>
    );
};

export default RoomList;