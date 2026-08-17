"use client";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [bookedCount, setBookedCount] = useState(0);
    const [listedCount, setListedCount] = useState(0);

    useEffect(() => {
        if (!user?.email) return;

        const fetchCounts = async () => {
            const tokenRes = await fetch("/api/auth/token");
            const { token } = await tokenRes.json();

            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const bookingsRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/user/${user.email}`, { headers });
            const bookingsData = await bookingsRes.json();
            setBookedCount(Array.isArray(bookingsData) ? bookingsData.length : 0);

            const roomsRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/host/${user.email}`, { headers });
            const roomsData = await roomsRes.json();
            setListedCount(Array.isArray(roomsData) ? roomsData.length : 0);
        };

        fetchCounts();
    }, [user]);

    return (
        <div className="max-w-md mx-auto py-16 px-4 text-center">
            <img
                src={user?.image}
                alt={user?.name}
                className="w-24 h-24 rounded-full mx-auto object-cover"
            />
            <h1 className="text-2xl font-serif font-bold text-gray-900 mt-4">{user?.name}</h1>
            <p className="text-gray-500">{user?.email}</p>

            <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white border rounded-2xl p-6">
                    <p className="text-3xl font-bold text-gray-900">{bookedCount}</p>
                    <p className="text-gray-500 text-sm mt-1">Rooms Booked</p>
                </div>

                <div className="bg-white border rounded-2xl p-6">
                    <p className="text-3xl font-bold text-gray-900">{listedCount}</p>
                    <p className="text-gray-500 text-sm mt-1">Rooms Listed</p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;