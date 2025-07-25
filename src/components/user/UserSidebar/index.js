import { FaBriefcase, FaBullseye, FaHome, FaSignOutAlt, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo1 from "../../../assets/employer.png";


export const UserSidebar = () => {
    const getStyles = ({ isActive }) => {
        return isActive
          ? "flex text-xl gap-2 align-center py-2 p-2 bg-slate-200 text-custom-blue rounded-tr-full rounded-b-full py-1"
          : "flex gap-1 text-xl gap-2 rounded-tr-full rounded-b-full hover:bg-slate-200 hover:text-custom-blue py-2 p-2";
      };
  return (
    <div>
      <aside className="flex flex-col gap-3 h-screen w-[220px] p-3 py-5 bg-custom-blue text-white ">
        <div className="flex gap-3">
          <img src={logo1} alt="logo" className="h-10 w-10 -mx-2 my-1" />
          <h1 className="font-bold my-2 text-xl font-serif text-slate-100">PlacementPulse</h1>
        </div>
        <div className="flex flex-col gap-7 my-10">
          <NavLink className={getStyles} to="/userhome">
            <span className="my-1">
              <FaHome />
            </span>
            <span>Home</span>
          </NavLink>
          <NavLink className={getStyles} to="/userjobs">
            <span className="my-1">
            <FaBullseye/>
            </span>
            <span>Jobs</span>
          </NavLink>
          <NavLink className={getStyles} to="/appliedjobs">
            <span className="my-1">
            <FaBriefcase/>
            </span>
            <span>Applied Jobs</span>
          </NavLink>
          <NavLink className={getStyles} to="/externalJobs">
            <span className="my-1">
              <FaUser />
            </span>
            <span>External Jobs</span>
          </NavLink>
          <NavLink className={getStyles} to="/userprofile">
            <span className="my-1">
              <FaUser />
            </span>
            <span>Profile</span>
          </NavLink>
          <NavLink className={getStyles} to="/login" onClick={()=>{localStorage.removeItem("user"); localStorage.removeItem("token")}}>
            <span className="my-1">
              <FaSignOutAlt/>
            </span>
            <span>Logout</span>
          </NavLink>
        </div>
      </aside>
    </div>
  );
};
