import React from 'react';

import Banner from './Banner';
import TabComponent from '../../Compunents/Tabs/TabComponent';
import Find from './Find';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TabComponent></TabComponent>
            <Find></Find>
        </div>
    );
};

export default Home;