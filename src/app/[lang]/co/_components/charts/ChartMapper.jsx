"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut, Line, Pie, Scatter } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartsTypes = {
  line: Line,
  bar: Bar,
  doughnut: Doughnut,
  pie: Pie,
  scatter: Scatter,
};

function dataCreator(
  dataSet,
  type,
  datasetName,
  legend,
  labels,
  borderColor,
  backgroundColor
) {
  let data = null;

  if (type === "scatter") {
    return (data = {
      label: legend,
      datasets: [
        {
          label: datasetName,
          data: dataSet,
          borderColor: borderColor,
          backgroundColor: backgroundColor,
        },
      ],
    });
  }

  if (type === "doughnut") {
    return (data = {
      labels,
      datasets: [
        {
          label: datasetName,
          data: dataSet,
          borderColor: borderColor,
          backgroundColor: backgroundColor,
        },
      ],
    });
  }
  return (data = {
    labels,
    datasets: [
      {
        label: datasetName,
        data: dataSet,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
      },
    ],
  });
}

function ChartMapper({
  legend,
  datasetName,
  dataSet,
  labels,
  type,
  width,
  borderColor,
  backgroundColor,
}) {
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        /* suggestedMax: 10,
        stepSize:1 */ // Fix the y-axis maximum at 10
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: legend,
      },
      emptyDoughnut: {
        color: "rgba(255, 128, 0, 0.5)",
        width: 2,
        radiusDecrease: 20,
      },
    },
  };

  const scatterOptions = {
    scales: {},
  };

  let data = dataCreator(
    dataSet,
    type,
    datasetName,
    legend,
    labels,
    borderColor,
    backgroundColor
  );

  let Chart = ChartsTypes[type];

  if (type === "scatter") {
    return (
      <div
        className={`${width} flex flex-row h-full  bg-white p-3 shadow-md rounded-md my-3`}
      >
        <Chart data={data} options={scatterOptions} />
      </div>
    );
  }
  return (
    <div
      className={`${width} flex flex-row h-full  bg-white p-3 shadow-md rounded-md my-3`}
    >
      <Chart data={data} options={options} />
    </div>
  );
}

export default ChartMapper;
