import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";

const InsightCustomSoftwareROI = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when the page is loaded
    }, []);

    return (
        <div className="w-full">
            <Navbar />

            <div className="pt-5 lg:pt-32">
                {/* Add any header section or top content */}
            </div>

            <div className="p-5 flex justify-center">
                <div className="w-[95%] md:w-[80%] ">
                    {/* Heading */}
                    <div className="bg-slate-200 p-4 sm:p-6 md:p-8 rounded-lg mb-6 space-y-5">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full animate-pulse">
                                🆕 New
                            </span>

                            <p className="text-sm text-gray-500">4 Min Read</p>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-custom-blue break-words">
                            The Real ROI of Custom Software: Case Studies from Indian Enterprises to Global Clients
                        </h1>
                        <p className="text-sm sm:text-base">Release : May 14, 2025</p>
                    </div>


                    {/* Introduction Section */}
                    <section className="mb-6 space-y-5">
                        <h2 className="text-2xl font-semibold mb-2 text-custom-blue">Introduction</h2>
                        <p>
                            In an era where digital transformation dictates business success, custom software solutions have emerged as a pivotal investment. Unlike off-the-shelf software, custom solutions offer tailored functionalities, ensuring alignment with specific business needs.
                        </p>
                    </section>

                    {/* Understanding the ROI of Custom Software */}
                    <section className="mb-6 space-y-5">
                        <h2 className="text-2xl font-semibold mb-2 text-custom-blue">Understanding the ROI of Custom Software</h2>
                        <p>
                            Investing in custom software development can yield significant returns:
                        </p>
                        <ul className="list-disc pl-5">
                            <li><span className="font-bold">Enhanced Efficiency:</span> Tailored solutions streamline operations, reducing manual interventions and errors.</li>
                            <li><span className="font-bold">Scalability:</span> Custom software evolves with your business, accommodating growth without significant overhauls.</li>
                            <li><span className="font-bold">Competitive Advantage:</span> Unique functionalities can set your business apart, offering services competitors can't match.</li>
                        </ul>
                    </section>

                    {/* Nugala's Digital Transformation */}
                    <section className="mb-6 space-y-5">
                        <h2 className="text-2xl font-semibold mb-2 text-custom-blue">Nugala's Digital Transformation</h2>
                        <p>
                            For one of our renowned clients, Nugala sought to optimize its supply chain management. Through this collaboration, we developed a custom platform integrating real-time tracking, predictive analytics, and automated reporting. Post-implementation, Nugala witnessed a 30% reduction in operational costs and a 25% increase in delivery efficiency.
                        </p>
                    </section>

                    {/* Why Indian Enterprises Prefer Custom Solutions */}
                    <section className="mb-6 space-y-5">
                        <h2 className="text-2xl font-semibold mb-2 text-custom-blue">Why Indian Enterprises Prefer Custom Solutions</h2>
                        <p>
                            India’s burgeoning tech ecosystem offers a plethora of skilled developers and cost-effective solutions. With the custom software development market in India expected to grow at a CAGR of 19.756% during 2025 - 2035, businesses are increasingly turning to bespoke solutions to drive innovation and efficiency.
                        </p>
                    </section>

                    {/* Conclusion */}
                    <section className="mb-6 space-y-5">
                        <h2 className="text-2xl font-semibold mb-2 text-custom-blue">Conclusion</h2>
                        <p>
                            Custom software development is not just an IT investment; it's a strategic move towards sustainable growth and competitiveness. By aligning technology with business objectives, companies can unlock unprecedented value.
                        </p>
                    </section>

                    {/* Footer Section */}
                    <footer className="text-center mt-6 p-4 border-t">
                        <p className="mb-4">
                            Contact us today to explore how our expertise in custom software development can support your digital transformation journey.
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

export default InsightCustomSoftwareROI;
