import React, { useEffect, useState } from 'react';
import SingleFeatured from '../SingleFeatured/SingleFeatured';

const FeaturedJobs = () => {
    const [jobs, setJob] = useState([])
    useEffect(() => {
        fetch('/featuredJobs.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])

    const [showAll, setShowAll] = useState(false);



    return (

        <div className='my-20'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>Featured Jobs</h2>
                <p className='my-5 font-semibold  '>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid sm:grid-cols-2 pt-5 gap-5 '>
                {
                    jobs.slice(0, showAll ? 6 : 4).map(job => <SingleFeatured
                        key={job.id}
                        job={job}
                    ></SingleFeatured>)
                }
            </div>
            <div className='flex justify-center'>
                {
                    !showAll && (<button onClick={() => setShowAll(true)} className='my-10 bg-[#7E90FE] py-2 px-5 rounded-md text-lg text-white font-semibold'>See All</button>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;