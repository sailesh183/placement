import { EmployerSidebar } from "../../../components/Employer/EmployerSidebar";



export const EmployerHome=()=>{
    const user=JSON.parse(localStorage.getItem('user'));
    return(
        <div className="overflow-x-hidden overflow-y-hidden flex gap-7">
            <EmployerSidebar/>
            <div>
                <h1 className="font-bold text-2xl  my-9">Hi {user.userBase.contactPerson} , Welcome to PlacementPulse!!</h1>

               <div className="flex gap-2 text-xl">
               <p className="font-bold">Company:</p>
               <p>{user.userBase.companyName}</p>
               </div>
               <div className="flex gap-2 text-xl">
               <p className="font-bold">ContactPerson:</p>
               <p>{user.userBase.contactPerson}</p>
               </div>
               
            </div>
        </div>
    )
}