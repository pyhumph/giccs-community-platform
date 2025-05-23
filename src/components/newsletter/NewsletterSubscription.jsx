import React, { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 2000);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl transform animate-bounce">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to Our Newsletter!
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for subscribing. You'll receive our latest newsletter in
              your inbox soon.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Never Miss Our Updates
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Join over 25,000 subscribers who receive our monthly newsletter
                packed with impact stories, program updates, and ways to get
                involved in creating positive change.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Monthly impact reports and success stories
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Exclusive volunteer opportunities
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Behind-the-scenes program updates
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Early access to fundraising campaigns
                  </span>
                </div>
              </div>
            </div>

            {/* Right Subscription Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <Mail className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Subscribe Now
                </h3>
                <p className="text-gray-600">
                  Join our community of changemakers
                </p>
              </div>

              <div className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yellow-400 transition-all duration-300 text-gray-900"
                />

                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !email}
                  className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Subscribe Now
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
