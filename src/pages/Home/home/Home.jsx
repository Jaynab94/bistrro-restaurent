import Banner from "../banner/Banner";
import CallUs from "../callus/CallUs";
import Category from "../category/Category";
import Featured from "../featured/Featured";
import Message from "../messaage/Message";
import PopularMenu from "../popularMenu/PopularMenu";
import Testimonial from "../testimonial/Testimonial";
import ChefRecomadation from "./chefRecomandetion/ChefRecomadation";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Message></Message>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecomadation></ChefRecomadation>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;