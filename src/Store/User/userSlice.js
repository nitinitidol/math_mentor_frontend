import { createSlice } from "@reduxjs/toolkit";

const initialState = { 

};

const userSlice =  createSlice({ 
    name : "user" , 
    initialState : initialState , 
    reducers : {
        login(state , {payload}){

        }
    }

})

export default userSlice.reducer ; 
export const { login} = userSlice.actions ; 