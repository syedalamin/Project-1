import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import SingleApplied from '../SingleApplied/SingleApplied';

const Applied = () => {
    const [details, setDetails] = useState([])
    const [filterOption, setFilterOption] = useState("");
    useEffect(() => {
        fetch('/featuredJobs.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    let data = [];
    const storedDetails = getShoppingCart();
    for (const id in storedDetails) {
        const saveDetails = details.find(detail => detail.id == id)
        if (saveDetails) {
            data.push(saveDetails)
        }
    }

    const filterdJobs = filterOption ? data.filter((job) => job.remote_or_onsite === filterOption): data;

    return (
        <div>
            <div className='items-center flex h-40 justify-center bg-[#b8c2ff3a] rounded-md'>
                <h2 className='text-3xl font-bold text-black'>Applied Details</h2>
            </div>
            <div className='mt-10 flex  flex-row-reverse '>
                <select className='select  text-white font-bold  bg-[#7E90FE]'
                    onClick={(e) => setFilterOption(e.target.value)}
                >
                    <option value="">Filter By</option>
                    <option value="Remote">Remote</option>
                    <option value="Onsite">Onsite</option>
                </select>
            </div>
            {
                filterdJobs.map(data => <SingleApplied data={data}
                    key={data.id}
                ></SingleApplied>)
            }
        </div>
    );
};

export default Applied;