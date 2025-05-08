import React from "react";
import SectionWrapper from "../../sub-comp/SectionWrapper";
import eduIcon from "../../../assets/education_04.png";
import Slogan from "../../sub-comp/slogan";
import CTAButton from "../../sub-comp/Button";

function EducationServices() {
    // Eligibility criteria
    const eligibilityCriteria = [
        {
            id: 1,
            title: "Academic Excellence",
            description:
                "Completed Form 4 (Ordinary Level) or Form 6 (Advanced Level) with division I, II or III",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
        },
        {
            id: 2,
            title: "Community Membership",
            description: "Must be from Shia Khoja Ithnaasheri Community",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            ),
        },
        {
            id: 3,
            title: "Underserved Background",
            description: "Must come from underserved communities",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                </svg>
            ),
        },
        {
            id: 4,
            title: "Educational Passion",
            description: "Must demonstrate a genuine passion for education",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
            ),
        },
        {
            id: 5,
            title: "East African Focus",
            description:
                "Support to colleges must be within East African Community (EAC)",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
        },
        {
            id: 6,
            title: "JRIIT Partnership",
            description:
                "Partnership with JRIIT for local students pursuing diplomas and short courses",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
        },
    ];

    return (
        <SectionWrapper>
            <div className="bg-gray-50 py-16 md:py-20 lg:py-24">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                        <div className="flex items-center justify-center mb-4">
                            <Slogan
                                text="Education Support Program Eligibility Criteria"
                                image={eduIcon}
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E1E20]">
                            Who Can Apply for Our Education Support?
                        </h2>
                        <p className="text-gray-700 text-lg">
                            Our education program is designed to support dedicated students
                            who meet specific criteria. Review the requirements below to see
                            if you qualify for our assistance.
                        </p>
                    </div>

                    {/* Criteria Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {eligibilityCriteria.map((criteria) => (
                            <div
                                key={criteria.id}
                                className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#FFC107]"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#FFC107]/20 flex items-center justify-center mb-6 text-[#FFC107]">
                                    {criteria.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-[#1E1E20]">
                                    {criteria.title}
                                </h3>
                                <p className="text-gray-600">{criteria.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 md:mt-16 text-center">
                        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                            If you meet these criteria and wish to apply for educational
                            support, we encourage you to submit your application today.
                        </p>
                        <CTAButton text="Apply for Support" />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default EducationServices;
