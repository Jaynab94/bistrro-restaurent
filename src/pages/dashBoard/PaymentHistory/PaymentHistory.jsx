import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";



const PaymentHistory = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const { data: payments=[] } = useQuery({
        queryKey: ['payment', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;


        }

    })
    return (
        <div>
            <SectionTitle subHeading={"---At a Glance!---"} heading={"PAYMENT HISTORY"}></SectionTitle>
            <div>
                <h1 className="text-4xl">total payment:{payments.length}</h1>
            </div>
        </div>
    );
};

export default PaymentHistory;