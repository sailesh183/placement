import { useEffect, useReducer, useState } from "react";
import { NavBar } from "../../../components/admin/Navbar";
import { SideBar } from "../../../components/admin/SideBar";
import { fetchAllStudents } from "../../../api/fetchAllStudents";
import { message, Modal, Table } from "antd";
import { FaEdit } from "react-icons/fa";
import { registerReducer } from "../../../reducers/registerReducer";
import { updateStudentData } from "../../../api/updateStudentData";

export const UpdateStudent = () => {
  const [students, setStudents] = useState([]);
  const [flag, setFlag] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [updateId, setUpdateId] = useState();
  const token = JSON.parse(localStorage.getItem("token"));

  const showModal = (sid) => {
    const student = students.find(({ id }) => id === sid);
    if (student) {
      registerDispatch({ type: "Name", payload: student.name });
      registerDispatch({ type: "Email", payload: student.email });
      registerDispatch({ type: "Phno", payload: student.phoneNumber });
      registerDispatch({ type: "Department", payload: student.department });
      registerDispatch({ type: "Year", payload: student.year });
      registerDispatch({ type: "Password", payload: student.password });
      setUpdateId(sid);
      setIsModelOpen(true);
    }
  };
  const handleCancel = () => {
    setIsModelOpen(false);
  };
  const onUpdateClick = async () => {
   
    const updatedstudent = { name, email, phoneNumber, department, year };
     try{
        const response =await updateStudentData(updateId,updatedstudent,token);
        if(response.status===200)
        {
            message.success("updated successfully");
            
            setFlag(!flag);
            
            handleCancel();
        }
     }
     catch(error)
     {
        message.error(error.response?.data);
     }
  };
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
        <FaEdit
          onClick={() => showModal(record.id)}
          style={{ cursor: "pointer", color: "blue" }}
        />
      ),
      onHeaderCell: () => ({
        style: { backgroundColor: "#263F81", color: "white" },
      }),
    },
  ];
  const intitalState = {
    name: "",
    email: "",
    phoneNumber: "",
    department: "",
    year: "",
  };
  const [{ name, email, phoneNumber, department, year }, registerDispatch] =
    useReducer(registerReducer, intitalState);

  const onNameChange = (e) => {
    registerDispatch({
      type: "Name",
      payload: e.target.value,
    });
  };
  const onEmailChange = (e) => {
    registerDispatch({
      type: "Email",
      payload: e.target.value,
    });
  };
  const onPhnoChange = (e) => {
    registerDispatch({
      type: "Phno",
      payload: e.target.value,
    });
  };
  const onDepartmentChange = (e) => {
    registerDispatch({
      type: "Department",
      payload: e.target.value,
    });
  };
  const onYearChange = (e) => {
    registerDispatch({
      type: "Year",
      payload: e.target.value,
    });
  };
  return (
    <div className="overflow-x-hidden  overflow-y-auto h-screen">
      <NavBar />
      <main className="flex gap-3">
        <SideBar />
        <div className="flex items-center justify-center flex-1 -mt-10">
          <Table
            columns={columns}
            dataSource={students || []}
            rowKey="id"
            pagination={{ pageSize: 10 }}
            rowClassName={(record, index) =>
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }
            className="rounded-lg border border-gray-300 shadow-lg"
          />
        </div>
      </main>
      <div>
        <Modal
          title="Update Student"
          open={isModelOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <section className="my-4">
            <div className="flex flex-col items-center justify-center px-4 py-4 mx-auto lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md bg-gray-100">
                <div className="p-3 space-y-3 sm:p-4">
                
                  <form className="space-y-3">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-1 text-sm font-medium text-black"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        placeholder="Ram"
                        onChange={onNameChange}
                        value={name}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-1 text-sm font-medium text-black"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        placeholder="name@company.com"
                        onChange={onEmailChange}
                        value={email}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-1 text-sm font-medium text-black"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        placeholder="+91-1234567890"
                        onChange={onPhnoChange}
                        value={phoneNumber}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="department"
                        className="block mb-1 text-sm font-medium text-black"
                      >
                        Department
                      </label>
                      <select
                        id="department"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        onChange={onDepartmentChange}
                        value={department}
                        required
                      >
                        <option value="">Select Department</option>
                        <option value="CSE-H">CSE-H</option>
                        <option value="CSE-R">CSE-R</option>
                        <option value="ECE">ECE</option>
                        <option value="CSIT">CSIT</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="year"
                        className="block mb-1 text-sm font-medium text-black"
                      >
                        Year
                      </label>
                      <select
                        id="year"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        onChange={onYearChange}
                        value={year}
                        required
                      >
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      onClick={onUpdateClick}
                      className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                    >
                      Update Student
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </Modal>
      </div>
    </div>
  );
};
