import { NavBar } from "../../../components/admin/Navbar";
import { SideBar } from "../../../components/admin/SideBar";
import { useReducer, useState } from "react";
import { registerReducer } from "../../../reducers/registerReducer";
import { message } from "antd";
import { adminRegisterStudent } from "../../../api/adminRegisterStudent";
import PasswordStrengthChecker from "../../../components/PasswordStrengthChecker";

export const AddStudent = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const intitalState = {
    name: "",
    email: "",
    phoneNumber: "",
    department: "",
    year: "",
    password: "",
  };
  const [profilePhoto, setProfilePhoto] = useState(null);

  
  const [
    { name, email, phoneNumber, department, year, password },
    registerDispatch,
  ] = useReducer(registerReducer, intitalState);

  const onPhotoChange = (e) => setProfilePhoto(e.target.files[0]);

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
  const onPasswordChange = (e) => {
    registerDispatch({
      type: "Password",
      payload: e.target.value,
    });
  };
  const onSubmitClick = async (e) => {
    e.preventDefault();
    const studentData = {
      name,
      email,
      phoneNumber,
      department,
      year,
      password,
    };
    console.log(studentData);
    e.preventDefault();
    try {
      
      const msg = await adminRegisterStudent(studentData,profilePhoto,token);
  
      message.success(msg);
      registerDispatch({ type: "Clear" });
      setProfilePhoto(null);
    } catch (error) {
      console.log(error.message);
      message.error(error.message);
    }
  };
  return (
    <div className="overflow-x-hidden  overflow-y-auto h-screen">
      <NavBar />
      <main className="flex gap-3">
        <SideBar />
        <div className="flex flex-1 justify-center items-center">
          <section className="-mt-[24rem] -mb-[19rem]">
            <div className="flex flex-col items-center justify-center px-4 py-4 mx-auto lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md bg-gray-100">
                <div className="p-3 space-y-3 sm:p-4">
                  <h1 className="text-xl font-bold leading-tight text-black">
                    Create an account (only for Students)
                  </h1>
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
                        name="department"
                        id="department"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        onChange={onDepartmentChange}
                        value={department}
                        required
                      >
                        <option value="" disabled>
                          Select Department
                        </option>
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
                    <div>
                      <label className="block mb-1 text-sm font-medium text-black">
                        Profile Photo
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                       
                        onChange={onPhotoChange}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-1 text-sm font-medium text-black"
                      >
                        Password
                      </label>
                      <PasswordStrengthChecker
                        password={password}
                        onPasswordChange={onPasswordChange}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={onSubmitClick}
                      className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                    >
                      Create an account
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
