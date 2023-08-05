// import React from 'react';
// import FoodCard from '../../../component/FoodCard/FoodCard';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// const OrderTab = ({ item }) => {
//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + '</span>';
//         },
//     };
//     return (
//         <div >
//             <Swiper
//                 pagination={pagination}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <div className='grid lg:grid-cols-3 gap-5 w-10/12 mx-auto mb-16 mt-10'>
//                         {
//                             item.map(item => <FoodCard
//                                 key={item._id}
//                                 item={item}
//                             ></FoodCard>)
//                         }
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// };

// export default OrderTab;

import React, { useState, useEffect } from 'react';
import FoodCard from '../../../component/FoodCard/FoodCard';

const OrderTab = ({ item }) => {
    const itemsPerPage = 6;
    const totalPages = Math.ceil(item.length / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(1);
    const [showPagination, setShowPagination] = useState(false);

    useEffect(() => {
        setShowPagination(totalPages > 1);
    }, [totalPages]);

    const handlePaginationClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate the start and end index of the items to display on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, item.length);

    return (
        <div>
            <div className="grid lg:grid-cols-3 gap-5 w-10/12 mx-auto mb-16 mt-10">
                {item.slice(startIndex, endIndex).map((item) => (
                    <FoodCard key={item._id} item={item} />
                ))}
            </div>

            {showPagination && (
                <div className="flex justify-center mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePaginationClick(index + 1)}
                            className={`mx-2 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderTab;

