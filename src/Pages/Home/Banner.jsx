import React from "react";

const Banner = () => {
  return (
    <div
      className="font-EBGaramond max-w-[1600px] mx-auto hero min-h-screen  bg-[#244034] 
    "
    >
      <div className="">
        <div className="hero-content">
          <div className=" flex justify-center items-center gap-6">
            <div>
              <h3 className="text-7xl font-extrabold mb-6 text-white">
                Find & Hire <br />{" "}
                <span className="text-[#d2f34c] mt-5 mb-4">
                  Top 30% of expert <br /> on jobi.
                </span>
              </h3>
              <p className="text-xl  font-bold text-white">
                We delivered blazing fast & striking work solution
              </p>
            </div>
            
              <div className="">
                <img
                  className=" -mb-24 "
                  src="https://i.ibb.co/WFkm22G/img-01.jpg"
                  alt=""
                />
              </div>
              
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
