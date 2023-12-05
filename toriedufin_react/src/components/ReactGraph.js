import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const DATA_COUNT = 12;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const datapoints = [
  100, 120, 60, 70, 60, 120, 200, 180, 120, 125, 105, 110, 170,
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Cubic interpolation",
      data: datapoints,
      // borderColor: Utils.CHART_COLORS.blue,
      fill: false,
      tension: 0.4,
    },
    {
      label: "Linear interpolation (default)",
      data: datapoints,
      // borderColor: Utils.CHART_COLORS.green,
      fill: false,
    },
  ],
};

function ReactGraph() {
  return (
    <div>
      <Line type="line" data={data} />
    </div>
  );
}

export default ReactGraph;
