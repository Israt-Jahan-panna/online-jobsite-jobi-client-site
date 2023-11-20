import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative bg-white mt-8 pb-6  font-EBGaramond px-8">
       <div className="rounded mt-10 ">
          <h3 className="bg-blue-gray-50/60 text-center text-6xl font-bold mb-6">
            Job Listing
          </h3>
          <p className="text-3xl bg-blue-gray-50/60 text-center mb-8">
            We delivered blazing fast & striking work solution{" "}
          </p>
        </div>
      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <TabList className="relative flex list-none flex-wrap rounded-xl bg-blue-gray-50/60 p-1 text-2xl font-bold items-center justify-center">
          <Tab>
              <i className="fa-solid fa-code" style={{ color: "#198754" }}></i>
              <span className="m-4"> WEB DEVLOPMENT</span></Tab>
          <Tab><i
                className="fa-brands fa-digital-ocean"
                style={{ color: "#198754" }}
              ></i>
              <span className="m-4">DIGITAL MARKETINGS</span></Tab>
          <Tab><i
                className="fa-brands fa-artstation"
                style={{ color: "#198754" }}
              ></i> <span className="m-4">GRAPHICS DESING</span></Tab>
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
                <span className="text-[#00bf58] font-bold">Price Range <br /></span>
                <span className="font-semibold">$50,000 - $70,000 <span className="opacity-40">/Per Month</span></span>
              </div>

              {/* Short Description */}
              <div className="mb-4 md:mb-0">
                <span className="text-gray-600 font-bold">Description<br/></span>
                <span className="text-black text-lg">
                  Create responsive and intuitive user interfaces.
                </span>
              </div>

              {/* Deadline */}
              <div className="mb-4 md:mb-0">
                <span className="text-gray-600 font-bold text-lg">Deadline <br/></span>
                <span className="font-extrabold">December 31, 2023</span>
              </div>

              {/* Bid Now Button */}
              <div className="flex gap-4 items-center">
              <i className="fa-regular fa-bookmark" style={{ color: "#244034" }}></i> 
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
                <span className="text-[#00bf58] font-bold">Price Range <br /></span>
                <span className="font-semibold">$50,000 - $70,000 <span className="opacity-40">/Per Month</span></span>
              </div>

              {/* Short Description */}
              <div className="mb-4 md:mb-0">
                <span className="text-gray-600 font-bold">Description<br/></span>
                <span className="text-black text-lg">
                  Create responsive and intuitive user interfaces.
                </span>
              </div>

              {/* Deadline */}
              <div className="mb-4 md:mb-0">
                <span className="text-gray-600 font-bold text-lg">Deadline <br/></span>
                <span className="font-extrabold">December 31, 2023</span>
              </div>

              {/* Bid Now Button */}
              <div className="flex gap-4 items-center">
              <i className="fa-regular fa-bookmark" style={{ color: "#244034" }}></i> 
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
                <span className="text-[#00bf58] font-bold">Price Range <br /></span>
                <span className="font-semibold">$50,000 - $70,000 <span className="opacity-40">/Per Month</span></span>
              </div>

              {/* Short Description */}
              <div className="mb-4 md:mb-0">
                <span className="text-gray-600 font-bold">Description<br/></span>
                <span className="text-black text-lg">
                  Create responsive and intuitive user interfaces.
                </span>
              </div>

              {/* Deadline */}
              <div className="mb-4 md:mb-0">
                <span className="text-gray-600 font-bold text-lg">Deadline <br/></span>
                <span className="font-extrabold">December 31, 2023</span>
              </div>

              {/* Bid Now Button */}
              <div className="flex gap-4 items-center">
              <i className="fa-regular fa-bookmark" style={{ color: "#244034" }}></i> 
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
