import React from 'react';

const CardTab = ({jobs}) => {
    
    const {  description , shortdescription , jobTitle , deadline , maxPrice, category ,minPrice  }= jobs || {} ;

    return (
        <div className= "mb-5">
            <div className=" bg-white rounded-lg shadow-md p-8  mx-12  ">
            <div className="flex flex-col md:flex-row md:justify-between lg:items-center gap-4">
              {/* Job Title */}

              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-semibold w-14">
                  {jobTitle}
                </h2>
              </div>

              {/* Price Range */}
              <div className="mb-4 md:mb-0">
                <span className="text-[#00bf58] font-bold">
                  Price Range <br />
                </span>
                <span className="font-semibold">
                  $50,000 - $70,000{" "}
                  <span className="opacity-40">/Per Month</span>
                </span>
              </div>

              {/* Short Description */}
              <div className="mb-4 md:mb-0">
                <span className="text-gray-600 font-bold">
                  Description
                  <br />
                </span>
                <span className="text-black text-lg">
                  Create responsive and intuitive user interfaces.
                </span>
              </div>

              {/* Deadline */}
              <div className="mb-4 md:mb-0">
                <span className="text-gray-600 font-bold text-lg">
                  Deadline <br />
                </span>
                <span className="font-extrabold">December 31, 2023</span>
              </div>

              {/* Bid Now Button */}
              <div className="flex gap-4 items-center">
                <i
                  className="fa-regular fa-bookmark"
                  style={{ color: "#244034" }}
                ></i>
                <button className="bg-[#198754] hover:bg-[#00bf58] text-white px-8 py-2 rounded-xl text-sm">
                  Bid Now
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default CardTab;