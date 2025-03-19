import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slice/userSlice"; 
import snackbarReducer from "../Slice/snackbarSlice" ; 
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Configure store with typed reducers
const store = configureStore({
  reducer: {
    user: userReducer ,
    snackbar : snackbarReducer , 
  },

});

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
