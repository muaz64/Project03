export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-100 to-white text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-cyan-600">Contact Us</h2>

        {/* Side-by-side layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info Cards */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition text-center">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Address</h3>
              <p className="text-gray-600">Muradpur, Chattogram, Bangladesh</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition text-center">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Email</h3>
              <p className="text-gray-600">officialvromon@gmail.com</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition text-center">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Phone</h3>
              <p className="text-gray-600">+123 456 7890</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-950 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-center mb-6 text-white">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-left mb-1 font-medium text-white">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <label className="block text-left mb-1 font-medium text-white">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <label className="block text-left mb-1 font-medium text-white">Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-cyan-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-cyan-600 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
