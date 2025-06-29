import React from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Header from './components/Header/Header';
import RequiredAuth from './RequiredAuth';
import Blogs from './components/Blogs/Blogs';
import Courses from './components/Courses/Courses';
import { Toaster } from 'react-hot-toast';
import Contact from './pages/Contact/Contact';
import BlogDetails from './components/Blogs/BlogDetails';
/**
 * add browser router,
 * Routes and route path, element,
 * useNavigate, useParams(taking: path/:id)(for getting full info of routes,),useLocation,NavLink,
 *
 */
const App = () => {
    const isTrue = true;
    const navigate = useNavigate();

   return (
      <>
         {/* <Checkout/> */}
         {/* <Home /> */}
         {/* <LoginPage />
         <RegisterPage /> */}

         {/* Header */}
         <Header />
         <Toaster />
         {/* Routes */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route
               path="checkout/:courseId"
               element={
                  <RequiredAuth>
                   <Checkout />
                  </RequiredAuth>
               }
            />
            <Route path="checkout/:courseId" element={isTrue ? <Checkout /> : navigate('/login')} /> 
            <Route path="/login" element={<LoginPage />} /> 
            <Route path="/login" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/read" element={<BlogDetails/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/register" element={<RegisterPage />} /> 
            <Route path="/register" element={<Home />} />
            <Route path="*" element={<h1>404</h1>} />
         </Routes>
      </>
   );
};

export default App;
