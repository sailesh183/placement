import { ApplicationPerJob } from "../../../components/admin/Charts/ApplicationsPerJob"
import { JobByIndustry } from "../../../components/admin/Charts/JobByIndustry"
import { NavBar } from "../../../components/admin/Navbar"
import { SideBar } from "../../../components/admin/SideBar"

export const Analysis=()=>{
    return(
        <div className="overflow-x-hidden  overflow-y-autoh-screen">
            <NavBar />
            <main className="flex">
                <SideBar />
                <div className="flex flex-col flex-1 justify-center items-center gap-3">

                  <div className="flex flex-1 flex-col justify-center items-center">
                    <h1 className="font-bold text-2xl my-2 underline">Job Analysis</h1>
                    
                
                  <JobByIndustry/>
                  <h1 className="font-semibold text-xl">Jobs - Industry Wise</h1>
                  </div>
                  <div className="flex flex-1 flex-col justify-center items-center my-5">
                  <ApplicationPerJob/>
                  <h1 className="font-semibold text-xl">Applications Recieved - Job Wise</h1>
                  </div>
                </div>
            </main>
        </div>
    )
}