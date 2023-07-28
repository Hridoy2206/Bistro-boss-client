import React from 'react';
import saladImg from "../../../assets/home/slide1.jpg"
const Recoments = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-5 w-10/12 mx-auto mb-16'>
            <div className='flex flex-col'>
                <img src={saladImg} className='h-[300px] w-[424px] hover:rounded-lg transition-all' alt="" />
                <div className='bg-[#F3F3F3] text-center p-6 space-y-3'>
                    <h2 className='text-xl font-semibold'>Caeser Salad</h2>
                    <p className='text-sm'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className='uppercase px-6 py-2 text-yellow-500 border-b-4 border-yellow-500 hover:border-none bg-[#E8E8E8] hover:bg-black transition-all duration-300 rounded-md active:scale-110'>Add To Cart</button>
                </div>
            </div>
            <div className='flex flex-col'>
                <img src={saladImg} className='h-[300px] w-[424px] hover:rounded-lg transition-all' alt="" />
                <div className='bg-[#F3F3F3] text-center p-6 space-y-3'>
                    <h2 className='text-xl font-semibold'>Caeser Salad</h2>
                    <p className='text-sm'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className='uppercase px-6 py-2 text-yellow-500 border-b-4 border-yellow-500 hover:border-none bg-[#E8E8E8] hover:bg-black transition-all duration-300 rounded-md active:scale-110'>Add To Cart</button>
                </div>
            </div>
            <div className='flex flex-col'>
                <img src={saladImg} className='h-[300px] w-[424px] hover:rounded-lg transition-all' alt="" />
                <div className='bg-[#F3F3F3] text-center p-6 space-y-3'>
                    <h2 className='text-xl font-semibold'>Caeser Salad</h2>
                    <p className='text-sm'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className='uppercase px-6 py-2 text-yellow-500 border-b-4 border-yellow-500 hover:border-none bg-[#E8E8E8] hover:bg-black transition-all duration-300 rounded-md active:scale-110'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Recoments;