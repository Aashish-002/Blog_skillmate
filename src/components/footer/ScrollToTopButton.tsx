// components/ScrollToTopButton.tsx
"use client";

import React from "react";

const ScrollToTopButton: React.FC = () => {
  const isBrowser = () => typeof window !== "undefined";

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="bg-[#0DBA4B] w-full opacity-80 py-2 px-4 mx-auto block text-white"
      onClick={scrollToTop}
    >
      BACK TO TOP
    </button>
  );
};

export default ScrollToTopButton;
