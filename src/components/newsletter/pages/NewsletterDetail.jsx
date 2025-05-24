import React from "react";
import { useParams, Link } from "react-router-dom";
import { Tag, ArrowLeft, Calendar, Clock, Eye, User } from "lucide-react";
import NewsletterDetailHeader from "../news-details/NewsletterDetailHeader";
import SocialShare from "../news-details/SocialShare";
import Navbar from "../../sub-comp/Navbar";
import NewsletterSubscription from "../NewsletterSubscription";
import BackToTopButton from "../../sub-comp/BackToTopButton";
import Footer from "../../sub-comp/Footer";
import Subscribe from "../../contact/Subscribe";

// Main Newsletter Detail Page Component
const NewsletterDetailPage = () => {
  const { id } = useParams();

  // This would typically come from props or URL params
  const newsletters = [
    {
      id: 1,
      title: "Year of Transformation: Our 2024 Impact Report",
      date: "December 15, 2024",
      category: "Impact Stories",
      readTime: 8,
      views: 1245,
      author: "GICCS Team",
      preview:
        "Discover how your support transformed thousands of lives this year. From education breakthroughs to healthcare innovations, see the incredible impact we've made together in communities worldwide.",
      introduction:
        "As we approach the end of 2024, it's time to reflect on the incredible journey we've shared and the lives we've transformed together. This year has been nothing short of extraordinary, marked by unprecedented growth, innovative programs, and most importantly, the positive impact we've created in communities worldwide.",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["impact", "annual-report", "2024", "transformation", "community"],
      hasAudio: true,
      content: `
        <h2>Our Journey in 2024</h2>
        <p>This year marked a significant milestone in our organization's mission to create lasting change in communities worldwide. Through innovative programs and dedicated partnerships, we've been able to reach more people than ever before.</p>
        
        <h3>Key Achievements</h3>
        <ul>
          <li><strong>Education Impact:</strong> Provided educational resources to over 10,000 students across 15 countries</li>
          <li><strong>Healthcare Access:</strong> Established 25 new healthcare facilities in underserved communities</li>
          <li><strong>Economic Empowerment:</strong> Supported 500+ entrepreneurs with microfinance and training programs</li>
          <li><strong>Environmental Initiatives:</strong> Planted 100,000 trees and implemented sustainable practices in 50 communities</li>
        </ul>
        
        <h3>Looking Forward</h3>
        <p>As we move into 2025, we're excited about the new opportunities ahead. With your continued support, we plan to expand our reach and deepen our impact in existing communities while exploring innovative approaches to address emerging challenges.</p>
        
        <p>Thank you for being part of this incredible journey. Together, we're not just changing lives – we're building a better future for generations to come.</p>
      `,
    },
  ];

  const newsletter = newsletters.find((n) => n.id === Number(id));

  if (!newsletter) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Newsletter Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The newsletter with ID {id} could not be found.
          </p>
          <Link
            to="/newsletter"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Back to Newsletters
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <NewsletterDetailHeader newsletter={newsletter} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/newsletter"
          className="inline-flex items-center text-gray-600 hover:text-yellow-600 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Newsletters
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="mb-8">
              <img
                src={newsletter.image}
                alt={newsletter.title}
                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {newsletter.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {newsletter.readTime} min read
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                {newsletter.views} views
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {newsletter.author}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {newsletter.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {newsletter.title}
            </h1>

            {/* Introduction */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
              <p className="text-lg text-gray-700 italic">
                {newsletter.introduction}
              </p>
            </div>

            {/* Main Content */}
            <div
              className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: newsletter.content }}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <SocialShare newsletter={newsletter} />
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSubscription />
        </div>
      </div>

      {/* Footer */}
      <Subscribe />

      <Footer />

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
};

export default NewsletterDetailPage;
