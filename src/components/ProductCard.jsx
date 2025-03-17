import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-gray-900 text-white rounded-xl p-4 shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-400">${product.price}</p>
      <button
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
        onClick={() => addToCart(product)}
      >
        + Agregar al Carrito
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
