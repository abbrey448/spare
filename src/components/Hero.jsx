
function Hero() {
  return (
    <section
      id="home"
      className="grid items-center gap-8 bg-gray-100 px-6 py-16 md:grid-cols-2 md:px-12"
    >
      <div>
        <p className="mb-3 font-bold text-fuchsia-600">
          QUALITY CAR SPARE PARTS
        </p>

        <h2 className="mb-5 text-4xl font-extrabold md:text-5xl">
          Find the Right Parts for Your Car
        </h2>

        <p className="mb-6 text-gray-600">
          Shop reliable automotive spare parts at affordable prices.
        </p>

        <a
          href="#products"
          className="inline-block rounded-lg bg-fuchsia-600 px-6 py-3 text-white"
        >
          Shop Now
        </a>
      </div>

      <img
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900"
        alt="Modern car"
        className="h-72 w-full rounded-xl object-cover"
      />
    </section>
  );
}

export default Hero;
