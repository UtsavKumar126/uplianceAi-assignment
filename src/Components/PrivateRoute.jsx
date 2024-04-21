import { getAuth } from 'firebase/auth'
import React from 'react'
import { app } from '../Firebase'
import { Navigate, Outlet, Route } from 'react-router-dom';
import { Dashboard } from '@mui/icons-material';

function PrivateRoute() {
    const auth=getAuth(app);
  if(localStorage.getItem('id')){
    return <Outlet/>
  }
  return <Navigate to={'/signin'}/>
}

export default PrivateRoute