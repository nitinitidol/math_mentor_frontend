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
  async (user: any, { rejectWithValue }) => {
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

export const sendForgotPasswordRequest = createAsyncThunk(
  "forgotPassword/sendForgotPasswordRequest",
  async (email : Object, { rejectWithValue }) => {
    try {
      const response = await server.post("/auth/forgot-password",  email );
      return response.data ;
    } catch (error : any ) {
      return rejectWithValue(error.response.data  || "Something went wrong");
    }
  }
);
export const resetPassword = createAsyncThunk(
  "auth/resetPassword" , 
  async (credentialsValue  : any ,  {rejectWithValue}) => {
    try{
      const response = await server.post("/auth/reset-password" , credentialsValue , {
        headers : {
          "Content-Type" : "application/json" , 
        }
      }); 
      return response.data ;
    }catch(error : any) {
      return rejectWithValue(error.response.data || "Something went wrong")
    }
  }
);