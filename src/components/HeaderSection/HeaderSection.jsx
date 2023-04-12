import React from 'react';

const HeaderSection = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2'>
                <div className='flex items-center'>
                    <div>
                        <h2 className='text-6xl font-bold text-black'>One Step <br /> Closer To Your <br /> <span className='text-[#7E90FE]'>Dream Job</span></h2>
                        <p className='text-black font-semibold py-5'>Explore thousands of job opportunities with all the <br /> information you need.  Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                        <button className='bg-[#7E90FE] font-semibold px-4 py-3 text-white rounded-lg'>Get Started</button>
                    </div>
                </div>
                <div className=''>
                    <img className='w-8/12 mx-auto' src="https://www.dcgla.com/wp-content/uploads/2022/04/cloud-service-banner-img.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;