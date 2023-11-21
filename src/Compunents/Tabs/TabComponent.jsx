import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative  bg-gray-100 pb-6  font-EBGaramond px-8 mx-auto">
     <div className="rounded pt-8 justify-between flex flex-col lg:flex-row  mb-10 items-center container mx-auto">
  <h3 className="bg-blue-gray-50/60 text-4xl lg:text-6xl font-bold mb-6 text-center lg:text-left ml-8">
    Most Demanding <br /> Categories.
  </h3>
  <div  className="text-center lg:text-left px-4">
    <p className="text-lg lg:text-3xl bg-blue-gray-50/60 mb-4 lg:mb-8">
      Together with useful notifications, collaboration,<br /> insights, and improvement tips .
    </p>
    <h1 className=" underline text-base lg:text-xl font-semibold text-[#98bd00]">
      Explore all fields
    </h1>
  </div>
</div>


      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <TabList className="relative flex list-none flex-wrap rounded-xl bg-blue-gray-50/60 p-1 text-2xl lg:font-bold items-center justify-center ">
          <Tab >
            <i className="fa-solid fa-code" style={{ color: "#198754" }}></i>
            <span className="m-4"> WEB DEVLOPMENT</span>
          </Tab>
          <Tab>
            <i
              className="fa-brands fa-digital-ocean"
              style={{ color: "#198754" }}
            ></i>
            <span className="m-4">DIGITAL MARKETINGS</span>
          </Tab>
          <Tab>
            <i
              className="fa-brands fa-artstation"
              style={{ color: "#198754" }}
            ></i>{" "}
            <span className="m-4">GRAPHICS DESING</span>
          </Tab>
        </TabList>

        <TabPanel>
          <div className=" bg-white rounded-lg shadow-md p-8  mx-12  ">
            <div className="flex flex-col md:flex-row md:justify-between lg:items-center gap-4">
              {/* Job Title */}

              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-semibold w-14">
                  Full Stack Developer
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
        </TabPanel>

        <TabPanel>
          <div className=" bg-white rounded-lg shadow-md p-8  mx-12  ">
            <div className="flex flex-col md:flex-row md:justify-between lg:items-center gap-4">
              {/* Job Title */}

              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-semibold w-14">
                  Full Stack Developer
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
        </TabPanel>

        <TabPanel>
          <div className=" bg-white rounded-lg shadow-md p-8  mx-12  ">
            <div className="flex flex-col md:flex-row md:justify-between lg:items-center gap-4">
              {/* Job Title */}

              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-semibold w-14">
                  Full Stack Developer
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
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabComponent;
