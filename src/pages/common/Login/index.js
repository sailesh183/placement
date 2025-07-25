import { useState } from "react";
import logo1 from "../../../assets/employer.png";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../api/loginUser";
import { message } from "antd";
export const Login = () => {
  const navigate = useNavigate();
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
   const onEmailChange=(e)=>{
     setEmail(e.target.value);
   }
   const onPasswordChange=(e)=>{
    setPassword(e.target.value);
   }
   const onLoginClick=async(e)=>{
    e.preventDefault();
      const user={email,password};
      try{
           const resp=await loginUser(user);
           
           if (resp.status === 200) {
            message.success("Login Successful");
            // console.log(resp.data.role);
            localStorage.setItem("user", JSON.stringify(resp.data));
            localStorage.setItem("token", JSON.stringify(resp.data.token));
            
            if (resp.data.role === "ADMIN") navigate("/adminhome");
            else if (resp.data.role === "Student") navigate("/userhome");
            else if (resp.data.role === "Employer") navigate("/employerhome");
          }
      }
      catch(error)
      {
        console.log(error.message);

        message.error(error.message);
      }
   }
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 className="flex items-center mb-6 text-3xl font-semibold text-blue-800">
          <img className="w-8 h-8 mr-2" src={logo1} alt="logo" />
          PlacementPulse
        </h1>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-100">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black text-3xl ">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={onEmailChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-black"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={onPasswordChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>

              <button
                type="submit"
                onClick={onLoginClick}
                className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-black">
                Don’t have an user account yet?{" "}
                <button
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  onClick={() => navigate("/register")}
                >
                  Sign up
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
