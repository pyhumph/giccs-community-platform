import React from "react";

const ContactTitle = ({ showImage = true }) => {
  return (
    <div>
      <h2 className="text-4xl mt-10 font-bold mb-4 flex items-center">
        Get in Touch With Us 👋
      </h2>
      <p className="text-gray-600 text-xl mb-8">
        We're here to listen and help! Whether you have questions about our
        charity programs, want to make a donation, or are interested in
        volunteering, our team is ready to connect with you. Every conversation
        is an opportunity to make a difference together.
      </p>
      {showImage && (
        <div className="mt-8">
          <img
            src="https://www.1stformationsblog.co.uk/wp-content/uploads/2022/09/Shutterstock_573851893.jpg"
            alt="Our Team"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ContactTitle;
