import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useState } from "react";

const Navbar = () => {
    const navList = <>
        <li><Link>Home</Link></li>
        <li><Link>Contact</Link></li>
        <li><Link>Dashboard</Link></li>
        <li><Link>Our Menu</Link></li>
        <li><Link>Our Shop</Link></li>
        <li><Link>Home</Link></li>
    </>
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className="flex justify-between lg:items-center  px-4 lg:px-16 py-4 fixed z-10 bg-gray-900 bg-opacity-30 w-full text-white">
                <div>
                    <h2 className="text-2xl font-bold text-white">Bistro Boss</h2>
                </div>
                <div className=" text-2xl lg:hidden absolute right-3 top-5 cursor-pointer" onClick={() => setOpen(!open)}>
                    {
                        open ? <AiOutlineMenu /> : <AiOutlineClose />
                    }
                </div>
                <div>
                    <ul className={`lg:flex lg:items-center gap-4 lg:static absolute transition-all duration-500 lg:z-auto z-[-1] ${!open ? "right-20" : "top-[-600px]"}`}>
                        {navList}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;