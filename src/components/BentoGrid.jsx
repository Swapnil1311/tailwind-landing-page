import React, { useEffect, useRef } from "react";
export const BentoGrid = () => {
  return (
    <>
      <div className="px-6 mx-auto mt-16 text-left max-w-7xl lg:px-8 lg:mt-16">
        <h2 className="text-5xl mb-14 max-w-2xl leading-normal sm:font-semibold">
          ToDesktop handles the details
        </h2>
        <div
          className="flex flex-col gap-6 lg:grid lg:grid-cols-3"
          style={{ gridAutoRows: "96px" }}
        >
          {/*Card1*/}
          <div className="row-start-1 row-end-3 rounded-2xl bg-gray-200 p-[1px] hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 group">
            <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col items-center gap-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
              <h3 className="text-2xl text-bold">Native Notifications</h3>
              <img
                src="/tailwind-landing-page/assets/asset-37.png"
                alt="Bento_Grid_Image"
              />
            </div>
          </div>

          {/*Card-2*/}
          <div className="row-start-1 row-end-4 rounded-2xl bg-gray-200 p-[1px] hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 group">
            <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col items-center gap-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
              <h3 className="text-2xl text-bold">Auto Updates</h3>
              <p className="text-lg text-center font-light">
                We’ll ensure the underlying browser is up to date and deliver
                performance improvements, security patches, & additional
                features.
              </p>
              <img
                src="/tailwind-landing-page/assets/asset-38.png"
                alt="Bento_Grid_Image"
              />
            </div>
          </div>

          {/*Card-3*/}
          <div className="row-start-1 row-end-3 rounded-2xl bg-gray-200 p-[1px] hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 group">
            <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col items-center gap-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
              <h3 className="text-2xl text-bold">Plugins</h3>
              <img
                src="/tailwind-landing-page/assets/asset-39.png"
                alt="Bento_Grid_Image"
              />
            </div>
          </div>

          {/*Card-4*/}
          <div className="row-start-3 row-end-6 rounded-2xl bg-gray-200 p-[1px] hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 group">
            <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col items-center gap-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
              <h3 className="text-2xl text-bold">Access to Native APIs</h3>
              <p className="text-lg text-center font-light">
                ToDesktop ensures the underlying browser, performance
                improvements, security patches and additional features are
                always up to date.
              </p>
              <img
                src="/tailwind-landing-page/assets/asset-40.png"
                alt="Bento_Grid_Image"
              />
            </div>
          </div>

          {/*Card-5*/}
          <div className="row-start-4 row-end-6 rounded-2xl bg-gray-200 p-[1px] hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 group">
            <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col items-center gap-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
              <h3 className="text-2xl text-bold">Customizable look and feel</h3>
              <img
                src="/tailwind-landing-page/assets/asset-42.png"
                alt="Bento_Grid_Image"
              />
            </div>
          </div>

          {/*Card-6*/}
          <div className="row-start-3 row-end-6 rounded-2xl bg-gray-200 p-[1px] hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 group">
            <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col items-center gap-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
              <h3 className="text-2xl text-bold">Native Installers</h3>
              <p className="text-lg text-center font-light">
                We even provide a magic link which will detect your users
                operating system & download the most up to date version of your
                app.
              </p>
              <img
                src="/tailwind-landing-page/assets/asset-43.png"
                alt="Bento_Grid_Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
