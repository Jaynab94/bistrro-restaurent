
import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/home/Home";
import OurMenu from "../pages/ourMenu/OurMenu";
import OurShop from "../pages/ourShop/OurShop";
import LogIn from "../pages/logIn/LogIn";


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
                path: 'menu',
                element: <OurMenu></OurMenu>
            },
            {
                path: 'shop/:category',
                element: <OurShop></OurShop>
            },
            {
                path:'login',
                element:<LogIn></LogIn>
            }
        ]
    },

]);