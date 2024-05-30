import { Link } from "react-router-dom";
import useCarts from "../../../hooks/useCarts";
import Table from "../table/Table";

const Cart = () => {
    const [cart, refetch] = useCarts();
    console.log(cart)
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)
    // const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)
    return (
        <div>
            <div className="flex justify-evenly ">
                <h1 className="text-4xl">items:{cart.length}</h1>
                <h1 className="text-4xl">items:Total Price : ${totalPrice} </h1>
                {
                    cart.length ? <Link to={'/dashboard/payment'}>  <button className="btn btn-secondary">pay</button></Link>
                        :
                        <button disabled className="btn btn-secondary">pay</button>
                }


            </div>


            <div >
                <div className="overflow-x-auto mt-6">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    ser.
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        {
                            cart.map((item, index) => <Table index={index}
                                item={item}
                                refetch={refetch}
                                key={item._id}
                            ></Table>
                            )}



                    </table>

                </div>




            </div>
        </div>
    );
};

export default Cart;