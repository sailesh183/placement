import { NavLink } from "react-router-dom";
import {
  FaPlus,
  FaEye,
  FaEdit,
  FaTrash,
  FaHome,
  FaUser,
  FaUsers,
  FaCaretDown,
  FaCaretUp,
  FaBuilding,
  FaChartBar,
} from "react-icons/fa";
import { useState } from "react";

export const SideBar = () => {
  const [isEmployerDropdownOpen, setEmployerDropdownOpen] = useState(false);
  const [isStudentDropdownOpen, setStudentDropdownOpen] = useState(false);

  const getStyles = ({ isActive }) => {
    return isActive
      ? "flex align-center py-2 p-2 bg-blue-800 text-white rounded-tr-full rounded-b-full py-1 gap-1"
      : "flex gap-1 rounded-tr-full rounded-b-full hover:bg-blue-800 hover:text-white py-2 p-2";
  };

  const toggleEmployerDropdown = () => {
    setEmployerDropdownOpen(!isEmployerDropdownOpen);
  };
  const toggleStudentDropdown = () => {
    setStudentDropdownOpen(!isStudentDropdownOpen);
  };
  return (
    <div>
      <aside className="flex flex-col gap-7 h-screen w-[200px] border-r-2 p-3 py-5 my-2">
        <NavLink className={getStyles} to="/adminhome">
          <span className="my-1">
            <FaHome />
          </span>
          <span>Home</span>
        </NavLink>
        <NavLink className={getStyles} to="/jobanalysis">
              <span className="my-1">
             <FaChartBar/>
              </span>
              <span>Analysis</span>
            </NavLink>
        {/*student dropdown*/}
        <button
          onClick={toggleStudentDropdown}
          className="flex items-center justify-between gap-1 rounded-tr-full rounded-b-full hover:bg-blue-800 hover:text-white py-2 p-2"
        >
          <div className="flex items-center gap-1">
            <span className="my-1">
              <FaUsers />
            </span>
            <span>Students</span>
          </div>
          <span className="my-1">
            {isStudentDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
          </span>
        </button>
        {isStudentDropdownOpen && (
          <div className="flex flex-col gap-3 pl-5">
            <NavLink className={getStyles} to="/addstudent">
              <span className="my-1">
                <FaPlus />
              </span>
              <span>Add Student</span>
            </NavLink>
            <NavLink className={getStyles} to="/viewstudents">
              <span className="my-1">
                <FaEye />
              </span>
              <span>View Students</span>
            </NavLink>
            <NavLink className={getStyles} to="/updatestudent">
              <span className="my-1">
                <FaEdit />
              </span>
              <span>Update Student</span>
            </NavLink>
            <NavLink className={getStyles} to="/deletestudent">
              <span className="my-1">
                <FaTrash />
              </span>
              <span>Delete Student</span>
            </NavLink>
          </div>
        )}
        {/* Employer Dropdown */}
        <button
          onClick={toggleEmployerDropdown}
          className="flex items-center justify-between gap-1 rounded-tr-full rounded-b-full hover:bg-blue-800 hover:text-white py-2 p-2"
        >
          <div className="flex items-center gap-1">
            <span className="my-1">
              <FaBuilding />
            </span>
            <span>Employers</span>
          </div>
          <span className="my-1">
            {isEmployerDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
          </span>
        </button>
        {isEmployerDropdownOpen && (
          <div className="flex flex-col gap-3 pl-5">
            <NavLink className={getStyles} to="/addemployer">
              <span className="my-1">
                <FaPlus />
              </span>
              <span>Add Employer</span>
            </NavLink>
            <NavLink className={getStyles} to="/viewemployers">
              <span className="my-1">
                <FaEye />
              </span>
              <span>View Employers</span>
            </NavLink>
            <NavLink className={getStyles} to="/updateemployer">
              <span className="my-1">
                <FaEdit />
              </span>
              <span>Update Employer</span>
            </NavLink>
            <NavLink className={getStyles} to="/deleteemployer">
              <span className="my-1">
                <FaTrash />
              </span>
              <span>Delete Employer</span>
            </NavLink>
          </div>
        )}
        <NavLink className={getStyles} to="/profile">
          <span className="my-1">
            <FaUser />
          </span>
          <span>Profile</span>
        </NavLink>
      </aside>
    </div>
  );
};
