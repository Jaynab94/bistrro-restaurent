
const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;
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
                    <button className="btn text-[#BB8506] mt-2 border-b-[#BB8506] border-b-2 ">ADD TO CART</button>


                </div>
            </div>
        </div>
    );
};

export default FoodCard;