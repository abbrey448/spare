
function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 border-b px-6 py-5">
      <h1 className="text-3xl font-bold text-fuchsia-600">
        AutoPro<span className="text-black">.</span>
      </h1>

      <div className="flex gap-5 font-medium">
        <a href="#home" className="hover:text-fuchsia-600">Home</a>
        <a href="#categories" className="hover:text-fuchsia-600">Categories</a>
        <a href="#products" className="hover:text-fuchsia-600">Products</a>
        <a href="#contact" className="hover:text-fuchsia-600">Contact</a>
      </div>

      <button className="rounded-lg bg-fuchsia-600 px-5 py-2 text-white">
        Login
      </button>
    </nav>
  );
}

export default Navbar;
