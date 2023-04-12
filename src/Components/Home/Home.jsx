import React, { useContext } from 'react';
import personImg from '../../assets/All Images/nurullah.png'
import JobCategory from '../JobCategory/JobCategory'
import Jobs from '../Jobs/Jobs';


const Home = () => {
    return (
        <div>
            <div className='bg-slate-50'>
                <div className=' flex items-center lg:flex-row flex-col-reverse w-11/12 justify-between mx-auto lg:w-10/12 py-5'>
                    <div className='mt-5'>
                        <h1 className='text-5xl font-bold'>One Step Closer To Your <span className='text-primary'>Dream Job</span></h1>

                        <p className='my-4 text-lg'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='btn-primary'>Get Started</button>
                    </div>

                    <div className='w-[60%] mx-auto' >
                        <img src={personImg} alt="Person image" />
                    </div>

                </div>
            </div>
            <JobCategory></JobCategory>
            <Jobs></Jobs>
          

        </div>

    );
};

export default Home;