"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SuccessModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeModal = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl">
        <div className="flex justify-end p-2">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <div className="text-center p-6">
          <h2 className="text-2xl font-bold mt-4">Success!</h2>
          <p className="mt-2">Your Blog Post Has Been Published</p>
          <p className="mt-1 text-gray-600">
            Congratulations! Your blog post is now live and ready to inspire our readers.
          </p>
          <Image
            src=".\https_\lottiefiles.com\animations\successfully-completed-icon-animation-JFTh0D5GPo.svg" // Use a valid URL for the success image
            alt="Success GIF"
            width={100}
            height={100}
            className="mx-auto"
          />
           <div className="flex justify-center mt-4">
            <Link href="/">
              <button
                className="bg-[#0DBA4B] text-white px-6 py-3 rounded-full font-sora font-bold cursor-pointer hover:bg-green-600 hover:-translate-y-1 active:bg-green-700 flex items-center gap-2"
              >
                Back to home
                <span className="bg-white rounded-full p-1">
                  <Image
                    src="/images/arrow.svg"
                    alt="arrow"
                    height={10}
                    width={10}
                  />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
