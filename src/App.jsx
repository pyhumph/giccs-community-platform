import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Health from "./pages/Health";
import Education from "./pages/Education";
import EntrepreneurshipGrants from "./pages/EntrepreneurshipGrants";
import Donate from "./pages/Donate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/health" element={<Health />} />
        <Route path="/programs/education" element={<Education />} />
        <Route
          path="/programs/entrepreneurship-business-grants"
          element={<EntrepreneurshipGrants />}
        />

        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;
