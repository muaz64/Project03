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
    <section id="dd" className="py-16 bg-gray-950 text-white ">
      <div className="container mx-auto px-4 m-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-300">
          Popular Destinations
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={dest.img}
                alt={dest.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-cyan-200">{dest.title}</h3>
                <p className="text-gray-400 mb-4">{dest.text}</p>
                <a
                  href={dest.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-cyan-500 text-cyan-300 rounded-lg hover:bg-cyan-400 hover:text-black transition"
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
