import React from "react";
import BecomeVolunteerPage from "../components/get-involved/Volunteer";
import Navbar from "../components/sub-comp/Navbar";
import Subscribe from "../components/contact/Subscribe";
import Footer from "../components/sub-comp/Footer";
import BackToTopButton from "../components/sub-comp/BackToTopButton";

const Volunteer = () => {
  return (
    <div>
      <Navbar />
      <BecomeVolunteerPage />
      <Subscribe />
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default Volunteer;
