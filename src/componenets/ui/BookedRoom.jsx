"use client";

import { Button } from '@heroui/react';
import React from 'react';
import DeleteBookingBtn from '../DeleteBookingBtn';

const BookedRoom = ({ booking }) => {
    const { _id, roomTitle, imageUrl, date, start, end, totalCost, status } = booking;

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    })

    return (
        <tr className="border-t">
            <td className="px-6 py-4 flex items-center gap-3">
                <img src={imageUrl} className="w-10 h-10 rounded-lg object-cover" />
                <span  className="font-medium text-gray-900">{roomTitle}</span>
            </td>
            <td className="px-6 py-4 text-blue-700">{formattedDate}</td>
            <td className="px-6 py-4 text-gray-700">{start} – {end}</td>
            <td className="px-6 py-4 font-semibold text-gray-900">${totalCost}</td>
            <td className="px-6 py-4">
                <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {status || "confirmed"}
                </span>
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900">
                <DeleteBookingBtn  booking = {booking} ></DeleteBookingBtn>
            </td>
        </tr>
    );
};

export default BookedRoom;