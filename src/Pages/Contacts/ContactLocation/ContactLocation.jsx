import React from 'react';
import SectionHeading from '../../../component/SectionHeading/SectionHeading';
import { CgPhone } from 'react-icons/cg';
import { HiLocationMarker } from 'react-icons/hi';
import { AiFillClockCircle } from 'react-icons/ai';

const ContactLocation = () => (
    <div className=' mb-16'>
        <SectionHeading subheading="---Send Us a Message---" heading="our Location"></SectionHeading>
        {/*Contact Location*/}
        <div className='grid lg:grid-cols-3 gap-8 lg:gap-4 w-10/12 mx-auto text-center'>
            <div className='border border-[#F3F3F3] '>
                <div className='bg-[#D1A054] py-4'>
                    <CgPhone className='w-full text-center text-2xl text-white' />
                </div>
                <div className='m-4 mt-0 bg-[#F3F3F3] pt-10 pb-16'>
                    <h4 className='uppercase text-xl font-semibold'>Phone</h4>
                    <p className='text-gray-600 text-sm'>+38 (012) 34 56 789</p>
                </div>
            </div>
            <div className='border border-[#F3F3F3] '>
                <div className='bg-[#D1A054] py-4'>
                    <HiLocationMarker className='w-full text-center text-2xl text-white' />
                </div>
                <div className='m-4 mt-0 bg-[#F3F3F3] pt-10 pb-16'>
                    <h4 className='uppercase text-xl font-semibold'>Address</h4>
                    <p className='text-gray-600 text-sm'>+38 (012) 34 56 789</p>
                </div>
            </div>
            <div className='border border-[#F3F3F3] '>
                <div className='bg-[#D1A054] py-4'>
                    <AiFillClockCircle className='w-full text-center text-2xl text-white' />
                </div>
                <div className='m-4 mt-0 bg-[#F3F3F3] pt-10 pb-11'>
                    <h4 className='uppercase text-xl font-semibold'>Working Hours</h4>
                    <p className='text-gray-600 text-sm'>Mon - Fri: 08:00 - 22:00</p>
                    <p className='text-gray-600 text-sm'>Sat - Sun: 10:00 - 23:00</p>
                </div>
            </div>
        </div>
    </div>
);

export default ContactLocation;