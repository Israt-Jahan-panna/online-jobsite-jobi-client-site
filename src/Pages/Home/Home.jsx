import React from 'react';

import Banner from './Banner';
import TabComponent from '../../Compunents/Tabs/TabComponent';
import Find from './Find';
import MatchJobs from './MatchJobs';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <TabComponent></TabComponent>
            <MatchJobs></MatchJobs>
            <Find></Find>
        </div>
    );
};

export default Home;