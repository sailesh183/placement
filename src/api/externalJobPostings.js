import axios from 'axios';
export const externalJobPostings=async()=>{
   try {
    const response=await axios.get('http://localhost:2004/jobs/fetchJobs');
    return response;
   } catch (error) {
    throw new Error(error.response?.data);
   }
}