"use client";
import { useState } from "react";
import { Button, Modal } from "@heroui/react";
import { Calendar, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

const BookingModal = ({ room, title, pricePerHour }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [date, setDate] = useState("");
    const [start, setStart] = useState("09:00");
    const [end, setEnd] = useState("11:00");
    const [note, setNote] = useState("");

    const hours = Math.max(Number(end.split(":")[0]) - Number(start.split(":")[0]), 0);
    const totalCost = hours * pricePerHour;

    const handleConfirmBooking = async () => {
        const bookingData = {
            roomId: room._id,
            roomTitle: room.title,
            imageUrl: room.imageUrl,
            date,
            start,
            end,
            note,
            totalCost,
            host: room.host,
            user: {
                name: user?.name,
                email: user?.email,
                image: user?.image,
            },
        };

        const res = await fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(bookingData),
        });

        const data = await res.json();
        // console.log(data);
        if(data){
            toast.success('Successfully Booked your room')
        }
    };

    return (
        <Modal>
            <Modal.Trigger>
                <Button className="w-full flex items-center justify-center gap-2 bg-green-900 hover:bg-green-800 text-white font-semibold py-3 rounded-lg mt-6">
                    <Calendar size={18} /> Book Now
                </Button>
            </Modal.Trigger>

            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger>
                            {/* <button className="absolute top-5 right-5 text-gray-400 hover:text-gray-700"> */}
                                <X size={18} />
                            {/* </button> */}
                        </Modal.CloseTrigger>

                        <div className="p-6">
                            <h2 className="text-2xl font-serif font-bold text-gray-900">Book {title}</h2>
                            <p className="text-gray-500 text-sm mt-1">Pick a date and time slot. Bookings run on the hour.</p>

                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-green-700"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Start</label>
                                    <select
                                        value={start}
                                        onChange={(e) => setStart(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-green-700"
                                    >
                                        {timeSlots.map((t) => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">End</label>
                                    <select
                                        value={end}
                                        onChange={(e) => setEnd(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-green-700"
                                    >
                                        {timeSlots.map((t) => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="mt-5">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Special note (optional)</label>
                                <textarea
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    placeholder="Any setup needed?"
                                    rows={3}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-green-700 resize-none"
                                />
                            </div>

                            <div className="flex items-center justify-between bg-amber-50 rounded-lg px-4 py-3 mt-5">
                                <span className="text-gray-600">Total cost</span>
                                <span className="text-green-900 font-bold text-lg">${totalCost}</span>
                            </div>

                            <div className="flex justify-end items-center gap-4 mt-6">
                                <Button slot="close" variant="tertiary">Cancel</Button>
                                <Button
                                    onClick={handleConfirmBooking}
                                    slot="close"
                                    className="bg-green-900 hover:bg-green-800 text-white font-semibold px-5 py-2 rounded-lg"
                                >
                                    Confirm Booking
                                </Button>
                            </div>
                        </div>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default BookingModal;