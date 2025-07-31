export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 py-8 text-white text-center">
      {/* Thank You Message */}
      <h2 className="text-2xl font-semibold mb-6">
        Thank You for Your Tour
      </h2>

      {/* Social Icons */}
      <div className="flex justify-center gap-6">
        <a
          href="https://www.facebook.com/profile.php?id=61551813943007"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img
            src="https://img.icons8.com/bubbles/100/000000/facebook-new.png"
            alt="Facebook"
            className="w-12"
          />
        </a>

        <a
          href="#"
          aria-label="Instagram"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img
            src="https://img.icons8.com/bubbles/100/000000/instagram-new.png"
            alt="Instagram"
            className="w-12"
          />
        </a>

        <a
          href="#"
          aria-label="Behance"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img
            src="https://img.icons8.com/bubbles/100/000000/behance.png"
            alt="Behance"
            className="w-12"
          />
        </a>
      </div>

      {/* Bottom Text */}
      <p className="mt-6 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Vromon. All rights reserved.
      </p>
    </footer>
  );
}
