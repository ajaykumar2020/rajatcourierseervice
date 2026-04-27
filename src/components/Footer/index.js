import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#134e4a] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* 1️⃣ Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Log</h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            We provide reliable and fast logistics and delivery solutions tailored 
            to your business needs. Our mission is to deliver excellence, on time, 
            every time.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><a href="#" className="hover:text-gray-100">Home</a></li>
            <li><a href="#" className="hover:text-gray-100">About Us</a></li>
            <li><a href="#" className="hover:text-gray-100">Services</a></li>
            <li><a href="#" className="hover:text-gray-100">Contact</a></li>
            <li><a href="#" className="hover:text-gray-100">Blog</a></li>
          </ul>
        </div>

        {/* 3️⃣ Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-200 text-sm">
            <li className="flex items-center space-x-2">
              <Phone size={18} />
              <span>+91 8650779013</span>,
              <span>+91 7668254662</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} />
              <span>rs4610914@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin size={18} />
              <span>Shop 2 North South City park near tibetan colony sahastradhara road DehradunIndia</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-600 mt-10 pt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          
          {/* Copyright */}
          <div className="text-sm mb-2 md:mb-0 text-gray-200">
          Copyright © 2024-2025 rajatcourierservice.com. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-2 md:mb-0">
            <a href="#" className="hover:text-gray-100">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-100">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-100">
              <Instagram size={20} />
            </a>
          </div>

          {/* Template Credit */}
          <div className="text-sm text-gray-200">
            Made by{" "}
            <a href="#" className="underline hover:text-gray-100">
              Ankush Saini
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
