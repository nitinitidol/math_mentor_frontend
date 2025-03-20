import { createAsyncThunk } from "@reduxjs/toolkit";
import server from "../middleware/interceptor";


interface LoginPayload {
  username: string  ; 
  password : string ; 
}
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values : LoginPayload, { rejectWithValue }) => {
    try {
      const response = await server.post("/auth/login", values , {
        headers : {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      });
      return response.data; // Return user data from API response
    } catch (error : any) {
      return rejectWithValue(error.response?.data || "Login failed"); 
    }
  }
); 

export const signUpPostCall = createAsyncThunk(
  "auth/signup",
  async (user: any, { dispatch, rejectWithValue }) => {
    try {
      const response = await server.post("/auth/signup", user , {
        headers : {
          "Content-Type" : "application/json", 
        }
      });
      return response.data ;   
    } catch (error: any) {
      return rejectWithValue(error.response.data || "Sign up failed ")
    }
  }
);
