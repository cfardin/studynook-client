"use client";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import BookedRoom from "@/componenets/ui/BookedRoom";

const MyBookingPage = () => {
    const { data: session } = authClient.useSession();
    const [bookings, setBookings] = useState(null);

    useEffect(() => {
        if (!session?.user?.email) return;

        fetch(`http://localhost:5000/bookings/user/${session.user.email}`)
            .then((res) => res.json())
            .then((data) => setBookings(data));
    }, [session]);

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl font-serif font-bold text-gray-900">My Bookings</h1>
            <p className="text-gray-500 mt-2 mb-8">Manage your upcoming and past room reservations.</p>

            {bookings === null ? (
                <div className="flex justify-center items-center py-20">
                    {/* <div className="w-10 h-10 border-4 border-gray-200 border-t-green-900 rounded-full animate-spin" /> */}
                    <h3 className="text-4xl font-bold">Book a Room</h3>
                </div>
            ) : (
                <div className="bg-white rounded-2xl border overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-100 text-xs font-semibold text-gray-500 uppercase">
                                <th className="px-6 py-4">Room</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Time</th>
                                <th className="px-6 py-4">Cost</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((b) => (
                                <BookedRoom key={b._id} booking={b} />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyBookingPage;