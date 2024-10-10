import { Link } from "react-router-dom";

const StudentAccountSidebar = () => {

    return (
        <div className="w-1/4">

            <Link to="/student-account/"><div className="px-5 py-5 bg-gray-300 hover:bg-gray-500 border border-black">Personal Information</div></Link>
            <Link to="/student-account/student-enrolled-courses"><div className="px-5 py-5 bg-gray-300 hover:bg-gray-500 border border-black">Courses</div></Link>
            <Link to="/student-account/update-personal-info"><div className="px-5 py-5 bg-gray-300 hover:bg-gray-500 border border-black">Update Personal Information</div></Link>
            
        </div>
    );
};

export default StudentAccountSidebar;