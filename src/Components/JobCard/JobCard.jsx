import React from 'react';

const JobCard = ({job}) => {
    const {img, category, jobs} = job;
    return (
        <div className='bg-slate-100 p-7 rounded-md'>
           <img src={img} alt="icon" />
           <h3 className='text-xl font-bold my-2'>{category}</h3>
           <p className='text-gray-500'>{jobs} jobs available</p>
        </div>
    );
};

export default JobCard;