import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = UseAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;

        }

    })

    const handleDeleteUser = (user) => {
        console.log(user)
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
                axiosSecure.delete(`/users/${user._id}`)

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

    const handleMakeAdmin = user => {
        console.log(user)
        axiosSecure.patch(`users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        title: `{user.name } is now an admin!`,
                        text: "Your change have been updated.",
                        icon: "success"
                    });

                }
            })

    }



    return (
        <div>
            <div>
                <div><h2 className="text-4xl">Total users: {users.length}</h2></div>



                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>ser.</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>role</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            users.map((user, idx) => <tr key={user._id}>
                                                <th>{idx + 1}</th>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    {user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-400"> <td><FaUsers className="text-white text-lg" /></td></button>}
                                                </td>


                                                <button onClick={() => handleDeleteUser(user)}>
                                                    <td><FaTrash className="text-red-600 text-lg" />
                                                    </td>
                                                </button>
                                            </tr>)
                                        }

                                    </tbody>
                                </table>
                            </div>




                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;