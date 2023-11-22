import React from 'react';
import { Link } from 'react-router-dom';

const CardTab = ({jobs}) => {
    
    const {_id,  description , shortdescription , jobTitle , deadline , maxPrice, category ,minPrice  }= jobs || {} ;
    
    return (
        <div className= "mb-5">
            <div className=" bg-white rounded-lg shadow-md p-8  mx-12  ">
            <div className="flex flex-col md:flex-row md:justify-between lg:items-center lg:justify-between ">
              {/* Job Title */}

              <div className="mb-4 md:mb-0 ">
                <h2 className="text-2xl font-semibold w-14">
                  {jobTitle}
                </h2>
              </div>

              {/* Price Range */}
              <div className="mb-4 md:mb-0  ">
                <span className="text-[#00bf58] font-bold">
                  Price Range <br />
                </span>
                <span className="font-semibold">
                  {minPrice} - {maxPrice}
                  <span className="opacity-40"></span>
                </span>
              </div>

              {/* Short Description */}
              <div className="mb-4 md:mb-0">
                <span className="text-gray-600 font-bold">
                  Description
                  <br />
                </span>
                <span className="text-black text-lg">
                 {shortdescription}
                </span>
              </div>

              {/* Deadline */}
              <div className="mb-4 md:mb-0">
                <span className="text-gray-600 font-bold text-lg">
                  Deadline <br />
                </span>
                <span className="font-extrabold">{deadline}</span>
              </div>

              {/* Bid Now Button */}
              <div className="flex gap-4 items-center">
                <i
                  className="fa-regular fa-bookmark"
                  style={{ color: "#244034" }}
                ></i>
                <Link to={`/jobs/${_id}`}>
                <button className="bg-[#198754] hover:bg-[#00bf58] text-white px-8 py-2 rounded-xl text-sm">
                  Bid Now
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    );
};

export default CardTab;