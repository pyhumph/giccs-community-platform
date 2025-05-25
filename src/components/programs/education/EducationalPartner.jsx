import React from "react";
import { ExternalLink } from "lucide-react";
import JRLogo from "../../../assets/logo1.png";

const EducationalPartner = () => {
    return (
        <section className="bg-[#1E1E20] py-16 px-4 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-4">
                    Our Educational Partner
                </h2>
                <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
                    We are proud to collaborate with JR Institute of Information
                    Technology (JRIIT), a leading institution shaping future innovators
                    through excellence in technology and education.
                </p>

                <a
                    href="https://jriit.ac.tz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform transform hover:scale-105"
                >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-xl mx-auto flex flex-col md:flex-row items-center overflow-hidden">
                        <img
                            src={JRLogo}
                            alt="JRIIT Logo"
                            className="h-32 w-32 object-contain p-4"
                        />
                        <div className="p-6 text-left">
                            <h3 className="text-xl md:text-2xl font-semibold text-[#1E1E20] mb-2">
                                JR Institute of Information Technology
                            </h3>
                            <p className="text-gray-700 text-sm md:text-base">
                                Dedicated to empowering youth with industry-relevant IT skills,
                                JRIIT stands as a beacon of excellence in Tanzanian education.
                                Visit their website to learn more.
                            </p>
                            <div className="mt-4 text-[#FFC107] flex items-center gap-2 font-semibold">
                                Visit Website <ExternalLink className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default EducationalPartner;
