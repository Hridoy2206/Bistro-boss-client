import React from 'react';

const CustomButton = ({ children }) => {
    return (
        <div className='text-center mb-10 lg:mb-16'>
            <button className=' bg-white border-b-4 border-gray-800 hover:border-b-orange-400 rounded-lg px-6 py-2 hover:bg-black hover:text-white text-black active:scale-105 duration-300 uppercase'>{children}</button>
        </div>
    );
};

export default CustomButton;