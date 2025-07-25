import { FaHome, FaSignOutAlt, FaUser,FaFileAlt, FaPlusCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo1 from "../../../assets/employer.png";


export const EmployerSidebar = () => {
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
          <NavLink className={getStyles} to="/employerhome">
            <span className="my-1">
              <FaHome />
            </span>
            <span>Home</span>
          </NavLink>
          <NavLink className={getStyles} to="/employeraddjob">
            <span className="my-1">
            <FaPlusCircle/>
            </span>
            <span>Add Jobs</span>
          </NavLink>
          <NavLink className={getStyles} to="/employerjobs">
            <span className="my-1">
            <FaFileAlt />
            </span>
            <span>Applications</span>
          </NavLink>
          <NavLink className={getStyles} to="/employerprofile">
            <span className="my-1">
              <FaUser />
            </span>
            <span>Profile</span>
          </NavLink>
          <NavLink className={getStyles} to="/login" onClick={()=>{localStorage.removeItem("user");
            localStorage.removeItem("token");
          }}>
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
