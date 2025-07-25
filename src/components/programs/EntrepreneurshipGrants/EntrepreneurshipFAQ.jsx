import { useState } from "react";
import Slogan from "../../sub-comp/slogan";
import children from "../../../assets/image.png";
import mother from "../../../assets/image02.jpg";
import businessIcon from "../../../assets/business-strategy.png";

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

export default function EntrepreneurshipFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "How much funding can I apply for?",
      answer:
        "Grant amounts vary based on the business needs, stage of development, and potential impact. Generally, our grants range from $500 to $5,000. The exact amount will be determined during the application review process based on your specific business needs and growth plan.",
    },
    {
      id: 2,
      question: "What can the grant money be used for?",
      answer:
        "Grant funds can be used for various business purposes, including purchasing equipment or inventory, marketing and advertising, website development, business training or certifications, hiring staff, renting commercial space, or product development. All proposed uses must be clearly outlined in your application and directly related to business growth.",
    },
    {
      id: 3,
      question: "What does the application process involve?",
      answer:
        "The application process includes completing an online application form, submitting a business plan or proposal, providing proof of community membership, participating in an interview with our selection committee, and demonstrating how the grant will impact your business and community. Shortlisted applicants may be asked to present their business in person.",
    },
    {
      id: 4,
      question: "How often do you accept applications?",
      answer:
        "We accept applications on a quarterly basis. The next application window opens on June 1st, 2023. However, you can express your interest at any time by completing the pre-application form on our website, and we'll notify you when applications open.",
    },

    {
      id: 5,
      question: "Do I need to repay the grant?",
      answer:
        "No, our grants are not loans and do not need to be repaid. However, grant recipients are expected to participate in our business training program, attend networking events, and provide regular updates on their business progress. We also encourage recipients to mentor future entrepreneurs in the community when possible.",
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
            <Slogan
              text="Empowering Women, Strengthening Communities"
              image={businessIcon}
            />
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
  );
}
