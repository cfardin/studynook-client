import Link from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { PiBooksFill } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="bg-gray-900 mt-40 px-auto py-30">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 mb-8 ">
                <div>
                    <h4 className="text-white font-bold text-lg mb-3">
                        <PiBooksFill className="" size={30}/>
                        Study-Nook
                    </h4>
                    <p className="text-gray-300 text-sm">
                        Browse and book quiet, private study rooms in your
                        library by the hour. List your own room and earn —
                        without the scheduling headaches.
                    </p>
                </div>

                <div>
                    <h4 className="text-gray-300 font-bold text-lg mb-3">Navigate</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/all-rooms">All Rooms</Link>
                        </li>
                        <li>
                            <Link href="/profile">My Profile</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-gray-300 font-bold text-lg mb-3">Contact Us</h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                        <li className="flex items-center gap-1">
                            <MdEmail /> studynook@gmail.com
                        </li>
                        <li className="flex items-center gap-1">
                            <FaInstagram /> @studyNook
                        </li>
                        <li className="flex items-center gap-1">
                            <FaFacebookSquare /> @studyNook
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t pt-6 text-center text-gray-400 text-sm">
                © 2026 StudyNook. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
