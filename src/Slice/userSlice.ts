import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UserState {
  isLoggedIn: boolean;
  user: Record<string, any>; 
}

// Define the initial state
const initialState: UserState = {
  isLoggedIn: false,
  user: {},
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  
    login(state, action: PayloadAction<Record<string, any>>) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
  },
});


export default userSlice.reducer;
export const { login } = userSlice.actions;
