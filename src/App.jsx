import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "./store/apiUrl";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// Public Routes
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactUsPage from "./pages/ContactUsPage";

// login & Registration
import SignIn from "./components/Login/SignIn";
import SignUp from "./components/Login/SignUp";

// User Protected Route
import MyUsage from "./pages/MyUsage";
import MyDistribution from "./pages/MyDistribution";
import MyLeakageReports from "./pages/MyLeakageReports";

// Admin Protected Routes
import Dashboard from "./components/Admin/pages/Dashboard";
import ManageUsage from "./components/Admin/pages/ManageUsage";
import ManageDistribution from "./components/Admin/pages/ManageDistribution";
import ManageLeakages from "./components/Admin/pages/ManageLeakages";
import ManageUsers from "./components/Admin/pages/ManageUsers";
import ManageContactMessages from "./components/Admin/pages/ManageContactMessages";

// Error 404
import Error404 from "./pages/Error404";

// To Protect Routes
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  
  return (
    <>
      <div className={"app"}>
        <ToastContainer />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />

          {/* login & Registration */}
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />

          {/* User Protected Route */}
          <Route
            path="/my-usage"
            element={
              <ProtectedRoute element={MyUsage} requiredRoles={["user"]} />
            }
          />
          <Route
            path="/my-distribution"
            element={
              <ProtectedRoute element={MyDistribution} requiredRoles={["user"]} />
            }
          />
          <Route
            path="/my-leakage-reports"
            element={
              <ProtectedRoute element={MyLeakageReports} requiredRoles={["user"]} />
            }
          />

          {/* Admin Protected Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute element={Dashboard} requiredRoles={["admin"]} />
            }
          />
          <Route
            path="/admin/manage-usage"
            element={
              <ProtectedRoute element={ManageUsage} requiredRoles={["admin"]} />
            }
          />
          <Route
            path="/admin/manage-distribution"
            element={
              <ProtectedRoute element={ManageDistribution} requiredRoles={["admin"]} />
            }
          />
          <Route
            path="/admin/manage-leakages"
            element={
              <ProtectedRoute element={ManageLeakages} requiredRoles={["admin"]} />
            }
          />
          <Route
            path="/admin/manage-users"
            element={
              <ProtectedRoute element={ManageUsers} requiredRoles={["admin"]} />
            }
          />
          <Route
            path="/admin/manage-contact-messages"
            element={
              <ProtectedRoute element={ManageContactMessages} requiredRoles={["admin"]} />
            }
          />

          {/* Error 404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
  </>
  );
};

export default App;
