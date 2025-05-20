import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../../sub-comp/SectionWrapper";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        <svg
          className={`w-6 h-6 text-yellow-500 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const EntrepreneurshipFAQ = () => {
  const faqs = [
    {
      question: "How much funding can I apply for?",
      answer:
        "Grant amounts vary based on the business needs, stage of development, and potential impact. Generally, our grants range from $500 to $5,000. The exact amount will be determined during the application review process based on your specific business needs and growth plan.",
    },
    {
      question: "What can the grant money be used for?",
      answer:
        "Grant funds can be used for various business purposes, including purchasing equipment or inventory, marketing and advertising, website development, business training or certifications, hiring staff, renting commercial space, or product development. All proposed uses must be clearly outlined in your application and directly related to business growth.",
    },
    {
      question: "What does the application process involve?",
      answer:
        "The application process includes completing an online application form, submitting a business plan or proposal, providing proof of community membership, participating in an interview with our selection committee, and demonstrating how the grant will impact your business and community. Shortlisted applicants may be asked to present their business in person.",
    },
    {
      question: "How often do you accept applications?",
      answer:
        "We accept applications on a quarterly basis. The next application window opens on June 1st, 2023. However, you can express your interest at any time by completing the pre-application form on our website, and we'll notify you when applications open.",
    },
    {
      question: "What kind of business training do you provide?",
      answer:
        "Our business training program covers essential topics such as business planning, financial management, marketing strategies, digital skills, customer service, product development, and operational efficiency. Training is delivered through workshops, webinars, one-on-one coaching sessions, and online courses tailored to your business needs.",
    },
    {
      question: "Do I need to repay the grant?",
      answer:
        "No, our grants are not loans and do not need to be repaid. However, grant recipients are expected to participate in our business training program, attend networking events, and provide regular updates on their business progress. We also encourage recipients to mentor future entrepreneurs in the community when possible.",
    },
    {
      question: "Can I apply if my business is just an idea?",
      answer:
        "Our program is primarily designed for women who already have an ongoing business. However, we do have a special track for promising business ideas in the early concept stage. These applicants will need to demonstrate a well-researched business plan, market analysis, and commitment to launching their business within 3-6 months of receiving support.",
    },
    {
      question: "Am I eligible if I have a part-time business?",
      answer:
        "Yes, part-time businesses are eligible. We understand that many entrepreneurs start their businesses while maintaining other employment. Your application will be evaluated based on your business potential, growth plans, and commitment to developing your venture, not on whether it's currently full-time or part-time.",
    },
    {
      question: "How long does it take to receive funding after approval?",
      answer:
        "Once approved, funding is typically disbursed within 2-4 weeks. The exact timeline depends on the completion of all required paperwork, attendance at orientation sessions, and finalization of your business development plan with our advisors.",
    },
  ];

  return (
    <SectionWrapper
      id="faq"
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about our entrepreneurship program"
      className="bg-gray-50"
    >
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your question answered?
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EntrepreneurshipFAQ;
