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
import SectionWrapper from "../components/sub-comp/SectionWrapper";
import BackToTopButton from "../components/sub-comp/BackToTopButton";
import Subscribe from "../components/contact/Subscribe";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Hero />

      <SectionWrapper bgColorHex="#fdf9f3">
        <CommunityImpact />
      </SectionWrapper>

      <SectionWrapper bgColorHex="#ffffff">
        <EmpowermentSection />
      </SectionWrapper>

      <SectionWrapper bgColorHex="#f7f9fc">
        <InnerCenter />
      </SectionWrapper>

      <SectionWrapper bgColorHex="#f7f9fc">
        <ImpactStatsSection />
      </SectionWrapper>

      {/*<SectionWrapper bgColorHex="#f2f5f3">
        <SupportCarousel />
      </SectionWrapper>
      */}

      <SectionWrapper bgColorHex="#ffffff">
        <VolunteerTeamSection />
      </SectionWrapper>

      <SectionWrapper bgColorHex="#f8f8f8">
        <FAQSection />
      </SectionWrapper>

      <SectionWrapper bgColorHex="#fdf9f3">
        <NewsletterSection />
      </SectionWrapper>

      <ImageMarquee />

      <BackToTopButton />

      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;
