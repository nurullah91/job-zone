import React, { useContext, useState } from 'react';
import { getAppliedJobs } from '../FakeDB/FakeDB';
import { jobContext } from '../../App';
import bgImg from '../../assets/All Images/Vector.png'
import bgImg2 from '../../assets/All Images/Vector-1.png'
import Preview from '../Preview/Preview';

const AppliedJobs = () => {

    const jobs = useContext(jobContext)
    const appliedJobsTotal = getAppliedJobs()
    const appliedJobs = [];

    for (const jobId in appliedJobsTotal){
       const preJob = jobs.find(job => job.id == jobId);
        appliedJobs.push(preJob)
    }

    return (
        <div>
              <div className='flex justify-between items-center bg-gray-300'>
                <img src={bgImg} alt="background" />
                <h1 className='text-5xl font-bold'>Applied Jobs</h1>
                <img src={bgImg2} alt="background" />
            </div>
            
            <div className='w-11/12 lg:w-9/12 mx-auto'>
            {
                appliedJobs.map(job =><Preview key={job.id} job={job}></Preview>)
            }
          
            </div>





        </div>
    );
};

export default AppliedJobs;