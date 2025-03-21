import { createSlice } from "@reduxjs/toolkit";
import { sendForgotPasswordRequest } from "../Services/auth.service";

interface Forgotpass {
  email: string | null;
  loading: boolean;
  error: string | null;
  message: string | null; 
}


const initialState: Forgotpass = {
  email: null,
  loading: false,
  error: null,
  message: null,
};

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    resetForgotPasswordState: (state) => {
      state.email = null;
      state.loading = false;
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendForgotPasswordRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(sendForgotPasswordRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload?.message || "OTP sent successfully";
      })
      .addCase(sendForgotPasswordRequest.rejected, (state, action) => {
        state.loading = false;
        state.message = null;
        state.error = action.payload as string || "Failed to send OTP";
      });
  },
});

export const { resetForgotPasswordState } = forgotPasswordSlice.actions;

export default forgotPasswordSlice.reducer;
