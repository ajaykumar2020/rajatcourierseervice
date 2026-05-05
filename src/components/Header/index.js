import React from "react";
import { Mail, Phone } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="w-full shadow-md bg-white">

      {/* Top Bar */}
      <div className="bg-teal-700 text-white text-sm px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>8650779013</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>rs4610914@gmail.com</span>
          </div>
        </div>
        <div className="hidden md:block">
          🚚 Fast & Reliable Courier Service
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-6 md:px-16 py-4">

        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          {/* <img
            src={logo}
            alt="Rajat Courier Logo"
            className="w-10 h-10 object-contain"
          /> */}
          <h1 className="text-xl md:text-2xl font-bold text-black">
            Rajat
            <span className="text-[rgb(57,197,206)] ml-1">Courier</span>
            <span className="ml-1">Service</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-teal-700">Home</Link>
          <Link to="/services" className="hover:text-teal-700">Services</Link>
          <Link to="/tracking" className="hover:text-teal-700">Tracking</Link>
          <Link to="/about" className="hover:text-teal-700">About</Link>
          <Link to="/contact" className="hover:text-teal-700">Contact</Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 border border-teal-700 text-teal-700 rounded-lg hover:bg-teal-50">
            Track
          </button>
          <button className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;