import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useState } from "react";

const Navbar = ({ categoryName, item }) => {
    const navList = <>
        <li><Link to="/">Home</Link></li>
        <li><Link>Contact</Link></li>
        <li><Link>Dashboard</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to={`/order/${categoryName}`}>Order</Link></li>
    </>
    const [open, setOpen] = useState(true)
    return (
        <div>
            <div className="flex justify-between lg:items-center px-4 lg:px-16 py-3 fixed z-10 bg-gray-900 bg-opacity-30 w-full text-white">
                <div>
                    <h2 className="text-2xl font-bold text-white uppercase font-serif">Bistro Boss</h2>
                    <p className="uppercase font-serif tracking-[.55em]">Rasturant</p>
                </div>
                <div className=" text-2xl lg:hidden absolute right-3 top-7 cursor-pointer" onClick={() => setOpen(!open)}>
                    {
                        !open ? <AiOutlineClose /> : <AiOutlineMenu />
                    }
                </div>
                <div>
                    <ul className={`lg:flex lg:items-center gap-4 lg:static absolute transition-all duration-500 lg:z-auto z-[-1] ${open ? "top-[-600px]" : "right-20"}`}>
                        {navList}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
