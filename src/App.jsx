import { useState, useEffect } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/Signin";

function App() {
  const [mobileSize, setMobileSize] = useState(false);
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage mobileSize={mobileSize} setMobileSize={setMobileSize}/>}/>
        <Route path={"/signUp"} element={<SignUp/>} />
        <Route path={'/signin'} element={<SignIn/>}/>
      </Routes>
    </>
  );
}

export default App;
