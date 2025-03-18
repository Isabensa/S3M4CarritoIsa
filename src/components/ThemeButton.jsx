import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`p-3 rounded-lg border border-black transition-all shadow-lg transform hover:scale-110 
        ${theme === "dark" ? "bg-black text-white hover:bg-gray-800" : "bg-[#2E8B57] text-white hover:bg-[#3CB371]"}`}
    >
      {theme === "dark" ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}
    </button>
  );
};

export default ThemeButton;
