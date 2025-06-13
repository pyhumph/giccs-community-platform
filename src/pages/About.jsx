import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import AboutHeader from "../components/about/AboutHeader";
import AboutUs from "../components/about/AboutUs";
import BoardMembersSection from "../components/about/BoardMembers.jsx";
import CharityHeroSection from "../components/about/DonationSection";
import MissionVisionSection from "../components/about/MissionVision";
import MissionVisionComp from "../components/about/MissionVisionSection.jsx";
import ServicesSection from "../components/about/ServiceSection";
import VolunteerTeamSection from "../components/about/VolunteerTeam";
import Subscribe from "../components/contact/Subscribe.jsx";
import Footer from "../components/sub-comp/Footer.jsx";
import Navbar from "../components/sub-comp/Navbar";
import BackToTopButton from "../components/sub-comp/BackToTopButton.jsx";
import AboutUsHist from "../components/about/AboutHistory.jsx";

function About() {
  const location = useLocation();
  const boardRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToBoard && boardRef.current) {
      boardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div>
      <Navbar />
      <AboutHeader />
      {/*<AboutUsHist />*/}
      <AboutUs />
      <MissionVisionSection />
      {/*<CharityHeroSection />*/}
      <div ref={boardRef}>
        <BoardMembersSection selectedMemberId={location.state?.memberId} />
      </div>

      <ServicesSection />
      {/*<VolunteerTeamSection />*/}
      <Subscribe />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default About;
