import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";

const InsightContractVsPermanent = () => {
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
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full animate-pulse">
                                🧠 Staffing
                            </span>
                            <p className="text-sm text-gray-500">5 Min Read</p>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-custom-blue break-words">
                            Contract vs. Permanent Hiring: What’s Right for Your Tech Team?
                        </h1>
                        <p className="text-sm sm:text-base">Published: June 01, 2025</p>
                    </div>

                    {/* Introduction */}
                    <section className="mb-6 space-y-5">
                        <p>
                            In the tech industry, one size doesn’t fit all when it comes to hiring. Businesses need staffing strategies that are flexible, cost-effective, and aligned with their operational goals. At Nugala, we help companies make the right choice between contract and permanent hiring—or a blend of both.
                        </p>
                    </section>

                    {/* Contract Hiring */}
                    <section className="mb-6 space-y-5">
                        <h2 className="text-2xl font-semibold text-custom-blue">
                            Contract Staffing: Flexibility on Demand
                        </h2>
                        <p>
                            Contract staffing offers unmatched flexibility. It’s ideal for short-term projects, urgent requirements, or when scaling teams quickly without long-term commitments. This model helps businesses stay agile while optimizing costs and accessing specialist skills on demand.
                        </p>
                    </section>

                    {/* Permanent Hiring */}
                    <section className="mb-6 space-y-5">
                        <h2 className="text-2xl font-semibold text-custom-blue">
                            Permanent Hiring: Long-Term Value
                        </h2>
                        <p>
                            Permanent hiring, on the other hand, is a strategic investment in your company’s future. It ensures team stability, promotes internal knowledge transfer, and builds a workforce that evolves with your organization. Permanent employees tend to have higher engagement and a stronger alignment with company culture.
                        </p>
                    </section>

                    {/* Hybrid Model */}
                    <section className="mb-6 space-y-5">
                        <h2 className="text-2xl font-semibold text-custom-blue">
                            Hybrid Strategy: Best of Both Worlds
                        </h2>
                        <p>
                            For many organizations, the best approach is a dual-track hiring strategy. By combining contract and permanent hiring models, businesses can meet immediate project demands while investing in core team development. At Nugala, we design hybrid staffing models that balance speed, stability, and scalability.
                        </p>
                    </section>

                    {/* Strategic Support */}
                    <section className="mb-6 space-y-5">
                        <h2 className="text-2xl font-semibold text-custom-blue">
                            Smart Hiring Backed by Strategy
                        </h2>
                        <p>
                            Our team also supports you with data-backed hiring decisions, compensation benchmarking, retention strategies, and employer branding efforts. We don’t just fill roles—we build high-performance teams.
                        </p>
                    </section>

                    {/* Final Call */}
                    <section className="mb-6 space-y-5">
                        <h2 className="text-2xl font-semibold text-custom-blue">
                            Let’s Shape Your Dream Tech Team
                        </h2>
                        <p>
                            Choosing the right hiring model is crucial to your success. Let Nugala guide your staffing strategy and ensure your tech team is always ready to deliver.
                        </p>
                    </section>

                    {/* CTA Button */}
                    <footer className="text-center mt-6 p-4 border-t">
                        <p className="mb-4">
                            Ready to optimize your workforce with the perfect hiring strategy?
                        </p>
                        <Link to="/contact-us">
                            <button className="bg-custom-blue text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-500 transition duration-300 flex items-center justify-center mx-auto">
                                Talk to Our Team
                            </button>
                        </Link>
                    </footer>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default InsightContractVsPermanent;
