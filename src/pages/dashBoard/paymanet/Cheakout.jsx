import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import useCarts from "../../../hooks/useCarts";
import UseAuth from "../../../hooks/UseAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Cheakout = () => {

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [trasactionId, setTrasactionId] = useState('');
    // console.log(clientSecret)
    const { user } = UseAuth();

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();
    const navigate = useNavigate();


    const [cart, refetch] = useCarts();
    // console.log(cart)
    const totalPrice = cart?.reduce((total, item) => total + item.price, 0);
    // console.log(totalPrice)


    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create_payment_intent', { price: totalPrice })
                .then(res => {
                    // console.log(res.data);
                    console.log(res.data.client_secret);
                    setClientSecret(res.data.client_secret);

                })
        }

        //confirm payment intent

    }, [axiosSecure, totalPrice]);

    // useEffect(() => {
    //     if (totalPrice > 0) {
    //         axiosSecure.post('/create-payment-intent', { price: totalPrice })
    //             .then(res => {
    //                 console.log(res.data.clientSecret);
    //                 setClientSecret(res.data.clientSecret);
    //             })
    //     }
    // }, [axiosSecure, totalPrice])



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,

        })
        if (error) {
            console.log('payment error', error);
            setError(error.message);
        } else {
            console.log('payment method', paymentMethod);
            setError('');
        }


        //payment method
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',


                }
            }



        })

        if (confirmError) {

            console.log(confirmError)

        } else {
            console.log('paymentIntent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                setTrasactionId(paymentIntent.id)

                //now send the trasaction id to the server
                const paymentInfo = {
                    email: user.email,
                    price: totalPrice,
                    date: new Date(),
                    trasactionId: paymentIntent.id,
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuId),
                    status: 'pending',

                }

                const res = await axiosSecure.post('/payments', paymentInfo);
                console.log('payment success', res.data.result);
                if (res.data.result.insertedId) {
                    toast.success("Payment Successfull")
                }

                refetch(); 
                navigate('/dashboard/paymentHistory') //refetch the carts

            }
        }

    }
    return (

        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-xs btn-primary my-4" type="submit" disabled={!stripe} >
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {trasactionId && <p className="text-green-600"> your trasactionId is:{trasactionId}</p>}
        </form>


    );
};

export default Cheakout;