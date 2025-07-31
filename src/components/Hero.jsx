export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/img/background1.jpg')" }}
    >
      <div className="bg-black/50 absolute inset-0"></div>
      <div
        className="relative z-10 text-cyan-300"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-cyan-400">Vromon</span>
        </h1>
        <p className="text-xl md:text-2xl mb-6">
           Discover the World with <span className="text-cyan-400">Vromon</span>
        </p>
        <a
          href="#dd"
          className="px-6 py-3 border border-cyan-400 text-cyan-300 rounded-lg hover:bg-cyan-400 hover:text-black transition"
        >
          Explore!!!
        </a>
      </div>
    </section>
  );
}

