import { useNavigate, useParams } from "react-router-dom";
import { useReducer, useState } from "react";
import { UserSidebar } from "../../../components/user/UserSidebar";
import { message } from "antd";
import { submitApplication } from "../../../api/submitApplication";

export const UserApplication = () => {
  const { id } = useParams(); // Job ID from route param
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));
  const studentId = user.userBase.id;
  const navigate = useNavigate();

  const initialState = {
    name: "",
    university: "",
    email: "",
    phoneNumber: "",
    year: "",
  };

  const [resume, setResume] = useState(null);
  const [{ name, university, email, phoneNumber, year }, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      [action.type]: action.payload,
    }),
    initialState
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      message.error("Please upload your resume");
      return;
    }

    const formData = new FormData();
    formData.append("studentId", studentId);
    formData.append("jobId", id);
    formData.append("name", name);
    formData.append("university", university);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("yearInUniversity", year);
    formData.append("resume", resume);

    try {
      const response = await submitApplication(formData,token);
      if (response.status === 201) {
        message.success(response.data);
        navigate("/userjobs");
      }
    } catch (error) {
      message.error(error);
    }
  };

  return (
    <div className="overflow-x-hidden overflow-y-auto h-screen">
      <main className="flex gap-3">
        <UserSidebar />
        <div className="flex flex-1 justify-center items-center">
          <section className="-mt-[15rem] -mb-[10rem]">
            <div className="flex flex-col items-center justify-center px-3 py-3 mx-auto lg:py-0">
              <div className="w-[50rem] bg-white rounded-lg shadow dark:border sm:max-w-md bg-gray-100">
                <div className="p-4 space-y-3 sm:p-4">
                  <h1 className="text-xl font-bold leading-tight text-black">
                    Apply for Job
                  </h1>
                  <form className="space-y-2" onSubmit={onSubmit}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-1 text-sm font-medium text-black"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="university"
                        className="block mb-1 text-sm font-medium text-black"
                      >
                        University
                      </label>
                      <input
                        type="text"
                        id="university"
                        name="university"
                        value={university}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
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
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
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
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="year"
                        className="block mb-1 text-sm font-medium text-black"
                      >
                        Year in University
                      </label>
                      <select
                        id="year"
                        name="year"
                        value={year}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        required
                      >
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="resume"
                        className="block mb-1 text-sm font-medium text-black"
                      >
                        Resume (PDF)
                      </label>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
