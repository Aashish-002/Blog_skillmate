"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCookieBite } from "react-icons/fa";
import { goToViolation } from "@/helpers/scrollTo";

const LandingPage = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("acceptedCookies");
    if (!hasAcceptedCookies) {
      setShowCookieConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("acceptedCookies", "true");
    setShowCookieConsent(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 bg-white">
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex flex-col sm:flex-row justify-between items-center z-50">
          <span className="mb-2 sm:mb-0 text-center sm:text-left flex items-center">
            <FaCookieBite className="mr-2" />
            This website uses cookies to enhance the user experience.
          </span>
          <button
            onClick={acceptCookies}
            className="bg-[#0DBA4B] text-white px-4 py-2 rounded-full font-bold cursor-pointer hover:bg-green-600 active:bg-green-700"
          >
            Accept Cookies
          </button>
        </div>
      )}
      <div className="w-full mx-auto max-w-screen-xl flex flex-col items-center justify-center relative">
        <div className="relative z-10 text-center p-4 md:p-2 text-nowrap -mt-[1rem]">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black mb-4 text-center md:text-center">
            Discover the Extraordinary
          </h1>
          <div className="absolute w-15 h-15 top-[0%] left-[0%] md:left-[0%]">
            <Image width={25} height={25} src="/images/dot.svg" alt="CN" />
          </div>
          <div className="absolute w-15 h-15 top-[80%] right-[5%] md:right-[30%]">
            <Image width={25} height={25} src="/images/dot.svg" alt="CN" />
          </div>
          <h3 className="text-center text-black mb-1 text-lg sm:text-xl md:text-3xl">
            Unlock expert advice, actionable tips, and inspiring stories to
          </h3>
          <h3 className="text-center text-black mb-12 text-lg sm:text-xl md:text-3xl">
            accelerate your professional journey
          </h3>
        </div>
        <div
          className="absolute top-0 left-0 w-1/6 h-full bg-no-repeat bg-left hidden md:block"
          style={{
            backgroundImage: `url('/images/left-arrow.svg')`,
            backgroundSize: "50%",
          }}
        ></div>
        <div
          className="absolute top-0 right-0 w-1/6 h-full bg-no-repeat bg-right hidden md:block"
          style={{
            backgroundImage: `url('/images/right-arrow.svg')`,
            backgroundSize: "50%",
          }}
        ></div>
        <div className="relative flex flex-col items-center justify-center z-10 mb-6">
          <h3 className="text-center mb-4 text-black text-base sm:text-lg md:text-2xl">
            Transform. Thrive. Succeed.
          </h3>
          <button
            onClick={() => goToViolation("popular-categories")}
            className="bg-[#0DBA4B] text-white px-6 py-2 md:px-10 md:py-3 rounded-full font-bold cursor-pointer hover:bg-green-600 hover:-translate-y-1 active:bg-green-700 flex flex-row items-center gap-2"
          >
            Start Your Journey
            <span>
              <Image
                src="/images/arrow.svg"
                alt="arrow"
                height={10}
                width={10}
              />
            </span>
          </button>
        </div>
      </div>
      <hr className="w-full border-gray-400 mb-6"></hr>
    </div>
  );
};

export default LandingPage;
