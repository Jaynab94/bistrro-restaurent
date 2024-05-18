
import SectionTitle from "../../../components/SectionTitle";
import MenuItems from "../../shared/menuItems/MenuItems";
import useMenu from "../../../hooks/UseMenu";


const PopularMenu = () => {
    const [menus] = useMenu();
    const popularItem = menus.filter(item => item.category === "popular")



    // const [menus, setMenus] = useState([])
    // console.log(menus)

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popolaritem = data.filter(item => item.category === "popular")
    //             setMenus(popolaritem)
    //             console.log(popolaritem)
    //         })

    // }
    //     , [])



    return (
        <section className="mt-10 ">
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-8">
                {
                    popularItem?.map(item =>
                        <MenuItems key={item._id}
                            item={item}>

                        </MenuItems>)
                }
            </div>

            <div className="flex justify-center mt-16 "> <button className="btn border-b-4 border-b-black bg-transparent ">View Full  Menu</button></div>

        </section>
    );
};

export default PopularMenu;