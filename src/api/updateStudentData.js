import axios from "axios";

export const updateStudentData=async(updatedId,updatedstudent,token)=>{
    try{
        const response=await axios.put(`http://localhost:2004/admin/update/${updatedId}`,updatedstudent,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response;
    }
    catch(error)
    {
        throw new Error(error.response?.data?.message);
    }
}