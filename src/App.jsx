import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Form from "./Components/Form";

function App() {
  return (
    <div className='main'>
      <Counter />
      <Form />
    </div>
  );
}

export default App;
