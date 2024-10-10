import { Link } from "react-router-dom";

const AdminAccountSidebar = () => {

    return (
        <div className="w-1/4">

            <Link to="/admin-account/"><div className="px-5 py-5 bg-gray-300 hover:bg-gray-500 border border-black">Add Courses</div></Link>
            <Link to="/admin-account/add-lectures"><div className="px-5 py-5 bg-gray-300 hover:bg-gray-500 border border-black">Add Lectures</div></Link>
            
        </div>
    );
};

export default AdminAccountSidebar;