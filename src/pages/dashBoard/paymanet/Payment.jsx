import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import Cheakout from "./Cheakout";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"PAYMENT"}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <Cheakout></Cheakout>
                </Elements>
               
            </div>
        </div>
    );
};

export default Payment;