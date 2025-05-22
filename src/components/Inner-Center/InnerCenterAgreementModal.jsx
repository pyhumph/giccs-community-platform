import React from "react";
import {
  X,
  Download,
  FileText,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

const InnerCenterAgreementModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Handle download functionality
    console.log("Downloading agreement...");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 flex justify-between items-center border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                Non-Liability Agreement
              </h2>
              <p className="text-white text-opacity-90 text-sm">
                for Use of Inner Center Space
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="p-8 space-y-8">
            {/* Introduction */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Important Legal Agreement
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    This <strong>Non-Liability Agreement</strong> ("Agreement")
                    is made between GICCS Inner Center (the "Owner") and the
                    User for the use of our community wellness space. Please
                    read carefully before using our facilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Agreement Sections */}
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    USE OF SPACE
                  </h3>
                </div>
                <div className="ml-11 bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    The Owner agrees to allow the User access to and use of the
                    Inner Center premises for{" "}
                    <span className="font-semibold text-yellow-600">
                      community programs, yoga sessions, workshops, and related
                      activities
                    </span>{" "}
                    that support holistic well-being and community empowerment.
                    This includes but is not limited to meditation spaces,
                    counseling rooms, training areas, and common facilities.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    MAINTENANCE CONTRIBUTION
                  </h3>
                </div>
                <div className="ml-11 bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The User agrees to contribute to the general upkeep and
                    maintenance of the space, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Cleaning common areas after use</li>
                    <li>Minor repairs as agreed upon between parties</li>
                    <li>Utility expenses contribution as may be determined</li>
                    <li>
                      Respectful treatment of all facilities and equipment
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    NON-LIABILITY CLAUSE
                  </h3>
                </div>
                <div className="ml-11 bg-red-50 border border-red-200 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>
                      The User acknowledges and agrees that the Owner:
                    </strong>
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Shall not be held liable for any injuries, accidents,
                        damages, losses, or incidents that occur on the premises
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Shall not be responsible for loss or damage to personal
                        property of the User or visitors
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Will not be held liable for actions, misconduct, or
                        negligence by users or visitors
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    COMPLIANCE WITH LAWS
                  </h3>
                </div>
                <div className="ml-11 bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    The User agrees to use the space{" "}
                    <span className="font-semibold text-purple-600">
                      responsibly and in compliance
                    </span>
                    with all local laws, safety regulations, and building codes.
                    The User further agrees to take reasonable precautions to
                    ensure the safety of all individuals using the space and to
                    maintain a respectful, inclusive environment for all
                    community members.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    5
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    INDEMNIFICATION
                  </h3>
                </div>
                <div className="ml-11 bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    The User agrees to{" "}
                    <span className="font-semibold text-orange-600">
                      compensate, defend, and hold harmless
                    </span>
                    the Owner from any claims, liabilities, damages, expenses
                    (including legal fees), or losses arising from the User's
                    use of the premises, including but not limited to personal
                    injury, property damage, or third-party claims.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    6
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    TERM AND TERMINATION
                  </h3>
                </div>
                <div className="ml-11 bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    This Agreement shall remain in effect unless terminated by
                    either party with
                    <span className="font-semibold text-teal-600">
                      {" "}
                      written notice of at least 30 days
                    </span>
                    . Either party may terminate immediately for material breach
                    of this agreement.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    7
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    GOVERNING LAW
                  </h3>
                </div>
                <div className="ml-11 bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    This Agreement shall be governed by and construed in
                    accordance with the laws of the
                    <span className="font-semibold text-gray-700">
                      {" "}
                      United Republic of Tanzania
                    </span>
                    . Any disputes arising under this agreement shall be
                    resolved through appropriate legal channels within
                    Tanzania's jurisdiction.
                  </p>
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div className="border-t-2 border-gray-200 pt-8">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Agreement Execution
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>IN WITNESS WHEREOF,</strong> the parties acknowledge
                  they have read, understood, and agree to be bound by the terms
                  of this Agreement as of the date of execution.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Owner:</h4>
                    <p className="text-gray-600 text-sm">
                      GICCS (Global Integrated Charitable Community Services)
                      <br />
                      Inner Center Management
                      <br />
                      <span className="text-yellow-600">
                        Contact: admin@giccs.org
                      </span>
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">User:</h4>
                    <p className="text-gray-600 text-sm">
                      [User's Name/Organization Name]
                      <br />
                      [Contact Information]
                      <br />
                      [Date of Agreement]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="text-sm text-gray-600">
              Last updated: January 2025 | Version 1.0
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleDownload}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
              <button
                onClick={onClose}
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerCenterAgreementModal;
