import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 2500000, image: "/images/laptop.jpg" },
  { id: 2, name: "Auriculares", price: 15000, image: "/images/audifonos.jpg" },
  { id: 3, name: "Mouse", price: 8900, image: "/images/mouse.jpg" },
  { id: 4, name: "PC Gamer", price: 3500000, image: "/images/pc.jpg" },
  { id: 5, name: "Samsung Galaxy", price: 800000, image: "/images/samsung.jpg" },
  { id: 6, name: "Teclado RGB", price: 22000, image: "/images/teclado.jpg" },
];

const ProductList = () => {
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-white mb-5 flex items-center">
        🛍️ Lista de Productos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
