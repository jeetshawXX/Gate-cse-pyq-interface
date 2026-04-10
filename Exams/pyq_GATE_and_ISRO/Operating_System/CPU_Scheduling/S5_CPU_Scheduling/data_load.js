window.__examLoadCallback({
  "title": "CPU_Scheduling - CPU_Scheduling - Slot 5",
  "duration": 28,
  "sections": [
    {
      "name": "CPU_Scheduling",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
