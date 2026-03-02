import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-900 text-white">

      
      <div className="flex items-center justify-between px-6 py-2 border-b border-blue-700">

       
        <div className="flex items-center gap-3">
          <img
            src="/Image/logo.png"
            alt="logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-lg font-semibold">Trading Online</h1>
        </div>

        
        <div className="flex items-center gap-6">

         
          <a
            href="https://www.google.com/maps?q=Kigali,Rwanda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-200 transition"
          >
            <img src="/Image/location.png" alt="location" className="w-6 h-6" />
            <p className="text-sm font-medium">Location</p>
          </a>
    <a href="tel:0793679835" className="flex items-center gap-2 hover:text-gray-200">
     <img src="/Image/calling.png" alt="calling" className="w-6 h-6"/>
    <p className="text-sm font-medium">
    Call: <span>0793679835</span>
  </p>
</a>
         
         

        </div>
      </div>

      
      <div className="flex justify-center p-4 bg-blue-800">
        <ul className="flex gap-6 font-semibold text-lg">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/welcome" className="hover:text-gray-200">Welcome</Link></li>
          <li><Link to="/project" className="hover:text-gray-200">Project</Link></li>
          <li><Link to="/product" className="hover:text-gray-200">Product</Link></li>
          <li><Link to="/payment" className="hover:text-gray-200">Payment</Link></li>
          <li><Link to="/productDetail" className="hover:text-gray-200">ProductDetail</Link></li>
          <li><Link to="/productsDetails" className="hover:text-gray-200">ProductsDetails</Link></li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
