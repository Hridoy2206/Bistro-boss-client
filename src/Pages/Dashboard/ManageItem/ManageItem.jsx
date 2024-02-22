import SectionHeading from "../../../component/SectionHeading/SectionHeading";
import useMenu from "../../../hooks/useMenu";
import { RiDeleteBin5Line } from "react-icons/ri"
import { MdSystemUpdateAlt } from "react-icons/md"
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItem = () => {
    const [menu, , refetch] = useMenu()
    const [axiosSecure] = useAxiosSecure()
    console.log(menu);
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/menu/${item._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                `${menu.name} has been deleted`,
                                'success'
                            )
                            console.log(data);
                            refetch()
                        }
                    })
            }
        })
    }
    return (
        <div className="w-10/12 mx-auto">
            <SectionHeading subheading={'harry up'} heading={'Manage item'} />

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#D1A054] lg:text-xl text-gray-200'>
                        <tr className=''>
                            <th>

                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map((item, index) => <tr
                                key={item._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask rounded-lg  w-16 h-14">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    <button className="px-4 py-2 text-white text-xl rounded-md bg-[#D1A054] active:scale-95 duration-300"> <MdSystemUpdateAlt className="text-2xl" /></button>
                                </td>

                                <th>
                                    <button onClick={() => handleDelete(item)} className=" text-2xl text-white rounded-md bg-red-500 active:scale-95 duration-300 px-4 py-2"><RiDeleteBin5Line /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;