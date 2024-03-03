/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import UserInput from "./component/UserInput";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProcess } from "../slices/processSlice";
import Table from "./component/Table";
import ProcessInfo from "./component/ProcessInfo";
import { simulate } from "@/simulator";
import CPU from "./component/CPU";

export default function Home() {
  const dispatch = useDispatch();
  const scrollToRef = useRef(null);
  const [runSimulation, setRunSimulation] = useState(false);
  const [num, setNum] = useState(1);
  const [processList, setProcessList] = useState([0]);
  const processes = useSelector((state) => state.processes);
  const [history, setHistory] = useState([]);

  const colors = [
    "#F9F871",
    "#F08A5D",
    "#56BD66",
    "#5666BD",
    "#BD569A",
    "#BD5666",
    "#66BD56",
    // "#56BD66",
    "#9056BD",
    "#BD9056",
  ];

  const handleSimulateBtnClick = () => {
    if (scrollToRef.current) {
      window.scrollTo({
        top: scrollToRef.current.offsetTop - 60,
        behavior: "smooth",
      });
    } else {
      console.error("Element not found.");
    }
  };

  const handlePlusBtnClick = () => {
    if (num < 10 && !runSimulation) {
      setNum(num + 1);
      setProcessList(processList.concat(num));
      const newProcess = {
        id: num + 1,
        color: colors[num - 1],
        arrivalTime: 0,
        cpuBurst: 0,
        ioBurst: 0,
        cpuVariance: 0,
        ioVariance: 0,

        totalTime: 0,
        isFinished: false,
        isRunnable: true,
        unBlockedAt: 0,
        remainingCPUTime: 0,
        priority: 0,
      };
      dispatch(addProcess(newProcess));
    }
  };

  const handleSimulateBtn = () => {
    setRunSimulation(true);
    let readyQueues = [];
    processes.forEach((process) => {
      readyQueues.push({
        arrivalTime: process.arrivalTime,
        processId: process.id,
      });
    });
    // Sort readyQueues by arrival time
    readyQueues.sort((a, b) => a.arrivalTime - b.arrivalTime);

    // run simulator function @params: readyQueues @return: history
    // sort the readyQueues by arrival time
    const history = simulate({
      readyQ: readyQueues,
      processObjects: processes,
    });
    setHistory(history);
    console.log(history);
  };

  return (
    <div className="flex flex-col bg-gradient-to-br from-[#E5CAFB] to-[#BD5666]">
      <div className="flex flex-col justify-center h-[100vh]">
        <div className="flex justify-between pt-28 pl-48 pr-36">
          <div>
            <div class="text-4xl font-black pt-5">
              Multi-Level Feedback Queue
            </div>
            {/* <div class="text-4xl font-black pt-5">Scheduling Algorithm</div> */}

            <div className="text-3xl font-bold mt-4">Scheduling Algorithm</div>

            {/* <div className="text-6xl font-black pt-4">MLFQ</div> */}
            <div className="text-base w-96 pt-6">
              <ul className="list-disc pl-4">
                <li>
                  MLFQ builds upon multi-level queue scheduling, offering
                  advanced task handling by dynamically adjusting priorities
                  with feedback mechanisms.
                </li>
                <li>
                  MLFQ divides processes into priority levels, ensuring
                  responsiveness for interactive tasks and minimizing turnaround
                  time, even without prior execution duration knowledge.
                </li>
                <li>
                  An extended and advanced version of MLQ, MLFQ strikes a
                  balance for both interactive and CPU-intensive tasks,
                  enhancing overall system scheduling efficiency.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/MLFQ-simulator.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="flex justify-center pt-12">
          <button
            className="transition duration-300 ease-in-out hover:bg-black/20"
            onClick={handleSimulateBtnClick}
          >
            <Image
              src="/simulateBtn.png"
              alt="Simulate button"
              width={180}
              height={84}
            />
          </button>
        </div>
      </div>

      <div className="pt-28 px-48">
        <div
          id="elementIdToScrollTo"
          ref={scrollToRef}
          className="text-5xl font-black"
        >
          Define Tasks
        </div>
        <div className="text-base w-96 pt-2">Provide your processes input</div>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center pt-14">
            <div className="flex flex-row mb-[1.5%] w-[100%] ">
              <div class="basis-1/6 text-sm font-bold px-[4%]"></div>
              <div class="basis-1/6 text-sm font-bold pl-[7%]">
                Arrival Time
              </div>
              <div class="basis-1/6 text-sm font-bold pl-[5%]">CPU Burst</div>
              <div class="basis-1/6 text-sm font-bold pl-[4%]">IO Burst</div>
              <div class="basis-1/6 text-sm font-bold pl-[2.5%]">
                Total Time
              </div>
              <div class="basis-1/6 text-sm font-bold pl-[1.8%]">
                IO Variance
              </div>
              <div class="basis-1/6 text-sm font-bold pl-[1%]">
                CPU Variance
              </div>
            </div>
            {processList.map((process) => (
              <UserInput
                key={process}
                name={process + 1}
                canRun={runSimulation}
              />
            ))}
          </div>
          <button
            className="flex justify-center pt-12"
            onClick={handlePlusBtnClick}
          >
            <Image
              src="/plusBtn.png"
              alt="Plus button"
              width={40}
              height={58}
            />
          </button>
          <button className="flex justify-center" onClick={handleSimulateBtn}>
            <a href="#Visualization" className="mt-12 relative">
              <div className="absolute inset-0 hover:bg-black/20"></div>
              <Image
                src="/runBtn.png"
                alt="Simulate button"
                width={180}
                height={84}
              />
            </a>
          </button>
        </div>
      </div>

      <div className="pt-48 px-48">
        <div className="text-5xl font-black" id="Visualization">
          Visualization
        </div>
        <div className="text-base w-96 pt-2 mb-[3%]">
          This is how MLFQ works!
        </div>
        <div className="my-[2%]">
          <div className="flex mb-7">
            <Image
              src="/priorityArrow.png"
              alt="Vertical arrow"
              width={60}
              height={10}
            />
            <Table processNum={num} history={history} />
          </div>
          <ProcessInfo />
          <CPU history={history} />
        </div>
      </div>

      <div className="pt-1 pb-1 bg-gradient-to-br from-[#E5CAFB] to-[#BD5666]">
        <div className="flex justify-center items-center text-white">
          <a
            href="https://twitter.com/shwetasd19"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6"
          >
            <Image
              src="/twitter.png"
              alt="Twitter Icon"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/shwetas-dhake/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn Icon"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://github.com/shwetd19"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6"
          >
            <Image
              src="/github.png"
              alt="LinkedIn Icon"
              width={40}
              height={40}
            />
          </a>
          <div className="ml-6">Built with love by Shwetas</div>
        </div>
      </div>
    </div>
  );
}
