import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const SingleApplied = ({ data }) => {
    const { id, company_logo, job_title, company_name, location, salary, fulltime_or_parttime, remote_or_onsite } = data;
    const navigate = useNavigate();
    return (
        <div>
            
            <div className='flex  items-center my-10 gap-4 border-2 p-5 rounded-md'>
                <div className='flex items-center gap-4 '>
                    <img className='w-3/12 p-14 rounded-md  bg-[#F4F4F4]' src={company_logo} alt="" />
                    <div>
                        <h4 className='text-xl  text-black font-bold'>{job_title}</h4>
                        <p className='text-sm font-semibold'>{company_name}</p>
                        <div className='flex gap-3 py-4'>
                            <p className='text-[#7E90FE] border border-1 border-[#7E90FE] px-3 py-1'>{fulltime_or_parttime}</p>
                            <p className='text-[#7E90FE] border border-1 border-[#7E90FE] px-3 py-1'>{remote_or_onsite}</p>
                        </div>
                        <div className='flex gap-4 pb-4'>
                            <p><FontAwesomeIcon className='pe-2' icon={faLocationDot} />{location}</p>
                            <p><FontAwesomeIcon className='pe-2' icon={faDollarSign} />{salary}</p>
                        </div>
                    </div>
                </div>
                <div className='mx-10'>
                    <button onClick={() => navigate(`/featuredDetails/${id}`)} className='bg-[#7E90FE] px-5 py-2 font-bold text-white rounded-md'>View_Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleApplied;