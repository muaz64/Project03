import { useState } from "react";
import BookingForm from "./BookingForm";
import logo from "../assets/Vromon logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black/50 text-white backdrop-blur-md z-40">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Vromon Logo" className="h-10 w-10 rounded-4xl" />
            <h1 className="text-xl font-bold">Vromon</h1>
          </div>

          <button className="lg:hidden" onClick={() => setOpen(!open)}>☰</button>

          <ul className={`lg:flex gap-6 ${open ? "block mt-4" : "hidden"} lg:block`}>
            <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
            <li><a href="#dd" className="hover:text-cyan-400">Destinations</a></li>
            <li><a href="#about" className="hover:text-cyan-400">About Us</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
            <li>
              <button
                onClick={() => setShowForm(true)}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1 rounded"
              >
                Book Now
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {showForm && <BookingForm onClose={() => setShowForm(false)} />}
    </>
  );
}
