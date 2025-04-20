import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CommunityImpactSection from "../components/CommunityImpact";
import EmpowermentSection from "../components/Empowerement";
import InnerCenter from "../components/InnerCenter";
import ImpactStatsSection from "../components/ImpactStats";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CommunityImpactSection />
      <EmpowermentSection />
      <InnerCenter />
      <ImpactStatsSection />
    </div>
  );
}

export default Home;
