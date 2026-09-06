import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";

const InsightCustomSoftwareGrowth = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full">
            <Navbar />

            <div className="pt-5 lg:pt-32"></div>

            <div className="p-5 flex justify-center">
                <div className="w-[95%] md:w-[80%]">
                    {/* Header */}
                    <div className="bg-slate-200 p-4 sm:p-6 md:p-8 rounded-lg mb-6 space-y-5">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full animate-pulse">
                                🚀 Featured
                            </span>
                            <p className="text-sm text-gray-500">5 Min Read</p>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-custom-blue break-words">
                            How Custom Software Development Accelerates Business Growth
                        </h1>
                        <p className="text-sm sm:text-base">Published: May 28, 2025</p>
                    </div>

                    {/* Introduction */}
                    <section className="mb-6 space-y-4">
                        <p>
                            In today’s hyper-competitive environment, businesses need more than off-the-shelf software to thrive. Custom software development has become a key driver of digital transformation and operational efficiency. By investing in tailored solutions, companies can boost productivity, address unique challenges, and scale operations effectively.
                        </p>
                    </section>

                    {/* Nugala’s Value Prop */}
                    <section className="mb-6 space-y-4">
                        <h2 className="text-2xl font-semibold text-custom-blue">Why Custom Software?</h2>
                        <p>
                            At Nugala, we understand that no two businesses are the same. Our custom software development services focus on solving specific challenges that off-the-shelf solutions simply can’t. Whether it’s building a custom CRM, automating complex workflows, or creating enterprise-grade platforms—we align every line of code with your goals.
                        </p>
                    </section>

                    {/* Integration & Efficiency */}
                    <section className="mb-6 space-y-4">
                        <h2 className="text-2xl font-semibold text-custom-blue">Designed to Fit, Built to Scale</h2>
                        <p>
                            Our scalable applications are built to plug into your existing infrastructure—ERP, HRMS, or any internal stack—without breaking anything. This seamless integration boosts team performance, saves time, and keeps costs down.
                        </p>
                    </section>

                    {/* Agile + Tech Stack */}
                    <section className="mb-6 space-y-4">
                        <h2 className="text-2xl font-semibold text-custom-blue">How We Work</h2>
                        <p>
                            Agility is baked into our DNA. Using agile methodologies, we build in short sprints, gather fast feedback, and keep communication transparent from day one. Our team of pros specialize in Python, Java, .NET, and React—meaning we deliver solutions that are as beautiful as they are bulletproof.
                        </p>
                    </section>

                    {/* ROI Focus */}
                    <section className="mb-6 space-y-4">
                        <h2 className="text-2xl font-semibold text-custom-blue">ROI That Speaks</h2>
                        <p>
                            The payoff? Big. Our clients see results like streamlined ops, cost savings, and higher profits thanks to automation, optimization, and live data insights. Plus, custom software unlocks continuous innovation—so you’re always ahead, never catching up.
                        </p>
                    </section>

                    {/* Industries Served */}
                    <section className="mb-6 space-y-4">
                        <h2 className="text-2xl font-semibold text-custom-blue">Industries We’ve Elevated</h2>
                        <p>
                            From fintech to logistics, education to healthcare—we’ve built solutions for startups, SMBs, and global giants. Every collab is built on trust, innovation, and long-term value.
                        </p>
                    </section>

                    {/* Real-World Software Example */}
                    <section className="mb-6 space-y-4">
                        <h2 className="text-2xl font-semibold text-custom-blue">Technology for Real-World Support</h2>
                        <p>
                            A key example of custom software creating meaningful real-world impact is{" "}
                            <a
                                href="https://www.thewhyservices.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#239FE3] font-bold hover:underline"
                            >
                                WHY — Your Trusted Companion
                            </a>
                            , a human-centered service platform engineered to assist individuals during hospital visits, travel, and daily routines.
                        </p>
                    </section>

                    {/* Final CTA */}
                    <section className="mb-6 space-y-4">
                        <h2 className="text-2xl font-semibold text-custom-blue">Partner With Nugala</h2>
                        <p>
                            Let Nugala be your partner in innovation, efficiency, and digital growth. We don’t just build software—we engineer success.
                        </p>
                    </section>

                    {/* CTA Button */}
                    <footer className="text-center mt-6 p-4 border-t">
                        <p className="mb-4">
                            Ready to build something powerful together? Let’s talk.
                        </p>
                        <Link to="/contact-us">
                            <button className="bg-custom-blue text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-500 transition duration-300 flex items-center justify-center mx-auto">
                                Contact Us
                            </button>
                        </Link>
                    </footer>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default InsightCustomSoftwareGrowth;
