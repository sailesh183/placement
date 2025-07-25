import axios from "axios";

export const updateEmployerData=async(updatedId,updatedEmployer,token)=>{
    try {
        const response =await axios.put(`http://localhost:2004/admin/employer/update/${updatedId}`,updatedEmployer,
            {
                headers:{ Authorization:`Bearer ${token}`}
            }
        );
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message);
    }
}