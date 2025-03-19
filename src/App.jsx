import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal"; 

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-200 text-black"}`}> 
      <Header />
      
      
      <div className="flex justify-center mt-10"> 
        <motion.img 
          src="/images/carritofuego.png" 
          alt="Carrito en llamas" 
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl shadow-lg" 
          animate={{ 
            y: [0, -15, -30, -15, 0], 
            x: [0, 15, 30, 15, 0] 
          }}  
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          whileHover={{ scale: 1.1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }} 
        />
      </div>
      
      <CartModal /> 
      <main className="max-w-6xl mx-auto p-5">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default App;