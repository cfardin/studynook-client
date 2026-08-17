"use client"
import { useRef } from "react";
import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const amenitiesList = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
];

const EditForm = ({ room }) => {
    const router = useRouter();
    const closeBtnRef = useRef(null);

    const {
        _id,
        title,
        description,
        imageUrl,
        pricePerHour,
        floor,
        capacity,
        amenities,
    } = room;

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const updatedRoom = {
            title: formData.get("title"),
            description: formData.get("description"),
            imageUrl: [formData.get("imageURL")],
            pricePerHour: parseFloat(formData.get("rate")),
            floor: formData.get("floor"),
            capacity: parseInt(formData.get("capacity")),
            amenities: formData.getAll("amenities"),
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedRoom)
        });

        const data = await res.json();

        if (data.modifiedCount > 0) {
            toast.success("Successfully Updated Room");
            closeBtnRef.current?.click();
            router.refresh();
        }
    };

    return (
        <Modal>
            <Modal.Trigger>
                <Button variant="secondary">Edit</Button>
            </Modal.Trigger>

            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-2xl">
                        <Modal.CloseTrigger ref={closeBtnRef} className="hidden" />

                        <form
                            onSubmit={onSubmit}
                            className="bg-white rounded-2xl p-8 flex flex-col gap-6"
                        >
                            {/* ...same fields as before... */}
                            <div>
                                <label className="block font-semibold text-gray-900 mb-2">Room Name</label>
                                <input
                                    name="title"
                                    defaultValue={title}
                                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 outline-none focus:border-green-700"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold text-gray-900 mb-2">Description</label>
                                <textarea
                                    name="description"
                                    defaultValue={description}
                                    rows={4}
                                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 outline-none focus:border-green-700 resize-y"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold text-gray-900 mb-2">Image URL</label>
                                <input
                                    name="imageURL"
                                    defaultValue={imageUrl?.[0]}
                                    placeholder="https://..."
                                    className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 outline-none focus:border-green-700"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block font-semibold text-gray-900 mb-2">Floor</label>
                                    <input
                                        name="floor"
                                        defaultValue={floor}
                                        placeholder="e.g. 3rd Floor"
                                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 outline-none focus:border-green-700"
                                    />
                                </div>

                                <div>
                                    <label className="block font-semibold text-gray-900 mb-2">Capacity</label>
                                    <input
                                        type="number"
                                        name="capacity"
                                        defaultValue={capacity}
                                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 outline-none focus:border-green-700"
                                    />
                                </div>

                                <div>
                                    <label className="block font-semibold text-gray-900 mb-2">Hourly Rate ($)</label>
                                    <input
                                        type="number"
                                        name="rate"
                                        step="0.01"
                                        defaultValue={pricePerHour}
                                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 outline-none focus:border-green-700"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block font-semibold text-gray-900 mb-3">Amenities</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {amenitiesList.map((amenity) => (
                                        <label
                                            key={amenity}
                                            className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-50"
                                        >
                                            <input
                                                type="checkbox"
                                                value={amenity}
                                                name="amenities"
                                                defaultChecked={amenities?.includes(amenity)}
                                                className="accent-green-800"
                                            />
                                            {amenity}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-fit bg-black hover:shadow-2xl text-white font-semibold px-6 py-3 rounded-lg"
                            >
                                Save Changes
                            </button>
                        </form>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditForm;