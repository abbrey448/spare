
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from("products")
        .select("id, name, category, description, price, image_url, stock")
        .order("id", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    }

    fetchProducts();
  }, []);

  return (
    <section id="products" className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-black">
          Featured Products
        </h2>

        {loading && <p>Loading products...</p>}

        {error && (
          <p className="text-red-600">
            Could not load products: {error}
          </p>
        )}

        {!loading && !error && products.length === 0 && (
          <p>No products available yet.</p>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <img
                src={product.image_url || "https://placehold.co/500x350?text=AutoPro"}
                alt={product.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <p className="mb-2 text-sm text-pink-600">
                  {product.category}
                </p>

                <h3 className="text-lg font-bold text-black">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {product.description}
                </p>

                <p className="mt-3 font-bold text-pink-600">
                  KSh {Number(product.price).toLocaleString("en-KE")}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;

