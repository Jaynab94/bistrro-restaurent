

const Recomadation = ({ item }) => {
    console.log(item);
    const { name, image ,recipe} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center text-2xl text-[#151515] font-semibold">
                    {name}
                    
                </h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn text-[#BB8506] mt-2 border-b-[#BB8506] border-b-2 ">ADD TO CART</button>


                </div>
            </div>
        </div>
    );
};

export default Recomadation;