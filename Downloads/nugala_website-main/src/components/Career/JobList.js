import React from 'react';

function JobList({ jobs, onJobSelect }) {
    return (
        <div>
           
            {jobs.map((job) => (
                <div
                    key={job.job_id}
                    onClick={() => onJobSelect(job)}
                    className="border-b p-3 cursor-pointer hover:bg-gray-100"
                >
                    <h3 className="font-medium text-gray-700">{job.opening_title}</h3>
                    <p className="text-sm text-gray-500">Location: {job.location}</p>
                    <p className="text-sm text-gray-500">Experience: {job.experience_required} years</p>
                </div>
            ))}
        </div>
    );
}

export default JobList;
