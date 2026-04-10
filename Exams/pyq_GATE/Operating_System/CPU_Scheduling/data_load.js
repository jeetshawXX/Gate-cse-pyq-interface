window.__examLoadCallback({
  "title": "Operating_System - CPU_Scheduling",
  "duration": 114,
  "sections": [
    {
      "name": "CPU_Scheduling",
      "questions": [
        {
          "id": 1,
          "question": "<p>Processes \\(P_1, P_2, P_3, P_4 \\) arrive in that order at times 0, 1, 2, and 8 milliseconds respectively, and have execution times of 10, 13, 6, and 9 milliseconds respectively. Shortest Remaining Time First (SRTF) algorithm is used as the CPU scheduling policy. Ignore context switching times.\n<br>\nWhich ONE of the following correctly gives the average turnaround time of the four processes in milliseconds? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>22</p>",
            "<b>B.</b> <p>15</p>",
            "<b>C.</b> <p>37</p>",
            "<b>D.</b> <p>19</p>"
          ],
          "correct_answer": "<b>D.</b> <p>19</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460819/gate-cse-2025-set-2-question-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>A computer has two processors, \\(M_1\\) and \\(M_2\\). Four processes \\(P_1, P_2, P_3, P_4\\) with CPU bursts of 20, 16, 25, and 10 milliseconds, respectively, arrive at the same time and these are the only processes in the system. The scheduler uses non-preemptive priority scheduling, with priorities decided as follows:\n<br><br>\n\\(M_1\\) uses priority of execution for the processes as, \\(P_1 &gt; P_3 &gt; P_2 &gt; P_4\\), i.e., \\(P_1\\) and \\(P_4\\) have highest and lowest priorities, respectively.\n<br>\\(M_2\\) uses priority of execution for the processes as, \\(P_2 &gt; P_3 &gt; P_4 &gt; P_1\\), i.e., \\(P_2\\) and \\(P_1\\) have highest and lowest priorities, respectively.\n<br><br>A process \\(P_i\\) is scheduled to a processor \\(M_k\\), if the processor is free and no other process \\(P_j\\) is waiting with higher priority. At any given point of time, a process can be allocated to any one of the free processors without violating the execution priority rules. Ignore the context switch time. What will be the average waiting time of the processes in milliseconds? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>9</p>",
            "<b>B.</b> <p>8.75</p>",
            "<b>C.</b> <p>6.5</p>",
            "<b>D.</b> <p>7.5</p>"
          ],
          "correct_answer": "<b>A.</b> <p>9</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460052/gate-cse-2025-set-1-question-28#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider a single processor system with four processes A, B, C, and D, represented\nas given below, where for each process the first value is its arrival time, and the\nsecond value is its CPU burst time.<br><br>\nA (0, 10), B (2, 6), C (4, 3), and D (6, 7).<br><br>\nWhich one of the following options gives the average waiting times when\npreemptive Shortest Remaining Time First (SRTF) and Non-Preemptive Shortest\nJob First (NP-SJF) CPU scheduling algorithms are applied to the processes? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>SRTF = 6, NP-SJF = 7</p>",
            "<b>B.</b> <p>SRTF = 6, NP-SJF = 7.5</p>",
            "<b>C.</b> <p>SRTF = 7, NP-SJF = 7.5</p>",
            "<b>D.</b> <p>SRTF = 7, NP-SJF = 8.5</p>"
          ],
          "correct_answer": "<b>B.</b> <p>SRTF = 6, NP-SJF = 7.5</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422870/gate-cse-2024-set-2-question-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Which one or more of the following CPU scheduling algorithms can potentially\ncause starvation? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>First-in First-Out</p>",
            "<b>B.</b> <p>Round Robin</p>",
            "<b>C.</b> <p>Priority Scheduling</p>",
            "<b>D.</b> <p>Shortest Job First</p>"
          ],
          "correct_answer": [
            "<b>C.</b> <p>Priority Scheduling</p>",
            "<b>D.</b> <p>Shortest Job First</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399294/gate-cse-2023-question-17#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider four processes P, Q, R, and S scheduled on a CPU as per round robin algorithm with a time quantum of 4 units. The processes arrive in the order P, Q, R, S, all at time t = 0. There is exactly one context switch from S to Q, exactly one context switch from R to Q, and exactly two context switches from Q to R. There is no context switch from S to P. Switching to a ready process after the termination of another process is also considered a context switch. Which one of the following is NOT possible as CPU burst time (in time units) of these processes? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P = 4, Q = 10, R = 6, S = 2</p>",
            "<b>B.</b> <p>P = 2, Q = 9, R = 5, S = 1</p>",
            "<b>C.</b> <p>P = 4, Q = 12, R = 5, S = 4</p>",
            "<b>D.</b> <p>P = 3, Q = 7, R = 7, S = 3</p>"
          ],
          "correct_answer": "<b>D.</b> <p>P = 3, Q = 7, R = 7, S = 3</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/371904/Gate-cse-2022-question-32#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Which of the following statement(s) is/are correct in the context of CPU scheduling? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Turnaround time includes waiting time</p>",
            "<b>B.</b> <p>The goal is to only maximize CPU utilization and minimize throughput</p>",
            "<b>C.</b> <p>Round-robin policy can be used even when the CPU time required by each of the processes is not known apriori</p>",
            "<b>D.</b> <p>Implementing preemptive scheduling needs hardware support</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>Turnaround time includes waiting time</p>",
            "<b>C.</b> <p>Round-robin policy can be used even when the CPU time required by each of the processes is not known apriori</p>",
            "<b>D.</b> <p>Implementing preemptive scheduling needs hardware support</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357526/gate-cse-2021-set-2-question-14#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Three processes arrive at time zero with CPU bursts of 16, 20 and 10 milliseconds. If the scheduler has prior knowledge about the length of the CPU bursts, the minimum achievable average waiting time for these three processes in a non-preemptive scheduler (rounded to nearest integer) is _____________ milliseconds. <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "12",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357426/gate-cse-2021-set-1-question-25#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the following set of processes, assumed to have arrived at time 0. Consider the CPU scheduling algorithms Shortest Job First (SJF) and Round Robin (RR). For RR, assume that the processes are scheduled in the order \\(P_1,P_2,P_3,P_4\\). <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\CPU_Scheduling\\q50_bc55af2e.jpg\"><br>If the time quantum for RR is 4 ms, then the absolute value of the difference between the average turnaround times (in ms) of SJF and RR  (round off to 2 decimal places is_______ <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5.25",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333181/gate2020-cs-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the following four processes with arrival times (in milliseconds) and their length of CPU burst (in milliseconds) as shown below:\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\CPU_Scheduling\\q41_98bc91e9.jpg\">\nThese processes are run on a single processor using preemptive Shortest Remaining Time First scheduling algorithm. If the average waiting time of the processes is 1 millisecond, then the value of Z is __________. <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302807/gate2019-cs-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the set of processes with arrival time (in milliseconds). CPU burst time (in\nmilliseconds), and priority (0 is the highest priority) shown below. None of the processes have\nI/O burst time.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\CPU_Scheduling\\q43_6b11f541.jpg\"> <br> The average waiting time (in milliseconds) of all the processes using preemptive priority scheduling algorithm is __________ <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "29",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118558/gate2017-2-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the following CPU processes with arrival times (in milliseconds) and length of CPU\nburst (in milliseconds) as given below:  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\CPU_Scheduling\\q9_b12a8e72.jpg\"><br> If the pre-emptive shortest remaining time first scheduling algorithm is used to schedule the processes., then the average waiting time across all processes is ________ milliseconds. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118304/gate2017-1-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the following processes, with the arrival time and the length of the CPU burst given in milli seconds.The scheduling algorithm used is preemptive shortest remaining-time first.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\CPU_Scheduling\\q47_5095f5ac.jpg\"><br> The average turn around time of these processes is milliseconds. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "8.2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39625/gate2016-2-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider an arbitrary set of CPU-bound processes with unequal CPU burst lengths\nsubmitted at the same time to a computer system.Which one of the following process scheduling algorithms would minimize the average waiting time in the ready queue? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Shortest remaining time first</p>",
            "<b>B.</b> <p>Round-robin with time quantum less than the shortest CPU burst</p>",
            "<b>C.</b> <p>Uniform random</p>",
            "<b>D.</b> <p>Highest priority first with priority proportional to CPU burst length</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Shortest remaining time first</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39655/gate2016-1-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>For the processes listed in the following table, which of the following scheduling schemes will give the lowest average turnaround time? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\CPU_Scheduling\\q47_eabb2659.jpg\"> <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>First Come First Serve</p>",
            "<b>B.</b> <p>Non-preemptive Shortest Job First</p>",
            "<b>C.</b> <p>Shortest Remaining Time</p>",
            "<b>D.</b> <p>Round Robin with Quantum value two</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Shortest Remaining Time</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8492/gate2015-3-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider a uniprocessor system executing three tasks T1, T2 and T3, each of which is composed of an infinite sequence of jobs (or instances) which arrive periodically at intervals of 3, 7 and 20 milliseconds, respectively. The priority of each task is the inverse of its period, and the available tasks are scheduled in order of priority, with the highest priority task scheduled first. Each instance of T1, T2 and T3 requires an execution time of 1, 2 and 4 milliseconds, respectively. Given that all tasks initially arrive at the beginning of the 1st millisecond and task preemptions are allowed, the first instance of T3 completes its execution at the end of _____________ milliseconds. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "12",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8330/gate2015-1-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
          "question": "<p>An operating system uses shortest remaining time first scheduling algorithm for pre-emptive\nscheduling of processes. Consider the following set of processes with their arrival times and\nCPU burst times (in milliseconds): <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\CPU_Scheduling\\q32_59e10a11.jpg\"><br>  The average waiting time (in milliseconds) of the processes is _________. <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5.5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2066/gate2014-3-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>Three processes A, B and C each execute a loop of 100 iterations. In each iteration of the\nloop, a process performs a single computation that requires \\(t_{c}\\) CPU milliseconds and then\ninitiates a single I/O operation that lasts for \\(t_{io}\\) milliseconds. It is assumed that the computer\nwhere the processes execute has sufficient number of I/O devices and the OS of the computer assigns different I/O devices to each process. Also, the scheduling overhead of the OS is negligible. The processes have the following characteristics: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\CPU_Scheduling\\q32_00c28216.jpg\"> <br> The processes A, B, and C are started at times 0, 5 and 10 milliseconds respectively, in a pure\ntime sharing system (round robin scheduling) that uses a time slice of 50 milliseconds. The\ntime in milliseconds at which process C would complete its first I/O operation is\n___________. <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1000",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1991/gate2014-2-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>Consider the following set of processes that need to be scheduled on a single CPU. All the\ntimes are given in milliseconds <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\CPU_Scheduling\\q32_3726bcc5.jpg\"> <br> Using the shortest remaining time first scheduling algorithm, the average process turnaround time (in msec) is ________. <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7.2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1803/gate2014-1-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
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
          "id": 20,
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
          "id": 21,
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
          "id": 22,
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
          "id": 23,
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
          "id": 24,
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
          "id": 25,
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
          "id": 26,
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
          "id": 27,
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
          "id": 28,
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
          "id": 29,
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
          "id": 30,
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
        },
        {
          "id": 31,
          "question": "<p>Consider the following set of processes, with the arrival times and the CPU-burst times given in\nmilliseconds.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\CPU_Scheduling\\q46_0eee0bd6.jpg\"><br>\nWhat is the average turnaround time for these processes with the preemptive shortest remaining\nprocessing time first (SRPT) algorithm? <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5.5</p>",
            "<b>B.</b> <p>5.75</p>",
            "<b>C.</b> <p>6</p>",
            "<b>D.</b> <p>6.25</p>"
          ],
          "correct_answer": "<b>A.</b> <p>5.5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1043/gate2004-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 32,
          "question": "<p>A uni-processor computer system only has two processes, both of which alternate\n10 ms CPU bursts with 90 ms I/O bursts. Both the processes were created at\nnearly the same time. The I/O of both processes can proceed in parallel. Which\nof the following scheduling strategies will result in the least CPU utilizations\n(over a long period of time) for this system ? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>First come first served scheduling</p>",
            "<b>B.</b> <p>Shortest remaining time first scheduling</p>",
            "<b>C.</b> <p>Static priority scheduling with different priorities for the two processes</p>",
            "<b>D.</b> <p>Round robin scheduling with a time quantum of 5 ms.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Round robin scheduling with a time quantum of 5 ms.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/963/gate2003-77#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 33,
          "question": "<p>Which combination of the following features will suffice to characterize an OS\nas a multi-programmed OS ? <br><br>(A)More than one program may be loaded into main\nmemory at the same time for execution. <br> (B) If a program waits for certain events\nsuch as I/O, another program is immediately scheduled for execution. <br> (C) If the\nexecution of a program terminates, another program is immediately scheduled for\nexecution. <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>A and B</p>",
            "<b>C.</b> <p>A and C</p>",
            "<b>D.</b> <p>A,B and C</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A and B</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/851/gate2002-2-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 34,
          "question": "<p>Which of the following scheduling algorithms is non-preemptive ? <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Round Robin</p>",
            "<b>B.</b> <p>First-In First-Out</p>",
            "<b>C.</b> <p>Multilevel Queue Scheduling</p>",
            "<b>D.</b> <p>Multilevel Queue Scheduling with Feedback</p>"
          ],
          "correct_answer": "<b>B.</b> <p>First-In First-Out</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/827/gate2002-1-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 35,
          "question": "<p>Consider \\(n\\) processes sharing the CPU in a round-robin fashion. Assuming that each process switch takes \\(s\\) seconds, what must be the quantum size \\(q\\) such that the overhead resulting from process switching is minimized but at the same time each process is guaranteed to get its turn at the CPU at least every \\(t\\) seconds? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(q \\leq \\frac{t-ns}{n-1}\\)</p>",
            "<b>B.</b> <p>\\(q \\geq \\frac{t-ns}{n-1}\\)</p>",
            "<b>C.</b> <p>\\(q \\leq \\frac{t-ns}{n+1}\\)</p>",
            "<b>D.</b> <p>\\(q \\geq \\frac{t-ns}{n+1}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(q \\leq \\frac{t-ns}{n-1}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1690/gate1998-2-17-ugcnet-dec2012-iii-43\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 36,
          "question": "<p>The correct matching for the following pairs is:<br>\\(\\small \\begin{array}{cl|cl}\\hline \\text{(A)} &amp;\\text{Disk Scheduling} &amp; \\text{(1)} &amp;\\text{Round robin} \\\\\\hline \\text{(B)} &amp;\\text{Batch Processing} &amp; \\text{(2)} &amp;\\text{SCAN} \\\\\\hline \\text{(C)} &amp; \\text{Time-sharing} &amp; \\text{(3)}&amp;\\text {LIFO} \\\\\\hline \\text{(D)} &amp;\\text{Interrupt processing} &amp; \\text{(4)} &amp;\\text{FIFO} \\\\\\hline \\end{array}\\) <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A-3 B-4 C-2 D-1</p>",
            "<b>B.</b> <p>A-4 B-3 C-2 D-1</p>",
            "<b>C.</b> <p>A-2 B-4 C-1 D-3</p>",
            "<b>D.</b> <p>A-3 B-4 C-3 D-2</p>"
          ],
          "correct_answer": "<b>C.</b> <p>A-2 B-4 C-1 D-3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2237/gate1997-3-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 37,
          "question": "<p>Four jobs to be executed on a single processor system arrive at time 0 in the order A, B, C, D. Their burst CPU time requirements are 4, 1, 8, 1 time units respectively. The completion time of A under round robin scheduling with time slice of one time unit is <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>8</p>",
            "<b>D.</b> <p>9</p>"
          ],
          "correct_answer": "<b>D.</b> <p>9</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2749/gate1996-2-20-isro2008-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 38,
          "question": "<p>The sequence __________ is an optimal non-preemptive scheduling sequence for the following jobs which leaves the CPU idle for ________ unit(s) of time.<br>\n\\(\\begin{array}{|c|c|c|} \\hline \\textbf{Job} &amp; \\textbf{Arrival Time} &amp; \\textbf{Burst Time} \\\\\\hline 1 &amp; 0.0 &amp; 9 \\\\\\hline 2 &amp; 0.6 &amp; 5 \\\\\\hline 3 &amp; 1.0 &amp; 1 \\\\\\hline \\end{array}\\) <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{3,2,1}, 1</p>",
            "<b>B.</b> <p>{2,1,3}, 0</p>",
            "<b>C.</b> <p>{3,2,1}, 0</p>",
            "<b>D.</b> <p>{1,2,3}, 5</p>"
          ],
          "correct_answer": "<b>A.</b> <p>{3,2,1}, 1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2618/gate1995-2-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 39,
          "question": "<p>Which scheduling policy is most suitable for a time shared operating system? <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Shortest Job First</p>",
            "<b>B.</b> <p>Round Robin</p>",
            "<b>C.</b> <p>First Come First Serve</p>",
            "<b>D.</b> <p>Elevator</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Round Robin</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2602/gate1995-1-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 40,
          "question": "<p>Assume that  the following jobs are to be executed on a single processor system <br>\\(\\begin{array}{|c|c|} \\hline \\textbf{Job Id} &amp; \\textbf{CPU Burst Time} \\\\\\hline \\text{p} &amp; 4 \\\\\\hline \\text{q} &amp; 1 \\\\\\hline \\text{r} &amp; 8 \\\\\\hline \\text{s} &amp; 1 \\\\\\hline \\text{t} &amp; 2 \\\\\\hline \\end{array}\\)<br>\nThe jobs are assumed to have arrived at time \\(0^+\\) and in the order p,q,r,s,t. Calculate the departure time (completion time) for job p if scheduling is round robin with time slice 1 <br><br><strong>(GATE CSE 1993)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>10</p>",
            "<b>C.</b> <p>11</p>",
            "<b>D.</b> <p>12</p>",
            "<b>E.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>11</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2298/gate1993-7-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 41,
          "question": "<p>Consider a set of n tasks with known runtimes \\(r_{1},r_{2},....r_{n}\\) to be run on a uniprocessor machine. Which of the following processor scheduling algorithms will result in the maximum throughput ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Round-Robin</p>",
            "<b>B.</b> <p>Shortest-Job-First</p>",
            "<b>C.</b> <p>Highest-Response-Ratio-Next</p>",
            "<b>D.</b> <p>First-come-First-Served</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Shortest-Job-First</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/712/gate2001-1-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
