import React,{useState,useEffect} from 'react'
import { useSelector } from "react-redux";

const CPU = (props) => {
  const processes = useSelector((state) => state.processes);
  let [cpu, setCpu] = useState([]);

    useEffect(() =>{
        let cpu = [];
        for(let i = 0; i < props.history.length; i++){
            let val = props.history[i]
            val['color'] = processes[props.history[i].processId - 1].color
            cpu.push(val)
        };
        cpu.sort((a,b) => (a.startTime > b.startTime) ? 1 : ((b.startTime > a.startTime) ? -1 : 0));
        setCpu(cpu);
    },[props,processes])



  return (
    <div className="relative flex justify-center align-middle w-[100%] border-t border-b h-[8vh] my-10">
        <div className="absolute  left-[17%] w-[83%] h-[50%] top-[25%] flex ">
        {cpu.map((process) => (
                <div
                    key={process.processId}
                    className={`absolute w-[3%] h-[100%]`}
                    style={{ left: `${3 * process.startTime}%`,backgroundColor: `${process.color}`}}
                ></div>
            ))}
        </div>
        <div className="basis-1/5 flex flex-col justify-center align-middle pl-5">
          <div className="font-bold">CPU</div>
        </div>
        <div className="basis-[100%]"></div>
      </div>
  )
}


export default CPU;