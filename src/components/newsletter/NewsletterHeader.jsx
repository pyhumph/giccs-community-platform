import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import newzImg from "../../assets/newletter01.jpg";

const NewsletterHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-[70vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={newzImg}
          alt="Newsletter Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Breadcrumb Navigation */}
      {/* <div className="absolute top-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 pt-8">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-yellow-400">Newsletter</li>
            </ol>
          </nav>
        </div>
      </div>
*/}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] px-4">
        <div
          className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
          <div className="mb-6">
            <div className="inline-flex items-center px-6 py-3 bg-yellow-400 bg-opacity-20 rounded-full border border-yellow-400 backdrop-blur-sm">
              <Mail className="w-5 h-5 text-[#1E1E20] mr-2" />
              <span className="text-[#1E1E20] font-semibold">
                GICCS Newsletter
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Stay Informed,
            <br />
            <span className="text-yellow-400 relative">
              Stay Connected
              <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transform scale-x-0 animate-pulse delay-1000"></div>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get the latest updates on our community impact, success stories, and
            upcoming initiatives delivered directly to your inbox.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterHeader;
