import React from "react";
import {
  FaCheck,
  FaCode,
  FaDesktop,
  FaDownload,
  FaLaptopCode,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import { IoInfiniteOutline } from "react-icons/io5";
import { testimonialsData } from "../utils/testimonials";
import { FaCog } from "react-icons/fa";

export const Testimonials = () => {
  const iconMap = {
    FaCode,
    FaWandMagicSparkles,
    IoInfiniteOutline,
    FaLaptopCode,
    FaDesktop,
    FaCog,
  };

  return (
    <div className="px-6 py-12 mx-auto max-w-7xl mt-16 text-left lg:px-8 lg:mt-16">
      <h2 className="text-5xl mb-14 sm:font-semibold">Cutomer stories</h2>
      <div className="rounded-xl border flex flex-col lg:flex-row items-start bg-slate-50">
        {/*Left Part */}
        <div className="flex flex-col gap-8 p-8 ">
          <div className="h-4 w-fit">
            <img
              src="/tailwind-landing-page/assets/asset 44.svg"
              alt="testimonial_page_photo"
            />
          </div>
          <h3 className="text-xl leading-relaxed">
            ClickUp used ToDesktop to get their desktop app in front of
            customers in days instead of months.
          </h3>

          {/*Tag Container */}
          <div className="flex gap-3 flex-wrap">
            <div className="flex items-center justify-center gap-2 bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
              <FaCheck />
              <span className="font-medium">Chromeless UI</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
              <FaCheck />
              <span className="font-medium">Native spellcheck</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
              <FaCheck />
              <span className="font-medium">Task time in menubar</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
              <FaCheck />
              <span className="font-medium">
                Notification count in the dock
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
              <FaCheck />
              <span className="font-medium">Global hotkey to create task</span>
            </div>
          </div>

          <p className="text-lg font-light text-gray-500">
            " ToDesktop provided us with a{" "}
            <span className="text-black">polished desktop app</span> in no time.
            Their expert team guided us through a smooth migration from our
            outdated legacy desktop app, enabling us to deliver{" "}
            <span className="text-black">new and improved features</span> to our
            customers within days."
          </p>

          {/*User card */}
          <div className="flex gap-4 ">
            <div className="w-12">
              <img
                src="assets/asset-45.jpeg"
                alt="User_Photo"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-medium">Zeb Evans</h2>
              <p className="text-gray-500">
                Founder & CEO,
                <span className="mx-2 border-b-2 border-dotted border-gray-200 hover:border-solid hover:border-b-gray-400 ">
                  ClickUp
                </span>
              </p>
            </div>
          </div>
        </div>

        {/*Right Part */}
        <div>
          <img
            src="/tailwind-landing-page/assets/asset-46.png"
            alt="Testimonial_Image"
            className="md:pt-12 pl-12"
          />
        </div>
      </div>

      {/*Testimonial Part-2 */}
      <div className="grid grid-cols-1 justify-between gap-10 mt-16 lg:grid-cols-3">
        {testimonialsData.map((testimonial, index) => {
          const Icon = iconMap[testimonial.icon];
          return (
            <div
              key={index}
              className="rounded-2xl bg-gray-200 p-[1px] hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200  group"
            >
              <div className="bg-gradient-to-br from-slate-50 to-slate-200 rounded-2xl h-full flex flex-col p-6 gap-6 group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 lg:gap-10 lg:p-10">
                {/* Header Section */}
                <div className="flex items-center gap-6 lg:gap-10 lg:flex-col lg:items-start">
                  <div
                    className={`w-12 h-12 ${testimonial.iconBg} rounded-full flex items-center justify-center`}
                  >
                    {Icon && <Icon className="text-gray-600 w-6 h-6" />}
                  </div>
                  <h3 className="text-2xl font-semibold">
                    {testimonial.title}
                  </h3>
                </div>
                {/* Text Content */}
                <p className="text-base font-light leading-relaxed text-justify text-gray-900">
                  {testimonial.description}
                </p>
                {/* Footer Section */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden rounded-full border border-white">
                    <img
                      src={testimonial.userImage}
                      alt={testimonial.userName}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.userName}</div>
                    <a
                      href={testimonial.userLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 border-b border-dotted border-gray-400 hover:border-solid hover:border-gray-500"
                    >
                      {testimonial.userCompany}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative rounded-xl mt-16 bg-black bg-no-repeat bg-cover bg-center flex flex-col pt-6 lg:flex-row lg:pt-8 bg-blend-lighten">
        <div className="absolute inset-0 bg-[url('/tailwind-landing-page/assets/asset33.svg')] bg-cover bg-center opacity-50 z-0"></div>

        {/* Left Part */}
        <div className="relative z-10 px-8 pt-12 pb-12 lg:flex-1 lg:px-16 lg:py-16 xl:px-20 xl:py-20">
          <div className="self-center">
            <span className="uppercase text-md mb-3 block font-medium tracking-wide text-gray-400">
              Ready to start building?
            </span>
            <h2 className="text-4xl font-semibold leading-snug tracking-tight text-white sm:text-5xl">
              Create your desktop app for free
              <sup className="ml-1 text-2xl">*</sup>
            </h2>
            <p className="mt-6 text-lg leading-6 text-gray-400">
              ToDesktop Builder will take you step-by-step through the process
              of creating your first desktop app in just a few minutes.
            </p>
            <button className="z-10 mt-12 inline-flex items-center gap-4 rounded-lg border border-transparent bg-[#3238f2] px-5 py-3 font-medium text-lg text-white duration-200 ease-in-out hover:bg-opacity-90">
              <FaDownload />
              <span>Download ToDesktop Builder</span>
            </button>
            <p className="mt-6 text-xs italic text-gray-400">
              <sup>*</sup>You can create a desktop app and run it on your
              computer for free. You will only be charged if you want to create
              a distributable app for your customers.
            </p>
          </div>
        </div>

        {/* Right Part */}
        <div className="lg:w-1/2 flex items-end">
          <img
            src="/tailwind-landing-page/assets/asset-53.png"
            alt="Testimonial_Image"
            className="pl-12 lg:pt-12"
          />
        </div>
      </div>
    </div>
  );
};
