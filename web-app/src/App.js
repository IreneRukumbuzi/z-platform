import { CssBaseline } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import MultiFactorAuth from "./pages/MultiFactorAuth";
import { Toaster } from 'react-hot-toast';

import axios from "axios";
import { AppProvider } from "./AppProvider";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const accessToken = window.sessionStorage.getItem('access_token');
  const user = JSON.parse(window.sessionStorage.getItem('user'));
  const isAuthenticated = accessToken !== null && user !== null;

  // Use useNavigate to get the navigate function
  const navigate = useNavigate();

  return (
    <>
      <Toaster
        toastOptions={{ duration: 5000 }} />

      <CssBaseline />
      <AppProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify" element={<MultiFactorAuth />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/signup" element={<Signup />} />
          {isAuthenticated && <Route path="/" element={<Home />} />}
        </Routes>
      </AppProvider>
    </>
  );
}

export default App;
