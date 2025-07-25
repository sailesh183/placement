import axios from 'axios';

export const loginUser=async(user)=>{
    try {
        const response=await axios.post('http://localhost:2004/user/checklogin',user);
       return response;
    } catch (error) {
        throw new Error(error.response?.data?.message);
    }
}