import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Health from "./pages/Health";
import Education from "./pages/Education";
import EntrepreneurshipGrants from "./pages/EntrepreneurshipGrants";
import Donate from "./pages/Donate";
import InnerCenter from "./pages/InnerCenter";
import Newsletter from "./pages/Newsletter";
import NewsletterDetailPage from "./components/newsletter/pages/NewsletterDetail";
import Application from "./pages/Application";
import Volunteer from "./pages/BecomeVolunteer";
import RenewableEnergyPage from "./pages/RenewableEnergy";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/health" element={<Health />} />
        <Route path="/programs/education" element={<Education />} />
        <Route path="/renewable-energy" element={<RenewableEnergyPage />} />
        <Route path="/donation/application" element={<Application />} />
        <Route
          path="/programs/entrepreneurship-business-grants"
          element={<EntrepreneurshipGrants />}
        />
        <Route path="/inner-center" element={<InnerCenter />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/newsletter/:id" element={<NewsletterDetailPage />} />
        <Route path="/volunteer" element={<Volunteer />} />

        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;
