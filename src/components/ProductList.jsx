import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 1000, image: "/images/laptop.jpg" },
  { id: 2, name: "Auriculares", price: 200, image: "/images/audifonos.jpg" },
  { id: 3, name: "Mouse", price: 50, image: "/images/mouse.jpg" },
  { id: 4, name: "PC Gamer", price: 1500, image: "/images/pc.jpg" },
  { id: 5, name: "Samsung Galaxy", price: 800, image: "/images/samsung.jpg" },
  { id: 6, name: "Teclado RGB", price: 120, image: "/images/teclado.jpg" },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-white mb-5 flex items-center">
        🛍️ Lista de Productos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-900 text-white rounded-xl p-4 shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-400">${product.price}</p>
            <button
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
              onClick={() => addToCart(product)}
            >
              + Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
