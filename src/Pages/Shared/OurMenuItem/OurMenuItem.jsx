import React, { useState } from 'react';
import MenuItem from '../HomeMenuItem/MenuItem';
import CustomButton from '../../../component/CustomButton/CustomButton';
import { AiOutlineArrowUp, AiOutlineArrowRight } from 'react-icons/ai'
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const OurMenuItem = ({ categoryName }) => {
    const [menu] = useMenu([])
    const allItem = menu.filter(item => item.category === `${categoryName}`)

    //Show All items
    const [showAllItems, setShowAllItems] = useState(false);
    const handleButtonClick = () => {
        setShowAllItems(!showAllItems);
    };

    //Daynamically show the button
    const showButton = allItem.length > 6;

    return (
        <section>
            <div className="grid lg:grid-cols-2 gap-10 w-10/12 mx-auto mb-10">
                {
                    showAllItems
                        ? allItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        : allItem.slice(0, 6).map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            {showButton && <button onClick={handleButtonClick} className='btn-link no-underline text-black uppercase flex items-center gap-3 w-10/12 mx-auto mb-5'>
                {showAllItems ? 'Show Less Items' : 'Show All Items ...'}
                {showAllItems ? <AiOutlineArrowUp /> : <AiOutlineArrowRight />}
            </button>}
            <Link to={`/order/${categoryName}`}>
                <CustomButton>Order our favorite food</CustomButton>
            </Link>
        </section>
    );
};

export default OurMenuItem;