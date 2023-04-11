import React, { useContext, useState } from 'react';
import { getAppliedJobs } from '../FakeDB/FakeDB';
import { jobContext } from '../../App';
import bgImg from '../../assets/All Images/Vector.png'
import bgImg2 from '../../assets/All Images/Vector-1.png'
import Preview from '../Preview/Preview';
import { ArrowLongDownIcon } from '@heroicons/react/24/solid';

const AppliedJobs = () => {

    const jobs = useContext(jobContext)
    const appliedJobsTotal = getAppliedJobs()
    let appliedJobs = [];
    const [appliedJobsFinal,setAppliedJobsFinal] = useState(appliedJobs);

    for (const jobId in appliedJobsTotal){
       const preJob = jobs.find(job => job.id == jobId);
        appliedJobs.push(preJob)
    }

    const filterRemote = ()=>{
       const filteredRemote = appliedJobs.filter(filteredRemote => filteredRemote.job_type === 'Remote');
       setAppliedJobsFinal(filteredRemote) ;
      console.log(appliedJobsFinal);
        
    }


    const filterOnsite = ()=>{
        const filteredOnsite = appliedJobs.filter(filteredJob => filteredJob.job_type === 'Onsite');
        setAppliedJobsFinal(filteredOnsite)
        console.log(appliedJobsFinal)

    }

    return (
        <div>
              <div className='flex justify-between items-center bg-gray-300'>
                <img src={bgImg} alt="background" />
                <h1 className='text-5xl font-bold'>Applied Jobs</h1>
                <img src={bgImg2} alt="background" />
            </div>
            
            <div className='w-11/12 lg:w-9/12 mx-auto py-8'>
            <div className='text-end'>
                <h3 className='text-2xl my-3 mr-5 text-violet-700'>Filter by</h3>
            <button onClick={filterRemote} className="btn-primary  mr-5">Remote</button>
            <button onClick={filterOnsite} className="btn-primary">Onsite</button>

        </div>

            {
                appliedJobsFinal.map(job =><Preview key={job.id} job={job}></Preview>)
            }
          
            </div>





        </div>
    );
};

export default AppliedJobs;