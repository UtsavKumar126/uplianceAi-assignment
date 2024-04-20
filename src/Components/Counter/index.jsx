import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.style.background = `rgb(${Math.random() * (count + 50)},${
      Math.random() * (count + 50)
    },${Math.random() * (count + 50)})`;
    document.body.style.transition = "all 0.5s cubic-bezier(0, 0, 1.0, 1.0)";
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1 >= 0 ? count - 1 : 0);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className={styles.counter}>
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
