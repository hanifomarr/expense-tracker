import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart({ dataPoints }) {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={null}
        />;
      })}
    </div>
  );
}

export default Chart;
