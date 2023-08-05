import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../component/FoodCard/FoodCard';
const Recoments = () => {
    const [menu] = useMenu([]);
    const Salad = menu.filter(item => item.category === "salad");
    return (
        <div className='grid lg:grid-cols-3 gap-5 w-10/12 mx-auto mb-16 mt-10'>
            {
                Salad.slice(0, 3).map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default Recoments;