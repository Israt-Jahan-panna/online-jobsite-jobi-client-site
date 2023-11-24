import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("  https://jobi-server-site.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  });
  console.log(jobs);
  return (
    <div className="mx-auto py-5 lg:px-0 max-w-[1600px] ">
      <div className="">
      {jobs.map((jobs) => (
        <PostCard key={jobs.id} jobs={jobs}></PostCard>
      ))}
      </div>
    </div>
  );
};

export default MyPostedJobs;
