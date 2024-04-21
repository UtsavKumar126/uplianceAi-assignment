import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Counter from "../Components/Counter";
import Form from "../Components/Form";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../Firebase";

function HomePage({mobileSize, setMobileSize}) {
  const auth=getAuth(app);

  function logout(){
    signOut(auth).then(() => {
      // Sign-out successful.
      alert("logout successful");
      window.location.reload(); 
    }).catch((error) => {
      // An error happened.
      console.log(error);
    })
  }
  return (
    <>
    <Navbar mobileSize={mobileSize} setMobileSize={setMobileSize} logout={logout}/>
      {mobileSize && (
        <div className="miniNav">
          <Link to={'/dashboard'}>DashBoard</Link>
          {
            auth.currentUser?<a onClick={logout}>Logout</a>:<Link to={'/signin'}>Login</Link>
          }
        </div>
      )}
      <div className="main">
      <Counter />
      <Form />
    </div>
    </>
  );
}

export default HomePage;
