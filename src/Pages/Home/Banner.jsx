import React from "react";

const Banner = () => {
  return (
    <div className="font-EBGaramond max-w-[1600px] mx-auto hero min-h-screen bg-[#244034] px-6 lg:px-0">
  <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 lg:gap-10">
    <div className="text-center lg:text-left">
      <h3 className="text-4xl lg:text-7xl lg:font-extrabold mb-6 text-white">
        Find & Hire <br />
        <span className="text-[#d2f34c] mt-5 mb-4 block lg:inline-block">
          Top 30% of experts <br /> on jobi.
        </span>
      </h3>
      <p className="text-base lg:text-xl font-bold text-white">
        We deliver blazing fast & striking work solutions
      </p>
    </div>

    <div className="lg:pl-8 w-full lg:w-auto">
      <img
        className="rounded-lg lg:h-[570px] w-full"
        src="https://i.ibb.co/WFkm22G/img-01.jpg"
        alt=""
      />
    </div>
  </div>
</div>

    
  );
};

export default Banner;
