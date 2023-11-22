import React, { useEffect, useState } from 'react';
import CardTab from '../../Compunents/cardtab/cardTab';

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
        myBids.map(jobs=> <CardTab key={jobs.id} jobs={jobs}></CardTab>)
         }
        </div>
    );
};

export default MyBids;