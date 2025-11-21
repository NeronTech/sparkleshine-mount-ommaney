'use client';
import React, { useState } from "react";
import { RiMenuLine } from "react-icons/ri";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 bg-white shadow">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <img
            src="https://static.readdy.ai/image/07256f542ea79a1874b1582d34930508/30f97d89b0b4886ba0233a5da629aa42.png"
            alt="Sparkles Logo"
            className="h-8"
          />
          <span className="font-bold text-lg text-blue-800 italic bname">Sparkleshine Mount Ommaney</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>
          <a href="#services" className="hover:text-blue-600">
            Services
          </a>
          <a href="#booking" className="hover:text-blue-600">
            Book
          </a>
          <a href="#location" className="hover:text-blue-600">
            Location
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-md"
        >
          <RiMenuLine size={24} />
        </button>

        <a
          href="#booking"
          className="btn hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:scale-105"
        >
          Book Now
        </a>

        {mobileOpen && (
          <div className="bg-white md:hidden shadow-md absolute top-full left-0 w-full">
            <ul className="flex flex-col p-4 space-y-2">
              <li>
                <a href="#home" className="block hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#booking" className="block hover:text-blue-600">
                  Book
                </a>
              </li>
              <li>
                <a href="#services" className="block hover:text-blue-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#location" className="block hover:text-blue-600">
                  Location
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
