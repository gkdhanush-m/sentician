import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import banner from '../../assets/Nugala/nugala-web-banner-2.png'
import './style.css'
import ProgressBar from '../../components/Loader/ProgressBar';

function ApplyForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const { jobCode } = useParams(); // Retrieve jobCode from URL
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        reasonForChange: '',
        expectations: '',
        resume: null, // File input
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            // Validate file type (PDF only)
            if (file.type !== 'application/pdf') {
                alert('Only PDF files are allowed for resumes.');
                setFormData((prevData) => ({
                    ...prevData,
                    resume: null,
                }));
                return;
            }

            // Validate file size (less than 3 MB)
            const maxSizeInMB = 3;
            console.log(file.size)
            if (file.size > maxSizeInMB * 1024 * 1024) {
                alert(`File size should not exceed ${maxSizeInMB} MB.`);
                setFormData((prevData) => ({
                    ...prevData,
                    resume: null,
                }));
                return;
            }

            // If validation passes, update the resume
            setFormData((prevData) => ({
                ...prevData,
                resume: file,
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.resume === null) {
            alert('Please provide a correct resume file.');
            return;
        }

        // Create a FormData object for file upload
        const data = new FormData();
        data.append('jobCode', jobCode); // Append jobCode from URL
        data.append('fullName', formData.fullName);
        data.append('email', formData.email);
        data.append('phoneNumber', formData.phoneNumber);
        data.append('reasonForChange', formData.reasonForChange);
        data.append('expectations', formData.expectations);
        data.append('resume', formData.resume); // Append the resume file

        try {
            setLoading(true)
            // Make POST request to the backend API
            const response = await axios.post('https://hr-app-backend-65gu.onrender.com/api/apply-job', data, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Tell Axios to send data as FormData
                },
            });

            if (response.status === 200) {
                setLoading(false)
                alert('Application submitted successfully!'); // Redirect to a success page or perform other actions
                navigate("/careers")
            }
        } catch (error) {
            setLoading(false)
            console.error('Error submitting application:', error);
            alert('Failed to submit application. Please try again later.');
        }
    };

    return (
        <div className='apply-main-container bg-gray-200 pt-2'>
            <div className="flex py-4 border mx-2 md:mx-5 border-gradient-to-r from-[#6EE7B7] to-[#3B82F6] items-center justify-around md:justify-around md:py-8 rounded-lg shadow-lg">
                {/* Logo */}
                <div className="w-[40%] md:w-[20%] flex justify-center md:justify-start">
                    <img src={banner} alt="Nugala logo" />
                </div>

                {/* Explore Button */}
                <div className="w-[40%] md:w-[20%] flex justify-center md:justify-end">
                    <button className="bg-gradient-to-r from-custom-light-blue to-[#3B82F6] text-white p-3 px-4 rounded-md hover:bg-gradient-to-r hover:from-custom-blue hover:to-[#3B82F6]   transition duration-2000ms">
                        <Link to={"/sd-services"}>Explore More</Link>
                    </button>
                </div>
            </div>


            <div className="p-4 max-w-4xl mx-auto shadow-lg rounded-lg md:p-8 lg:p-12 bg-gray-100 bg-opacity-80 mt-5">
                <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6]">
                    Apply for the Job
                </h1>
                <p className="text-center text-gray-700 mb-6 text-lg lg:text-xl">
                    <strong>Job Code:</strong> {jobCode}
                </p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    {/* Full Name */}
                    <div className="col-span-1">
                        <label className="block mb-2 text-sm lg:text-base font-semibold text-gray-600">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            className="w-full p-3 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="col-span-1">
                        <label className="block mb-2 text-sm lg:text-base font-semibold text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-3 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="col-span-1">
                        <label className="block mb-2 text-sm lg:text-base font-semibold text-gray-600">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            className="w-full p-3 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            placeholder="Enter your phone number"
                            pattern="[0-9]{10}" // Example: 10-digit phone number
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Resume Upload */}
                    <div className="col-span-1">
                        <label className="block mb-2 text-sm lg:text-base font-semibold text-gray-600">
                            Resume
                        </label>
                        <input
                            type="file"
                            name="resume"
                            className="w-full p-3 border border-gray-700 rounded focus:outline-none  text-gray-200 focus:ring-2 focus:ring-blue-400 transition"
                            onChange={handleFileChange}
                            required
                        />
                    </div>

                    {/* What do you expect from us? */}
                    <div className="col-span-1 sm:col-span-2">
                        <label className="block mb-2 text-sm lg:text-base font-semibold text-gray-600">
                            What do you expect from us?
                        </label>
                        <textarea
                            name="expectations"
                            className="w-full p-3 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            placeholder="Share your expectations..."
                            value={formData.expectations || ''}
                            onChange={handleChange}
                            rows="4"
                        />
                    </div>

                    {/* Why are you looking for a change? */}
                    <div className="col-span-1 sm:col-span-2">
                        <label className="block mb-2 text-sm lg:text-base font-semibold text-gray-600">
                            Why are you looking for a change?
                        </label>
                        <textarea
                            name="reasonForChange"
                            className="w-full p-3 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            placeholder="Tell us why you're considering a change..."
                            value={formData.reasonForChange || ''}
                            onChange={handleChange}
                            rows="4"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 sm:col-span-2 flex justify-center">
                        {loading ? <ProgressBar /> : <button
                            type="submit"
                            className="bg-gradient-to-r from-custom-blue to-custom-light-blue text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            Submit
                        </button>}
                    </div>
                </form>
            </div>
        </div>



    );
}

export default ApplyForm;
