import Navbar from "../components/sub-comp/Navbar";
import Hero from "../components/home/Hero";
import CommunityImpact from "../components/home/CommunityImpact";
import EmpowermentSection from "../components/home/Empowerement";
import InnerCenter from "../components/home/InnerCenter";
import ImpactStatsSection from "../components/home/ImpactStats";
import SupportCarousel from "../components/home/SupportCarousel";
import VolunteerTeamSection from "../components/home/VolunteerTeam";
import FAQSection from "../components/home/FAQ";
import NewsletterSection from "../components/home/NewsLetter";
import ImageMarquee from "../components/home/ImageMarquee";
import Footer from "../components/sub-comp/Footer";
import Newsletter from "../components/contact/Newsletter";

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
