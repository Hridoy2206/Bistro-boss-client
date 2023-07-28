import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item
    return (
        <div className='flex space-x-3'>
            <img src={image} style={{ borderRadius: "0 200px 200px 200px" }} className='w-[100px]' alt="" />
            <div className=' text-gray-500'>
                <p className='uppercase font-serif'>{name} ---------</p>
                <p className='text-sm'>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;