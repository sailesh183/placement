import { NavBar } from "../../../components/admin/Navbar";
import { SideBar } from "../../../components/admin/SideBar";

export const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    return (
        <div className="overflow-x-hidden  overflow-y-autoh-screen">
            <NavBar />
            <main className="flex">
                <SideBar />
                <div className="flex flex-1 justify-center items-center">
                    <div className="p-6 bg-gray-200 shadow-lg rounded-lg max-w-sm w-full text-center relative -top-24"> {/* Adjusting position here */}
                        <h1 className="text-2xl font-bold mb-4">Profile Details</h1>
                        <div className="space-y-2 text-left">
                            <h2 className="text-lg"><span className="font-semibold">Id:</span> {user.userBase.id}</h2>
                            <h2 className="text-lg"><span className="font-semibold">Name:</span> {user.userBase.name}</h2>
                            <h2 className="text-lg"><span className="font-semibold">Email:</span> {user.userBase.email}</h2>
                            <h2 className="text-lg"><span className="font-semibold">Role:</span> {user.userBase.role}</h2>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
