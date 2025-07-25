import axios from 'axios';

export const fetchAllStudents=async(token)=>{
    try{
       const response=await axios.get('http://localhost:2004/admin/getAllStudents',
        {
            headers:{Authorization:`Bearer ${token}`}
        }
       );
       return response;
    }
    catch(error){
        throw new Error(error.response?.data?.message);
    }
}