window.__examLoadCallback({
  "title": "Operating_System - Operating_System - Slot 5",
  "duration": 42,
  "sections": [
    {
      "name": "Operating_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>Recall that Belady's anomaly is that the pages-fault rate may increase as the number of\nallocated frames increases. Now consider the following statements: <br><br>\nS1: Random page replacement algorithm (where a page chosen at random is replaced)\nsuffers from Belady's anomaly <br>\nS2: LRU page replacement algorithm suffers from Belady's anomaly <br><br>\nWhich of the following is CORRECT ? <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1 is true, S2 is true</p>",
            "<b>B.</b> <p>S1 is true, S2 is false</p>",
            "<b>C.</b> <p>S1 is false , S2 is true</p>",
            "<b>D.</b> <p>S1 is false, S2 is false</p>"
          ],
          "correct_answer": "<b>B.</b> <p>S1 is true, S2 is false</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118323/gate-cse-2017-set-1-question-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>A multithreaded program P executes with x number of threads and uses y number of locks for\nensuring mutual exclusion while operating on shared memory locations. All locks in the\nprogram are non-reentrant, i.e., if a thread holds a lock l, then it cannot re-acquire lock l\nwithout releasing it. If a thread is unable to acquire a lock, it blocks until the lock becomes\navailable. The minimum value of x and the minimum value of y together for which execution\nof P can result in a deadlock are: <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>x = 1, y = 2</p>",
            "<b>B.</b> <p>x =2, y=1</p>",
            "<b>C.</b> <p>x = 2,y=2</p>",
            "<b>D.</b> <p>x = 1, y = 1</p>"
          ],
          "correct_answer": "<b>D.</b> <p>x = 1, y = 1</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118307/gate2017-1-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the following CPU processes with arrival times (in milliseconds) and length of CPU\nburst (in milliseconds) as given below:  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q9_b12a8e72.jpg\"><br> If the pre-emptive shortest remaining time first scheduling algorithm is used to schedule the processes., then the average waiting time across all processes is ________ milliseconds. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118304/gate2017-1-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Threads of a process share <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>global variable but not heap.</p>",
            "<b>B.</b> <p>heap but not global variables.</p>",
            "<b>C.</b> <p>neither global variables nor heap.</p>",
            "<b>D.</b> <p>Both heap and global variables.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Both heap and global variables.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118298/gate2017-1-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider a non-negative counting semaphore S. The operation P(S) decrements S, and V(S) increments S. During an execution, 20 P(S) operations and 12V(S) operations are issued in some order. The largest initial value of S for which at least one P(S) operation will remain blocked is ________. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39576/gate2016-2-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the following two-process synchronization solution. <br>\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q48_7f562996.jpg\"><br>\nThe shared variable turn is initialized to zero.Which one of the following is TRUE? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>This is a correct two-process synchronization solution.</p>",
            "<b>B.</b> <p>This solution violates mutual exclusion requirement</p>",
            "<b>C.</b> <p>This solution violates progress requirement</p>",
            "<b>D.</b> <p>This solution violates bounded wait requirement</p>"
          ],
          "correct_answer": "<b>C.</b> <p>This solution violates progress requirement</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39600/gate2016-2-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the following processes, with the arrival time and the length of the CPU burst given in milli seconds.The scheduling algorithm used is preemptive shortest remaining-time first.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q47_5095f5ac.jpg\"><br> The average turn around time of these processes is milliseconds. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "8.2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39625/gate2016-2-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>In which one of the following page replacement algorithms it is possible for the page fault rate to increase even when the number of allocated frames increases? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>LRU(Least Recently Used)</p>",
            "<b>B.</b> <p>OPT (Optimal Page Replacement)</p>",
            "<b>C.</b> <p>MRU(Most Recently Used)</p>",
            "<b>D.</b> <p>FIFO(First In First Out)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>FIFO(First In First Out)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39559/gate2016-2-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the following proposed solution for the critical section problem. There are n processes: \\(P_{0}...P_{n-1}\\) . In the code,function \\(pmax\\) returns an integer not smaller than any of its arguments. For all i, t[i] is initialized to zero.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q50_17a8780c.jpg\"> <br>\nWhich one of the following is TRUE about the above solution? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>At most one process can be in the critical section at any time</p>",
            "<b>B.</b> <p>The bounded wait condition is satisfied</p>",
            "<b>C.</b> <p>The progress condition is satisfied</p>",
            "<b>D.</b> <p>It cannot cause a deadlock</p>"
          ],
          "correct_answer": "<b>A.</b> <p>At most one process can be in the critical section at any time</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39719/gate2016-1-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider a computer system with ten physical page frames. The system is provided with an accessse quence \\((a_{1},a_{2},...,a_{20},a_{1},a_{2},...,a_{20})\\), where each \\(a_{i}\\) is a distinct virtual page number. The difference in the number of page faults between the last-in-first-outpage replacement policy and the optimal page replacement policy is ______. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39711/gate2016-1-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider a disk queue with requests for I/O to blocks on cylinders 47,38,121,191,87,11, 92, 10. The C-LOOK scheduling algorithm is used. The head is initially at cylinder number 63, moving to wards larger cylinder numbers on its servicing pass. The cylinders are numbered from 0to 199. The total head movement (in number of cylinders) incurred while servicing these requests is____ . <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "346",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39716/gate2016-1-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider a computer system with 40-bit virtual addressing and page size of sixteen\nkilobytes. If the computer system has a one level page table per process and each page table entry requires 48 bits, then the size of the per-process page table is _________ mega bytes. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "384",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39690/gate2016-1-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
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
          "question": "<p>A processor can support a maximum memory of 4GB, where the memory is word-addressable (a word consists of two bytes). The size of the address bus of the process or is at least bits________. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "31",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39632/gate2016-1-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>For the processes listed in the following table, which of the following scheduling schemes will give the lowest average turnaround time? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q47_eabb2659.jpg\"> <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
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
        }
      ]
    }
  ]
});
