import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
 
  
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Classic T-Shirt', image: '/Image/T-shirt.png', price: '5000 Frw', description: 'A comfortable and stylish T-shirt for everyday wear.' },
    { id: 2, name: 'Smile Oil', image: '/Image/body oil.png', price: '10000 Frw', description: 'Natural body oil for smooth and glowing skin.' },
    { id: 3, name: 'Running Shoes', image: '/Image/running shoes.png', price: '15000 Frw', description: 'Lightweight running shoes for daily workouts.' },
    { id: 4, name: 'Leather Jacket', image: '/Image/jacket.png', price: '25000 Frw', description: 'Stylish leather jacket for a classic look.' },
  ];


  const product = products.find(p => p.id === Number(id));

  if (product === undefined) {
    return (
      <div className="text-center mt-10 text-red-500 text-2xl font-bold">
        Product not found
      </div>
    );
  }

  const handleAddToCart = () => {
    alert(`${product.name} added to cart!`);
    navigate('/');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl p-8 text-center">
        
        <img
          src={product.image}
          alt={product.name}
          className="w-72 h-72 object-cover mx-auto rounded-xl"
        />

        <h2 className="text-3xl font-bold mt-4 text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-2xl font-semibold text-green-700 mt-3">{product.price}</p>

        <button
          onClick={handleAddToCart}
          className="mt-5 bg-blue-500 text-white px-8 py-2 rounded-full font-bold hover:bg-blue-600 transition"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
