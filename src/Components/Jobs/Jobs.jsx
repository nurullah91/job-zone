import React, { useContext, useState } from 'react';
import { jobContext } from '../../App';
import Job from '../Job/Job';

const Jobs = () => {
    const jobs =useContext(jobContext);
    const [showAll, setShowAll] = useState(false);

console.log(jobs);





    return (
        <div className='w-11/12 lg:w-9/12 mx-auto'>
            <h1 className='text-3xl font-bold text-center'>Featured jobs</h1>
            <p className='mb-8 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid md:grid-cols-2 gap-5'>
                {
                   jobs.slice(0, !showAll ? 4:jobs.length).map(job => <Job key={job.id} job= {job}></Job>)
                }
            </div>
            <div className='text-center'>
               {
                 !showAll && <button onClick={() => setShowAll(true)} className='btn-primary m-10'>See all jobs</button>
               }
            </div>

        </div>
    );
};

export default Jobs;