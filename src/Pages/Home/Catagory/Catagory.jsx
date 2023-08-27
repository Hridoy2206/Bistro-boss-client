import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
//imgae import 
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionHeading from '../../../component/SectionHeading/SectionHeading';

const Catagory = () => {
    return (
        <div className='lg:w-10/12 px-4 mx-auto mb-16 '>
            <SectionHeading
                subheading={"-- From 11:00 am to 10:00 pm --"}
                heading={"ORDER ONLINE"}
            />
            <Swiper

                slidesPerView={3}
                spaceBetween={35}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide><img src={slide1} alt="" className='hover:scale-110 transition-all duration-300 ' /> <h2 className=' text-center text-xl lg:text-2xl -mt-16 text-white'>SALAD</h2></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" className='hover:scale-110 transition-all duration-300 ' /><h2 className=' text-center text-xl lg:text-2xl -mt-16 text-white'>SAUP</h2></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" className='hover:scale-110 transition-all duration-300 ' /><h2 className=' text-center text-xl lg:text-2xl -mt-16 text-white'>PIZZA</h2></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" className='hover:scale-110 transition-all duration-300 ' /><h2 className=' text-center text-xl lg:text-2xl -mt-16 text-white'>DESURTS</h2></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" className='hover:scale-110 transition-all duration-300 ' /><h2 className=' text-center text-xl lg:text-2xl -mt-16 text-white'>SALAD</h2></SwiperSlide>
                <SwiperSlide><img src={slide1} alt="" className='hover:scale-110 transition-all duration-300 ' /> <h2 className=' text-center text-xl lg:text-2xl -mt-16 text-white'>SALAD</h2></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" className='hover:scale-110 transition-all duration-300 ' /><h2 className=' text-center text-xl lg:text-2xl -mt-16 text-white'>PIZZA</h2></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" className='hover:scale-110 transition-all duration-300 ' /><h2 className=' text-center text-xl lg:text-2xl -mt-16 text-white'>SAUP</h2></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" className='hover:scale-110 transition-all duration-300 ' /><h2 className=' text-center text-xl lg:text-2xl -mt-16 text-white'>DESURTS</h2></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" className='hover:scale-110 transition-all duration-300 ' /><h2 className=' text-center text-xl lg:text-2xl -mt-16 text-white'>SALAD</h2></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Catagory;