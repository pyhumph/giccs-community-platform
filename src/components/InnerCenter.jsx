import React from "react";
import topImage from "../assets/inner-top.jpg";
import buildingImage from "../assets/inner-main.jpg";
import bottomImage from "../assets/inner-bottom.jpg";
import { Phone, CheckCircle } from "lucide-react";

const InnerCenter = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image Area */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Main building image */}
          <img
            src={buildingImage}
            alt="Inner Center Building"
            className="w-full rounded-2xl shadow-xl"
          />

          {/* Top floating image */}
          <img
            src={topImage}
            alt="Class Session"
            className="absolute top-0 left-0 w-32 sm:w-40 md:w-48 rounded-xl shadow-lg -translate-x-1/3 -translate-y-1/3"
          />

          {/* Bottom floating image */}
          <img
            src={bottomImage}
            alt="Meditation Session"
            className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-48 rounded-xl shadow-lg translate-x-1/3 translate-y-1/3"
          />

          {/* Vertical label */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-left bg-black text-white px-6 py-2 rounded-br-3xl rounded-bl-3xl shadow-md text-sm sm:text-base font-medium">
            Inner Center <span className="text-yellow-400 font-bold">Open</span>{" "}
            12 Hours
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h4 className="text-yellow-500 font-medium text-lg">
            🖋️ Support Communities for a Better Future
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Empowering Communities <br /> Through Our{" "}
            <span className="text-yellow-500">Inner Center</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our Inner Center is a free facility available to individuals and
            organizations dedicated to uplifting the community. It serves as a
            hub for learning, empowerment, and transformation.
          </p>

          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-700">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-yellow-500" />{" "}
                Counseling, Therapy Sessions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-yellow-500" /> Stress
                Management Workshops
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-yellow-500" /> Grow Small
                Businesses Training
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-yellow-500" /> Training
                on Waste Management
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-yellow-500" /> Digital
                Literacy, Financial Ed.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-yellow-500" /> Meditation
                & Dev. Training
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-yellow-500" /> Hygiene &
                Health Education
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-yellow-500" /> Chronic
                Disease Management
              </li>
            </ul>
          </div>

          {/* CTA and Contact */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
              Learn More
            </button>
            <div className="flex items-center justify-center sm:justify-start text-gray-800 text-base">
              <Phone className="mr-2" /> +255 785 044 220
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerCenter;
