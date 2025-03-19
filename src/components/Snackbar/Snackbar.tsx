import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "../../Slice/snackbarSlice";
import { AppDispatch, RootState } from "../../Store/store";

const SnackBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { open, message, severity } = useSelector((state: RootState) => state.snackbar);

  
  const handleSnackbarClose = () => {
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000} 
      onClose={handleSnackbarClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleSnackbarClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
