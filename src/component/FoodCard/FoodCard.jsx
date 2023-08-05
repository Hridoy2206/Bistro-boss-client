import { useState } from "react";

const FoodCard = ({ item }) => {
    const { name, image, recipe, price } = item;
    const changeNameLength = name.length > 20 ? name.slice(0, 20) + '...' : name;
    const changeRecipeLength = recipe.length > 90 ? recipe.slice(0, 90) + '...' : recipe;
    const [showFull, setShowFull] = useState(false);

    return (
        <div className='relative flex flex-col'
            onMouseEnter={() => setShowFull(true)}
            onMouseLeave={() => setShowFull(false)}
        >
            <p className=" absolute top-3 right-4 bg-gray-900 text-gray-200 py-1 px-3 rounded-lg">$ {price}</p>
            <img src={image} className=' hover:rounded-lg transition-all' alt="" />
            <div className='bg-[#F3F3F3] text-center p-6 space-y-3'>
                <h2 className='text-xl font-semibold w-full'>{showFull ? name : changeNameLength}</h2>
                <p className='text-sm text-left'>{showFull ? recipe : changeRecipeLength}</p>
                <button className='uppercase px-6 py-2 text-yellow-500 border-b-4 border-yellow-500 bg-[#E8E8E8] hover:bg-black transition-all duration-300 rounded-md active:scale-110'>Add To Cart</button>
            </div>
        </div>
    );
};

export default FoodCard;



