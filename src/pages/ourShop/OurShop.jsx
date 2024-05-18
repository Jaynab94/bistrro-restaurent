import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import shopImg from '../../assets/shop/banner2.jpg'
import Cover from '../shared/cover/Cover';
import { useState } from 'react';
import useMenu from '../../hooks/UseMenu';

import ItemTabs from './ItemTabs';
import { useParams } from 'react-router-dom';

const OurShop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const { category } =useParams();
    console.log(category)
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const drinks = menu.filter(item => item.category === "drinks")
    return (
        <div>
            <Cover img={shopImg} title={"OUR SHOP"}></Cover>
            <Tabs className={"mt-10"} defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DESSERT</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>

                    {/* {
                            salad.map(item => <FoodCard
                                key={item._id}
                                item={item}

                            ></FoodCard>)
                        } */}
                    <ItemTabs items={salad}></ItemTabs>

                </TabPanel>
                <TabPanel>

                    {/* {
                            pizza.map(item => <FoodCard
                                key={item._id}
                                item={item}

                            ></FoodCard>)
                        } */}

                    <ItemTabs items={pizza}></ItemTabs>

                </TabPanel>
                <TabPanel>

                    {/* {
                            soup.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            >

                            </FoodCard>)
                        } */}
                    <ItemTabs items={soup}></ItemTabs>

                </TabPanel>
                <TabPanel>

                    {/* {
                            dessert.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>
                            )} */}

                    <ItemTabs items={dessert}></ItemTabs>

                </TabPanel>
                <TabPanel>
                    {/* {
                        offered.map(item => <FoodCard
                            key={item._id}
                            item={item}
                        ></FoodCard>)
                    } */}

                    <ItemTabs items={drinks}></ItemTabs>


                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OurShop;