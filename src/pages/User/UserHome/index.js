import { UserNavbar } from "../../../components/user/UserNavbar";
import { UserSidebar } from "../../../components/user/UserSidebar";

export const UserHome = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="overflow-x-hidden overflow-y-hidden flex h-screen">
      <UserSidebar />
      <div className="flex flex-col flex-1 gap-3">
        <UserNavbar />
        <div className="flex my-2">
          <h1 className="font-bold text-2xl mx-3">
            Hi {user.userBase.name}, Welcome to PlacementPulse!!
          </h1>
        </div>
      </div>
    </div>
  );
};
