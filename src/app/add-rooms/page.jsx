"use client";

const amenitiesList = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
];

const AddRoomForm = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newRoom = Object.fromEntries(formData.entries());
        newRoom.amenities = formData.getAll("amenities");

        // console.log(newRoom);

        const res = await fetch("http://localhost:5000/rooms", {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newRoom)
        })

        const data = await res.json();

        console.log(data);
    };

    return (
        <div className="max-w-3xl mx-auto my-10 px-4">
            <h1 className="text-4xl font-serif font-bold text-gray-900">
                Add a New Room
            </h1>
            <p className="text-gray-500 mt-2">
                Share your study room with others. You can edit or remove it any time.
            </p>

            <form
                onSubmit={onSubmit}
                className="bg-white rounded-2xl p-8 mt-6 flex flex-col gap-6 shadow-2xl"
            >
                <div>
                    <label className="block font-semibold text-gray-900 mb-2">Room Name</label>
                    <input
                        name="name"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 outline-none focus:border-green-700"
                    />
                </div>

                <div>
                    <label className="block font-semibold text-gray-900 mb-2">Description</label>
                    <textarea
                        name="description"
                        rows={4}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 outline-none focus:border-green-700 resize-y"
                    />
                </div>

                <div>
                    <label className="block font-semibold text-gray-900 mb-2">Image URL</label>
                    <input
                        name="image"
                        placeholder="https://..."
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 outline-none focus:border-green-700"
                    />
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block font-semibold text-gray-900 mb-2">Floor</label>
                        <input
                            name="floor"
                            placeholder="e.g. 3rd Floor"
                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 outline-none focus:border-green-700"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold text-gray-900 mb-2">Capacity</label>
                        <input
                            type="number"
                            name="capacity"
                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 outline-none focus:border-green-700"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold text-gray-900 mb-2">Hourly Rate ($)</label>
                        <input
                            type="number"
                            name="rate"
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
                    Publish Room
                </button>
            </form>
        </div>
    );
};

export default AddRoomForm;