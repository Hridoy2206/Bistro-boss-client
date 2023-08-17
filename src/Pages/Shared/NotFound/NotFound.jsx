import { Link } from "react-router-dom";
import notFoundImg from "../../../assets/icon/404.gif"
import { AiTwotoneHome } from "react-icons/ai"

const NotFound = () => {
    return (
        <div className="w-full mx-auto">
            <img src={notFoundImg} className="mx-auto" alt="" />
            <div className="w-full mb-44">
                <Link className="lg:w-2/12 w-6/12 mx-auto px-8 py-2 text-center rounded-sm  text-white bg-gradient-to-tr from-[#B58130] to-[#8C6426] flex active:scale-95 duration-300 transition-all" to="/"> Back to Home <AiTwotoneHome className="text-2xl ml-2" /></Link>
            </div>
        </div>
    );
};

export default NotFound;