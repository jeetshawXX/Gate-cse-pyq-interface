window.__examLoadCallback({
  "title": "Operating_System - Operating_System - Slot 19",
  "duration": 42,
  "sections": [
    {
      "name": "Operating_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>A virtual memory system uses First In First Out (FIFO) page replacement policy and allocates a fixed number of frames to a process. Consider the following statements: <br><br>\nP: Increasing the number of page frames allocated to a process sometimes\nincreases the page fault rate.<br>\nQ: Some programs do not exhibit locality of reference. <br><br>\nWhich one of the following is TRUE? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both P and Q are true, and Q is the reason for P</p>",
            "<b>B.</b> <p>Both P and Q are true, but Q is not the reason for P.</p>",
            "<b>C.</b> <p>P is false, but Q is true</p>",
            "<b>D.</b> <p>Both P and Q are false.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Both P and Q are true, but Q is not the reason for P.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1254/gate2007-56#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
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
          "id": 3,
          "question": "<p>Consider the following statements about user level threads and kernel level\nthreads. Which one of the following statements is FALSE? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Context switch time is longer for kernel level threads than for user level threads.</p>",
            "<b>B.</b> <p>User level threads do not need any hardware support.</p>",
            "<b>C.</b> <p>Related kernel level threads can be scheduled on different processors in a\nmulti-processor system.</p>",
            "<b>D.</b> <p>Blocking one kernel level thread blocks all related threads.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Blocking one kernel level thread blocks all related threads.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1215/gate2007-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Group 1 contains some CPU scheduling algorithms and Group 2 contains some\napplications. Match entries in Group 1 to entries in Group 2. Group I Group II\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q16_f9f2d561.jpg\"> <br><br><strong>(GATE CSE 2007)</strong></p>",
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
          "id": 5,
          "question": "<p>The wait and signal operations of a monitor are implemented using semaphores as follows. In the following,<br>\nx is a condition variable,<br>\nmutex is a semaphore initialized to 1,<br>\nx_sem is a semaphore initialized to 0,<br>\nx_count is the number of processes waiting on semaphore x_sem, initially 0,<br>\nnext is a semaphore initialized to 0,<br>\nnext_count is the number of processes waiting on semaphore next, initially 0.<br>\nThe body of each procedure that is visible outside the monitor is replaced with the following:<br><pre><code> P(mutex);\n...\nbody of procedure\n...\nif (next_count &gt; 0)\n    V(next);\nelse\n    V(mutex);</code></pre> <br>\nEach occurrence of x.wait is replaced with the following:<br><pre><code> x_count = x_count + 1;\nif (next_count &gt; 0)\n    V(next);\nelse\n    V(mutex);\n------------------------------------------------------------ E1;\nx_count = x_count - 1;\n</code></pre> <br>Each occurrence of x.signal is replaced with the following:<br><pre><code>if (x_count &gt; 0)\n{\n    next_count = next_count + 1;\n    ------------------- E2;\n    P(next);\n    next_count = next_count - 1;\n} </code></pre> <br>\nFor correct implementation of the monitor, statements E1 and E2 are, respectively, <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(P(x\\_sem), V(next)\\)</p>",
            "<b>B.</b> <p>\\(V(next), P(x\\_sem)\\)</p>",
            "<b>C.</b> <p>\\(P(next), V(x\\_sem)\\)</p>",
            "<b>D.</b> <p>\\(P(x\\_sem), V(x\\_sem)\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(P(x\\_sem), V(x\\_sem)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3601/gate2006-it-57\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>For each of the four processes \\(P_1, P_2, P_3,\\) and \\(P_4\\). The total size in kilobytes (KB) and the number of segments are given below.<br>\n\\(\\begin{array}{|c|c|c|}\\hline \\textbf{Process} &amp; \\textbf{Total size (in KB)} &amp; \\textbf{Number of segments} \\\\\\hline \\text{$P_1$} &amp; \\text{195}&amp; \\text{4}\\\\\\hline \\text{$P_2$} &amp; \\text{254} &amp; \\text{5}\\\\\\hline \\text{$P_3$} &amp; \\text{45}&amp; \\text{3} \\\\\\hline \\text{$P_4$} &amp; \\text{364}&amp; \\text{8} \\\\\\hline \\end{array}\\)<br>\nThe page size is 1 KB. The size of an entry in the page table is 4 bytes. The size of an entry in the segment table is 8 bytes. The maximum size of a segment is 256 KB. The paging method for memory management uses two-level paging, and its storage overhead is P. The storage overhead for the segmentation method is S. The storage overhead for the segmentation and paging method is T. What is the relation among the overheads for the different methods of memory management in the concurrent execution of the above four processes? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(P  \\lt  S  \\lt  T\\)</p>",
            "<b>B.</b> <p>\\(S  \\lt  P  \\lt  T\\)</p>",
            "<b>C.</b> <p>\\(S  \\lt  T  \\lt  P\\)</p>",
            "<b>D.</b> <p>\\(T \\lt S  \\lt  P\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(S  \\lt  P  \\lt  T\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3600/gate2006-it-56\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the solution to the bounded buffer producer/consumer problem by using general semaphores S, F, and E. The semaphore S is the mutual exclusion semaphore initialized to 1. The semaphore F corresponds to the number of free slots in the buffer and is initialized to N. The semaphore E corresponds to the number of elements in the buffer and is initialized to 0. <br>\n\\(\\begin{array}{|l|l|}\\hline \\textbf{Producer Process} &amp; \\textbf{Consumer Process} \\\\\\hline \\text{Produce an item;} &amp; \\text{Wait(E);} \\\\ \\text{Wait(F);} &amp; \\text{Wait(S);} \\\\ \\text{Wait(S);} &amp; \\text{Remove an item from the buffer;} \\\\\\text{Append the item to the buffer;} &amp; \\text{Signal(S);} \\\\ \\text{Signal(S);} &amp; \\text{Signal(F);} \\\\ \\text{Signal(E);} &amp; \\text{Consume the item;} \\\\\\hline \\end{array}\\)<br><br>\nWhich of the following interchange operations may result in a deadlock?<br><br>\nI.  Interchanging Wait (F) and Wait (S) in the Producer process <br>\nII. Interchanging Signal (S) and Signal (F) in the Consumer process <br> <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(I) only</p>",
            "<b>B.</b> <p>(II) only</p>",
            "<b>C.</b> <p>Neither (I) nor (II)</p>",
            "<b>D.</b> <p>Both (I) and (II)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>(I) only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3598/gate2006-it-55\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
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
          "id": 9,
          "question": "<p>The process state transition diagram of an operating system is as given below.\nWhich of the following must be FALSE about the above operating system?<br><br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q13_276c7f2d.jpg\"><br> <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It is a multiprogrammed operating system</p>",
            "<b>B.</b> <p>It uses preemptive scheduling</p>",
            "<b>C.</b> <p>It uses non-preemptive scheduling</p>",
            "<b>D.</b> <p>It is a multi-user operating system</p>"
          ],
          "correct_answer": "<b>B.</b> <p>It uses preemptive scheduling</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3552/gate2006-it-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>In the working-set strategy, which of the following is done by the operating system to prevent thrashing?<br><br>\nI. It initiates another process if there are enough extra frames.<br>\nII. It selects a process to suspend if the sum of the sizes of the working-sets exceeds the total number of available frames. <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>Neither I nor II</p>",
            "<b>D.</b> <p>Both I and II</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Both I and II</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3551/gate2006-it-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Barrier is a synchronization construct where a set of processes synchronizes globally i.e. each process in the set arrives at the barrier and waits for all others to arrive and then all processes leave the barrier. Let the number of processes in the set be three and S be a binary semaphore with the usual P and V functions. Consider the following C implementation of a barrier with line numbers shown on left.<pre><code> void barrier (void) {\n1:   P(S);\n2:   process_arrived++;\n3.   V(S);\n4:   while (process_arrived !=3);\n5:   P(S);\n6:   process_left++;\n7:   if (process_left==3) {\n8:      process_arrived = 0;\n9:      process_left = 0;\n10:  }\n11:  V(S);\n}</code></pre>The variables process_arrived and process_left are shared among all processes and are initialized to zero. In a concurrent program all the three processes call the barrier function when they need to synchronize globally.<br><br>Which one of the following rectifies the problem in the implementation? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>lines 6 to 10 are simply replaced by process_arrived</p>",
            "<b>B.</b> <p>At the beginning of the barrier the first process to enter the barrier waits\nuntil process_arrived becomes zero before proceeding to execute P(S)</p>",
            "<b>C.</b> <p>Context switch is disabled at the beginning of the barrier and re-enabled at\nthe end.</p>",
            "<b>D.</b> <p>The variable process_left is made private instead of shared</p>"
          ],
          "correct_answer": "<b>B.</b> <p>At the beginning of the barrier the first process to enter the barrier waits\nuntil process_arrived becomes zero before proceeding to execute P(S)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43564/gate2006-79#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Barrier is a synchronization construct where a set of processes synchronizes globally i.e. each process in the set arrives at the barrier and waits for all others to arrive and then all processes leave the barrier. Let the number of processes in the set be three and S be a binary semaphore with the usual P and V functions. Consider the following C implementation of a barrier with line numbers shown on left.<pre><code> void barrier (void) {\n1:   P(S);\n2:   process_arrived++;\n3.   V(S);\n4:   while (process_arrived !=3);\n5:   P(S);\n6:   process_left++;\n7:   if (process_left==3) {\n8:      process_arrived = 0;\n9:      process_left = 0;\n10:  }\n11:  V(S);\n}</code></pre>The variables process_arrived and process_left are shared among all processes and are initialized to zero. In a concurrent program all the three processes call the barrier function when they need to synchronize globally.<br><br> The above implementation of barrier is incorrect. Which one of the following is true? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The barrier implementation is wrong due to the use of binary semaphore S</p>",
            "<b>B.</b> <p>The barrier implementation may lead to a deadlock if two barrier\ninvocations are used in immediate succession</p>",
            "<b>C.</b> <p>Lines 6 to 10 need not be inside a critical section</p>",
            "<b>D.</b> <p>The barrier implementation is correct if there are only two processes\ninstead of three</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The barrier implementation may lead to a deadlock if two barrier\ninvocations are used in immediate succession</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1853/gate2006-78#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the following snapshot of a system running n processes. Process i is\nholding \\(x_{i}\\)  instances of a resource R, for \\(1\\leq i\\leq n\\). Currently, all instances of R are occupied. Further, for all i , process i has placed a request for an additional \\(y_{i}\\), instances while holding the \\(x_{i}\\) instances it already has, There are exactly two processes p and q such that \\(y_{p}\\)=\\(y_{q}\\)=0. Which one of the following can serve as\na necessary condition to guarantee that the system is not approaching a deadlock? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(min(x_{p},x_{q}) \\lt max_{k\\neq p,q}(y_{k})\\)</p>",
            "<b>B.</b> <p>\\(x_{p}+x_{q}\\geq min_{k\\neq p,q}(y_{k})\\)</p>",
            "<b>C.</b> <p>\\(max(x_{p},x_{q})\\gt 1\\)</p>",
            "<b>D.</b> <p>\\(min(x_{p},x_{q})\\gt 1\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(x_{p}+x_{q}\\geq min_{k\\neq p,q}(y_{k})\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1844/gate2006-66#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
