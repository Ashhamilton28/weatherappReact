import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  barThickness: 6,
  borderRadius: 50,
  barPercentage: 1,
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        display: true,
        text: ["Sunny", "Rainy", "Heavy"],
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["10AM", "11AM", "12PM", "1PM", "2PM", "3PM"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [100, 150, 200, 250, 300, 350, 400, 450],
      backgroundColor: "#BBD8EC",
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
