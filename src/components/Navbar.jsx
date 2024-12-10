import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-3 flex justify-between items-center shadow-lg">
      {/* Logo Section */}
      <a href="#" className="flex gap-2 items-center flex-1">
        <img
          src="/assets/asset-0.png"
          alt="Logo"
          className="object-cover max-w-12 max-h-12"
        />
        <span className="text-lg font-medium">ToDesktop</span>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-12 ">
        <a href="#" className="font-medium hover:text-purple-700">
          Pricing
        </a>
        <a href="#" className="font-medium hover:text-purple-700">
          Docs
        </a>
        <a href="#" className="font-medium hover:text-purple-700">
          Changelog
        </a>
        <a href="#" className="font-medium hover:text-purple-700">
          Blog
        </a>
        <a href="#" className="font-medium hover:text-purple-700">
          Login
        </a>
      </div>
      <div className="flex-1 hidden lg:flex justify-end">
        <button className="flex gap-3 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-700">
          <img src="/assets/asset-1.svg" alt="Logo" />
          <span>React Developers</span>
          <FaArrowRightLong />
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-olive-400 hover:text-olive-600 transition focus:outline-none"
        >
          {isOpen ? (
            <FiX size={24} />
          ) : (
            <FiMenu size={24} className="text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white fixed inset-0 p-3 z-10 flex flex-col items-start space-y-4 shadow-lg">
          {/* Close Button */}
          <div className="w-full flex justify-between items-center">
            <a href="#" className="flex gap-2 items-center">
              <img
                src="/assets/asset-0.png"
                alt="Logo"
                className="object-cover max-w-12 max-h-12"
              />
              <span className="text-lg font-medium">ToDesktop</span>
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 focus:outline-none"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <a
            href="#"
            className="rounded-md font-base w-full px-2 py-2 text-left hover:bg-gray-100 hover:text-purple-700 transition"
          >
            Pricing
          </a>
          <a
            href="#"
            className="rounded-md font-base w-full px-2 py-2 text-left hover:bg-gray-100 hover:text-purple-700 transition"
          >
            Docs
          </a>
          <a
            href="#"
            className="rounded-md font-base w-full px-2 py-2 text-left hover:bg-gray-100 hover:text-purple-700 transition"
          >
            Changelog
          </a>
          <a
            href="#"
            className="rounded-md font-base w-full px-2 py-2 text-left hover:bg-gray-100 hover:text-purple-700 transition"
          >
            Blog
          </a>
          <a
            href="#"
            className="rounded-md font-base w-full px-2 py-2 text-left hover:bg-gray-100 hover:text-purple-700 transition"
          >
            Login
          </a>
          <div className="h-[1px] w-full bg-gray-300"></div>
          <button className="w-full flex gap-3 items-center px-6 py-4 rounded-lg hover:border-none hover:bg-gray-100">
            <img src="/assets/asset-1.svg" alt="Logo" />
            <span>React Developers</span>
          </button>
        </div>
      )}
    </nav>
  );
};
