import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { app } from "../../../firebase/firebase.config";
import { getAuth, signOut } from "firebase/auth";
import CustomLoading from "../CustomLoading/CustomLoading";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { user, loading, setLoading } = useContext(AuthContext);
    console.log(user);
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
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to={`/order/salad`}>Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li>

        {
            user ? <>
                <li className="text-[#36d7b7] underline font-bold">{user.displayName}</li>
                <li><Link onClick={handleLogOut}>LogOut</Link></li>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
        <div>
            <div className="flex justify-between lg:items-center px-4 lg:px-16 py-3 fixed z-10 bg-gray-900 bg-opacity-30 w-full text-white">
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
                <div>
                    <ul className={`absolute bg-white text-black p-4 pr-12 rounded-lg ${open ? "right-0 top-16" : "right-[-550px] top-16 "} lg:hidden block duration-500`}>
                        {navList}
                    </ul>
                </div>
                {/*----------Items List--------*/}
                <div>
                    <ul className={`lg:block hidden lg:flex lg:items-center gap-4`}>
                        {navList}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar
