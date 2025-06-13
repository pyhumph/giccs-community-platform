import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Users,
  Heart,
  Leaf,
  GraduationCap,
  Building2,
  ArrowRight,
} from "lucide-react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetDirections = () => {
    const googleMapsUrl =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.951391316512!2d36.657602775929135!3d-3.3620537966126367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371c56dc7ed7ed%3A0xc47ab61515db909e!2sJr%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2stz!4v1748773249431!5m2!1sen!2stz";
    const directMapsUrl =
      "https://www.google.com/maps/place/Jr+Institute+of+Information+Technology/@-3.3620538,36.6576028,17z/data=!3m1!4b1!4m6!3m5!1s0x18371c56dc7ed7ed:0xc47ab61515db909e!8m2!3d-3.3620538!4d36.6601777!16s%2Fg%2F11c1q6qb6w";
    window.open(directMapsUrl, "_blank");
  };

  const focusAreas = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      description:
        "Promoting quality education for sustainable community development",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health",
      description:
        "Improving healthcare access and wellness in underserved communities",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Environment",
      description: "Environmental conservation and renewable energy solutions",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Development",
      description: "Sustainable agriculture and affordable housing initiatives",
    },
  ];

  const stats = [
    { value: "2018", label: "Established" },
    { value: "50+", label: "Projects" },
    { value: "1000+", label: "Lives Impacted" },
    { value: "4", label: "Focus Areas" },
  ];

  return (
    <div
      id="about-history"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gray-800 to-yellow-500 rounded-full mb-6 shadow-lg">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-yellow-500 bg-clip-text text-transparent mb-6">
            GICCS History
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Global Integrated Charitable Community Services
          </p>
        </div>

        {/* Story Section */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Transforming Communities Through
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-yellow-500">
                Integrated Solutions
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Born from the inspiration of passionate individuals, GICCS emerged
              as a beacon of hope for Tanzania's low-income communities. Our
              organization is dedicated to breaking the cycle of poverty through
              comprehensive, sustainable interventions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in holistic community development that addresses
              multiple challenges simultaneously - from education and healthcare
              to environmental sustainability and economic empowerment.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-gray-600 font-medium">
                Trusted by communities across Tanzania
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-yellow-400 rounded-3xl transform rotate-6 opacity-20"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div
          className={`bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Head Office
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Arusha-Sakina, Block F-Plot no 251
                      <br />
                      Njia Panda Magengo, behind Lion Safaris
                      <br />
                      Nairobi Road, Tanzania
                      <br />
                      P.O.Box: 7170 Arusha - Tanzania East Africa
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm">
                      Office: +255 2506461
                      <br />
                      Mobile: +255 784 2666333
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">mir@jriit.ac.tz</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-yellow-500 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-24 h-24 bg-yellow-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Visit Our Office</h3>
                <p className="text-lg opacity-90 mb-6">
                  We're located in the heart of Arusha, making us accessible to
                  the communities we serve.
                </p>
                <button
                  onClick={handleGetDirections}
                  className="inline-flex items-center px-6 py-3 bg-yellow-500 text-gray-900 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300 cursor-pointer"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
