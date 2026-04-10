window.__examLoadCallback({
  "title": "Operating_System - Operating_System - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "Operating_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following code snippet using the fork() and wait() system calls.\nAssume that the code compiles and runs correctly, and that the system calls run\nsuccessfully without any errors.<pre><code>\nint x = 3;\nwhile(x &gt; 0) {\nfork();\nprintf(\"hello\");\nwait(NULL);\nx--;\n}</code></pre>\nThe total number of times the printf statement is executed is ___ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "14",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422795/gate-cse-2024-set-1-question-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the following two threads \\(\\mathrm{T} 1 \\) and \\(\\mathrm{T} 2 \\) that update two shared variables \\(\\mathrm{a} \\) and \\(\\mathrm{b} \\). Assume that initially \\(\\mathrm{a}=\\mathrm{b}=1 \\). Though context switching between threads can happen at any time, each statement of \\(\\mathrm{T} 1 \\) or \\(\\mathrm{T} 2 \\) is executed atomically without interruption.<br><br>\n\\(\n\\begin{array}{cc}\n\\mathrm{T} 1 &amp; \\mathrm{~T} 2 \\\\\n\\mathrm{a}=\\mathrm{a}+1 ; &amp; \\mathrm{b}=2*\\mathrm{b} ; \\\\\n\\mathrm{b}=\\mathrm{b}+1 ; &amp; \\mathrm{a}=2*\\mathrm{a} ;\n\\end{array}\n\\)\n<br><br>\nWhich one of the following options lists all the possible combinations of values of \\(\\mathrm{a} \\) and \\(\\mathrm{b} \\) after both \\(\\mathrm{T} 1 \\) and \\(\\mathrm{T} 2 \\) finish execution? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(a=4, b=4) ;(a=3, b=3) ;(a=4, b=3)</p>",
            "<b>B.</b> <p>(a=3, b=4) ;(a=4, b=3) ;(a=3, b=3)</p>",
            "<b>C.</b> <p>(a=4, b=4) ;(a=4, b=3) ;(a=3, b=4)</p>",
            "<b>D.</b> <p>(a=2, b=2) ;(a=2, b=3) ;(a=3, b=4)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>(a=4, b=4) ;(a=3, b=3) ;(a=4, b=3)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422812/gate-cse-2024-set-1-question-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Which of the following process state transitions is/are NOT possible? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Running to Ready</p>",
            "<b>B.</b> <p>Waiting to Running</p>",
            "<b>C.</b> <p>Ready to Waiting</p>",
            "<b>D.</b> <p>Running to Terminated</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>Waiting to Running</p>",
            "<b>C.</b> <p>Ready to Waiting</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422827/gate-cse-2024-set-1-question-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Which of the following statements about threads is/are TRUE? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Threads can only be implemented in kernel space</p>",
            "<b>B.</b> <p>Each thread has its own file descriptor table for open files</p>",
            "<b>C.</b> <p>All the threads belonging to a process share a common stack</p>",
            "<b>D.</b> <p>Threads belonging to a process are by default not protected from each other</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Threads belonging to a process are by default not protected from each other</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422828/gate-cse-2024-set-1-question-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider a computer system with 57-bit virtual addressing using multi-level\ntree-structured page tables with L levels for virtual to physical address translation.\nThe page size is 4 KB (1 KB = 1024 B) and a page table entry at any of the levels\noccupies 8 bytes.<br>\nThe value of L is ______. <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399263/gate-cse-2023-question-48#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the following two-dimensional array D in the C programming language,\nwhich is stored in row-major order:<br><br>\nint D[128][128];<br><br>\nDemand paging is used for allocating memory and each physical page frame holds\n512 elements of the array D. The Least Recently Used (LRU) page-replacement\npolicy is used by the operating system. A total of 30 physical page frames are\nallocated to a process which executes the following code snippet:<br><pre><code>\nfor (int i = 0; i &lt; 128; i++)\n       for (int j = 0; j &lt; 128; j++) \n                   D[j][i] *= 10;\n</code></pre><br>\nThe number of page faults generated during the execution of this code snippet is _____. <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4096",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399264/gate-cse-2023-question-47#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the two functions incr and decr shown below.<pre><code>\nincr(){\n  wait(s);\n  X = X+1;\n  signal(s);\n}\n\ndecr(){\n  wait(s);\n  X = X-1;\n  signal(s);\n}\n\n</code></pre>There are 5 threads each invoking incr once, and 3 threads each invoking decr\nonce, on the same shared variable X. The initial value of X is 10.<br>\nSuppose there are two implementations of the semaphore \\(s\\), as follows:<br><br>\nI-1: s is a binary semaphore initialized to 1.\n<br>I-2: s is a counting semaphore initialized to 2.\n<br><br>Let V1, V2 be the values of X at the end of execution of all the threads with\nimplementations I-1, I-2, respectively.<br>\nWhich one of the following choices corresponds to the minimum possible values of\nV1, V2, respectively? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>15, 7</p>",
            "<b>B.</b> <p>7, 7</p>",
            "<b>C.</b> <p>12, 7</p>",
            "<b>D.</b> <p>12, 8</p>"
          ],
          "correct_answer": "<b>C.</b> <p>12, 7</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/399283/gate-cse-2023-question-28#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
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
          "id": 9,
          "question": "<p>Which one or more of the following options guarantee that a computer system will\ntransition from user mode to kernel mode? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Function Call</p>",
            "<b>B.</b> <p>malloc Call</p>",
            "<b>C.</b> <p>Page Fault</p>",
            "<b>D.</b> <p>System Call</p>"
          ],
          "correct_answer": [
            "<b>C.</b> <p>Page Fault</p>",
            "<b>D.</b> <p>System Call</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399299/gate-cse-2023-question-13#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Which one or more of the following need to be saved on a context switch from one\nthread (T1) of a process to another thread (T2) of the same process? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Page table base register</p>",
            "<b>B.</b> <p>Stack pointer</p>",
            "<b>C.</b> <p>Program counter</p>",
            "<b>D.</b> <p>General purpose registers</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>Stack pointer</p>",
            "<b>C.</b> <p>Program counter</p>",
            "<b>D.</b> <p>General purpose registers</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399300/gate-cse-2023-question-12#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider a demand paging system with four page frames (initially empty) and LRU page replacement policy. For the following page reference string\n<br><br>\n7, 2, 7, 3, 2, 5, 3, 4, 6, 7, 7,1, 5, 6,1\n<br><br>\nthe page fault rate, defined as the ratio of number of page faults to the number of memory accesses (rounded off to one decimal place) is <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0.6",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371882/Gate-cse-2022-question-54#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider two files systems A and B , that use contiguous allocation and linked allocation, respectively. A file of size 100 blocks is already stored in A and also in\nB. Now, consider inserting a new block in the middle of the file (between \\(50^{th}  \\text{ and }51^{st}\\) block), whose data is already available in the memory. Assume that there are enough free blocks at the end of the file and that the file control blocks are already in memory. Let the number of disk accesses required to insert a block in the middle of the file in   A   and     B   are \\(n_A\\) and \\(n_B\\),   respectively, then the value of  \\(n_A+n_B\\)  is <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "153",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371883/Gate-cse-2022-question-53#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
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
          "id": 14,
          "question": "<p>Which one of the following statements is FALSE? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The TLB performs an associative search in parallel on all its valid entries using page number of incoming virtual address.</p>",
            "<b>B.</b> <p>If the virtual address of a word given by CPU has a TLB hit, but the subsequent search for the word results in a cache miss, then the word will always be present in the main memory.</p>",
            "<b>C.</b> <p>The memory access time using a given inverted page table is always same for all incoming virtual addresses.</p>",
            "<b>D.</b> <p>In a system that uses hashed page tables, if two distinct virtual addresses V1 and V2 map to the same value while hashing, then the memory access time of these addresses will not be the same.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The memory access time using a given inverted page table is always same for all incoming virtual addresses.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/371908/Gate-cse-2022-question-28#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Which of the following statements is/are TRUE with respect to deadlocks? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Circular wait is a necessary condition for the formation of deadlock.</p>",
            "<b>B.</b> <p>In a system where each resource has more than one instance, a cycle in its wait-for graph indicates the presence of a deadlock.</p>",
            "<b>C.</b> <p>If the current allocation of resources to processes leads the system to unsafe state, then deadlock will necessarily occur.</p>",
            "<b>D.</b> <p>In the resource-allocation graph of a system, if every edge is an assignment edge, then the system is not in deadlock state.</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>Circular wait is a necessary condition for the formation of deadlock.</p>",
            "<b>D.</b> <p>In the resource-allocation graph of a system, if every edge is an assignment edge, then the system is not in deadlock state.</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371920/Gate-cse-2022-question-16#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
