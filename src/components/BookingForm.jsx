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
    alert("🎉 Trip booked successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 relative animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
          aria-label="Close form"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-cyan-700 mb-6">
          Book Your Trip
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="destination" className="block mb-1 font-medium text-gray-700">
              Destination
            </label>
            <input
              id="destination"
              type="text"
              name="destination"
              placeholder="Where to?"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="block mb-1 font-medium text-gray-700">
              Travel Date
            </label>
            <input
              id="date"
              type="date"
              name="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white font-semibold py-2 rounded-lg hover:bg-cyan-700 transition duration-200"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}
