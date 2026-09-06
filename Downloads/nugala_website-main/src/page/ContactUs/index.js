import { useState, useEffect } from 'react'
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

import axios from 'axios';
import ProgressBar from '../../components/Loader/ProgressBar';
import ContactImage1 from "../../assets/ContactUs/feh-contact-1.webp";
import React from 'react';
import { ContactInfoIndia, ContactInfoUSA } from './ContactInfo';


const API_URL = "https://hr-app.up.railway.app/api/contact-us-send-message";
// const API_URL = "http://192.168.1.3:5001/api/contact-us-send-message";


const ContactUsPage = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        subject: "",
        organizationName: "",
        message: "",
    });

    const [selected, setSelected] = useState([]);
    const [activeMap, setActiveMap] = useState("USA");
    const [showSuccessModal, setShowSuccessModal] = useState(false);



    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const SuccessModal = ({ isOpen, onClose }) => {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
                <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 md:p-8 text-center animate-fade-in">
                    <div className="text-green-500 text-4xl mb-4">✅</div>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Message Sent!</h2>
                    <p className="text-gray-600 mb-6">
                        Thanks for contacting Nugala Software Solutions. We'll get back to you soon.
                    </p>
                    <button
                        onClick={onClose}
                        className="w-full bg-custom-blue text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(
                API_URL,
                { ...formData, services: selected }
            );
            if (response.status === 200) {
                setLoading(false);
                setShowSuccessModal(true); // show modal
                setFormData({
                    fullname: "",
                    email: "",
                    phoneNumber: "",
                    subject: "",
                    organizationName: "",
                    message: ""
                });
                setSelected([]);
            }
        } catch (e) {
            setLoading(false);
            console.log("Error", e);
            alert("Failed to submit application. Please try again later.");
        }
    };




    const options = [
        "Technology and Operations",
        "Gen AI Hub",
        "Staffing Service",
        "Outsourcing Services",
    ];

    const handleCheckboxChange = (option) => {
        setSelected((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };



    return (
        <div>
            <Navbar />
            <div className="pt-5 lg:pt-32">
            </div>


            <div className="bg-white py-10 px-2  w-[100%]">
                <div className="w-[98%] md:w-[90%] mx-auto p-8 shadow-lg rounded-lg">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <h2 className="text-lg font-bold text-gray-900 md:hidden">CONTACT US</h2>
                        <div className="w-full md:w-1/2">
                            <img src={ContactImage1} alt="Woman working" className="w-full h-auto rounded-lg" />
                        </div>
                        <div className="w-full md:w-1/2 ">
                            <div className='flex flex-col w-full items-center'>
                                <h2 className="text-lg font-bold text-gray-900 ">CONTACT US</h2>
                                <h2 className="text-2xl font-bold text-gray-600 mt-2">
                                    Get In Touch With Our Experts
                                </h2>
                            </div>

                            <form className="rounded-xl mt-6" onSubmit={handleSubmit}>
                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                    <input
                                        name="fullname"
                                        type="text"
                                        placeholder="Full name *"
                                        className="w-full p-3 border border-custom-blue rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                                        onChange={handleChange}
                                        value={formData.fullname}
                                        required
                                    />

                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Email address *"
                                        className="w-full p-3 border border-custom-blue rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                                        onChange={handleChange}
                                        value={formData.email}
                                        required
                                    />
                                   
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                    <input
                                        name="phoneNumber"
                                        type="number"
                                        placeholder="Phone Number"
                                        className="w-full p-3 border border-custom-blue rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                                        onChange={handleChange}
                                        value={formData.phoneNumber}
                                       
                                    />
                                   
                                    <input
                                        name="subject"
                                        type="text"
                                        placeholder="Subject *"
                                        className="w-full p-3 border border-custom-blue rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                                        onChange={handleChange}
                                        value={formData.subject}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                    <input
                                        name="organizationName"
                                        type="organizationName"
                                        placeholder="Enter your Organization Name *"
                                        className="w-full p-3 border border-custom-blue rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                                        onChange={handleChange}
                                        value={formData.organizationName}
                                        required
                                    />
                                </div>
                                <div className="p-4 border border-custom-blue rounded-lg max-w-md mb-4">
                                    <p className="text-lg font-semibold mb-2">Purpose of Enquiry</p>
                                    {options.map((option, index) => (
                                        <label key={index} className="flex items-center space-x-2 mb-2">
                                            <input
                                                type="checkbox"
                                                value={option}
                                                checked={selected.includes(option)}
                                                onChange={() => handleCheckboxChange(option)}
                                                className="w-4 h-4"
                                            />
                                            <span>{option}</span>
                                        </label>
                                    ))}
                                </div>

                                <textarea
                                    name="message"
                                    placeholder="Type your message *"
                                    className="w-full p-3 border border-custom-blue rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 mb-4"
                                    onChange={handleChange}
                                    value={formData.message}
                                    required
                                ></textarea>
                                {loading ? (
                                    <ProgressBar />
                                ) : (
                                    <button
                                        type="submit"
                                        className="w-full bg-custom-blue text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition"
                                    >
                                        SEND MESSAGE
                                    </button>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
            <div className='flex flex-col'>
                <div className='flex space-x-5 p-6'>
                    <button className={`${activeMap === "USA" ? "bg-custom-blue text-white" : ""} border p-3 rounded-md`} onClick={() => setActiveMap("USA")}>USA Location</button>
                    <button className={`${activeMap === "INDIA" ? "bg-custom-blue text-white" : ""} border p-3 rounded-md`} onClick={() => setActiveMap("INDIA")}>INDIA Location</button>
                </div>
                {activeMap === "USA" ? <ContactInfoUSA /> : <ContactInfoIndia />}
            </div>

            <div className="pt-5 lg:pt-32">
            </div>
            <Footer />
            <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
        </div>
    )
}

export default ContactUsPage