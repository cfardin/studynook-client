import { Moon } from "lucide-react";
import { PiBooksFill } from "react-icons/pi";
import Link from "next/link";


const Navbar = () => {
return (
    <nav className="flex items-center justify-between px-6 py-3 shadow container mx-auto border-b">
      <div className="flex items-center gap-2">
        <div className="">
          <PiBooksFill className="" size={30}/>
        </div>
        <span className="text-xl font-bold">StudyNook</span>
      </div>
 
      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/rooms">Rooms</Link>
      </div>
 
      <div className="flex items-center gap-4">
        <Moon size={20} className="cursor-pointer" />
        <Link href="/login">Login</Link>
        <Link
          href="/register"
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;