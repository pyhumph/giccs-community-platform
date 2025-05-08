import React from "react";
import EducationHeader from "../components/programs/education/EducationHeader";
import EducationIntro from "../components/programs/education/EducationIntro";
import EducationServices from "../components/programs/education/EducationServices";
import EducationImpact from "../components/programs/education/EducationImpact";
import EducationTestimonials from "../components/programs/education/EducationTestimonials";
import EducationDonate from "../components/programs/education/EducationDonate";
import Navbar from "../components/sub-comp/Navbar";
import Newsletter from "../components/contact/Newsletter";
import Footer from "../components/sub-comp/Footer";
import BackToTopButton from "../components/sub-comp/BackToTopButton";

function Education() {
  return (
    <div className="education-page">
      <Navbar />
      <EducationHeader />
      <EducationIntro />
      <EducationServices />
      <EducationImpact />
      <EducationTestimonials />
      <EducationDonate />
      <Newsletter />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default Education;
