
import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/home/Home";
import OurMenu from "../pages/ourMenu/OurMenu";
import OurShop from "../pages/ourShop/OurShop";
import LogIn from "../pages/logIn/LogIn";
import Register from "../pages/register/Register";
import Secret from "../pages/secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../layout/dashBoard/DashBoard";
import Cart from "../pages/dashBoard/cart/Cart";
import AllUsers from "../pages/dashBoard/allUsers/AllUsers";
import AddItems from "../pages/dashBoard/addItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/dashBoard/manageItems/ManageItems";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <OurMenu></OurMenu>
            },
            {
                path: 'shop/:category',
                element: <OurShop></OurShop>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/secret',
                element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
            }
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children: [
            //normal user routes
            {
                path: 'cart',
                element: <Cart></Cart>
            },

            // admin routes
            {
                path: 'allUsers',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: 'addItems',
                element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
            },
            {
                path: 'manageItems',
                element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
            }
        ]
    }

]);