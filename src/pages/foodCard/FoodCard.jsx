import propTypes from "prop-types"
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import useCarts from "../../hooks/useCarts";




const FoodCard = ({ item }) => {

    const { name, recipe, image, price, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const [, refetch] = useCarts()

    const handleAddCart = () => {
        if (user && user?.email) {
            //send data to the server

            const menuItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price,


            }

            axiosSecure.post('/carts', menuItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {

                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to cart!`,
                            showConfirmButton: false,
                            timer: 3000
                        });

                        //refetch carts to update carts
                        refetch();
                    }
                })

        } else {

            Swal.fire({
                title: "You are not loggin?",
                text: "please log in first!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, log in"
            }).then((result) => {
                if (result.isConfirmed) {
                    // redirect to login page
                    navigate('/login', { state: { from: location } });
                }
            });

        }
    }








    return (
        <div className="card w-96 bg-base-100 relative shadow-xl ">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center text-2xl text-[#151515] font-semibold">
                    {name}

                </h2>
                <p className="text-center">{recipe}</p>
                <div className="absolute top-6 text-lg right-10 text-white font-bold bg-black px-4">$ {price}</div>
                <div className="card-actions justify-center">
                    <button onClick={ handleAddCart}
                        className="btn text-[#BB8506] mt-2 border-b-[#BB8506] border-b-2 ">ADD TO CART</button>


                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: propTypes.object.isRequired,
}

export default FoodCard;