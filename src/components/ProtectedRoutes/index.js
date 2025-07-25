import { Navigate } from "react-router-dom";

export const ProtectedRoutes=({children})=>{
    const token=localStorage.getItem('token');
    const user=JSON.parse(localStorage.getItem('user'));
   
    const isAuthenticated =token !==null && user !==null && user.userBase.role !==null
    console.log(`isAuthenticated: ${isAuthenticated}`);
    
    return  isAuthenticated? (children ): (<Navigate to="/login"/>)
}