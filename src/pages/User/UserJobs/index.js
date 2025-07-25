import { useEffect, useState } from "react";
import { UserSidebar } from "../../../components/user/UserSidebar";
import { message } from "antd";
import { JobCard } from "../../../components/user/JobCard";
import { filterJobs } from "../../../api/filterJobs";
import { UserNavbar } from "../../../components/user/UserNavbar";
import { useNavigate } from "react-router-dom";

export const UserJobs = () => {
  const [jobs, setJobs] = useState({ "Applied": [], "Not Applied": [] });
  const user=JSON.parse(localStorage.getItem('user'));
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate=useNavigate();

   // Function to format date in DD/MM/YYYY format
   const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}/${year}`; 
  };

  // Fetch user's jobs using API
  const fetchUserJobs = async () => {
    
    try {
      const response = await filterJobs(user.userBase.id,token);
      if (response.status === 200) {
        setJobs(response.data);

        message.success("Fetched jobs successfully");
      }
    } catch (error) {
      
      if (error.status === 403) {
        message.error("403 Forbidden: Access is denied.");
        navigate("/login");
        
      } else {

        message.error(error.message || "Failed to fetch jobs.");
      }
    }
  };
  useEffect(() => {
    fetchUserJobs();
  }, []);
  // console.log(jobs);
  return (
    <div className="flex gap-7 bg-slate-100 h-screen">
      <div className="sticky top-0 h-screen overflow-x-hidden overflow-y-auto w-72">
        <UserSidebar />
      </div>
      <div className="flex flex-col flex-1 gap-3">
        <UserNavbar />
   
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold text-blue-800 mb-8">Jobs Posted</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        {jobs["Not Applied"].map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            company={job.companyName}
            location={job.location}
            salary={job.salary}
            status={0}
            description={job.description}
            postedDate={formatDate(job.postedDate)}
          />
        ))}
      </div>
      </div>
    </div>
  );
};
