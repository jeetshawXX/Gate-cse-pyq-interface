window.__examLoadCallback({
  "title": "Operating_System - Operating_System - Slot 12",
  "duration": 42,
  "sections": [
    {
      "name": "Operating_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>Suppose we have variable logical records of lengths of 5 bytes, 10 bytes and 25 bytes while the physical block size in disk is 15 bytes. What is the maximum and minimum fragmentation seen in bytes? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>25 and 5</p>",
            "<b>B.</b> <p>15 and 5</p>",
            "<b>C.</b> <p>15 and 0</p>",
            "<b>D.</b> <p>10 and 5</p>"
          ],
          "correct_answer": "<b>D.</b> <p>10 and 5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44398/isro-2013-52\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the following set of processes, with arrival times and the required CPU-burst times given in milliseconds.<br>\n\\(\\begin{array}{|l|l|l|l|} \\hline \\textbf{Process} &amp; \\textbf{Arrival time} &amp; \\textbf{Burst Time} \\\\\\hline \\text{$P_1$} &amp; \\text{0} &amp; \\text{4} \\\\\\hline \\text{$P_2$} &amp; \\text{2} &amp; \\text{2} \\\\\\hline \\text{$P_3$}&amp; \\text{3} &amp; \\text{1} \\\\\\hline \\end{array}\\)<br>\nWhat is the sequence in which the processes are completed? Assume round robin scheduling with a time quantum of 2 milliseconds? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P1, P2, P3</p>",
            "<b>B.</b> <p>P2, P1, P3</p>",
            "<b>C.</b> <p>P3, P2, P1</p>",
            "<b>D.</b> <p>P2, P3, P1</p>"
          ],
          "correct_answer": "<b>B.</b> <p>P2, P1, P3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44166/isro-2013-50\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>A computer uses 46-bit virtual address, 32-bit physical address, and a three-level paged page\ntable organization. The page table base register stores the base address of the first-level table\n(T1) ,which occupies exactly one page. Each entry of T1 stores the base address of a page of the\nsecond-level table (T2 ) Each entry of T2 stores the base address of a page of the third-level table\n(T3 ) Each entry of T3 stores a page table entry (PTE). The PTE is 32 bits in size. The processor\nused in the computer has a 1 MB 16 way set associative virtually indexed physically tagged cache.\nThe cache block size is 64 bytes. <br><br>What is the minimum number of page colours needed to guarantee that no two synonyms map to\ndifferent sets in the processor cache of this computer? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>8</p>",
            "<b>D.</b> <p>16</p>"
          ],
          "correct_answer": "<b>C.</b> <p>8</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43294/gate2013-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>A computer uses 46-bit virtual address, 32-bit physical address, and a three-level paged page\ntable organization. The page table base register stores the base address of the first-level table\n(T1) ,which occupies exactly one page. Each entry of T1 stores the base address of a page of the\nsecond-level table (T2 ) Each entry of T2 stores the base address of a page of the third-level table\n(T3 ) Each entry of T3 stores a page table entry (PTE). The PTE is 32 bits in size. The processor\nused in the computer has a 1 MB 16 way set associative virtually indexed physically tagged cache.\nThe cache block size is 64 bytes. <br><br>What is the size of a page in KB in this computer? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>8</p>",
            "<b>D.</b> <p>16</p>"
          ],
          "correct_answer": "<b>C.</b> <p>8</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/379/gate2013-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>A certain computation generates two arrays a and b such that a[i]=f(i)for \\(o\\leq i \\lt n\\)  and b[i] = g (a[i] )for \\(o\\leq i \\lt n\\). Suppose this computation is decomposed into two concurrent processes\nX and Y such that X computes the array a and Y computes the array b. The processes employ two\nbinary semaphores R and S, both initialized to zero. The array a is shared by the two processes. The\nstructures of the processes are shown below.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q39_4478bc8b.jpg\">  <br>\nWhich one of the following represents the CORRECT implementations of ExitX and EntryY? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>ExitX(R, S) {\nP(R);\nV(S);\n}\nEntryY(R, S) {\nP(S);\nV(R);\n}</p>",
            "<b>B.</b> <p>ExitX(R, S) {\nV(R);\nV(S);\n}\nEntryY(R, S) {\nP(R);\nP(S);\n}</p>",
            "<b>C.</b> <p>ExitX(R, S) {\nP(S);\nV(R);\n}\nEntryY(R, S) {\nV(S);\nP(R);\n}</p>",
            "<b>D.</b> <p>ExitX(R, S) {\nV(R);\nP(S);\n}\nEntryY(R, S) {\nV(S);\nP(R);\n}</p>"
          ],
          "correct_answer": "<b>C.</b> <p>ExitX(R, S) {\nP(S);\nV(R);\n}\nEntryY(R, S) {\nV(S);\nP(R);\n}</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1550/gate2013-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>A shared variable x, initialized to zero, is operated on by four concurrent processes W, X, Y, Z as\nfollows. Each of the processes W and X reads x from memory, increments by one, stores it to\nmemory, and then terminates. Each of the processes Y and Z reads x from memory, decrements by\ntwo, stores it to memory, and then terminates. Each process before reading x invokes the P\noperation (i.e., wait) on a counting semaphore S and invokes the V operation (i.e., signal) on the\nsemaphore S after storing x to memory. Semaphore S is initialized to two. What is the maximum\npossible value of x after all processes complete execution? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>-2</p>",
            "<b>B.</b> <p>-1</p>",
            "<b>C.</b> <p>1</p>",
            "<b>D.</b> <p>2</p>"
          ],
          "correct_answer": "<b>D.</b> <p>2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1545/gate2013-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Three concurrent processes X, Y, and Z execute three different code segments that access and\nupdate certain shared variables. Process X executes the P operation (i.e., wait) on semaphores\na, b and c; process Y executes the P operation on semaphores b, c and d; process Z executes the\nP operation on semaphores c, d, and a before entering the respective code segments. After\ncompleting the execution of its code segment, each process invokes the V operation (i.e., signal) on\nits three semaphores. All semaphores are binary semaphores initialized to one. Which one of the\nfollowing represents a deadlock-free order of invoking the P operations by the processes? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>X: P(a)P(b)P(c) Y: P(b)P(c)P(d) Z: P(c)P(d)P(a)</p>",
            "<b>B.</b> <p>X: P(b)P(a)P(c) Y: P(b)P(c)P(d) Z: P(a)P(c)P(d)</p>",
            "<b>C.</b> <p>X: P(b)P(a)P(c) Y: P(c)P(b)P(d) Z: P(a)P(c)P(d)</p>",
            "<b>D.</b> <p>X: P(a)P(b)P(c) Y: P(c)P(b)P(d) Z: P(c)P(d)P(a)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>X: P(b)P(a)P(c) Y: P(b)P(c)P(d) Z: P(a)P(c)P(d)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1438/gate2013-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
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
          "id": 9,
          "question": "<p>Consider the virtual page reference string <br>\n1, 2, 3, 2, 4, 1, 3, 2, 4, 1 <br>\non a demand paged virtual memory system running on a computer system that has main memory\nsize of 3 page frames which are initially empty. Let LRU, FIFO and OPTIMAL denote the number\nof page faults under the corresponding page replacement policy. Then <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(OPTIMAL \\lt LRU \\lt FIFO\\)</p>",
            "<b>B.</b> <p>\\(OPTIMAL \\lt FIFO \\lt LRU\\)</p>",
            "<b>C.</b> <p>OPTIMAL = LRU</p>",
            "<b>D.</b> <p>OPTIMAL = FIFO</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(OPTIMAL \\lt FIFO \\lt LRU\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2150/gate2012-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>A file system with 300 GByte disk uses a file descriptor with 8 direct block addresses, 1 indirect\nblock address and 1 doubly indirect block address. The size of each disk block is 128 Bytes and the\nsize of each disk block address is 8 Bytes. The maximum possible file size in this file system is <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3 KBytes</p>",
            "<b>B.</b> <p>35 KBytes</p>",
            "<b>C.</b> <p>280 KBytes</p>",
            "<b>D.</b> <p>dependent on the size of the disk</p>"
          ],
          "correct_answer": "<b>B.</b> <p>35 KBytes</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2149/gate2012-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Fetch_And_Add(X,i) is an atomic Read-Modify-Write instruction that reads the value of\nmemory location X, increments it by the value i, and returns the old value of X. It is used in the\npseudocode shown below to implement a busy-wait lock. L is an unsigned integer shared variable\ninitialized to 0. The value of 0 corresponds to lock being available, while any non-zero value\ncorresponds to the lock being not available.<pre><code> AcquireLock(L){\n   while (Fetch_And_Add(L,1))\n        L = 1;\n}\nReleaseLock(L){\n     L = 0;\n} </code></pre>\nThis implementation <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>fails as L can overflow</p>",
            "<b>B.</b> <p>fails as L can take on a non-zero value when the lock is actually available</p>",
            "<b>C.</b> <p>works correctly but may starve some processes</p>",
            "<b>D.</b> <p>works correctly without starvation</p>"
          ],
          "correct_answer": "<b>B.</b> <p>fails as L can take on a non-zero value when the lock is actually available</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1750/gate2012-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the 3 processes, P1, P2 and P3 shown in the table. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q31_4db3f95a.jpg\"><br> The completion order of the 3 processes under the policies FCFS and RR2 (round robin scheduling with CPU quantum of 2 time units) are <br><br><strong>(GATE CSE 2012)</strong></p>",
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
          "id": 13,
          "question": "<p>A process executes the code <br>\nfork(); <br>\nfork(); <br>\nfork(); <br>\nThe total number of child processes created is <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>7</p>",
            "<b>D.</b> <p>8</p>"
          ],
          "correct_answer": "<b>C.</b> <p>7</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/40/gate2012-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>In a system using single processor, a new process arrives at the rate of six processes per minute and each such process requires seven seconds of service time. What is the CPU utilization? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>70%</p>",
            "<b>B.</b> <p>30%</p>",
            "<b>C.</b> <p>60%</p>",
            "<b>D.</b> <p>64%</p>"
          ],
          "correct_answer": "<b>A.</b> <p>70%</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/53151/isro2011-77\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Belady's anomaly means <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Page fault rate is constant even on increasing the number of allocated frames</p>",
            "<b>B.</b> <p>Page fault rate may increase on increasing the number of allocated frames</p>",
            "<b>C.</b> <p>Page fault rate may increase on decreasing the number of allocated frames</p>",
            "<b>D.</b> <p>Page fault rate may decrease on increasing the number of allocated frames</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Page fault rate may increase on increasing the number of allocated frames</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52871/isro2011-73\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
