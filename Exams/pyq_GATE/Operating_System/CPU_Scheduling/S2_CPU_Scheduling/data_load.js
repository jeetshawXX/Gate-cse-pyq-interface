window.__examLoadCallback({
  "title": "CPU_Scheduling - CPU_Scheduling - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "CPU_Scheduling",
      "questions": [
        {
          "id": 1,
          "question": "<p>An operating system uses shortest remaining time first scheduling algorithm for pre-emptive\nscheduling of processes. Consider the following set of processes with their arrival times and\nCPU burst times (in milliseconds): <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\CPU_Scheduling\\q32_59e10a11.jpg\"><br>  The average waiting time (in milliseconds) of the processes is _________. <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5.5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2066/gate2014-3-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Three processes A, B and C each execute a loop of 100 iterations. In each iteration of the\nloop, a process performs a single computation that requires \\(t_{c}\\) CPU milliseconds and then\ninitiates a single I/O operation that lasts for \\(t_{io}\\) milliseconds. It is assumed that the computer\nwhere the processes execute has sufficient number of I/O devices and the OS of the computer assigns different I/O devices to each process. Also, the scheduling overhead of the OS is negligible. The processes have the following characteristics: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\CPU_Scheduling\\q32_00c28216.jpg\"> <br> The processes A, B, and C are started at times 0, 5 and 10 milliseconds respectively, in a pure\ntime sharing system (round robin scheduling) that uses a time slice of 50 milliseconds. The\ntime in milliseconds at which process C would complete its first I/O operation is\n___________. <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1000",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1991/gate2014-2-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the following set of processes that need to be scheduled on a single CPU. All the\ntimes are given in milliseconds <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\CPU_Scheduling\\q32_3726bcc5.jpg\"> <br> Using the shortest remaining time first scheduling algorithm, the average process turnaround time (in msec) is ________. <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7.2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1803/gate2014-1-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>A scheduling algorithm assigns priority proportional to the waiting time of a process. Every process\nstarts with priority zero (the lowest priority). The scheduler re-evaluates the process priorities every\nT time units and decides the next process to schedule. Which one of the following is TRUE if the\nprocesses have no I/O operations and all arrive at time zero? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>This algorithm is equivalent to the first-come-first-serve algorithm.</p>",
            "<b>B.</b> <p>This algorithm is equivalent to the round-robin algorithm.</p>",
            "<b>C.</b> <p>This algorithm is equivalent to the shortest-job-first algorithm.</p>",
            "<b>D.</b> <p>This algorithm is equivalent to the shortest-remaining-time-first algorithm.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>This algorithm is equivalent to the round-robin algorithm.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1419/gate2013-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the 3 processes, P1, P2 and P3 shown in the table. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\CPU_Scheduling\\q31_4db3f95a.jpg\"><br> The completion order of the 3 processes under the policies FCFS and RR2 (round robin scheduling with CPU quantum of 2 time units) are <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>FCFS: P1, P2, P3    RR2: P1, P2, P3</p>",
            "<b>B.</b> <p>FCFS: P1, P3, P2    RR2: P1, P3, P2</p>",
            "<b>C.</b> <p>FCFS: P1, P2, P3   RR2: P1, P3, P2</p>",
            "<b>D.</b> <p>FCFS: P1, P3, P2   RR2: P1, P2, P3</p>"
          ],
          "correct_answer": "<b>C.</b> <p>FCFS: P1, P2, P3   RR2: P1, P3, P2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1749/gate2012-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the following table of arrival time and burst time for three processes P0,\nP1 and P2. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\CPU_Scheduling\\q46_43e646e6.jpg\"> <br>\nThe pre-emptive shortest job first scheduling algorithm is used. Scheduling is\ncarried out only at arrival or completion of processes. What is the average\nwaiting time for the three processes? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5ms</p>",
            "<b>B.</b> <p>4.33ms</p>",
            "<b>C.</b> <p>6.33ms</p>",
            "<b>D.</b> <p>7.33ms</p>"
          ],
          "correct_answer": "<b>A.</b> <p>5ms</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2137/gate2011-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Which of the following statements are true? <br>\nI. Shortest remaining time first scheduling may cause starvation <br>\nII. Preemptive scheduling may cause starvation <br>\nIII. Round robin is better than FCFS in terms of response time <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>I and III only</p>",
            "<b>C.</b> <p>II and III only</p>",
            "<b>D.</b> <p>I, II and III</p>"
          ],
          "correct_answer": "<b>D.</b> <p>I, II and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2204/gate2010-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>If the time-slice used in the round-robin scheduling policy is more than the maximum time required to execute any process, then the policy will <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>degenerate to hortest job first</p>",
            "<b>B.</b> <p>degenerate to priority scheduling</p>",
            "<b>C.</b> <p>degenerate to first come first serve</p>",
            "<b>D.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>degenerate to first come first serve</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3365/gate2008-it-55\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>An operating system uses Shortest Remaining Time first (SRT) process\nscheduling algorithm. Consider the arrival times and execution times for the\nfollowing processes:<pre><code> Process  Execution time  Arrival time\nP1             20            0\nP2             25            15\nP3             10            30\nP4             15            45</code></pre>\nWhat is the total waiting time for process P2? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>15</p>",
            "<b>C.</b> <p>40</p>",
            "<b>D.</b> <p>55</p>"
          ],
          "correct_answer": "<b>B.</b> <p>15</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1253/gate2007-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Group 1 contains some CPU scheduling algorithms and Group 2 contains some\napplications. Match entries in Group 1 to entries in Group 2. Group I Group II\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\CPU_Scheduling\\q16_f9f2d561.jpg\"> <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P - 3 Q - 2 R - 1</p>",
            "<b>B.</b> <p>P - 1 Q - 2 R - 3</p>",
            "<b>C.</b> <p>P - 2 Q - 3 R - 1</p>",
            "<b>D.</b> <p>P - 1 Q - 3 R - 2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>P - 3 Q - 2 R - 1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1214/gate2007-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>The arrival time, priority, and duration of the CPU and I/O bursts for each of three processes \\(P_1, P_2\\) and \\(P_3\\) are given in the table below. Each process has a CPU burst followed by an I/O burst followed by another CPU burst. Assume that each process has its own I/O resource.<br>\n\\(\\begin{array}{|c|c|c|c|c|c|} \\hline \\textbf{Process} &amp; \\textbf{Arrival} &amp; \\textbf{Priority}&amp; \\textbf{Burst duration} &amp; \\textbf{Burst duration} &amp; \\textbf{Burst duration) }\\\\&amp; \\textbf{Time} &amp; &amp; \\textbf{(CPU)} &amp; \\textbf{(I/O)} &amp; \\textbf{(CPU) } \\\\\\hline \\text{$P_1$} &amp; 0 &amp; 2 &amp; 1 &amp; 5 &amp;3 \\\\\\hline \\text{$P_2$} &amp; 2 &amp; \\text{3 (lowest)}&amp; 3 &amp; 3 &amp; 1 \\\\\\hline \\text{$P_3$} &amp; 3 &amp; \\text{1 (highest)}&amp; 2 &amp; 3 &amp; 1 \\\\\\hline \\end{array}\\)<br> The multi-programmed operating system uses preemptive priority scheduling. What are the finish times of the processes \\(P_1, P_2\\) and \\(P_3\\)? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>11, 15, 9</p>",
            "<b>B.</b> <p>10, 15, 9</p>",
            "<b>C.</b> <p>11, 16, 10</p>",
            "<b>D.</b> <p>12, 17, 11</p>"
          ],
          "correct_answer": "<b>B.</b> <p>10, 15, 9</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3597/gate2006-it-54\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider three processes, all arriving at time zero, with total execution time of\n10, 20 and 30 units, respectively. Each process spends the first 20% of execution\ntime doing I/O, the next 70% of time doing computation, and the last 10% of\ntime doing I/O again. The operating system uses a shortest remaining compute\ntime first scheduling algorithm and schedules a new process either when the\nrunning process get blocked on I/O or when the running process finishes its\ncompute burst. Assume that all I/O operations can be overlapped as much as\npossible. For what percentage of time does the CPU remain idle? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0%</p>",
            "<b>B.</b> <p>10.60%</p>",
            "<b>C.</b> <p>30%</p>",
            "<b>D.</b> <p>89.40%</p>"
          ],
          "correct_answer": "<b>B.</b> <p>10.60%</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1843/gate2006-65#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider three processes (process id 0,1,2, respectively) with compute time bursts\n2,4, and 8 time units. All processes arrive at time zero. Consider the longest remaining time first (LRTF) scheduling algorithm. In LRTF ties are broken by giving priority to the process with the lowest process id . The average turn around time is <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>13units</p>",
            "<b>B.</b> <p>14units</p>",
            "<b>C.</b> <p>15units</p>",
            "<b>D.</b> <p>16units</p>"
          ],
          "correct_answer": "<b>A.</b> <p>13units</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1842/gate2006-64#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider three CPU-intensive processes, which require 10,20 and 30 time units\nand arrive at times 0,2, and 6, respectively. How many context switches are needed\nif the operating system implements a shortes remaining time first scheduling\nalgorithm? Do not count the context switches at time zero and at the end <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>4</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/885/gate2006-6#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>We wish to schedule three processes P1, P2 and P3 on a uniprocessor system. The priorities, CPU time requirements and arrival times of the processes are as shown below.<br>\n\\(\\begin{array}{|c|c|c|c|} \\hline \\textbf{Process} &amp; \\textbf{Priority} &amp; \\textbf{CPU time} &amp; \\textbf{Arrival time}\\\\ &amp; &amp; \\textbf{required} &amp; \\textbf{(hh:mm:ss)} \\\\\\hline \\text{P1} &amp; \\text{10 (highest)} &amp; 20\\text{ sec} &amp; 00:00:05 \\\\\\hline \\text{P2} &amp; 9 &amp; 10 \\text{ sec}&amp; 00:00:03 \\\\\\hline \\text{P3} &amp; \\text{8 (lowest)} &amp; 15 \\text{ sec}&amp; 00:00:00 \\\\\\hline \\end{array}\\)<br>\nWe have a choice of preemptive or non-preemptive scheduling. In preemptive scheduling, a late-arriving higher priority process can preempt a currently running process with lower priority. In non-preemptive scheduling, a late-arriving higher priority process must wait for the currently executing process to complete before it can be scheduled on the processor.<br>\nWhat are the turnaround times (time from arrival till completion) of P2 using preemptive and non-preemptive scheduling respectively? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>30 sec, 30 sec</p>",
            "<b>B.</b> <p>30 sec, 10 sec</p>",
            "<b>C.</b> <p>42 sec, 42 sec</p>",
            "<b>D.</b> <p>30 sec, 42 sec</p>"
          ],
          "correct_answer": "<b>D.</b> <p>30 sec, 42 sec</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3821/gate2005-it-60\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
