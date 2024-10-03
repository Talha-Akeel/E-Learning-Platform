import './App.css';
import Home_Page from './components/Home';
import Login_Page from './components/Login_Page';
import Signup_Page from './components/Signup_Page';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { routes } from './utils/routes';
import Header from './components/Header';
import { useEffect } from 'react';



function App() {
  const pathname = window.location.pathname;
  console.log(pathname);

  useEffect(()=>{

  },[pathname]);
  
  
  // const {pathname} = useLocation();
  return (
    
      <BrowserRouter>
      {/* {pathname === '/login' ? null : <Header />} */}
      {['/login', '/signup'].includes(pathname) ? null : <Header />}
        <Routes>
          {
            routes.map((route, index) => <Route key={index} path={route.path} element={route.element}>{route.children?.map((children, index) => <Route key={index} path={children.path} element={children.element} />)}</Route>)
          }
          {/* {
            routes.map(route => route)
          } */}
        </Routes>
      </BrowserRouter>

    
  );
}

export default App;
