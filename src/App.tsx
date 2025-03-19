import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { Snackbar, Alert } from "@mui/material";
import { closeSnackbar } from "./redux/slices/snackBarSlice";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
//
function App() {
  const dispatch = useDispatch<AppDispatch>();

  // Access the snackbar state from Redux
  const { open, message, severity } = useSelector((state: RootState) => state.snackbar);

  // Function to close the snackbar
  const handleSnackbarClose = () => {
    dispatch(closeSnackbar());  // Close the snackbar by dispatching the action
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          vertical: "top", // Position it at the top of the screen
          horizontal: "right", // Position it at the right of the screen
        }}
      >
        <Alert onClose={handleSnackbarClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
