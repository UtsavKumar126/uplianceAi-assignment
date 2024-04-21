import { configureStore } from "@reduxjs/toolkit";
import BringUsersReducer from "./features/BringUsers/BringUsersSlice";

export const store=configureStore({
    reducer:{
        bringUser:BringUsersReducer
    }
})