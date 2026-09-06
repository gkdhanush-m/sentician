import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactInfoUSA = () =>{
    return (
        <div className="w-full h-auto md:h-[70vh] flex flex-col md:flex-row">
            {/* Google Map as Background */}
            <iframe
                className="w-full h-[300px] md:h-full md:flex-1"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6443.016138150697!2d-72.87028341510603!3d41.61871763066119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7b71011361d09%3A0xa5e45b4dd62dc335!2s257%20Flanders%20St%2C%20Southington%2C%20CT%2006489%2C%20USA!5e0!3m2!1sen!2sin!4v1739786702366!5m2!1sen!2sin"
                title="Contact Location Map"
                allowFullScreen
                loading="lazy"
            >

            </iframe>

            {/* Contact Info Card */}
            <div className="bg-gray-700 text-white p-8 w-full md:w-[350px] flex flex-col justify-center shadow-lg md:h-full relative md:right-0">
                <h2 className="text-3xl font-bold text-center mb-5">Contact Info</h2>

                <div className="flex flex-col gap-5">
                    {/* USA Office */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                            <FontAwesomeIcon icon={faLocationDot} className="text-white  text-xl" />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">USA Office</h3>
                            <p className="text-sm">257, Flanders St Southington,<br />Connecticut 06489 United States.</p>
                        </div>
                    </div>

                  

                    {/* Phone Numbers */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                            <FontAwesomeIcon icon={faPhone} className="text-white  text-xl" />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">Phone Number</h3>
                            <p className="text-sm"><a href="tel:+19494689091" className="text-blue-300">+1 (949) 468-9091</a></p>
                        </div>
                    </div>

                 
                    {/* Mail Address */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                            <FontAwesomeIcon icon={faEnvelope} className="text-white  text-xl" />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">Mail Address</h3>
                            <a href="mailto:contactus@thenugala.com">contactus@thenugala.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


const ContactInfoIndia =()=> {
    return (
        <div className="w-full h-auto md:h-[70vh] flex flex-col md:flex-row">
            {/* Google Map as Background */}
            <iframe
                className="w-full h-[300px] md:h-full md:flex-1"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62202.42738404442!2d77.49289731448071!3d12.994114314586362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d9618f2b2e5%3A0xaecdc6a9bf66ddbe!2sNugala!5e0!3m2!1sen!2sin!4v1739903414195!5m2!1sen!2sin"
                title="Contact Location Map"
                allowFullScreen
                loading="lazy"
            >

            </iframe>

            {/* Contact Info Card */}
            <div className="bg-gray-700 text-white p-8 w-full md:w-[350px] flex flex-col justify-center shadow-lg md:h-full relative md:right-0">
                <h2 className="text-3xl font-bold text-center mb-5">Contact Info</h2>

                <div className="flex flex-col gap-5">

                    {/* India Office */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                            <FontAwesomeIcon icon={faLocationDot} className="text-white  text-xl" />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">India Office</h3>
                            <p className="text-sm">14/1, BALAJIKRUPA, 2ND MAIN ROAD,<br />SESHADRIPURAM, BANGALORE-560020.</p>
                        </div>
                    </div>

                    {/* Phone Numbers */}
                   

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                            <FontAwesomeIcon icon={faPhone} className="text-white  text-xl" />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">Phone Number</h3>
                            <p className="text-sm"><a href="tel:+919886513663" className="text-blue-300">+91 98865 13663</a></p>
                        </div>
                    </div>

                    {/* Mail Address */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                            <FontAwesomeIcon icon={faEnvelope} className="text-white  text-xl" />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">Mail Address</h3>
                            <a href="mailto:contactus@thenugala.com">contactus@thenugala.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export   { ContactInfoIndia, ContactInfoUSA }