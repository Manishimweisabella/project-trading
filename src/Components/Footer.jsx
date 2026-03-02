import { FaGithub, FaFacebook, FaGoogle } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">

        <img
          src="/Image/logo.png"
          alt="Logo"
          className="w-16 h-16 rounded-full mb-4 object-cover"
        />

        <h3 className="text-xl font-semibold">Trading Online</h3>

        <p className="text-gray-400 mt-2 text-sm">
          &copy; 2025. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm">
          Created by Manishimwe Isabella
        </p>

       
        <div className="flex gap-6 mt-6">

          
          {[
            { icon: <MdEmail />, link: "mailto:manishimweisabella@gmail.com" },
            { icon: <FaGoogle />, link: "https://google.com" },
            { icon: <FaGithub />, link: "https://github.com/manishimweisabella" },
            { icon: <FaFacebook />, link: "https://www.facebook.com/nickbella.isabella" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center 
                         rounded-full bg-blue-600 text-white text-xl
                         hover:bg-blue-500 hover:scale-110 
                         transition duration-300"
            >
              {item.icon}
            </a>
          ))}

        </div>
      </div>
    </footer>
  );
};

export default Footer;