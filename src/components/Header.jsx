import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";
import ThemeButton from "./ThemeButton";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { totalItems, toggleCart } = useContext(CartContext);

  return (
    <header className="p-5 shadow-md bg-[#556B2F] text-white flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4"> 
      <div className="flex items-center gap-2 sm:gap-3">
        <img src="/images/iconocarrito.jpg" alt="Carrito" className="w-10 h-10 sm:w-12 sm:h-12" /> 
        <h1 className="text-lg sm:text-2xl font-bold">Carrito de Compras</h1> 
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeButton />
        <button 
          className="p-3 rounded-lg border border-black transition-all shadow-lg transform hover:scale-110 
          bg-[#2E8B57] text-white hover:bg-[#3CB371]"
          onClick={toggleCart}>
          🛍️ Ver Carrito ({totalItems})
        </button>
      </div>
    </header>
  );
};

export default Header;
