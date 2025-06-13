import {
  ArrowUpRight,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Sparkles,
  PhoneCall,
  Search,
  Menu,
  X,
  FileText,
  Users,
  Heart,
  BookOpen,
  Zap,
  Building,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "../../assets/giccs_logo.svg";
import liveChat from "../../assets/live-chat.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  //const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef(null);

  const searchData = [
    {
      id: 1,
      title: "Health Programs",
      type: "program",
      url: "/health",
      icon: Heart,
      description: "Community health initiatives and medical support",
    },
    {
      id: 2,
      title: "Education Support",
      type: "program",
      url: "/programs/education",
      icon: BookOpen,
      description: "Educational programs and scholarships",
    },
    {
      id: 3,
      title: "Renewable Energy",
      type: "program",
      url: "/renewable-energy",
      icon: Zap,
      description: "Sustainable energy solutions for communities",
    },
    {
      id: 4,
      title: "Business Grants",
      type: "program",
      url: "/programs/entrepreneurship-business-grants",
      icon: Building,
      description: "Entrepreneurship and business development support",
    },
    {
      id: 5,
      title: "About Us",
      type: "page",
      url: "/about",
      icon: Users,
      description: "Learn about our mission and team",
    },
    {
      id: 6,
      title: "Become a Volunteer",
      type: "involvement",
      url: "/volunteer",
      icon: Users,
      description: "Join our volunteer community",
    },
    {
      id: 7,
      title: "Donate Now",
      type: "involvement",
      url: "/donate",
      icon: Heart,
      description: "Support our cause with a donation",
    },
    {
      id: 8,
      title: "Partnership",
      type: "involvement",
      url: "/partnership",
      icon: Building,
      description: "Partner with us for greater impact",
    },
    {
      id: 9,
      title: "Newsletter",
      type: "page",
      url: "/newsletter",
      icon: FileText,
      description: "Stay updated with our latest news",
    },
    {
      id: 10,
      title: "Contact Us",
      type: "page",
      url: "/contact",
      icon: Mail,
      description: "Get in touch with our team",
    },
    {
      id: 11,
      title: "Inner Center",
      type: "page",
      url: "/inner-center",
      icon: Sparkles,
      description: "Discover our inner center services",
    },
  ];

  const navigate = (url) => {
    console.log(`Navigating to: ${url}`);
    // Your actual navigation logic here
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Handle search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    // Simulate API call delay
    const searchTimeout = setTimeout(() => {
      const filteredResults = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.type.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      setSearchResults(filteredResults);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [searchQuery]);

  // Handle search modal open/close
  const handleSearchOpen = () => {
    setSearchOpen(true);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && searchOpen) {
        handleSearchClose();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        handleSearchOpen();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  const handleResultClick = (url) => {
    navigate(url);
    handleSearchClose();
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "program":
        return "bg-blue-100 text-blue-800";
      case "page":
        return "bg-green-100 text-green-800";
      case "involvement":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-start justify-center pt-20">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
            {/* Search Header */}
            <div className="flex items-center p-4 border-b">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search programs, pages, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none text-lg placeholder-gray-400"
              />
              <button
                onClick={handleSearchClose}
                className="ml-3 p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {isSearching ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FFC107]"></div>
                </div>
              ) : searchQuery.trim() === "" ? (
                <div className="p-8 text-center text-gray-500">
                  <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium mb-2">Search GICCS</p>
                  <p className="text-sm">
                    Find programs, pages, and information quickly
                  </p>
                  <div className="mt-4 text-xs text-gray-400">
                    Press{" "}
                    <kbd className="px-2 py-1 bg-gray-100 rounded">Ctrl</kbd> +{" "}
                    <kbd className="px-2 py-1 bg-gray-100 rounded">K</kbd> to
                    search anytime
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium mb-2">No results found</p>
                  <p className="text-sm">Try searching for something else</p>
                </div>
              ) : (
                <div className="py-2">
                  {searchResults.map((result) => {
                    const IconComponent = result.icon;
                    return (
                      <button
                        key={result.id}
                        onClick={() => handleResultClick(result.url)}
                        className="w-full px-4 py-3 hover:bg-gray-50 transition-colors duration-200 text-left group"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-[#FFC107] bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-colors">
                            <IconComponent className="w-5 h-5 text-[#1E1E20]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-medium text-[#1E1E20] group-hover:text-[#FFC107] transition-colors">
                                {result.title}
                              </h3>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}
                              >
                                {result.type}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {result.description}
                            </p>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#FFC107] transition-colors opacity-0 group-hover:opacity-100" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Search Footer */}
            {searchQuery.trim() !== "" && searchResults.length > 0 && (
              <div className="border-t p-3 bg-gray-50 text-xs text-gray-500 text-center">
                Found {searchResults.length} result
                {searchResults.length !== 1 ? "s" : ""} for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      )}

      {/* Fixed sized placeholder when navbar is sticky to prevent content jump */}
      {scrolled && <div className="navbar-placeholder"></div>}

      {/* Top Contact Bar - Outside the sticky header */}
      <div
        className={`w-[95%] md:max-w-[88%] rounded-b-2xl mx-auto bg-[#1E1E20] text-white text-xs md:text-[0.7rem] lg:text-[0.8rem] px-3 md:px-6 lg:px-8 transition-all duration-300 ease-in-out ${scrolled
            ? "opacity-0 max-h-0 py-0 overflow-hidden"
            : "opacity-100 max-h-24 py-2 md:py-3"
          }`}
      >
        {/* Mobile: Stack vertically */}
        <div className="flex flex-col md:hidden space-y-2 items-center">
          <div className="flex items-center justify-center space-x-2">
            <Sparkles className="text-[#FFC107] w-3 h-3" />
            <p className="text-center text-xs">
              Empowering Communities, Transforming Lives
            </p>
          </div>
          <div className="flex space-x-3 justify-center">
            <a href="#">
              <Youtube className="text-white hover:text-[#FFC107] w-3 h-3" />
            </a>
            <a href="#">
              <Facebook className="text-white hover:text-[#FFC107] w-3 h-3" />
            </a>
            <a href="#">
              <Twitter className="text-white hover:text-[#FFC107] w-3 h-3" />
            </a>
            <a href="#">
              <Instagram className="text-white hover:text-[#FFC107] w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid grid-cols-3 items-center">
          {/* Left: Email & Phone */}
          <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-8 text-xs md:text-[0.7rem] lg:text-[0.8rem]">
            <div className="flex items-center space-x-1 md:space-x-2">
              <Mail className="text-[#FFC107] w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4" />
              <span>admin@giccs.or.tz</span>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2">
              <PhoneCall className="text-[#FFC107] w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4" />
              <span>+255 785 044 220</span>
            </div>
          </div>

          {/* Center: Slogan */}
          <div className="flex items-center space-x-1 md:space-x-2">
            <Sparkles className="text-[#FFC107] w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4" />
            <p className="text-center text-xs md:text-[0.7rem] lg:text-[0.8rem]">
              <span className="hidden xl:inline">
                Empowering Communities, Transforming Lives. Become A Volunteer
                Today!
              </span>
              <span className="inline xl:hidden">
                Empowering Communities, Transforming Lives
              </span>
            </p>
          </div>

          {/* Right: Social Media */}
          <div className="flex space-x-3 justify-self-end">
            <a href="#">
              <Youtube className="text-white hover:text-[#FFC107] w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4" />
            </a>
            <a href="#">
              <Facebook className="text-white hover:text-[#FFC107] w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4" />
            </a>
            <a href="#">
              <Twitter className="text-white hover:text-[#FFC107] w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4" />
            </a>
            <a href="#">
              <Instagram className="text-white hover:text-[#FFC107] w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar - This becomes sticky */}
      <header
        className={`w-full bg-white z-50 transition-all duration-300 ease-in-out ${scrolled ? "fixed top-0 left-0" : "relative"
          }`}
      >
        <nav
          className={`flex flex-wrap justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-2 md:py-3 lg:py-4 text-[0.8rem] transition-all duration-300 ease-in-out ${scrolled ? "shadow-lg" : "shadow-md"
            }`}
        >
          {/*Logo*/}
          <div className="flex items-center space-x-2 justify-self-start">
            <img
              src={logo}
              alt="logo"
              className={`transition-all duration-300 ease-in-out ${scrolled
                  ? "h-8 md:h-10 lg:h-12 xl:h-16"
                  : "h-10 md:h-12 lg:h-16 xl:h-20"
                } w-auto`}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-[#1E1E20]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Mobile Menu */}
          <div
            className={`md:hidden w-full ${mobileMenuOpen ? "block" : "hidden"} mt-4`}
          >
            <ul className="flex flex-col space-y-3 font-bold text-[#1E1E20] bg-[#FFC107] rounded-lg p-4">
              <li>
                <a href="/" className="block py-2">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="block py-2">
                  About Us
                </a>
              </li>
              <li>
                <details className="cursor-pointer">
                  <summary className="flex justify-between items-center py-2">
                    Programs
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <ul className="pl-4 py-2 space-y-2">
                    <li>
                      <a href="/health" className="block py-1">
                        Health
                      </a>
                    </li>
                    <li>
                      <a href="/programs/education" className="block py-1">
                        Education
                      </a>
                    </li>
                    <li>
                      <a href="/renewable-energy" className="block py-1">
                        Renewable Energy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/programs/entrepreneurship-business-grants"
                        className="block py-1"
                      >
                        Entrepreneurship & Business Grants
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="/inner-center" className="block py-2">
                  Inner Center
                </a>
              </li>
              <li>
                <details className="cursor-pointer">
                  <summary className="flex justify-between items-center py-2">
                    Get Involved
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <ul className="pl-4 py-2 space-y-2">
                    <li>
                      <a href="/volunteer" className="block py-1">
                        Become Volunteer
                      </a>
                    </li>
                    <li>
                      <a href="/donate" className="block py-1">
                        Donate Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-1">
                        Partnership
                      </a>
                    </li>
                    <li>
                      <a href="/newsletter" className="block py-1">
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a href="/donation/application" className="block py-1">
                        Applications
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="/contact" className="block py-2">
                  Contact Us
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => navigate("/donate")}
                  className="w-full bg-[#1E1E20] text-white font-bold py-3 rounded-full flex items-center justify-center space-x-2"
                >
                  <span>Donate Now</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-stretch relative rounded-full">
            {/* Navigation Links */}
            <ul
              className={`flex space-x-2 md:space-x-3 lg:space-x-6 xl:space-x-12 items-center rounded-l-full font-bold text-[#1E1E20] bg-[#FFC107] px-4 md:px-6 lg:px-8 xl:px-12 h-full text-xs md:text-[0.7rem] lg:text-[0.8rem] xl:text-[0.9rem] transition-all duration-300 ease-in-out ${scrolled ? "py-4 md:py-5 lg:py-6" : "py-4 md:py-5 lg:py-6"
                }`}
            >
              <li className="flex items-center">
                <a
                  href="/"
                  className="transition-opacity duration-300 hover:opacity-75"
                >
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="/about"
                  className="transition-opacity duration-300 hover:opacity-75"
                >
                  About Us
                </a>
              </li>
              <li className="flex items-center relative group cursor-pointer">
                Programs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <div className="absolute font-[Nunito] font-medium top-full bg-white left-0 mt-2 w-48 md:w-52 shadow-lg rounded-md overflow-visible invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
                  <a
                    href="/health"
                    className="flex justify-between items-center px-4 py-2 text-xs md:text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 whitespace-nowrap relative group/item"
                  >
                    Health
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                  <a
                    href="/programs/education"
                    className="flex justify-between items-center px-4 py-2 text-xs md:text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                  >
                    Education
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                  <a
                    href="/renewable-energy"
                    className="flex justify-between items-center px-4 py-2 text-xs md:text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                  >
                    Renewable Energy
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                  <a
                    href="/programs/entrepreneurship-business-grants"
                    className="flex justify-between items-center px-4 py-2 text-xs md:text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                  >
                    Entrepreneurship & Business Grants
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                </div>
              </li>
              <li className="hidden xl:flex items-center">
                <a
                  href="/inner-center"
                  className="transition-opacity duration-300 hover:opacity-75"
                >
                  Inner Center
                </a>
              </li>

              <li className="flex items-center relative group cursor-pointer">
                <span className="hidden md:inline">Get Involved</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <div className="absolute font-[Nunito] font-medium top-full left-0 mt-2 w-40 md:w-48 bg-white shadow-lg rounded-md overflow-visible invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
                  <a
                    href="/volunteer"
                    className="flex justify-between items-center px-4 py-2 text-xs md:text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 whitespace-nowrap relative group/item"
                  >
                    Become Volunteer
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                  <a
                    href="/donate"
                    className="flex justify-between items-center px-4 py-2 text-xs md:text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                  >
                    Donate Us
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                  <a
                    href="/partnership"
                    className="flex justify-between items-center px-4 py-2 text-xs md:text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 whitespace-nowrap relative group/item"
                  >
                    Partnership
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                  <a
                    href="/newsletter"
                    className="flex justify-between items-center px-4 py-2 text-xs md:text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                  >
                    Newsletter
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                  <a
                    href="donation/application"
                    className="flex justify-between items-center px-4 py-2 text-xs md:text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                  >
                    Applications
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                </div>
              </li>
              <li className="hidden xl:flex items-center">
                <a
                  href="/contact"
                  className="transition-opacity duration-300 hover:opacity-75"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* U-shape cutout at top and bottom */}
            <div className="relative w-4 md:w-5 lg:w-6 bg-[#FFC107] z-10 before:content-[''] before:absolute before:w-6 md:before:w-7 lg:before:w-8 before:h-3 md:before:h-3 lg:before:h-4 before:bg-white before:rounded-b-full before:top-0 before:left-0 after:content-[''] after:absolute after:w-6 md:after:w-7 lg:after:w-8 after:h-3 md:after:h-3 lg:after:h-4 after:bg-white after:rounded-t-full after:rounded-b-none after:bottom-0 after:left-0" />

            {/* Call Us Now Button */}
            <div
              className={`bg-[#FFC107] px-4 md:px-6 lg:px-10 xl:px-16 text-black font-bold flex items-center h-full rounded-r-full transition-all duration-300 ease-in-out ${scrolled ? "py-2 md:py-2 lg:py-3" : "py-3 md:py-[0.80rem]"
                }`}
            >
              <img
                src={liveChat}
                alt="contact-icon"
                className={`transition-all duration-300 ease-in-out ${scrolled
                    ? "w-auto h-4 md:h-5 lg:h-6 xl:h-7"
                    : "w-auto h-5 md:h-6 lg:h-8 xl:h-9"
                  } mr-2 md:mr-3`}
              />
              <div className="flex flex-col leading-tight">
                <span className="text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] font-bold opacity-75 tracking-wide text-[#1E1E20]">
                  CALL US NOW
                </span>
                <span className="text-xs md:text-sm lg:text-base cursor-pointer mt-0.5 md:mt-1 text-[#1E1E20] transition-opacity duration-300 hover:opacity-75">
                  +255 784 266 633
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Icons - Desktop Only */}
          <div className="hidden md:flex items-center space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-12 justify-self-end">
            <button
              onClick={handleSearchOpen}
              className={`transition-all duration-300 ease-in-out rounded-full group ${scrolled
                  ? "w-auto h-4 md:h-4 lg:h-5 xl:h-6"
                  : "w-auto h-5 md:h-5 lg:h-6 xl:h-8"
                }`}
              title="Search (Ctrl+K)"
            >
              <Search
                className={`transition-all duration-300 ease-in-out text-black cursor-pointer group-hover:text-[#1E1E20] ${scrolled
                    ? "w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                    : "w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
                  }`}
              />
            </button>

            <button
              onClick={() => navigate("/donate")}
              className={`bg-[#FFC107] text-[#1E1E20] cursor-pointer font-bold px-4 md:px-5 lg:px-8 xl:px-10 rounded-full relative group overflow-hidden transition-all duration-300 text-xs md:text-[0.7rem] lg:text-[0.8rem] xl:text-[0.9rem] ${scrolled
                  ? "py-2 md:py-2 lg:py-3 xl:py-[22px]"
                  : "py-3 md:py-3 lg:py-4 xl:py-[22px]"
                }`}
            >
              <span className="absolute inset-0 bg-[#1E1E20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              <div className="flex items-center space-x-1 md:space-x-2 relative z-10">
                <span className="group-hover:text-white transition-colors duration-300">
                  Donate Now
                </span>
                <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 transition-all duration-300 transform group-hover:translate-x-1 group-hover:rotate-45 group-hover:text-white" />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
