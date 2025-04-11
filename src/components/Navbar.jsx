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
} from "lucide-react";
import logo from "../assets/giccs_logo.svg";
import liveChat from "../assets/live-chat.png";

function Navbar() {
  return (
    <header className="shadow-md">
      {/*Top Contact Bar */}
      <div className="max-w-[88%] rounded-b-2xl mx-auto bg-[#1E1E20] text-white text-[0.8rem] grid grid-cols-3 font-medium items-center px-8 py-3.5">
        {/* Left: Email & Phone */}
        <div className="flex items-center space-x-8 text-[0.8rem]">
          <div className="flex items-center space-x-2">
            <Mail className="text-[#FFC107] w-4 h-5" />
            <span>admin@giccs.or.tz</span>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneCall className="text-[#FFC107] w-4 h-5" />
            <span>+255 785 044 220</span>
          </div>
        </div>

        {/* Center: Slogan */}
        <div className="flex items-center space-x-2">
          <Sparkles className="text-[#FFC107] w-4 h-5" />
          <p className="text-center text-[0.8rem]">
            Empowering Communities, Transforming Lives. Become A Volunteer
            Today!
          </p>
        </div>

        {/* Right: Social Media */}
        <div className="flex space-x-3 justify-self-end">
          <a href="#">
            <Youtube className="text-white hover:text-[#FFC107] w-5 h-5" />
          </a>
          <a href="#">
            <Facebook className="text-white hover:text-[#FFC107] w-5 h-5" />
          </a>
          <a href="#">
            <Twitter className="text-white hover:text-[#FFC107] w-5 h-5" />
          </a>
          <a href="#">
            <Instagram className="text-white hover:text-[#FFC107] w-5 h-5" />
          </a>
        </div>
      </div>

      {/*Main Nav Bar*/}
      <nav className="bg-white flex justify-between items-center px-32 py-4 text-[0.9rem]">
        {/*Logo*/}
        <div className="flex items-center space-x-2 justify-self-start">
          <img src={logo} alt="logo" className="h-20 w-auto" />
        </div>
        {/*Nav Links and Call Us Now Merged*/}
        <div className="flex items-stretch relative rounded-full">
          {/* Navigation Links */}
          <ul className="flex space-x-12 items-center rounded-l-full font-bold text-[#1E1E20] bg-[#FFC107] px-12 py-6  h-full">
            <li className="flex items-center">
              <a
                href="#"
                className="transition-opacity duration-300 hover:opacity-75"
              >
                Home
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="transition-opacity duration-300 hover:opacity-75"
              >
                About Us
              </a>
            </li>
            <li className="flex items-center relative group">
              <a
                href="#"
                className="transition-opacity duration-300 hover:opacity-75 flex items-center"
              >
                Programs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
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
              </a>
              <div className="absolute font-[Nunito] font-medium top-full bg-white left-0 mt-2 w-52 shadow-lg rounded-md overflow-visible invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 whitespace-nowrap relative group/item"
                >
                  Health
                  <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                >
                  Education
                  <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 whitespace-nowrap relative group/item"
                >
                  Women Empowerment
                  <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                >
                  Renweable Energy
                  <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                >
                  Entrepreneurship
                  <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                >
                  Business Grants
                  <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </a>
              </div>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="transition-opacity duration-300 hover:opacity-75"
              >
                Inner Center
              </a>
            </li>

            <li className="flex items-center relative group">
              <a
                href="#"
                className="transition-opacity duration-300 hover:opacity-70 flex items-center"
              >
                Get Involved
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
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
              </a>
              <div className="absolute font-[Nunito] font-medium top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-visible invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 whitespace-nowrap relative group/item"
                >
                  Become Volunteer
                  <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                >
                  Donate Us
                  <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 whitespace-nowrap relative group/item"
                >
                  Partnership
                  <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                >
                  Newsletter
                  <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="flex justify-between items-center px-4 py-2 text-sm text-[#1E1E20] hover:text-[#FBC02D] transition-all duration-300 relative group/item"
                >
                  Applications
                  <span className="ml-2 transform opacity-0 translate-x-[-4px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </a>
              </div>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="transition-opacity duration-300 hover:opacity-75"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* U-shape cutout at top and bottom */}
          <div className="relative w-6 bg-[#FFC107] z-10 before:content-[''] before:absolute before:w-8 before:h-4 before:bg-white before:rounded-b-full before:top-0 before:left-0 after:content-[''] after:absolute after:w-8 after:h-4 after:bg-white after:rounded-t-full after:rounded-b-none after:bottom-0 after:left-0" />

          {/* Call Us Now Button */}
          <div className="bg-[#FFC107] px-16 py-4 text-black font-bold flex items-center h-full rounded-r-full">
            <img
              src={liveChat}
              alt="contact-icon"
              className="w-auto h-9 mr-3"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] font-bold opacity-75 tracking-wide text-[#1E1E20]">
                CALL US NOW
              </span>
              <span className="text-base cursor-pointer mt-1 text-[#1E1E20] transition-opacity duration-300 hover:opacity-75">
                +255 784 266 633
              </span>
            </div>
          </div>
        </div>
        {/* Right Side Icons */}
        <div className="flex items-center space-x-12 justify-self-end">
          <Search className="w-auto h-8 text-black cursor-pointer" />
          <button className="bg-[#FFC107] text-[#1E1E20] cursor-pointer font-bold px-10 py-[22px] rounded-full relative group overflow-hidden transition-all duration-300">
            <span className="absolute inset-0 bg-[#1E1E20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            <div className="flex items-center space-x-2 relative z-10">
              <span className="group-hover:text-white transition-colors duration-300">
                Donate Now
              </span>
              <ArrowUpRight className="w-5 h-5 transition-all duration-300 transform group-hover:translate-x-1 group-hover:rotate-45 group-hover:text-white" />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
