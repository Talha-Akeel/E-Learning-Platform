import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
        
        <div className="navbar bg-blue-500 px-0 sm:px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-blue-500 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a className="text-white">Home</a></li>
        <li>
          <a className="text-white">Courses</a>
          <ul className="p-2">
            <li><a>MERN Stack</a></li>
            <li><a>Digital Marketing</a></li>
          </ul>
        </li>
        <li><a className="text-white">About Us</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xs sm:text-xl text-white">Online Learning Platform</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className="text-white text-lg">Home</a></li>
      <li>
        <details>
          <summary className="text-white text-lg">Courses</summary>
          <ul className="p-2">
            <li><a>MERN Stack</a></li>
            <li><a>Digital Marketing</a></li>
          </ul>
        </details>
      </li>
      <li><a className="text-white text-lg">About Us</a></li>
      <li><a className="text-white text-lg">Become a Teacher</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login"><button className="btn mr-0 sm:mr-2 text-xs sm:text-lg">Login</button></Link>
    <Link to="/signup"><button className="btn mr-0 sm:mr-2 text-xs sm:text-lg">Signup</button></Link>
    {/* <a className="btn mr-0 sm:mr-2 text-xs sm:text-lg">Login</a>
    <a className="btn ml-0 sm:ml-2 text-xs sm:text-lg">Signup</a> */}
  </div>
</div>
        </>
    );
};

export default Header;