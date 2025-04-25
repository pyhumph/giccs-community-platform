import AboutHeader from "../components/about/AboutHeader";
import AboutUs from "../components/about/AboutUs";
import CharityHeroSection from "../components/about/DonationSection";
import MissionVisionSection from "../components/about/MissionVision";
import ServicesSection from "../components/about/ServiceSection";
import VolunteerTeamSection from "../components/about/VolunteerTeam";
import Footer from "../components/sub-comp/Footer.jsx";
import Navbar from "../components/sub-comp/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <AboutUs />
      <MissionVisionSection />
      <ServicesSection />
      <CharityHeroSection />
      <VolunteerTeamSection />
      <Footer />
    </div>
  );
}

export default About;
