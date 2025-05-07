import React from "react";
import HealthHeader from "../components/programs/health/HealthHeader";
import HealthIntro from "../components/programs/health/HealthIntro";
import HealthServices from "../components/programs/health/HealthServices";
import HealthImpact from "../components/programs/health/HealthImpact";
import HealthTestimonials from "../components/programs/health/HealthTestimonials";
import HealthDonate from "../components/programs/health/HealthDonate";
import Footer from "../components/sub-comp/Footer";
import Navbar from "../components/sub-comp/Navbar";
import Newsletter from "../components/contact/Newsletter";
import BackToTopButton from "../components/sub-comp/BackToTopButton";

const Health = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <HealthHeader />
      <HealthIntro />
      <HealthServices />
      <HealthImpact />
      <HealthTestimonials />
      <HealthDonate />
      <Newsletter />
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default Health;
