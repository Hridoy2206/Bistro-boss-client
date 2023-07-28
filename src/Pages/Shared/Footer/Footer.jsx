import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';
const Footer = () => {
    return (
        <div className=''>
            <div className=' flex lg:flex-row flex-col lg:justify-evenly text-white '>
                <div className=' bg-[#1F2937] lg:w-1/2 p-6 text-center'>
                    <h2 className='text-3xl font-semibold mb-3'>Contact Us</h2>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className='bg-[#111827] lg:w-1/2 p-6 text-center space-y-3'>
                    <h2 className='text-3xl font-semibold'>Follow US</h2>
                    <p>Join us on social media</p>
                    <div className='flex justify-center gap-6 text-xl'>
                        <button><FaFacebookF /></button>
                        <button><BsInstagram /></button>
                        <button><GrTwitter /></button>
                    </div>
                </div>
            </div>
            <p className='text-center bg-[#151515] text-gray-200 p-2'>Copyright © CulinaryCloud. All rights reserved.</p>
        </div>
    );
};

export default Footer;