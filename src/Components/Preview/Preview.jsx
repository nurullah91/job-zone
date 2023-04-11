import React from 'react';
import { useNavigate } from 'react-router-dom';

const Preview = ({ job }) => {
    const { company_logo,id, job_title, company, location, salary, job_type, duty_time } = job;

    const navigate = useNavigate()

    const handleViewDetails= (id) =>{
        navigate('/details',{state:{id:id}})
    
    }


    return (
       <div>

         <div className='border m-5 md:flex justify-between items-center rounded-lg p-8'>
            <div className='flex items-center '>
                <div className='bg-gray-100 p-5 mr-5 rounded'>
                <img src={company_logo} alt="" />
                </div>
                <div>
                    <h3 className='text-2xl font-bold my-3'>{job_title}</h3>
                    <h4 className='text-xl font-bold text-gray-500 my-5'>{company}</h4>
                    <div className="flex">
                        <button className='btn-outline mr-5'>{job_type}</button>
                        <button className='btn-outline'>{duty_time}</button>
                    </div>

                    <div className='flex py-3'>
                        <img src="Frame-4.png" alt="icon" />
                        <p ><strong>Location: </strong><span>{location} </span></p>
                    </div>



                    <div className='flex py-3'>
                        <img src="Frame.png" alt="icon" />
                        <p ><strong>Salary: </strong><span>{job.salary} (Per Month)</span></p>
                    </div>
                </div>
            </div>
                <button onClick={() =>handleViewDetails(id)} className='btn-primary'>View Details </button>
        </div>
       </div>
    );
};

export default Preview;