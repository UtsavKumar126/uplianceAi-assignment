import React, { useState } from 'react'
import styles from"./styles.module.css"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../Firebase';
import { useDispatch } from 'react-redux';
import { bringUsers } from '../../Redux/features/BringUsers/BringUserActions';

function SignIn() {
    const navigate=useNavigate();
    const[user,setUser]=useState(null);
    const dispatch=useDispatch()
    useEffect(()=>{
        document.body.style.backgroundColor='white'
    },[])

    function handleChange(e) {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    }

    function login(e){
      e.preventDefault();

      const auth=getAuth(app);
      signInWithEmailAndPassword(auth,user.email,user.password).then(res=>{navigate('/dashboard');dispatch(bringUsers())}).catch(error=>console.error(error))
    }

  return (
    <div className={styles.main}>
      <form onSubmit={login} className={styles.form}>
      <h1>Sign In</h1>
        <div className={styles.textField}>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter your email"  onChange={handleChange} name='email'/>
        </div>
        <div className={styles.textField}>
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Enter your password" onChange={handleChange} name='password'/>
        </div>
        <button className={styles.button}>Submit</button>
        <a onClick={()=>navigate('/signup')}>Not a user ? Sign up</a>
      </form>
    </div>
  );
}

export default SignIn