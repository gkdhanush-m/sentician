import React, { useEffect, useRef } from 'react'
import './style.css'
import ContainerComponent from '../../components/Home/OurServiceComponents';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import AboutComponents from '../../components/Home/AboutComponent';
import OurClientComponent from '../../components/Home/OurClientComponent';
import AwardsSection from '../../components/Home/AwardSectionComponent';
import InsightsList from '../../components/InsightsList';
import HeroSectionImg from '../../assets/Home/Home-Hero-bg-removed.png'

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { InsightsListData } from '../../utils';
import WhyCompanionSection from '../../components/Home/WhyCompanionSection';

function HeroSection() {
    return (
        <div className="relative w-full h-[70vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-br from-[#e0eaef] to-[#c5dce8] overflow-hidden">

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.8, delay: 0.4 }}
                className="w-full md:w-[65%] flex flex-col items-center md:items-start text-center md:text-left text-gray-800 space-y-6"
            >
                {/* Headline */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-600">
                    Innovate - Scale - Succeed
                </h1>

                {/* Subtext */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-600">
                    Discover the Nugala Difference - Elevate Your Business Beyond Limits
                </p>

                {/* Call to Action Button */}
                <Link to="/contact-us">
                    <button
                        className="bg-[#239FE3] text-white text-sm md:text-lg lg:text-xl px-3 md:px-5 py-3 
                   rounded-2xl shadow-xl transition-all hover:bg-[#1d8ccc] duration-300 cursor-pointer"
                    >
                        Get in Touch
                    </button>
                </Link>

            </motion.div>

            {/* Image Section */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full md:w-[35%] flex justify-center md:justify-end mt-8 md:mt-0"
            >
                <div className="backdrop-blur-lg rounded-2xl">
                    <img
                        src={HeroSectionImg}
                        alt="Professional Man"
                        className="object-cover rounded-xl w-full md:max-w-none md:h-[70vh]"
                    />
                </div>
            </motion.div>

            {/* Background Animation (Reduced opacity to avoid blocking clicks) */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-[#239FE3]/10 to-[#47B2FF]/10 opacity-30 pointer-events-none"
            />
        </div>
    );
}






const HomePage = () => {
    const containerRef = useRef(null);
    const serviceProvidedRef = useRef(null);
    const firstThreeInsights = InsightsListData.slice(0, 3);

    const handleLearnAllMoreClick = () => {
        serviceProvidedRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    })


    return (
        <>
            <div className="min-h-[100vh] min-w-full">
                <Navbar />
                {/* Welcome Section */}
                <div className="pt-2 bg-gradient-to-br from-[#e0eaef] to-[#c5dce8]  lg:pt-24">
                </div>
                <HeroSection />
                <AboutComponents OnClick={handleLearnAllMoreClick} />
            </div>
            <div ref={containerRef}>
                <ContainerComponent />
            </div>
            {/* WHY Platform Venture Showcase */}
            <WhyCompanionSection />
            {/* About Awards */}
            <AwardsSection />
            {/* Our Clients */}
            <OurClientComponent />
            {/* <WhyChooseUs /> */}
            <InsightsList InsightsListData={firstThreeInsights} />
            <Footer />
        </>

    )
}



export default HomePage