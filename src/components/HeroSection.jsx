import React from "react";
import { BsFileCode } from "react-icons/bs";
import { FaArrowRightLong, FaHandBackFist } from "react-icons/fa6";
import { MdLaptop } from "react-icons/md";
import { Slider } from "./Slider";

export const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-transparent">
      <div className="max-w-4xl mx-auto px-6 pb-32 pt-6 flex flex-col text-left sm:items-center sm:text-center sm:pt-12">
        <div className="flex my-6 gap-2 items-center bg-yellow-50 border border-yellow-300 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-xl hover:-translate-y-1 transition group">
          <div className="h-2 w-2 rounded-full bg-yellow-400 border border-yellow-600"></div>
          <p className="font-medium text-yellow-600">
            v0.1.1:{" "}
            <span className="text-yellow-800">Find-in-page bug fixes</span>
          </p>
          <FaArrowRightLong className="text-yellow-600 group-hover:translate-x-1 duration-300 transition" />
        </div>

        {/* Feature Section*/}
        <div className="hidden md:flex gap-8 my-6">
          <div className="flex items-center gap-2 justify-center text-gray-500">
            <BsFileCode className="text-sm" />
            <p>Code Optional</p>
          </div>
          <div className="flex items-center gap-2 justify-center text-gray-500">
            <FaHandBackFist className="text-sm" />
            <p>Drag & Drop Builder</p>
          </div>
          <div className="flex items-center gap-2 justify-center text-gray-500">
            <MdLaptop className="text-sm" />
            <p>Windows,Mac,Linux</p>
          </div>
        </div>

        {/* Main section*/}
        <h1 className="text-4xl font-medium mt-4 text-gray-800 leading-snug sm:text-6xl sm:text-black sm:leading-normal">
          Web app to desktop app in minutes
        </h1>
        <p className="text-xl text-gray-800 mt-4 sm:text-2xl sm:mt-8">
          Take your web app codebase and trasform it into a cross platform
          desktop app with native functionality.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 font-semibold rounded-lg text-white bg-[#3238f2] shadow-sm hover:bg-opacity-90">
            Download Now
          </button>
          <button className="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-700">
            Read Docs
          </button>
        </div>
      </div>
      <Slider />
    </div>
  );
};
