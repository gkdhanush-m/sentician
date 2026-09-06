import { useEffect } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import "aos/dist/aos.css";
import capgeminiLogo from './../../assets/Clients/Capgemini-Logo.png';
import Apexon from '../../assets/Clients/apexon_logo.jpg';
import reTeamLogo from './../../assets/Clients/reteam_logo.jpg';
import tigerAnalytics from './../../assets/Clients/tiger_analytics.png';
import sanforce from './../../assets/Clients/saneforce.jpg';
import hcl from './../../assets/Clients/HCL_Technologies-Logo.wine.png';

const OurClient = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    


    const ImageContainerComponents = () => {
        const logos = [
            { src: hcl, alt: "HCL Tech" },
            { src: capgeminiLogo, alt: "Capgemini Logo" },
            { src: reTeamLogo, alt: "Reteam Logo" },
            { src: sanforce, alt: "SanForce" },
            { src: tigerAnalytics, alt: "Tiger Analytics Logo" },
            { src: Apexon, alt: "Apexon" },
        ];

        return (
            <div className="w-full py-10">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={5}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                    autoplay={{
                        delay: 0,  
                        disableOnInteraction: false,
                    }}
                    speed={8000}  // Adjust speed for smoothness (higher = slower)
                    loop={true}  // Infinite loop
                    freeMode={true}  // Ensures continuous scrolling
                    modules={[Autoplay]}
                    className="w-[90%] md:w-[80%] lg:w-[70%]"
                >
                    {[...logos, ...logos].map((logo, index) => ( // Duplicate logos for seamless effect
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="w-24 sm:w-28 md:w-32 lg:w-36 object-contain"  // Ensure no stretching
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    };



   


    return (
        <div className="w-full bg-gray-50 pt-3">
            <div className="flex items-center justify-center mt-20 mb-9">
                <hr className="w-16 sm:w-20 h-1 bg-gradient-to-r from-custom-blue to-custom-blue border-0 rounded-md" />
                <h1 className="ml-4 font-bold bg-gradient-to-r from-custom-blue to-custom-blue bg-clip-text text-transparent mr-4 text-base sm:text-2xl lg:text-3xl">
                    OUR CLIENTS
                </h1>
                <hr className="w-16 sm:w-20 h-1 bg-gradient-to-r from-custom-blue to-custom-blue border-0 rounded-md" />
            </div>
            <div className="text-center space-y-4 text-gray-700">
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    The Nugala Partner Ecosystem
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                    Our robust partner ecosystem unites leading organizations to drive innovation and deliver transformative solutions worldwide.
                </p>
            </div>
            <ImageContainerComponents />
        </div>
    );
};

export default OurClient;
