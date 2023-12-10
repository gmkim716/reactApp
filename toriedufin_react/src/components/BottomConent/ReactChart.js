import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Grid } from "@mui/material";

const chartStyles = {
  backgroundColor: "white",
  height: "250px",
};

// 임의로 임력한 값
const N = 16;
let testDataSet = [
  2000, 1600, 1200, 400, 300, 1500, 3200, 4000, 3500, 3300, 3200, 3800, 1800,
  2000, 2300, 1000,
];

let meanDataSet = [];
for (let i = 0; i < N - 1; i++) {
  if (i % 2 === 0) {
    meanDataSet.push(testDataSet[i]);
  } else {
    meanDataSet.push(
      (testDataSet[i - 1] + testDataSet[i] + testDataSet[i + 1]) / 3.0
    );
  }
}

const getGradient = (ctx, chartArea) => {
  const gradient = ctx.createLinearGradient(255, 255, 255, 0);
  gradient.addColorStop(0, "white");
  gradient.addColorStop(1, "coral");
  return gradient;
};

const data = {
  labels: testDataSet,
  datasets: [
    {
      label: "점선",
      data: meanDataSet,
      borderDash: [3, 3],
      borderColor: "#808080",
      pointStyle: "circle",
      pointBackgroundColor: "red",
      pointBorderColor: "red",
      pointRadius: (context) => {
        return context.dataIndex % 2 === 0 ? 5 : 0;
      },
      fill: false,
    },
    {
      label: "실선",
      data: testDataSet,
      backgroundColor: (context) => {
        const { ctx, chartArea } = context.chart;
        return getGradient(ctx, chartArea);
      },
      borderColor: "rgba(242, 48, 5, 0.75)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: 0,
    margin: 0,
  },
};

function ReactChart() {
  return (
    <Grid sx={{ ...chartStyles }}>
      <Line type="line" data={data} options={options} />
    </Grid>
  );
}

export default ReactChart;
