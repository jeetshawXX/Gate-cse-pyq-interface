window.__examLoadCallback({
  "title": "Operating_System - Operating_System - Slot 12",
  "duration": 42,
  "sections": [
    {
      "name": "Operating_System",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
          "question": "<p>A computer system supports 32-bit virtual addresses as well as 32-bit physical\naddresses, Since the virtual address space is of the same size as the physical\naddress space, the operating system designers decide to get rid of the virtual\nentirely. Which one of the following is true? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Efficient implementation of multi-user support is no longer possible</p>",
            "<b>B.</b> <p>The processor cache organization can be made more efficient now</p>",
            "<b>C.</b> <p>Hardware support for memory management is no longer needed</p>",
            "<b>D.</b> <p>CPU scheduling can be made more efficient now</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Efficient implementation of multi-user support is no longer possible</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1841/gate2006-63#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>The atomic feth-and-set x,y instruction unconditionally sets the memory location\nx to 1 and fetches the old value of x in y without allowing any intervening access\nto the memory location x . Consider the following implementation of P and V\nfunctions on a binary semaphore S.<pre><code>void P(binary_semaphore*S){\n   unsigned y;\n   unsigned*x =&amp; (S-&gt;value);\n   do {\n          fetch-and-set x,y;\n         } while(y);\n }\nvoid V (binary_semphore*S){\n      S_&gt;value = 0;\n}</code></pre>\nWhich one of the following is true? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The implementation may not work if context switching is disabled in P</p>",
            "<b>B.</b> <p>Instead of using fetch-and-set, a pair of normal load/store can be used</p>",
            "<b>C.</b> <p>The implementation of V is wrong</p>",
            "<b>D.</b> <p>The code does not implement a binary semaphore</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The implementation may not work if context switching is disabled in P</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1839/gate2006-61#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
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
          "id": 8,
          "question": "<p>Two shared resources \\(R_1\\) and \\(R_2\\) are used by processes \\(P_1\\) and \\(P_2\\). Each process has a certain priority for accessing each resource. Let \\(T_{ij}\\) denote the priority of \\(P_i\\) for accessing  \\(R_j\\). A process \\(P_i\\) can snatch a resource \\(R_k\\) from process \\(P_j\\) if \\(T_{ik}\\) is greater than \\(T_{jk}\\).<br>\nGiven the following :<br><br>\n(I). \\(T_{11} \\gt T_{21}\\)<br>\n(II). \\(T_{12} \\gt T_{22}\\)<br>\n(III). \\(T_{11} \\lt T_{21}\\)<br>\n(IV). \\(T_{12} \\lt T_{22}\\)<br><br>\nWhich of the following conditions ensures that \\(P_1\\) and \\(P_2\\) can never deadlock? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(I) and (IV)</p>",
            "<b>B.</b> <p>(II) and (III)</p>",
            "<b>C.</b> <p>(I) and (II)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>(I) and (II)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3823/gate2005-it-62\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
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
          "id": 10,
          "question": "<p>Two concurrent processes P1 and P2 use four shared resources R1, R2, R3 and R4, as shown below. <br>\n\\(\\begin{array}{|l|l|}\\hline \\textbf{P1} &amp; \\textbf{P2} \\\\ \\text{Compute: } &amp; \\text{Compute;} \\\\ \\text{Use $R1;$ } &amp; \\text{Use $R1;$} \\\\ \\text{Use $R2;$ } &amp; \\text{Use $R2;$}\\\\ \\text{Use $R3;$ } &amp; \\text{Use $R3;$} \\\\ \\text{Use $R4;$ } &amp; \\text{Use $R4;$} \\\\\\hline \\end{array}\\)<br>\nBoth processes are started at the same time, and each resource can be accessed by only one process at a time The following scheduling constraints exist between the access of resources by the processes:<br>\nP2 must complete use of R1 before P1 gets access to R1.<br>\nP1 must complete use of R2 before P2 gets access to R2.<br>\nP2 must complete use of R3 before P1 gets access to R3.<br>\nP1 must complete use of R4 before P2 gets access to R4.<br>\nThere are no other scheduling constraints between the processes. If only binary semaphores are used to enforce the above scheduling constraints, what is the minimum number of binary semaphores needed? <br><br><strong>(GATE IT 2005)</strong></p>",
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
          "explanation": "<a href=\"https://gateoverflow.in/3789/gate2005-it-42\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Given below is a program which when executed spawns two concurrent processes :<br>\nsemaphore X : = 0 ;<br>\n/* Process now forks into concurrent processes P1 &amp; P2 */<br>\\(\\begin{array}{|l|l|}\\hline \\text{$P1$} &amp; \\text{$P2$} \\\\\\hline \\text{repeat forever } &amp; \\text{repeat forever} \\\\ \\text{$V (X) ;$ } &amp; \\text{$ P(X) ;$} \\\\ \\text{Compute; } &amp; \\text{Compute;}\\\\ \\text{$P(X) ;$ } &amp; \\text{$V(X) ;$} \\\\\\hline \\end{array}\\)<br>\nConsider the following statements about processes P1 and P2:<br>\nI.It is possible for process P1 to starve.<br>\nII.It is possible for process P2 to starve.<br>\nWhich of the following holds? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both (I) and (II) are true.</p>",
            "<b>B.</b> <p>(I) is true but (II) is false.</p>",
            "<b>C.</b> <p>(II) is true but (I) is false</p>",
            "<b>D.</b> <p>Both (I) and (II) are false</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Both (I) and (II) are true.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3788/gate2005-it-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>A user level process in Unix traps the signal sent on a Ctrl-C input, and has a signal handling routine that saves appropriate files before terminating the process. When a Ctrl-C input is given to this process, what is the mode in which the signal handling routine executes? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>User mode</p>",
            "<b>B.</b> <p>Kernel mode</p>",
            "<b>C.</b> <p>Superuser mode</p>",
            "<b>D.</b> <p>Privileged mode</p>"
          ],
          "correct_answer": "<b>A.</b> <p>User mode</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3764/gate2005-it-19-ugcnet-june2012-iii-57\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>The shell command<br><pre><code> find -name passwd -print</code></pre> <br>\nis executed in /etc directory of a computer system running Unix. Which of the following shell commands will give the same information as the above command when executed in the same directory? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>ls passwd</p>",
            "<b>B.</b> <p>cat passwd</p>",
            "<b>C.</b> <p>grep name passwd</p>",
            "<b>D.</b> <p>grep print passwd</p>"
          ],
          "correct_answer": "<b>C.</b> <p>grep name passwd</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3763/gate2005-it-18\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>A student wishes to create symbolic links in a computer system running Unix. Three text files named \"file 1\", \"file 2\" and \"file 3\" exist in her current working directory, and the student has read and write permissions for all three files. Assume that file 1 contains information about her hobbies, file 2 contains information about her friends and file 3 contains information about her courses. The student executes the following sequence of commands from her current working directory. <br><pre><code> ln -s file 1 file 2\nln -s file 2 file 3</code></pre> <br>\nWhich of the following types of information would be lost from her file system?<br>\nI.Hobbies<br>\nII.Friends<br>\nIII.Courses<br> <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II only</p>",
            "<b>B.</b> <p>II and III only</p>",
            "<b>C.</b> <p>II only</p>",
            "<b>D.</b> <p>I and III only</p>"
          ],
          "correct_answer": "<b>B.</b> <p>II and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3762/gate2005-it-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the following code fragment:<pre><code>  if (fork() == 0)\n  { a = a + 5; printf(\"%d,%dn\", a, &amp;a); }\n  else { a = a - 5; printf(\"%d, %dn\", a, &amp;a); }  </code></pre> Let u, v be the values printed by the parent process, and x, y be the values printed by the child process. Which one of the following is TRUE? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>u = x + 10 and v = y</p>",
            "<b>B.</b> <p>u = x + 10 and v != y</p>",
            "<b>C.</b> <p>u + 10 = x and v = y</p>",
            "<b>D.</b> <p>u + 10 = x and v != y</p>"
          ],
          "correct_answer": "<b>C.</b> <p>u + 10 = x and v = y</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/765/gate2005-72#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
