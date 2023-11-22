import React, { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const JobDetails = ({ jobs }) => {
 const  {user} = useContext(AuthContext)
 const [userEmail, setUserEmail] = useState('');
 useEffect(() => {
  // Update the state with the user's email
  setUserEmail(user.email); // Adjust this based on your actual user object structure
}, [user]);
  const {
    buyerEmail,
    description,
    shortdescription,
    jobTitle,
    deadline,
    maxPrice,
    category,
    minPrice,
  } = jobs || {};

  const handelAddBids = (event) => {
    event.preventDefault();
    
  
    const form = event.target;
    const  myDeadline = form. deadline.value;
    const price = form.price.value;
    const userEmail = form.userEmail.value;
    const buyerEmail = form.buyerEmail.value;

    const myBids = {
      userEmail,
      buyerEmail,
      user,
      jobTitle,
      description,
      category,
      maxPrice,
      minPrice,
      myDeadline,
      shortdescription,
      price,
    };
    console.log(myBids);
    // Send data to the server
      fetch("http://localhost:4100/mybids"
      , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(myBids), }
      )
      .then((res) => res.json())
      .then((data) => {
        console.log("Data:", data);
        if (data.insertedId) {
          console.log("Success!");
          Swal.fire({
            title: 'Thank You!',
            text: 'Jobs Added Successfully',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
          .then(() => {
            // Redirect to /mybids
            window.location.href = "/mybids";
          });
        } else {
          console.log("No insertedId in data:", data);
        }
      })
  };
  return (
    <div className="font-EBGaramond max-w-[1600px] mx-auto min-h-screen bg-[#244034] px-6 lg:px-0">
      <div className=" lg:mx-12  py-6  lg:flex lg:flex-row lg:justify-center  flex-col my-9 rounded-lg">
        <div className="my-6 rounded-lg shadow-xl p-8  bg-slate-100  mx-6 text-center lg:w-96">
          {/* Job Title */}

          <div className="mb-4  ">
            <h2 className="lg:text-6xl font-semibold text-[#244034]  ">
              {jobTitle}
            </h2>
          </div>

          {/* Price Range */}
          <div className="mb-4  ">
            <span className="text-[#00bf58] font-bold text-xl ">
              Price Range <br />
            </span>
            <span className="font-semibold">
              {minPrice} - {maxPrice}
              <span className="opacity-40"></span>
            </span>
          </div>

          {/* Description */}
          <div className="mb-4 ">
            <span className="text-[#244034] font-bold">
              Description
              <br />
            </span>
            <span className="text-black lg:text-xl">{description}</span>
          </div>

          {/* Deadline */}
          <div className="mb-4">
            <span className="text-[#244034] font-bold text-lg">
              Deadline <br />
            </span>
            <span className="font-extrabold">{deadline}</span>
          </div>
        </div>
        {/* Place Your Bid */}

        <div className="my-6 rounded-lg shadow-xl p-8  bg-slate-100  mx-6  lg:w-96">
          <h3 className="text-xl font-semibold mb-4">Place Your Bid</h3>

          <form onSubmit={handelAddBids}>
            <div className="mb-4">
              <label className="block text-[#244034] font-bold mb-2">
                Price (your bidding amount)
              </label>
              <input
                type="number"
                name="price"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Your Price "
              />
            </div>
            <div className="mb-4 my-6 ">
              <label className="block text-[#244034] font-bold mb-2">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="deadline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[#244034] font-bold mb-2">
                Email 
              </label>
              <input
                type="text"
                name="userEmail"
                className="border border-gray-300 text-black rounded-md p-2 w-full"
                readOnly
                placeholder={userEmail}
              />
            </div>
            <div className="mb-4 bg-white ">
              <label className="block text-[#244034] font-bold mb-2">
                Buyer Email 
              </label>
              <input
                type="text"
                name="buyerEmail"
                className="border border-gray-300 rounded-md p-2 w-full"
                readOnly
                placeholder={buyerEmail}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#198754] hover:bg-[#00bf58] text-white px-8 py-2 rounded-xl text-sm"
                
              >
                Bid on the Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;