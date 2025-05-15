import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const donation = [
  {
    title: "Donation",
    backgroundImage:
      "https://cupids.org/wp-content/uploads/2016/12/Happy-kids-at-EducAid-Charity-Sierra-Leone.jpg",
  },
];

const DonationHeader = () => {
  return (
    <div>
      {donation.map((section, index) => (
        <section
          key={index}
          className="relative h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${section.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4">
            <div className="flex h-screen items-center-safe justify-center">
              <div className="text-center pb-20 relative z-10">
                <nav className="flex justify-center text-lg mb-4">
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
                  >
                    Home
                    <ChevronRightIcon className="inline-block w-4 h-4 ml-2 mr-2" />
                  </Link>
                  <span className="text-white">
                    {section.title}
                    <ChevronRightIcon className="inline-block w-4 h-4 ml-2" />
                  </span>
                </nav>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {/* {section.title}  */}
                  Make A Donation
                </h1>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default DonationHeader;
