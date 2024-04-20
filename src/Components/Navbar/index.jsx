import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useNavigate } from 'react-router-dom';

function Navbar({mobileSize,setMobileSize}) {
  const naviagte=useNavigate();
  return (
    <nav className={styles.navbar}>
        <Link to={'/dashboard'}>DashBoard</Link>
        <Link to={'/signup'}>SignUp</Link>
        <button onClick={()=>setMobileSize(!mobileSize)}>
            <MenuRoundedIcon/> 
        </button>
    </nav>
  )
}

export default Navbar