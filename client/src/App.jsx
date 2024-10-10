import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Login from './components/layout/Login';
import Home from './components/layout/Home';
import CourseDetails from './components/layout/CourseDetails';
import Lectures from './components/layout/lectures';
import Signup from './components/layout/Signup';
import StudentAccount from './components/layout/StudentAccount';
import StudentPersonalInfo from './components/layout/StudentPersonalInfo';
import StudentCourses from './components/layout/StudentCourses';
import UpdatePersonalInfo from './components/layout/UpdatePersonalInfo';
import AddCourses from './components/layout/admin/AddCourses';
import AddLectures from './components/layout/admin/AddLectures';
import AdminAccount from './components/layout/admin/AdminAccount';

const App = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/course-detail/:id',
          element: <CourseDetails />
        },
        {
          path: '/lectures',
          element: <Lectures />
        },
        {
          path: '/signup',
          element: <Signup />
        },
        {
          path: '/student-account',
          element: <StudentAccount />,
          children:[
            {
              path: '/student-account',
              element: <StudentPersonalInfo />
            },
            {
              path: '/student-account/student-enrolled-courses',
              element: <StudentCourses />
            },
            {
              path: '/student-account/update-personal-info',
              element: <UpdatePersonalInfo />
            },
          ]
        },
        {
          path: '/admin-account',
          element: <AdminAccount />,
          children:[
            {
              path: '/admin-account',
              element: <AddCourses />
            },
            {
              path: '/admin-account/add-lectures',
              element: <AddLectures />
            },
          ]
        },
      ]
    },
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;
