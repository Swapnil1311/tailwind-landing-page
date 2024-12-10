import React, { useEffect, useRef } from "react";
import { LuDot } from "react-icons/lu";
import setupIntersectionObserver from "../utils/useScrollAnimation";
import { featureList } from "../utils/featureList";

export const FeatureLine = () => {
  const line4Ref = useRef(null);
  const initialTranslateLTR = -48 * 4;

  useEffect(() => {
    if (line4Ref.current) {
      setupIntersectionObserver(
        line4Ref.current,
        true,
        0.15,
        initialTranslateLTR
      );
    }
  }, []);

  return (
    <div className="mx-16 max-w-7xl mt-12 flex items-center overflow-hidden rounded-xl border border-solid px-6 py-8">
      <section className="flex items-center" ref={line4Ref}>
        {featureList.map((featureList, index) => (
          <div key={index} className="flex">
            <h2 className="my-0 mx-2 whitespace-nowrap font-display text-2xl font-semibold leading-7">
              {featureList.title}
            </h2>
            <div className="my-0 mx-2 whitespace-nowrap font-display text-4xl font-semibold leading-7 text-gray-800">
              <LuDot />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
