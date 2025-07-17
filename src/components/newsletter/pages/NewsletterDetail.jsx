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
import newz01 from "../../../assets/ikwep.png";
import newz02 from "../../../assets/jr_institute_of_information_technology_9.jpg";
import newz03 from "../../../assets/MussaKassam.jpg";
import newz04 from "../../../assets/healthDonation.jpg";

// Main Newsletter Detail Page Component
const NewsletterDetailPage = () => {
  const { id } = useParams();

  // This would typically come from props or URL params
  const newsletters = [
    {
      id: 1,
      title: "Empowering Women Entrepreneurs: Our Business Grant Impact",
      date: "July 17, 2025",
      category: "Program Highlights",
      readTime: 5,
      views: 1245,
      author: "GICCS Team",
      preview:
        "Through our women-only business grants, GICCS is helping female entrepreneurs turn ideas into thriving businesses. Discover how access to funding, mentorship, and training is transforming lives today.",
      introduction:
        "Do you have a business idea? Need to expand your current business? Are finances holding you back? At GICCS, we believe in the power of women to drive change — and we're here to support that journey through our dedicated business grant program.",
      image: newz01,
      tags: [
        "women",
        "entrepreneurship",
        "business-grants",
        "2025",
        "economic-empowerment",
      ],
      hasAudio: true,
      content: `
    <h2>Why Women-Only Business Grants?</h2>
    <p>Many women in underserved communities face barriers when it comes to accessing capital, training, and mentorship for their businesses. Our business grant program is designed to break those barriers and equip women with the tools they need to succeed — from startup support to business expansion.</p>

    <h3>Real Impact in 2025</h3>
    <ul>
      <li><strong>Over 150 women entrepreneurs supported</strong> with direct financial grants</li>
      <li><strong>Tailored mentorship</strong> for business planning, marketing, and financial literacy</li>
      <li><strong>Skill development workshops</strong> delivered across multiple regions</li>
      <li><strong>Success stories</strong> ranging from retail, fashion, agribusiness, to creative industries</li>
    </ul>

    <h3>Stories That Inspire</h3>
    <p>“Thanks to IKWEPS, I was able to buy a professional camera and gear that upgraded my work quality and boosted my income.” — <strong>Z.D., Professional Photographer</strong></p>
    <p>“We're truly grateful for the grant that helped us expand SpiceHub, diversify our products, and strengthen our business.” — <strong>SpiceHub Team</strong></p>

    <h3>Are You a Woman with a Dream?</h3>
    <p>If you're a woman with a business idea or looking to grow your existing venture, <strong>GICCS is here for you</strong>. Our business grants are open to women in the SHIA KHOJA ITHNAASHERI COMMUNITY who are committed to making a difference through entrepreneurship.</p>

    <p><strong>Applications are reviewed on a rolling basis.</strong> Reach out to our team or visit our Programs page to learn how you can benefit.</p>

    <h3>Looking Ahead</h3>
    <p>As we continue through 2025, we remain committed to economic empowerment and inclusion. Our focus is not just on funding — it's about equipping women with the confidence, skills, and network to thrive independently.</p>

    <p>Thank you for walking this journey with us. Every story of success starts with support — and your belief in our mission makes it possible.</p>
  `,
    },

    {
      id: 2,
      title:
        "Celebrating Our 2025 Graduates: 20+ Students Set to Complete Their Journey",
      date: "July 17, 2025",
      category: "Program Updates",
      readTime: 4,
      views: 892,
      author: "Education Team",
      preview:
        "This October, over 20 students sponsored by GICCS are set to graduate — a powerful milestone in their academic and personal journeys, made possible through your support.",
      introduction:
        "We’re thrilled to announce that more than 20 students sponsored through the GICCS education program will officially graduate this coming October. This achievement reflects the resilience of these young learners and the collective commitment of our community to empower future leaders.",
      image: newz02,
      tags: ["education", "graduation", "student-success", "2025"],
      hasAudio: false,
      content: `
    <h2>Class of 2025: A Moment to Celebrate</h2>
    <p>After years of hard work, determination, and community support, over 20 students are set to graduate this October. These students come from diverse backgrounds, yet share one thing in common — the opportunity to thrive through educational sponsorship.</p>

    <h3>Our Role in Their Journey</h3>
    <p>Through your support, GICCS has provided full educational sponsorship to these students, covering tuition fees, supplies, mentorship, and personal development programs. This graduation marks a major milestone not only for the students, but for their families and communities.</p>

    <h3>Beyond the Classroom</h3>
    <p>Many of our graduating students have also taken part in life skills workshops, leadership camps, and vocational training, equipping them to enter the next chapter of their lives with confidence and purpose.</p>

    <h3>What Comes Next?</h3>
    <p>Several graduates have already begun applying for college, internships, and job training opportunities. As they transition, GICCS will continue to offer post-graduation support to help them navigate their goals.</p>

    <p>We couldn’t be prouder of their accomplishments. These students are living proof of what happens when potential is met with opportunity — and we thank you for being a part of that journey.</p>
  `,
    },

    {
      id: 3,
      title: "Scholarship Opportunities: Supporting Students in Need",
      date: "July 17, 2025",
      category: "Community News",
      readTime: 4,
      views: 654,
      author: "Education Support Team",
      preview:
        "We are currently offering scholarships to children who wish to continue their education but lack the financial means. The window is open — apply now or help spread the word.",
      introduction:
        "At GICCS, we believe every child deserves access to education. We're pleased to announce that our scholarship window is currently open for students in need — especially those with no fees or family income to support their education.",
      image: newz03,
      tags: ["education", "scholarships", "student-support", "2025"],
      hasAudio: false,
      content: `
    <h2>Scholarships for Children in Need</h2>
    <p>We continue to receive applications from students whose only barrier to education is the lack of financial support. Our scholarship program is designed to give hope and access to children determined to complete their studies.</p>
    
    <h3>Who Is Eligible?</h3>
    <p>This opportunity is for students who demonstrate academic commitment but cannot afford school fees or materials. Priority is given to children from underserved or low-income households.</p>

    <h3>What Does the Scholarship Cover?</h3>
    <ul>
      <li>Full or partial school tuition</li>
      <li>Books and essential learning materials</li>
      <li>School uniforms and transportation (where needed)</li>
      <li>Mentorship and psychosocial support</li>
    </ul>

    <h3>Apply or Nominate</h3>
    <p>If you know a child who deserves this opportunity or if you're a parent/guardian seeking support, please reach out. Our application team is ready to guide you through the process.</p>

    <p>Education changes lives — and your support or referral could make that possible for someone today.</p>
  `,
    },

    {
      id: 5,
      title:
        "Chronic Illness Awareness Drives Reach Over 100 Community Members",
      date: "October 12, 2024",
      category: "Health Support",
      readTime: 6,
      views: 1184,
      author: "Health Support Team",
      preview:
        "Through community screenings and education, GICCS has empowered over 100 individuals with vital knowledge and early detection of chronic illnesses like diabetes and hypertension.",
      introduction:
        "At GICCS, we believe that knowledge is the first step to wellness. This year, our chronic illness awareness and screening campaigns reached more than 1,000 people across underserved communities, offering free health checks and critical information about managing long-term conditions.",
      image: newz04,
      tags: ["health-awareness", "chronic-diseases", "community-outreach"],
      hasAudio: false,
      content: `
    <h2>Raising Awareness, Empowering Lives</h2>
    <p>Our community-driven approach to health education focuses on early detection, lifestyle changes, and ongoing support — particularly for chronic illnesses that silently affect millions, such as diabetes and hypertension.</p>

    <h3>Program Impact</h3>
    <ul>
      <li><strong>1,000+ community members reached</strong> through on-site health education drives</li>
      <li><strong>620 individuals</strong> received free blood pressure and blood sugar screenings</li>
      <li><strong>28%</strong> identified with risk factors for diabetes or hypertension</li>
    </ul>

    <h3>Educational Workshops</h3>
    <p>Alongside screenings, our health team conducted interactive workshops focusing on:</p>
    <ul>
      <li>Nutrition and its role in managing blood sugar and pressure</li>
      <li>Simple daily habits to prevent lifestyle-related illnesses</li>
      <li>How to monitor symptoms and seek early medical attention</li>
    </ul>

    <h3>Community Voices</h3>

    <h4>Zahra Salum - Arusha, Tanzania</h4>
    <p>“I always felt tired and dizzy, but I thought it was just age. Through the GICCS screening, I found out my blood pressure was high. Now I’ve changed my diet and I’m walking every morning. I feel stronger.”</p>

    <h4>Mohamed Bakari - Tanga, Tanzania</h4>
    <p>“I didn’t know anything about diabetes. After the health talk, I realized my father had symptoms. We went for a check-up and caught it early. I’m thankful for this awareness program.”</p>

    <h3>Looking Ahead</h3>
    <p>Building on the success of this campaign, GICCS plans to expand its health education drives to five more regions in 2025. We’ll continue focusing on chronic illness awareness, empowering communities to live healthier, more informed lives.</p>
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
      {/*}<div className="bg-white py-16">
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
