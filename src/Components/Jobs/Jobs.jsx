import React, { useContext, useState } from 'react';
import { jobContext } from '../../App';
import Job from '../Job/Job';

const Jobs = () => {
    const jobs =useContext(jobContext);
    const [showAll, setShowAll] = useState(false);

console.log(jobs);





    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold'>Featured jobs</h1>
            <p className='mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid md:grid-cols-2 gap-3'>
                {
                   jobs.slice(0, !showAll ? 4:jobs.length).map(job => <Job key={job.id} job= {job}></Job>)
                }
            </div>
            <div>
               {
                 !showAll && <button onClick={() => setShowAll(true)} className='btn-primary'>See all jobs</button>
               }
            </div>

        </div>
    );
};

export default Jobs;