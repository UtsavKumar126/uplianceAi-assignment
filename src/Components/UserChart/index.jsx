import { Bar } from "react-chartjs-2";
import styles from './styles.module.css'
export const UserChart = ({ chartData }) => {
  return (
    <div className={styles.container}>
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained in recent-time"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};
