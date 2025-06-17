import Application from "../components/application/Application";
import Subscribe from "../components/contact/Subscribe";
import Footer from "../components/sub-comp/Footer";
import Navbar from "../components/sub-comp/Navbar";

function ApplicationPage() {
  return (
    <div>
      <Navbar />
      <Application />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default ApplicationPage;
