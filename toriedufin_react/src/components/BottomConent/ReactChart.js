import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Grid } from "@mui/material";

const chartStyles = {
  minHeight: "1000px",
  // maxHeight: "1000px",
};

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
      display: false, // 레이블 숨김 처리
    },
  },
};

function ReactChart() {
  return (
    <Grid xs={{ ...chartStyles }}>
      <Line type="line" data={data} options={options} />
    </Grid>
  );
}

export default ReactChart;
