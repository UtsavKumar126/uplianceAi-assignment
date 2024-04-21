import React from 'react'
import styles from './styles.module.css'

function UserData({userData}) {
  return (
    <div className={styles.data}>
        <p>User Id : {userData.id}</p>
        <p>Username : {userData.name}</p>
        <p>Address : {userData.address}</p>
        <p>Email : {userData.email}</p>
        <p>Phone : {userData.phone}</p>
        <p>Date of Creation : {userData.time}</p>
    </div>
  )
}

export default UserData