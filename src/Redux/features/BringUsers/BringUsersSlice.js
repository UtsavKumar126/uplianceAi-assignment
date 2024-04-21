import { createSlice } from "@reduxjs/toolkit";
import { bringUsers } from "./BringUserActions";

const intitalState=[];

const BringUserSlice=createSlice({
    name:"bringUser",
    initialState:intitalState,
    extraReducers:(builder)=>{
        builder.addCase(bringUsers.fulfilled,(state,action)=>{
            return action.payload
        })
    }

})

export default BringUserSlice.reducer