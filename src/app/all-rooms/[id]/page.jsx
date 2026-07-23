import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Layers, Users, DollarSign, CheckCircle2, Calendar } from 'lucide-react';
import { Button } from '@heroui/react';
import DeleteBtn from '@/componenets/ui/DeleteBtn';

const BookInfo = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(`http://localhost:5000/rooms/${id}`);
    const room = await res.json();

    const {
        title,
        description,
        imageUrl,
        pricePerHour,
        floor,
        capacity,
        totalBookings,
        amenities,
        listedDate,
        host,
    } = room;

    const formattedDate = new Date(listedDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="w-4xl mx-auto py-10">
            <div className='flex justify-between items-center mb-6'>
                <Link href="/all-rooms" className="flex items-center gap-2 text-gray-700 hover:text-black mb-6 w-fit">
                    <ArrowLeft size={18} /> Back
                </Link>
                <div>

                    <DeleteBtn room = {room}></DeleteBtn>
                </div>
            </div>
            

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* left */}
                <div className="lg:col-span-2">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-[420px] object-cover rounded-2xl"
                    />

                    <div className="flex items-center justify-between mt-6">
                        <h1 className="text-4xl font-serif font-bold text-gray-900">{title}</h1>
                        <span className="flex items-center gap-1 bg-green-50 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                            <CheckCircle2 size={14} /> {totalBookings} bookings
                        </span>
                    </div>

                    <p className="text-gray-500 text-sm mt-1">Listed {formattedDate}</p>

                    <p className="text-gray-700 mt-5">{description}</p>

                    <h3 className="font-serif font-bold text-xl text-gray-900 mt-8 mb-3">Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                        {amenities.map((amenity) => (
                            <span key={amenity} className="bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">
                                {amenity}
                            </span>
                        ))}
                    </div>
                </div>

                {/* right */}
                <div className="flex flex-col gap-5">
                    <div className="bg-white rounded-2xl shadow-sm border p-6">
                        <div className="flex items-end justify-between">
                            <span className="text-3xl font-serif font-bold text-gray-900">${pricePerHour}</span>
                            <span className="text-gray-500 text-sm">per hour</span>
                        </div>

                        <div className="flex flex-col gap-3 mt-5 text-gray-700 text-sm">
                            <span className="flex items-center gap-2"><Layers size={16} /> {floor}</span>
                            <span className="flex items-center gap-2"><Users size={16} /> Up to {capacity} people</span>
                            <span className="flex items-center gap-2"><DollarSign size={16} /> {totalBookings} total bookings</span>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold py-3 rounded-lg mt-6">
                            <Calendar size={18} /> Book Now
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border p-6">
                        <p className="text-xs font-semibold text-gray-400 tracking-wide mb-3">LISTED BY</p>
                        <div className="flex items-center gap-3">
                            <img
                                src={host?.profileImage}
                                alt={host?.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gray-900">{host?.name}</p>
                                <p className="text-sm text-green-700">{host?.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookInfo;