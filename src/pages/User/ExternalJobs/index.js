import { useEffect, useState } from "react";
import { UserNavbar } from "../../../components/user/UserNavbar";
import { UserSidebar } from "../../../components/user/UserSidebar";
import { externalJobPostings } from "../../../api/externalJobPostings";
import { message } from "antd";
import { ExternalJobCard } from "../../../components/user/ExternalJobCard";

export const ExternalJobs = () => {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    try {
      const response = await externalJobPostings();

      setJobs(response.data.data);
      message.success("Fetched jobs successfully");
    } catch (error) {
      if (error.status === 403) {
        message.error("403 Forbidden: Access is denied.");
      } else {
        message.error(error.message || "Failed to fetch jobs.");
      }
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  console.log(jobs.map((job) => (
   job.company.name
  )));
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="h-full w-72  fixed top-0 left-0">
        <UserSidebar />
      </div>

      {/* Main Content */}
      <div className="ml-48 flex-1 overflow-y-auto">
        {/* Navbar */}
        <div className=" top-0  z-10">
          <UserNavbar />
        </div>

        {/* Jobs Listing */}
        <div className=" grid grid-cols-3  p-6">
          {jobs.length === 0 ? (
            <p>Loading jobs...</p>
          ) : (
            jobs.map((job) => <ExternalJobCard key={job.id} job={job} />)
          )}
        </div>
      </div>
    </div>
  );
};
