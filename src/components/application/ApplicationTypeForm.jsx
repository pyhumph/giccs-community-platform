import React, { useState } from "react";
import { Heart, BookOpen, Briefcase, Home, Utensils } from "lucide-react";

const ApplicationTypeForm = ({ onNext, onUpdate, data }) => {
  const [selectedType, setSelectedType] = useState(data.applicationType || "");

  const applicationTypes = [
    {
      id: "health",
      title: "Healthcare Support",
      description: "Medical expenses, treatments, and healthcare equipment",
      icon: Heart,
      color: "from-red-500 to-pink-600",
    },
    {
      id: "education",
      title: "Education Assistance",
      description: "School fees, books, uniforms, and educational materials",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: "business",
      title: "Business & Entrepreneurship",
      description: "Startup capital, equipment, and business development",
      icon: Briefcase,
      color: "from-green-500 to-emerald-600",
    },
    {
      id: "housing",
      title: "Housing Support",
      description: "Home repairs, rent assistance, and basic amenities",
      icon: Home,
      color: "from-purple-500 to-violet-600",
    },
    {
      id: "food",
      title: "Food Security",
      description: "Nutrition programs and food assistance",
      icon: Utensils,
      color: "from-orange-500 to-amber-600",
    },
  ];

  const handleSelect = (typeId) => {
    setSelectedType(typeId);
    onUpdate({ applicationType: typeId });
  };

  const handleNext = () => {
    if (selectedType) {
      onNext();
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          What type of support are you seeking?
        </h3>
        <p className="text-gray-600">
          Please select the category that best describes your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {applicationTypes.map((type) => (
          <div
            key={type.id}
            className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg border bg-white shadow-sm p-6 ${
              selectedType === type.id
                ? "ring-2 ring-blue-500 shadow-lg"
                : "hover:ring-2 hover:ring-blue-300"
            }`}
            onClick={() => handleSelect(type.id)}
          >
            <div
              className={`w-16 h-16 rounded-lg bg-gradient-to-r ${type.color} flex items-center justify-center mb-4 mx-auto`}
            >
              <type.icon className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-center mb-2">
              {type.title}
            </h4>
            <p className="text-gray-600 text-center text-sm">
              {type.description}
            </p>
            {selectedType === type.id && (
              <div className="mt-4 text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  ✓ Selected
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end pt-6">
        <button
          onClick={handleNext}
          disabled={!selectedType}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ApplicationTypeForm;
