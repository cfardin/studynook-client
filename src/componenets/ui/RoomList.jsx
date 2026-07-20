"use client";
import { useState } from "react";
import RoomCard from "@/componenets/ui/RoomCard";

const amenitiesList = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
];


const RoomList = ({ rooms }) => {

    // searching system 
    const [search, setSearch] = useState("");

    const [amenities, setAmenities] = useState([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const toggleAmenity = (amenity) => {
        setAmenities((prev) =>
            prev.includes(amenity)
                ? prev.filter((a) => a !== amenity)
                : [...prev, amenity]
        );
    };


    const filteredRooms = rooms.filter((room) => {
        //s
        const matchSearch = room.title.toLowerCase().includes(search.toLowerCase());

        //a
        const matchAmenities = amenities.every((a) => room.amenities.includes(a));
        //price
        const matchMin = minPrice ? room.pricePerHour >= Number(minPrice) : true;
        const matchMax = maxPrice ? room.pricePerHour <= Number(maxPrice) : true;
        return matchSearch && matchAmenities && matchMin && matchMax;
    });

    // const filteredRooms = rooms;


    return (
         <div className="flex gap-8">


            {/* l sidebar */}
            <div className="w-64 shrink-0">
                <div className="flex items-center justify-between mb-4 mt-4">
                    <h4 className="font-bold text-lg">Rooms</h4>
                    <button
                        onClick={() => {
                            setSearch("");
                            setAmenities([]);
                            setMinPrice("");
                            setMaxPrice("");
                        }}
                        className="text-sm text-gray-500 hover:bg-black rounded-sm hover:text-white py-1 px-2">
                        Reset
                    </button>
                </div>

                <label className="block text-sm text-gray-500 mb-1">Search by name</label>
                <input
                    type="text"
                    placeholder="e.g. Quiet Pod"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded-lg px-4 py-2 mb-5 w-full"
                />

                <label className="block text-sm text-gray-500 mb-2">Amenities</label>
                <div className="flex flex-col gap-2 mb-5">
                    {amenitiesList.map((amenity) => (
                        <label key={amenity} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={amenities.includes(amenity)}
                                onChange={() => toggleAmenity(amenity)}
                            />
                            {amenity}
                        </label>
                    ))}
                </div>

                <label className="block text-sm text-gray-500 mb-2">Hourly rate ($)</label>
                <div className="flex gap-2">
                    <input
                        type="number"
                        placeholder="Min"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="border rounded-lg px-3 py-2 w-full"
                    />
                    <input
                        type="number"
                        placeholder="Max"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="border rounded-lg px-3 py-2 w-full"
                    />
                </div>
            </div>

            {/* results */}
            <div className="flex-1">
                <p className="text-sm text-gray-500 mb-4">
                    Showing {filteredRooms.length} of {rooms.length} rooms
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {filteredRooms.map((room) => (
                        <RoomCard key={room._id} room={room} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoomList;