import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { openSnackbar } from "./snackBarSlice";
import axios from 'axios';


export const signUpPostCall = createAsyncThunk(
    "auth/signup",
    async (user: any, { dispatch, rejectWithValue }) => {
      try {
        const response = await axios.post("http://103.204.189.95:5003/auth/signup", user);
        console.log("Full response:", response);
        if (response.data.status) {
          return response.data.message;
        } else {
          // Handle case when status is false but HTTP status is 200
          console.log("API returned status false:", response.data);
          console.log(response.data.code===409)
          dispatch(openSnackbar({ message:response.data.message, severity: "error" }));
          return rejectWithValue(response.data.message || "Operation failed");
        }
        //it wont enter the catch block as status is not being set to 409 it stays 200
        //we recieve the code 409 in a json from backend so it wont enter the catch block
      } catch (error: any) {
        // Enhanced error logging
        console.log("Error object:", error);
        console.log("Error response:", error.response);
        console.log("Error message:", error.message);
        
        if (error.response) {
          // Handle specific status codes
          if (error.response.status === 409) {
            console.log(error.response.status);
            dispatch(openSnackbar({ message: "User already exists", severity: "error" }));
          } else {
            dispatch(openSnackbar({ 
              message: error.response.data.message || "Request failed", 
              severity: "error" 
            }));
          }
          return rejectWithValue(error.response.data.message || "Request failed");
        } else if (error.request) {
          // Request was made but no response received
          dispatch(openSnackbar({ message: "No response from server", severity: "error" }));
          return rejectWithValue("No response from server");
        } else {
          // Something else caused the error
          dispatch(openSnackbar({ message: error.message || "Unknown error", severity: "error" }));
          return rejectWithValue(error.message || "Unknown error");
        }
      }
    }
  );

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
