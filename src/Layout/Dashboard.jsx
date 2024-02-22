import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarDay, FaShoppingBag, FaUtensils, FaUsers } from "react-icons/fa"
import { AiTwotoneHome, AiOutlineMenu } from "react-icons/ai"
import { TfiMenuAlt } from "react-icons/tfi"
import { BsCalendar3 } from "react-icons/bs"
import { BiSolidMessageAltDetail, BiSolidBookAlt } from "react-icons/bi"
import useCart from '../hooks/useCart';
import { Helmet } from 'react-helmet-async';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();
    // const isAdmin = true
    const [isAdmin] = useAdmin()
    return (
        <div className="drawer lg:drawer-open">
            <Helmet>
                <title>Bistro Boss | dashboard</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center bg-base-200">
                {/* Page content here */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="lg:space-y-2 menu p-4 w-80 h-full bg-[#D1A054] text-base-content uppercase font-semibold">
                    {/*----Logo Field----*/}
                    <Link to='/' className='ml-4 mb-12'>
                        <h2 className="text-2xl font-bold uppercase font-serif font-bold tracking-[.10em]">Bistro Boss</h2>
                        <p className="uppercase font-serif tracking-[.85em]">Rasturant</p>
                    </Link>
                    {/*---------- Sidebar content here -----------*/}
                    {
                        isAdmin ? <>
                            <li ><NavLink to="/dashboard/admin-home"><AiTwotoneHome className='text-2xl' /> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/ad-item"><FaUtensils className='text-2xl' /> Ad an Item</NavLink></li>
                            <li><NavLink to="/dashboard/manage-item"><TfiMenuAlt className='text-xl' />Manage Item</NavLink></li>
                            <li><NavLink to="/dashboard/manage-bookings"><BiSolidBookAlt className='text-xl' /> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/all-users"><FaUsers className='text-2xl' />All Users</NavLink></li>
                        </> : <>
                            <li ><NavLink to="/dashboard/home"><AiTwotoneHome className='text-2xl' /> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservation"><FaCalendarDay className='text-2xl' /> Reservation</NavLink></li>
                            <li><NavLink to="/dashboard/payment"><FaWallet className='text-xl' /> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/my-cart"><FaShoppingCart className='text-2xl' /> My Cart <sub className="p-3 border bg-red-500 rounded-xl">+{cart?.length || 0}</sub></NavLink>
                            </li>
                            <li><NavLink to="/dashboard/review"><FaWallet className='text-xl' /> Add Review</NavLink></li>
                            <li><NavLink to="/dashboard/bookings"><BsCalendar3 className='text-2xl' /> My Bookings</NavLink></li>
                        </>
                    }


                    <br />
                    <hr />
                    <br />

                    <li><NavLink to="/"><AiTwotoneHome className='text-xl' /> Home</NavLink></li>
                    <li><NavLink to="/menu"><AiOutlineMenu className='text-xl' />Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaShoppingBag className='text-xl' /> Shop</NavLink></li>
                    <li><NavLink to="/contacts"><BiSolidMessageAltDetail className='text-2xl' />Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;