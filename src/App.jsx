import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <Header />
      <main className="max-w-6xl mx-auto p-5">
        <ProductList />
        <Cart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
