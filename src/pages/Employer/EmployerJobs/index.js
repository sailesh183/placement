import { useEffect, useState } from "react";
import { EmployerSidebar } from "../../../components/Employer/EmployerSidebar";
import { message } from "antd";
import { fetchJobApplications } from "../../../api/fetchJobApplications";
import { EmpJobCard } from "../../../components/Employer/EmpJobCard";


export const EmployerJobs= () => {
    const [jobs,setJobs] =useState([])
    const user=JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem("token"));

     // Function to format date in DD/MM/YYYY format
   const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}/${year}`; 
  };

    //fetch jobs and job applications
    const jobapplications=async()=>{
        try{
            const response =await fetchJobApplications(user.userBase.id,token);
            if(response.status===200)
            {
                setJobs(response.data);
                message.success("Fetched job successfully");
            }
        }
        catch(error){
            message.error(error);
        }
    }

    useEffect(()=>{
            jobapplications();
    }, [])
  return (
    <div className="flex gap-7 bg-slate-100">
      <div className="sticky top-0 h-screen overflow-x-hidden overflow-y-auto w-72">
        <EmployerSidebar/>
      </div>
      <div>
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold text-blue-800 mb-8">Jobs Posted</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
         {
          jobs.map((job)=>(
            <EmpJobCard
            key={job.id}
            id={job.id}
            title={job.title}
            description={job.description}
            location={job.location}
            postedDate={formatDate(job.postedDate)}
            salary={job.salary}
            jobapplications={job.jobapplications}
            />
          )
          )
         }
        </div>
      </div>
    </div>
  );
};
