import React, { useState } from "react";
import {
  Heart,
  BookOpen,
  Users,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Clock,
} from "lucide-react";

const Application = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const applicationTypes = [
    {
      id: "education",
      title: "Education Assistance",
      description:
        "School fees, books, uniforms, and educational materials to support your learning journey",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverColor: "hover:border-blue-400",
      formLink: "https://forms.gle/aoVj3Mpb7wn75afr8",
      features: [
        "School fees and tuition support",
        "Educational materials and books",
        "Uniforms and supplies",
        "Transportation assistance",
      ],
      estimatedTime: "5-7 minutes",
    },
    {
      id: "women-empowerment",
      title: "Women Empowerment",
      description:
        "Supporting women through business opportunities, skills development, and empowerment programs",
      icon: Users,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      hoverColor: "hover:border-purple-400",
      formLink: "https://forms.gle/CG6252eZDQdZijW7A",
      features: [
        "Business startup capital",
        "Skills training programs",
        "Mentorship opportunities",
        "Leadership development",
      ],
      estimatedTime: "6-8 minutes",
    },
    {
      id: "health",
      title: "Healthcare Support",
      description:
        "Medical expenses, treatments, and healthcare equipment for you and your family",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      hoverColor: "hover:border-red-400",
      formLink: "https://forms.gle/cw8Jkk4KQfuz6xGi8",

      features: [
        "Medical treatment costs",
        "Prescription medications",
        "Healthcare equipment",
        "Emergency medical support",
      ],
      estimatedTime: "5-6 minutes",
    },
  ];

  const handleApplyClick = (application) => {
    if (application.comingSoon) {
      return;
    }

    // Open Google Form in new tab
    window.open(application.formLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Apply for Support
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
            We're here to help you achieve your dreams. Choose the support
            category that best fits your needs and submit your application
            through our secure forms.
          </p>
          <div className="flex justify-center items-center space-x-8 mt-12">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <BookOpen className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">Education Support</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <Users className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">Women Empowerment</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <Heart className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">Healthcare Aid</p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Forms Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Choose Your Application Type
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the category that best describes your needs. Each application
            form is tailored to gather the specific information required for
            your support request.
          </p>
        </div>

        {/* Application Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {applicationTypes.map((application) => {
            const IconComponent = application.icon;
            return (
              <div
                key={application.id}
                className={`relative bg-white rounded-2xl shadow-lg border-2 ${application.borderColor} ${application.hoverColor} transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden ${
                  application.comingSoon ? "opacity-75" : ""
                }`}
                onMouseEnter={() => setHoveredCard(application.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Coming Soon Badge */}
                {application.comingSoon && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full border border-yellow-200">
                      Coming Soon
                    </span>
                  </div>
                )}

                {/* Card Header */}
                <div className={`${application.bgColor} p-8 text-center`}>
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${application.color} flex items-center justify-center mb-6 mx-auto transform transition-transform duration-300 ${
                      hoveredCard === application.id ? "scale-110 rotate-3" : ""
                    }`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {application.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {application.description}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      What we support:
                    </h4>
                    <ul className="space-y-2">
                      {application.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Estimated Time */}
                  <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>
                        Estimated completion time:{" "}
                        <strong>{application.estimatedTime}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={() => handleApplyClick(application)}
                    disabled={application.comingSoon}
                    className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                      application.comingSoon
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : `bg-gradient-to-r ${application.color} text-white hover:shadow-lg hover:scale-105 transform`
                    }`}
                  >
                    {application.comingSoon ? (
                      <span>Coming Soon</span>
                    ) : (
                      <>
                        <span>Apply Now</span>
                        <ExternalLink className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {!application.comingSoon && (
                    <p className="text-xs text-gray-500 text-center mt-3">
                      Opens in a new tab • Secure Google Form
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Information Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Application Process
            </h3>
            <p className="text-gray-600">
              Here's what you can expect after submitting your application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Submit Application
              </h4>
              <p className="text-sm text-gray-600">
                Complete the appropriate form with accurate information and
                required documents
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Review Process
              </h4>
              <p className="text-sm text-gray-600">
                Our team reviews your application within 3-5 business days
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Get Response</h4>
              <p className="text-sm text-gray-600">
                Receive notification about your application status via email
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">
              Need Help with Your Application?
            </h3>
            <p className="mb-6 opacity-90">
              Our support team is here to assist you throughout the application
              process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <span className="text-sm">📧</span>
                <span className="text-sm">admin@giccs.or.tz</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">📞</span>
                <span className="text-sm">+255 785 044 220</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
