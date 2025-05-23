import React, { useState } from "react";
import NewsletterHeader from "../components/newsletter/NewsletterHeader";
import NewsletterFilters from "../components/newsletter/NewsletterFilters";
import NewsletterGrid from "../components/newsletter/NewsletterGrid";
import NewsletterSubscription from "../components/newsletter/NewsletterSubscription";
import Navbar from "../components/sub-comp/Navbar";
import Subscribe from "../components/contact/Subscribe";
import BackToTopButton from "../components/sub-comp/BackToTopButton";
import Footer from "../components/sub-comp/Footer";

const Newsletter = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <NewsletterHeader />
      <NewsletterFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <NewsletterGrid activeFilter={activeFilter} searchTerm={searchTerm} />
      <NewsletterSubscription />
      <Subscribe />
      <BackToTopButton />
      <Footer />
    </div>
  );
};

export default Newsletter;
