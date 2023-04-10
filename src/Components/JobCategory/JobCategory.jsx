import React from 'react';

const JobCategory = () => {
    const jobCategories = [
        {
          id: 1,
          image: "https://example.com/image1.jpg",
          category: "Software Engineering",
          availableJobs: 200
        },
        {
          id: 2,
          image: "https://example.com/image2.jpg",
          category: "Data Science",
          availableJobs: 300
        },
        {
          id: 3,
          image: "https://example.com/image3.jpg",
          category: "Digital Marketing",
          availableJobs: 150
        },
        {
          id: 4,
          image: "https://example.com/image4.jpg",
          category: "Graphic Design",
          availableJobs: 100
        }
      ];
      
    return (
        <div>
            job JobCategory
        </div>
    );
};

export default JobCategory;