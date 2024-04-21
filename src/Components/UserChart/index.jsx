import { Bar } from "react-chartjs-2";
export const UserChart = ({ chartData }) => {
  return (
    <div className="chart-container">
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
