import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/UseMenu";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu, loading, refetch] = useMenu();


    const axiosSecure = UseAxiosSecure();

    //delete item
    const handleDeleteItem = (item) => {
        console.log(item)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data)
                if (res.data.deletedCount) {
                    refetch();
                    Swal.fire({
                        title: `${item.name} has been deleted.`,
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }


            }
        });
    }


    return (
        <div>
            <SectionTitle subHeading={"--Hurry up--"} heading={"Manage All Items"}></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}

                                    </td>
                                    <td>{item.price}</td>
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                        <button className="btn btn-ghost"><FaEdit className="text-2xl"></FaEdit></button>
                                    </Link>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost"><FaTrash className="text-2xl text-red-600"></FaTrash></button>
                                    </td>
                                </tr>
                                )
                            }

                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;