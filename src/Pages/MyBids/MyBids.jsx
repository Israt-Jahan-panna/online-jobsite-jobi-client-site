import React, {  } from 'react';
import MyBidsCard from './MyBidsCard';
import { useState } from 'react';
import { useEffect } from 'react';

const MyBids = () => {
    const [myBids , setMyBids] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4100/mybids')
    .then(res => res.json())
    .then(data => setMyBids(data))
   
  });
    return (
        <div>
            {
        myBids.map(jobs=> <MyBidsCard key={jobs.id} jobs={jobs}></MyBidsCard>)
         }
        </div>
    );
};

export default MyBids;