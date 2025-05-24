import React, { useState } from "react";
import {
  Download,
  Heart,
  Share2,
  Mail,
  Copy,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

const SocialShare = ({ newsletter }) => {
  const [copied, setCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(newsletter.title);
  const shareDescription = encodeURIComponent(newsletter.preview);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      {/* Share Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Share2 className="w-5 h-5 mr-2" />
          Share this Newsletter
        </h3>

        <div className="space-y-3">
          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-full p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors duration-300"
          >
            <div className="w-5 h-5 mr-3 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">f</span>
            </div>
            Share on Facebook
          </a>

          {/* Twitter */}
          <a
            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-full p-3 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-lg transition-colors duration-300"
          >
            <div className="w-5 h-5 mr-3 bg-sky-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">𝕏</span>
            </div>
            Share on Twitter
          </a>

          {/* LinkedIn */}
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-full p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors duration-300"
          >
            <div className="w-5 h-5 mr-3 bg-blue-700 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">in</span>
            </div>
            Share on LinkedIn
          </a>

          {/* Email */}
          <a
            href={`mailto:?subject=${shareTitle}&body=Check out this newsletter: ${shareUrl}`}
            className="flex items-center w-full p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors duration-300"
          >
            <Mail className="w-5 h-5 mr-3" />
            Email Newsletter
          </a>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            className="flex items-center w-full p-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition-colors duration-300"
          >
            {copied ? (
              <CheckCircle className="w-5 h-5 mr-3" />
            ) : (
              <Copy className="w-5 h-5 mr-3" />
            )}
            {copied ? "Link Copied!" : "Copy Link"}
          </button>
        </div>
      </div>

      {/* Newsletter Actions */}
      <div className="border-t pt-6">
        <h4 className="text-md font-semibold text-gray-900 mb-4">
          Newsletter Actions
        </h4>

        <div className="space-y-3">
          <button className="flex items-center w-full p-3 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 rounded-lg transition-colors duration-300">
            <Download className="w-5 h-5 mr-3" />
            Download PDF
          </button>

          <button
            onClick={handleFavorite}
            className={`flex items-center w-full p-3 rounded-lg transition-colors duration-300 ${isFavorite
                ? "bg-red-50 hover:bg-red-100 text-red-700"
                : "bg-gray-50 hover:bg-gray-100 text-gray-700"
              }`}
          >
            <Heart
              className={`w-5 h-5 mr-3 ${isFavorite ? "fill-current" : ""}`}
            />
            {isFavorite ? "Remove from Favorites" : "Save to Favorites"}
          </button>
        </div>
      </div>

      {/* Newsletter Info Card */}
      <div className="border-t pt-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h5 className="font-medium text-gray-900 mb-2">
            About this Newsletter
          </h5>
          <p className="text-sm text-gray-600 mb-3">{newsletter.preview}</p>
          <div className="flex items-center text-xs text-gray-500">
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
              {newsletter.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
