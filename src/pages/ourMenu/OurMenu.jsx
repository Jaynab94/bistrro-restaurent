import { Helmet } from 'react-helmet-async';
import Cover from '../shared/cover/Cover';
import menuImage from '../../assets/menu/banner3.jpg'
import dessertImage from '../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../assets/menu/pizza-bg.jpg'
import saladImage from '../../assets/menu/pizza-bg.jpg'
import soupImage from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/UseMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from '../menuCategory/MenuCategory';


const OurMenu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const offered = menu.filter(item => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>
                    Our Menu | Bistro Boss Resraurant
                </title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImage} title={"OUR MENU"}></Cover>
            <SectionTitle subHeading={"---Don't miss---"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory
                items={dessert}
                title={"dessert"}
                img={dessertImage}
            ></MenuCategory>

            {/* pizza menu items */}
            <MenuCategory
                items={pizza}
                title={"pizza"}
                img={pizzaImage}

            ></MenuCategory>
            {/* salad menu items */}
            <MenuCategory
                items={salad}
                title={"salad"}
                img={saladImage}


            ></MenuCategory>

            {/* soup menu items */}
            <MenuCategory
                items={soup}
                title={"soup"}
                img={soupImage}



            ></MenuCategory>


        </div>
    );
};

export default OurMenu;