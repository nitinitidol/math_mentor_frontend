import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for snackbar state
interface SnackbarState {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
}

const initialState: SnackbarState = {
  open: false,
  message: "",
  severity: "info", 
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    openSnackbar: (state, action: PayloadAction<{ message: string; severity: "success" | "error" | "info" | "warning" }>) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    closeSnackbar: (state) => {
      state.open = false;
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
