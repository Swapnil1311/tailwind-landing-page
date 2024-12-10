import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const SingleQuestion = ({ title, info }) => {
  const [show, setShow] = useState(false);

  return (
    <dt className="text-lg">
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="flex w-full items-start justify-between text-left text-gray-400"
        aria-expanded={show}
        aria-controls={`faq-${title}`}
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <span className="ml-6 flex h-7 items-center">
          {show ? (
            <FaChevronUp className=" transition-transform rotate-0 text-black font-thin" />
          ) : (
            <FaChevronDown className=" transition-transform rotate-0 text-black font-thin" />
          )}
        </span>
      </button>
      {show && <p className="mt-4 text-black text-left">{info}</p>}
    </dt>
  );
};
