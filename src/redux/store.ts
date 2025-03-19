import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import snackbarReducer from './slices/snackBarSlice';

// Create the Redux store with the auth reducer
const store = configureStore({
  reducer: {
    auth:authReducer,
    snackbar:snackbarReducer  // Adding auth reducer to the store
  },
  devTools: process.env.NODE_ENV !== 'production',  // Ensure devTools are enabled in development mode
});

// Define the root state type based on the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
