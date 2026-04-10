window.__examLoadCallback({
  "title": "Operating_System - Operating_System - Slot 8",
  "duration": 42,
  "sections": [
    {
      "name": "Operating_System",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
          "question": "<p>Consider the following table of arrival time and burst time for three processes P0,\nP1 and P2. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q46_43e646e6.jpg\"> <br>\nThe pre-emptive shortest job first scheduling algorithm is used. Scheduling is\ncarried out only at arrival or completion of processes. What is the average\nwaiting time for the three processes? <br><br><strong>(GATE CSE 2011)</strong></p>",
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
          "id": 9,
          "question": "<p>Let the page fault service time be 10ms in a computer with average memory\naccess time being 20ns. If one page fault is generated for every \\(10^{6}\\) memory\naccesses, what is the effective access time for the memory? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>21ns</p>",
            "<b>B.</b> <p>30ns</p>",
            "<b>C.</b> <p>23ns</p>",
            "<b>D.</b> <p>35ns</p>"
          ],
          "correct_answer": "<b>B.</b> <p>30ns</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2122/gate2011-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>A thread is usually defined as a 'light weight process' because an operating\nsystem (OS) maintains smaller data structures for a thread than for a process. In\nrelation to this, which of the followings is TRUE? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>On per-thread basis, the OS maintains only CPU register state</p>",
            "<b>B.</b> <p>The OS does not maintain a separate stack for each thread</p>",
            "<b>C.</b> <p>On per-thread basis, the OS does not maintain virtual memory state</p>",
            "<b>D.</b> <p>On per thread basis, the OS maintains only scheduling and accounting information</p>"
          ],
          "correct_answer": "<b>C.</b> <p>On per-thread basis, the OS does not maintain virtual memory state</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2118/gate2011-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Let the time taken to switch between user and kernel modes of execution be t1\nwhile the time taken to switch between two processes be t2. Which of the\nfollowing is TRUE? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(t_{1}\\gt t_{2}\\)</p>",
            "<b>B.</b> <p>\\(t_{1}=t_{2}\\)</p>",
            "<b>C.</b> <p>\\(t_{1}\\lt t_{2}\\)</p>",
            "<b>D.</b> <p>Nothing can be said about the relation between t1 and t2</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(t_{1}\\lt t_{2}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2108/gate2011-6#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>A system has n resources \\(R_{0},...R_{n-1}\\), and k processes \\(P_{0},...P_{k-1}\\). The\nimplementation of the resource request logic of each process \\(P_{i}\\) is as follows:<pre><code> \nif (i%2= = 0) {\n        if (i\\(\\lt\\)n) request \\(R_{i}\\) ;\n        if (i+2\\(\\lt\\)n)request \\(R_{i+2}\\);\n}\nelse {\n         if (i\\(\\lt\\)n) request \\(R_{n-i}\\);\n         if (i+2\\(\\lt\\)n)request \\(R_{n-i-2}\\) ;\n} </code></pre>\nIn which one of the following situations is a deadlock possible? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n = 40,k = 26</p>",
            "<b>B.</b> <p>n = 21,k = 12</p>",
            "<b>C.</b> <p>n = 20,k = 10</p>",
            "<b>D.</b> <p>n = 41,k = 19</p>"
          ],
          "correct_answer": "<b>B.</b> <p>n = 21,k = 12</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2348/gate2010-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>The following program consists of 3 concurrent processes and 3 binary\nsemaphores. The semaphores are initialized as S0=1, S1=0, S2=0. How many times will process P0 print '0'? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q45_03507a62.jpg\"><br> How many times will process P0 print '0'? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>At least twice</p>",
            "<b>B.</b> <p>Exactly twice</p>",
            "<b>C.</b> <p>Exactly thrice</p>",
            "<b>D.</b> <p>Exactly once</p>"
          ],
          "correct_answer": "<b>A.</b> <p>At least twice</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2347/gate2010-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
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
          "id": 15,
          "question": "<p>A system uses FIFO policy for page replacement. It has 4 page frames with no pages loaded to begin with. The system first accesses 100 distinct pages in some order and then accesses the same 100 pages but now in the reverse order. How many page faults will occur? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>196</p>",
            "<b>B.</b> <p>192</p>",
            "<b>C.</b> <p>197</p>",
            "<b>D.</b> <p>195</p>"
          ],
          "correct_answer": "<b>A.</b> <p>196</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2203/gate2010-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
