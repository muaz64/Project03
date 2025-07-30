export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 py-6 text-center text-white">
      <h2 className="text-lg font-bold mb-4">Thank You for your TOUR</h2>
      <div className="flex justify-center gap-6">
        <a
          href="https://www.facebook.com/profile.php?id=61551813943007"
          className="grayscale-filter"
        >
          <img
            src="https://img.icons8.com/bubbles/100/000000/facebook-new.png"
            className="w-12"
            alt="Facebook"
          />
        </a>
        <a href="#" className="grayscale-filter">
          <img
            src="https://img.icons8.com/bubbles/100/000000/instagram-new.png"
            className="w-12"
            alt="Instagram"
          />
        </a>
        <a href="#" className="grayscale-filter">
          <img
            src="https://img.icons8.com/bubbles/100/000000/behance.png"
            className="w-12"
            alt="Behance"
          />
        </a>
      </div>
    </footer>
  );
}
