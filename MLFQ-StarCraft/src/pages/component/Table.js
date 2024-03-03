import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Table = (props) => {
  const processes = useSelector((state) => state.processes);

  let [queue1, setQueue1] = useState([]);
  let [queue2, setQueue2] = useState([]);
  let [queue3, setQueue3] = useState([]);
  let [queue4, setQueue4] = useState([]);
  let [queue5, setQueue5] = useState([]);

  useEffect(() => {
    let q1 = [];
    let q2 = [];
    let q3 = [];
    let q4 = [];
    let q5 = [];

    for (let i = 0; i < props.history.length; i++) {
      let val;
      if (props.history[i].queueId === 1) {
        val = props.history[i];
        val["color"] = processes[props.history[i].processId - 1].color;
        q1.push(val);
      } else if (props.history[i].queueId === 2) {
        val = props.history[i];
        val["color"] = processes[props.history[i].processId - 1].color;
        q2.push(val);
      } else if (props.history[i].queueId === 3) {
        val = props.history[i];
        val["color"] = processes[props.history[i].processId - 1].color;
        q3.push(val);
      } else if (props.history[i].queueId === 4) {
        val = props.history[i];
        val["color"] = processes[props.history[i].processId - 1].color;
        q4.push(val);
      } else if (props.history[i].queueId === 5) {
        val = props.history[i];
        val["color"] = processes[props.history[i].processId - 1].color;
        q5.push(val);
      }
    }

    q1.sort((a, b) =>
      a.startTime > b.startTime ? 1 : b.startTime > a.startTime ? -1 : 0
    );
    q2.sort((a, b) =>
      a.startTime > b.startTime ? 1 : b.startTime > a.startTime ? -1 : 0
    );
    q3.sort((a, b) =>
      a.startTime > b.startTime ? 1 : b.startTime > a.startTime ? -1 : 0
    );
    q4.sort((a, b) =>
      a.startTime > b.startTime ? 1 : b.startTime > a.startTime ? -1 : 0
    );
    q5.sort((a, b) =>
      a.startTime > b.startTime ? 1 : b.startTime > a.startTime ? -1 : 0
    );

    setQueue1(q1);
    setQueue2(q2);
    setQueue3(q3);
    setQueue4(q4);
    setQueue5(q5);
  }, [props, processes]);

  return (
    <div class="ml-[4%] mb-[4%] w-[100%]">
      <div className="relative flex justify-center align-middle w-[100%] border-t-2 border-b h-[8vh]">
        <div className="absolute  left-[20%] w-[80%] h-[50%] top-[25%] flex">
          {queue1.map((process) => (
            <div
              key={process.processId}
              className={`absolute w-[3%] h-[100%]`}
              style={{
                left: `${3 * process.startTime}%`,
                backgroundColor: `${process.color}`,
              }}
            ></div>
          ))}
        </div>
        <div className="basis-1/5 flex flex-col justify-center align-middle pl-5">
          <div className="font-bold">Queue 1</div>
          <div className="text-xs">Quantum 1</div>
        </div>
        <div className="basis-1/5 bg-[#C7B2E0]"></div>
        <div className="basis-1/5 bg-[#]"></div>
        <div className="basis-1/5 bg-[#C7B2E0]"></div>
        <div className="basis-1/5 bg-[#]"></div>
      </div>

      <div className="relative flex justify-center align-middle w-[100%] border-t border-b h-[8vh]">
        <div className="absolute  left-[20%] w-[80%] h-[50%] top-[25%] flex">
          {queue2.map((process) => (
            <div
              key={process.processId}
              className={`absolute w-[3%] h-[100%]`}
              style={{
                left: `${3 * process.startTime}%`,
                backgroundColor: `${process.color}`,
              }}
            ></div>
          ))}
        </div>
        <div className="basis-1/5 flex flex-col justify-center align-middle pl-5">
          <div className="font-bold">Queue 2</div>
          <div className="text-xs">Quantum 1</div>
        </div>
        <div className="basis-1/5 bg-[#C7B2E0]"></div>
        <div className="basis-1/5 bg-[#]"></div>
        <div className="basis-1/5 bg-[#C7B2E0]"></div>
        <div className="basis-1/5 bg-[#]"></div>
      </div>

      <div className="relative flex justify-center align-middle w-[100%] border-t border-b h-[8vh]">
        <div className="absolute  left-[20%] w-[80%] h-[50%] top-[25%] flex">
          {queue3.map((process) => (
            <div
              key={process.processId}
              className={`absolute w-[3%] h-[100%]`}
              style={{
                left: `${3 * process.startTime}%`,
                backgroundColor: `${process.color}`,
              }}
            ></div>
          ))}
        </div>
        <div className="basis-1/5 flex flex-col justify-center align-middle pl-5">
          <div className="font-bold">Queue 3</div>
          <div className="text-xs">Quantum 1</div>
        </div>
        <div className="basis-1/5 bg-[#C7B2E0]"></div>
        <div className="basis-1/5 bg-[#]"></div>
        <div className="basis-1/5 bg-[#C7B2E0]"></div>
        <div className="basis-1/5 bg-[#]"></div>
      </div>

      <div className="relative flex justify-center align-middle w-[100%] border-t border-b h-[8vh]">
        <div className="absolute  left-[20%] w-[80%] h-[50%] top-[25%] flex">
          {queue4.map((process) => (
            <div
              key={process.processId}
              className={`absolute w-[3%] h-[100%]`}
              style={{
                left: `${3 * process.startTime}%`,
                backgroundColor: `${process.color}`,
              }}
            ></div>
          ))}
        </div>
        <div className="basis-1/5 flex flex-col justify-center align-middle pl-5">
          <div className="font-bold">Queue 4</div>
          <div className="text-xs">Quantum 1</div>
        </div>
        <div className="basis-1/5 bg-[#C7B2E0]"></div>
        <div className="basis-1/5 bg-[#]"></div>
        <div className="basis-1/5 bg-[#C7B2E0]"></div>
        <div className="basis-1/5 bg-[#]"></div>
      </div>

      <div className="relative flex justify-center align-middle w-[100%] border-t border-b-2 h-[8vh]">
        <div className="absolute  left-[20%] w-[80%] h-[50%] top-[25%] flex">
          {queue5.map((process) => (
            <div
              key={process.processId}
              className={`absolute w-[3%] h-[100%]`}
              style={{
                left: `${3 * process.startTime}%`,
                backgroundColor: `${process.color}`,
              }}
            ></div>
          ))}
        </div>
        <div className="basis-1/5 flex flex-col justify-center align-middle pl-5">
          <div className="font-bold">Queue 5</div>
          <div className="text-xs">Quantum 1</div>
        </div>
        <div className="basis-1/5 bg-[#C7B2E0]"></div>
        <div className="basis-1/5 bg-[#]"></div>
        <div className="basis-1/5 bg-[#C7B2E0]"></div>
        <div className="basis-1/5 bg-[#]"></div>
      </div>
    </div>
  );
};

export default Table;
