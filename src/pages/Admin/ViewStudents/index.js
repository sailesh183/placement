import { useEffect, useState } from "react";
import { NavBar } from "../../../components/admin/Navbar";
import { SideBar } from "../../../components/admin/SideBar";
import { fetchAllStudents } from "../../../api/fetchAllStudents";
import { message, Table } from "antd";
import { ClipLoader } from "react-spinners";

export const ViewStudents = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [students, setStudents] = useState([]);
   const [filteredStudents, setFilteredStudents] = useState(students);
  const [loading, setLoading] = useState(true);

  const onTextChange=(e)=>{
    const searchValue = e.target.value
    const filtered=students.filter(student =>student.name.toLowerCase().includes(searchValue.toLowerCase()));
     setFilteredStudents(filtered);
  }
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await fetchAllStudents(token);
      if (response.status === 200) {
        console.log(response.data);
        setStudents(response.data);
        message.success("Successfully fetched students");
      }
    } catch (error) {
      message.error(error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(()=>{
      fetchStudents();
    },500);//timeout used for delay of fetching (to watch loader)
  }, []);
  useEffect(()=>{
    setFilteredStudents(students);
  },[students]);
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
      title: "Profile Photo",
      dataIndex: "profilePhoto", 
      key: "photo",
      render: (photo) => (
        <img
          src={`data:image/jpeg;base64,${photo}`} 
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover border"
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
          {loading ? (
            <div className="flex justify-center items-center h-full w-full">
              <ClipLoader color="#1D4ED8" size={60} />
            </div>
          ) : (
            <Table
              columns={columns}
              dataSource={filteredStudents || []}
              rowKey="id"
              pagination={{ pageSize: 10 }}
              rowClassName={
                (record, index) =>
                  index % 2 === 0 ? "bg-gray-100" : "bg-white" // Alternating row colors
              }
              className="rounded-lg border border-gray-300 shadow-lg"
            />
          )}
        </div>
        </div>
      </main>
    </div>
  );
};
