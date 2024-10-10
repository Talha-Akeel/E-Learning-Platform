import { Link } from "react-router-dom"
import { use_user_store } from "../../stores/use_user_store";

export const Header = () => {
    const token = localStorage.getItem('token');
    const { is_authenticated, set_is_authenticated } = use_user_store();
    const move_to_login = () => {
        // localStorage.setItem('token', 2);
        set_is_authenticated(false);
    }
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
                    <Link to="/"><span className="btn btn-ghost text-xs sm:text-xl text-white">Online Learning Platform</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/"><span className="text-white text-lg">Home</span></Link></li>
                        <li><Link to="/"><span className="text-white text-lg">Courses</span></Link></li>
                        <li><Link to="/"><span className="text-white text-lg">About Us</span></Link></li>
                        {/* <li>
                            <details>
                                <summary className="text-white text-lg">Courses</summary>
                                <ul className="p-2">
                                    <li><a>MERN Stack</a></li>
                                    <li><a>Digital Marketing</a></li>
                                </ul>
                            </details>
                        </li> */}

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        is_authenticated ?
                            <>
                                <Link to="/student-account"><button className="btn mr-0 sm:mr-2 text-xs sm:text-lg">Account</button></Link> 
                                <Link to="/login"><button onClick={move_to_login} className="btn mr-0 sm:mr-2 text-xs sm:text-lg">Logout</button></Link>
                            </>
                            :
                            <>
                                <Link to="/login"><button className="btn mr-0 sm:mr-2 text-xs sm:text-lg">Login</button></Link>
                                <Link to="/signup"><button className="btn mr-0 sm:mr-2 text-xs sm:text-lg">Signup</button></Link>
                            </>
                    }

                    {/* {
                        token === '1' ?
                            <>
                                <Link to="/login"><button className="btn mr-0 sm:mr-2 text-xs sm:text-lg">Account</button></Link>
                                <Link to="/login"><button onClick={move_to_login} className="btn mr-0 sm:mr-2 text-xs sm:text-lg">Logout</button></Link>
                            </>
                            : null
                    }
                    {
                        token === '2' ?
                            <>
                                <Link to="/login"><button className="btn mr-0 sm:mr-2 text-xs sm:text-lg">Login</button></Link>
                                <Link to="/signup"><button className="btn mr-0 sm:mr-2 text-xs sm:text-lg">Signup</button></Link>
                            </>
                            : null
                } */}
                    {/* <a className="btn mr-0 sm:mr-2 text-xs sm:text-lg">Login</a>
    <a className="btn ml-0 sm:ml-2 text-xs sm:text-lg">Signup</a> */}
                </div>
            </div>
        </>
    )
}