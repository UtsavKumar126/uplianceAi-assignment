import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../../Firebase";

export const bringUsers=createAsyncThunk('login/bringUser',async()=>{
    const db=getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "User"));
    const data=querySnapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
    }))
    return data;
})