import React, { useState, useEffect } from 'react';
import JobList from '../../components/Career/JobList';
import JobDetails from '../../components/Career/JobDetails';
import './style.css';
import ProgressBar from '../../components/Loader/ProgressBar';

function CarrersPage() {
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([]); // State for job listings
    const [selectedJob, setSelectedJob] = useState(null); // State for selected job

    // Fetch jobs from API
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('https://hr-app-backend-65gu.onrender.com/api/careers');
                const data = await response.json();
                setJobs(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };
        fetchJobs();
    }, []);

    return (
        <div className="carrer-main-container bg-gray-100 min-h-screen">
           
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Job List */}
                    <div className="col-span-1 bg-white shadow-md p-4 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Job Openings</h2>
                        {loading ? <ProgressBar /> : <JobList jobs={jobs} onJobSelect={(job) => setSelectedJob(job)} />}
                    </div>

                    {/* Job Details */}
                    <div className="col-span-2 bg-white shadow-md p-4 rounded-lg">
                        {selectedJob ? (
                            <JobDetails job={selectedJob} />
                        ) : (
                            <div className="text-center text-gray-500">Select a job to view details</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarrersPage;
