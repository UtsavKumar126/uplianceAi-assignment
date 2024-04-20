import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1 >= 0 ? count - 1 : 0);
  };

  const resetCount = () => {
    setCount(0);
  };

  const background = {
    backgroundColor: `rgb(${Math.random() * (count + 50)},${
      Math.random() * (count + 50)
    },${Math.random() * (count + 50)})`,
    transition: "all 0.5s cubic-bezier(0, 0, 1.0, 1.0)",
  };
  return (
    <div style={background} className={styles.counter}>
      <h1>Count: {count}</h1>
      <div className={styles.button}>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
