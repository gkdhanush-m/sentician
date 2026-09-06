import React from 'react';
import { Link } from 'react-router-dom';

function JobDetails({ job }) {

    return (
        <div className="p-4">
            <div className="mt-6 flex flex-col items-start md:flex-row justify-between">
                <h2 className="text-2xl font-bold mb-4">{job.opening_title}</h2>
                <button
                    className="bg-gradient-to-r from-custom-blue to-custom-blue text-white text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2  mb-6 md:mb-0 sm:py-3 lg:py-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                    <Link
                        to={`/apply/${job.job_code}`}
                        className="w-full h-full flex items-center justify-center"
                    >
                        Apply Now
                    </Link>
                </button>
            </div>

            <p className="mb-2">
                <strong>Job Code:</strong> {job.job_code}
            </p>
            <p className="mb-2">
                <strong>Location:</strong> {job.location}
            </p>
            <p className="mb-2">
                <strong>Experience Required:</strong> {job.experience_required} years
            </p>
            <p className="mb-2">
                <strong>Shift Timing:</strong> {job.shift_timing}
            </p>
            <p className="mb-2">
                <strong>Number of Positions:</strong> {job.number_of_positions}
            </p>
            <h3 className="font-semibold mt-4">Description</h3>
            <p className="text-sm text-gray-700 whitespace-pre-line">{job.description}</p>
        </div>
    );
}

export default JobDetails;
