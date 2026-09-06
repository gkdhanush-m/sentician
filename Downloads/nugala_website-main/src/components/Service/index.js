import { React, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const ServicePage = ({ data, img }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const whyChooseUsLength = data.whyChooseUs.reasons.length;


    // ⭐ What We Do Carousel (Light & Glassmorphism)
    const WhatWeDoCarousel = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 600,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
        };

        return (
            <div className="relative bg-gray-50 text-custom-blue rounded-3xl p-8 m-5 pb-14 shadow-sm">
                {/* Title */}
                <motion.h2
                    className="text-2xl text-center font-bold text-custom-blue mb-6 tracking-wide"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {data.whatWeDo.sectionTitle}
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    className="text-gray-700 text-center mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {data.whatWeDo.content}
                </motion.p>

                {/* Slick Slider */}
                <Slider {...settings}>
                    {data.whatWeDo.services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="p-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative bg-white/40 min-h-[220px] backdrop-blur-lg border border-gray-200 p-6 rounded-3xl shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out hover:shadow-[0px_10px_30px_rgba(0,0,255,0.2)]">
                                <motion.h3
                                    className="text-2xl font-semibold text-gray-900 mb-2 relative z-10 "
                                    whileHover={{ scale: 1.03 }}
                                >
                                    {service.title}
                                </motion.h3>

                                <hr className="h-[2px] w-full border-t-2 border-custom-blue relative z-10" />

                                <motion.p
                                    className="text-gray-700 mt-3 leading-relaxed flex-1 relative z-10"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {service.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        );
    };

    // ⭐ How We Do It Section (Dark & Bold)
    const HowWeDoItSection = () => {
        const howWeDoItLength = data.howWeDoIt.steps.length;
        const [hoverIndex, setHoverIndex] = useState(null);

        return (
            <div className="relative md:p-12 rounded-3xl m-10 shadow-sm overflow-hidden text-white">
                {/* Background Glow */}
                <div className="absolute -top-10 left-2/4 w-[600px] h-[600px] bg-purple-400 opacity-10 rounded-full blur-3xl"></div>

                {/* Title */}
                <motion.h2
                    className="text-2xl text-center font-bold text-custom-blue mb-6 tracking-wide"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {data.howWeDoIt.sectionTitle}
                </motion.h2>

                {/* Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 ${howWeDoItLength === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3"} gap-10 md:p-5`}>
                    {data.howWeDoIt.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`relative bg-white text-gray-900 p-8 rounded-2xl shadow-lg transition-all duration-500 ease-in-out transform ${hoverIndex === index ? "scale-105 shadow-[0_15px_40px_rgba(255,255,255,0.3)]" : "hover:scale-105"
                                }`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <motion.h3 className="text-2xl font-semibold mb-3 relative z-10" whileHover={{ scale: 1.03 }}>
                                {step.title}
                            </motion.h3>

                            <hr className="h-[2px] w-full border-t-2 border-custom-blue relative z-10" />

                            <motion.p className="text-gray-700  mt-4 leading-relaxed relative z-10" whileHover={{ scale: 1.02 }}>
                                {step.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    };

    function WhyChooseUs() {
        return (
            <div className="flex flex-col items-center bg-slate-50 pb-10 p-5 ">
                <h2 className="text-2xl text-center font-bold text-custom-blue mt-8 mb-4">
                    {data.whyChooseUs.sectionTitle}
                </h2>
                <div className={`grid grid-cols-1 md:grid-cols-2 ${whyChooseUsLength === 4 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-10 px-6 mt-6 md:mt-12`}>
                    {data.whyChooseUs.reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#d9f2ff] shadow-[0px_2px_8px_#f7f9fa] rounded-2xl p-6 text-center border border-custom-blue transition-all duration-500 ease-in-out hover:bg-gradient-to-br from-[#d9f2ff] to-[#b3e0ff] hover:scale-105"

                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600">{reason.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        );
    }





    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <Navbar />
                <div className="md:p-8 md:pt-32">
                    <div className="p-10 flex flex-col md:flex-row items-center">
                        <div className="md:w-[50%] md:p-8">
                            <h1 className="block md:hidden text-2xl font-bold text-center text-custom-blue m-3">{data.heroSection.heading}</h1>
                            <img src={img} alt="Hero photos" className="rounded-2xl" />
                        </div>
                        <div className="md:w-[50%] md:space-y-5 md:p-8">
                            <h1 className=" hidden md:block md:text-2xl lg:text-3xl text-center font-bold text-custom-blue">{data.heroSection.heading}</h1>
                            <h2 className=" m-4 md:text-xl lg:text-2xl text-center font-semibold text-gray-800 mb-4">{data.heroSection.sectionTitle}</h2>
                            <p className="text-lg text-center md:text-xl  text-gray-700">{data.heroSection.content}</p>
                        </div>
                    </div>
                    <WhatWeDoCarousel data={data} />
                    <HowWeDoItSection />
                    <WhyChooseUs />

                    {/* WHY Contextual Reference Banner */}
                    {data.whyReference && (
                        <div className="mx-4 md:mx-10 my-8 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#0c223c] to-[#239FE3] text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="space-y-2 max-w-2xl text-center md:text-left">
                                <h3 className="text-xl md:text-2xl font-bold">{data.whyReference.title}</h3>
                                <p className="text-gray-100 text-sm md:text-base">
                                    {data.whyReference.content}
                                </p>
                            </div>
                            <div className="w-full md:w-auto text-center">
                                <a
                                    href="https://www.thewhyservices.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block w-full md:w-auto bg-white text-[#0c223c] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition shadow text-sm sm:text-base whitespace-nowrap"
                                >
                                    {data.whyReference.cta}
                                </a>
                            </div>
                        </div>
                    )}

                    {/* Contact Section */}
                    <div className="flex flex-col items-center bg-gray-100 py-10 text-center p-4">
                        <h2 className="text-2xl font-semibold text-custom-blue mb-4">{data.contactSection.sectionTitle}</h2>
                        <p className="text-lg text-gray-700 mb-6">{data.contactSection.content}</p>
                        <Link to={"/contact-us"}><button className="bg-custom-blue text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition duration-300">
                            Contact Us
                        </button></Link>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default ServicePage;