import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-gray-800 text-white rounded-2xl p-5 shadow-lg transition-transform transform hover:scale-105"> 
      <div className="w-full h-60 overflow-hidden rounded-xl"> 
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-300 text-lg">${product.price.toLocaleString()}</p> 
      </div>
      <button
        className="mt-4 bg-[#556B2F] text-white px-6 py-3 rounded-lg w-full hover:bg-[#6B8E23] transition-all border border-black shadow-md transform hover:scale-105"
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
