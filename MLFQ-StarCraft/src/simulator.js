export const simulate = ({ readyQ, processObjects }) => {
  // readyQ is sorted by arrival time
  // readyQ: [{arrivalTime: 0, processId: 1}, {arrivalTime: 0, processId: 3}, {arrivalTime: 1, processId: 2}]

  let readyQueues = readyQ;
  let processes = processObjects.map((process) =>
    JSON.parse(JSON.stringify(process))
  );

  let queue1 = [];
  let queue2 = [];
  let queue3 = [];
  let queue4 = [];
  let queue5 = [];

  const queues = [queue1, queue2, queue3, queue4, queue5];

  let runningProcesses = [];
  let voodoo = 10; // Priority boost constant
  let history = [];

  let currentTime = 0;

  console.log("Processes: ", processes);

  const randInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const findFirstRunnableProcess = () => {
    // Find the first process that isRunnable in the highest priority queue
    // If there is no process that is runnable, move to the next queue
    for (let queueId = 0; queueId < queues.length; queueId++) {
      const queue = queues[queueId];

      if (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
          const processId = queue[i];
          const process = processes[processId - 1]; // Assuming you have a function to get a process by its ID
          if (process.isRunnable) {
            return [processId, queueId + 1]; // Adding 1 to the queueId since it's 0-indexed
          }
        }
      }
    }
    return [null, null]; // No process is runnable
  };

  const addProcessToQueue = (queueId, processId) => {
    const queue = queues[queueId - 1];
    queue.push(processId);
  };

  const removeProcessFromQueue = (queueId, processId) => {
    const queue = queues[queueId - 1]; // queueId is 1-indexed, so subtract 1 to access the correct queue
    const processIndex = queue.indexOf(processId);

    if (processIndex > -1) {
      queue.splice(processIndex, 1);
    }
  };

  const finishProcess = (processId) => {
    const process = processes[processId - 1];
    process.isFinished = true;
    process.isRunnable = false;
    process.unBlockedAt = null;
    process.remainingCPUTime = null;
    process.totalTime = null;
    process.priority = null;
    removeProcessFromQueue(1, processId);
    removeProcessFromQueue(2, processId);
    removeProcessFromQueue(3, processId);
    removeProcessFromQueue(4, processId);
    removeProcessFromQueue(5, processId);
    runningProcesses = runningProcesses.filter((id) => id !== processId);
  };

  // while readyQueues, queue1, queue2, queue3, queue4, queue5 are not empty
  while (
    currentTime < 20 &&
    ((readyQueues && readyQueues.length > 0) || runningProcesses.length > 0)
  ) {
    // While readyQueues not empty, check if arrival time of the first process in readyQueues <= current time
    // If it is, add it to queue1 and remove it from readyQueues
    // keep doing this until we find a process that has an arrival time that is greater than the current time
    while (
      readyQueues.length > 0 &&
      readyQueues[0].arrivalTime <= currentTime
    ) {
      // add the process id to the runningProcesses array
      runningProcesses.push(readyQueues[0].processId);
      addProcessToQueue(1, readyQueues[0].processId);
      readyQueues.shift();
    }

    // Find the first process that is_runnable in the highest priority queue
    // If there is no process that is runnable, move to the next queue
    // return [processId, queueId]
    const [processId, queueId] = findFirstRunnableProcess();

    console.log("currentTime: ", currentTime);
    console.log("runningProcesses: ", runningProcesses);

    // If processId is null: no process is runnable
    if (processId === null) {
      currentTime += 1; // Increment the current time - CPU is idle
    } else {
      const process = processes[processId - 1];
      // Execute the process for 1 time unit
      // Quantum is currently same(1) for all the priority queues

      // Execution 1: subtract 1 from remainingCPUTime && subtract 1 from totalTime
      process.remainingCPUTime -= 1;
      process.totalTime -= 1;

      // Execution 2: Append this to history
      history.push({
        processId: processId,
        queueId: queueId,
        startTime: currentTime,
      });

      // Execution 3: check totalTime and remainingCPUTime
      // If totalTime <= 0, process is done
      if (process.totalTime <= 0) {
        // Process is done
        finishProcess(processId);
      } else {
        // Process is not done
        removeProcessFromQueue(queueId, processId);
        if (process.remainingCPUTime > 0) {
          if (queueId + 1 < queues.length) {
            // Move this process to the next lower priority queue
            addProcessToQueue(queueId + 1, processId);
            process.priority = queueId + 1;
          } else {
            // Stay if it's already in the lowest priority queue
            addProcessToQueue(queueId, processId);
          }
        } else {
          // Finished current CPU burst -> Go for IO burst
          process.isRunnable = false;
          // Generate a random number for the ioBurst using the process.ioVariance
          const randIoBurstValue = randInt(
            process.ioBurst - process.ioVariance,
            process.ioBurst + process.ioVariance
          );

          //  If this process ends after IO burst, it will be removed from the queue
          //  * this is not technically accurate, but since we do not visualize IO burst, it seems fine
          if (randIoBurstValue >= process.totalTime) {
            // After this IO burst, this process will finish
            finishProcess(processId);
          } else {
            // After IO burst, the process is not done
            process.unBlockedAt = currentTime + randIoBurstValue;
            process.totalTime -= randIoBurstValue;
          }
        }
      }
      currentTime += 1;
    }
    // Comeback from IO bound!
    // Check if there is any process that can be unblocked
    for (const pid of runningProcesses) {
      const process = processes[pid - 1];
      if (!process.isRunnable && process.unBlockedAt <= currentTime) {
        process.isRunnable = true;
        process.unBlockedAt = null;
        addProcessToQueue(process.priority, pid);
      }
    }

    // Priority Boost
    // Boost all running processes to the highest priority queue in every voodoo time units
    if (currentTime % voodoo === 0) {
      for (let priority = 2; priority <= 5; priority++) {
        const queue = queues[priority - 1];
        if (queue.length > 0) {
          for (const pid of queue) {
            queue1.push(pid);
            // update the priority field of the process
            const process = processes[pid - 1];
            process.priority = 1;
          }
          queue.length = 0;
        }
      }
    }
  }

  return history;
};
