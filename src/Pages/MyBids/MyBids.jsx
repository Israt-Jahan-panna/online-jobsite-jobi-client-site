import React, { useEffect, useState } from 'react';
import MyBidsCard from './MyBidsCard';

const MyBids = () => {
    const [myBids , setMyBids] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4100/jobs')
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