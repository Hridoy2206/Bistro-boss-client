import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistoInfo from "../BistoInfo/BistoInfo";
import Call from "../Call/Call";
import Catagory from "../Catagory/Catagory";
import Featured from "../Featured/Featured";
import PopularItems from "../PopularItems/PopularItems";
import Recoments from "../Recoments/Recoments";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Catagory />
            <BistoInfo />
            <PopularItems />
            <Call />
            <Recoments />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;