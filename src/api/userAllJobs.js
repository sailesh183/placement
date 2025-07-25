import axios from 'axios';



export const userAllJobs=async()=>{
    try{
       const response =await axios.get('http://localhost:2004/jobs/getall');
       return response;
    }
    catch(error){
        throw new Error(error.response?.data);
    }
}