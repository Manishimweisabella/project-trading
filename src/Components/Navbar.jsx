
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <div className="bg-blue-900 text-white">
  <div className="flex items-center justify-between px-6 py-4 border-b border-blue-700">
    <div className="flex items-center gap-4">
      <img src="public/Image/logo.png" alt="logo" className="w-16 h-16 rounded-full" />
      <div>
        <h1 className="text-xl font-bold">Trading Online</h1>
        <p className="text-sm text-gray-300">Kigali, Rwanda</p>
        <img src="" alt="logo" className="public/Image/location.png-8 h-8" />
      </div>
    </div>
  </div>
  <div className="flex justify-center p-4 bg-blue-800">
        <ul className="flex gap-6 font-semibold text-lg">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/project" className="hover:text-gray-200">Project</Link></li>
          <li><Link to="/product" className="hover:text-gray-200">Product</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
