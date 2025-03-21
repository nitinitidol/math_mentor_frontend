import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { sendForgotPasswordRequest } from "../Services/auth.service";


interface credentails {
    email : string | null ; 
    otp :  string | null ;
    loading : boolean ; 
}

const initialState : credentails = {
    email : "" , 
    otp : "" , 
    loading : false ,
}

const credentialSlice  = createSlice({
    name : "credentials" , 
    initialState , 
    reducers : {
        setOtp : (state , action : PayloadAction<string>) => {
            state.otp = action.payload ; 
        } , 
        setEmail : (state , action : PayloadAction<string>) => {
            state.email = action.payload ;  
        } , 
        
    } , 
    extraReducers : (builder) => {
        builder
        .addCase(sendForgotPasswordRequest.pending ,  (state) => {
            state.loading = true ; 
        })
        .addCase(sendForgotPasswordRequest.fulfilled ,  (state) => {
            state.loading = false ;
        })
        .addCase(sendForgotPasswordRequest.rejected , (state) => {
            state.loading = false ; 
        });
    }
}) ; 

export const {setEmail ,  setOtp  } = credentialSlice.actions ; 

export default credentialSlice.reducer ; 