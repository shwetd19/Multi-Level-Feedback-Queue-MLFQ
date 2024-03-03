import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setArrivalTime,
  setcpuBurst,
  setioBurst,
  setTotalTime,
  setcpuVariance,
  setioVariance,
} from "../../slices/processSlice";

const UserInput = (props) => {
  const dispatch = useDispatch();

  let handleArrivalChange = (event) => {
    if (!props.canRun) {
      const currentVal = parseInt(event.currentTarget.value, 10);
      dispatch(setArrivalTime({ id: props.name, arrivalTime: currentVal }));
    }
  };

  let handleCPUBurstChange = (event) => {
    if (!props.canRun) {
      const currentVal = parseInt(event.currentTarget.value, 10);
      dispatch(setcpuBurst({ id: props.name, cpuBurst: currentVal }));
    }
  };

  let handleIOBurstChange = (event) => {
    if (!props.canRun) {
      const currentVal = parseInt(event.currentTarget.value, 10);
      dispatch(setioBurst({ id: props.name, ioBurst: currentVal }));
    }
  };

  let handleTotalTimeChange = (event) => {
    if (!props.canRun) {
      const currentVal = parseInt(event.currentTarget.value, 10);
      dispatch(setTotalTime({ id: props.name, totalTime: currentVal }));
    }
  };

  let handleCPUVarianceChange = (event) => {
    if (!props.canRun) {
      const currentVal = parseInt(event.currentTarget.value, 10);
      dispatch(setcpuVariance({ id: props.name, cpuVariance: currentVal }));
    }
  };

  let handleIOVarianceChange = (event) => {
    if (!props.canRun) {
      const currentVal = parseInt(event.currentTarget.value, 10);
      dispatch(setioVariance({ id: props.name, ioVariance: currentVal }));
    }
  };

  return (
    <div>
      <form className=" flex mb-4 w-[100%] rounded-full bg-[#F8F3FE] shadow-[4px 4px 10px 5px rgba(0, 0, 0, 0.1)] drop-shadow-lg">
        <div className="text-xl font-bold w-[15%]  mx-[3%] my-[1%] pl-[2%] p-2">
          Process {props.name}
        </div>
        <div className="w-[90%] grid grid-cols-6 gap-1 pr-6 py-[0.3%]">
          <input
            onChange={handleArrivalChange}
            id="arrival_time"
            type="number"
            className="px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md"
            disabled={props.canRun}
          />
          <input
            onChange={handleCPUBurstChange}
            id="cpu-burst"
            type="number"
            className=" px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
            disabled={props.canRun}
          ></input>
          <input
            onChange={handleIOBurstChange}
            id="io_burst"
            type="number"
            className=" px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
            disabled={props.canRun}
          ></input>
          <input
            onChange={handleTotalTimeChange}
            id="total_time"
            type="number"
            className=" px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
            disabled={props.canRun}
          ></input>
          <input
            onChange={handleCPUVarianceChange}
            id="cpu_variance"
            type="number"
            className=" px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
            disabled={props.canRun}
          ></input>
          <input
            onChange={handleIOVarianceChange}
            id="io_variance"
            type="number"
            className="px-6 my-[5%] mx-[4%] rounded-full shadow-[2px 2px 2px 2px rgba(0, 0, 0, 0.1)] drop-shadow-md "
            disabled={props.canRun}
          ></input>
        </div>

        {/* input with text */}
      </form>
    </div>
  );
};

export default UserInput;
