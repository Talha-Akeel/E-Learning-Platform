import { Link, Outlet } from "react-router-dom";
import StudentAccountSidebar from "./StudentAccountSidebar";

const StudentAccount = () => {

    return (
        <div>
            <div className="text-center mt-10 text-2xl font-bold">Dashboard</div>

            <div className="flex mt-10 mb-10 mx-auto w-3/4">
                <StudentAccountSidebar />
                <Outlet />
            </div>
        </div>
        
    );
};

export default StudentAccount;