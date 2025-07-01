import React from "react";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaHandsHelping,
  FaGraduationCap,
  FaLeaf,
  FaMedkit,
} from "react-icons/fa";

const Subscribe = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-500"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-yellow-400"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-yellow-300"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Mission statement */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <FaHeart className="text-yellow-500 text-4xl mr-3 animate-pulse" />
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Making Impact Together
              </h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Empowering communities through sustainable development, education,
              and innovative solutions. Join us in creating lasting change
              across Tanzania and beyond.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 border border-gray-700">
                <FaHandsHelping className="text-yellow-500 mr-2" />
                <span className="text-sm">Community Focused</span>
              </div>
              <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 border border-gray-700">
                <FaLeaf className="text-green-500 mr-2" />
                <span className="text-sm">Sustainable</span>
              </div>
              <div className="flex items-center bg-gray-800 rounded-full px-4 py-2 border border-gray-700">
                <FaGraduationCap className="text-blue-500 mr-2" />
                <span className="text-sm">Educational</span>
              </div>
            </div>
          </div>

          {/* Right side - Contact and Quick Actions */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Get In Touch
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-yellow-500/30 transition-colors">
                  <FaMapMarkerAlt className="text-yellow-500" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-400">Sakina, Arusha, Tanzania</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-500/30 transition-colors">
                  <FaPhone className="text-blue-500" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-400">+255 785 044 220</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-500/30 transition-colors">
                  <FaEnvelope className="text-green-500" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">admin@giccs.or.tz</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="/about"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors text-center"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-semibold py-3 px-4 rounded-lg transition-colors text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Services showcase */}
        <div className="border-t border-gray-700 pt-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Our Impact Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a
              href="/programs/entrepreneurship-business-grants"
              className="group text-center p-4 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/30 transition-colors">
                <FaHandsHelping className="text-purple-500 text-2xl" />
              </div>
              <h4 className="font-semibold mb-1">Business Grants</h4>
              <p className="text-sm text-gray-400">Supporting entrepreneurs</p>
            </a>

            <a
              href="/programs/education"
              className="group text-center p-4 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/30 transition-colors">
                <FaGraduationCap className="text-blue-500 text-2xl" />
              </div>
              <h4 className="font-semibold mb-1">Education</h4>
              <p className="text-sm text-gray-400">Learning opportunities</p>
            </a>

            <a
              href="/renewable-energy"
              className="group text-center p-4 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/30 transition-colors">
                <FaLeaf className="text-green-500 text-2xl" />
              </div>
              <h4 className="font-semibold mb-1">Green Energy</h4>
              <p className="text-sm text-gray-400">Sustainable solutions</p>
            </a>

            <a
              href="/health"
              className="group text-center p-4 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-500/30 transition-colors">
                <FaMedkit className="text-red-500 text-2xl" />
              </div>
              <h4 className="font-semibold mb-1">Health Support</h4>
              <p className="text-sm text-gray-400">Wellness programs</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
