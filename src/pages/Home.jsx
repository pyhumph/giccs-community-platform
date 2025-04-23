import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CommunityImpact from "../components/CommunityImpact";
import EmpowermentSection from "../components/Empowerement";
import InnerCenter from "../components/InnerCenter";
import ImpactStatsSection from "../components/ImpactStats";
import SupportCarousel from "../components/SupportCarousel";
import VolunteerTeamSection from "../components/VolunteerTeam";
import FAQSection from "../components/FAQ";
import NewsletterSection from "../components/NewsLetter";
import ImageMarquee from "../components/ImageMarquee";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CommunityImpact />
      <EmpowermentSection />
      <InnerCenter />
      <ImpactStatsSection />
      <SupportCarousel />
      <VolunteerTeamSection />
      <FAQSection />
      <NewsletterSection />
      <ImageMarquee />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
