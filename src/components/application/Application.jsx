import React, { useState } from "react";
import {
  Heart,
  Users,
  BookOpen,
  Briefcase,
  Upload,
  CheckCircle,
} from "lucide-react";
import PersonalInfoForm from "../application/PersonalInfoForm";
import ApplicationTypeForm from "../application/ApplicationTypeForm";
import DocumentsForm from "../application/DocumentsForm";
import ReviewForm from "../application/ReviewForm";

const Application = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    applicationType: "",
    personalInfo: {},
    documents: [],
    additionalInfo: "",
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    { number: 1, title: "Application Type", icon: Heart },
    { number: 2, title: "Personal Information", icon: Users },
    { number: 3, title: "Documents", icon: Upload },
    { number: 4, title: "Review & Submit", icon: CheckCircle },
  ];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (stepData) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ApplicationTypeForm
            onNext={nextStep}
            onUpdate={updateFormData}
            data={formData}
          />
        );
      case 2:
        return (
          <PersonalInfoForm
            onNext={nextStep}
            onPrev={prevStep}
            onUpdate={updateFormData}
            data={formData}
          />
        );
      case 3:
        return (
          <DocumentsForm
            onNext={nextStep}
            onPrev={prevStep}
            onUpdate={updateFormData}
            data={formData}
          />
        );
      case 4:
        return (
          <ReviewForm
            onPrev={prevStep}
            onUpdate={updateFormData}
            data={formData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Apply for Support
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
            We're here to help you achieve your dreams. Submit your application
            and let us support your journey towards a better future.
          </p>
          <div className="flex justify-center items-center space-x-8 mt-12">
            <div className="text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">Education Support</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">Healthcare Aid</p>
            </div>
            <div className="text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">Business Grants</p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step.number
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="ml-4 hidden md:block">
                  <p
                    className={`text-sm font-medium ${
                      currentStep >= step.number
                        ? "text-blue-600"
                        : "text-gray-400"
                    }`}
                  >
                    Step {step.number}
                  </p>
                  <p
                    className={`text-xs ${
                      currentStep >= step.number
                        ? "text-gray-900"
                        : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-0.5 mx-4 ${
                      currentStep > step.number ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Custom Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">
            Step {currentStep} of {totalSteps}
          </p>
        </div>

        {/* Form Content */}
        <div className="shadow-xl border-0 bg-white/80 backdrop-blur-sm rounded-lg">
          <div className="text-center pb-8 p-6">
            <h3 className="text-2xl font-bold text-gray-800">
              {steps[currentStep - 1].title}
            </h3>
          </div>
          <div className="px-8 pb-8">{renderCurrentStep()}</div>
        </div>
      </div>
    </div>
  );
};

export default Application;
