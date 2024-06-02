import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";



const PaymentHistory = () => {
    const { user } = UseAuth();
    console.log(user);
    const axiosSecure = UseAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            console.log(res.data)
            return res.data;



        }

    })
    return (
        <div>
            <SectionTitle subHeading={"---At a Glance!---"} heading={"PAYMENT HISTORY"}></SectionTitle>
            <div>
                <h1 className="text-4xl">Total Payment : {payments.length}</h1>
            </div>
            <div>




                <table className="table mt-6">
                    {/* head */}
                    <thead className="bg-base-200">
                        <tr>
                            <th>No</th>
                            
                            <th>Transition</th>
                            <th>TOTAL PRICE</th>
                            <th>PAYMENT DATE</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment,index )=> <tr key={payment._id} >
                            <th>{index+1}</th>
                            
                            <td>{payment.trasactionId}</td>
                            <td>$ {payment.price}</td>
                            <td>{payment.date}</td>
                            <td>{payment.status}</td>
                            
                            
                        </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    )   
    
};

export default PaymentHistory;