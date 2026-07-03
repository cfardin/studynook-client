import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
    return (
        <div className="md:container mx-auto my-10">
            <div className="bg-black rounded-4xl p-16 flex items-center justify-between gap-10">
                <div className="max-w-xl">
                    <span className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full">
                        Quiet rooms, on demand
                    </span>

                    <h1 className="text-5xl font-serif font-bold mt-6 text-white leading-tight">
                        Find Your Perfect <span className="text-orange-400">Study Room</span>
                    </h1>

                    <p className="text-white/70 mt-4 text-lg">
                        Browse and book quiet, private study rooms in your library
                        by the hour. List your own room and earn — without the
                        scheduling headaches.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <Link
                            href={"/all-rooms"}
                            className="bg-orange-400 border-none text-white font-bold p-3 rounded-md"
                        >
                            Explore Rooms →
                        </Link>

                        <Link
                            href={"/get-started"}
                            className="bg-orange-400 text-white font-bold p-3 rounded-md"
                        >
                            Get Started
                        </Link>
                    </div>

                    <div className="flex gap-10 mt-10 text-white">
                        <div>
                            <p className="text-2xl font-bold">120+</p>
                            <p className="text-white/60 text-sm">Rooms listed</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">8K</p>
                            <p className="text-white/60 text-sm">Hours booked</p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <Image
                        src="https://www.london.ac.uk/sites/default/files/2020-05/library%20study%20spaces.jpg"
                        alt="study room"
                        width={650}
                        height={450}
                        className="rounded-2xl shadow-xl object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;