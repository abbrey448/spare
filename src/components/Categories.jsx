
const categories = [
  "Brake Systems",
  "Car Batteries",
  "Wheels & Tyres",
  "Car Lighting",
];

function Categories() {
  return (
    <section id="categories" className="px-6 py-12 md:px-12">
      <h2 className="mb-8 text-3xl font-bold">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category}
            className="rounded-xl border border-gray-200 p-6 text-center font-semibold transition hover:border-fuchsia-600 hover:text-fuchsia-600"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
