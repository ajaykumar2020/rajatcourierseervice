import React from "react";
import { Mail, Phone } from "lucide-react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center px-20 py-0">
        {/* Logo section */}

        <div className="flex items-center space-x-2 py-10">
          <h1 className="text-3xl font-bold text-black">
            Rajat
            <span className="text-[rgb(57,197,206)] ml-1">Courier</span>
            <span className="text-black ml-1">Service</span>
          </h1>
        </div>

        <nav className="flex space-x-8 text-gray-700 font-medium">
          {/* Add navigation links here */}
        </nav>

        <div className="flex space-x-4 items-center">
          <Phone className="w-5 h-5 text-teal-900" />
          <h1>8650779013</h1>
          <Mail className="w-5 h-5 text-teal-900" />
          <h1>rs4610914@gmail.com</h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
