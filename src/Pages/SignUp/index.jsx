import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { app } from "../../Firebase";
import { update } from "firebase/database";
import { useDispatch } from "react-redux";
import { bringUsers } from "../../Redux/features/BringUsers/BringUserActions";

function SignUp() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [user, setUser] = useState(null);
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function signup(e) {
    e.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((res) => updateProfile(auth.currentUser,{displayName:user.name})).then(()=>{
        alert('Signup Successful');
        dispatch(bringUsers())
        localStorage.setItem('id',res.user.uid)
        navigate('/dashboard');
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className={styles.main}>
      <form onSubmit={signup} className={styles.form}>
        <h1>Sign Up</h1>
        <div className={styles.textField}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={handleChange}
            name="name"
          />
        </div>
        <div className={styles.textField}>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className={styles.textField}>
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            onChange={handleChange}
            name="password"
          />
        </div>
        <button className={styles.button}>Submit</button>
        <a onClick={() => navigate("/signin")}>Already a user? Sign In</a>
      </form>
    </div>
  );
}

export default SignUp;
