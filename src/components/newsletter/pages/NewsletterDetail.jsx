import React from "react";
import { useParams, Link } from "react-router-dom";
import { Tag, ArrowLeft, Calendar, Clock, Eye, User } from "lucide-react";
import NewsletterDetailHeader from "../news-details/NewsletterDetailHeader";
import SocialShare from "../news-details/SocialShare";
import Navbar from "../../sub-comp/Navbar";
import NewsletterSubscription from "../NewsletterSubscription";
import BackToTopButton from "../../sub-comp/BackToTopButton";
import Subscribe from "../../contact/Subscribe";
import Footer from "../../sub-comp/Footer";

// Main Newsletter Detail Page Component
const NewsletterDetailPage = () => {
  const { id } = useParams();

  // This would typically come from props or URL params
  const newsletters = [
    {
      id: 1,
      title: "Year of Transformation: Our 2024 Impact Report",
      date: "December 15, 2024",
      category: "Impact Stories",
      readTime: 8,
      views: 1245,
      author: "GICCS Team",
      preview:
        "Discover how your support transformed thousands of lives this year. From education breakthroughs to healthcare innovations, see the incredible impact we've made together in communities worldwide.",
      introduction:
        "As we approach the end of 2024, it's time to reflect on the incredible journey we've shared and the lives we've transformed together. This year has been nothing short of extraordinary, marked by unprecedented growth, innovative programs, and most importantly, the positive impact we've created in communities worldwide.",
      image:
        "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["impact", "annual-report", "2024", "transformation", "community"],
      hasAudio: true,
      content: `
        <h2>Our Journey in 2024</h2>
        <p>This year marked a significant milestone in our organization's mission to create lasting change in communities worldwide. Through innovative programs and dedicated partnerships, we've been able to reach more people than ever before.</p>
        
        <h3>Key Achievements</h3>
        <ul>
          <li><strong>Education Impact:</strong> Provided educational resources to over 10,000 students across 15 countries</li>
          <li><strong>Healthcare Access:</strong> Established 25 new healthcare facilities in underserved communities</li>
          <li><strong>Economic Empowerment:</strong> Supported 500+ entrepreneurs with microfinance and training programs</li>
          <li><strong>Environmental Initiatives:</strong> Planted 100,000 trees and implemented sustainable practices in 50 communities</li>
        </ul>
        
        <h3>Looking Forward</h3>
        <p>As we move into 2025, we're excited about the new opportunities ahead. With your continued support, we plan to expand our reach and deepen our impact in existing communities while exploring innovative approaches to address emerging challenges.</p>
        
        <p>Thank you for being part of this incredible journey. Together, we're not just changing lives – we're building a better future for generations to come.</p>
      `,
    },
    {
      id: 2,
      title: "New Educational Centers Opening Across Rural Communities",
      date: "November 28, 2024",
      category: "Program Updates",
      readTime: 5,
      views: 892,
      author: "Education Team",
      preview:
        "Exciting news as we inaugurate five new educational centers, bringing quality learning opportunities directly to underserved rural communities.",
      introduction:
        "Education is the cornerstone of sustainable development, and we're thrilled to announce the opening of five new educational centers in rural communities across three countries. These centers represent more than just buildings – they're beacons of hope and opportunity.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["education", "rural-development", "expansion"],
      hasAudio: false,
      content: `
        <h2>Breaking Down Barriers to Education</h2>
        <p>For too long, children in remote rural areas have faced significant challenges accessing quality education. Distance, lack of infrastructure, and limited resources have created barriers that we're now breaking down, one community at a time.</p>
        
        <h3>Our New Educational Centers</h3>
        <p>Each of our five new centers has been strategically located to serve multiple villages within a 10-kilometer radius:</p>
        
        <ul>
          <li><strong>Mwanza Learning Center (Tanzania):</strong> Serving 8 villages with 340 enrolled students</li>
          <li><strong>Kayunga Education Hub (Uganda):</strong> Supporting 6 communities with 280 students</li>
          <li><strong>Thika Rural Academy (Kenya):</strong> Reaching 12 villages with 420 students</li>
          <li><strong>Nyanza Community School (Rwanda):</strong> Serving 5 communities with 190 students</li>
          <li><strong>Mbeya Learning Institute (Tanzania):</strong> Supporting 9 villages with 380 students</li>
        </ul>
        
        <h3>More Than Just Classrooms</h3>
        <p>Our centers offer comprehensive educational support including:</p>
        <ul>
          <li>Primary and secondary education programs</li>
          <li>Adult literacy classes</li>
          <li>Vocational training workshops</li>
          <li>Computer literacy programs</li>
          <li>Health and nutrition education</li>
        </ul>
        
        <h3>Community Impact</h3>
        <p>The response from local communities has been overwhelming. Parents who never had the opportunity for formal education are now seeing their children access quality learning resources. We've also created 45 new jobs, hiring local teachers and support staff from the communities we serve.</p>
        
        <p>This expansion brings our total number of educational centers to 23 across East Africa, directly impacting over 3,200 students and their families.</p>
      `,
    },
    {
      id: 3,
      title: "Healthcare Heroes: Meet Our Volunteer Medical Team",
      date: "November 20, 2024",
      category: "Community News",
      readTime: 6,
      views: 654,
      author: "Medical Outreach Team",
      preview:
        "Get to know the dedicated healthcare professionals who volunteer their time and expertise to provide medical care in remote areas.",
      introduction:
        "Behind every successful healthcare mission are the heroes who dedicate their time, skills, and compassion to serve those in need. Today, we shine a spotlight on our incredible volunteer medical team who make our healthcare programs possible.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["healthcare", "volunteers", "heroes"],
      hasAudio: true,
      content: `
        <h2>Our Volunteer Medical Heroes</h2>
        <p>Our medical volunteer program brings together healthcare professionals from around the world who share a common goal: providing quality healthcare to underserved communities. This year, we've had 127 medical volunteers contribute over 4,800 hours of service.</p>
        
        <h3>Meet Some of Our Outstanding Volunteers</h3>
        
        <h4>Dr. Sarah Mitchell - Pediatric Surgeon, UK</h4>
        <p>Dr. Mitchell has been volunteering with us for three years, performing life-saving surgeries on children. "Every child deserves the chance to live a healthy life," she says. "The joy on a parent's face when their child recovers is worth every sacrifice."</p>
        
        <h4>Nurse Maria Santos - Emergency Care Specialist, Philippines</h4>
        <p>Maria leads our emergency response team and has trained over 200 local community health workers. Her dedication to building local capacity ensures sustainable healthcare long after our missions end.</p>
        
        <h4>Dr. James Ochieng - General Practitioner, Kenya</h4>
        <p>As a local volunteer, Dr. Ochieng brings invaluable cultural understanding to our team. He's instrumental in bridging the gap between international volunteers and local communities.</p>
        
        <h3>Impact by the Numbers</h3>
        <ul>
          <li><strong>15,600 patients</strong> treated this year</li>
          <li><strong>340 surgeries</strong> performed</li>
          <li><strong>2,100 children</strong> vaccinated</li>
          <li><strong>890 pregnant women</strong> received prenatal care</li>
          <li><strong>450 community health workers</strong> trained</li>
        </ul>
        
        <h3>Training the Next Generation</h3>
        <p>Our volunteers don't just provide immediate care – they're building the foundation for sustainable healthcare by training local healthcare workers. Through our mentorship programs, we've certified 89 new community health assistants this year.</p>
        
        <h3>Join Our Medical Mission</h3>
        <p>We're always looking for qualified healthcare professionals to join our mission. Whether you can volunteer for a week or a month, your skills can make a life-changing difference.</p>
      `,
    },
    {
      id: 4,
      title: "Entrepreneurship Program Graduates 200+ Small Business Owners",
      date: "November 10, 2024",
      category: "Impact Stories",
      readTime: 7,
      views: 1023,
      author: "Economic Development Team",
      preview:
        "Celebrating the success of our entrepreneurship program as over 200 participants graduate and launch their own sustainable businesses.",
      introduction:
        "Economic empowerment is at the heart of sustainable development. We're proud to announce that our latest entrepreneurship program cohort has graduated 203 new small business owners, each equipped with the skills, knowledge, and resources needed to build successful enterprises.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["entrepreneurship", "graduation", "success-stories"],
      hasAudio: false,
      content: `
        <h2>Transforming Lives Through Entrepreneurship</h2>
        <p>Our 6-month intensive entrepreneurship program combines practical business training with financial literacy, mentorship, and startup capital. This comprehensive approach ensures our graduates don't just start businesses – they build sustainable enterprises that support their families and communities.</p>
        
        <h3>Program Highlights</h3>
        <p>This year's cohort was our largest and most diverse yet:</p>
        <ul>
          <li><strong>203 graduates</strong> across 4 countries</li>
          <li><strong>68% women entrepreneurs</strong></li>
          <li><strong>45% youth participants</strong> (ages 18-25)</li>
          <li><strong>32% participants with disabilities</strong></li>
          <li><strong>Average age:</strong> 29 years</li>
        </ul>
        
        <h3>Success Stories</h3>
        
        <h4>Grace Mutindi - Organic Farm Enterprise, Kenya</h4>
        <p>Grace started with a small plot of land and big dreams. Through our program, she learned sustainable farming techniques and business management. Today, her organic vegetable farm employs 12 people and supplies three local markets. "I never imagined I could build something this successful," Grace shares.</p>
        
        <h4>David Mukisa - Solar Energy Solutions, Uganda</h4>
        <p>David identified the need for affordable solar solutions in his community. Our program helped him develop a business plan and secure startup funding. His company has now installed solar systems in over 150 homes, bringing clean energy to rural areas.</p>
        
        <h4>Fatima Al-Zahra - Textile Cooperative, Rwanda</h4>
        <p>Fatima brought together 15 women to form a textile cooperative specializing in traditional fabrics. The cooperative now exports to three countries and has become a source of pride for their community.</p>
        
        <h3>Economic Impact</h3>
        <p>The ripple effects of our entrepreneurship program extend far beyond individual success:</p>
        <ul>
          <li><strong>1,240 jobs created</strong> by graduate businesses</li>
          <li><strong>$580,000 in combined revenue</strong> generated in first 6 months</li>
          <li><strong>92% business survival rate</strong> after one year</li>
          <li><strong>Average 340% income increase</strong> for participants</li>
        </ul>
        
        <h3>Looking Ahead</h3>
        <p>Building on this success, we're expanding our program to reach 400 entrepreneurs in 2025. We're also launching a graduate mentorship network where successful alumni support new participants, creating a sustainable ecosystem of entrepreneurial growth.</p>
      `,
    },
    {
      id: 5,
      title: "Clean Water Initiative Reaches 50,000 People",
      date: "October 25, 2024",
      category: "Program Updates",
      readTime: 4,
      views: 743,
      author: "Water & Sanitation Team",
      preview:
        "A major milestone as our clean water initiative successfully provides safe drinking water access to over 50,000 community members.",
      introduction:
        "Access to clean, safe drinking water is a fundamental human right, yet millions of people worldwide still lack this basic necessity. Today, we celebrate a major milestone: our clean water initiative has reached 50,000 people, transforming communities and saving lives.",
      image:
        "https://images.unsplash.com/photo-1541844053589-346841d0b34c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["clean-water", "milestone", "community-health"],
      hasAudio: true,
      content: `
        <h2>Milestone Achievement: 50,000 Lives Transformed</h2>
        <p>After three years of dedicated work, our clean water initiative has reached a significant milestone. We've successfully provided safe drinking water access to 50,127 people across 147 communities in 8 countries.</p>
        
        <h3>Our Comprehensive Approach</h3>
        <p>Our clean water initiative goes beyond just drilling wells. We focus on sustainable, community-led solutions:</p>
        
        <ul>
          <li><strong>Water Source Development:</strong> 89 new wells and boreholes</li>
          <li><strong>Infrastructure:</strong> 34 kilometers of pipeline installed</li>
          <li><strong>Community Training:</strong> 420 people trained in maintenance</li>
          <li><strong>Hygiene Education:</strong> 15,000 people received training</li>
          <li><strong>Water Quality Testing:</strong> Monthly testing at all sites</li>
        </ul>
        
        <h3>Health Impact</h3>
        <p>The health improvements in communities with clean water access have been remarkable:</p>
        <ul>
          <li><strong>72% reduction</strong> in waterborne diseases</li>
          <li><strong>85% decrease</strong> in child mortality from diarrheal diseases</li>
          <li><strong>60% improvement</strong> in overall community health metrics</li>
          <li><strong>90% reduction</strong> in time spent collecting water</li>
        </ul>
        
        <h3>Empowering Women and Children</h3>
        <p>Clean water access has particularly impacted women and children, who traditionally bear the burden of water collection:</p>
        <ul>
          <li>Women now have 4-6 additional hours daily for economic activities</li>
          <li>School attendance among girls increased by 40%</li>
          <li>Women's participation in community leadership roles doubled</li>
        </ul>
        
        <h3>Sustainability Focus</h3>
        <p>Every water project includes a sustainability plan managed by trained community water committees. These committees oversee maintenance, collect fees for repairs, and ensure long-term functionality. Our 5-year follow-up data shows 94% of our water systems remain operational.</p>
        
        <h3>Next Phase</h3>
        <p>With this milestone achieved, we're setting our sights on reaching 100,000 people by the end of 2025. We're also expanding our focus to include water conservation and climate-resilient water systems to ensure communities remain water-secure even during droughts.</p>
      `,
    },
    {
      id: 6,
      title: "Volunteer Spotlight: Sarah's Journey of Service",
      date: "October 15, 2024",
      category: "Community News",
      readTime: 5,
      views: 456,
      author: "Community Relations Team",
      preview:
        "Meet Sarah Johnson, whose dedication to our cause has touched countless lives. Learn about her inspiring journey and impact.",
      introduction:
        "In our volunteer spotlight series, we celebrate the individuals who make our work possible. Today, we're honored to share the story of Sarah Johnson, a remarkable volunteer whose three-year journey with us exemplifies the power of dedication and compassion.",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      tags: ["volunteer-spotlight", "inspiration", "service"],
      hasAudio: false,
      content: `
        <h2>Sarah's Journey: From Corporate Executive to Community Champion</h2>
        <p>Sarah Johnson was a successful marketing executive in New York when she first learned about our work. What started as a two-week volunteer vacation has transformed into a life-changing journey of service spanning three years and four countries.</p>
        
        <h3>The Beginning</h3>
        <p>"I was feeling unfulfilled despite my career success," Sarah recalls. "I had always wanted to make a real difference, but I didn't know how. When I found GICCS, I knew this was my chance to contribute something meaningful to the world."</p>
        
        <p>Sarah's first assignment was helping establish educational programs in rural Guatemala. What she thought would be a brief respite from corporate life became the beginning of a new chapter.</p>
        
        <h3>Making an Impact</h3>
        <p>Over three years, Sarah has contributed to multiple programs:</p>
        
        <h4>Education Program Coordinator - Guatemala (6 months)</h4>
        <ul>
          <li>Helped establish 3 new learning centers</li>
          <li>Trained 25 local teachers</li>
          <li>Developed curriculum for adult literacy programs</li>
        </ul>
        
        <h4>Healthcare Support - Kenya (8 months)</h4>
        <ul>
          <li>Assisted in mobile clinic operations</li>
          <li>Organized medical supply distribution</li>
          <li>Supported vaccination campaigns reaching 2,000 children</li>
        </ul>
        
        <h4>Community Development - Philippines (10 months)</h4>
        <ul>
          <li>Led disaster recovery efforts after Typhoon Mawar</li>
          <li>Coordinated rebuilding of 45 homes</li>
          <li>Established community resilience programs</li>
        </ul>
        
        <h4>Program Manager - Tanzania (ongoing)</h4>
        <ul>
          <li>Oversees integration of all program areas</li>
          <li>Manages team of 15 local staff</li>
          <li>Develops long-term sustainability strategies</li>
        </ul>
        
        <h3>Personal Transformation</h3>
        <p>"Every community I've worked in has taught me something new," Sarah reflects. "I came here thinking I would help others, but I've received so much more than I've given. These experiences have shown me what truly matters in life."</p>
        
        <p>Sarah's corporate background in marketing has proven invaluable in our community outreach efforts. She's helped develop communication strategies that have increased program participation by 60% in her assigned regions.</p>
        
        <h3>Recognition and Awards</h3>
        <p>Sarah's exceptional service has been recognized both locally and internationally:</p>
        <ul>
          <li>2023 Outstanding Volunteer Award - GICCS</li>
          <li>Community Hero Recognition - Arusha Regional Council</li>
          <li>Global Citizen Award - International Volunteer Alliance</li>
        </ul>
        
        <h3>Looking Forward</h3>
        <p>Sarah recently decided to make her volunteer work permanent, accepting a position as our Regional Program Director for East Africa. "This isn't just work for me anymore," she says. "This is my life's calling. I can't imagine doing anything else."</p>
        
        <h3>Sarah's Message to Future Volunteers</h3>
        <p>"Don't wait for the 'perfect' time to start making a difference. The world needs your skills, your passion, and your heart right now. Take that first step – you'll be amazed where it leads you."</p>
        
        <p><em>Interested in volunteering? Contact our volunteer coordinator to learn about current opportunities. Whether you can spare a week or a year, your contribution can make a lasting impact.</em></p>
      `,
    },
  ];

  const newsletter = newsletters.find((n) => n.id === Number(id));

  if (!newsletter) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Newsletter Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The newsletter with ID {id} could not be found.
          </p>
          <Link
            to="/newsletter"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Back to Newsletters
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <NewsletterDetailHeader newsletter={newsletter} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/newsletter"
          className="inline-flex items-center text-gray-600 hover:text-yellow-600 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Newsletters
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="mb-8">
              <img
                src={newsletter.image}
                alt={newsletter.title}
                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {newsletter.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {newsletter.readTime} min read
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                {newsletter.views} views
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {newsletter.author}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {newsletter.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {newsletter.title}
            </h1>

            {/* Introduction */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
              <p className="text-lg text-gray-700 italic">
                {newsletter.introduction}
              </p>
            </div>

            {/* Main Content */}
            <div
              className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: newsletter.content }}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <SocialShare newsletter={newsletter} />
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSubscription />
        </div>
      </div>

      {/* Footer */}
      <Subscribe />
      <Footer />

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
};

export default NewsletterDetailPage;
