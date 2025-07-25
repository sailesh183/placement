import axios from 'axios';


export const adminRegisterStudent=async(student,profilePhoto,token)=>{

    try{
        const formData=new FormData();
        formData.append("photo", profilePhoto);
        formData.append(
            "student",
            new Blob([JSON.stringify(student)], { type: "application/json" })
          );
    const response=await axios.post('http://localhost:2004/admin/insertstudent',formData,{
        headers: { Authorization: `Bearer ${token}` },
  
    });
    return response.data;
    }
    catch(error)
    {
        throw new Error(error.response?.data);
    }
}