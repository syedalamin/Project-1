import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJobCategory from '../SingleJobCategory/SingleJobCategory';

const JobCategory = () => {
    const jobs = useLoaderData();
    return (
        <div>
            <div className='my-20'>
                <div className='text-center'>
                    <h2 className='text-4xl font-bold'>Job Category List</h2>
                    <p className='my-5 font-semibold'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4   pt-5'>
                    {
                        jobs.map(job => <SingleJobCategory
                            key={job.id}
                            job={job}
                        ></SingleJobCategory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default JobCategory;