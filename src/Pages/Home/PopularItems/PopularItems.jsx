import { useEffect } from "react";
import SectionHeading from "../../../component/SectionHeading/SectionHeading";
import MenuItem from "../../Shared/HomeMenuItem/MenuItem";
import CustomButton from "../../../component/CustomButton/CustomButton";
import useMenu from "../../../hooks/useMenu";

const PopularItems = () => {
    const [menu] = useMenu([])
    const popular = menu.filter(item => item.category === "popular");
    return (
        <section>
            <SectionHeading
                subheading="-- From Our Menu--"
                heading="Popular Items"
            />
            <div className="grid lg:grid-cols-2 gap-10 w-10/12 mx-auto mb-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <CustomButton>View Full Menu</CustomButton>
        </section>
    );
};

export default PopularItems;