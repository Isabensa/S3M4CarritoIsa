import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext"; // ✅ Importamos el contexto del carrito
import ThemeButton from "./ThemeButton";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { cart, toggleCart } = useContext(CartContext); // ✅ Obtenemos el carrito y la función para alternar el modal

  return (
    <header className={`p-5 shadow-md ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">🛒 Carrito de Compras</h1>
        <div className="flex items-center gap-4">
          <button 
            className="relative bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600"
            onClick={toggleCart} // ✅ Activamos el modal del carrito al hacer clic
          >
            🛍️ Ver Carrito ({cart.length})
          </button>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;