import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";

const InsightAiEvolution = () => {
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
                                🤖 AI & Innovation
                            </span>
                            <p className="text-sm text-gray-500">4 Min Read</p>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-custom-blue break-words">
                            How AI-Powered Solutions Are Revolutionizing Business Operations Across Industries
                        </h1>
                        <p className="text-sm sm:text-base">Published: June 10, 2025</p>
                    </div>

                    {/* Introduction */}
                    <section className="mb-6 space-y-4">
                        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                            Artificial Intelligence is transforming industries worldwide by driving automation, predictive analytics, and data-driven decision-making. From healthcare and finance to retail and logistics, businesses are leveraging AI to optimize operations, elevate customer experiences, and accelerate sustainable growth.
                        </p>
                    </section>

                    {/* Real-World Impact */}
                    <section className="mb-6 space-y-4">
                        <h2 className="text-2xl font-semibold text-custom-blue">
                            Human-Centered AI & Real-World Assistance
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Beyond enterprise automation, AI and intelligent digital platforms are making a profound impact on personal assistance and community care. One compelling example of applying technology to real-world assistance is{" "}
                            <a
                                href="https://www.thewhyservices.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#239FE3] font-bold hover:underline"
                            >
                                WHY — Your Trusted Companion
                            </a>
                            , a platform focused on trusted companionship, transit guidance, and healthcare visit support.
                        </p>
                    </section>

                    {/* Operational Efficiency */}
                    <section className="mb-6 space-y-4">
                        <h2 className="text-2xl font-semibold text-custom-blue">
                            Automating Workflows & Boosting Efficiency
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Modern AI algorithms allow organizations to streamline complex operational workflows, reduce manual processing times, and dynamically match resources with high precision. By combining natural language processing, predictive modeling, and intelligent routing, enterprises create seamless service experiences.
                        </p>
                    </section>

                    {/* Contextual Highlight Box */}
                    <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-[#0c223c] to-[#239FE3] text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-2 max-w-2xl">
                            <span className="text-xs uppercase tracking-wider font-bold text-[#7dd3fc]">Featured Platform Initiative</span>
                            <h3 className="text-xl md:text-2xl font-bold">WHY — Your Trusted Companion</h3>
                            <p className="text-gray-200 text-sm sm:text-base">
                                Experience how human-centered technology powers trusted care companionship, hospital visit assistance, and safe travel accompaniment.
                            </p>
                        </div>
                        <a
                            href="https://www.thewhyservices.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-[#0c223c] font-bold px-6 py-2.5 rounded-lg hover:bg-gray-100 transition shadow text-sm sm:text-base whitespace-nowrap"
                        >
                            Explore WHY Platform
                        </a>
                    </div>

                    {/* Final Call */}
                    <section className="mb-6 space-y-4">
                        <h2 className="text-2xl font-semibold text-custom-blue">
                            Embracing AI with Nugala
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            At Nugala, we help companies identify, build, and deploy custom AI solutions engineered for real-world impact and business scale.
                        </p>
                    </section>

                    {/* CTA Button */}
                    <footer className="text-center mt-6 p-4 border-t">
                        <p className="mb-4">
                            Ready to transform your business operations with AI? Let's talk.
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

export default InsightAiEvolution;
