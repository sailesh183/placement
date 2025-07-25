import axios from 'axios';

export const filterJobs=async(studentId,token)=>{
    try {
        const response=await axios.get( `http://localhost:2004/jobs/filter?studentId=${studentId}`,
            {
                headers:{Authorization:`Bearer ${token}`}
            }
        );
        return response;

    } catch (error) {
        const status = error.response?.status;
    const message = error.response?.data || "Error occurred while fetching jobs.";
    throw { status, message };
    }
}