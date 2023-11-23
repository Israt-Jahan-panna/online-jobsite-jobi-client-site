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
    // Call API to update bid status to 'complete'
    // For example: updateBidStatus(jobs._id, 'complete');
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
            {/* Complete Button */}
            {bidStatus === "in-progress" && (
              <div className="flex gap-4 items-center">
                <i className="fa-regular fa-bookmark" style={{ color: "#244034" }}></i>
                <button
                  onClick={handleCompleteClick}
                  className="bg-[#198754] hover:bg-[#00bf58] text-white px-8 py-2 rounded-xl text-sm"
                >
                  Complete
                </button>
              </div>
            )}
          </div>
        </div> )
      }
    </div>
  );
};

export default MyBidsCard;
