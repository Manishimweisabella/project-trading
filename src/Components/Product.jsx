


const Product = () => {
  const products = [
    {
      id: 1,
      name: 'Classic T-Shirt',
      image: '/Image/T-shirt.png', 
      price: '10000 frw',
    },
    {
      id: 2,
      name: 'body Oil',
      image:'/Image/body oil.png',
      price: '10000 frw',
    },
    {
      id: 3,
      name: 'Running Shoes',
      image: '/Image/running shoes.png',
      price: '15000 frw',
    },
    {
      id: 4,
      name: 'Leather Jacket',
      image: '/Image/jackect.png/',
      price: '25000frw',
    },
  ];

  return (
    <div className="bg-slate-200 min-h-screen py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        🛍️ Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mt-1">{product.price}</p>
              <button className="mt-3 bg-green-500 text-white px-8 py-2 rounded-full font-bold hover:bg-blue-600 transition">
                add Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;


