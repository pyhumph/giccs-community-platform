import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus("");

    try {
      const res = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-300">
      <h2 className="text-3xl font-bold mb-4">Fill Up The Form</h2>
      <p className="text-gray-600 mb-4">
        Feel Free To Contact With Us, We'll Get Back To You ASAP!
      </p>
      <p className="text-red-500 text-sm mb-6">* Fields Are Marked</p>

      {submitStatus === "success" && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          ✅ Thank you! Your message has been sent successfully.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          ❌ Sorry, there was an error sending your message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 border bg-gray-100 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-yellow-500"
              placeholder="Enter Name"
            />
            <span className="absolute right-4 top-3 text-gray-400">👤</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 border bg-gray-100 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-yellow-500"
              placeholder="Enter Email"
            />
            <span className="absolute right-4 top-3 text-gray-400">✉️</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-4 border bg-gray-100 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-yellow-500"
              placeholder="Phone Number"
            />
            <span className="absolute right-4 top-3 text-gray-400">📱</span>
          </div>
        </div>
        <div className="mb-6">
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 border bg-gray-100 border-gray-300 rounded-lg h-32 text-gray-700 focus:outline-none focus:border-yellow-500"
              placeholder="Your Message..."
            ></textarea>
            <span className="absolute right-4 top-3 text-gray-400">💬</span>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
