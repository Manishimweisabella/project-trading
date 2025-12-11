import { FaGithub, FaFacebook, FaGoogle } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-center py-10">
      <div className="text-sm px-10 font-bold flex flex-col items-center">
        <img
          src="/Image/logo.png"
          alt="Logo"
          className="w-16 h-16 rounded-full mb-4 mt-4"
        />

        <h3 className="text-xl font-semibold text-white">Trading Online</h3>

        <p className="text-gray-300 mt-2">&copy; 2025. All rights reserved.</p>
        <p className="text-gray-300">Created by Manishimwe Isabella</p>

        <div className="flex gap-5 text-white text-2xl mt-4">
          <a
            href="mailto:manishimweisabella@gmail.com"
            className="hover:text-red-400 transition"
          >
            <MdEmail />
          </a>

          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGoogle />
          </a>

          <a
            href="https://github.com/manishimweisabella"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.facebook.com/nickbella.isabella"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
