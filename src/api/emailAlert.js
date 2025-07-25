import axios from 'axios';

export const emailAlert=async(job,eid,token)=>{
    try{
      const response =await axios.post(`http://localhost:2004/notification/sendemailNotification/${eid}`,job,
        {
          headers:{Authorization:`Bearer ${token}`}
        }
      );
      return response;
    }
    catch(error){
        throw new Error(error.response?.data);
    }
}