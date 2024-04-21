import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "../../Firebase";

function Navbar({ mobileSize, setMobileSize, logout }) {
  const naviagte = useNavigate();
  const auth = getAuth(app);
  return (
    <nav className={styles.navbar}>
      {auth.currentUser && <Link to={"/dashboard"}>DashBoard</Link>}
      {auth.currentUser ? (
        <a onClick={logout}>Logout</a>
      ) : (
        <Link to={"/signin"}>Login</Link>
      )}
      <a onClick={()=>naviagte('/textEditor')}>TextEditor</a>
      <button onClick={() => setMobileSize(!mobileSize)}>
        <MenuRoundedIcon />
      </button>
    </nav>
  );
}

export default Navbar;
