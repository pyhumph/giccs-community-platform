import React, { useState, useEffect, useRef } from "react";
import { Star, Heart, Users, Target, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const InnerCenterMission = () => {
  const [inView, setInView] = useState(false);
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

  const objectives = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Classes",
      description:
        "Structured yoga classes for schools, elderly, and general public",
      color: "bg-blue-500",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Mindful Philosophy",
      description:
        "Promoting philosophical teachings including mindfulness and meditation",
      color: "bg-pink-500",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Alternative Healing",
      description:
        "Platform for alternative healing practitioners and therapies",
      color: "bg-purple-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Holistic Community",
      description:
        "Foster community that supports holistic health and wellness",
      color: "bg-green-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full translate-x-48 translate-y-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-20 rounded-full px-6 py-2 mb-6">
            <Target className="w-5 h-5 text-yellow-600" />
            <span className="text-yellow-700 font-semibold">Our Mission</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Empowering Lives Through
            <span className="block text-yellow-500 relative">
              Holistic Wellness
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-yellow-400 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Inner Center envisions a world where yoga and holistic healing are
            accessible to all, fostering a{" "}
            <span className="text-yellow-600 font-semibold">
              healthier and more balanced society
            </span>{" "}
            through learning, healing, and personal growth.
          </p>
        </div>

        {/* Mission Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Mission Details */}
          <div
            className={`space-y-8 transform transition-all duration-1000 delay-300 ${inView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Empower Lives
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Providing a{" "}
                <span className="text-yellow-600 font-semibold">
                  free space
                </span>{" "}
                for impactful programs that uplift the community through
                holistic wellness practices and educational initiatives. We
                believe everyone deserves access to transformative healing
                experiences.
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Create Change
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Supporting initiatives that enhance{" "}
                <span className="text-yellow-600 font-semibold">
                  education, health, and economic empowerment
                </span>
                through accessible yoga, meditation, and alternative healing
                practices. Together, we're building stronger, more resilient
                communities.
              </p>
            </div>
          </div>

          {/* Right Column - Objectives Cards */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${inView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 opacity-10 rounded-full translate-x-16 -translate-y-16"></div>

              <h4 className="text-2xl font-bold text-gray-800 mb-8 relative z-10">
                Our Core Objectives
              </h4>

              <div className="space-y-6 relative z-10">
                {objectives.map((objective, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`w-12 h-12 ${objective.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {objective.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                        {objective.title}
                      </h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {objective.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transform transition-all duration-1000 delay-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Life?
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Join our community of wellness warriors and embark on your journey
              to holistic health
            </p>
            <Link to={`/volunteer`}>
              <button className="bg-white cursor-pointer text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Journey Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerCenterMission;
