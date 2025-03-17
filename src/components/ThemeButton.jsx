import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}
    </button>
  );
};

export default ThemeButton;
