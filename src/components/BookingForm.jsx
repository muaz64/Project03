import { useState } from "react";

export default function BookingForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    alert("Trip booked successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Book Your Trip</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-2 rounded"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-2 rounded"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            className="w-full border border-gray-300 p-2 rounded"
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            className="w-full border border-gray-300 p-2 rounded"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}
