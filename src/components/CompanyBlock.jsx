import React from "react";

export const CompanyBlock = ({ name, image, id }) => {
  return (
    <>
      <div
        key={id}
        className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32"
      >
        <img
          src={image}
          alt="Company_Image"
          className="w-12 h-12 md:h-16 md:w-16"
        />
        <span className="text-[12px] md:text-[16px] font-semibold">{name}</span>
      </div>
    </>
  );
};
