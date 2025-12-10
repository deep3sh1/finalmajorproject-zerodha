import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './landing_page/home/HomePage';
import PricingPage from './landing_page/pricing/PricingPage';
import AboutPage from './landing_page/about/AboutPage';
import Productpage from './landing_page/product/Productpage';
import Signup from './landing_page/signup/Signup';
import Supportpage from './landing_page/support/Supportpage';
import Notfound from './landing_page/Notfound';
import Login from './landing_page/Login';

// ✅ DASHBOARD IMPORT
import DashboardApp from './dashboard/dashboardApp';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

// Wrapper that only renders Navbar/Footer on non-dashboard routes
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavFooter = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!hideNavFooter && <Navbar />}
      {children}
      {!hideNavFooter && <Footer />}
    </>
  );
};

// App component that includes Routes
const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/productpage" element={<Productpage />} />
      <Route path="/pricingpage" element={<PricingPage />} />
      <Route path="/supportpage" element={<Supportpage />} />
      <Route path="/login" element={<Login />} />

      {/* Dashboard */}
      <Route path="/dashboard/*" element={<DashboardApp />} />

      <Route path="/*" element={<Notfound />} />
    </Routes>
  </Layout>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
