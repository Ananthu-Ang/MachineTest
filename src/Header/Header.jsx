import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/Layer_1.png";

function Header() {
  return (
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex-shrink-0">
        <button className="text-black">
          <img src={logo} alt="logo" className="w-40 h-20 hover:scale-105" />
        </button>
      </div>

      <div className="flex justify-center items-center space-x-8 flex-grow ml-8">
        <Link className="hover:text-orange-600">Home</Link>
        <span className="text-black">•</span>
        <Link className="hover:text-orange-600">About Us</Link>
        <span className="text-black">•</span>
        <Link className="hover:text-orange-600">Services</Link>
        <span className="text-black">•</span>
        <Link className="hover:text-orange-600">Gallery</Link>
        <span className="text-black">•</span>
        <Link className="hover:text-orange-600">Promotion</Link>
        <span className="text-black">•</span>
        <Link className="hover:text-orange-600">Blogs</Link>
        <span className="text-black">•</span>
        <Link className="hover:text-orange-600">Contact Us</Link>
      </div>

      <button className="px-8 py-2 bg-orange-500 text-white rounded-md hover:bg-blue-600">
        Appointment
      </button>
    </div>
  );
}

export default Header;
