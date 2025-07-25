import axios from 'axios';


export const fetchJobApplications=async(eid,token)=>{
    try {
        const response =await axios.get(`http://localhost:2004/jobs/getJobsByEmployer/${eid}`,
            {
                headers:{Authorization:`Bearer ${token}`}
            }
        );
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message);
    }
}