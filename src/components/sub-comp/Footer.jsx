import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <div className="flex items-center mb-6">
                {/* <img */}
                {/*   src="/src/assets/giccs_logo.svg" */}
                {/*   alt="giccs" */}
                {/*   className="h-10 mr-3" */}
                {/* /> */}
                <h3 className="text-xl font-bold">GICCS</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Our Secure Online Donation Platform Allows You To Make
                Contributions Quickly And Safely. Choose From Various.
              </p>
              {/*<div className="flex space-x-3 mt-6">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 transition-colors"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              */}
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-xl mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-yellow-500 flex items-center"
                  >
                    <span className="text-yellow-500 mr-2">▸</span> About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/newsletter"
                    className="text-gray-400 hover:text-yellow-500 flex items-center"
                  >
                    <span className="text-yellow-500 mr-2">▸</span> Our News
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-bold text-xl mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/programs/entrepreneurship-business-grants"
                    className="text-gray-400 hover:text-yellow-500 flex items-center"
                  >
                    <span className="text-yellow-500 mr-2">▸</span>Business
                    Grants
                  </a>
                </li>
                <li>
                  <a
                    href="/programs/education"
                    className="text-gray-400 hover:text-yellow-500 flex items-center"
                  >
                    <span className="text-yellow-500 mr-2">▸</span> Education
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="/renewable-energy"
                    className="text-gray-400 hover:text-yellow-500 flex items-center"
                  >
                    <span className="text-yellow-500 mr-2">▸</span>Renewable
                    Energy
                  </a>
                </li>
                <li>
                  <a
                    href="/health"
                    className="text-gray-400 hover:text-yellow-500 flex items-center"
                  >
                    <span className="text-yellow-500 mr-2">▸</span> Health
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-bold text-xl mb-6">Get In Touch</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <FaMapMarkerAlt className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-400">Sakina, Arusha, Tanzania</p>
                </li>
                <li className="flex">
                  <FaPhone className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-400">+255 785 044 220</p>
                </li>
                <li className="flex">
                  <FaEnvelope className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-400">admin@giccs.or.tz</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-gray-900 border-t border-gray-800 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright © 2025 <span className="text-yellow-500">Giccs</span>.
            All Rights Reserved.
          </p>
          {/*<div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Cookie Settings
            </a>
          </div>
          */}
        </div>
      </div>
    </>
  );
};

export default Footer;
