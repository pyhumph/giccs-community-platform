import React, { useState, useEffect } from "react";
import {
  Heart,
  Users,
  Target,
  Globe,
  ArrowRight,
  Check,
  Star,
  Clock,
  Mail,
  Phone,
  User,
  MessageCircle,
} from "lucide-react";

const BecomeVolunteerPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    availability: "",
    experience: "",
    motivation: "",
  });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const impactStats = [
    { icon: Heart, number: "5,000+", label: "Lives Impacted", delay: "0ms" },
    { icon: Users, number: "250+", label: "Active Volunteers", delay: "200ms" },
    { icon: Target, number: "15", label: "Active Projects", delay: "400ms" },
    { icon: Globe, number: "8", label: "Communities Served", delay: "600ms" },
  ];

  const volunteerRoles = [
    {
      title: "Community Outreach",
      description:
        "Connect with local communities and spread awareness about our initiatives",
      skills: ["Communication", "Public Speaking", "Social Media"],
      time: "10-15 hours/week",
      image: "👥",
    },
    {
      title: "Education Support",
      description: "Help teach and mentor children in underserved communities",
      skills: ["Teaching", "Patience", "Subject Expertise"],
      time: "8-12 hours/week",
      image: "📚",
    },
    {
      title: "Healthcare Assistance",
      description: "Support healthcare initiatives and wellness programs",
      skills: ["Medical Background", "Compassion", "Organization"],
      time: "12-20 hours/week",
      image: "🏥",
    },
    {
      title: "Event Coordination",
      description:
        "Plan and execute fundraising events and community gatherings",
      skills: ["Project Management", "Creativity", "Leadership"],
      time: "15-25 hours/week",
      image: "🎉",
    },
  ];

  const applicationSteps = [
    { title: "Personal Information", icon: User },
    { title: "Skills & Availability", icon: Clock },
    { title: "Experience & Motivation", icon: MessageCircle },
    { title: "Review & Submit", icon: Check },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Education Volunteer",
      text: "Volunteering with GICCS has been life-changing. Seeing the impact we make together is incredible.",
      rating: 5,
      image: "👩‍🏫",
    },
    {
      name: "Michael Chen",
      role: "Healthcare Assistant",
      text: "The support and training provided made me feel confident in making a real difference.",
      rating: 5,
      image: "👨‍⚕️",
    },
    {
      name: "Emma Rodriguez",
      role: "Community Outreach",
      text: "GICCS gave me the platform to use my skills for meaningful change in our community.",
      rating: 5,
      image: "👩‍💼",
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    const requiredFields = {
      0: ["name", "email", "location"],
      1: [], // Optional, no required fields in step 1
      2: [], // Optional, no required fields in step 2
    };

    const fieldsToCheck = requiredFields[activeStep] || [];
    const allFilled = fieldsToCheck.every(
      (field) => formData[field].trim() !== "",
    );

    if (allFilled) {
      setActiveStep(activeStep + 1);
    } else {
      alert("Please fill in all required fields before proceeding.");
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (typeof window.Email === "undefined") {
        throw new Error(
          "SMTP.js not loaded. Please add the script to index.html.",
        );
      }

      const result = await window.Email.send({
        Host: import.meta.env.VITE_SMTP_HOST,
        Username: import.meta.env.VITE_SMTP_USERNAME,
        Password: import.meta.env.VITE_SMTP_PASSWORD,
        To: import.meta.env.VITE_SMTP_USERNAME,
        From: import.meta.env.VITE_SMTP_USERNAME,
        Subject: `New Volunteer Application from ${formData.name}`,
        Body: `
        <h2>New Volunteer Application</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Location:</strong> ${formData.location}</p>
        <p><strong>Skills:</strong> ${formData.skills}</p>
        <p><strong>Availability:</strong> ${formData.availability}</p>
        <p><strong>Experience:</strong> ${formData.experience}</p>
        <p><strong>Motivation:</strong> ${formData.motivation}</p>
        <hr>
        <p><em>Submitted via the GICCS Volunteer Page</em></p>
      `,
      });

      if (result === "OK") {
        alert("✅ Thank you for your application! We’ll contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          skills: "",
          availability: "",
          experience: "",
          motivation: "",
        });
        setActiveStep(0);
      } else {
        alert("❌ Error sending application. Please try again.");
        console.error(result);
      }
    } catch (error) {
      console.error("SMTP error:", error);
      alert("❌ An error occurred. Check your network or email config.");
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1E20] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E1E20] via-[#2A2A2D] to-[#1E1E20] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFC107] rounded-full opacity-10 animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-[#FFC107] rounded-full opacity-5 animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-[#FFC107] rounded-full opacity-15 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-40 right-1/3 w-20 h-20 bg-[#FFC107] rounded-full opacity-8 animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-[#FFC107] bg-clip-text text-transparent animate-pulse">
                Join Our Mission
              </h1>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
                Become a volunteer with GICCS and help us create lasting change
                in communities worldwide
              </p>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("application-form")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="group bg-[#FFC107] text-[#1E1E20] px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl inline-flex items-center gap-3"
              >
                Start Your Journey
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-float">
          <Heart className="w-8 h-8 text-[#FFC107] opacity-60" />
        </div>
        <div
          className="absolute top-1/3 right-16 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Users className="w-10 h-10 text-[#FFC107] opacity-40" />
        </div>
        <div
          className="absolute bottom-1/4 left-1/4 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Globe className="w-6 h-6 text-[#FFC107] opacity-50" />
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-r from-[#2A2A2D] to-[#1E1E20]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                id={`stat-${index}`}
                data-animate
                className={`text-center transform transition-all duration-700 ${isVisible[`stat-${index}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                  } hover:scale-110`}
                style={{ transitionDelay: stat.delay }}
              >
                <div className="bg-[#FFC107] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse">
                  <stat.icon className="w-8 h-8 text-[#1E1E20]" />
                </div>
                <h3 className="text-3xl font-bold text-[#FFC107] mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20 bg-[#1E1E20]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#FFC107] bg-clip-text text-transparent">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from various roles that match your skills and passion for
              making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteerRoles.map((role, index) => (
              <div
                key={index}
                id={`role-${index}`}
                data-animate
                className={`bg-gradient-to-br from-[#2A2A2D] to-[#1E1E20] p-6 rounded-2xl border border-gray-700 hover:border-[#FFC107] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group ${isVisible[`role-${index}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {role.image}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#FFC107] group-hover:text-yellow-400 transition-colors">
                  {role.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {role.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-white">
                    Required Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-[#FFC107] text-[#1E1E20] px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{role.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/*} <section className="py-20 bg-gradient-to-br from-[#2A2A2D] to-[#1E1E20]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#FFC107] bg-clip-text text-transparent">
              Volunteer Stories
            </h2>
            <p className="text-xl text-gray-300">
              Hear from our amazing volunteers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                id={`testimonial-${index}`}
                data-animate
                className={`bg-[#1E1E20] p-6 rounded-2xl border border-gray-700 hover:border-[#FFC107] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${isVisible[`testimonial-${index}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#FFC107] fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#FFC107] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-[#1E1E20]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#FFC107] bg-clip-text text-transparent">
              Apply to Volunteer
            </h2>
            <p className="text-xl text-gray-300">
              Take the first step towards making a difference
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4">
              {applicationSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${index <= activeStep
                        ? "bg-[#FFC107] text-[#1E1E20]"
                        : "bg-gray-600 text-gray-400"
                      }`}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>
                  {index < applicationSteps.length - 1 && (
                    <div
                      className={`w-16 h-1 mx-2 transition-all duration-300 ${index < activeStep ? "bg-[#FFC107]" : "bg-gray-600"
                        }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#2A2A2D] to-[#1E1E20] p-8 rounded-2xl border border-gray-700 shadow-2xl">
            {activeStep === 0 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-[#FFC107] mb-6">
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#FFC107] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#FFC107] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#FFC107] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Location *</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                      className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#FFC107] focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-[#FFC107] mb-6">
                  Skills & Availability
                </h3>
                <div>
                  <label className="block text-white mb-2">
                    Skills & Expertise
                  </label>
                  <textarea
                    value={formData.skills}
                    onChange={(e) =>
                      handleInputChange("skills", e.target.value)
                    }
                    className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#FFC107] focus:outline-none transition-colors h-32"
                    placeholder="Tell us about your skills, qualifications, and areas of expertise..."
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Availability</label>
                  <select
                    value={formData.availability}
                    onChange={(e) =>
                      handleInputChange("availability", e.target.value)
                    }
                    className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#FFC107] focus:outline-none transition-colors"
                  >
                    <option value="">Select your availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="both">Both weekdays and weekends</option>
                    <option value="flexible">Flexible schedule</option>
                  </select>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-[#FFC107] mb-6">
                  Experience & Motivation
                </h3>
                <div>
                  <label className="block text-white mb-2">
                    Previous Volunteer Experience
                  </label>
                  <textarea
                    value={formData.experience}
                    onChange={(e) =>
                      handleInputChange("experience", e.target.value)
                    }
                    className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#FFC107] focus:outline-none transition-colors h-32"
                    placeholder="Describe any previous volunteer work or relevant experience..."
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">
                    Why do you want to volunteer with GICCS?
                  </label>
                  <textarea
                    value={formData.motivation}
                    onChange={(e) =>
                      handleInputChange("motivation", e.target.value)
                    }
                    className="w-full bg-[#1E1E20] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#FFC107] focus:outline-none transition-colors h-32"
                    placeholder="Share your motivation and what you hope to achieve..."
                  />
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-[#FFC107] mb-6">
                  Review & Submit
                </h3>
                <div className="bg-[#1E1E20] p-6 rounded-lg border border-gray-600">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Application Summary
                  </h4>
                  <div className="space-y-2 text-gray-300">
                    <p>
                      <strong>Name:</strong> {formData.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {formData.email}
                    </p>
                    <p>
                      <strong>Location:</strong> {formData.location}
                    </p>
                    <p>
                      <strong>Availability:</strong> {formData.availability}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="rounded"
                  />
                  <label htmlFor="terms" className="text-gray-300">
                    I agree to the terms and conditions and privacy policy
                  </label>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={activeStep === 0}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {activeStep < applicationSteps.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 bg-[#FFC107] text-[#1E1E20] rounded-lg hover:bg-yellow-400 transition-colors font-semibold"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 bg-[#FFC107] text-[#1E1E20] rounded-lg hover:bg-yellow-400 transition-colors font-semibold flex items-center gap-2"
                >
                  Submit Application
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-[#2A2A2D] to-[#1E1E20]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white">Questions?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our volunteer coordinator
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:admin@giccs.or.tz"
                className="flex items-center gap-3 text-[#FFC107] hover:text-yellow-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                admin@giccs.or.tz
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-[#FFC107] hover:text-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +255 785 044 220
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BecomeVolunteerPage;
