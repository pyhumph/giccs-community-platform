import React, { useState } from "react";
import InnerCenterHero from "../components/Inner-Center/InnerCenterHero";
import InnerCenterMission from "../components/Inner-Center/InnerCenterMission";
import InnerCenterYoga from "../components/Inner-Center/InnerCenterYoga";
import InnerCenterAgreementModal from "../components/Inner-Center/InnerCenterAgreementModal";
import InnerCenterContact from "../components/Inner-Center/InnerCenterContact";
import InnerCenterPrograms from "../components/Inner-Center/InnerCenterPrograms";
import Navbar from "../components/sub-comp/Navbar";
import Subscribe from "../components/contact/Subscribe";
import BackToTopButton from "../components/sub-comp/BackToTopButton";
import Footer from "../components/sub-comp/Footer";

const InnerCenter = () => {
  const [showAgreement, setShowAgreement] = useState(false);

  const handleShowAgreement = () => {
    setShowAgreement(true);
  };

  const handleCloseAgreement = () => {
    setShowAgreement(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <InnerCenterHero onShowAgreement={handleShowAgreement} />

      {/* Mission Section */}
      <InnerCenterMission />

      {/* Programs Section */}
      <InnerCenterPrograms />

      {/* Yoga Initiative Section */}
      <InnerCenterYoga />

      {/* Contact Section */}
      <InnerCenterContact />

      {/* Agreement Modal */}
      <InnerCenterAgreementModal
        isOpen={showAgreement}
        onClose={handleCloseAgreement}
      />
      <Subscribe />
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default InnerCenter;
