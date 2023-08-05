import React from 'react';

const Cover = ({ coverImg, title }) => {
    return (
        <div className='w-10/12 mx-auto mb-16'>
            <div
                className="w-full bg-cover lg:p-20 p-8 "
                style={{ backgroundImage: `url(${coverImg})` }} >
                <div className=" text-gray-200 bg-gray-950 bg-opacity-60 lg:p-20 p-4 mx-auto text-center lg:space-y-3 space-y-1 hover:scale-105 transition-all duration-300">
                    <h2 className="lg:text-3xl text-2xl uppercase font-serif">{title}</h2>
                    <p>
                        Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Cover;