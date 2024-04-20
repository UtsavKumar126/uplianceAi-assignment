import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate=useNavigate()
    useEffect(()=>{
        document.body.style.backgroundColor='white'
    },[])
  return (
    <div className={styles.main}>
      <form action="" className={styles.form}>
      <h1>Sign Up</h1>
        <div className={styles.textField}>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className={styles.textField}>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className={styles.textField}>
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Enter your password" />
        </div>
        <button className={styles.button}>Submit</button>
        <a onClick={()=>navigate('/signin')}>Already a user? Sign In</a>
      </form>
    </div>
  );
}

export default SignUp;
