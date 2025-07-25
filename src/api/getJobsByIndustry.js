import axios from 'axios';
export const getJobsByIndustry=async(token)=>{
    try {
        const response= await axios.get("http://localhost:2004/stats/jobs-by-industry",
            {
                headers:{Authorization:`Bearer ${token}`}
            }
        );
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message);
    }
}