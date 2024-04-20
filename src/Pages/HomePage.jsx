import React from "react";
import Navbar from "../Components/Navbar";
import Counter from "../Components/Counter";
import Form from "../Components/Form";
import { Link } from "react-router-dom";

function HomePage({mobileSize, setMobileSize}) {
  return (
    <>
    <Navbar mobileSize={mobileSize} setMobileSize={setMobileSize} />
      {mobileSize && (
        <div className="miniNav">
          <Link to={'/dashboard'}>DashBoard</Link>
          <Link to={'/signup'}>Sign up</Link>
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
