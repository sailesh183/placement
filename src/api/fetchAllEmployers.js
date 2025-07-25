import axios from 'axios';

export const fetchAllEmployers=async(token)=>{
    try {
        const response = await axios.get('http://localhost:2004/admin/getallemployers',
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        return response;
    } catch (error) {
        throw new Error(error.response?.data?.message);
    }
}