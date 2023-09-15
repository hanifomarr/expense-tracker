import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart({ dataPoints }) {
  const dataPointsValue = dataPoints.map((dataPoint) => dataPoint.value);

  let totalMaxValue1 = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            label={dataPoint.label}
            maxValue={totalMaxValue1}
          />
        );
      })}
    </div>
  );
}

export default Chart;
