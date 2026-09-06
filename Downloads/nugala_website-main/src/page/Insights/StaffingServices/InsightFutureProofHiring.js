import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";

const InsightStaffingSolutions = () => {
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
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full animate-pulse">
                                💼 Staffing
                            </span>
                            <p className="text-sm text-gray-500">5 Min Read</p>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-custom-blue break-words">
                            Future-Proof Hiring: Bridging the Tech Talent Gap with Strategic Staffing
                        </h1>
                        <p className="text-sm sm:text-base">Published: May 28, 2025</p>
                    </div>

                    {/* Section: Introduction */}
                    <section className="mb-6 space-y-5">
                        <p>
                            In a world where digital transformation defines success, the demand for skilled IT professionals is at an all-time high. At Nugala, we help organizations bridge this talent gap through innovative, strategic staffing solutions that align perfectly with their technical and business goals.
                        </p>
                    </section>

                    {/* Section: Custom Staffing Services */}
                    <section className="mb-6 space-y-5">
                        <h2 className="text-2xl font-semibold text-custom-blue">
                            Tailored Staffing for Every IT Need
                        </h2>
                        <p>
                            We provide customized staffing services to meet your evolving IT needs—whether you're scaling up rapidly or seeking niche tech skills. Our offerings cover both contract staffing for short-term agility and permanent placements for long-term stability. Each role is filled with a candidate who is vetted for not just skills, but also cultural fit and future potential.
                        </p>
                    </section>

                    {/* Section: Fast & Precise Recruitment */}
                    <section className="mb-6 space-y-5">
                        <h2 className="text-2xl font-semibold text-custom-blue">
                            Speed and Precision in Hiring
                        </h2>
                        <p>
                            Our recruitment process is fast, precise, and data-driven. Using a mix of AI tools and experienced hiring managers, we identify top-tier candidates, conduct skill-based assessments, and present qualified profiles within 48 hours. This ensures that our clients never miss out on mission-critical talent.
                        </p>
                    </section>

                    {/* Section: Domain-Specific Hiring */}
                    <section className="mb-6 space-y-5">
                        <h2 className="text-2xl font-semibold text-custom-blue">
                            Domain Expertise in Tech Hiring
                        </h2>
                        <p>
                            We specialize in tech and domain-specific hiring. From cloud architects and software engineers to DevOps specialists and AI analysts, we understand what it takes to find the right match in today’s competitive market. Our talent pool is curated with high-performing professionals ready to make an immediate impact.
                        </p>
                    </section>

                    {/* Section: Full Talent Lifecycle Support */}
                    <section className="mb-6 space-y-5">
                        <h2 className="text-2xl font-semibold text-custom-blue">
                            Beyond Recruitment: Full Workforce Solutions
                        </h2>
                        <p>
                            Beyond recruitment, we offer end-to-end workforce solutions—including strategic workforce planning, employer branding, and embedded recruitment models. This holistic approach allows us to serve as an extension of your HR team, helping you plan and scale talent pipelines effectively.
                        </p>
                    </section>

                    {/* Section: Conclusion */}
                    <section className="mb-6 space-y-5">
                        <h2 className="text-2xl font-semibold text-custom-blue">
                            Build a Future-Ready Team with Nugala
                        </h2>
                        <p>
                            In today’s dynamic IT ecosystem, success depends on having the right team in place. Partner with Nugala to future-proof your workforce and maintain a competitive edge.
                        </p>
                    </section>

                    {/* CTA Button */}
                    <footer className="text-center mt-6 p-4 border-t">
                        <p className="mb-4">
                            Looking for your next tech superstar? We’re just one message away.
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

export default InsightStaffingSolutions;
