import React, { useEffect, useRef } from "react";
import setupIntersectionObserver from "../utils/useScrollAnimation";
import { CompanyBlock } from "./CompanyBlock";
import { companies } from "../utils/data";

export const Slider = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const initialTranslateLTR = -48 * 4;
  const initialTranslateRTL = 36 * 4;

  useEffect(() => {
    if (line1Ref.current) {
      setupIntersectionObserver(
        line1Ref.current,
        true,
        0.15,
        initialTranslateLTR
      );
    }
    if (line2Ref.current) {
      setupIntersectionObserver(
        line2Ref.current,
        false,
        0.15,
        initialTranslateRTL
      );
    }
    if (line3Ref.current) {
      setupIntersectionObserver(
        line3Ref.current,
        true,
        0.15,
        initialTranslateLTR
      );
    }
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {/* Title */}
      <div className="flex justify-center gap-2">
        <img
          src="/tailwind-landing-page/assets/asset-2.svg"
          alt="arrow"
          className="translate-y-2"
        />
        <span className="font-medium">APPS POWERED BY TODESKTOP</span>
        <img
          src="/tailwind-landing-page/assets/asset-2.svg"
          alt="arrow"
          className="translate-y-2 -scale-x-100"
        />
      </div>

      {/* Company Group */}
      <div className="flex flex-col gap-4">
        {/* Line 1 */}
        <div
          ref={line1Ref}
          className="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear"
        >
          {/* Repeat company blocks */}
          {companies.slice(0, 12).map((company) => (
            <CompanyBlock key={company.id} {...company} />
          ))}
        </div>

        {/* Line 2 */}
        <div
          ref={line2Ref}
          className="flex gap-4 w-screen -translate-x-36 transition-transform ease-linear"
        >
          {companies.slice(12, 24).map((company) => (
            <CompanyBlock key={company.id} {...company} />
          ))}
        </div>

        {/* Line 3 */}
        <div
          ref={line3Ref}
          className="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear md:hidden"
        >
          {companies.slice(24, 36).map((company) => (
            <CompanyBlock key={company.id} {...company} />
          ))}
        </div>
      </div>
    </div>
  );
};
