// import React, { useEffect, useState } from 'react';
// import TabComponent from '../../Compunents/Tabs/TabComponent';
// import { useParams } from 'react-router-dom';

// const JobCircular = () => {
//     const { catagories } = useParams();
//   const [jobPost, setJobPost] = useState([]);
//   useEffect(() => {
//     fetch(
//       `http://localhost:4100/jobpost/${catagories}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setJobPost(data);
//       });
//   }, []);
//     return (
//         <div>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
        
//         {jobPost.length > 0 ? 
//           jobPost.map((job) => (
//             <TabComponent key={job._id} job={job}></TabComponent>
//           )) 
//          : (
//           <div className="flex text-center items-center">
//             <p className="lg:text-3xl font-extrabold  items-center"> we are Sorry <br /> There is no Post Available.</p>
//           </div>
//         )}
        
//       </div>
//         </div>
//     );
// };

// export default JobCircular;