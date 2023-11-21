import React from "react";

const MatchJobs = () => {
  return (
    <div className="bg-gray-100 pb-5">
      <div className="container mx-auto sm:flex lg:flex-row items-center justify-around bg-[#244034] rounded-md font-EBGaramond ">
        <div className="lg:mx-8 ">
          <img
            className="relative top-28  lg:left-96"
            src="https://i.ibb.co/b5f3BdK/shape-02.png"
            alt=""
          />
          <img
            className="relative -bottom-0"
            src="https://i.ibb.co/P15bJK0/img-09.png"
            alt=""
          />
        </div>
        <div className=" lg:pr-8 lg:text-start text-center">
          <h3 className="font-bold text-6xl text-white mb-7">
            Get your <br />
            <span className="text-[#d2f34c]">Matched Jobs</span> in a <br />
            few minutes.
          </h3>
          <p className="text-2xl text-gray-300 mb-7">
            Find your dream job & earn from world <br />
            leading brands.
          </p>
          <button className="text-black font-semibold bg-[#d2f34c] px-3 py-5 rounded-lg text-center mb-4">
            {" "}
            <i
              className="fa-solid fa-circle-arrow-up text-xl text-center"
              style={{ color: "#121212" }}
            ></i>{" "}
            Upload your CV now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchJobs;
