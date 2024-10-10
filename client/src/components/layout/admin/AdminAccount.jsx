import { Link, Outlet } from "react-router-dom";
import AdminAccountSidebar from "./AdminAccountSidebar";

const AdminAccount = () => {

    return (
        <div>
            <div className="text-center mt-10 text-2xl font-bold">Dashboard</div>

            <div className="flex mt-10 mb-10 mx-auto w-3/4">
                <AdminAccountSidebar />
                <Outlet />
            </div>
        </div>
        
    );
};

export default AdminAccount;