import { NavLink } from "react-router-dom";

import toast from "react-hot-toast";
import { FaCartPlus } from "react-icons/fa";
import UseAuth from "../../../hooks/UseAuth";
import useCarts from "../../../hooks/useCarts";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
    const [isAdmin] = useAdmin();
    const [cart] = useCarts();
    // console.log(cart)
    const { user, logoutUser } = UseAuth();
    // console.log(user)

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toast.success('Logged out successfully')
            })
            .catch(err => {
                toast.error(err.message)
            })

    }


    const navOpions = <>


        <NavLink to={'/'}><li><a href="">Home</a></li></NavLink>
        <NavLink><li><a href="">CONTACT us</a></li></NavLink>
      
        <NavLink to={'/menu'}><li><a href="">Our Menu</a></li></NavLink>
        <NavLink to={'/shop/salad'}><li><a href="">Our Shop</a></li></NavLink>
     

        {
            user && isAdmin && <li>< NavLink to={'/dashboard/adminHome'}>Admin DashBoard</NavLink></li>
        }

        {
            user && !isAdmin && <li>< NavLink to={'/dashboard/UserHome'}>User Home</NavLink></li>
        }




        <NavLink to='/dashboard/cart'><li><a href="">
            <button className="btn">
                <FaCartPlus className="text-2xl" />
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>

        </a></li></NavLink>


        {
            user ? <button onClick={handleLogout} className="btn btn-ghost"><li><a href="">Log out</a></li></button> :
                <NavLink to={'/login'}><li><a href="">Log in</a></li></NavLink>
        }


    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navOpions

                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">BISTRO BOSS <br />Restaurant</a>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navOpions
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;