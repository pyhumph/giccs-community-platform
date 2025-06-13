import React, { useState, useRef } from "react";
import { Upload, FileText, X, CheckCircle } from "lucide-react";

const DocumentsForm = ({ onNext, onPrev, onUpdate, data }) => {
  const [uploadedFiles, setUploadedFiles] = useState(data.documents || []);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const documentTypes = [
    {
      name: "Identity Document",
      description: "National ID, Passport, or Driver's License",
      required: true,
    },
    {
      name: "Proof of Income",
      description: "Salary slip, bank statement, or income certificate",
      required: true,
    },
    {
      name: "Proof of Address",
      description: "Utility bill, bank statement, or rental agreement",
      required: false,
    },
    {
      name: "Medical Documents",
      description:
        "Medical reports, prescriptions, or hospital bills (if applicable)",
      required: false,
    },
    {
      name: "Supporting Documents",
      description: "Any additional documents supporting your application",
      required: false,
    },
  ];

  const handleFileUpload = (files) => {
    const validFiles = Array.from(files).filter((file) => {
      const validTypes = [
        "application/pdf",
        "image/jpeg",
        "image/jpg",
        "image/png",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type)) {
        alert(
          `${file.name} is not a supported file type. Please upload PDF, JPG, PNG, DOC, or DOCX files.`,
        );
        return false;
      }

      if (file.size > maxSize) {
        alert(
          `${file.name} is too large. Please upload files smaller than 5MB.`,
        );
        return false;
      }

      return true;
    });

    if (validFiles.length > 0) {
      const newFiles = [...uploadedFiles, ...validFiles];
      setUploadedFiles(newFiles);
      onUpdate({ documents: newFiles });
    }
  };

  const handleInputChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files);
    }
    // Reset the input value so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleChooseFiles = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileUpload(files);
    }
  };

  const removeFile = (index) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    onUpdate({ documents: newFiles });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Supporting Documents
        </h3>
        <p className="text-gray-600">
          Please upload the required documents to support your application
        </p>
      </div>

      {/* Document Requirements */}
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-gray-800 mb-4">
          Document Requirements
        </h4>
        {documentTypes.map((doc, index) => (
          <div
            key={index}
            className="border border-gray-200 border-l-4 border-l-blue-500 rounded-lg"
          >
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="font-medium text-gray-800 flex items-center">
                    {doc.name}
                    {doc.required && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </h5>
                  <p className="text-sm text-gray-600 mt-1">
                    {doc.description}
                  </p>
                </div>
                {doc.required && (
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    Required
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* File Upload Area */}
      <div
        className={`border-2 border-dashed transition-colors duration-300 rounded-lg ${
          isDragOver
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-blue-400"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="p-8">
          <div className="text-center">
            <Upload
              className={`w-12 h-12 mx-auto mb-4 ${
                isDragOver ? "text-blue-500" : "text-gray-400"
              }`}
            />
            <h4 className="text-lg font-medium text-gray-800 mb-2">
              Upload Documents
            </h4>
            <p className="text-gray-600 mb-4">
              Drag and drop your files here, or click to browse
            </p>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              onChange={handleInputChange}
              className="hidden"
            />

            <button
              type="button"
              onClick={handleChooseFiles}
              className="border border-gray-300 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 px-4 py-2 rounded-lg text-gray-700 font-medium"
            >
              Choose Files
            </button>

            <p className="text-xs text-gray-500 mt-2">
              Supported formats: PDF, JPG, PNG, DOC, DOCX (Max 5MB per file)
            </p>
          </div>
        </div>
      </div>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-gray-800">
            Uploaded Files ({uploadedFiles.length})
          </h4>
          <div className="space-y-3">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="border border-green-200 bg-green-50 rounded-lg"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg">
                        <FileText className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{file.name}</p>
                        <p className="text-sm text-gray-600">
                          {formatFileSize(file.size)} •{" "}
                          {file.type.split("/")[1].toUpperCase()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <button
                        onClick={() => removeFile(index)}
                        className="p-1 text-red-500 hover:bg-red-100 rounded-full transition-colors duration-200"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between pt-6">
        <button
          onClick={onPrev}
          className="px-8 py-3 border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 rounded-lg text-gray-700 font-medium"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DocumentsForm;
