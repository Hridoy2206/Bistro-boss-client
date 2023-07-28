import React from 'react';
import SectionHeading from '../../../component/SectionHeading/SectionHeading';
import featured from "../../../assets/home/featured.jpg"
const Featured = () => {
    return (
        <section style={{ backgroundImage: `url(${featured})` }} className='bg-cover bg-fixed text-white '>
            <div className='bg-gray-800 bg-opacity-60 pb-24 pt-1'>
                <SectionHeading
                    subheading="-- Check it Out --"
                    heading="From Our Menu"
                />
                <div className='flex lg:flex-row-reverse flex-col justify-center items-center gap-10 lg:px-44 px-4'>
                    <div className='space-y-1 text-white'>
                        <p className='font-semibold'>March 20, 2023</p>
                        <h4 className='text-2xl font-bold uppercase'>Where Can I get Some</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci voluptatem sit eveniet dolor architecto quisquam recusandae perspiciatis neque quae nisi,</p>
                        <button className='uppercase px-6 py-2 text-white border-b-4 border-white hover:border-none  hover:bg-black transition-all duration-300 rounded-md active:scale-110'>Read more</button>
                    </div>
                    <img src={featured} className='lg:w-[400px] lg:h-[250px]' alt="" />
                </div>
            </div>
        </section>
    );
};

export default Featured;