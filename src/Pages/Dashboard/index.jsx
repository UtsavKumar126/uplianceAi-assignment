import { getAuth } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { app } from "../../Firebase";
import { useEffect } from "react";
import UserData from "../../Components/UserData";
import styles from "./styles.module.css";
import { generateLabels } from "../../functions/generateLabel";
import { generateCount } from "../../functions/generateCount";
import { CircularProgress } from "@mui/material";
import { UserChart } from "../../Components/UserChart";
import { Chart } from "chart.js/auto";
import { bringUsers } from "../../Redux/features/BringUsers/BringUserActions";

function Dashboard() {
  const users = useSelector((state) => {
    return state.bringUser;
  });

  const dispatch=useDispatch()

  const auth = getAuth(app);

  const chartData = {
    labels: generateLabels(users),
    datasets: [
      {
        label: "Users Gained ",
        data: generateCount(users),
        backgroundColor:"orangered",
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    document.body.style.backgroundColor = "white";
    dispatch(bringUsers())
  }, []);

  return (
    <>
      {users.length > 0 ? (
        <div className={styles.main}>
          <h2>Hello {auth.currentUser.displayName} !!!</h2>
          <h3 style={{textAlign:'center'}}>Here is Subscrided Users Data (Day-wise)</h3>
          {users && <UserChart chartData={chartData} />}
          <h3>Here is the Users Data</h3>
          <div className={styles.dataDiv}>
            {users.map((user, i) => (
              <UserData userData={user} />
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.loader}>
          <CircularProgress />
        </div>
      )}
    </>
  );
}

export default Dashboard;
