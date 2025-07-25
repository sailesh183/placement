import { useEffect, useReducer, useState } from "react";
import { NavBar } from "../../../components/admin/Navbar";
import { SideBar } from "../../../components/admin/SideBar";
import { message, Modal, Table } from "antd";
import { FaEdit } from "react-icons/fa";
import { employerReducer } from "../../../reducers/employerReducer";
import { fetchAllEmployers } from "../../../api/fetchAllEmployers";
import { updateEmployerData } from "../../../api/updateEmployerData";

export const UpdateEmployer = () => {
  const [employers, setEmployers] = useState([]);
  const [flag, setFlag] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const token = JSON.parse(localStorage.getItem("token"));

  const initialState = {
    companyName: "",
    contactPerson: "",
    email: "",
    phoneNumber: "",
    industry: "",
    location: "",
    website: "",
  };

  const [
    {
      companyName,
      contactPerson,
      email,
      phoneNumber,
      industry,
      location,
      website,
    },
    dispatch,
  ] = useReducer(employerReducer, initialState);

  const fetchEmployers = async () => {
    try {
      const response = await fetchAllEmployers(token);
      if (response.status === 200) setEmployers(response.data);
    } catch (error) {
      message.error(error.response?.data || "Failed to fetch employers");
    }
  };

  const showModal = (id) => {
    const employer = employers.find((emp) => emp.id === id);
    if (employer) {
      dispatch({ type: "CompanyName", payload: employer.companyName });
      dispatch({ type: "ContactPerson", payload: employer.contactPerson });
      dispatch({ type: "Email", payload: employer.email });
      dispatch({ type: "Phone", payload: employer.phoneNumber });
      dispatch({ type: "Industry", payload: employer.industry });
      dispatch({ type: "Location", payload: employer.location });
      dispatch({ type: "Website", payload: employer.website });
      setUpdateId(id);
      setIsModalOpen(true);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch({ type: "Clear" });
  };

  const handleUpdate = async () => {
    const updatedEmployer = {
      companyName,
      contactPerson,
      email,
      phoneNumber,
      industry,
      location,
      website,
    };
    try {
      const response = await updateEmployerData(updateId, updatedEmployer,token);
      if (response.status === 200) {
        message.success("Employer updated successfully");
        setFlag(!flag);
        handleCancel();
      }
    } catch (error) {
      message.error(error.response?.data || "Failed to update employer");
    }
  };

  useEffect(() => {
    fetchEmployers();
  }, [flag]);

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
      title: "Phone Number",
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
      render: (text) => (
        <a
          href={text}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          {text}
        </a>
      ),
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


  return (
    <div className="overflow-x-hidden overflow-y-auto h-screen">
      <NavBar />
      <main className="flex gap-3">
        <SideBar />
        <div className="flex items-center justify-center flex-1 -mt-10">
          <Table
            columns={columns}
            dataSource={employers}
            rowKey="id"
            pagination={{ pageSize: 10 }}
            className="rounded-lg border border-gray-300 shadow-lg"
          />
        </div>
      </main>
      <Modal
        title="Update Employer"
        open={isModalOpen}
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
                      htmlFor="companyName"
                      className="block mb-1 text-sm font-medium text-black"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                      placeholder="ABC Pvt Ltd"
                      onChange={(e) =>
                        dispatch({
                          type: "CompanyName",
                          payload: e.target.value,
                        })
                      }
                      value={companyName}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contactPerson"
                      className="block mb-1 text-sm font-medium text-black"
                    >
                      Contact Person
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      id="contactPerson"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                      placeholder="John Doe"
                      onChange={(e) =>
                        dispatch({
                          type: "ContactPerson",
                          payload: e.target.value,
                        })
                      }
                      value={contactPerson}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1 text-sm font-medium text-black"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                      placeholder="contact@company.com"
                      onChange={(e) =>
                        dispatch({ type: "Email", payload: e.target.value })
                      }
                      value={email}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block mb-1 text-sm font-medium text-black"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                      placeholder="+91-1234567890"
                      onChange={(e) =>
                        dispatch({
                          type: "Phone",
                          payload: e.target.value,
                        })
                      }
                      value={phoneNumber}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="block mb-1 text-sm font-medium text-black"
                    >
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                      onChange={(e) =>
                        dispatch({
                          type: "Industry",
                          payload: e.target.value,
                        })
                      }
                      value={industry}
                      required
                    >
                      <option value="">Select Industry</option>
                      <option value="IT">IT</option>
                      <option value="Finance">Finance</option>
                      <option value="Health">Health</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block mb-1 text-sm font-medium text-black"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                      placeholder="Hyderabad"
                      onChange={(e) =>
                        dispatch({
                          type: "Location",
                          payload: e.target.value,
                        })
                      }
                      value={location}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block mb-1 text-sm font-medium text-black"
                    >
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      id="website"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                      placeholder="www.company.com"
                      onChange={(e) =>
                        dispatch({
                          type: "Website",
                          payload: e.target.value,
                        })
                      }
                      value={website}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={handleUpdate}
                    className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                  >
                    Update Employer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Modal>
    </div>
  );
};
