import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyBidsCard = ({ jobs }) => {
  const { user } = useContext(AuthContext);
  const [email, setUserEmail] = useState('');
  useEffect(() => {
    // Check if user is defined and has an email property
    if (user && user.email) {
      // Update the state with the user's email
      setUserEmail(user.email);
    }
  }, [user]);
  const {
    userEmail,
    myDeadline,
    jobTitle,
    deadline,
  } = jobs || {};
  
  const [bidStatus, setBidStatus] = useState("pending");

  const handleCompleteClick = () => {
   
    setBidStatus("complete");
  };

  return (
    <div className="my-6 mb-5">
      { email === userEmail  &&
          (<div className=" bg-white rounded-lg shadow-md p-8  mx-12  ">
          <div className="flex flex-col md:flex-row md:justify-between lg:items-center lg:justify-between ">
            {/* Job Title */}
  
            <div className="mb-4 md:mb-0 ">
              <h2 className="text-2xl font-semibold w-14">{jobTitle}</h2>
            </div>
  
            
            <div className="mb-4 md:mb-0">
              <span className="text-[#00bf58] font-bold">
                Email
                <br />
                {userEmail}
              </span>
              
            </div>
  
           
             {/* Status */}
            <div className="mb-4 md:mb-0">
              <span className="text-gray-600 font-bold">
                Status: <br />
              </span>
              <span className={`text-black text-lg ${bidStatus === "complete" ? "text-green-500" : ""}`}>
                {bidStatus}
              </span>
            </div>
  
             {/* Deadline */}
             <div className="mb-4 md:mb-0">
              <span className="text-gray-600 font-bold text-lg">
                Deadline <br /> {myDeadline}
              </span>
              
            </div>
  
             {/* Bid Now Button */}
            <button className="bg-[#198754] hover:bg-[#20c997] text-white font-bold py-2 px-4 rounded ">
              Complete
            </button>
            
          </div>
        </div> )
      }
    </div>
  );
};

export default MyBidsCard;
