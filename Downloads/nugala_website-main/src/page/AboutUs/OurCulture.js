import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaBalanceScale, FaChartLine } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const OurCulture = () => {
    const cultureItems = [
        {
            title: "Inclusive & Diverse",
            description: "We embrace diversity in all forms, creating a workplace where everyone can bring their whole self to work.",
            icon: FaUsers,
        },
        {
            title: "Continuous Learning",
            description: "With technology evolving every day, we invest heavily in training programs, mentorship, and career development.",
            icon: FaLightbulb,
        },
        {
            title: "Employee Growth",
            description: "We offer career advancement opportunities, promoting from within and recognizing outstanding performance.",
            icon: FaChartLine,
        },
        {
            title: "Innovation-Driven",
            description: "Our teams are encouraged to experiment, think outside the box, and develop groundbreaking ideas.",
            icon: FaLightbulb,
        },
        {
            title: "Work-Life Balance",
            description: "We understand the importance of well-being and offer flexible working arrangements to support our team members.",
            icon: FaBalanceScale,
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <>
            <Navbar />
            <div className="pt-5 sm:pt-10 md:pt-12 lg:pt-24">
            </div>
            <div className=" text-gray-900 min-h-screen py-10 px-6 md:px-16">
                <div className="mt-6 text-center">
                    <h2 className="text-3xl mb-4 md:mb-8 md:text-4xl font-bold text-custom-blue">Our Culture</h2>
                    <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
                        At Nugala, we believe that a strong company culture is the foundation of sustainable success.
                        Our people are our greatest asset, and we foster an environment where innovation, learning, and collaboration thrive.
                    </p>
                </div>


                <div className="mt-12 mb-16 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-6 bg-white shadow-lg rounded-2xl"
                    >
                        <h2 className="text-2xl font-semibold text-custom-blue">Our People, Our Strength</h2>
                        <p className="mt-3 text-gray-700">
                            We are proud of the talented professionals who drive our success. From AI specialists to project managers and recruiters,
                            each team member plays a crucial role in delivering exceptional value to our clients. By fostering an environment of mutual
                            respect and trust, we enable our teams to perform at their best.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="p-6 bg-white shadow-lg rounded-2xl"
                    >
                        <h2 className="text-2xl font-semibold text-custom-blue">Your Growth Partner</h2>
                        <p className="mt-3 text-gray-700">
                            At Nugala, we’re always on the lookout for passionate, driven individuals who want to be part of a company
                            that’s shaping the future of technology and staffing. Whether you’re a tech innovator, talent acquisition expert,
                            or business strategist, you’ll find opportunities to grow with us.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto text-center mb-7"
                >
                    <p className="mt-4 text-lg md:text-2xl font-bold text-custom-blue">
                        We empower businesses with AI-driven software solutions, staffing services, and outsourcing strategies.
                    </p>
                </motion.div>

                <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {cultureItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 * index }}
                            className="p-6 bg-white shadow-lg rounded-2xl flex flex-col items-center text-center"
                        >
                            <item.icon className="text-blue-400 text-5xl" />
                            <h3 className="mt-4 text-xl font-semibold text-custom-blue">{item.title}</h3>
                            <p className="mt-2 text-gray-700">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OurCulture;
