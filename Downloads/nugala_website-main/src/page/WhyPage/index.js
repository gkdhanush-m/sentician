import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { FaHospitalUser, FaRoute, FaUserCheck, FaHeart } from 'react-icons/fa';

const WhyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const whatsappBookingUrl = "https://wa.me/919090254343?text=Hello!%20Can%20I%20get%20more%20info%20on%20this%3F";

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
            <Navbar />

            <div className="pt-20 lg:pt-28"></div>

            <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-8 py-10">
                {/* Hero Banner */}
                <div className="bg-gradient-to-br from-[#0c223c] via-[#163a63] to-[#239FE3] text-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden mb-12">
                    <div className="max-w-3xl space-y-6 relative z-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wider text-[#7dd3fc]">
                            Venture Initiative & Platform
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                            WHY — Your Trusted Companion
                        </h1>
                        <h2 className="text-xl sm:text-2xl font-medium text-[#7dd3fc]">
                            Technology with a human purpose.
                        </h2>
                        <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                            WHY is building a trusted companionship platform designed to help people navigate important hospital visits, travel journeys, and everyday assistance needs with greater confidence and support.
                        </p>
                        <div className="pt-4 flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-center sm:items-start">
                            <a
                                href="https://www.thewhyservices.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto text-center px-8 py-3 rounded-full text-base font-bold text-[#0c223c] bg-white hover:bg-gray-100 shadow-md transition-all duration-300 cursor-pointer"
                            >
                                Explore WHY
                            </a>
                            <a
                                href={whatsappBookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto text-center px-8 py-3 rounded-full text-base font-bold text-white border-2 border-white/60 hover:border-white hover:bg-white/10 shadow-md transition-all duration-300 cursor-pointer"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>

                {/* Purpose & Mission Section */}
                <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
                    <div className="bg-white p-8 rounded-2xl shadow-md space-y-4 border border-gray-100">
                        <h3 className="text-2xl font-bold text-custom-blue">Our Purpose</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Many people face challenges when navigating complex medical appointments, unfamiliar transit routes, or requiring reliable physical support. WHY bridges this gap by offering verified, empathetic care companions who assist every step of the way.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-md space-y-4 border border-gray-100">
                        <h3 className="text-2xl font-bold text-custom-blue">Technology & Innovation</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Engineered with real-time geolocation matching, background-verified partner onboarding, and seamless support routing, WHY combines modern technology with human-centered care delivery.
                        </p>
                    </div>
                </section>

                {/* Key Service Categories */}
                <section className="mb-16 space-y-8">
                    <div className="text-center max-w-2xl mx-auto space-y-2">
                        <h3 className="text-3xl font-bold text-gray-800">Key Service Categories</h3>
                        <p className="text-gray-600">Empowering individuals and families through structured assistance.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <FaHospitalUser className="text-4xl text-[#239FE3]" />,
                                title: "Hospital Visit Support",
                                desc: "Accompaniment and assistance during doctor visits, diagnostics, and medical consultations."
                            },
                            {
                                icon: <FaRoute className="text-4xl text-[#239FE3]" />,
                                title: "Travel & Transit Guidance",
                                desc: "Safe, supported journeys across city transit, airport navigation, and outpatient travel."
                            },
                            {
                                icon: <FaUserCheck className="text-4xl text-[#239FE3]" />,
                                title: "Verified Care Pros",
                                desc: "Multi-level background checks and identity verification for peace of mind."
                            },
                            {
                                icon: <FaHeart className="text-4xl text-[#239FE3]" />,
                                title: "Companionship & Care",
                                desc: "Empathetic, dedicated assistance tailored to eldercare, recovery, and daily tasks."
                            }
                        ].map((cat, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center space-y-3"
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className="p-3 bg-blue-50 rounded-2xl">{cat.icon}</div>
                                <h4 className="text-lg font-bold text-gray-800">{cat.title}</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{cat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Bottom Callout */}
                <div className="bg-gradient-to-r from-[#239FE3] to-[#163a63] text-white p-8 sm:p-10 rounded-2xl text-center space-y-4 shadow-xl">
                    <h3 className="text-2xl sm:text-3xl font-bold">Discover the WHY Ecosystem</h3>
                    <p className="max-w-2xl mx-auto text-gray-100">
                        Learn more about how WHY is revolutionizing real-world care assistance and trusted companionship services.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2">
                        <a
                            href="https://www.thewhyservices.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto text-center bg-white text-[#0c223c] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow cursor-pointer"
                        >
                            Explore WHY
                        </a>
                        <a
                            href={whatsappBookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto text-center text-white border-2 border-white/60 hover:border-white hover:bg-white/10 font-bold px-8 py-3 rounded-full transition shadow cursor-pointer"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default WhyPage;
