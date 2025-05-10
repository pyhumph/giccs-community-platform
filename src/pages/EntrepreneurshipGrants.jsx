import EntrepreneurshipDonate from "../components/programs/EntrepreneurshipGrants/EntrepreneurshipDonate";
import EntrepreneurshipHeader from "../components/programs/EntrepreneurshipGrants/EntrepreneurshipHeader";
import EntrepreneurshipImpact from "../components/programs/EntrepreneurshipGrants/EntrepreneurshipImpact";
import EntrepreneurshipIntro from "../components/programs/EntrepreneurshipGrants/EntrepreneurshipIntro";
import EntrepreneurshipServices from "../components/programs/EntrepreneurshipGrants/EntrepreneurshipServices";
import EntrepreneurshipTestimonials from "../components/programs/EntrepreneurshipGrants/EntrepreneurshipTestimonials";
import BackToTopButton from "../components/sub-comp/BackToTopButton";
import Navbar from "../components/sub-comp/Navbar";

function EntrepreneurshipGrants() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <EntrepreneurshipHeader />
      <EntrepreneurshipIntro />
      <EntrepreneurshipServices />
      <EntrepreneurshipImpact />
      <EntrepreneurshipTestimonials />
      <EntrepreneurshipDonate />
      <BackToTopButton />
    </div>
  );
}

export default EntrepreneurshipGrants;
