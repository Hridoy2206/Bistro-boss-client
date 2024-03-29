import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import useAxiosSecure from "./useAxiosSecure"
import { useQuery } from "@tanstack/react-query"

const useAdmin = () => {
    const { user } = useContext(AuthContext)
    console.log(user);

    const [axiosSecure] = useAxiosSecure()
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`users/admin/${user?.email}`)
            return res.data.admin
        },
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin