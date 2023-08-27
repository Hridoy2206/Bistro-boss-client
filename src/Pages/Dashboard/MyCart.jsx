import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../hooks/useCart';
import { RiDeleteBin5Line } from "react-icons/ri"
import Swal from 'sweetalert2';
import SectionHeading from '../../component/SectionHeading/SectionHeading';

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0);


    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-11/12 overflow-hidden'>
            <SectionHeading subheading="My cart" heading="Wann ad more?" />
            <div className='bg-white lg:p-8 mt-16 rounded-md '>
                <Helmet>
                    <title>Bistro Boss | My-Cart</title>
                </Helmet>
                <div className="lg:text-3xl text-xl flex  mb-8 w-full ">
                    <h2 className='grow'>Total Orders: {cart.length}</h2>
                    <h2 className='grow'>Total Price: ${total}</h2>
                    <button className='lg:px-6 px-2 py-1 rounded-lg bg-[#D1A054] text-white'>Pay</button>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] lg:text-xl text-gray-200'>
                            <tr className=''>
                                <th>

                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask rounded-lg  w-16 h-14">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>

                                    <th>
                                        <button onClick={() => handleDelete(item)} className=" text-2xl text-white rounded-md bg-red-500 active:scale-95 duration-300 px-4 py-2"><RiDeleteBin5Line /></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;