import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8">
      <div className="flex flex-col border bg-gray-50 rounded-lg  items-center px-8 py-12 gap-8 lg:flex-row-reverse lg:border-none lg:bg-gray-50">
        <a href="#" className="text-base">
          Documentation
        </a>
        <div className="flex gap-6 text-lg">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <FaGithub />
          </a>
        </div>
        <a href="#" className="flex gap-2 items-center flex-1">
          <img
            src="/assets/asset 0.png"
            alt="Logo"
            className="object-cover max-w-12 max-h-12"
          />
          <span className="text-lg font-medium">ToDesktop</span>
        </a>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center my-12">
        <div className="flex gap-2 items-center">
          <img
            src="/assets/asset-54.svg"
            alt="Y-combinator"
            className="w-4 h-4"
          />
          <p className="text-sm text-gray-600">A Y combinator company.</p>
        </div>
        <p className="text-sm text-gray-400">
          © 2024 Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
