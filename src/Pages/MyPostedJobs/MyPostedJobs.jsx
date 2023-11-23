import React, { useEffect, useState } from 'react';
import CardTab from '../../Compunents/cardtab/cardTab';

const MyPostedJobs = () => {
    const [jobs , setJobs] = useState([]);

    useEffect(() => {
      fetch('http://localhost:4100/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
     
    });
    console.log(jobs)
    return (
        <div>
            {
          jobs.map(jobs=> <CardTab key={jobs.id} jobs={jobs}></CardTab>)
         }
        </div>
    );
};

export default MyPostedJobs;