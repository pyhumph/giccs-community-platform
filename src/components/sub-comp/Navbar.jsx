
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
} from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../../assets/giccs_logo.svg";
import liveChat from "../../assets/live-chat.png";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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

  return (
    <>
      {/* Fixed sized placeholder when navbar is sticky to prevent content jump */}
      {scrolled && <div className="navbar-placeholder"></div>}

      {/* Top Contact Bar - Outside the sticky header */}
      <div
        className={`w-[95%] md:max-w-[88%] rounded-b-2xl mx-auto bg-[#1E1E20] text-white text-xs md:text-[0.7rem] lg:text-[0.8rem] px-3 md:px-6 lg:px-8 transition-all duration-300 ease-in-out ${
          scrolled
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
        className={`w-full bg-white z-50 transition-all duration-300 ease-in-out ${
          scrolled ? "fixed top-0 left-0" : "relative"
        }`}
      >
        <nav
          className={`flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-2 md:py-3 lg:py-4 text-[0.8rem] transition-all duration-300 ease-in-out ${
            scrolled ? "shadow-lg" : "shadow-md"
          }`}
        >
          {/*Logo*/}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="logo"
              className={`transition-all duration-300 ease-in-out ${
                scrolled
                  ? "h-8 md:h-10 lg:h-12 xl:h-16"
                  : "h-10 md:h-12 lg:h-16 xl:h-20"
              } w-auto`}
            />
          </div>

          {/* Mobile Menu with Sheet */}
          <div className="flex items-center space-x-2 md:hidden">
            <Search className="w-5 h-5 text-black cursor-pointer" />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button 
                onClick={() => setIsOpen(true)}
                className=" text-black px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2 lg:hidden"
              >
                <Menu className="w-4 h-6" />
                
              </button>
            </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0" open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex flex-col h-full bg-white">
                  <SheetHeader className="p-6 border-b bg-[#FFC107]">
                  <div className="flex items-center justify-between">
                    <SheetTitle className="text-gray-800"> Menu</SheetTitle>
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  </SheetHeader>
                  
                  <div className="flex-1 overflow-y-auto p-6">
                    <ul className="space-y-4 font-bold text-[#1E1E20]">
                      <li>
                        <a 
                          href="/" 
                          className="block py-3 text-lg hover:text-[#FFC107] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a 
                          href="/about" 
                          className="block py-3 text-lg hover:text-[#FFC107] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <details className="cursor-pointer">
                          <summary className="flex justify-between items-center py-3 text-lg hover:text-[#FFC107] transition-colors">
                            Programs
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
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
                              <a 
                                href="/health" 
                                className="block py-2 text-base hover:text-[#FFC107] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                Health
                              </a>
                            </li>
                            <li>
                              <a 
                                href="/programs/education" 
                                className="block py-2 text-base hover:text-[#FFC107] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                Education
                              </a>
                            </li>
                            <li>
                              <a 
                                href="/renewable-energy" 
                                className="block py-2 text-base hover:text-[#FFC107] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                Renewable Energy
                              </a>
                            </li>
                            <li>
                              <a
                                href="/programs/entrepreneurship-business-grants"
                                className="block py-2 text-base hover:text-[#FFC107] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                Entrepreneurship & Business Grants
                              </a>
                            </li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <a 
                          href="/inner-center" 
                          className="block py-3 text-lg hover:text-[#FFC107] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Inner Center
                        </a>
                      </li>
                      <li>
                        <details className="cursor-pointer">
                          <summary className="flex justify-between items-center py-3 text-lg hover:text-[#FFC107] transition-colors">
                            Get Involved
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
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
                              <a 
                                href="/volunteer" 
                                className="block py-2 text-base hover:text-[#FFC107] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                Become Volunteer
                              </a>
                            </li>
                            <li>
                              <a 
                                href="/donate" 
                                className="block py-2 text-base hover:text-[#FFC107] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                Donate Us
                              </a>
                            </li>
                            <li>
                              <a 
                                href="/partnership" 
                                className="block py-2 text-base hover:text-[#FFC107] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                Partnership
                              </a>
                            </li>
                            <li>
                              <a 
                                href="/newsletter" 
                                className="block py-2 text-base hover:text-[#FFC107] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                Newsletter
                              </a>
                            </li>
                            <li>
                              <a 
                                href="/donation/application" 
                                className="block py-2 text-base hover:text-[#FFC107] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                Applications
                              </a>
                            </li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <a 
                          href="/contact" 
                          className="block py-3 text-lg hover:text-[#FFC107] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 border-t bg-gray-50">
                    <button
                      onClick={() => {
                        navigate("/donate");
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-[#FFC107] text-[#1E1E20] font-bold py-4 rounded-full flex items-center justify-center space-x-2 text-lg hover:bg-[#e6ad06] transition-colors"
                    >
                      <span>Donate Now</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <img
                          src={liveChat}
                          alt="contact-icon"
                          className="w-5 h-5"
                        />
                        <div>
                          <p className="text-xs font-semibold">CALL US NOW</p>
                          <p className="font-bold text-[#1E1E20]">+255 784 266 633</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation - Improved Responsive Design */}
          <div className="hidden md:flex items-stretch relative rounded-full">
            {/* Navigation Links */}
            <ul
              className={`flex space-x-1 lg:space-x-3 xl:space-x-6 items-center rounded-l-full font-bold text-[#1E1E20] bg-[#FFC107] px-3 lg:px-6 xl:px-8 h-full text-xs lg:text-sm xl:text-base transition-all duration-300 ease-in-out ${
                scrolled ? "py-3 lg:py-4" : "py-4 lg:py-5"
              }`}
            >
              <li className="flex items-center">
                <a
                  href="/"
                  className="transition-opacity duration-300 hover:opacity-75 whitespace-nowrap"
                >
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="/about"
                  className="transition-opacity duration-300 hover:opacity-75 whitespace-nowrap"
                >
                  About Us
                </a>
              </li>
              <li className="flex items-center relative group cursor-pointer">
                <span className="whitespace-nowrap">Programs</span>
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
                <div className="absolute font-[Nunito] font-medium top-full bg-white left-0 mt-2 w-64 shadow-lg rounded-md overflow-visible invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
                  <a
                    href="/health"
                    className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 whitespace-nowrap relative group/item"
                  >
                    Health
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                  <a
                    href="/programs/education"
                    className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                  >
                    Education
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                  <a
                    href="/renewable-energy"
                    className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                  >
                    Renewable Energy
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                  <a
                    href="/programs/entrepreneurship-business-grants"
                    className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                  >
                    Entrepreneurship & Business Grants
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                </div>
              </li>
              <li className="hidden lg:flex items-center">
                <a
                  href="/inner-center"
                  className="transition-opacity duration-300 hover:opacity-75 whitespace-nowrap"
                >
                  Inner Center
                </a>
              </li>

              <li className="flex items-center relative group cursor-pointer">
                <span className="whitespace-nowrap">Get Involved</span>
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
                <div className="absolute font-[Nunito] font-medium top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-md overflow-visible invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
                  <a
                    href="/volunteer"
                    className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 whitespace-nowrap relative group/item"
                  >
                    Become Volunteer
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                  <a
                    href="/donate"
                    className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                  >
                    Donate Us
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                  <a
                    href="/partnership"
                    className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 whitespace-nowrap relative group/item"
                  >
                    Partnership
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                  <a
                    href="/newsletter"
                    className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                  >
                    Newsletter
                    <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                  <a
                    href="donation/application"
                    className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
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
                  className="transition-opacity duration-300 hover:opacity-75 whitespace-nowrap"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* U-shape cutout at top and bottom */}
            <div className="relative w-4 lg:w-5 xl:w-6 bg-[#FFC107] z-10 before:content-[''] before:absolute before:w-6 lg:before:w-7 xl:before:w-8 before:h-3 lg:before:h-4 before:bg-white before:rounded-b-full before:top-0 before:left-0 after:content-[''] after:absolute after:w-6 lg:after:w-7 xl:after:w-8 after:h-3 lg:after:h-4 after:bg-white after:rounded-t-full after:rounded-b-none after:bottom-0 after:left-0" />

            {/* Call Us Now Button */}
            <div
              className={`bg-[#FFC107] px-3 lg:px-6 xl:px-12 text-black font-bold flex items-center h-full rounded-r-full transition-all duration-300 ease-in-out ${
                scrolled ? "py-2 lg:py-3" : "py-3 lg:py-4"
              }`}
            >
              <img
                src={liveChat}
                alt="contact-icon"
                className={`transition-all duration-300 ease-in-out ${
                  scrolled
                    ? "w-auto h-4 lg:h-5 xl:h-6"
                    : "w-auto h-5 lg:h-6 xl:h-8"
                } mr-2`}
              />
              <div className="flex flex-col leading-tight">
                <span className="text-[8px] lg:text-[10px] xl:text-[11px] font-bold opacity-75 tracking-wide text-[#1E1E20]">
                  CALL US NOW
                </span>
                <span className="text-xs lg:text-sm xl:text-base cursor-pointer mt-0.5 text-[#1E1E20] transition-opacity duration-300 hover:opacity-75 whitespace-nowrap">
                  +255 784 266 633
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Icons - Desktop Only */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6 xl:space-x-8">
            <Search
              className={`transition-all duration-300 ease-in-out ${
                scrolled
                  ? "w-auto h-4 lg:h-5 xl:h-6"
                  : "w-auto h-5 lg:h-6 xl:h-8"
              } text-black cursor-pointer`}
            />
            <button
              onClick={() => navigate("/donate")}
              className={`bg-[#FFC107] text-[#1E1E20] cursor-pointer font-bold px-3 lg:px-6 xl:px-8 rounded-full relative group overflow-hidden transition-all duration-300 text-xs lg:text-sm xl:text-base whitespace-nowrap ${
                scrolled
                  ? "py-2 lg:py-3 xl:py-4"
                  : "py-3 lg:py-4 xl:py-5"
              }`}
            >
              <span className="absolute inset-0 bg-[#1E1E20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              <div className="flex items-center space-x-1 lg:space-x-2 relative z-10">
                <span className="group-hover:text-white transition-colors duration-300">
                  Donate Now
                </span>
                <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 transition-all duration-300 transform group-hover:translate-x-1 group-hover:rotate-45 group-hover:text-white" />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;