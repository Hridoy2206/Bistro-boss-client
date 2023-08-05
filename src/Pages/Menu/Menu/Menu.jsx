import { Helmet } from 'react-helmet-async';
import CoverBanner from '../../Shared/CoverBanner/CoverBanner';
import bgImage from "../../../assets/menu/banner3.jpg"
import OurMenuItem from '../../Shared/OurMenuItem/OurMenuItem';
import DessertImg from "../../../assets/menu/dessert-bg.jpeg"
import PizzaImg from "../../../assets/menu/pizza-bg.jpg"
import SaladImg from "../../../assets/menu/salad-bg.jpg"
import SoupImg from "../../../assets/menu/soup-bg.jpg"
import Cover from '../../Shared/Cover/Cover';
import SectionHeading from '../../../component/SectionHeading/SectionHeading';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <CoverBanner bgImage={bgImage} title="our menu"></CoverBanner>
            {/*Offered*/}
            <SectionHeading subheading="-- Don't Miss --" heading="Today's Offer" />
            <OurMenuItem categoryName="offered" />

            {/*Dessert*/}
            <Cover coverImg={DessertImg} title="Dessert" />
            <OurMenuItem categoryName="dessert" />

            {/*Pizza*/}
            <Cover coverImg={PizzaImg} title="Pizza" />
            <OurMenuItem categoryName="pizza" />

            {/*Salad*/}
            <Cover coverImg={SaladImg} title="Salad" />
            <OurMenuItem categoryName="salad" />

            {/*Soup*/}
            <Cover coverImg={SoupImg} title="Soup" />
            <OurMenuItem categoryName="soup" />
        </div>
    );
};

export default Menu;