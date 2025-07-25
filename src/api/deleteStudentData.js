import axios from 'axios';

export const DeleteStudentData=async(id,token)=>{
    try{
     const response=await axios.delete(`http://localhost:2004/admin/${id}`,
        {
            headers:{Authorization:`Bearer ${token}`}
        }
     );
     return response;
    }
    catch(error)
    {
        throw new Error(error.response?.data?.message);
    }

}