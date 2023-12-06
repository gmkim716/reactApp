import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const DATA_COUNT = 6;

const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}

const datapoints = [
  400, 500, 320, 450, 200, 430, 120, 200, 
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Cubic interpolation",
      data: datapoints,
      // borderColor: Utils.CHART_COLORS.blue,
      borderColor: '#ff4500',
      fill: true,
      tension: 0.4,
    },
    {
      label: "Linear interpolation (default)",
      data: datapoints,
      borderDash: [5, 5],
      // borderColor: Utils.CHART_COLORS.green,
      borderColor: '#808080',
      fill: false,
    },
  ],
};

function ReactChart() {
  return (
    <div>
      <Line type="line" data={data} />
    </div>
  );
}

export default ReactChart;
