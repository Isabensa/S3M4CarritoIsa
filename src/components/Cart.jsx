import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  return (
    <div className="bg-gray-900 text-white p-5 rounded-xl shadow-md mt-8 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        🛒 Carrito de Compras
      </h2>
      {cart.length === 0 ? (
        <p className="text-gray-400">El carrito está vacío</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between bg-gray-800 p-3 rounded-lg shadow">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-400">${item.price} x {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    className="bg-gray-700 text-white px-2 py-1 rounded-lg hover:bg-gray-600"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    ➖
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    className="bg-gray-700 text-white px-2 py-1 rounded-lg hover:bg-gray-600"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    ➕
                  </button>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 ml-3"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold mt-5 text-center">Total: ${totalPrice}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;