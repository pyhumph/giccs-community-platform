import React from "react";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
const RenewableEnergyContact = () => {
    return (
        <section className="py-20 bg-[#1E1E20]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Get
                        <span className="text-[#FFC107] block">Involved?</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Join us in creating a sustainable future. Contact our renewable
                        energy team to learn more about our programs and how you can make a
                        difference.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-[#FFC107]/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-[#FFC107] rounded-xl flex items-center justify-center mb-4">
                                <Phone className="w-6 h-6 text-[#1E1E20]" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                            <p className="text-gray-300">+255 785 044 220</p>
                            <p className="text-gray-400 text-sm">Mon-Fri 9AM-5PM EAT</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-[#FFC107]/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-[#FFC107] rounded-xl flex items-center justify-center mb-4">
                                <Mail className="w-6 h-6 text-[#1E1E20]" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                            <p className="text-gray-300">admin@giccs.or.tz</p>
                            <p className="text-gray-400 text-sm">
                                We'll respond within 24 hours
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-[#FFC107]/50 transition-all duration-300">
                            <div className="w-12 h-12 bg-[#FFC107] rounded-xl flex items-center justify-center mb-4">
                                <MapPin className="w-6 h-6 text-[#1E1E20]" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                            <p className="text-gray-300">Sakina, Arusha</p>
                            <p className="text-gray-300">Majengo</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold text-[#1E1E20] mb-6">
                                Send us a Message
                            </h3>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#FFC107] focus:outline-none transition-colors"
                                            placeholder="Your first name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#FFC107] focus:outline-none transition-colors"
                                            placeholder="Your last name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#FFC107] focus:outline-none transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#FFC107] focus:outline-none transition-colors">
                                        <option>General Inquiry</option>
                                        <option>Partnership Opportunity</option>
                                        <option>Volunteer Interest</option>
                                        <option>Technical Support</option>
                                        <option>Media Inquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        rows="4"
                                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#FFC107] focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about your interest in renewable energy or how we can help..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#FFC107] text-[#1E1E20] py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
                                >
                                    Send Message
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default RenewableEnergyContact;
