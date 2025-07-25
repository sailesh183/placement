import { UserSidebar } from "../../../components/user/UserSidebar";

export const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="overflow-x-hidden overflow-y-hidden flex gap-7">
      <UserSidebar />
      <div className="flex flex-1 justify-center items-center gap-10 py-12">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col items-center gap-4">
            <img
              src={`data:image/jpeg;base64,${user.userBase.profilePhoto}`}
              alt="profile photo"
              className="w-36 h-40 rounded-lg border-4 shadow-lg"
            />
            <h1 className="font-semibold text-xl text-center">Profile Photo</h1>
          </div>
          <div className="p-8 bg-gray-100 shadow-lg rounded-lg max-w-md w-full text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Profile Details
            </h1>
            <div className="space-y-4 text-left text-gray-600">
              <h2 className="text-lg">
                <span className="font-semibold text-black">Id:</span> {user.userBase.id}
              </h2>
              <h2 className="text-lg">
                <span className="font-semibold text-black">Email:</span>{" "}
                {user.userBase.email}
              </h2>
              <h2 className="text-lg">
                <span className="font-semibold text-black">Name:</span>{" "}
                {user.userBase.name}
              </h2>
              <h2 className="text-lg">
                <span className="font-semibold text-black">Phone Number:</span>{" "}
                {user.userBase.phoneNumber}
              </h2>
              <h2 className="text-lg">
                <span className="font-semibold text-black">Year:</span>{" "}
                {user.userBase.year}
              </h2>
              <h2 className="text-lg">
                <span className="font-semibold text-black">Department:</span>{" "}
                {user.userBase.department}
              </h2>
              <h2 className="text-lg">
                <span className="font-semibold text-black">Role:</span>{" "}
                {user.userBase.role}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
