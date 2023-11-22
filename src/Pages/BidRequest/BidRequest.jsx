import React, { useEffect, useState } from 'react';

const BidRequest = () => {
  const [bidsRequest, setBidsRequest] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4100/bidsrequest")
      .then((res) => res.json())
      .then((data) => setBidsRequest(data));
  }, []);

  const handleAccept = (bidId) => {
    // Implement your logic for accepting a bid
    console.log(`Accepted bid with ID: ${bidId}`);
    // Call API to update status to In Progress
    // For example: updateBidStatus(bidId, 'In Progress');
  };

  const handleReject = (bidId) => {
    // Implement your logic for rejecting a bid
    console.log(`Rejected bid with ID: ${bidId}`);
    // Call API to update status to Rejected
    // For example: updateBidStatus(bidId, 'Rejected');
  };

  return (
    <div className="my-8 ">
      {bidsRequest.map((bid) => (
        <div key={bid._id} className="mb-5">
          <div className="bg-white rounded-lg shadow-md p-8 mx-12">
            <div className="flex flex-col md:flex-row md:justify-between lg:items-center lg:justify-between">
              {/* Job Title */}
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-semibold w-14">{bid.jobTitle}</h2>
              </div>

              {/* Email */}
              <div className="mb-4 md:mb-0">
                <span className="text-[#00bf58] font-bold">Email<br /></span>
                <span className="font-semibold">
                  {bid.userEmail ? bid.userEmail : "Email not available"}
                  <span className="opacity-40"></span>
                </span>
              </div>

              {/* Deadline */}
              <div className="mb-4 md:mb-0">
                <span className="text-gray-600 font-bold text-lg">Deadline<br /></span>
                <span className="font-extrabold">{bid.deadline}</span>
              </div>

              {/* Price */}
              <div className="mb-4 md:mb-0">
                <span className="text-[#00bf58] font-bold">Price<br /></span>
                <span className="font-semibold">${bid.price}</span>
              </div>

              {/* Accept and Reject Buttons */}
              <div className="flex gap-4 items-center">
                <button
                  className="bg-[#198754] hover:bg-[#00bf58] text-white px-8 py-2 rounded-xl text-sm"
                  onClick={() => handleAccept(bid._id)}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-xl text-sm"
                  onClick={() => handleReject(bid._id)}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BidRequest;
