import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { jobContext } from '../../App';
import bgImg from '../../assets/All Images/Vector.png'
import bgImg2 from '../../assets/All Images/Vector-1.png'
import { ArrowLongDownIcon } from '@heroicons/react/24/solid';
import { addToDb } from '../FakeDB/FakeDB';
import Swal from 'sweetalert2';


const JobDetails = () => {
    const jobs = useContext(jobContext);
    const location = useLocation();

    const stateId = location.state.id;
    const job = jobs.find(job => job.id == stateId);

const handleApply= (id) =>{

    addToDb(id);
   

}
    return (
        <div>
            <div className='flex justify-between items-center bg-gray-300'>
                <img src={bgImg} alt="background" />
                <h1 className='text-5xl font-bold'>Job details</h1>
                <img src={bgImg2} alt="background" />
            </div>


            <div className='w-11/12 lg:w-9/12 mx-auto grid lg:grid-cols-[3fr,1fr] gap-7  my-14'>
                <div >
                    <p className='py-5'><strong>Job Description:</strong> {job.job_description}</p>
                    <p className='py-5'><strong>Job Responsibility:</strong> {job.responsibility}</p>
                    <div className='py-5'>
                        <strong>Educational Requirements:</strong>
                        <p>{job.education}</p>
                    </div>
                    <div className='py-5'>
                        <strong>Experience:</strong>
                        <p>{job.experience}</p>
                    </div>

                </div>
              <div>
              <div className='bg-violet-100 p-5 rounded-md shadow-lg'>
                    <h3 className='border-b border-indigo-600 mb-3 pb-3 text-xl font-bold'>Job Details</h3>
                    <div className='flex py-3'>
                        <img src="Frame.png" alt="icon" />
                        <p ><strong>Salary: </strong><span>{job.salary} (Per Month)</span></p>
                    </div>

                    <div className='flex py-3'>
                        <img src="Frame-1.png" alt="icon" />
                        <p><strong>Job Title: </strong><span>{job.job_title}</span></p>
                    </div>





                    <h3 className='border-b border-indigo-600 mb-3 pb-3 text-xl font-bold' >Contact Information</h3>
                    <div className="flex  py-3">
                        <img src="Frame-2.png" alt="icon" />
                        <strong>Phone: </strong><span>{job.phone}</span>

                    </div>
                    <div className="flex  py-3">
                    <img src="Frame-3.png" alt="icon" />
                        <strong>Email: </strong><span>{job.email}</span>

                    </div>
                    <div className="flex  py-3">
                    <img src="Frame-4.png" alt="icon" />
                        <strong>Address: </strong><span>{job.address}</span>

                    </div>


                </div>
               <div className='text-center my-5'>
               <button onClick={() => handleApply(job.id)} className='btn-primary w-9/12 mx-auto'>Apply Now</button>
               </div>
              </div>
            </div>


        </div>
    );
};

export default JobDetails;