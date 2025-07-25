import { useEffect, useState } from "react";
import { UserSidebar } from "../../../components/user/UserSidebar";
import { message } from "antd";
import { filterJobs } from "../../../api/filterJobs";
import { JobCard } from "../../../components/user/JobCard";
import { UserNavbar } from "../../../components/user/UserNavbar";

export const AppliedJobs = () => {
  const [jobs, setJobs] = useState({ "Applied": [], "Not Applied": [] });
  const token = JSON.parse(localStorage.getItem("token"));
  
   // Function to format date in DD/MM/YYYY format
   const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}/${year}`; 
  };

  const user=JSON.parse(localStorage.getItem('user'));

  const fetchJobs=async()=>{
      try {
        const response=await filterJobs(user.userBase.id,token);
        if(response.status === 200) {
          setJobs(response.data);
          message.success("fetched successfully");
        }
      } catch (error) {
        message.error(error);
      }
  }
   useEffect(()=>{
     fetchJobs();
   },[])
  //  console.log(jobs["Not Applied"]);
  return (
    <div className="flex gap-7 bg-slate-100 h-screen">
       <div className="sticky top-0 h-screen overflow-x-hidden overflow-y-auto w-72">
        <UserSidebar />
      </div>
      <div className="flex flex-col flex-1 gap-3">
      <UserNavbar />
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold text-blue-800 mb-8">Jobs Applied</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        {jobs["Applied"].length>0 ?(jobs["Applied"].map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            company={job.companyName}
            location={job.location}
            salary={job.salary}
            description={job.description}
            status={1}
            postedDate={formatDate(job.postedDate)}
          />
        ))):(
          <h1 className="text-red-600 font-bold">No Job Applied Yet</h1>
        )}
      </div>
      </div>
    </div>
  );
};
