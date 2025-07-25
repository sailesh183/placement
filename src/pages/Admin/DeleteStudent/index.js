import { useEffect, useState } from "react";
import { NavBar } from "../../../components/admin/Navbar";
import { SideBar } from "../../../components/admin/SideBar";
import { message, Table } from "antd";
import { fetchAllStudents } from "../../../api/fetchAllStudents";
import { FaTrash } from "react-icons/fa";
import { DeleteStudentData } from "../../../api/deleteStudentData";

export const DeleteStudent = () => {
  const [students, setStudents] = useState([]);
  const [flag, setFlag] = useState(false);
  const [filteredstudents, setFilteredstudents] = useState(students);
  const token = JSON.parse(localStorage.getItem("token"));

  const onTextChange=(e)=>{
    const searchValue = e.target.value
    const filtered=students.filter(student =>student.name.toLowerCase().includes(searchValue.toLowerCase()));
     setFilteredstudents(filtered);
  }
  const fetchStudents = async () => {
    try {
      const response = await fetchAllStudents(token);
      if (response.status === 200) {
        setStudents(response.data);
      }
    } catch (error) {
      message.error(error.response?.data);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [flag]);
useEffect(()=>{
  setFilteredstudents(students);
},[students]);
  const deleteStudent = async (id) => {
    try {
      const response = await DeleteStudentData(id,token);
      setFlag(!flag);
    
      message.success(response.data);
    } catch (error) {
      message.error(error.response?.data);
    }
  };

  const columns = [
    {
      title: "Student ID",
      dataIndex: "id",
      key: "id",
      onHeaderCell: () => ({
        style: { backgroundColor: "#263F81", color: "white" },
      }),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      onHeaderCell: () => ({
        style: { backgroundColor: "#263F81", color: "white" },
      }),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      onHeaderCell: () => ({
        style: { backgroundColor: "#263F81", color: "white" },
      }),
    },
    {
      title: "Phone number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      onHeaderCell: () => ({
        style: { backgroundColor: "#263F81", color: "white" },
      }),
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      onHeaderCell: () => ({
        style: { backgroundColor: "#263F81", color: "white" },
      }),
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      onHeaderCell: () => ({
        style: { backgroundColor: "#263F81", color: "white" },
      }),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <FaTrash
          onClick={() => deleteStudent(record.id)}
          style={{ cursor: "pointer", color: "red" }}
        />
      ),
      onHeaderCell: () => ({
        style: { backgroundColor: "#263F81", color: "white" },
      }),
    },
  ];

  return (
    <div className="overflow-x-hidden  overflow-y-auto h-screen">
      <NavBar />
      <main className="flex gap-3 h-full">
        <SideBar />
        <div className="flex flex-col my-36 mx-36">
        <input type="text" onChange={onTextChange} placeholder="enter student name to search" className="my-3 border-2 border-black rounded-xl w-96"/>
        <div className="flex items-center justify-center">
          <Table
            columns={columns}
            dataSource={filteredstudents || []}
            rowKey="id"
            pagination={{ pageSize: 10 }}
            rowClassName={
              (record, index) => (index % 2 === 0 ? "bg-gray-100" : "bg-white")
            }
            className="rounded-lg border border-gray-300 shadow-lg"
          />
        </div>
        </div>
      </main>
    </div>
  );
};
