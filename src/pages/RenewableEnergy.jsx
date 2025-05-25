import Subscribe from "../components/contact/Subscribe";
import CallToAction from "../components/programs/renewable-energy/CallToAction";
import RenewableEnergyContact from "../components/programs/renewable-energy/RenewableEnergyContact";
import RenewableEnergyDonate from "../components/programs/renewable-energy/RenewableEnergyDonate";
import RenewableEnergyFAQ from "../components/programs/renewable-energy/RenewableEnergyFAQ";
import RenewableEnergyHeader from "../components/programs/renewable-energy/RenewableEnergyHeader";
import RenewableEnergyImpact from "../components/programs/renewable-energy/RenewableEnergyImpact";
import RenewableEnergyIntro from "../components/programs/renewable-energy/RenewableEnergyIntro";
import RenewableEnergyServices from "../components/programs/renewable-energy/RenewableEnergyServices";
import RenewableEnergyTestimonials from "../components/programs/renewable-energy/RenewableEnergyTestimonial";
import BackToTopButton from "../components/sub-comp/BackToTopButton";
import Footer from "../components/sub-comp/Footer";
import Navbar from "../components/sub-comp/Navbar";

const RenewableEnergyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>

      <RenewableEnergyHeader />
      <RenewableEnergyIntro />
      <RenewableEnergyServices />
      <RenewableEnergyImpact />
      <RenewableEnergyTestimonials />
      <RenewableEnergyDonate />
      <RenewableEnergyFAQ />
      <RenewableEnergyContact />
      <CallToAction />
      <Subscribe />
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default RenewableEnergyPage;
