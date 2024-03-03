<!-- <a name="readme-top"></a> -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/shwetd19/Multi-Level-Feedback-Queue-MLFQ">
    <img src="assets/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">⚖️ Multi-Level Feedback Queue Scheduling Algorithms 🤝</h3>

  <!-- <p align="center">
    <br />
    <a href="http://teamastra11.s3-website.ap-south-1.amazonaws.com/">View Demo</a>
    ·
    <a href="https://docs.google.com/presentation/d/1FDaz4M6ED_Oz6jcyGZHyW-h4kZSaLAuO/edit?usp=drive_link&ouid=116699501435276510266&rtpof=true&sd=true">Presentation</a>
    ·
    <a href="https://drive.google.com/drive/folders/1iUGJxHoagjhL-X1v2oy8iKhF5pipARp7">Project Files</a>
  </p> -->
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">Overview</a>
      <!-- <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul> -->
    </li>
    <li>
      <a href="#getting-started">Key Features</a>
      <!-- <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul> -->
    </li>
    <li><a href="#usage">How MLFQ Works</a></li>
    <li><a href="#roadmap">Usage</a></li>
    <li><a href="#contributing">Examples</a></li>
    <li><a href="#contact">License</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Overview


The MLFQ algorithm is an extended and more advanced version of multi-level queue (MLQ) scheduling. It divides processes into multiple priority levels and uses feedback mechanisms to dynamically adjust their priorities. This ensures that both interactive and CPU-intensive tasks are handled effectively.


## Key Features

- Priority Levels: Processes are categorized into different priority levels, allowing for efficient handling of diverse workloads.

- Multiple Queues: The algorithm maintains multiple queues, each corresponding to a different priority level. The highest priority queue is serviced first.

- Time Quantum: Processes in the highest priority queue are given a fixed time quantum to execute on the CPU. Exceeding the time quantum results in pre-emption and demotion.

- Promotion and Demotion: Processes that complete their time quantum are demoted to lower priority queues, preventing CPU-bound tasks from monopolizing resources.

- Aging: Aging prevents starvation by gradually increasing the priority of processes waiting in lower priority queues.

- Feedback Mechanism: Feedback, collected during execution, influences priority adjustments based on a process's behavior.

- Queue Selection: Processes are moved to lower priority queues when they complete their time quantum or perform blocking I/O operations.

- Pre-emption: Higher priority processes pre-empt running processes, ensuring responsiveness and prioritizing critical tasks.

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->

### How MLFQ Works

[![Product Name Screen Shot][product-screenshot]](https://example.com)

The Multi-Level Feedback Queue (MLFQ) dynamically prioritizes processes based on their behavior, utilizing multiple queues, time quantums, and feedback mechanisms to balance responsiveness and resource utilization for efficient CPU scheduling.

### MLFQ.js Overview


- 1. To use the MLFQ algorithm in your JavaScript application
    ```js
        const cases = require("./RandomCases.js");
        const queues = [[], [], []];
        const mlfq = new MLFQ(queues);

        mlfq.schedule(cases);
    ```
- 2. Case Assignment to Queues
    ```js
        for (const currentCase of cases) {
        if (currentCase.score >= 7 && currentCase.score <= 10) {
            this.queues[0].push(currentCase); // Queue 1 for urgent cases (7-10)
        } else if (currentCase.score >= 4 && currentCase.score <= 6) {
            this.queues[1].push(currentCase); // Queue 2 for medium priority cases (4-6)
        } else if (currentCase.score >= 1 && currentCase.score <= 3) {
            this.queues[2].push(currentCase); // Queue 3 for low-priority cases (1-3)
            }
        }
    ```
- 3. Sorting Cases Within Each Queue
    ```js
        for (let i = 0; i < this.queues.length; i++) {
        const priorityLabel = this.getPriorityLabel(i);
        const sortedCases = this.queues[i].sort((a, b) => b.score - a.score);
        }
    ```

Explore the provided examples to see how MLFQ scheduling can be applied to different sets of processes. These examples showcase various 
scenarios to help you understand the algorithm's behavior in different situations. 

### License
This project is licensed under the MIT License - see the LICENSE file for details.




<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request 


<!-- CONTACT -->

## Contact

Your Name - [@shwetasd19](https://twitter.com/shwetasd19) - shwetasdhake16@gmail.com

Project Link: [https://github.com/shwetd19/Multi-Level-Feedback-Queue-MLFQ](https://github.com/shwetd19/Multi-Level-Feedback-Queue-MLFQ)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/shwetd19/Multi-Level-Feedback-Queue-MLFQ.svg?style=for-the-badge
[contributors-url]: https://github.com/shwetd19/Multi-Level-Feedback-Queue-MLFQ/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/shwetd19/Multi-Level-Feedback-Queue-MLFQ.svg?style=for-the-badge
[forks-url]: https://github.com/shwetd19/Multi-Level-Feedback-Queue-MLFQ/network/members
[stars-shield]: https://img.shields.io/github/stars/shwetd19/Multi-Level-Feedback-Queue-MLFQ.svg?style=for-the-badge
[stars-url]: https://github.com/shwetd19/Multi-Level-Feedback-Queue-MLFQ/stargazers
[issues-shield]: https://img.shields.io/github/issues/shwetd19/Multi-Level-Feedback-Queue-MLFQ.svg?style=for-the-badge
[issues-url]: https://github.com/shwetd19/Multi-Level-Feedback-Queue-MLFQ/issues
[license-shield]: https://img.shields.io/github/license/shwetd19/Multi-Level-Feedback-Queue-MLFQ.svg?style=for-the-badge
[license-url]: https://github.com/shwetd19/Multi-Level-Feedback-Queue-MLFQ/blob/main/License.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/shwetas-dhake/
[product-screenshot]: ./assets/images.jpg
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[MongoDB]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[VertexAI]: https://img.shields.io/badge/Vertex%20AI-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white
[React-url]: https://reactjs.org/
[Node-url]: https://your-node-url.com
[MongoDB-url]: https://your-mongodb-url.com
[Express-url]: https://your-express-url.com
[VertexAI-url]: https://your-vertex-ai-url.com
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
