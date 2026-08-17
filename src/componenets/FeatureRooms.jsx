import Link from "next/link";
import RoomCard from "@/componenets/ui/RoomCard";

const FeatureRooms = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/rooms`);
    const rooms = await res.json();

    const featured = rooms.slice(0, 3);

    return (
        <div className="container mx-auto py-16 px-4">
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold">Featured Study Rooms</h2>
                <Link href="/all-rooms" className="text-blue-600 font-semibold hover:underline">
                    View all rooms →
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featured.map((room) => (
                    <RoomCard key={room._id} room={room} />
                ))}
            </div>
        </div>
    );
};

export default FeatureRooms;