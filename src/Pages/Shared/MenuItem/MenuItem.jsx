import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item
    return (
        <div className='flex space-x-3'>
            <img src={image} style={{ borderRadius: "0 200px 200px 200px" }} className='w-[100px] h-[70px] my-auto' alt="" />
            <div className=' text-gray-500'>
                <div className='flex gap-2 justify-between'>
                    <p className='uppercase font-serif'>{name} ---------</p>
                    <p className='text-yellow-500 '>${price}</p>
                </div>
                <div><p className='text-sm'>{recipe}</p></div>
            </div>
        </div>
    );
};

export default MenuItem;