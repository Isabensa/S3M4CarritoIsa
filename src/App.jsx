import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`p-5 min-h-screen ${theme === "dark" ? "bg-background text-text" : "bg-cardBg text-primary"}`}>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">🛒 Carrito de Compras</h1>
        <button
          onClick={toggleTheme}
          className="bg-button text-white px-4 py-2 rounded-lg hover:bg-buttonHover"
        >
          {theme === "dark" ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}
        </button>
      </div>
      
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
