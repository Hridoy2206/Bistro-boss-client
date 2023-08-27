import React from 'react';
import SectionHeading from '../../../component/SectionHeading/SectionHeading';
import { FaUtensils } from "react-icons/fa"
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_token = import.meta.env.VITE_Image_Uploade_Token

const AdItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url
                    const { name, price, recipe, category } = data
                    const newItem = { name, price: parseFloat(price), recipe, category, image: imgURL }
                    console.log(newItem);

                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('after posting menu Item', data);
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added succesfully',
                                    showConfirmButton: false,
                                    timer: 1000
                                })
                                reset()
                            }
                        })

                    {/* if I want,use fetch to post item*/ }
                    // fetch('http://localhost:5000/menu', {
                    //     method: 'POST',
                    //     headers: {
                    //         'content-type': 'application/json'
                    //     },
                    //     body: JSON.stringify(newItem)
                    // })
                    //     .then(res => res.json())

                }
            })
    };

    return (
        <div className='w-full bg-white'>
            <SectionHeading subheading="whats new ?" heading="Ad an I item" />
            <form onSubmit={handleSubmit(onSubmit)} className='w-10/12 mx-auto bg-[#F3F3F3] rounded-md lg:p-20 p-4 py-8 mb-10'>

                <div>
                    <p>Recepe Name*</p>
                    <input type="text"  {...register("name", { required: true, maxLength: 120 })} placeholder='Recepe Name' className='py-3 mt-2 pl-2 w-full outline-none' />
                </div>

                <div className='lg:flex justify-between gap-5 my-3'>
                    <div className='w-full space-y-2'>
                        <p>Category*</p>
                        <select selected='Pick One'  {...register("category", { required: true })} className='py-3 mt-2 pl-2 w-full outline-none'>
                            <option disabled >Pick One</option>
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Dessart</option>
                            <option>Deshi Food</option>
                            <option>Drick</option>
                        </select>
                    </div>
                    <div className='w-full space-y-2'>
                        <p>Price*</p>
                        <input {...register("price", { required: true })} type="number" placeholder='Price' className='py-3 pl-2 w-full outline-none' />
                    </div>
                </div>
                <div className='space-y-2 mb-4'>
                    <p>Recipe Details*</p>
                    <textarea {...register("recipe", { required: true })} placeholder='Inter your message' rows={6} className='py-3 pl-2 w-full outline-none' ></textarea>
                </div>
                <input type="file" {...register("image", { required: true })} className='file:border-none file:bg-[#B58130] file:text-white file:p-2 file:mr-2 file:cursor-pointer file:rounded-md py-3 file:active:scale-95' />

                <div className='flex justify-center lg:mt-10 mt-6'>
                    <button type='submit' className='px-8 py-2 rounded-sm  text-white bg-gradient-to-tr from-[#B58130] to-[#8C6426] flex items-center gap-2 active:scale-105 duration-300 transition-all cursor-pointer'>Ad an Item <FaUtensils /></button>
                </div>
            </form>
        </div>
    );
};

export default AdItem;