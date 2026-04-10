window.__examLoadCallback({
  "title": "Operating_System - Operating_System - Slot 17",
  "duration": 42,
  "sections": [
    {
      "name": "Operating_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>A process executes the following code<pre><code>for (i = 0; i &lt; n; i + +) fork( );</code></pre>The total number of child processes created is <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n</p>",
            "<b>B.</b> <p>\\(2^{n}-1\\)</p>",
            "<b>C.</b> <p>\\(2^{n}\\)</p>",
            "<b>D.</b> <p>\\(2^{n+1}-1\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(2^{n}-1\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/489/gate2008-66#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Which of the following is NOT true of deadlock prevention and deadlock\navoidance schemes? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>In deadlock prevention, the request for resources is always granted if the\nresulting state is safe</p>",
            "<b>B.</b> <p>In deadlock avoidance, the request for resources is always granted if the\nresult state is safe</p>",
            "<b>C.</b> <p>Deadlock avoidance is less restrictive than deadlock prevention</p>",
            "<b>D.</b> <p>Deadlock avoidance requires knowledge of resource requirements a priori</p>"
          ],
          "correct_answer": "<b>A.</b> <p>In deadlock prevention, the request for resources is always granted if the\nresulting state is safe</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/488/gate2008-65#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>The P and V operations on counting semaphores, where s is a counting\nsemaphore, are defined as follows:<pre><code>P(s) : s =  s - 1;\n     if (s  &lt; 0) then wait;\nV(s) : s = s + 1;\n     if (s &lt;= 0) then wakeup a process waiting on s; </code></pre>\nAssume that \\(P_{b}\\) and \\(V_{b}\\) the wait and signal operations on binary semaphores are\nprovided. Two binary semaphores \\(x_{b}\\) and \\(y_{b}\\) are used to implement the\nsemaphore operations P(s) and V(s) as follows:<pre><code>P(s) : Pb(xb);\n  s = s - 1;\n  if (s &lt; 0) {\n   Vb(xb) ;\n   Pb(Yb) ;\n  }\n  else Vb(xb); \n\nV(s) : Pb(xb) ;\n  s = s + 1;\n  if (s &lt;= 0) Vb(Yb) ;\n  Vb(xb) ;</code></pre>\nThe initial values of xb and yb are respectively <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0 and 0</p>",
            "<b>B.</b> <p>0 and 1</p>",
            "<b>C.</b> <p>1 and 0</p>",
            "<b>D.</b> <p>1 and 1</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1 and 0</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/486/gate2008-63#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>A client process P needs to make a TCP connection to a server process S. Consider the following situation: the server process S executes a socket(), a bind() and a listen() system call in that order, following which it is preempted. Subsequently, the client process P executes a socket() system call followed by connect() system call to connect to the server process S. The server process has not executed any accept() system call. Which one of the following events could take place? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>connect() system call returns successfully</p>",
            "<b>B.</b> <p>connect() system call blocks</p>",
            "<b>C.</b> <p>connect() system call returns an error</p>",
            "<b>D.</b> <p>connect() system call results in a core dump</p>"
          ],
          "correct_answer": "<b>C.</b> <p>connect() system call returns an error</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/482/gate2008-59#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>The data blocks of a very large file in the Unix file system are allocated using <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>contiguous allocation</p>",
            "<b>B.</b> <p>linked allocation</p>",
            "<b>C.</b> <p>indexed allocation</p>",
            "<b>D.</b> <p>an extension of indexed allocation</p>"
          ],
          "correct_answer": "<b>D.</b> <p>an extension of indexed allocation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/418/gate2008-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Which of the following system calls results in the sending of SYN packets? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>socket</p>",
            "<b>B.</b> <p>bind</p>",
            "<b>C.</b> <p>listen</p>",
            "<b>D.</b> <p>connect</p>"
          ],
          "correct_answer": "<b>D.</b> <p>connect</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/415/gate2008-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Feedback queues <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>are very simple to implement</p>",
            "<b>B.</b> <p>dispatch tasks according to execution characteristics</p>",
            "<b>C.</b> <p>are used to favour real time tasks</p>",
            "<b>D.</b> <p>require manual intervention to implement properly</p>"
          ],
          "correct_answer": "<b>B.</b> <p>dispatch tasks according to execution characteristics</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49632/isro2007-64-isro2008-50\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>The minimum number of page frames that must be allocated to a running process in a virtual memory environment is determined by <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the instruction set architecture</p>",
            "<b>B.</b> <p>page size</p>",
            "<b>C.</b> <p>number of processes in memory</p>",
            "<b>D.</b> <p>physical memory size</p>"
          ],
          "correct_answer": "<b>A.</b> <p>the instruction set architecture</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1018/gate2004-21-isro2007-44\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>On a system using non-preemptive scheduling, processes with expected run times of 5, 18, 9 and 12 are in the ready queue. In what order should they be run to minimize wait time? <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5, 12, 9, 18</p>",
            "<b>B.</b> <p>5, 9, 12, 18</p>",
            "<b>C.</b> <p>12, 18, 9, 5</p>",
            "<b>D.</b> <p>9, 12, 18, 5</p>"
          ],
          "correct_answer": "<b>B.</b> <p>5, 9, 12, 18</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49520/isro2007-43\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Semaphores <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>synchronize critical resources to prevent deadlock</p>",
            "<b>B.</b> <p>synchronize critical resources to prevent contention</p>",
            "<b>C.</b> <p>are used to do I/O</p>",
            "<b>D.</b> <p>are used for memory management</p>"
          ],
          "correct_answer": "<b>B.</b> <p>synchronize critical resources to prevent contention</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49517/isro2007-42-ugcnet-june2010-ii-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>A task in a blocked state <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>is executable</p>",
            "<b>B.</b> <p>is running</p>",
            "<b>C.</b> <p>must still be placed in the run queues</p>",
            "<b>D.</b> <p>is waiting for some temporarily unavailable resources</p>"
          ],
          "correct_answer": "<b>D.</b> <p>is waiting for some temporarily unavailable resources</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49516/isro2007-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider a system having 'm' resources of the same type. The resources are shared by 3 processes A, B, C, which have peak time demands of 3, 4, 6 respectively. The minimum value of 'm' that ensures that deadlock will never occur is <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>11</p>",
            "<b>B.</b> <p>12</p>",
            "<b>C.</b> <p>13</p>",
            "<b>D.</b> <p>14</p>"
          ],
          "correct_answer": "<b>A.</b> <p>11</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49515/isro2007-40\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Disk requests are received by a disk drive for cylinder 5, 25, 18, 3, 39, 8 and 35 in that order. A seek takes 5 msec per cylinder moved. How much seek time is needed to serve these requests for a Shortest Seek First (SSF) algorithm? Assume that the arm is at cylinder 20 when the last of these requests is made with none of the requests yet served <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>125 msec</p>",
            "<b>B.</b> <p>295 msec</p>",
            "<b>C.</b> <p>575 msec</p>",
            "<b>D.</b> <p>750 msec</p>"
          ],
          "correct_answer": "<b>B.</b> <p>295 msec</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49514/isro2007-39\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Virtual memory is <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Part of Main Memory only used for swapping</p>",
            "<b>B.</b> <p>A technique to allow a program, of size more than the size of main memory, to run</p>",
            "<b>C.</b> <p>Part of secondary storage used in program execution</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A technique to allow a program, of size more than the size of main memory, to run</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49500/isro2007-27\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>What is the name of the technique in which the operating system of a computer executes several programs concurrently by switching back and forth between them? <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Partitioning</p>",
            "<b>B.</b> <p>Multi-tasking</p>",
            "<b>C.</b> <p>Windowing</p>",
            "<b>D.</b> <p>Paging</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Multi-tasking</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49498/isro2007-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
