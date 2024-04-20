import React from "react";
import Navbar from "../Components/Navbar";
import Counter from "../Components/Counter";
import Form from "../Components/Form";

function HomePage({mobileSize, setMobileSize}) {
  return (
    <>
    <Navbar mobileSize={mobileSize} setMobileSize={setMobileSize} />
      {mobileSize && (
        <div className="miniNav">
          <a href="">DashBoard</a>
          <a href="">Logout</a>
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
