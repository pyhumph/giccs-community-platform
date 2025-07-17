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
                <span className="font-semibold text-sm lg:text-sm">{question}</span>
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

export default function RenewableEnergyFAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            id: 1,
            question:
                "How does GICCS select communities for renewable energy projects?",
            answer:
                "We prioritize communities with limited access to reliable electricity, focusing on rural areas, schools, healthcare facilities, and regions where renewable energy can have the greatest impact on quality of life and economic development.",
        },
        {
            id: 2,
            question: "What types of renewable energy systems do you install?",
            answer:
                "We specialize in solar panel systems, small-scale wind turbines, and energy storage solutions. Our approach is tailored to each community's specific needs, climate conditions, and energy requirements.",
        },
        {
            id: 3,
            question:
                "How do you ensure the long-term sustainability of these projects?",
            answer:
                "We provide comprehensive training to local community members, establish maintenance protocols, and create partnerships with local organizations. Our goal is to build local capacity so communities can maintain and expand their renewable energy systems independently.",
        },
        {
            id: 4,
            question: "Can individuals get involved beyond making donations?",
            answer:
                "Absolutely! We welcome volunteers with technical expertise, offer internship programs, and provide opportunities for skilled professionals to contribute their time and knowledge to our renewable energy initiatives.",
        },

        {
            id: 5,
            question: "How do you measure the success of renewable energy projects?",
            answer:
                "We track multiple metrics including the number of homes powered, CO₂ emissions reduced, jobs created, educational outcomes improved, and healthcare services enhanced. We conduct regular community assessments to ensure our projects meet their intended goals.",
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
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 lg:mb-10 leading-tight">
                        <span className="text-[#1E1E20]">Frequently </span>
                        <span className="text-[#FFC107]">Asked</span>
                        <br />
                        <span className="text-dark-green">Questions</span>
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

                <div className="w-full lg:w-1/2 relative">
                    <div className="bg-yellow-100 absolute inset-0 rounded-2xl lg:rounded-none lg:right-0 lg:w-[120%]"></div>

                    <div className="bg-teal-700 absolute inset-0 rounded-2xl lg:rounded-none lg:right-0 lg:w-[120%]"></div>

                    <div className="relative z-10 p-4 md:p-6 lg:p-8">
                        <div className="relative max-w-full">
                            <img
                                src={children}
                                alt="Children playing"
                                className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl border-4 md:border-8 lg:border-10 border-white shadow-2xl h-64 md:h-80 lg:h-96 xl:h-[43rem] object-cover mx-auto lg:mx-0"
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
