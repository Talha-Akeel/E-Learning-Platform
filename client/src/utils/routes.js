// import Home_Page from "../components/Home";
// import Login_Page from "../components/Login_Page";
// import Signup_Page from "../components/Signup_Page";
import SignPage from '../components/Signup_Page.jsx';
import LoginPage from '../components/Login_Page.jsx';
import HomePage from '../components/Home.jsx';
import CourseDetailPage from '../components/Course_Detail_Page.jsx';

export const routes = [
    {
        path: "/signup", element: <SignPage />
    },
    {
        path: "/login", element: <LoginPage />
    },
    {
        path: "/", element: <HomePage />
    },
    {
        path: "/course-detail/:id", element: <CourseDetailPage />
    },
];
