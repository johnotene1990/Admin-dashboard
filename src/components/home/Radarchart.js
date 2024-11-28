import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  zoomPlugin
);

const RadarChart = () => {
  const data = {
    labels: [
      "Sales",
      "Mark",
      "Developt",
      "Customers support",
      "Biology",
      "Actions",
    ],
    datasets: [
      {
        label: "Budget Report",
        data: [65, 59, 90, 81, 56, 55],
        fill: true,
        backgroundColor: "rgba(74, 144, 226, 0.2)", // Blue with transparency
        borderColor: "#4A90E2", // Blue
        pointBackgroundColor: "#4A90E2",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#4A90E2",
      },
      {
        label: "Actual Spending",
        data: [28, 48, 40, 19, 96, 27],
        fill: true,
        backgroundColor: "rgba(76, 175, 80, 0.2)", // Green with transparency
        borderColor: "#4CAF50", // Green
        pointBackgroundColor: "#4CAF50",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#4CAF50",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "xy",
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
