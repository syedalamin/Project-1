import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCalendarDays, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import toast, { Toaster } from 'react-hot-toast';

const FeaturedDetails = () => {
    const jobsData = useLoaderData();
    const { jobsId } = useParams();


    const [jobsDetails, setJobs] = useState({});
    useEffect(() => {
        const jobs = jobsData?.find(data => data.id === parseInt(jobsId));
        setJobs(jobs);
    }, [])

    const { id, job_description, job_responsibility, educational_requirements, experiences, salary, job_title, phone, email, location } = jobsDetails;

    const handleAddDetails = (id) => {
         addToDb(id)
    }

    return (
        <div>
            <div className='items-center flex h-40 justify-center bg-[#b8c2ff3a] rounded-md'>
                <h2 className='text-3xl font-bold text-black'>Job Details</h2>
            </div>
            <div className='grid sm:grid-cols-6 py-20 gap-5'>
                <div className=' sm:col-span-4 p-5'>
                    <h4 className='text-[#757575] py-3'><span className='text-black font-bold'>Job Description: </span>{job_description}</h4>
                    <h4 className='text-[#757575] py-3'><span className='text-black font-bold'>Job Responsibility: </span>{job_responsibility}</h4>
                    <h4 className='text-[#757575] py-3'><span className='text-black font-bold'>Educational Requirements: <br /> </span> {educational_requirements}</h4>
                    <h4 className='text-[#757575] py-3'><span className='text-black font-bold'>Experiences: <br /> </span> {experiences}</h4>
                </div>
                <div className='  sm:col-span-2 '>
                    <div className='bg-[#b8c2ff3a] rounded-md p-5'>
                        <div>
                            <h2 className='text-black font-bold text-xl py-3 border-b-2 '>Job Details</h2>
                            <h3 className='text-[#757575] pt-3 py-1'><span className='text-black font-bold'><FontAwesomeIcon className='pe-2' icon={faDollarSign} />Salary:</span> {salary} (Per Month)</h3>
                            <h3 className='text-[#757575] py-1'><span className='text-black font-bold'><FontAwesomeIcon className='pe-2' icon={faCalendarDays} />Job Title:</span> {job_title}</h3>
                        </div>
                        <div>
                            <h2 className='text-black font-bold text-xl py-3 border-b-2 '>Contact Information</h2>
                            <hr />
                            <h3 className='text-[#757575] py-1 pt-3'><span className='text-black font-bold'><FontAwesomeIcon className='pe-2' icon={faPhone} />Phone:</span> {phone}</h3>
                            <h3 className='text-[#757575] py-1'><span className='text-black font-bold'><FontAwesomeIcon className='pe-2' icon={faEnvelope} />Email:</span> {email}</h3>
                            <h3 className='text-[#757575] py-1'><span className='text-black font-bold'><FontAwesomeIcon className='pe-2' icon={faLocationDot} />Address:</span> {location}</h3>
                        </div>
                    </div>
                    <div className=' mt-5 '>
                        <button onClick={() => handleAddDetails(id)} className='bg-[#7E90FE] px-3 py-2 font-bold text-white rounded-md w-full'>Apply Now</button>
                        <Toaster />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedDetails;