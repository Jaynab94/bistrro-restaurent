
import FoodCard from '../foodCard/FoodCard';

const ItemTabs = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10 mt-10'>
                        {
                            items.map(item => <FoodCard
                                key={item._id}
                                item={item}

                            ></FoodCard>)
                        }
                    </div>
    );
};

export default ItemTabs;