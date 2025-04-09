import {
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

function Navbar() {
  return (
    <header className="shadow-md">
      {/*Top Contact Bar */}
      <div className="max-w-[88%] rounded-b-2xl mx-auto bg-[#1E1E20] text-white text-[0.8rem] grid grid-cols-3 font-semibold items-center px-8 py-3.5">
        {/* Left: Email & Phone */}
        <div className="flex items-center space-x-6">
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
          <p className="text-center">
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
      <nav className="bg-white flex justify-between items-center px-6 py-4 text-[0.9rem]">
        {/*Logo*/}
        <div className="flex items-center space-x-2 ml-32">
          <img src={logo} alt="logo" className="h-20 w-auto" />
        </div>

        {/*Nav Links*/}
        <ul className="flex space-x-12 font-semibold text-black bg-yellow-500 px-12 py-6 rounded-full">
          <li>
            <a href="" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="" className="hover:text-white">
              Programs
            </a>
          </li>
          <li>
            <a href="" className="hover:text-white">
              Inner Center
            </a>
          </li>
          <li>
            <a href="" className="hover:text-white">
              Get Involved
            </a>
          </li>
          <li>
            <a href="" className="hover:text-white">
              Contacts
            </a>
          </li>
        </ul>

        {/*Action Button*/}
        <div className="flex items-center space-x-6 mr-32">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-6 rounded-full flex items-center space-x-2">
            <PhoneCall className="w-4 h-4" />
            <span>Call Us Now</span> <br /> <br />
            <span>+255 784 266 633</span>
          </button>
          <Search className="w-5 h-5 text-black cursor-pointer" />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-6 rounded-full">
            Get Assistance
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
