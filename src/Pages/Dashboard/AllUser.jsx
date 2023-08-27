import { useQuery } from "@tanstack/react-query";
import { RiDeleteBin5Line } from "react-icons/ri"
import { FaUserShield } from "react-icons/fa"
import { GrUserAdmin } from "react-icons/gr"
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionHeading from "../../component/SectionHeading/SectionHeading";

const AllUser = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data
    })

    { /----Make as Admin-------/ }
    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }

    { /----User Deleted-------/ }
    const handleUserDelete = user => {
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
                fetch(`http://localhost:5000/users/${user}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.displayName);
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                `${data?.displayName} user has been deleted`,
                                'success'
                            )
                        }
                    })
            }
        })


    }

    return (
        <>
            <SectionHeading subheading="How many?" heading={'Manage All users'} />
            <div className="bg-white p-8 w-11/12 rou">
                <h2 className="text-3xl font-semibold font-mono uppercase mb-4">Total Users:{users.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] lg:text-xl text-gray-200">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Roll</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'admin' ?
                                        <button className="px-4 py-2 text-white text-xl rounded-md bg-green-600 active:scale-95 duration-300"> <GrUserAdmin className="text-2xl" /></button> :
                                        <button onClick={() => handleMakeAdmin(user)} className="px-4 py-2 text-white text-xl rounded-md bg-[#D1A054] active:scale-95 duration-300"> <FaUserShield className="text-2xl" /></button>}
                                    </td>

                                    <td>
                                        <button onClick={() => handleUserDelete(user._id)} className=" text-2xl text-white rounded-md bg-red-500 active:scale-95 duration-300 px-4 py-2"><RiDeleteBin5Line /></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllUser;