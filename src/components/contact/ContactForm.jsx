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
      const data = {
        apikey: import.meta.env.VITE_ELASTICEMAIL_API_KEY,
        subject: `New Contact Form Message from ${formData.name}`,
        from: import.meta.env.VITE_SMTP_USERNAME, // Must be verified sender
        to: import.meta.env.VITE_SMTP_TO,
        bodyHtml: `
    <h3>New Contact Form Submission</h3>
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
    <p><strong>Message:</strong></p>
    <p>${formData.message.replace(/\n/g, "<br>")}</p>
  `,
        isTransactional: true, // ✅ This is required!
      };

      const response = await fetch(
        "https://api.elasticemail.com/v2/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(data),
        },
      );

      const result = await response.json();
      //console.log("Elastic Email API response:", result);

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
        console.error("API error:", result);
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

      <div onSubmit={handleSubmit}>
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
          type="button"
          onClick={handleSubmit}
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
      </div>
    </div>
  );
};

export default ContactForm;
