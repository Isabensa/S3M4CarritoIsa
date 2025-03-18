import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal"; // ✅ Importamos el modal del carrito

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <Header />
      <CartModal /> {/* ✅ Agregamos el modal del carrito para que se muestre en toda la app */}
      <main className="max-w-6xl mx-auto p-5">
        <ProductList />
        <Cart />
      </main>
      <Footer />
    </div>
  );
}

export default App;