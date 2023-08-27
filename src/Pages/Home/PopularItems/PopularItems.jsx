import SectionHeading from "../../../component/SectionHeading/SectionHeading";
import MenuItem from "../../Shared/HomeMenuItem/MenuItem";
import CustomButton from "../../../component/CustomButton/CustomButton";
import useMenu from "../../../hooks/useMenu";
import { useState } from "react";

const PopularItems = () => {
    const [menu] = useMenu([])
    const [showfullMenu, setShowfullMenu] = useState(false)
    const popular = menu.filter(item => item.category === "popular");

    const handleShowfull = () => {
        setShowfullMenu(prevState => !prevState);
    }
    return (
        <section>
            <SectionHeading
                subheading="-- From Our Menu--"
                heading="Popular Items"
            />
            <div className="grid lg:grid-cols-2 gap-10 w-10/12 mx-auto mb-10">
                {showfullMenu ?
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                    :
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            {!showfullMenu ?
                <CustomButton><button onClick={handleShowfull}>View Full Menu</button></CustomButton> :
                <CustomButton><button onClick={handleShowfull}>{showfullMenu ? "View Less Menu" : "View Full Menu"}</button></CustomButton>
            }
        </section>
    );
};

export default PopularItems;