import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeComponents from './HomeComponents';
import bestSeller from './../../assets/Home/best-seller.png';
import expertise from "./../../assets/Home/expertise.png";
import manPresenting from './../../assets/Home/home-page-man-presenting.jpg'
import teamLogo from './../../assets/Home/icons8-group-task-80.png'
import awardWinning from './../../assets/Home/awards-winning.png'
import support24By7 from './../../assets/Home/24-7-support.png'
import advantageLogo from './../../assets/Home/advantage-logo.png'
import whoWeAreLogo from './../../assets/Home/who-we-are.png'
import OurCultureLogo from './../../assets/Home/our-culture.png'
import { Link } from 'react-router-dom';

const features = [

    {
        title: "WHO WE ARE",
        icon: whoWeAreLogo,
        colors: ["bg-yellow-100", "bg-yellow-200", "bg-yellow-300", "text-yellow-400"],
        link: "/about-us/who-we-are"
    },
    {
        title: "OUR CULTURE",
        icon: OurCultureLogo,
        colors: ["bg-blue-100", "bg-blue-200", "bg-blue-300", "text-blue-400"],
        link: "/about-us/our-culture"
    },
    {
        title: "THE NUGALA ADVANTAGE",
        icon: advantageLogo,
        colors: ["bg-red-100", "bg-red-200", "bg-red-300", "text-red-400"],
        link: "/about-us/the-nugala-advantage"
    }
];

const homeComponentsData = [
    {
        imgUrl: expertise,
        imgAlt: "Img Expertise",
        heading: "Creative Ideas",
        para: "Unlock the power of innovation with our creative solutions. We bring fresh perspectives to help your brand stand out in a competitive landscape.",
    },
    {
        imgUrl: bestSeller,
        imgAlt: "Img bestSeller",
        heading: "Excellence in Performance",
        para: "We are committed to delivering high-performance solutions that drive efficiency, productivity, and success in every aspect of your business.",
    },
    {
        imgUrl: teamLogo,
        imgAlt: "Img teamLogo",
        heading: "Dedicated Team",
        para: "Our team of experts works with passion and precision to turn your vision into reality, ensuring personalized support and exceptional service.",
    },
    {
        imgUrl: awardWinning,
        imgAlt: "Img awardWinning",
        heading: "Award Winning",
        para: "Recognized for excellence, our award-winning services and solutions redefine industry standards and push the boundaries of innovation.",
    },
    {
        imgUrl: support24By7,
        imgAlt: "Img support24By7",
        heading: "24/7 Support",
        para: "We provide round-the-clock support to ensure uninterrupted service and quick resolutions, so you can focus on what matters most.",
    },
];


const AboutComponents = ({ OnClick }) => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false }); // Initialize AOS for scroll animations with "once: false"
    }, []);


    const AIComponent = () => {

        return (
            <div className="">
                <div className="flex flex-col md:flex-row justify-center gap-40">
                    {features.map((feature, index) => (
                        <Link to={feature.link} key={index} className="flex flex-col items-center">
                            <div className="relative flex items-center justify-center">
                                <div className={`absolute w-52 h-52 rounded-full ${feature.colors[0]}`}></div>
                                <div className={`absolute w-36 h-36 rounded-full ${feature.colors[1]}`}></div>
                                <div className={`absolute w-20 h-20 rounded-full ${feature.colors[2]} flex items-center justify-center`}>
                                    <img src={feature.icon} alt='logo' />
                                </div>
                            </div>

                            <h3 className="mt-32 text-lg font-bold">{feature.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }


    return (
        <div className="p-7 pt-10 md:pt-12">
            <div className='flex flex-col items-center justify-center'>
                <div className="flex items-center justify-center mb-5">
                    <hr className="w-20 h-1 bg-gradient-to-r from-custom-blue to-custom-blue border-0 rounded-md" />
                    <h1 className="ml-4  font-bold bg-gradient-to-r from-custom-blue to-custom-blue bg-clip-text text-transparent mr-4 text-base sm:text-2xl lg:text-3xl">ABOUT US</h1>
                    <hr className="w-16 sm:w-20 h-1 bg-gradient-to-r from-custom-blue to-custom-blue border-0 rounded-md" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl mt-3 text-center font-semibold">
                    Empowering tomorrow's possibility, today
                </h3>

            </div>
            <div className='p-5'>
                <p className="text-base sm:text-lg md:text-xl  text-center text-gray-800 font-medium">Seize new horizons with our adaptive solutions, truly engineered for the modern era. We integrate strategic thinking, industry expertise, and cutting-edge innovation to help you excel in competitive environments. Experience amplified efficiency, accelerated outcomes, and strengthened resilience. Discover a reliable partner committed to propelling you toward lasting growth.</p>
            </div>
            <div className='mt-32'>
                <AIComponent />
            </div>
            <div className='flex flex-col md:flex-row p-4 md:p-8 mt-10'>
                <div className='md:w-[50%]'>
                    <img className="rounded" src={manPresenting} alt='Man presenting about business insights' />
                </div>
                <div className='p-5 md:p-10 md:w-[50%] flex flex-col items-center space-y-10'>
                    <h2 className="text-lg  text-center sm:text-xl md:text-2xl lg:text-3xl underline font-bold">
                        REIMAGINING TECHNOLOGY FOR THE FUTURE
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center font-medium">At Nugala, we blend creative thinking with pragmatic execution, ensuring that businesses can scale rapidly and stay competitive. We work closely with clients to craft sustainable strategies, delivering meaningful advancements that streamline operations and boost long-term performance. Trust us to be your partner on the journey to what's next.</p>
                </div>
            </div>

            <div className='bg-slate-50 p-8 rounded-md'>
                <div className="flex items-center justify-center mb-5">
                    <hr className="w-20 h-1 bg-gradient-to-r from-custom-blue to-custom-blue border-0 rounded-md" />
                    <h1 className="ml-4 text-center font-bold bg-gradient-to-r from-custom-blue to-custom-blue bg-clip-text text-transparent mr-4 text-base sm:text-2xl lg:text-3xl">WHY CHOOSE US</h1>
                    <hr className="w-16 sm:w-20 h-1 bg-gradient-to-r from-custom-blue to-custom-blue border-0 rounded-md" />
                </div>
                <div className='flex justify-center'>
                    <p className=" md:w-[60%] text-base sm:text-lg md:text-xl  text-center mt-4 text-gray-700 font-medium">
                        We strive to collaborate with the finest.
                        Our aspiration is to work with the best in the field, driven by a shared commitment to excellence. We are eager to contribute our skills and dedication to achieving outstanding results together.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-start mt-10 gap-4 w-full">
                    {homeComponentsData.map((item, index) => (
                        <HomeComponents
                            key={index}
                            imgUrl={item.imgUrl}
                            imgAlt={item.imgAlt}
                            heading={item.heading}
                            para={item.para}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default AboutComponents;
