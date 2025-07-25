import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', price: 4000, profit: 2400 },
  { name: 'Feb', price: 3000, profit: 1398 },
  { name: 'Mar', price: 2000, profit: 9800 },
  { name: 'Apr', price: 2780, profit: 3908 },
  { name: 'May', price: 1890, profit: 4800 },
  { name: 'Jun', price: 2390, profit: 3800 },
  { name: 'Jul', price: 3490, profit: 4300 },
];

const Home = () => {
  return (
    <div>
      <div className="bg-[url('/Image/online.png')] bg-cover bg-no-repeat min-h-screen">
        <h1 className="font-bold text-white text-3xl text-center pt-8">Online Trading</h1>

        <div className="bg-opacity-90 rounded-2xl p-6 shadow-lg mx-20 my-10 text-center">
          <h2 className="font-bold text-2xl text-white">My Target</h2>
          <p className="text-white text-base leading-relaxed mt-4 w-96">
            My platform serves small business owners, online sellers, and everyday shoppers by offering convenience,
            affordability, and broad reach. It helps vendors grow their customer base and buyers
            find trusted products at competitive prices.
          </p>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6">
        <div className="bg-gray-100 bg-opacity-80 rounded-2xl p-6 shadow-lg w-80 text-center">
          <img src="/Image/buying.png" alt="Buying" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="font-bold text-xl mb-2">Buy Products</h2>
          <p className="text-gray-700 mb-4">Browse a variety of products and purchase at competitive prices.</p>
          <p className="text-green-600 font-semibold text-lg">Starting from 10000</p>
        </div>

        <div className="bg-gray-100 bg-opacity-80 rounded-2xl p-6 shadow-lg w-80 text-center">
          <img src="/Image/selling.png" alt="Selling" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="font-bold text-xl mb-2">Sell Products</h2>
          <p className="text-gray-700 mb-4">List your products and reach more buyers instantly.</p>
          <p className="text-blue-600 font-semibold text-lg">No listing fee</p>
        </div>

        <div className="bg-gray-100 bg-opacity-80 rounded-2xl p-6 shadow-lg w-80 text-center">
          <img src="/Image/advertising.png" alt="Advertising" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="font-bold text-xl mb-2">Advertise Products</h2>
          <p className="text-gray-700 mb-4">Promote your products online to reach more customers.</p>
          <p className="text-green-600 font-semibold text-lg">Advertising</p>
        </div>
      </div>

    
      <div className="bg-white bg-opacity-90 rounded-xl p-4 m-4 shadow-xl">
        <h2 className="text-center font-bold text-xl mb-2 text-gray-800">Monthly Price & Profit Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#8884d8" barSize={15} />
            <Bar dataKey="profit" fill="#82ca9d" barSize={15} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Home;
