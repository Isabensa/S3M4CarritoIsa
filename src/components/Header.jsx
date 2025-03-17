import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeButton from "./ThemeButton"; // ✅ Importación corregida

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`p-5 shadow-md ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">🛒 Carrito de Compras</h1>
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
