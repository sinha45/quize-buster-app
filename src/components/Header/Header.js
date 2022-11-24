import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-blue-400 flex h-14 shadow-xl'>
            <div className='ml-72 m-auto'>
                <h1 className='font-bold text-3xl text-white'>Quiz-<span className='text-violet-600'>Busters</span></h1>
            </div>
            <div className='flex-auto m-auto text-white font-semibold space-x-14'>
                <Link to='/'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>

            </div>
        </div>
    );
};

export default Header;