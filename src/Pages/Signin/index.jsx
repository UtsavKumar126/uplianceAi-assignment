import React from 'react'
import styles from"./styles.module.css"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const navigate=useNavigate();
    useEffect(()=>{
        document.body.style.backgroundColor='white'
    },[])
  return (
    <div className={styles.main}>
      <form action="" className={styles.form}>
      <h1>Sign In</h1>
        <div className={styles.textField}>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className={styles.textField}>
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Enter your password" />
        </div>
        <button className={styles.button}>Submit</button>
        <a onClick={()=>navigate('/signup')}>Not a user ? Sign up</a>
      </form>
    </div>
  );
}

export default SignIn