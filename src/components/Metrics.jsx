import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function Metrics({ allTaks }) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const makeLabels = (data) => {
    let labels = new Set(data.map((item) => item.priority));
    labels = Array.from(labels);
    labels = labels.filter((item) => item !== "");
    return labels;
  };

  const makeData = (data) => {
    let datalength = {
      High: 0,
      Medium: 0,
      Low: 0,
      Urgent: 0,
      "Very Low": 0,
    };
    data.forEach((item) => {
      datalength = {
        ...datalength,
        [item.priority]: datalength[item.priority] + 1,
      };
    });
    let arr = Object.keys(datalength).map((item) => datalength[item]);
    return arr;
  };

  const data = {
    labels: makeLabels(allTaks),
    datasets: [
      {
        label: "Task Priority",
        data: makeData(allTaks),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(214, 54, 235)",
          "rgb(86, 255, 103)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div
      style={{
        maxWidth: "25rem",
        zIndex: 99999,
        position: "absolute",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ccc",
        float: "right", // Set to float right
        right: 0, // Position to the right side of the screen
        justifyContent: "flex-end", // This won't have any effect here
      }}
    >
      <Doughnut data={data} />
    </div>
  );
}
