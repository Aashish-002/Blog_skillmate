"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faWhatsapp,
  faYoutube,
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer: React.FC = () => {
  return (
    <>
      <ScrollToTopButton />
      <footer className="bg-[#0DBA4B] text-white py-8 w-full">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
            <div className="flex items-center mb-4 md:mb-6 md:mr-auto">
              <Image
                src="/whitelogo.svg"
                alt="Skillmate Logo"
                width={50}
                height={50}
              />
              <span className="text-xl font-bold ml-3">skillmate</span>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0 text-2xl">
              <a
                href="https://twitter.com/skillmate257345"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://chat.whatsapp.com/HZUBXTSuOJ2HoJFLW38nwU"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCOx9vSrE4_GEDC7cof5D5ow"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://www.instagram.com/skillmateofficial"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/company/skillmate-official/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.facebook.com/skillmateofficial"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
          <hr className="w-full border-gray-400 mb-6" />
          <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-center md:text-left">
            <span className="mb-4 md:mb-0 md:order-2 md:ml-auto">
              © 2024 Skillmate, All rights reserved
            </span>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <Link href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy and policy
              </Link>
              <Link href="/terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </Link>
              <Link href="/cookie" target="_blank" rel="noopener noreferrer">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
