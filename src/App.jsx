
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Categories from "./components/Categories.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="bg-black px-4 py-2 text-center text-sm text-white">
        Welcome to AutoPro — Quality Parts, Reliable Performance!
      </div>

      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
