import SectionTitle from "../../../components/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './featured.css'


const Featured = () => {
    return (
        <section className="featured p-20 mt-24 bg-fixed">
            <SectionTitle
                subHeading={"---Check it out---"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>

            <div className="md:flex justify-center items-center md:gap-10 p-24">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="text-white">
                    <h1 className="uppercase">March 20, 2023</h1>
                    <p>WHERE CAN I GET SOME?</p>
                    <p> Savor our signature grilled salmon, hearty beef bourguignon, and fresh garden salads. Indulge in our creamy truffle pasta and delectable chocolate fondant. Pair your meal with fine wines and artisanal cocktails. Experience the perfect blend of flavors and exceptional dining at Bistro Boss.</p>
                    <button className=" btn bg-transparent border-0 border-b-4 border-b-white ">Read More</button>
                </div>

            </div>

        </section>
    );
};

export default Featured;