import React from "react";
import Donation from "../components/donate/Donation";
import Navbar from "../components/sub-comp/Navbar";
import Footer from "../components/sub-comp/Footer";
import Subscribe from "../components/contact/Subscribe";

const Donate = () => {
  return (
    <div>
      <Navbar />
      <Donation />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Donate;
