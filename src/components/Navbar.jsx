import { useState } from "react";
import logo from "../assets/Vromon logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 text-white backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Vromon Logo" className="h-10 w-10 object-cover rounded-full" />
          <h1 className="text-xl font-bold">Vromon</h1>
        </div>

        {/* Mobile Toggle Button */}
        <button className="lg:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Nav Links */}
        <div className={`lg:flex items-center gap-6 ${open ? "block mt-4" : "hidden"} lg:block`}>
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 text-center lg:text-left">
            <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
            <li><a href="#dd" className="hover:text-cyan-400">Destinations</a></li>
            <li><a href="#about" className="hover:text-cyan-400">About Us</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>

          {/* Book Now Button */}
          <a
            href="#book"
            className="mt-4 lg:mt-0 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-5 py-2 rounded-full transition duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}

