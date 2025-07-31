export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-b from-white to-gray-300 "
    >
      <div
        className="container mx-auto max-w-4xl text-center bg-white shadow-xl rounded-xl p-10 md:p-16 transition hover:shadow-2xl"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-cyan-600">About Us</h2>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          <strong className="text-cyan-700">Vromon</strong> is your trusted companion for discovering the
          unexplored corners of the world. Whether you're planning a solo adventure, a family vacation, or a
          weekend getaway — Vromon connects you with destinations that offer authentic and unforgettable
          experiences.
        </p>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          We believe that travel isn't just about going places — it's about discovering yourself along the
          way. That's why we handpick unique destinations, local stories, and meaningful guides to help you
          explore more deeply and responsibly.
        </p>

        <p className="text-xl font-semibold text-gray-800">
          🌍 Join the Vromon journey today — and let's uncover the hidden gems of the world, one corner at a
          time.
        </p>
      </div>
    </section>
  );
}
