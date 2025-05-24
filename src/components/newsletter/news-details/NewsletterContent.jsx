import React, { useState } from "react";
import { Eye, Heart, Quote, Play, Pause } from "lucide-react";
const NewsletterContent = ({ newsletter }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="prose prose-lg max-w-none">
      {/* Introduction */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
        <p className="text-lg text-gray-800 italic leading-relaxed">
          {newsletter.introduction || newsletter.preview}
        </p>
      </div>

      {/* Audio Player (if available) */}
      {newsletter.hasAudio && (
        <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8 flex items-center">
          <button
            onClick={handlePlayPause}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-4 rounded-full mr-4 transition-colors duration-300"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>
          <div className="flex-1">
            <h4 className="font-semibold mb-1">Listen to this Newsletter</h4>
            <p className="text-gray-300 text-sm">
              Audio version available - {newsletter.readTime} minutes
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="space-y-8">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Key Highlights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In this edition of our newsletter, we're excited to share some
            incredible milestones and achievements that have been made possible
            through your continued support and dedication to our mission.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 p-2 rounded-full mr-3">
                  <Eye className="w-5 h-5 text-gray-900" />
                </div>
                <h3 className="font-semibold text-gray-900">
                  Community Impact
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Over 15,000 community members have directly benefited from our
                programs this month.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 p-2 rounded-full mr-3">
                  <Heart className="w-5 h-5 text-gray-900" />
                </div>
                <h3 className="font-semibold text-gray-900">
                  Volunteer Engagement
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                250+ volunteers contributed over 5,000 hours of service across
                our initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <blockquote className="bg-gray-50 border-l-4 border-yellow-400 p-6 rounded-r-lg my-8">
          <Quote className="w-8 h-8 text-yellow-400 mb-4" />
          <p className="text-xl text-gray-800 italic leading-relaxed mb-4">
            "The impact we're seeing in communities is truly transformational.
            Every donation, every volunteer hour, every act of kindness creates
            ripples of positive change that extend far beyond what we can
            measure."
          </p>
          <footer className="text-gray-600">
            — Maria Rodriguez, Program Director
          </footer>
        </blockquote>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Program Updates
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Education Initiative
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our education programs have reached new heights this month, with
                the opening of three new learning centers in underserved
                communities. These centers are equipped with modern technology
                and staffed by dedicated educators who are passionate about
                making a difference.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  #Education
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  #Community
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  #Growth
                </span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Healthcare Outreach
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our mobile health clinics have provided essential medical
                services to remote areas, conducting over 500 health screenings
                and vaccinations. The impact on community health has been
                remarkable, with preventable diseases declining significantly.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  #Healthcare
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  #Prevention
                </span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                  #Wellness
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Gallery */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Impact in Pictures
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Community Impact"
              className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Volunteer Work"
              className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Program Activities"
              className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        </section>

        {/* Success Stories */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Meet Sarah: From Student to Teacher
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sarah was one of the first students in our education program five
              years ago. Today, she's returned to her community as a certified
              teacher, inspiring the next generation of learners. Her journey
              exemplifies the long-term impact of education investment.
            </p>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b4e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Sarah"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-900">Sarah Martinez</p>
                <p className="text-gray-600 text-sm">Community Teacher</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Every story you've read today is made possible by people like you.
            Your support, whether through donations, volunteering, or simply
            spreading awareness, creates lasting change in communities
            worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Donate Now
            </button>
            <button className="border-2 border-white hover:border-yellow-400 text-white hover:text-yellow-400 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Become a Volunteer
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsletterContent;
