import React from 'react';
import SectionHeading from '../../../component/SectionHeading/SectionHeading';
import { IoIosSend } from "react-icons/io"
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
const ContactForm = () => {
    const [varified, setVarified] = useState(false);
    function onChange(value) {
        console.log("Captcha value:", value);
        setVarified(true)
    }

    return (
        <div>
            <SectionHeading subheading="Send us a message" heading="Contact form" />
            {/*Send message*/}
            <form className='w-10/12 mx-auto bg-[#F3F3F3] lg:p-20 p-4 py-8 mb-10'>
                <div className='lg:flex justify-between gap-5'>
                    <div className='w-full space-y-2'>
                        <p>Name</p>
                        <input type="text" placeholder='Inter your name' className='py-3 pl-2 w-full outline-none' />
                    </div>
                    <div className='w-full space-y-2'>
                        <p>Email</p>
                        <input type="email" placeholder='Inter your mail' className='py-3 pl-2 w-full outline-none' />
                    </div>
                </div>
                <div className='space-y-2 mb-4'>
                    <p>Phone</p>
                    <input type="number" placeholder='Inter your phone' className='py-3 pl-2 w-full outline-none' />
                    <p>Message</p>
                    <textarea placeholder='Inter your message' rows={6} className='py-3 pl-2 w-full outline-none' ></textarea>
                </div>
                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                />
                <div className='flex justify-center lg:mt-10 mt-6'>
                    <button className='px-8 py-2 rounded-sm  text-white bg-gradient-to-tr from-[#B58130] to-[#8C6426] flex items-center gap-2 active:scale-105 duration-300 transition-all' disabled={!varified}>Send Message <IoIosSend className='text-xl' /></button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;