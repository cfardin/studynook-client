import { Layers, Users, DollarSign } from "lucide-react";
import Link from "next/link";

const RoomCard = ({ room }) => {
    const {
        _id,
        title,
        description,
        imageUrl,
        pricePerHour,
        floor,
        capacity,
        totalBookings,
        amenities,
    } = room;

    return (
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col h-full">
            <img src={imageUrl} alt={title} className="h-44 w-full object-cover" />

            <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif font-bold text-gray-900">{title}</h3>
                    <span className="bg-orange-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-full">
                        ${pricePerHour}/hr
                    </span>
                </div>

                <p className="text-gray-500 text-sm mt-2 line-clamp-2">{description}</p>

                <div className="flex items-center gap-5 text-gray-600 text-sm mt-4">
                    <span className="flex items-center gap-1"><Layers size={16} /> {floor}</span>
                    <span className="flex items-center gap-1"><Users size={16} /> {capacity} people</span>
                    <span className="flex items-center gap-1"><DollarSign size={16} /> {totalBookings} bookings</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 mb-5">
                    {amenities.map((amenity) => (
                        <span key={amenity} className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">
                            {amenity}
                        </span>
                    ))}
                </div>

                <Link
                    href={`/all-rooms/${_id}`}
                    className="mt-auto  bg-gray-900 text-white block text-center border border-gray-300 rounded-lg py-2 font-semibold hover:bg-gray-700"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default RoomCard;