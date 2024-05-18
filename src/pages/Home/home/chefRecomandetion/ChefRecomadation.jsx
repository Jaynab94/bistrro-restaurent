import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle";
import Recomadation from "./Recomadation";


const ChefRecomadation = () => {
    const [chef, setChef] = useState([]);
    console.log(chef);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const chefitem = data.filter(item => item.category === "offered")
                setChef(chefitem)
            })
    }, [])



    return (
        <section className="mt-20">
            <SectionTitle
                subHeading={"---Should Try---"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>

            <div className="grid md:grid-cols-3 mt-16">
                {
                    chef.map(item => <Recomadation key={item._id} item={item}></Recomadation>)
                }
            </div>

        </section>
    );
};

export default ChefRecomadation;