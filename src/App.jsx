import React, { useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landingpage from './pages/Landingpage';
import Login from './auth/Login';
import Register from './auth/Register';
import AdminPage from './pages/AdminPage';
import CreateProductForm from './components/CreateProductForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserStore } from './stores/useUserStore';
import FetchProduct from './pages/FetchProduct';
import Data from './pages/Data';
import ProductDetail from './pages/ProductDetail';
import Slider from 'react-slick';
import Footer from './components/Footer';

const App = () => {
  const Navigate = useNavigate();
  const { user, checkAuth } = useUserStore();

  // useEffect(() => {
  //   checkAuth(); // Ensure user authentication state is checked
  // }, [checkAuth]);

  console.log('Logged in user:', user); // Debugging user role

  return (
    <div>
      <Navbar />

    
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/product" element={<FetchProduct/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/signup" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/create" element={user ? <CreateProductForm /> : <Navigate to="/login" />} />
        <Route
          path="/secret-dashboard"
          element={user?.user?.role === 'admin' ? <AdminPage /> : <Navigate to="/login" />}
        />
		{/* <Route path="/admin" element={<AdminPage/>} /> */}
      </Routes>
      <ToastContainer />
      <Footer/>
    </div>
  );
};

export default App;
