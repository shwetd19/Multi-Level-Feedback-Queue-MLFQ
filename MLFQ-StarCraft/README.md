# MLFQ simulator ![Next.js](https://img.shields.io/badge/-Next.js-000?&logo=JavaScript) ![Tailwind](https://img.shields.io/badge/-Tailwind-000?)
https://mlfq-simulator-7dwamz0tg-eyucherin.vercel.app/


### 🚧 Projects Under Construction 👷‍♀️
### COMSC-322 Operating Systems
- Professor: `James McCauley`
- `Elizabeth Yu`, `Joni Park`

<img width="720" alt="Screenshot 2023-05-08 at 2 36 28 PM" src="https://user-images.githubusercontent.com/89917595/236904187-b1ef1bc0-060a-4ce8-a0e0-90e7b6eb2ef6.png"> <img width="720" alt="Screenshot 2023-05-08 at 2 36 23 PM" src="https://user-images.githubusercontent.com/89917595/236904233-72c258ca-867d-4f10-ab3a-d4f3f1b4efe6.png">

## Introduction: Multi Level Feedback Queue scheduling
For our project, we decided to implement a web simulator on **MLFQ scheduling**. 
Throughout the semester, we learned about a couple of scheduling methods including SJF, and RR, which offer some benefits but also have certain drawbacks. Unlike many other OS schedulers, MLFQ scheduling, also known as Multilevel feedback queue, not only **optimizes Average Turnaround Time and Average Response Time** but also **prioritizes IO-bound processes over CPU-bound processes**. To further examine this scheduler, we decided to use a couple of front-end frameworks and libraries including **Next.js**, **tailwind.css**, and **redux** to create our web interface, which can be found here. 

## What we built

The scheduler works based on five main rules, which we have incorporated into our implementation:
1. A process starts in the highest priority queue.
2. If a process does not finish its time quantum, it is moved to the next lower priority queue.
3. If a process finishes its time quantum, it remains in the same queue.
4. A process that completes an IO burst is moved to the previous priority queue.
5. Periodically, all processes are moved back to the highest priority queue to prevent starvation.

Some decisions we mad in our implementation, 
- The **same time quantum** for all the priority queues, which is set to **1** (for simplicity)
- Total of **5 priority queues**, with each queue having a lower priority than the one above it
- **CPU and IO variances** for each process in order to make the task inputs more dynamic

## How we built

### Frontend
We used **Next.js**, an open-source web development framework that is built on top of **React**, **Tailwind CSS** to style our simulator, and **Redux** toolkit to keep track of the state changes that happen in the different processes. 
- Redux keeps track of all the changes in each process, including the input changes
- Once the `run simulation` button is pressed, the user can no longer manipulate the data
- Once we run the simulation, we receive the data and display it in 2 different forms, the **`MLFQ form`** and the **`CPU form`** to help the users visualize the process for this particular scheduling method. 

### Logic
The main function in our implementation is called `simulate`, which accepts an object containing the ready queue and the list of the process objects. First, we initialize several variables, such as the current time, the five priority queues, an array of running processes, a priority boost constant, and a history array that we will return.
The core of the simulation takes place in a `while` loop that continues until either all processes have been executed or a pre-defined maximum simulation time has been reached. Within this loop, we perform several tasks:
1. Add `processes` from the `ready queue` to the `first priority queue` based on their `arrival times`.
2. `Find the first runnable process` in the highest priority queue and `execute` it for a time unit. If there are no runnable processes, increment the current time to simulate an idle CPU.
3. Update the `remaining CPU time` and `total time` of the executed `process`, and log the execution `history`.
4. Based on the updated times, determine if the process `has finished` or if it should be moved to a lower `priority queue`, or if it should go through an IO burst.
5. `Unblock processes` that have completed their IO bursts and add them back to the appropriate `priority queues`.
6. Perform a `priority boost` to move all running `processes` back to the highest `priority queue` at regular `intervals`.
The simulation ends when all processes have been executed or the `maximum simulation time` has been reached, and the function returns the history of the simulation, which would be the data for drawing processes execution on the queue tables.

## Challenges & key takeaways
![final_1](https://user-images.githubusercontent.com/89917595/236894136-fade2a70-5257-4e9f-8618-c1a33bbee22b.jpg)

- In the beginning, we did not have the right idea of the scheduling algorithm. We were set on the fact that burst referred to the CPU and IO burst times. Initially, our user inputs only consisted of arrival time, total burst, and total time. With the help of Professor McCauley, we were able to understand the scheduling method more in-depth. 
- Even after understanding the whole concept of MLFQ, we were debating on what to include for our user inputs. Some questions we asked were, “Should we include the arrival time?”, or “Should we have a separate variance for the IO and CPU?”. After countless discussions, we figured it would make our simulator more interesting if we allow the users to initiate these variables so even if these inputs made the implementation harder, it definitely added more functionality to the scheduler. 
- We also struggled with the deployment process. There were a couple of errors that appeared during the process which required us to go back to the code and fix them. After revisiting the code a couple of times we were able to get the deployment process working.  

## Future Improvment

- **Real-time animation**: Implement a real-time animation feature that displays the scheduling process as it occurs, making it more engaging and easier to understand. There are two approaches to achieve this: one is to simulate the animation using our existing `history` data and a JavaScript timer; the other involves a more authentic simulation that draws on the screen as the simulator operates.
- **Enhanced logic**: Allow users to set custom `time quantum` values and determine the `voodoo boost` based on input parameters.
- **Frontend improvements**: Modularize the queue component for better maintainability and flexibility. Modify the width of the process executions display to be responsive to the overall runtime.
- **Input validation**: `Validate input` to ensure that user inputs, such as blocking empty inputs, and validating the sum of total time of all the processes is shorter than our `maximum simulation time`. Additionally, we can verify that `IO and CPU burst times` are greater than their respective `variances`.

### Please let us know if there is any feedback or suggestions!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

