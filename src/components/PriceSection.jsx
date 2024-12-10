import React, { useState } from "react";
import { PriceCard } from "./PriceCard";
import { FaCheck } from "react-icons/fa6";
import { plans as planData } from "../utils/plans";

export const PriceSection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  // Map over the plans and update prices based on the billing cycle
  const plans = planData.map((plan) => ({
    ...plan,
    price:
      plan.plan === "Essential"
        ? billingCycle === "monthly"
          ? "$100"
          : "$80"
        : plan.plan === "Professional"
        ? billingCycle === "monthly"
          ? "$240"
          : "$192"
        : plan.price,
  }));

  return (
    <div className="px-6 py-10 mx-auto max-w-7xl mt-10 text-left lg:px-8 lg:mt-16">
      <div className="flex flex-col gap-4 justify-between items-start lg:flex-row">
        <h2 className="text-5xl leading-normal max-w-2xl sm:font-semibold">
          Choose a plan that fits your needs
        </h2>
        {/* Toggle for Billing Cycle */}
        <div className="relative flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-[3px]">
          {/* Toggle Background */}
          <div
            className={`absolute left-[3px] top-[3px] h-[calc(100%-6px)] w-[calc(50%-3px)] rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out ${
              billingCycle === "yearly" ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>

          {/* Monthly Button */}
          <button
            className={`px-3 py-2 text-3.5 min-w-[180px] text-center relative z-10 transition-all duration-300 font-normal ${
              billingCycle === "monthly"
                ? "text-body-light-loud font-medium"
                : "text-body-light-muted"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>

          {/* Yearly Button */}
          <button
            className={`px-3 py-2 text-3.5 min-w-[180px] text-center relative z-10 transition-all duration-300 ${
              billingCycle === "yearly"
                ? "text-body-light-loud font-medium"
                : "text-body-light-muted"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
            <div className="text-3 ml-1 inline-block rounded-full bg-gradient-to-br from-theme-yellow via-theme-purple to-theme-red p-[1px] font-medium">
              <p className="rounded-full bg-gradient-to-br from-blue-100 via-red-100 to-purple-100 px-3 py-1 text-sm font-semibold text-primary-700">
                -20%
              </p>
            </div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <PriceCard key={index} {...plan} />
        ))}
      </div>

      <div className=" rounded-xl mt-6 bg-[#1c1c1f] bg-no-repeat bg-cover bg-center flex flex-col pt-6 lg:flex-row lg:items-center lg:justify-center lg:pt-2 bg-blend-lighten">
        {/* <div className="absolute inset-0 bg-[url('/assets/asset33.svg')] bg-cover bg-center opacity-50 z-0"></div> */}

        {/* Left Part */}
        <div className=" px-8 lg:flex-1">
          <span className="uppercase text-md mb-3 block font-medium tracking-wide text-gray-400">
            Dedicated support and expert guidance.
          </span>
          <h2 className="text-5xl font-semibold leading-snug tracking-tight text-white sm:text-5xl">
            Enterprise
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-200 sm:grid-cols-2 sm:gap-6">
            <li className="flex items-center gap-2">
              <FaCheck className="text-white text-lg" />
              <span className="ml-3 text-lg text-gray-200">
                Whiteglove onboarding
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-white text-lg" />
              <span className="ml-3 text-lg text-gray-200">
                Custom features
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-white text-lg" />
              <span className="ml-3 text-lg text-gray-200">
                Priority support
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-white text-lg" />
              <span className="ml-3 text-lg text-gray-200">
                Shared Slack channel
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-white text-lg" />
              <span className="ml-3 text-lg text-gray-200">
                Dedicated account manager
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck className="text-white text-lg" />
              <span className="ml-3 text-lg text-gray-200">Custom Billing</span>
            </li>
          </ul>
        </div>

        {/* Right Part */}
        <div className="lg:w-2/5 lg:h-1/2 flex p-10">
          <div className="bg-white border rounded-xl flex flex-col items-center px-16 py-6">
            <p className="text-base text-gray-500 text-center mb-6">
              Secure, reliable cross-platform desktop apps for enterprise teams.
            </p>
            <button className="px-8 py-3 bg-[#3238f2] text-white rounded-lg font-medium hover:bg-blue-600">
              Contact Sales
            </button>
            <p className="mt-6 text-xs italic text-gray-400 text-center">
              <sup>*</sup>You can create a desktop app and run it on your
              computer for free. You will only be charged if you want to create
              a distributable app for your customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
