import { createAsyncThunk } from "@reduxjs/toolkit";
import server from "../middleware/interceptor";


interface LoginPayload {
  username: string  ; 
  password : string ; 
}
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values : LoginPayload, { rejectWithValue }) => {
    console.log("payload data " , values)
    try {
      const response = await server.post("/auth/login", values , {
        headers : {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      });
      console.log("response", response);
      return response.data; // Return user data from API response
    } catch (error : any) {
      return rejectWithValue(error.response?.data || "Login failed"); 
    }
  }
); 
