// plans.js
export const plans = [
    {
      plan: "Free",
      description: "For personal use or testing your app before deploying.",
      price: null,
      features: [
        { text: "Free for personal use", included: true },
        { text: "Run app locally", included: true },
        { text: "No Code Signing", included: false },
        { text: "No Native Installers", included: false },
      ],
      buttonLabel: "Get Started",
      popular: false,
    },
    {
      plan: "Essential",
      description: "For simple desktop apps.",
      price: null, 
      features: [
        { text: "Windows, Mac & Linux", included: true },
        { text: "Code Signing", included: true },
        { text: "Native Installers", included: true },
        { text: "Email/chat support", included: true },
      ],
      buttonLabel: "Get Started",
      popular: false,
    },
    {
      plan: "Professional",
      description: "For sophisticated desktop apps.",
      price: null,
      features: [
        { text: "Branded Download links", included: true },
        { text: "Analytics", included: true },
        { text: "Access to Plugins", included: true },
        { text: "Access to restricted API", included: true },
      ],
      buttonLabel: "Get Started",
      popular: true,
    },
  ];
  