import { useState, useEffect, useRef, React } from 'react';
import { Link } from 'react-router-dom';

import banner from '../../assets/Nugala/nugala-web-banner-2.png';
import SmallerNavbar from './SmallerNavbar';
import newIcon from '../../assets/Home/icons8-new-48.png'

const services = {
    technologyAndOperations: [
        { name: "Data Analytics", path: "/service/data-analytics" },
        { name: "Cloud Computing", path: "/service/cloud-computing" },
        { name: "Software Development", path: "/service/software-development" },
        { name: "Cyber Security", path: "/service/cyber-security" },
        { name: "Tech Innovation", path: "/service/tech-innovation" },
    ],
    nugalaAiHub: [
        { name: "Generative AI", path: "/nugala-ai-hub/generative-ai" },
        { name: "LLM Fine Tuning", path: "/nugala-ai-hub/llm-fine-tuning" },
        { name: "Computer Vision", path: "/nugala-ai-hub/computer-vision" },
        { name: "Natural Language Processing", path: "/nugala-ai-hub/natural-language-processing" },
        { name: "Conversational AI", path: "/nugala-ai-hub/conversational-ai" },
        { name: "Quantum Computing", path: "/nugala-ai-hub/quantum-computing" },
        { name: "Machine Learning Operations", path: "/nugala-ai-hub/machine-learning-operations" },
    ],
    staffing: [
        { name: "Permanent Hiring", path: "/service/permanent-hiring" },
        { name: "Contractual Hiring", path: "/service/contractual-hiring" },
        { name: "DEI Hiring", path: "/service/dei-hiring" },
        { name: "Executive Hiring", path: "/service/executive-hiring" },
        { name: "Hire, Train, and Deploy", path: "/service/hire-train-deploy" },
        {name :"Interview as a Service", path: "/service/interview-as-a-service"}
    ],
    outsourcing: [
        { name: "Business Process Outsourcing", path: "/service/business-process-outsourcing" },
        { name: "Recruitment Process Outsourcing", path: "/service/recruitment-process-outsourcing" },
        { name: "HR Operations", path: "/service/hr-operations" },
        { name: "Payroll Support", path: "/service/payroll-support" },
        { name: "Workforce Management", path: "/service/workforce-management" },
        { name: "Colocation Service", path: "/service/colocation" },
        { name: "Managed IT & Help Desk Services", path: "/service/managed-IT-helpdesk-services" },
        { name: "Enterprise Data Center Solutions", path: "/service/enterprise-data-center-solutions" },
    ],
    
};

const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    
    const [showDropdownAboutUs, setShowDropdownAboutUs] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [activeTab, setActiveTab] = useState("technologyAndOperations");
    const servicesRef = useRef(null);
    
    const aboutUsRef = useRef(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 991px)');
        const handleScreenChange = () => setIsSmallScreen(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleScreenChange);
        handleScreenChange();
        return () => mediaQuery.removeEventListener('change', handleScreenChange);
    }, []);

    if (isSmallScreen) return <SmallerNavbar />;

    return (
        <div className="relative">
            {/* Main Navbar */}
            <div className="flex justify-around items-center py-4 fixed z-50 w-full bg-[#F4F4F4]">
                <div className="md:w-1/5 flex justify-center items-center">
                    <Link to="/"><img src={banner} alt="Nugala logo" /></Link>
                </div>

                <div className="flex space-x-6 items-center font-bold text-gray-700">
                    <Link to="/" className="hover:text-custom-blue hover:underline">HOME</Link>
                    <div ref={servicesRef} className="" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                        <button className="hover:text-custom-blue hover:underline">SERVICES</button>
                        {showDropdown && (
                            <div className='absolute  flex w-full  left-0 z-[1000] shadow-lg transition-all duration-500'>
                                <div className="bg-[#F4F4F4]  w-full rounded-md p-5 mt-4 flex "

                                    onMouseEnter={() => setShowDropdown(true)}
                                    onMouseLeave={() => setShowDropdown(false)}>
                                    <div className='pt-10'></div>
                                    <div className="w-[35%] p-4 border-r border-gray-300">
                                        <div className="flex items-center">
                                            <button
                                                onClick={() => setActiveTab("technologyAndOperations")}
                                                className={`block w-full text-left font-bold p-3 ${activeTab === "technologyAndOperations" ? "bg-custom-light-blue text-white" : "text-gray-700 hover:bg-gray-200"}`}
                                            >
                                                Technology and Operations
                                            </button>
                                        </div>

                                        <div
                                            onClick={() => setActiveTab("nugalaAiHub")}
                                            className={`w-full flex text-left font-bold p-3 ${activeTab === "nugalaAiHub" ? "bg-custom-light-blue text-white" : "text-gray-700 hover:bg-gray-200"}`}>
                                            <button


                                            >
                                                Nugala AI Hub
                                            </button>
                                            <img src={newIcon} alt="New Icon" className="w-8 h-8" />
                                        </div>

                                        <div className="flex items-center">
                                            <button
                                                onClick={() => setActiveTab("staffing")}
                                                className={`block w-full text-left font-bold p-3 ${activeTab === "staffing" ? "bg-custom-light-blue text-white" : "text-gray-700 hover:bg-gray-200"}`}
                                            >
                                                Staffing Services
                                            </button>
                                        </div>

                                        <div className="flex items-center">
                                            <button
                                                onClick={() => setActiveTab("outsourcing")}
                                                className={`block w-full text-left font-bold p-3 ${activeTab === "outsourcing" ? "bg-custom-light-blue text-white" : "text-gray-700 hover:bg-gray-200"}`}
                                            >
                                                Outsourcing Services
                                            </button>
                                        </div>

                                      

                                    </div>
                                    <div className="w-[65%] p-4">
                                        <h4 className="font-bold text-custom-blue mb-3">{activeTab === "technologyAndOperations" ? "Technology and Operations" : activeTab === "staffing" ? "Staffing Services" : activeTab === "outsourcing" ? "Outsourcing Services" : "Nugala AI Hub"}</h4>
                                        <ul className="text-gray-600 space-y-2">
                                            {services[activeTab].map((service, index) => (
                                                <li key={index}><Link to={service.path} className="hover:text-blue-500">- {service.name}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>
                    <div className="w-[3px] h-10 rounded-sm bg-gray-700"></div>
                    <Link to="/insights" className="hover:text-custom-blue hover:underline">INSIGHTS</Link>

                    <a 
                      href="https://www.thewhyservices.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-custom-blue hover:underline text-[#239FE3]"
                    >
                      EXPLORE WHY
                    </a>

                    <div ref={aboutUsRef} className="relative" onMouseEnter={() => setShowDropdownAboutUs(true)} onMouseLeave={() => setShowDropdownAboutUs(false)}>
                        <button className="hover:text-custom-blue hover:underline">ABOUT US</button>
                        {showDropdownAboutUs && (
                            <div className="absolute top-full left-0 bg-[#F4F4F4] shadow-lg rounded-md p-2 pt-5 w-64">
                                <ul className="text-gray-600 space-y-2 pl-2">
                                    <li><Link to="/about-us/who-we-are">- WHO WE ARE</Link></li>
                                    <li><Link to="/about-us/our-culture">- OUR CULTURE</Link></li>
                                    <li><Link to={"/about-us/the-nugala-advantage"}>- THE NUGALA ADVANTAGE</Link></li>
                                    <li>
                                      <a 
                                        href="https://www.thewhyservices.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-[#239FE3] font-semibold hover:underline"
                                      >
                                        - WHY — YOUR TRUSTED COMPANION
                                      </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className="md:w-1/5 flex justify-center items-center">
                    <Link to="/contact-us">
                        <button className="border-2 border-custom-blue bg-gray-100 p-2.5 rounded-md hover:bg-gradient-to-r hover:from-custom-blue hover:to-custom-light-blue hover:text-white transition-all">
                            LET'S TALK
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;