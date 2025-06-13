import React, { useState, useEffect, useRef } from "react";
import {
  Leaf,
  Users,
  Heart,
  Star,
  ArrowRight,
  Play,
  Clock,
  MapPin,
} from "lucide-react";
import yogaBg01 from "../../assets/yoga-01.jpg";
import students from "../../assets/shool&student.jpg";
import elder from "../../assets/elder.jpg";
import meditation from "../../assets/meditation.jpg";

const InnerCenterYoga = () => {
  const [inView, setInView] = useState(false);
  const [activeTab, setActiveTab] = useState("activities");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const yogaActivities = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Daily Yoga Asanas",
      description:
        "Structured sessions tailored for different age groups and fitness levels",
      time: "Morning & Evening",
      level: "All Levels",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Philosophy Workshops",
      description: "Expert-led sessions on yoga philosophy and ancient wisdom",
      time: "Weekends",
      level: "Beginner Friendly",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Mindfulness & Meditation",
      description: "Deep meditation practices for inner peace and clarity",
      time: "Daily",
      level: "All Levels",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Pranic & Reiki Healing",
      description:
        "Alternative healing treatments for physical and emotional wellness",
      time: "By Appointment",
      level: "Individual Sessions",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Homeopathy & Color Therapy",
      description:
        "Natural healing approaches using holistic treatment methods",
      time: "Flexible",
      level: "Consultation",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community Outreach",
      description:
        "Bringing yoga and healing practices to underserved communities",
      time: "Weekly",
      level: "Community Focus",
    },
  ];

  const targetAudiences = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Schools & Students",
      description:
        "Integrating yoga into curriculum to enhance concentration, emotional balance, and physical fitness",
      benefits: [
        "Improved Focus",
        "Better Academic Performance",
        "Emotional Regulation",
        "Physical Fitness",
      ],
      image: students,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Elderly Community",
      description:
        "Specialized sessions to improve mobility, reduce stress, and enhance overall well-being",
      benefits: [
        "Enhanced Mobility",
        "Stress Reduction",
        "Social Connection",
        "Mental Wellness",
      ],
      image: elder,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "General Public",
      description:
        "Open sessions and workshops for anyone interested in yoga, meditation, and alternative healing",
      benefits: [
        "Holistic Wellness",
        "Stress Management",
        "Personal Growth",
        "Community Building",
      ],
      image: meditation,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-yellow-400 opacity-5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-yellow-400 opacity-3 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-yellow-400 bg-opacity-20 backdrop-blur-sm border border-yellow-400 border-opacity-30 rounded-full px-6 py-2 mb-6">
            <Leaf className="w-5 h-5 text-[#1E1E20]" />
            <span className="text-[#1E1E20] font-semibold">
              Yoga Initiative
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Holistic Well-being Through
            <span className="block text-yellow-400 relative">
              Ancient Wisdom
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-yellow-400 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Inner Center is a dedicated space for{" "}
            <span className="text-yellow-400 font-semibold">
              holistic well-being
            </span>
            , designed to provide yoga classes, philosophical teachings, and
            alternative healing practices to a diverse community.
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex justify-center mb-12 transform transition-all duration-1000 delay-300 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-full p-2 border border-gray-700">
            <button
              onClick={() => setActiveTab("activities")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === "activities"
                  ? "bg-yellow-400 text-gray-900 shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
            >
              Our Activities
            </button>
            <button
              onClick={() => setActiveTab("audiences")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === "audiences"
                  ? "bg-yellow-400 text-gray-900 shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
            >
              Who We Serve
            </button>
          </div>
        </div>

        {/* Activities Tab Content */}
        {activeTab === "activities" && (
          <div
            className={`transform transition-all duration-1000 delay-500 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Left Column - Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={yogaBg01}
                    alt="Yoga Practice at Inner Center"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Experience Inner Peace
                    </h3>
                    <p className="text-gray-300">
                      Join our daily yoga sessions and discover your inner
                      strength
                    </p>
                  </div>
                  {/* Play button overlay */}
                  {/*<div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-yellow-400 bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 transform hover:scale-110 shadow-2xl">
                      <Play className="w-8 h-8 text-gray-900 ml-1" />
                    </button>
                  </div>*/}
                </div>
                {/* Floating stats */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-700">Happy Students</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Activities List */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold mb-8">Our Yoga Activities</h3>
                {yogaActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-400 hover:bg-opacity-70 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform duration-300">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <h4 className="font-bold text-xl group-hover:text-white transition-colors duration-300">
                            {activity.title}
                          </h4>
                          <div className="flex gap-2 mt-2 sm:mt-0">
                            <span className="text-xs bg-yellow-400 bg-opacity-20 text-[#1E1E20] px-2 py-1 rounded-full">
                              <Clock className="w-3 h-3 inline mr-1" />
                              {activity.time}
                            </span>
                            <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded-full">
                              {activity.level}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Audiences Tab Content */}
        {activeTab === "audiences" && (
          <div
            className={`transform transition-all duration-1000 delay-500 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {targetAudiences.map((audience, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500 hover:scale-105"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={audience.image}
                      alt={audience.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    <div
                      className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${audience.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                    >
                      {audience.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                      {audience.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {audience.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-yellow-400">
                        Key Benefits:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {audience.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <span className="text-sm text-gray-300">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    {/*<button
                      className={`w-full bg-gradient-to-r ${audience.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {/* <div
          className={`text-center mt-20 transform transition-all duration-1000 delay-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 md:p-12 text-gray-900 shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Begin Your Yoga Journey?
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our welcoming community and discover the transformative power
              of yoga, meditation, and holistic healing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Your First Session
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105">
                View Schedule
              </button>
            </div>
          </div>
        </div>
      */}
      </div>
    </section>
  );
};

export default InnerCenterYoga;
