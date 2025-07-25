import axios from 'axios';

export const adminRegisterEmployer=async(employer,token)=>{

    try{
        const response =await axios.post('http://localhost:2004/admin/insertemployer',employer,
            {
                headers:{Authorization:`Bearer ${token}`}
            }
        );
        return response.data;
    }
    catch(error)
    {
        throw new Error(error.response?.data);
    }
}