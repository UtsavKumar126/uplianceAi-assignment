// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCukO0-120wheuEKQAkB4F391--_cYkzjg",
  authDomain: "upliance-ai.firebaseapp.com",
  projectId: "upliance-ai",
  storageBucket: "upliance-ai.appspot.com",
  messagingSenderId: "5380418907",
  appId: "1:5380418907:web:ebcf70689c70e62ac5fe7e",
  measurementId: "G-68FDVGFX23"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);