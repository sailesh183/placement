import { useEffect, useState } from "react";
import { NavBar } from "../../../components/admin/Navbar";
import { SideBar } from "../../../components/admin/SideBar";
import { message, Table } from "antd";
import { ClipLoader } from "react-spinners";
import { fetchAllEmployers } from "../../../api/fetchAllEmployers";

export const ViewEmployers = () => {
  const [employers, setEmployers] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = JSON.parse(localStorage.getItem("token"));

  const fetchEmployers = async () => {
    try {
      setLoading(true);
      const response = await fetchAllEmployers(token);
      if (response.status === 200) {
        setEmployers(response.data);
        message.success("Successfully fetched students");
      }
    } catch (error) {
      message.error(error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchEmployers();
    }, 500); //timeout used for delay of fetching (to watch loader)
  }, []);

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
  ];

  return (
    <div className="overflow-x-hidden overflow-y-auto h-screen">
      <NavBar />
      <main className="flex gap-3 h-full">
        <SideBar />
        <div className="flex items-center justify-center flex-1 -my-10">
          {loading ? (
            <div className="flex justify-center items-center h-full w-full">
              <ClipLoader color="#1D4ED8" size={60} />
            </div>
          ) : (
            <Table
              columns={columns}
              dataSource={employers || []}
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
      </main>
    </div>
  );
};
