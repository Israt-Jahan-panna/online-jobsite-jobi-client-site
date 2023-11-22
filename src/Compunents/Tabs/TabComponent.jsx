import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CardTab from "../cardtab/cardTab";

const TabComponent = () => {
 
  const [jobs , setJobs] = useState([]);

  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    fetch('http://localhost:4100/addjob')
    .then(res => res.json())
    .then(data => setJobs(data))
    

  });
  const webDevlopment = jobs.filter((job)=>job.category == "WEB DEVELOPMENT")
  console.log(webDevlopment);
  const digitalMarketing = jobs.filter((job)=>job.category == "DIGITAL MARKETING")
  console.log(webDevlopment);
  const graphicsDesing = jobs.filter((job)=>job.category == "GRAPHICS DESING")
  console.log(webDevlopment);
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
         {
          webDevlopment.map(jobs=> <CardTab key={jobs.id} jobs={jobs}></CardTab>)
         }
        </TabPanel>

        <TabPanel>
        {
         digitalMarketing.map(jobs=> <CardTab key={jobs.id} jobs={jobs}></CardTab>)
         }
        </TabPanel>

        <TabPanel>
        {
         graphicsDesing.map(jobs=> <CardTab key={jobs.id} jobs={jobs}></CardTab>)
         }
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabComponent;
