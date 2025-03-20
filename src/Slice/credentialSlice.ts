import { createSlice , PayloadAction } from "@reduxjs/toolkit";


interface credentails {
    email : string ; 
    otp :  string ;
    password : string ;
}

const initialState : credentails = {
    email : "" , 
    otp : "" , 
    password : "" , 
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
        setPassword : (state , action : PayloadAction<string>) => {
            state.password = action.payload ;  
        } ,
    }
}) ; 

export const {setEmail ,  setOtp  , setPassword } = credentialSlice.actions ; 

export default credentialSlice.reducer ; 