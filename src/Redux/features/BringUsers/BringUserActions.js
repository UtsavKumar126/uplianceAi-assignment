import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
import { app } from "../../../Firebase";

export const bringUsers = createAsyncThunk('login/bringUser', async () => {
    try {
        const db = getFirestore(app);
        const q = query(collection(db, "User"), orderBy('time'));
        const dataSnapShot = await getDocs(q);
        const users = dataSnapShot.docs.map(doc => ({
            id: doc.id,
            ...doc.data() // Extract all fields from the document
        }));
        console.log(users);
        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
});