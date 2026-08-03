import Link from "next/link";
import { BookOpen, Home, Search } from "lucide-react";


const notFound = () => {
  return (
      <section className="my-50 bg-gray-900 mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-[2rem] border border-white/10 p-8 text-center shadow-2xl shadow-black/30 backdrop-blur md:p-14">

        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            404
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            This page does not exist
          </p>
        </div>



        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-orange-300"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <Link
            href="/all-rooms"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            <Search size={18} />
            Explore Rooms
          </Link>
        </div>
      </section>
  );
};

export default notFound;