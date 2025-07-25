import axios from 'axios';

export const AddJobPosting=async(jobData,eid,token)=>{
    try {
        const response =await axios.post(`http://localhost:2004/jobs/addjob/${eid}`,jobData,
            {
                headers:{Authorization:`Bearer ${token}`}
            }
        );
        return response;
    } catch (error) {
        throw new Error(error.response?.data);
    }
}