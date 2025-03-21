import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slice/userSlice"; 
import snackbarReducer from "../Slice/snackbarSlice" ;
import forgotpassReducer from "../Slice/forgotPassSlice" 
import credentialsReducer from "../Slice/credentialSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "../Slice/authSlice" ; 
// Configure store with typed reducers
const store = configureStore({
  reducer: {
    user: userReducer ,
    snackbar : snackbarReducer , 
    auth : authReducer ,
    credentials : credentialsReducer , 
    forgotPassword : forgotpassReducer, 
  },

});

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
