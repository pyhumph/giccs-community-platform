import React, { useState } from "react";
import { useToast } from "../../hooks/use.toast";
import {
  CheckCircle,
  User,
  FileText,
  Heart,
  BookOpen,
  Briefcase,
  Home,
  Utensils,
} from "lucide-react";

const ReviewForm = ({ onPrev, data, onSubmit, isSubmitting, submitStatus }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { toast } = useToast();

  const getApplicationTypeIcon = (type) => {
    switch (type) {
      case "health":
        return Heart;
      case "education":
        return BookOpen;
      case "business":
        return Briefcase;
      case "housing":
        return Home;
      case "food":
        return Utensils;
      default:
        return FileText;
    }
  };

  const getApplicationTypeName = (type) => {
    switch (type) {
      case "health":
        return "Healthcare Support";
      case "education":
        return "Education Assistance";
      case "business":
        return "Business & Entrepreneurship";
      case "housing":
        return "Housing Support";
      case "food":
        return "Food Security";
      default:
        return "Support Application";
    }
  };

  const handleSubmit = async () => {
    if (!termsAccepted) {
      toast({
        title: "Terms and Conditions",
        description: "Please accept the terms and conditions to proceed.",
        variant: "destructive",
      });
      return;
    }

    // Call the parent component's submit handler
    await onSubmit();
  };

  // Show success state if submission was successful
  if (submitStatus === "success") {
    return (
      <div className="text-center space-y-6 py-12">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Application Submitted Successfully!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for your application. We have received all your
            information and documents.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-md mx-auto">
            <h4 className="font-semibold text-blue-800 mb-2">
              What happens next?
            </h4>
            <ul className="text-sm text-blue-700 space-y-1 text-left">
              <li>• Review process: 3-5 business days</li>
              <li>• You'll receive an email confirmation</li>
              <li>• Our team may contact you for additional information</li>
              <li>• Final decision will be communicated via email</li>
            </ul>
          </div>
        </div>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300"
        >
          Return to Home
        </button>
      </div>
    );
  }

  const TypeIcon = getApplicationTypeIcon(data.applicationType);

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Review Your Application
        </h3>
        <p className="text-gray-600">
          Please review all information before submitting your application
        </p>
      </div>

      {/* Show error message if submission failed */}
      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Submission Failed
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  There was an error submitting your application. Please check
                  your connection and try again.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Type Summary */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 border-l-blue-500">
        <div className="p-6">
          <h3 className="flex items-center space-x-3 text-lg font-semibold">
            <TypeIcon className="w-6 h-6 text-blue-600" />
            <span>{getApplicationTypeName(data.applicationType)}</span>
          </h3>
        </div>
      </div>

      {/* Personal Information Summary */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="flex items-center space-x-3 text-lg font-semibold">
            <User className="w-5 h-5" />
            <span>Personal Information</span>
          </h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Full Name</p>
              <p className="font-medium">
                {data.personalInfo?.fullName ||
                  `${data.personalInfo?.firstName || ""} ${data.personalInfo?.lastName || ""}`.trim() ||
                  "Not provided"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-medium">
                {data.personalInfo?.email || "Not provided"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-medium">
                {data.personalInfo?.phone || "Not provided"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Date of Birth</p>
              <p className="font-medium">
                {data.personalInfo?.dateOfBirth || "Not provided"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Address</p>
              <p className="font-medium">
                {data.personalInfo?.address ? (
                  <>
                    {data.personalInfo.address}
                    {data.personalInfo.city && `, ${data.personalInfo.city}`}
                    {data.personalInfo.state && `, ${data.personalInfo.state}`}
                    {data.personalInfo.zipCode &&
                      ` ${data.personalInfo.zipCode}`}
                  </>
                ) : (
                  "Not provided"
                )}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Country</p>
              <p className="font-medium">
                {data.personalInfo?.country || "Not provided"}
              </p>
            </div>
          </div>
          {data.personalInfo?.description && (
            <div>
              <p className="text-sm text-gray-600">Description</p>
              <p className="font-medium">{data.personalInfo.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Documents Summary */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="flex items-center space-x-3 text-lg font-semibold">
            <FileText className="w-5 h-5" />
            <span>Documents ({data.documents?.length || 0})</span>
          </h3>
        </div>
        <div className="p-6">
          {data.documents && data.documents.length > 0 ? (
            <div className="space-y-2">
              {data.documents.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-2 bg-gray-50 rounded"
                >
                  <FileText className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{file.name}</span>
                  <span className="text-xs text-gray-500">
                    ({Math.round(file.size / 1024)} KB)
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No documents uploaded</p>
          )}
        </div>
      </div>

      {/* Additional Information */}
      {data.additionalInfo && (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Additional Information</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-700">{data.additionalInfo}</p>
          </div>
        </div>
      )}

      {/* Terms and Conditions */}
      <div className="bg-white border-2 border-blue-200 rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              disabled={isSubmitting}
            />
            <div>
              <label
                htmlFor="terms"
                className="text-sm font-medium cursor-pointer"
              >
                I agree to the Terms and Conditions and Privacy Policy
              </label>
              <p className="text-xs text-gray-600 mt-1">
                By submitting this application, I confirm that all information
                provided is accurate and complete. I understand that false
                information may result in the rejection of my application.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          onClick={onPrev}
          disabled={isSubmitting}
          className="px-8 py-3 border-2 border-gray-300 hover:border-gray-400 bg-white text-gray-700 font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          disabled={!termsAccepted || isSubmitting}
          className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Submitting...</span>
            </>
          ) : (
            <span>Submit Application</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
