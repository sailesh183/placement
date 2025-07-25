import { useEffect, useState } from "react";
import { NavBar } from "../../../components/admin/Navbar";
import { SideBar } from "../../../components/admin/SideBar";
import { message, Table } from "antd";
import { FaTrash } from "react-icons/fa";
import { fetchAllEmployers } from "../../../api/fetchAllEmployers";
import { DeleteEmployerData } from "../../../api/deleteEmployerData";

export const DeleteEmployer = () => {
  const [employers, setEmployers] = useState([]);
  const [flag, setFlag] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));
  const fetchEmployers = async () => {
    try {
      const response = await fetchAllEmployers(token);
      if (response.status === 200) {
        setEmployers(response.data);
      }
    } catch (error) {
      message.error(error.response?.data);
    }
  };

  useEffect(() => {
    fetchEmployers();
  }, [flag]);

  const deleteEmployer = async (id) => {
    try {
      const response = await DeleteEmployerData(id,token);
      setFlag(!flag);
      message.success(response.data);
    } catch (error) {
      message.error(error.response?.data);
    }
  };

  const columns = [
    {
        title: "Employer ID",
        dataIndex: "id",
        key: "id",
        onHeaderCell: () => ({
          style: { backgroundColor: "#263F81", color: "white" },
        }),
      },
      {
        title: "Company Name",
        dataIndex: "companyName",
        key: "companyName",
        onHeaderCell: () => ({
          style: { backgroundColor: "#263F81", color: "white" },
        }),
      },
      {
        title: "Contact Person",
        dataIndex: "contactPerson",
        key: "contactPerson",
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
        title: "Industry",
        dataIndex: "industry",
        key: "industry",
        onHeaderCell: () => ({
          style: { backgroundColor: "#263F81", color: "white" },
        }),
      },
      {
        title: "Location",
        dataIndex: "location",
        key: "location",
        onHeaderCell: () => ({
          style: { backgroundColor: "#263F81", color: "white" },
        }),
      },
      {
        title: "Website",
        dataIndex: "website",
        key: "website",
        onHeaderCell: () => ({
          style: { backgroundColor: "#263F81", color: "white" },
        }),
        render: (text) => (
          <a href={text} target="_blank" className="text-blue-600" rel="noopener noreferrer">
            {text}
          </a>
        ),
      },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <FaTrash
          onClick={() => deleteEmployer(record.id)}
          style={{ cursor: "pointer", color: "red" }}
        />
      ),
      onHeaderCell: () => ({
        style: { backgroundColor: "#263F81", color: "white" },
      }),
    },
  ];

  return (
    <div className="overflow-x-hidden overflow-y-auto h-screen">
      <NavBar />
      <main className="flex gap-3 h-full">
        <SideBar />
        <div className="flex items-center justify-center flex-1 -mt-10">
          <Table
            columns={columns}
            dataSource={employers || []}
            rowKey="id"
            pagination={{ pageSize: 10 }}
            rowClassName={
              (record, index) => (index % 2 === 0 ? "bg-gray-100" : "bg-white")
            }
            className="rounded-lg border border-gray-300 shadow-lg"
          />
        </div>
      </main>
    </div>
  );
};
