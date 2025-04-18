import React from "react";
import Navbar from "./Navbar";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactTitle from "./ContactTitle";
import GoogleMap from "./GoogleMap";
import Newsletter from "./Newsletter";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Navbar is imported from components */}
      <Navbar />

      <ContactHeader />

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Info and Image */}
          <ContactTitle />

          {/* Right Section - Form */}
          <ContactForm />
        </div>
      </div>

      {/* Map and Details Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Google Map */}
          <GoogleMap location="Sakina, Arusha, Tanzania" />

          {/* Right Section - Contact Details */}
          <ContactInfo showImage={false} />
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
