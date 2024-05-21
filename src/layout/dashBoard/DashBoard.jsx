import { FaCalendar, FaDAndD, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";

import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../../hooks/useCarts";


const DashBoard = () => {
    const [cart] = useCarts();
    return (
        <div className="flex">
            {/* sidebar */}
            <div className="h-full min-h-screen w-60 bg-orange-500">
                <ul className="menu p-6">
                    <li>

                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                            my cart ( {cart.length} )
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/home">
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/reservation">
                            <FaCalendar></FaCalendar>
                            Reservation
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/review">
                            <FaDAndD></FaDAndD>
                            Review
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/bookings">
                            <FaList></FaList>
                            My Booking
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>

                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/shop/salad">
                            <IoFastFood />
                            Our Menu
                        </NavLink>
                    </li>
                </ul>

            </div>

            {/* dashboard content */}

            <div className="flex-1 p-8">

                <Outlet></Outlet>

            </div>
        </div >
    );
};

export default DashBoard;