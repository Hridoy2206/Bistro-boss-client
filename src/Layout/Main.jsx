import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation()
    const noFooterLogin = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            <Navbar />
            <Outlet />
            {noFooterLogin || <Footer />}
        </div>
    );
};

export default Main;