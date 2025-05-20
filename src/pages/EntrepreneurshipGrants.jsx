import Subscribe from "../components/contact/Subscribe";
import EntrepreneurshipDonate from "../components/programs/EntrepreneurshipGrants/EntrepreneurshipDonate";
import EntrepreneurshipFAQ from "../components/programs/EntrepreneurshipGrants/EntrepreneurshipFAQ";
import EntrepreneurshipHeader from "../components/programs/EntrepreneurshipGrants/EntrepreneurshipHeader";
import EntrepreneurshipImpact from "../components/programs/EntrepreneurshipGrants/EntrepreneurshipImpact";
import EntrepreneurshipIntro from "../components/programs/EntrepreneurshipGrants/EntrepreneurshipIntro";
import EntrepreneurshipServices from "../components/programs/EntrepreneurshipGrants/EntrepreneurshipServices";
import EntrepreneurshipTestimonials from "../components/programs/EntrepreneurshipGrants/EntrepreneurshipTestimonials";
import BackToTopButton from "../components/sub-comp/BackToTopButton";
import Footer from "../components/sub-comp/Footer";
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
      <EntrepreneurshipFAQ />
      <Subscribe />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default EntrepreneurshipGrants;
