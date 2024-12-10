import React from "react";
import { FaCheck, FaX } from "react-icons/fa6";

export const PriceCard = ({
  plan,
  description,
  price,
  features,
  buttonLabel,
  popular,
}) => {
  return (
    <div
      className={`relative border bg-gray-100
         rounded-lg shadow-lg p-6 flex flex-col justify-between text-left ${
           popular ? "shadow-xl" : "border-gray-200"
         }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-0 right-2 -translate-y-1/2 text-[#3238f2] bg-blue-200 text-sm px-4 py-1 rounded-xl">
          Most Popular
        </div>
      )}

      {/* Plan and Description */}
      <div>
        <h3 className="text-2xl font-semibold">{plan}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>

      {/* Price */}
      <div className="mt-4">
        {price ? (
          <p className="text-4xl font-bold">
            {price} <span className="text-base font-medium">/mo</span>
          </p>
        ) : (
          <p className="text-2xl font-bold text-green-500">Free</p>
        )}
      </div>

      {/* Features */}
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 ${
              feature.included ? "text-gray-800" : "text-gray-400 line-through"
            }`}
          >
            {feature.included ? (
              <FaCheck className="w-5 h-5 text-green-500" />
            ) : (
              <FaX className="w-5 h-5 text-gray-500" />
            )}
            {feature.text}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className={`mt-6 px-6 py-2 font-medium rounded-md ${
          popular
            ? "bg-[#3238f2] text-white hover:bg-opacity-90"
            : "bg-white text-[#3238f2] border border-gray-400 hover:border-[#3238f2]"
        }`}
      >
        {buttonLabel}
      </button>
    </div>
  );
};
