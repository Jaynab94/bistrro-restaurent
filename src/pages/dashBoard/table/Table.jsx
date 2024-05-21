import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";


const Table = ({ item, index, refetch }) => {
    const { image, name, price, _id } = item;
    const axiosSecure = UseAxiosSecure();


    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)

                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch();
                    })






            }
        });
    }


    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <th>
                    {index + 1}
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-20 h-20">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>

                    </div>
                </td>
                <td>
                    {name}

                </td>
                <td>{price}</td>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost "><FaTrashAlt className="text-lg text-red-500"></FaTrashAlt></button>
                </th>
            </tr>



        </tbody>
    );
};

export default Table;