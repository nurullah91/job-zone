import React from 'react';
import { Link, useNavigate } from 'react-router-dom';





const Job = ({ job }) => {
    const { id, company_logo, job_title, company, job_type, duty_time, location, salary } = job;
    
    const navigate = useNavigate()

const handleViewDetails= (id) =>{
    navigate('/details',{state:{id:id}})

}

    return (
        <div className='border rounded-md p-7'>
            <img src={company_logo} alt="company logo" />
            <h3 className='text-2xl font-bold my-3'>{job_title}</h3>
            <p className='text-xl font-bold text-gray-500 mb-5'>{company}</p>
            <button className='btn-outline mr-4'>{job_type}</button>
            <button className='btn-outline'>{duty_time}</button>

            <div className="flex font-bold text-gray-500 tracking-wide my-5">
                <div className='flex  mr-8'>
                    <img src="Frame-4.png" alt="location-icon" />
                    <span>{location}</span>
                </div>
               
                    <h3 className='flex'><img src="Frame.png" alt="dollar-icon" /> Salary:  
                        <span>{salary}k</span></h3>

              
            </div>
            <button onClick={() =>handleViewDetails(id)} className='btn-primary'>View Details</button>




            {/* <Link to={`./job-details/${id}`} className='btn-primary'>View Details</Link> */}


        </div>
    );
};

export default Job;