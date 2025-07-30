export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-xl font-semibold">📍 Address</p>
            <p>123 Street, City, Country</p>
          </div>
          <div>
            <p className="text-xl font-semibold">📧 Email</p>
            <p>info@example.com</p>
          </div>
          <div>
            <p className="text-xl font-semibold">📞 Phone</p>
            <p>+123 456 7890</p>
          </div>
        </div>
      </div>
    </section>
  );
}
