import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



const SingleFeatured = ({ job }) => {
    const { id, company_logo, job_title, company_name, location, salary, fulltime_or_parttime, remote_or_onsite } = job;
    const navigate = useNavigate();
    return (
        <div className='p-5 rounded-md border-2  '>
            <img className='w-4/12' src={company_logo} alt="" />
            <div className=''>
                <h4 className='text-xl pt-4 text-black font-bold'>{job_title}</h4>
                <p className='text-sm font-semibold'>{company_name}</p>
                <div className='flex gap-3 py-4'>
                    <p className='text-[#7E90FE] border border-1 border-[#7E90FE] px-3 py-1'>{fulltime_or_parttime}</p>
                    <p className='text-[#7E90FE] border border-1 border-[#7E90FE] px-3 py-1'>{remote_or_onsite}</p>
                </div>
                <div className='flex gap-4 pb-4'>
                    <p><FontAwesomeIcon className='pe-2' icon={faLocationDot} />{location}</p>
                    <p><FontAwesomeIcon className='pe-2' icon={faDollarSign} />{salary}</p>
                </div>
                <button onClick={() => navigate(`/featuredDetails/${id}`)} className='bg-[#7E90FE] px-3 py-2 font-bold text-white rounded-md '>View Details</button>
            </div>
        </div>
    );
};

export default SingleFeatured;