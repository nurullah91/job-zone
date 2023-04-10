import React from 'react';
import personImg from '../../assets/All Images/P3OLGJ1 copy 1.png'
import JobCategory from '../JobCategory/JobCategory'

const Home = () => {
    return (
        <div>
            <div className='bg-slate-50'>
                <div className='lg:flex w-11/12 mx-auto lg:w-10/12 py-5'>
                    <div className='mt-5'>
                        <h1 className='text-5xl font-bold'>One Step Closer To Your <span className='text-primary'>Dream Job</span></h1>

                        <p className='my-4 text-lg'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='btn-primary'>Get Started</button>
                    </div>

                    <div>
                        <img src={personImg} alt="Person image" />
                    </div>

                </div>
            </div>
            <JobCategory></JobCategory>
          

        </div>

    );
};

export default Home;