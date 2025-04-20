import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CommunityImpact from "../components/CommunityImpact";
import EmpowermentSection from "../components/Empowerement";
import InnerCenter from "../components/InnerCenter";
import ImpactStatsSection from "../components/ImpactStats";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CommunityImpact />
      <EmpowermentSection />
      <InnerCenter />
      <ImpactStatsSection />
    </div>
  );
}

export default Home;
