const destinations = [
  {
    title: "Destination 1",
    text: "Nilgiri Hill, Bandarban",
    img: "/img/destination1.jpg",
    link: "https://bn.wikivoyage.org/wiki/নীলগিরি",
  },
  {
    title: "Destination 2",
    text: "Cheradip, Saint-Martin",
    img: "/img/destination2.jpg",
    link: "https://en.wikipedia.org/wiki/Chhera_Island",
  },
  {
    title: "Destination 3",
    text: "Jaduakata River, Sunamganj",
    img: "/img/destination3.jpeg",
    link: "https://bn.wikipedia.org/wiki/যাদুকাটা_নদী",
  },
];

export default function Destinations() {
  return (
    <section id="dd" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Destinations</h2>
        <div className="space-y-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-[1.02] transition"
            >
              <img src={dest.img} alt={dest.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{dest.title}</h3>
                <p className="text-gray-300 mb-4">{dest.text}</p>
                <a
                  href={dest.link}
                  target="_blank"
                  className="inline-block px-4 py-2 border border-cyan-400 text-cyan-300 rounded hover:bg-cyan-400 hover:text-black transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
