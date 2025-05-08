import React from "react";
import { useState, useEffect } from "react";
import healthImg from "../../../assets/health_04.avif";
import healthcare from "../../../assets/handshake_health.png";
import Slogan from "../../sub-comp/slogan";

const HealthImpact = () => {
  const [counters, setCounters] = useState({
    patients: 0,
    communities: 0,
    volunteers: 0,
    programs: 0,
  });

  const targets = {
    patients: 5800,
    communities: 124,
    volunteers: 350,
    programs: 46,
  };

  // Simple animation for counters
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepTime = duration / steps;

    const incrementCounters = () => {
      setCounters((prev) => ({
        patients:
          prev.patients < targets.patients
            ? Math.ceil(prev.patients + targets.patients / steps)
            : targets.patients,
        communities:
          prev.communities < targets.communities
            ? Math.ceil(prev.communities + targets.communities / steps)
            : targets.communities,
        volunteers:
          prev.volunteers < targets.volunteers
            ? Math.ceil(prev.volunteers + targets.volunteers / steps)
            : targets.volunteers,
        programs:
          prev.programs < targets.programs
            ? Math.ceil(prev.programs + targets.programs / steps)
            : targets.programs,
      }));
    };

    const interval = setInterval(() => {
      incrementCounters();

      if (
        counters.patients >= targets.patients &&
        counters.communities >= targets.communities &&
        counters.volunteers >= targets.volunteers &&
        counters.programs >= targets.programs
      ) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [counters, targets]);

  return (
    <section className="py-16 md:py-24 bg-[#fdf9f3]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative h-full">
              <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-[#FFC107]/10 rounded-lg z-0"></div>
              <img
                src={healthImg}
                alt="Health Impact"
                className="relative z-10 w-full h-full object-cover rounded-lg shadow-lg ml-5 mt-5"
              />
              <div className="absolute bottom-5 right-5 bg-white p-6 rounded-lg shadow-lg z-20 max-w-xs">
                <h4 className="text-[#1E1E20] font-bold text-xl mb-2">
                  Our Mission
                </h4>
                <p className="text-gray-600">
                  To provide essential health support to those who need it most,
                  ensuring that no one suffers from treatable conditions due to
                  lack of resources.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <Slogan text="Our Impact in Communities" image={healthcare} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E20] mb-6">
              Making a Difference Through Health Support
            </h2>

            <p className="text-gray-600 mb-10">
              Since our health program's inception, we've been dedicated to
              improving health outcomes in underserved communities. Through
              partnerships with local health workers, medical professionals, and
              generous donors, we've been able to provide critical support to
              thousands of individuals facing health challenges.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-10">
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-[#FFC107] text-4xl font-bold mb-2">
                  {counters.patients.toLocaleString()}
                </h3>
                <p className="text-[#1E1E20] font-medium">Patients Supported</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-[#FFC107] text-4xl font-bold mb-2">
                  {counters.communities.toLocaleString()}
                </h3>
                <p className="text-[#1E1E20] font-medium">
                  Communities Reached
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-[#FFC107] text-4xl font-bold mb-2">
                  {counters.volunteers.toLocaleString()}
                </h3>
                <p className="text-[#1E1E20] font-medium">Health Volunteers</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-[#FFC107] text-4xl font-bold mb-2">
                  {counters.programs.toLocaleString()}
                </h3>
                <p className="text-[#1E1E20] font-medium">Health Programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthImpact;
