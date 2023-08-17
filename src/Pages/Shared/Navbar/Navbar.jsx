import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineLogout } from "react-icons/ai"
import { FaUserCircle } from "react-icons/fa"
import { BsCart4 } from "react-icons/bs"
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { app } from "../../../firebase/firebase.config";
import { getAuth, signOut } from "firebase/auth";
import CustomLoading from "../CustomLoading/CustomLoading";
import useCart from "../../../hooks/useCart";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, loading, setLoading } = useContext(AuthContext);
    const [cart] = useCart()
    const auth = getAuth(app);

    if (loading) {
        return <CustomLoading />
    }

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Logout successful");
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            });

    }



    const navList = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacts">Contact</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        <li><Link to="/featured">Featured</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li> <Link to={`/order/salad`}>Order Food</Link></li>
        <li className="rounded-full lg:p-2 px-2 py-2 bg-green-700 border text-white">
            <Link to='/dashboard/my-cart' className="flex" >
                <BsCart4 className="text-2xl " />
                <sub className="p-2 border bg-red-500 rounded-full mt-1">+{cart?.length || 0}</sub>
            </Link>
        </li>

        {
            user ? <>
                <li >
                    <Link onClick={handleLogOut} className="flex items-center gap-2">LogOut <FaUserCircle className="text-3xl" /></Link>
                </li>
            </> : <>
                <li><Link to="/login" className="flex items-center">Login<AiOutlineLogout className="text-3xl ml-1" /></Link></li>
            </>
        }
    </>

    return (
        <div>
            <div className="flex justify-between lg:items-center px-4 lg:px-16 py-3 fixed z-10 bg-gray-900 bg-opacity-30 w-full text-white" >
                {/*----Logo field-------*/}
                <div>
                    <h2 className="text-2xl font-bold text-white uppercase font-serif">Bistro Boss</h2>
                    <p className="uppercase font-serif tracking-[.55em]">Rasturant</p>
                </div>
                {/*------Responsive Hemburger menu---------*/}
                <div className=" text-2xl lg:hidden absolute right-3 top-7 cursor-pointer" onClick={() => setOpen(!open)}>
                    {
                        open ? <AiOutlineClose /> : <AiOutlineMenu />
                    }
                </div>
                {/*----------Mobile Virsion Items List--------*/}
                <div >
                    <ul className={`absolute bg-white text-black p-4 pr-12 rounded-lg ${open ? "right-0 top-16" : "right-[-550px] top-16 "} lg:hidden block duration-500 ease-in-out uppercase font-sans font-semibold flex flex-col gap-2 w-2/3`} >
                        {navList}
                    </ul>
                </div>
                {/*----------Desktop virsion Item List--------*/}
                <div>
                    <ul className={`lg:block hidden lg:flex lg:items-center gap-5 uppercase font-sans font-semibold tracking-[.05em]`}>
                        {navList}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar
