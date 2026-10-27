
function Footer() {
  return (
    <footer id="contact" className="bg-black px-6 py-10 text-white md:px-12">
      <h2 className="mb-3 text-2xl font-bold">
        AutoPro<span className="text-fuchsia-500">.</span>
      </h2>

      <p className="mb-4 text-gray-300">
        Your trusted destination for quality car spare parts.
      </p>

      <p className="text-sm text-gray-400">
        Contact us: support@autopro.com
      </p>

      <p className="mt-6 border-t border-gray-700 pt-5 text-sm text-gray-400">
        © {new Date().getFullYear()} AutoPro. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
