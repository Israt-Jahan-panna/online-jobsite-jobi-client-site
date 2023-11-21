import React from "react";

const Find = () => {
  return (
    <div className="relative bg-blueGray-200 mt-8 mb-6 container mx-auto font-EBGaramond px-8">
      <div className="">
        <div className="text-6xl font-bold text-[#244034] bg-white shadow-sm p-4">
          <h1>
            
            Find the best talented <br /> expert in jobi.
          </h1>
        </div>
        <div className=" md:flex-row flex flex-col gap-8 shadow-sm px-8 text-center mt-10">
          <div className="text-lg font-bold ">
            <img src="https://i.ibb.co/cLPswKv/img-07.jpg" alt="" />
            <h1>Emily Davis</h1>
            <h3> Graphic Designer</h3>
          </div>
          <div className="text-lg font-bold ">
            <img src="https://i.ibb.co/Q6chHPd/img-08.jpg" alt="" />
            <h1>Robert Johnson</h1>
            <h3> WEb Devlopments</h3>
          </div>
          <div className="text-lg font-bold ">
            <img src="https://i.ibb.co/zf9gqkp/img-06.jpg" alt="" />
            <h1>Jane Smith</h1>
            <h3> Digital Marketer</h3>
          </div>
          
          <div className="text-lg font-bold ">
            <img src="https://i.ibb.co/vmVLmjk/img-05.jpg" alt="" />
            <h1>John Doe</h1>
            <h3> Web Devlopment</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find;
