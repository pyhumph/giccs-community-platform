import { useState } from "react";
import Slogan from "../sub-comp/slogan";
import children from "../../assets/children-playing.png";
import mother from "../../assets/mother-child.png";

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="mb-8">
      <button
        className={`w-full text-left py-5 px-8 rounded-full flex justify-between items-center ${isOpen ? "bg-teal-700 border border-gray-300 text-white rounded-t-4xl rounded-b-none" : "bg-transparent border-2 border-gray-300 text-black"}`}
        onClick={toggle}
      >
        <span className="font-semibold text-xl">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
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
        <div className="p-4 bg-white rounded-b-4xl border border-gray-200 border-t-0">
          <p className="text-gray-600 leading-8">{answer}</p>
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
        "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable The A Content Of A Page When Looking At Its Layout. Many Desktop Publishing Packages And Web Page Editors.",
    },
    {
      id: 2,
      question: "Does GICCS offer long-term support?",
      answer:
        "Yes, we have recipes suitable for all skill levels, from beginners to advanced cooks.",
    },
    {
      id: 3,
      question: "What services does the Inner Center provide?",
      answer:
        "Absolutely! We provide detailed cooking tips, techniques, and step-by-step instructions.",
    },
    {
      id: 4,
      question: "Who can benefit from GICCS programs?",
      answer:
        "We update our recipe collection regularly with seasonal dishes and new culinary trends.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-20">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="flex justify-start mb-4">
            <Slogan />
          </div>
          <h2 className="text-6xl font-extrabold mb-10">
            <span className="text-[#1E1E20]">Frequently </span>
            <span className="text-[#FFC107]">Asked</span>
            <br />
            <span className="text-dark-green">Questions</span>
          </h2>

          <div className="space-y-4">
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

        <div className="md:w-1/2 md:pl-8 relative">
          <div className="bg-teal-700 h-full w-full absolute -z-10 right-0"></div>
          <div className="relative z-10 p-6">
            <div className="relative">
              <img
                src={children}
                alt="Children playing"
                className="w-[98%] rounded-2xl border-10 border-white shadow-2xl shadow-black h-[43rem] object-cover"
              />
              <div className="absolute -right-40 bottom-[12rem]">
                <img
                  src={mother}
                  alt="Mother with child"
                  className="rounded-2xl w-full h-full border-10 border-white shadow-2xl shadow-black object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
