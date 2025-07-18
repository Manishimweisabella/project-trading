
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-blue-900 text-white">
  <div className="flex items-center justify-around px-6 py-4 border-b border-blue-700">
    
   
    <div className="flex items-center gap-4">
      <img src="/Image/logo.png" alt="logo" className="w-12 h-12 rounded-full" />
      <div>
        <h1 className="text-xl font-bold">Trading Online</h1>
      </div>
    </div>

   
    <div className="flex items-center gap-2">
      <img src="/Image/location.png" alt="location" className="w-10 h-10" />
      <p className="text-xl font-bold">Location</p>
    </div>

    
    <div className="flex items-center gap-2">
      <img src="/Image/calling.png" alt="calling" className="w-10 h-10" />
      <h6 className="text-xl font-bold">
        Call: <span>0793679835</span>
      </h6>
    </div>
   </div>
<div className="flex justify-center p-4 bg-blue-800">
        <ul className="flex gap-6 font-semibold text-lg">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/project" className="hover:text-gray-200">Project</Link></li>
          <li><Link to="/product" className="hover:text-gray-200">Product</Link></li>
          <li><Link to="/payment" className="hover:text-gray-200">Payment</Link></li>
        </ul>
      </div>
      </div>
    
  )
}

export default Navbar;
