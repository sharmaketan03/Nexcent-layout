import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between w-[90%] mx-auto py-4">
        
        <div>
          <img src={logo} alt="Logo" className="h-8" />
        </div>

      
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>Home</li>
            <li>Service</li>
            <li>Features</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
        </nav>

       
        <div className="hidden md:flex">
          <button className="mr-4 border border-[#4caf4f] px-4 py-2 rounded text-[#4caf4f] hover:text-white hover:bg-[#4caf4f] transition">
            Login
          </button>
          <button className="bg-[#4caf4f] text-white px-4 py-2 rounded hover:opacity-90 transition">
            Sign up
          </button>
        </div>

        
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

    
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-700 font-medium">
            <li>Home</li>
            <li>Service</li>
            <li>Features</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
            <div className="flex gap-4 mt-4">
              <button className="border border-[#4caf4f] px-4 py-2 rounded text-[#4caf4f] hover:text-white hover:bg-[#4caf4f] transition">
                Login
              </button>
              <button className="bg-[#4caf4f] text-white px-4 py-2 rounded hover:opacity-90 transition">
                Sign up
              </button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
