import React from "react";
import { useSelector } from "react-redux";

const ProcessInfo = () => {
  const processes = useSelector((state) => state.processes);

  return (
    <div>
      {processes.map((process) => (
        <div className="flex align-middle" key={process.id}>
          <svg width="25" height="25">
            <circle
              cx="12.5"
              cy="12.5"
              r="7"
              stroke="black"
              strokeWidth="1.2"
              fill={process.color}
            />
          </svg>
          <div className="mr-2">Process {process.id}: </div>
          <div className="mr-2">(Arrival Time {process.arrivalTime})</div>
        </div>
      ))}
    </div>
  );
};

export default ProcessInfo;
