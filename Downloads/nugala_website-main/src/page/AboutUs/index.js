import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card } from "../../components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBrain, FaUsers, FaCogs, FaLightbulb, FaGlobe, FaHandshake, FaCode } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";



const TheNugalaAdvantage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="pt-5 sm:pt-10 md:pt-12 lg:pt-24">
            </div>
            <div className="text-gray-700 min-h-screen p-6">
                <div className="max-w-6xl mx-auto text-center py-12">
                    <h1 className="text-3xl mb-4 md:mb-8 md:text-4xl font-bold text-custom-blue">The Nugala Advantage</h1>
                    <p className="text-lg opacity-80 mb-8">
                        At Nugala, we are a future-focused technology partner committed to empowering businesses through cutting-edge AI-driven software solutions, staffing services, and outsourcing strategies. With a passion for innovation and excellence, we deliver tailored solutions designed to solve your most complex challenges.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[{
                        icon: <FaBrain className="text-5xl text-custom-blue mb-4" />,
                        title: "Cutting-Edge AI Software Solutions",
                        features: {
                            "Custom Software Development": "We craft scalable software tailored to meet your business needs, leveraging AI and automation to drive efficiency and innovation.",
                            "Cloud and Data Solutions": "Our expertise in cloud migration, infrastructure management, and real-time data analytics ensures your systems remain secure and scalable.",
                            "AI-Powered Process Automation": "We harness the power of AI to automate repetitive tasks, boost productivity, and enable faster decision-making."
                        }
                    }, {
                        icon: <FaUsers className="text-5xl text-custom-blue mb-4" />,
                        title: "Tailored Staffing Solutions",
                        features: {
                            "Permanent and Contract Staffing": "We connect you with top-tier talent for long-term success or short-term projects, with a focus on senior technical leads and cloud architects.",
                            "AI-Based Talent Matching": "Using advanced algorithms, we match candidates to roles based on skills, experience, and cultural fit.",
                            "Flexible Hiring Models": "Our staffing models are designed to scale as your business needs evolve, providing flexibility and control."
                        }
                    }, {
                        icon: <FaCogs className="text-5xl text-custom-blue mb-4" />,
                        title: "Scalable Outsourcing Solutions",
                        features: {
                            "Project-Based Outsourcing": "We manage entire projects from planning to delivery, ensuring optimal outcomes with minimal resource overhead.",
                            "Operational Support": "Our outsourcing services cover critical operations such as IT support, data management, and process optimization.",
                            "AI-Enhanced Business Processes": "We enhance your outsourced operations with AI to improve efficiency, reduce costs, and deliver faster results."
                        }
                    }].map((card, index) => (
                        <Card key={index} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col flex-grow">
                            <div className="flex flex-col items-center text-center flex-grow">
                                {card.icon}
                                <h2 className="text-2xl font-semibold text-custom-blue mb-4">{card.title}</h2>
                                {Object.entries(card.features).map(([key, value], i) => (
                                    <div key={i} className="bg-gray-100 p-4 rounded-lg w-full mb-3 flex-grow">
                                        <h3 className="font-semibold text-gray-800">{key}</h3>
                                        <p className="text-sm opacity-80 mt-1">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto text-center mt-12">
                    <h2 className="text-3xl font-bold text-custom-blue">The Nugala Promise</h2>
                    <p className="text-lg opacity-80 mt-4">
                        To empower your business for exponential growth through AI-powered innovation and a people-first approach. We measure our success by your success and work relentlessly to exceed your expectations.
                    </p>

                    <div className='flex flex-col w-full items-center mt-6 space-y-4'>
                        <h2 className="text-base md:text-2xl font-bold text-gray-600 mt-2 flex items-center">
                            Get In Touch With Our Experts
                        </h2>

                        <Link to="/contact-us">
                            <button className="bg-custom-blue text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-500 transition duration-300 flex items-center">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};




const WhoWeAre = () => {

    const coreValuesRef = useRef(null);

    const scrollToCoreValues = () => {
        if (coreValuesRef.current) {
            coreValuesRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="pt-5 sm:pt-10 md:pt-12 lg:pt-24"></div>
            <div className="text-gray-700 min-h-screen p-3 md:p-12">
                {/* Header Section */}
                <header className="text-center flex flex-col items-center mb-12 w-full px-4">
                    <motion.h1
                        className="text-2xl mb-4 md:mb-8 md:text-6xl font-bold text-gray-700"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Welcome to <span className="text-custom-blue">Nugala</span>
                    </motion.h1>
                    <motion.p
                        className="font-bold text-lg md:text-4xl m-4 md:m-7"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Your Future-Focused Technology Partner
                    </motion.p>
                    <motion.div
                        className="mt-4 md:mt-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <button onClick={scrollToCoreValues} className="text-custom-blue px-4 py-2 md:px-6 md:py-3 rounded-lg border border-custom-blue hover:bg-custom-blue hover:text-white transition duration-300 mr-4 md:mr-8 text-sm md:text-base">
                            Learn More
                        </button>
                        <Link to={"/contact-us"}>
                            <button className="bg-custom-blue text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-custom-light-blue transition duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-8 w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {[
                            { icon: <FaMicrochip className="text-custom-blue text-4xl" />, text: "AI Innovation" },
                            { icon: <FaCode className="text-custom-blue text-4xl" />, text: "Software Development" },
                            { icon: <MdGroups2 className="text-custom-blue text-4xl" />, text: "Staffing Solutions" },
                            { icon: <AiOutlineThunderbolt className="text-custom-blue text-4xl" />, text: "Fast Growth" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center justify-center gap-2 mt-8 md:mt-12 bg-gray-50 p-5 rounded-md h-40 md:h-48 hover:shadow-lg hover:scale-105 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                {item.icon}
                                <p className="text-center text-sm md:text-base">{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </header>

                {/* Who We Are Section */}
                <motion.div
                    className="flex flex-col md:flex-row p-6 md:p-12 items-center  rounded-3xl text-gray-800 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    {/* Left Column - Who We Are Content */}
                    <section className="w-full md:w-1/2 p-4 md:p-8">
                        <motion.h2
                            className="text-2xl md:text-4xl font-bold mb-6 text-custom-blue flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                        >
                            Who We Are
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <p className="opacity-80 text-justify text-lg">
                                At Nugala, we don’t just offer services; we build lasting partnerships that drive growth. Founded with the vision of becoming a global leader in AI innovation, software development, and staffing, we have quickly become a trusted name in the industry.
                            </p>
                            <p className="opacity-80 text-justify mt-5 text-lg">
                                Our leadership team is composed of experts with years of experience in AI, cloud computing, and business strategy. We serve a diverse client base, ranging from global corporations to ambitious startups, providing tailored solutions that help them achieve digital transformation and scalability.
                            </p>
                        </motion.div>
                    </section>

                    {/* Right Column - Vision & Mission */}
                    <section className="w-full md:w-1/2 p-4 md:p-8">
                        <motion.div
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 mb-6"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center gap-4">
                              
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-custom-blue">Our Vision</h3>
                                    <p className="opacity-80 mt-2 text-lg">
                                        To become the world’s most trusted partner in technology and staffing solutions, enabling businesses to thrive in the age of digital disruption.
                                    </p>

                                  
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center gap-4">
                              
                                <div>
                                   
                                    <h3 className="text-xl md:text-2xl font-bold text-custom-blue">Our Mission</h3>
                                    <p className="opacity-80 mt-2 text-lg">
                                        To deliver innovative, AI-driven solutions that empower our clients to scale faster, improve efficiency, and create sustainable business success.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </section>
                </motion.div>

                {/* WHY Venture Initiative Card */}
                <motion.div
                    className="mt-8 mb-8 bg-gradient-to-r from-[#0c223c] to-[#239FE3] p-6 sm:p-8 rounded-2xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.95 }}
                >
                    <div className="space-y-3 max-w-2xl text-center md:text-left">
                        <span className="text-xs uppercase tracking-widest font-bold text-[#7dd3fc]">Our Venture Platform</span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">WHY — Your Trusted Companion</h3>
                        <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                            WHY is a platform focused on making important journeys and assistance experiences more supported, reliable, and human-centered—helping people navigate hospital visits, travel, and daily care with confidence.
                        </p>
                    </div>
                    <div className="w-full md:w-auto text-center">
                        <a
                            href="https://www.thewhyservices.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full md:w-auto bg-white text-[#0c223c] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition shadow-md text-sm sm:text-base"
                        >
                            Learn More About WHY
                        </a>
                    </div>
                </motion.div>

                {/* Core Values Section */}
                <motion.section
                    ref={coreValuesRef}
                    className="mt-16 -r p-6 rounded-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <motion.h2
                        className="text-2xl md:text-4xl font-bold text-center mb-8 text-custom-blue"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                    >
                        Our Core Values
                    </motion.h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Innovation", desc: "We push the boundaries of technology to create solutions that transform industries.", icon: <FaLightbulb className="text-4xl text-custom-blue" /> },
                            { title: "Excellence", desc: "We strive for excellence in every project, maintaining a strong commitment to quality and integrity.", icon: <FaGlobe className="text-4xl text-custom-blue" /> },
                            { title: "Collaboration", desc: "Success is a shared journey. We work closely with clients, employees, and partners to achieve our goals.", icon: <FaHandshake className="text-4xl text-custom-blue" /> },
                            { title: "Agility", desc: "In a rapidly changing world, adaptability is key. We embrace change to stay ahead of the curve.", icon: <FaUsers className="text-4xl text-custom-blue" /> },
                        ].map((value, index) => (
                            <motion.li
                                key={index}
                                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center gap-4 text-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                {value.icon}
                                <div>
                                    <h4 className="text-xl md:text-2xl font-bold text-custom-blue">{value.title}</h4>
                                    <p className="opacity-80 mt-2 text-lg">{value.desc}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.section>

                {/* Contact Section */}
                <motion.div
                    className="flex flex-col w-full items-center mt-6 space-y-4 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <h2 className="text-base md:text-2xl font-bold text-gray-600 mt-2">
                        Get In Touch With Our Experts
                    </h2>
                    <Link to={"/contact-us"}>
                        <button className="bg-custom-blue text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-500 transition duration-300">
                            Contact Us
                        </button>
                    </Link>
                </motion.div>
            </div>
            <Footer />
        </>
    );
};







export { TheNugalaAdvantage, WhoWeAre };
