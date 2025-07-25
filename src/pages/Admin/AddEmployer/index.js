import { NavBar } from "../../../components/admin/Navbar";
import { SideBar } from "../../../components/admin/SideBar";
import { useReducer } from "react";
import { message } from "antd";
import { adminRegisterEmployer } from "../../../api/adminRegisterEmployer";
import PasswordStrengthChecker from "../../../components/PasswordStrengthChecker";
import { employerReducer } from "../../../reducers/employerReducer";

export const AddEmployer = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const initialState = {
    companyName: "",
    contactPerson: "",
    email: "",
    phoneNumber: "",
    industry: "",
    location: "",
    website: "",
    password: "",
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
      password,
    },
    registerDispatch,
  ] = useReducer(employerReducer, initialState);

  const onChange = (type) => (e) => {
    registerDispatch({
      type,
      payload: e.target.value,
    });
  };

  const onSubmitClick = async (e) => {
    e.preventDefault();

    const employerData = {
      companyName,
      contactPerson,
      email,
      phoneNumber,
      industry,
      location,
      website,
      password,
    };

    try {
      const msg = await adminRegisterEmployer(employerData,token);
      message.success(msg);
      registerDispatch({ type: "Clear" });
    } catch (error) {
      console.error(error.message);
      message.error(error.message);
    }
  };

  return (
    <div className="overflow-x-hidden overflow-y-auto h-screen">
      <NavBar />
      <main className="flex gap-3">
        <SideBar />
        <div className="flex flex-1 justify-center items-center">
          <section className="-mt-[15rem] -mb-[10rem]">
            <div className="flex flex-col items-center justify-center px-3 py-3 mx-auto lg:py-0">
              <div className="w-[50rem] bg-white rounded-lg shadow dark:border sm:max-w-md bg-gray-100">
                <div className="p-4 space-y-3 sm:p-4">
                  <h1 className="text-xl font-bold leading-tight text-black">
                    Create an Employer Account
                  </h1>
                  <form className="space-y-2">
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block mb-1 text-sm font-medium text-black"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        placeholder="ABC Pvt Ltd"
                        onChange={onChange("CompanyName")}
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
                        id="contactPerson"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        placeholder="John Doe"
                        onChange={onChange("ContactPerson")}
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
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        placeholder="contact@company.com"
                        onChange={onChange("Email")}
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
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        placeholder="+91-1234567890"
                        onChange={onChange("Phone")}
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        onChange={onChange("Industry")}
                        value={industry}
                        required
                      >
                        <option value="">Select Industry</option>
                        <option value="IT">IT</option>
                        <option value="Health">Health</option>
                        <option value="Finance">Finance</option>
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
                        id="location"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        placeholder="Hyderabad"
                        onChange={onChange("Location")}
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
                        type="text"
                        id="website"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        placeholder="https://company.com"
                        onChange={onChange("Website")}
                        value={website}
                        required
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
                        onPasswordChange={onChange("Password")}
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={onSubmitClick}
                      className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                    >
                      Create Employer Account
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
