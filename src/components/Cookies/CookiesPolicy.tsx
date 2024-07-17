import React from 'react';
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

const CookiesPolicy: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Cookies Policy</h1>
      <p className="text-xl font-bold mb-4 text-center">Last Updated: June 20, 2024</p>
      <p className="text-gray-700 mb-4">
        This Cookies Policy provides a detailed explanation of what Cookies are and how they are used on our website. It’s essential to understand the types of Cookies we use, the information they collect, and how that information is utilized.
      </p>
      
      <h2 className="text-lg font-bold mb-4">Understanding Cookies</h2>
      <p className="text-gray-700 mb-4">
        Cookies are small text files placed on your device (computer, mobile phone, or other devices) by a website. They store details about your browsing history and can store other information. Although Cookies generally do not contain personal data that directly identifies you, any personal information that we store about you may be linked to the information stored in and obtained from Cookies. For more on how we protect your personal data, please see our Privacy Policy.
      </p>

      <h2 className="text-lg font-bold mb-4">Our Use of Cookies</h2>
      <p className="text-gray-700 mb-4">
        We do not store sensitive personal information, such as mailing addresses or account passwords, in the Cookies we use.
      </p>

      <h2 className="text-lg font-bold mb-4">Key Definitions</h2>
      <p className="text-gray-700 mb-4">
        <strong>Company:</strong> Refers to SKILLMATE TECH SOLUTIONS LLP, located at No-326, Tamil Nagar, Rasipuram, Chennai, Tamil Nadu, India, 600098. Herein referred to as &#x0022;the Company&#x0022;, &#x0022;We&#x0022;, &#x0022;Us&#x0022;, or &#x0022;Our&#x0022;.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Cookies:</strong> These are small files described above, placed on your device by a website to record various aspects of your browsing activity.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Website:</strong> Refers to SKILLMATE, which can be accessed at <a href="http://terms.skillmate.ai" className="text-blue-500">http://terms.skillmate.ai</a>.
      </p>
      <p className="text-gray-700 mb-4">
        <strong>You:</strong> Refers to the individual accessing or using the Website, or the company or legal entity on whose behalf such an individual is accessing or using the Website.
      </p>

      <h2 className="text-lg font-bold mb-4">Types of Cookies We Use</h2>
      <p className="text-gray-700 mb-4">
        We utilize both &#x0022;Persistent&#x0022; and &#x0022;Session&#x0022; Cookies:
      </p>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li><strong>Persistent Cookies:</strong> Remain on your device even when you go offline.</li>
        <li><strong>Session Cookies:</strong> Are deleted as soon as you close your web browser.</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">The following types of Cookies we use:</h3>
      <h4 className="text-lg font-bold mb-2">Necessary / Essential Cookies</h4>
      <p className="text-gray-700 mb-2"><strong>Type:</strong> Session Cookies</p>
      <p className="text-gray-700 mb-2"><strong>Administered by:</strong> Us</p>
      <p className="text-gray-700 mb-4"><strong>Purpose:</strong> These Cookies are vital for providing you with the services available through our Website. They enable core functionalities like user authentication and fraud prevention. Without these Cookies, the services you request cannot be provided.</p>

      <h4 className="text-lg font-bold mb-2">Functionality Cookies</h4>
      <p className="text-gray-700 mb-2"><strong>Type:</strong> Persistent Cookies</p>
      <p className="text-gray-700 mb-2"><strong>Administered by:</strong> Us</p>
      <p className="text-gray-700 mb-4"><strong>Purpose:</strong> These Cookies remember your preferences, such as login details or language choices, to enhance your user experience on our Website. They ensure you do not have to re-enter your preferences each time you visit.</p>

      <h2 className="text-lg font-bold mb-4">Managing Your Cookie Preferences</h2>
      <p className="text-gray-700 mb-4">
        If you prefer not to use Cookies, you can disable them in your browser settings and delete any Cookies already stored. Be aware that disabling Cookies may affect the functionality of some features on our Website.
      </p>
      <p className="text-gray-700 mb-4">For detailed instructions on how to manage Cookies in your browser, please visit the following links:</p>
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-500">Chrome: Google Support</a></li>
        <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-blue-500">Internet Explorer: Microsoft Support</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-blue-500">Firefox: Mozilla Support</a></li>
        <li><a href="https://support.apple.com/en-us/HT201265" className="text-blue-500">Safari: Apple Support</a></li>
        <li><a href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy" className="text-blue-500">Edge: Microsoft Support</a></li>
      </ul>

      <h2 className="text-lg font-bold mb-4">Learn More About Cookies</h2>
      <p className="text-gray-700 mb-4">To gain a deeper understanding of Cookies, you can visit <a href="https://www.allaboutcookies.org/" className="text-blue-500">All About Cookies by TermFeed</a>.</p>

      <h2 className="text-lg font-bold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-4">For any questions regarding this Cookies Policy, please reach out to us at:</p>
      <div className="flex space-x-4">
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
  );
};
export default CookiesPolicy;
