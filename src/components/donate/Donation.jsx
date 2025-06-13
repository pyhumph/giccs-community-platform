import { useState } from "react";
import { Check, Heart, Mail, Phone, MapPin } from "lucide-react";
import DonationHeader from "./DonationHeader";

export default function Donation() {
  const [donationAmount, setDonationAmount] = useState(10);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const presetAmounts = [10, 50, 100, 300, 500];

  return (
    <div className="bg-gray-50 min-h-screen">
      <DonationHeader />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Donation Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              {/* Main donation image */}
              <div className="w-full h-110 bg-gray-200 overflow-hidden">
                <img
                  src="https://nrpa.org.za/wp-content/uploads/2023/06/donate.jpg"
                  alt="Children in need"
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Donation progress */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-2"></div>

                {/* Donation input field */}
                <div className="relative flex items-center mb-6">
                  <div className="absolute text-gray-50 font-semibold">
                    <span className="text-xl font-bold bg-orange-500 p-4 pl-6 pr-6 rounded-full">
                      $
                    </span>
                  </div>
                  <input
                    type="text"
                    className="w-full pl-18 pr-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={donationAmount !== 0 ? donationAmount : ""}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, "");
                      setDonationAmount(value ? parseInt(value) : 0);
                    }}
                    placeholder="Enter donation amount"
                  />
                </div>

                {/* Donation amount buttons */}
                <div className="mb-6">
                  <div className="grid grid-cols-5 gap-2">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        className={`py-2 px-4 rounded-full transition-all transform hover:scale-105 duration-200 ${donationAmount === amount
                            ? "bg-orange-500 text-white shadow-md"
                            : "bg-gray-100 text-gray-800 hover:bg-orange-400"
                          }`}
                        onClick={() => setDonationAmount(amount)}
                      >
                        ${amount}
                      </button>
                    ))}
                    <button
                      className={`py-2 px-4 rounded-full transition-all transform hover:scale-105 duration-200 ${!presetAmounts.includes(donationAmount)
                          ? "bg-orange-500 text-white shadow-md"
                          : "bg-gray-100 text-gray-800 hover:bg-orange-400"
                        }`}
                      onClick={() => {
                        setDonationAmount(0);
                        document.querySelector('input[type=["text"]').focus();
                      }}
                    >
                      Custom
                    </button>
                  </div>
                </div>

                {/* Personal Information Form */}
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Personal Info:
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <input
                        type="text"
                        placeholder="First Name *"
                        className="w-full px-4 py-3 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-500 border border-gray-300 rounded-md"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name *"
                        className="w-full px-4 py-3 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-500 border border-gray-300 rounded-md"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address *"
                        className="w-full px-4 py-3 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-500 border border-gray-300 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-500 border border-gray-300 rounded-md"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Your Address"
                      className="w-full px-4 py-4 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-500 border border-gray-300 rounded-md"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                  <div className="mb-6">
                    <textarea
                      placeholder="Message (Optional)"
                      className="w-full px-4 py-2 border bg-gray-100 focus:outline-none focus:ring-1 focus:ring-orange-500 border-gray-300 rounded-md h-32 resize-none"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="flex justify-between items-center">
                    <button className="py-2 px-6 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all transform hover:scale-105 duration-200 flex items-center">
                      <Heart size={18} className="mr-2" />
                      Donate Now
                    </button>
                    <div className="text-md text-gray-700">
                      Donation Total:{" "}
                      <span className="font-bold">${donationAmount || 0}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Summary</h2>
              <p className="text-lg text-gray-700 mb-6">
                At our core, we believe in the power of kindness, community, and
                hope. Our charity is dedicated to creating meaningful
                change—whether it's by providing food and clean water,
                supporting education, or empowering communities to build a
                better future. Every donation, volunteer hour, and act of
                compassion brings us closer to a world where no one is left
                behind.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-lg">
                  <div className="flex items-start mb-3">
                    <Check className="text-green-500 mr-2 mt-1" size={18} />
                    <span>Empowering Lives Through Giving</span>
                  </div>
                  <div className="flex items-start mb-3">
                    <Check className="text-green-500 mr-2 mt-1" size={18} />
                    <span>Supporting Families in Need</span>
                  </div>
                  <div className="flex items-start mb-3">
                    <Check className="text-green-500 mr-2 mt-1" size={18} />
                    <span>Education for Every Child</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1" size={18} />
                    <span>Accessible Resources for All</span>
                  </div>
                </div>
                <div className="text-lg">
                  <div className="flex items-start mb-3">
                    <Check className="text-green-500 mr-2 mt-1" size={18} />
                    <span>Healthcare Where It's Needed Most</span>
                  </div>
                  <div className="flex items-start mb-3">
                    <Check className="text-green-500 mr-2 mt-1" size={18} />
                    <span>Together for a Better Tomorrow</span>
                  </div>
                  <div className="flex items-start mb-3">
                    <Check className="text-green-500 mr-2 mt-1" size={18} />
                    <span>Compassion in Action</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1" size={18} />
                    <span>Every Contribution Matters</span>
                  </div>
                </div>
              </div>

              {/* Gallery images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="rounded-md overflow-hidden h-60">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlmmqvY6GcJqvIYGo-f7o_3gMiMa5snzuhHg&s"
                    alt="Children receiving aid"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-md overflow-hidden h-60">
                  <img
                    src="https://centreproject.org/wp-content/uploads/2024/01/blog-four6-1.jpg"
                    alt="Volunteers helping in the community"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                Your support helps us reach remote villages, build schools,
                deliver medical supplies, and bring joy where it's needed most.
                Each step we take is a step forward—made possible by the
                generosity of people like you.
              </p>

              {/* Testimonial */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-orange-500">
                <div className="flex flex-col">
                  <p className="text-gray-700 italic mb-4">
                    "Volunteering with this charity changed my life. Seeing the
                    smiles of those we helped reminded me of the power we have
                    when we come together. It’s more than a mission—it’s a
                    movement of love and purpose."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Testimonial author"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">John Smith</p>
                      <p className="text-sm text-gray-500">Volunteer</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700">
                Join us as we strive to make lasting change. Whether you're
                donating, volunteering, or simply spreading the word—you're a
                vital part of our journey toward a brighter future.
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-1/3">
            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src="https://charish.us/wp-content/uploads/2024/02/istockphoto-519317054-612x612-1.jpg"
                        alt="Post"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium hover:text-orange-500 cursor-pointer">
                        There are many vario res of passages of lorem ipsum
                      </h4>
                      <p className="text-xs text-gray-500">May 12, 2023</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Charity Quote */}
            <div className="bg-white rounded-lg shadow-md mb-8">
              {/* <h3 className="text-lg font-semibold mb-4">Categories</h3> */}

              <div className="w-full h-80">
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                  {/* Main donation image */}
                  <div className="w-full h-80 bg-gray-200 overflow-hidden">
                    <img
                      src="https://serudsindia.org/wp-content/uploads/2018/07/3.png"
                      alt="Children in need"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tag Cloud */}
            {/*<div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Tag Cloud</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-md hover:bg-orange-500 hover:text-white cursor-pointer">
                  Crowdfunding
                </span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-md hover:bg-orange-500 hover:text-white cursor-pointer">
                  Innovations
                </span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-md hover:bg-orange-500 hover:text-white cursor-pointer">
                  Donations
                </span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-md hover:bg-orange-500 hover:text-white cursor-pointer">
                  Families
                </span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-md hover:bg-orange-500 hover:text-white cursor-pointer">
                  Startup
                </span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-md hover:bg-orange-500 hover:text-white cursor-pointer">
                  Technology
                </span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-md hover:bg-orange-500 hover:text-white cursor-pointer">
                  Market
                </span>
                <span className="px-3 py-1 bg-gray-100 text-sm rounded-md hover:bg-orange-500 hover:text-white cursor-pointer">
                  Court
                </span>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
