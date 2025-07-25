import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { message, Table, Modal, Button } from "antd";
import { EmployerSidebar } from "../../../components/Employer/EmployerSidebar";
import { getJobApplications } from "../../../api/getJobApplications";

export const JobApplications = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const jobId = params.get("jobId");
  const token = JSON.parse(localStorage.getItem("token"));

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [resumeContent, setResumeContent] = useState("");

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await getJobApplications(jobId,token);
      if (response.status === 200) {
        setApplications(response.data);
        message.success("Fetched job applications successfully");
      }
    } catch (error) {
      message.error(error.message || "Failed to fetch job applications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [jobId]);

  const handleResumeClick = (resume) => {
    setResumeContent(resume);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setResumeContent("");
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      onHeaderCell: () => ({
        style: { backgroundColor: "#161a2d", color: "white" },
      }),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      onHeaderCell: () => ({
        style: { backgroundColor: "#161a2d", color: "white" },
      }),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      onHeaderCell: () => ({
        style: { backgroundColor: "#161a2d", color: "white" },
      }),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      onHeaderCell: () => ({
        style: { backgroundColor: "#161a2d", color: "white" },
      }),
    },
    {
      title: "University",
      dataIndex: "university",
      key: "university",
      onHeaderCell: () => ({
        style: { backgroundColor: "#161a2d", color: "white" },
      }),
    },
    {
      title: "Year",
      dataIndex: "yearInUnversity",
      key: "yearInUniversity",
      onHeaderCell: () => ({
        style: { backgroundColor: "#161a2d", color: "white" },
      }),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      onHeaderCell: () => ({
        style: { backgroundColor: "#161a2d", color: "white" },
      }),
      render: (status) => (
        <span
          className={
            status === "PENDING"
              ? "text-yellow-500"
              : status === "APPROVED"
              ? "text-green-500"
              : "text-red-500"
          }
        >
          {status}
        </span>
      ),
    },
    {
      title: "Resume",
      dataIndex: "resume",
      key: "resume",
      onHeaderCell: () => ({
        style: { backgroundColor: "#161a2d", color: "white" },
      }),
      render: (resume) => (
        <Button
          type="primary"
          onClick={() => handleResumeClick(resume)}
          className="bg-custom-blue hover:bg-blue-700"
        >
          View Resume
        </Button>
      ),
    },
  ];

  return (
    <div className="overflow-x-hidden overflow-y-hidden flex gap-7">
      <EmployerSidebar />
      <div className="flex-1 p-6">
         
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <span className="text-lg text-blue-500">Loading Applications...</span>
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={applications || []}
            rowKey="id"
            pagination={{ pageSize: 10 }}
            rowClassName={(record, index) =>
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }
            className="rounded-lg border border-gray-300 shadow-lg"
          />
        )}
        <Modal
          title="Resume"
          visible={isModalVisible}
          onCancel={closeModal}
          footer={null}
          width={800}
        >
          <iframe
            src={`data:application/pdf;base64,${resumeContent}`}
            title="Resume"
            width="100%"
            height="500px"
          />
        </Modal>
      </div>
    </div>
  );
};
