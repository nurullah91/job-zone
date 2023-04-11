import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { jobContext } from '../../App';
import bgImg from '../../assets/All Images/Vector.png'
import bgImg2 from '../../assets/All Images/Vector-1.png'
const JobDetails = () => {
    const jobs = useContext(jobContext);
    const location = useLocation();

    const stateId = location.state.id;
    const job = jobs.find(job => job.id == stateId);
    console.log(job)

    return (
        <div>
            <div className='flex justify-between items-center bg-gray-300'>
                <img src={bgImg} alt="background" />
                <h1 className='text-5xl font-bold'>Job details</h1>
                <img src={bgImg2} alt="background" />
            </div>


            <div className='w-11/12 lg:w-9/12 mx-auto grid grid-cols-2 gap-3 mt-14'>
                <div >
                    <p><strong>Job Description:</strong> {job.job_description}</p>
                    <p><strong>Job Responsibility:</strong> {job.responsibility}</p>
                    <div>
                        <strong>Educational Requirements:</strong>
                        <p>{job.education}</p>
                    </div>
                    <div>
                        <strong>Experience:</strong>
                        <p>{job.experience}</p>
                    </div>

                </div>
                <div>
                    <h3>Job Details</h3>
                    <div className='flex'>
                        <img src="Frame.png" alt="icon" />
                        <p><strong>Salary: </strong><span>{job.salary} (Per Month)</span></p>
                    </div>

                    <div className='flex'>
                        <img src="Frame-1.png" alt="icon" />
                        <p><strong>Job Title: </strong><span>{job.job_title}</span></p>
                    </div>






                    <h3>Contact Information</h3>
                    <div className="flex">
                        <img src="Frame-2.png" alt="icon" />
                        <strong>Phone: </strong><span>{job.phone}</span>

                    </div>
                    <div className="flex">
                    <img src="Frame-3.png" alt="icon" />
                        <strong>Email: </strong><span>{job.email}</span>

                    </div>
                    <div className="flex">
                    <img src="Frame-4.png" alt="icon" />
                        <strong>Address: </strong><span>{job.address}</span>

                    </div>


                </div>
            </div>


        </div>
    );
};

export default JobDetails;