import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyCompanionSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const whatsappBookingUrl = "https://wa.me/919090254343?text=Hello!%20Can%20I%20get%20more%20info%20on%20this%3F";

    return (
        <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-br from-[#0c223c] via-[#163a63] to-[#239FE3] text-white relative overflow-hidden my-6 sm:my-8 rounded-3xl mx-3 sm:mx-8 lg:mx-12 shadow-2xl border border-white/15">
            {/* Background Accent Animation Glows */}
            <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#239FE3]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#50bcf7]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
                    
                    {/* Text Column */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left space-y-5" data-aos="fade-right">
                        {/* Separate Clean Pill Badges */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-2">
                            <span className="px-4 sm:px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#7dd3fc] whitespace-nowrap shadow-sm">
                                Venture Initiative
                            </span>
                            <span className="px-4 sm:px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#50bcf7] whitespace-nowrap shadow-sm">
                                Social Innovation
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white tracking-tight">
                            WHY — Your Trusted Companion
                        </h2>

                        <h3 className="text-lg sm:text-2xl font-medium text-[#7dd3fc]">
                            Technology with a human purpose.
                        </h3>

                        <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            WHY is building a trusted companionship platform designed to help people navigate important hospital visits, travel journeys, and everyday assistance needs with greater confidence and support.
                        </p>

                        {/* Corporate Style CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-2">
                            <a
                                href="https://www.thewhyservices.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-3 rounded-full text-sm sm:text-base font-bold text-[#0c223c] bg-white hover:bg-gray-100 shadow-md transition-all duration-300 text-center cursor-pointer"
                            >
                                Explore WHY
                            </a>

                            <a
                                href={whatsappBookingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-3 rounded-full text-sm sm:text-base font-bold text-white border-2 border-white/60 hover:border-white hover:bg-white/10 shadow-md transition-all duration-300 text-center cursor-pointer"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>

                    {/* Right Highlights Card */}
                    <div className="w-full lg:w-2/5 self-center lg:self-start mt-2 lg:mt-0" data-aos="fade-left">
                        <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-7 rounded-2xl border border-white/20 shadow-xl space-y-5">
                            <h4 className="text-lg sm:text-xl font-bold text-white border-b border-white/15 pb-3 text-center lg:text-left">
                                Platform Highlights
                            </h4>
                            
                            <ul className="space-y-4 text-xs sm:text-sm lg:text-base text-gray-100">
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 min-w-[24px] min-h-[24px] rounded-full bg-[#239FE3] flex items-center justify-center text-white flex-none shrink-0 aspect-square mt-0.5 shadow-sm">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="leading-snug">Hospital visit & healthcare assistance accompaniment</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 min-w-[24px] min-h-[24px] rounded-full bg-[#239FE3] flex items-center justify-center text-white flex-none shrink-0 aspect-square mt-0.5 shadow-sm">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="leading-snug">Travel & transit journey support services</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 min-w-[24px] min-h-[24px] rounded-full bg-[#239FE3] flex items-center justify-center text-white flex-none shrink-0 aspect-square mt-0.5 shadow-sm">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="leading-snug">Verified, empathetic care & companionship network</span>
                                </li>
                            </ul>

                            <div className="pt-3 text-xs text-gray-300 italic border-t border-white/15 text-center lg:text-left">
                                Powered by human-centered innovation & trusted verification.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyCompanionSection;
