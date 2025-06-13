import { useState } from "react";
import Slogan from "../sub-comp/slogan";
import children from "../../assets/children-playing.png";
import mother from "../../assets/mother-child.png";

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="mb-4 md:mb-6 lg:mb-8">
      <button
        className={`w-full text-left py-3 md:py-4 lg:py-5 px-4 md:px-6 lg:px-8 rounded-full flex justify-between items-center transition-all duration-300 ${isOpen
            ? "bg-yellow-400 border border-gray-300 text-white rounded-t-2xl md:rounded-t-3xl lg:rounded-t-4xl rounded-b-none"
            : "bg-transparent border-2 border-gray-300 text-black hover:border-teal-700"
          }`}
        onClick={toggle}
      >
        <span className="font-semibold text-sm md:text-lg lg:text-xl pr-4">
          {question}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 md:h-6 md:w-6 transition-transform flex-shrink-0 ${isOpen ? "transform rotate-180" : ""
            }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-3 md:p-4 bg-white rounded-b-2xl md:rounded-b-3xl lg:rounded-b-4xl border border-gray-200 border-t-0">
          <p className="text-gray-600 leading-6 md:leading-7 lg:leading-8 text-sm md:text-base">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "How can I get involved with GICCS?",
      answer:
        "Join our programs, volunteer, or support our community projects.",
    },
    {
      id: 2,
      question: "Does GICCS offer long-term support?",
      answer:
        "Yes, we provide ongoing support through health, education, and empowerment programs.",
    },
    {
      id: 3,
      question: "What services does the Inner Center provide?",
      answer:
        "Free access to wellness, education, therapy, and skill-building sessions.",
    },
    {
      id: 4,
      question: "Who can benefit from GICCS programs?",
      answer:
        "Underserved individuals, families, and women with existing businesses.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
          {/* FAQ Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="flex justify-start mb-4">
              <Slogan />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 lg:mb-10 leading-tight">
              <span className="text-[#1E1E20]">Frequently </span>
              <span className="text-[#FFC107]">Asked</span>
              <br />
              <span className="text-[#1E1E20]">Questions</span>
            </h2>

            <div className="space-y-2 md:space-y-3 lg:space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={index === openIndex}
                  toggle={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>

          {/* Images Section */}
          <div className="w-full lg:w-1/2 relative">
            {/* Background */}
            <div className="bg-yellow-100 absolute inset-0 rounded-2xl lg:rounded-none lg:right-0 lg:w-[120%]"></div>

            <div className="bg-teal-700 absolute inset-0 rounded-2xl lg:rounded-none lg:right-0 lg:w-[120%]"></div>

            {/* Images Container */}
            <div className="relative z-10 p-4 md:p-6 lg:p-8">
              <div className="relative max-w-full">
                {/* Main Image */}
                <img
                  src={children}
                  alt="Children playing"
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl border-4 md:border-8 lg:border-10 border-white shadow-2xl h-64 md:h-80 lg:h-96 xl:h-[43rem] object-cover mx-auto lg:mx-0"
                />

                {/* Floating Image */}
                <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 lg:bottom-12 lg:-right-16 xl:bottom-[12rem] xl:-right-20 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64">
                  <img
                    src={mother}
                    alt="Mother with child"
                    className="rounded-2xl w-full h-full border-4 md:border-6 lg:border-8 xl:border-10 border-white shadow-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
