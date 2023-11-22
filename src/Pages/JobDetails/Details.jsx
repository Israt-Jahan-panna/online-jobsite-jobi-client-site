import React, { useEffect, useState } from 'react';
import JobDetails from './JobDetails';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { name, _id } = useParams();
    const  [job , setJobs] = useState([]);
  
    useEffect(()=> {
      fetch(`http://localhost:4100/jobs/${_id}`)
      .then(res => res.json())
      .then(data => {
          setJobs(data);
      })
   },[_id])
//    console.log(job)
    return (
      <div>
      {
                  
                      <JobDetails key={job._id}  jobs={job} ></JobDetails>
                 
              }
      </div>
    );
};

export default Details;