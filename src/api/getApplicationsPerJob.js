import axios from 'axios';

export const getApplicationsPerJob=async(token)=>{
   try {
     const response = await axios.get('http://localhost:2004/stats/applications-per-job',
      {
        headers: { Authorization: `Bearer ${token}` },
      }
     );
     return response;
   } catch (error) {
    throw new Error(error.response?.data);
   }
}