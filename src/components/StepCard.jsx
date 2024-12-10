import React from "react";
import { FaCheck } from "react-icons/fa6";
import { HiRocketLaunch } from "react-icons/hi2";
import { TiTick } from "react-icons/ti";

export const StepCard = () => {
  return (
    <div className="flex flex-col gap-6 px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 text-left">
      <h2 className="text-5xl sm:font-semibold mb-14">How it Works</h2>

      {/*Step-1*/}
      <div className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row bg-slate-50">
        {/*Left Side */}
        <div className="flex flex-col gap-6 lg:w-1/2 ">
          <span className="border border-yellow-300 bg-yellow-50  text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium">
            step 1
          </span>
          <h3 className="text-4xl">Bootstrap straight from your web app</h3>
          <p className="text-lg font-light">
            Copy and paste your web app url into ToDesktop. Customise your app
            design, app icon and window frame UI with no code.
          </p>
          <ul className="grid grid-cols-2 gap-3">
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a
                href="#"
                className="font-normal border-b border-black border-opacity-30 hover:border-opacity-90"
              >
                Multiple Windows
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a
                href="#"
                className="font-normal border-b border-black border-opacity-30 hover:border-opacity-90"
              >
                Customisable menus
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a
                href="#"
                className="font-normal border-b border-black border-opacity-30 hover:border-opacity-90"
              >
                Menubar/tray menus
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a
                href="#"
                className="font-normal border-b border-black border-opacity-30 hover:border-opacity-90"
              >
                Launch on startup
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a href="#" className="font-normal">
                Offline support
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a href="#" className="font-normal">
                Tabs (Mac only)
              </a>
            </li>
          </ul>
        </div>

        {/*Right Side */}
        <div className="pt-12 lg:pl-10">
          <img src="/assets/asset 66.svg" alt="Picture" />
        </div>
      </div>

      {/*Step-2*/}
      <div className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row bg-slate-50">
        {/*Left Side */}
        <div className="flex flex-col gap-6 lg:w-1/2 ">
          <span className="border border-yellow-300 bg-yellow-50  text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium">
            step 2
          </span>
          <h3 className="text-4xl">
            Add desktop code to customise your web app
          </h3>
          <p className="text-lg font-light">
            No need to create a new repository, just add code from our desktop
            APIs to your codebase and get access to system level functionality.
          </p>
          <ul className="grid grid-cols-2 gap-3">
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a
                href="#"
                className="font-normal border-b border-black border-opacity-30 hover:border-opacity-90"
              >
                Native notifications
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a
                href="#"
                className="font-normal border-b border-black border-opacity-30 hover:border-opacity-90"
              >
                Global keyboard shortcuts
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a
                href="#"
                className="font-normal border-b border-black border-opacity-30 hover:border-opacity-90"
              >
                Application menu
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a
                href="#"
                className="font-normal border-b border-black border-opacity-30 hover:border-opacity-90"
              >
                Context menu
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a href="#" className="font-normal">
                Dock/Icon
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a href="#" className="font-normal">
                Isolated browser views
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a href="#" className="font-normal">
                File system access
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a href="#" className="font-normal">
                …plus more APIs in our docs
              </a>
            </li>
          </ul>
        </div>

        {/*Right Side */}
        <div className="pt-12 lg:pl-10">
          <img src="/assets/asset 66.svg" alt="Picture" />
        </div>
      </div>

      {/*Step-3*/}
      <div className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row bg-slate-50">
        {/*Left Side */}
        <div className="flex flex-col gap-6 lg:w-1/2 ">
          <span className="border border-yellow-300 bg-yellow-50  text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium">
            step 3
          </span>
          <div className="flex items-center gap-2 group w-fit">
            <h3 className="text-4xl">Publish</h3>
            <span>
              <HiRocketLaunch className="text-xl text-gray-500 group-hover:text-red-500 group-hover:scale-110 duration-300 transition" />
            </span>
          </div>
          <p className="text-lg font-light">
            One-click will publish your desktop app to your customers and give
            you a download link to put on your website.
          </p>
          <ul className="grid grid-cols-2 gap-3">
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a
                href="#"
                className="font-normal border-b border-black border-opacity-30 hover:border-opacity-90"
              >
                Super-fast global CDN
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a
                href="#"
                className="font-normal border-b border-black border-opacity-30 hover:border-opacity-90"
              >
                Download links on your domain
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a
                href="#"
                className="font-normal border-b border-black border-opacity-30 hover:border-opacity-90"
              >
                Magic universal links
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a
                href="#"
                className="font-normal border-b border-black border-opacity-30 hover:border-opacity-90"
              >
                Download analytics
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a href="#" className="font-normal">
                Manage version numbers
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaCheck className="text-gray-500" />
              <a href="#" className="font-normal">
                Native installers for all platforms
              </a>
            </li>
          </ul>
        </div>

        {/*Right Side */}
        <div className="pt-12 lg:pl-10">
          <img src="/assets/asset 66.svg" alt="Picture" />
        </div>
      </div>
    </div>
  );
};
