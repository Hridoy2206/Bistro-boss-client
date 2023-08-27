
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import CoverBanner from '../../Shared/CoverBanner/CoverBanner';
import coverImg from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();

    // Get the initialIndex based on the selected category
    const initialIndex = categories.indexOf(category) !== -1 ? categories.indexOf(category) : 0;

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu([]);

    const Salad = menu.filter((item) => item.category === 'salad');
    const Pizza = menu.filter((item) => item.category === 'pizza');
    const Soup = menu.filter((item) => item.category === 'soup');
    const Dessert = menu.filter((item) => item.category === 'dessert');
    const Drinks = menu.filter((item) => item.category === 'drinks');
    const DeshiFood = menu.filter((item) => item.category === 'Deshi Food');

    useEffect(() => {
        // Update the tab index whenever the category changes
        setTabIndex(initialIndex);
    }, [category, initialIndex]);

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <CoverBanner bgImage={coverImg} title="Our shop" />

            {/*-------Using Tabs--------*/}
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className=" mt-16 mb-12 uppercase font-sans font-semibold ">
                <TabList className="flex gap-0 lg:gap-10 text-center flex-1 justify-center cursor-pointer">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Deshi food</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab item={Salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={Pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={Soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={Dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={Drinks}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={DeshiFood}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
