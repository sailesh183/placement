import axios from 'axios';

export const submitApplication=async(formData,token)=>{
  try {
    const response=await axios.post('http://localhost:2004/application/apply',formData,
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    );
    return response;
  } catch (error) {
    throw new Error(error.response?.dat);
  }
}