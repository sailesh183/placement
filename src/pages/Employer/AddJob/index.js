import { useReducer } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { JobReducer } from "../../../reducers/JobReducer";
import { AddJobPosting } from "../../../api/AddJobPosting";
import { EmployerSidebar } from "../../../components/Employer/EmployerSidebar";
import { emailAlert } from "../../../api/emailAlert";

export const AddJob = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));
  const initialState = {
    title: "",
    description: "",
    location: "",
    salary: "",
  };

  const [{ title, description, location, salary }, jobDispatch] = useReducer(
    JobReducer,
    initialState
  );

  const onChange = (type) => (e) => {
    jobDispatch({
      type,
      payload: e.target.value,
    });
  };

  const onSubmitClick = async (e) => {
    e.preventDefault();

    if (!title || !description || !location || !salary) {
      return toast.error("All fields are required!");
    }
    const jobData = {
      title,
      description,
      location,
      salary,
    };

    try {
      const response = await AddJobPosting(jobData, user.userBase.id,token);
      if (response.status === 200) {
        // message.success(response.data);
       
        toast.success(response.data);
        jobDispatch({ type: "Clear" });
        try {
          const response1 = await emailAlert(jobData,user.userBase.id,token);
          if (response1.status === 200) {
            
            toast.success(response1.data);
          }
        } catch (error) {
          toast.error("Failed to send email alert.");
        }
      }
    } catch (error) {
      toast.error("Failed to add job.");
    }
  };

  return (
    <div className="overflow-x-hidden overflow-y-auto h-screen">
      <main className="flex gap-3">
        <EmployerSidebar />
        <div className="flex flex-1 justify-center items-center">
          <section className="-mt-[15rem] -mb-[10rem]">
            <div className="flex flex-col items-center justify-center px-3 py-3 mx-auto lg:py-0">
              <div className="w-[50rem] bg-white rounded-lg shadow dark:border sm:max-w-md bg-gray-100">
                <div className="p-4 space-y-3 sm:p-4">
                  <h1 className="text-xl font-bold leading-tight text-black">
                    Add a New Job
                  </h1>
                  <form className="space-y-2">
                    <div>
                      <label
                        htmlFor="title"
                        className="block mb-1 text-sm font-medium text-black"
                      >
                        Job Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        placeholder="Software Engineer"
                        onChange={onChange("Title")}
                        value={title}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block mb-1 text-sm font-medium text-black"
                      >
                        Job Description
                      </label>
                      <textarea
                        id="description"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block h-52 w-full p-2"
                        placeholder="Job description here"
                        onChange={onChange("Description")}
                        value={description}
                        required
                      ></textarea>
                    </div>
                    <div>
                      <label
                        htmlFor="location"
                        className="block mb-1 text-sm font-medium text-black"
                      >
                        Job Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        placeholder="Location"
                        onChange={onChange("Location")}
                        value={location}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="salary"
                        className="block mb-1 text-sm font-medium text-black"
                      >
                        Salary
                      </label>
                      <input
                        type="number"
                        id="salary"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
                        placeholder="50000"
                        onChange={onChange("Salary")}
                        value={salary}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={onSubmitClick}
                      className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                    >
                      Add Job
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <ToastContainer/>
    </div>
  );
};
