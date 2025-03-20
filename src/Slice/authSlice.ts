import { createSlice } from "@reduxjs/toolkit";
import { signUpPostCall } from "../Services/auth.service";
// Define the shape of the user state
interface AuthState {
  message: string | null;
  loading: boolean;
  error: string | null;
}


const initialState: AuthState = {
  message: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  
  extraReducers: (builder) => {
    builder
      .addCase(signUpPostCall.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpPostCall.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;  // Set the success message (string)
        state.error = null;
      })
      .addCase(signUpPostCall.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.message = null;  // Reset the message in case of error
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;