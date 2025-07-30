import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 text-white backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold">Travel Website</h1>
        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
        {/* Links */}
        <ul className={`lg:flex gap-6 ${open ? "block mt-4" : "hidden"} lg:block`}>
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#dd" className="hover:text-cyan-400">Destinations</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
