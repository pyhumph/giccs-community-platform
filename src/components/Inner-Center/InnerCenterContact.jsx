import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Calendar,
  Phone,
  Mail,
  Clock,
  Users,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const InnerCenterContact = () => {
  const [loading, setLoading] = useState(false);
  const [inView, setInView] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (typeof window.Email === "undefined") {
        throw new Error("SMTP.js not loaded. Check if the script is added.");
      }

      const result = await window.Email.send({
        Host: import.meta.env.VITE_SMTP_HOST,
        Username: import.meta.env.VITE_SMTP_USERNAME,
        Password: import.meta.env.VITE_SMTP_PASSWORD,
        To: import.meta.env.VITE_SMTP_USERNAME,
        From: import.meta.env.VITE_SMTP_USERNAME,
        Subject: `New Inner Center Inquiry from ${formData.name}`,
        Body: `
        <h2>New Inquiry from Inner Center Page</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || "Not Provided"}</p>
        <p><strong>Program Interested:</strong> ${formData.program || "Not Selected"}</p>
        <p><strong>Message:</strong><br>${formData.message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>This message was sent from the GICCS Inner Center form.</em></p>
      `,
      });

      if (result === "OK") {
        alert("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          program: "",
          message: "",
        });
      } else {
        console.error("Email sending error:", result);
        alert("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("❌ An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Our Center",
      description:
        "Located in the heart of the community, easily accessible by public transport",
      details: "Contact us for our current location and facility details",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description:
        "We offer programs throughout the week to accommodate your busy lifestyle",
      details: "Monday - Saturday: 6:00 AM - 8:00 PM",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Get In Touch",
      description:
        "Our friendly team is here to answer your questions and help you get started",
      details: "Call or WhatsApp us for immediate assistance",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
  ];

  const programs = [
    "Yoga Classes",
    "Meditation Sessions",
    "Counseling & Therapy",
    "Business Training",
    "Health Education",
    "Alternative Healing",
    "Community Workshops",
    "Custom Program",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 opacity-5 rounded-full translate-x-48 translate-y-48"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400 opacity-3 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-yellow-400 bg-opacity-20 border border-yellow-400 border-opacity-30 rounded-full px-6 py-2 mb-6">
            <MessageCircle className="w-5 h-5 text-yellow-600" />
            <span className="text-yellow-700 font-semibold">Get Connected</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Visit Our
            <span className="block text-yellow-500 relative">
              Inner Center
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-yellow-400 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to join our community? Contact us to learn more about our
            programs or to{" "}
            <span className="text-yellow-600 font-semibold">reserve space</span>{" "}
            for your initiative.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div
          className={`grid md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`group ${info.bgColor} border-2 border-transparent hover:border-yellow-400 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
              >
                {info.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                {info.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {info.description}
              </p>

              <p className="text-sm text-gray-500 font-medium">
                {info.details}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div
          className={`grid lg:grid-cols-2 gap-16 items-start transform transition-all duration-1000 delay-500 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {/* Left Column - Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Start Your Journey Today
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Fill out the form below and we'll get back to you within 24 hours
              to discuss how Inner Center can support your wellness journey.
            </p>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors duration-300 group-hover:border-gray-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors duration-300 group-hover:border-gray-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors duration-300 group-hover:border-gray-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Program Interest
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors duration-300 group-hover:border-gray-300"
                  >
                    <option value="">Select a program</option>
                    {programs.map((program, index) => (
                      <option key={index} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors duration-300 group-hover:border-gray-300 resize-none"
                  placeholder="Tell us about your goals, questions, or how we can help you..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 transform ${loading ? "opacity-60 cursor-not-allowed" : "hover:shadow-lg hover:shadow-yellow-400/25 hover:scale-105"}`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">
                Why Choose Inner Center?
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-90">Free Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm opacity-90">Program Types</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm opacity-90">Community Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">7</div>
                  <div className="text-sm opacity-90">Days a Week</div>
                </div>
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div className="group cursor-pointer">
                  <h4 className="font-semibold text-gray-700 group-hover:text-yellow-600 transition-colors duration-300">
                    Are all programs really free?
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Yes! All our community programs are completely free of
                    charge.
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <h4 className="font-semibold text-gray-700 group-hover:text-yellow-600 transition-colors duration-300">
                    Do I need experience for yoga classes?
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Not at all! We welcome beginners and offer classes for all
                    levels.
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <h4 className="font-semibold text-gray-700 group-hover:text-yellow-600 transition-colors duration-300">
                    How do I reserve space for my organization?
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Contact us to discuss your needs and review our usage
                    agreement.
                  </p>
                </div>
              </div>
              {/*<button className="w-full mt-6 border-2 border-yellow-400 text-yellow-600 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-white transition-all duration-300">
                View All FAQs
              </button>
              */}
            </div>

            {/* Emergency Contact */}
            {/*<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-4">
                Need Immediate Support?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                For urgent matters or crisis support, our counseling team is
                available through our partner organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-yellow-400 text-gray-900 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-colors duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Emergency Line
                </button>
                <button className="flex-1 border-2 border-gray-600 text-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Crisis Chat
                </button>
              </div>
            </div>*/}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 hover:shadow-yellow-400/10 transition-all duration-300">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Your Journey to Wellness Starts Here
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're looking for personal growth, community
                connection, or professional development, Inner Center is your
                gateway to transformation. Join hundreds of community members
                who have already begun their journey with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  <Users className="w-5 h-5" />
                  Join Our Community
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default InnerCenterContact;
