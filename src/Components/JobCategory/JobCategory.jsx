import React from 'react';
import JobCard from '../JobCard/JobCard'

const JobCategory = () => {


  const jobCategories = [
    {
      id: 1,
      img: "chip-1.png",
      category: "Software Engineering",
      jobs: 200
    },
    {
      id: 2,
      img: "accounts-1.png",
      category: "Data Science",
      jobs: 300
    },
    {
      id: 3,
      img: "social-media-1.png",
      category: "Digital Marketing",
      jobs: 150
    },
    {
      id: 4,
      img: "business-1.png",
      category: "Graphic Design",
      jobs: 100
    }
  ];

  return (
    <div className='w-11/12 mx-auto lg:w-9/12'>
      <div className='text-center'>
        <h2 className='font-bold text-3xl my-2'>Job Category List</h2>
        <p className='mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>


      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3'>
        {
          jobCategories.map(job => <JobCard
          key={job.id}
          job={job}
          ></JobCard>)
        }

      </div>

    </div>
  );
};

export default JobCategory;