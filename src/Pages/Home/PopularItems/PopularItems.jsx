import { useEffect, useState } from "react";
import SectionHeading from "../../../component/SectionHeading/SectionHeading";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularItems = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const populraItems = data.filter(item => item.category === "popular")
                setMenu(populraItems)
                console.log(populraItems);
            })
    }, [])
    return (
        <section>
            <SectionHeading
                subheading="-- From Our Menu--"
                heading="Popular Items"
            />
            <div className="grid lg:grid-cols-2 gap-6 w-10/12 mx-auto mb-16 ">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularItems;