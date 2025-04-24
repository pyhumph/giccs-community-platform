import React from "react";

const GoogleMap = ({ location }) => {
  // Generate the Google Maps embed URL with the location
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.951391316521!2d36.65760277492347!3d-3.3620537966126367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371c56dc7ed7ed%3A0xc47ab61515db909e!2sJr%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2stz!4v1744881660147!5m2!1sen!2stz";

  return (
    <div className="h-full min-h-96">
      <h2 className="text-3xl font-bold mb-6">Our Location</h2>
      <div className="rounded-lg overflow-hidden shadow-lg h-[600px]">
        <iframe
          title="Google Map Location"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={mapEmbedUrl}
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-gray-500 mt-4 text-sm">
        Visit us at our location in {location}
      </p>
    </div>
  );
};

export default GoogleMap;
