import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const CartModal = () => {
  const { cart, removeFromCart, isCartOpen, toggleCart, totalPrice } = useContext(CartContext);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isCartOpen) return null;

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      localStorage.removeItem("cart"); 
      window.open("https://www.mercadopago.com.ar", "_blank"); 
      window.location.reload(); 
    }, 500);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800 text-white p-10 rounded-lg shadow-lg w-[500px] max-w-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">🛍️ Mi Carrito</h2>
          <button className="text-gray-400 hover:text-white text-xl" onClick={toggleCart}>✖</button>
        </div>
        <ul className="space-y-3">
          {cart.length > 0 ? (
            cart.map((item) => (
              <li key={item.id} className="flex items-center mb-3 border-b pb-3 gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" /> 
                <div className="flex-1">
                  <span className="text-lg font-bold">{item.name}</span>
                  <p className="text-gray-300">Cantidad: {item.quantity}</p>
                </div>
                <button className="bg-red-500 px-5 py-2 text-white rounded-md hover:bg-red-600" onClick={() => removeFromCart(item.id)}>Quitar</button>
              </li>
            ))
          ) : (
            <p className="text-center text-lg">El carrito está vacío</p>
          )}
        </ul>
        {cart.length > 0 && !isProcessing && (
          <div className="mt-6 text-center">
            <p className="text-xl font-bold mb-4">Total: ${totalPrice.toFixed(2)}</p>
            <button 
              onClick={handlePayment}
              className="bg-blue-500 px-6 py-3 text-white rounded-md hover:bg-blue-600 transition"
            >
              Pagar con Mercado Pago
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
