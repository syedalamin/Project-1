import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='md:flex items-center justify-between text-center bg-sky-100 my-4 p-3 rounded-lg '>
            <div className=''>
                <h2 className='text-2xl text-black font-bold'>Syed Alamin</h2>
            </div>
            <div className='font-medium py-5 sm:py-0 text-black'>
                <Link to='/'>Home</Link>
                <Link to='assignment'>Statistics</Link>
                <Link to='applied'>Applied</Link>
                <Link to='blog'>Blog Page</Link>
            </div>
            <div className=''>
                <button className='bg-[#7E90FE] py-2 px-3 text-white font-bold rounded-lg'>Applying</button>
            </div>
        </nav>
    );
};

export default Header;