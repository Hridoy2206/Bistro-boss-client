import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Contacts from "../Pages/Contacts/Contacts/Contacts";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import NotFound from "../Pages/Shared/NotFound/NotFound";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart";
import AllUser from "../Pages/Dashboard/AllUser";
import AdItem from "../Pages/Dashboard/AdItem/AdItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import Payment from "../Pages/Dashboard/Payment/Payment";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'order/:category',
                element: <Order />
            },
            {
                path: 'contacts',
                element: <Contacts />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret /></PrivateRoute>
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "my-cart",
                element: <MyCart />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {/*----- Admin --------*/ },
            {
                path: "all-users",
                element: <AdminRoute><AllUser /></AdminRoute>
            },
            {
                path: "ad-item",
                element: <AdminRoute><AdItem /></AdminRoute>
            },
            {
                path: "manage-item",
                element: <AdminRoute><ManageItem /></AdminRoute>
            },
            {
                path: "admin-home",
                element: <AdminRoute><AdminHome /></AdminRoute>
            },
        ]
    }
]);
