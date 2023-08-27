import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const [, refetch] = useCart()
    const changeNameLength = name.length > 20 ? name.slice(0, 20) + '...' : name;
    const changeRecipeLength = recipe.length > 90 ? recipe.slice(0, 90) + '...' : recipe;
    const [showFull, setShowFull] = useState(false);

    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login then get Add to Cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className='relative flex flex-col hover:shadow-md'
            onMouseEnter={() => setShowFull(true)}
            onMouseLeave={() => setShowFull(false)}
        >
            <p className=" absolute top-3 right-4 bg-gray-900 text-gray-200 py-1 px-3 rounded-lg">$ {price}</p>
            <img src={image} className=' hover:rounded-lg transition-all h-[220px]' alt="" />
            <div className='bg-[#F3F3F3] text-center p-6 space-y-3'>
                <h2 className='text-xl font-semibold w-full'>{showFull ? name : changeNameLength}</h2>
                <p className='text-sm text-left'>{showFull ? recipe : changeRecipeLength}</p>
                <button onClick={() => handleAddToCart(item)} className='uppercase px-6 py-2 text-yellow-500 border-b-4 border-yellow-500 bg-[#E8E8E8] hover:bg-black transition-all duration-300 rounded-md active:scale-110'>Add To Cart</button>
            </div>
        </div>
    );
};

export default FoodCard;



