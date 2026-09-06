import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mirrorGirl from './../../assets/mirror_girl_image.webp';
import network from './../../assets/network.png';
import medal from './../../assets/medal.png';
import goodFeedback from './../../assets/satisfaction.png';
import production from './../../assets/production.png';
const services = [
    {
        title: "Dedicated Team",
        description: "Our team is driven by a shared purpose and a relentless commitment to your success.",
        logo: network,
    },
    {
        title: "Award Winning",
        description: "We deliver excellence and innovation, recognized by industry awards and accolades.",
        logo: medal,
    },
    {
        title: "24/7 Hours Support",
        description: "We're here for you round the clock, ensuring seamless operations and peace of mind.",
        logo: goodFeedback,
    },
    {
        title: "Clean Setup",
        description: "We provide streamlined solutions with a focus on simplicity and efficiency.",
        logo: production,
    },
];

function WhyChooseUs() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); 
    }, []);

    const CardContainer = () => (
        <div
            className="mt-6 flex flex-col items-center md:flex-row md:flex-wrap justify-center md:w-[70vw] lg:flex-row lg:w-[88vw] sm:justify-start lg:z-10 md:z-10"
            data-aos="fade-up"
        >
            {services.map((service, index) => (
                <div
                    key={index}
                    className="w-full sm:w-[48%] lg:w-[19%] md:w-[40%] m-3 px-3 pb-4 flex flex-col shadow-md hover:shadow-[0_4px_6px_#F2EBFF] items-center justify-start bg-white"
                    data-aos="flip-left" // Flip animation for each card
                    data-aos-delay={index * 200} // Add delay for staggered effect
                >
                    <div className="bg-custom-light-blue-bg flex justify-center items-start rounded-b-full group">
                        <img
                            className="h-10 w-10 m-3 group-hover:animate-shakeY"
                            src={service.logo}
                            alt={service.title}
                        />
                    </div>
                    <h1 className="text-center mt-3 text-xl font-bold">{service.title}</h1>
                    <p className="text-center mt-3 text-sm md:text-base">{service.description}</p>
                </div>
            ))}
        </div>
    );

    return (
        <div
            className="bg-white flex flex-col md:flex-row lg:flex-row justify-between pt-12 lg:pt-36 px-4 sm:px-12"
            data-aos="fade-up" // Apply fade-up animation to the entire container
        >
            {/* Left Section */}
            <div className="w-full lg:w-[50%] md:w-[40%] flex flex-col items-start">
                <div className="flex items-center justify-center">
                    <hr className="w-16 sm:w-20 h-1 bg-gradient-to-r from-custom-blue to-custom-blue border-0 rounded-md" />
                    <h1 className="ml-4  font-bold bg-gradient-to-r from-custom-blue to-custom-blue bg-clip-text text-transparent mr-4 text-base sm:text-2xl lg:text-4xl">
                        WHY CHOOSE US
                    </h1>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mt-4">
                    We strive to collaborate with the finest!
                </h1>
                <p className="text-base sm:text-lg lg:text-2xl mt-6 leading-relaxed">
                    Our aspiration is to collaborate with the best in the field, driven by a shared commitment to excellence. We are eager to contribute our skills and dedication to achieving outstanding results together.
                </p>
                <CardContainer />
            </div>
            {/* Right Section */}
            <div className="w-full p-14 lg:w-[50%] md:w-[60%] mt-6  lg:mt-0 flex justify-center lg:p-9 md:py-24 md:z-0 lg:z-0">
                <img
                    className="rounded-tl-[15%] sm:rounded-tl-[20%] lg:rounded-tl-[30%] w-full max-w-[400px] md:w-[100%] sm:max-w-[500px] lg:w-[100%]"
                    src={mirrorGirl}
                    alt="Mirror Girl"
                    data-aos="zoom-in" // Apply zoom-in animation to the image
                />
            </div>
        </div>
    );
}

export default WhyChooseUs;