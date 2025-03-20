import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import Price from "./pages/Price/Price";
import ExerciseTest from "./pages/ExerciseTest/ExerciseTest";
import SendOTP from "./pages/SendOTP/SendOTP";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/send-otp" element={<SendOTP />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/price" element={<Price />} />
          <Route path="/test" element={<ExerciseTest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
