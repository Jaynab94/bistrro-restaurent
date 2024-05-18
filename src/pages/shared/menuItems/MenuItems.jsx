

const MenuItems = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <section>
            <div className='flex space-x-6 mt-14'>
                <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[120px]' src={image} alt="" />

                <div>
                    <h1 className='uppercase text-[20px] text-[#151515]'>{name}-------</h1>
                    <p>{recipe}</p>
                </div>
                <p className='text-[#BB8506] text-lg'>${price}</p>

            </div>
        </section>
    );
};

export default MenuItems;