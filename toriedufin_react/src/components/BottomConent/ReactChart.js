import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const DATA_COUNT = 6;

const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}

const datapoints = [400, 500, 320, 450, 200, 430, 120, 200];

const getGradient = (ctx, chartArea) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 0);
  gradient.addColorStop(0, "white");
  gradient.addColorStop(1, "coral");
  return gradient;
};

const data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  datasets: [
    {
      label: "점선",
      data: datapoints,
      borderDash: [5, 5],
      borderColor: "#808080",
      fill: false,
    },
    {
      label: "실선",
      data: datapoints,
      backgroundColor: (context) => {
        const { ctx, chartArea } = context.chart;
        return getGradient(ctx, chartArea);
      },
      borderColor: "#F23005",
      fill: true,
      tension: 0.4,
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
