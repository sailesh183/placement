import axios from 'axios';

export const getJobApplications=async(jobId,token)=>{
    try {
        const response =await axios.get(`http://localhost:2004/application/getapplicationsbyid/${jobId}`,
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        );
        return response;
    } catch (error) {
        throw new Error(error.response?.data);
    }
}