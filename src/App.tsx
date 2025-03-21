import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import Price from "./pages/Price/Price";
import ExerciseTest from "./pages/ExerciseTest/ExerciseTest";
import SendOTP from "./pages/SendOTP/SendOTP";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import SnackBar from "./components/Snackbar/Snackbar";

function App() { 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/send_otp" element={<SendOTP />} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/price" element={<Price />} />
          <Route path="/test" element={<ExerciseTest />} />
        </Routes>
      </BrowserRouter>
     <SnackBar />
    </>
  );
}

export default App;
