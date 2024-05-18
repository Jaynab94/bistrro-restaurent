import { Link } from "react-router-dom";
import Cover from "../shared/cover/Cover";
import MenuItems from "../shared/menuItems/MenuItems";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="p-10">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-8 my-6">
                {
                    items?.map(item =>
                        <MenuItems key={item._id}
                            item={item}>

                        </MenuItems>)
                }
            </div>
            <Link to={ `/shop/${title}`}>
                <button className="btn  text-black mt-4  border-b-black border-b-4 ">ORDER YOUR FAVOURITE FOOD</button>
            </Link>
        </div>
    );
};

export default MenuCategory;