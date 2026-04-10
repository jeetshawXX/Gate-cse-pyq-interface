window.__examLoadCallback({
  "title": "Operating_System - Operating_System - Slot 13",
  "duration": 42,
  "sections": [
    {
      "name": "Operating_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>Suppose n processes, \\(P_1,..., P_n\\) share m identical resource units, which can be reserved and released one at a time. The maximum resource requirement of process \\(P_i\\) is \\(s_i\\), where \\(s_i \\gt 0\\). Which one of the following is a sufficient condition for ensuring that deadlock does not occur?  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q71_66b23f1e.jpg\"> <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>C.</b> <p>C</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1394/gate2005-71#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Increasing the RAM of a computer typically improves performance because: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Virtual memory increases</p>",
            "<b>B.</b> <p>Larger RAMs are faster</p>",
            "<b>C.</b> <p>Fewer page faults occur</p>",
            "<b>D.</b> <p>Fewer segmentation faults occur</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Fewer page faults occur</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1358/gate2005-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>What is the swap space in the disk used for? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Saving temporary html pages</p>",
            "<b>B.</b> <p>Saving process data</p>",
            "<b>C.</b> <p>Storing the super-block</p>",
            "<b>D.</b> <p>Storing device drivers</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Saving process data</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1357/gate2005-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>In a particular Unix OS, each data block is of size 1024 bytes, each node has 10 direct data block addresses and three additional addresses: one for single indirect block, one for double indirect block and one for triple indirect block. Also, each block can contain addresses for 128 blocks. Which one of the following is approximately the maximum size of a file in the file system? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>512 MB</p>",
            "<b>B.</b> <p>2 GB</p>",
            "<b>C.</b> <p>8 GB</p>",
            "<b>D.</b> <p>16 GB</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2 GB</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3710/gate2004-it-67\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>In a virtual memory system, size of the virtual address is 32-bit, size of the physical address is 30-bit, page size is 4 Kbyte and size of each page table entry is 32-bit. The main memory is byte addressable. Which one of the following is the maximum number of bits that can be used for storing protection and other information in each page table entry? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>10</p>",
            "<b>C.</b> <p>12</p>",
            "<b>D.</b> <p>14</p>"
          ],
          "correct_answer": "<b>D.</b> <p>14</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3709/gate2004-it-66\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>The semaphore variables full, empty and mutex are initialized to 0, n and 1, respectively. Process P1 repeatedly adds one item at a time to a buffer of size n, and process P2 repeatedly removes one item at a time from the same buffer using the programs given below. In the programs, K, L, M and N are unspecified statements.<br>\nP1<br><pre><code> while (1) {\n    K;\n    P(mutex);\n    Add an item to the buffer;\n    V(mutex);\n    L;\n}</code></pre> <br>\nP2<br><pre><code>while (1) {\n    M;\n    P(mutex);\n    Remove an item from the buffer;\n    V(mutex);\n    N;\n} </code></pre> <br>\nThe statements K, L, M and N are respectively <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P(full), V(empty), P(full), V(empty)</p>",
            "<b>B.</b> <p>P(full), V(empty), P(empty), V(full)</p>",
            "<b>C.</b> <p>P(empty), V(full), P(empty), V(full)</p>",
            "<b>D.</b> <p>P(empty), V(full), P(full), V(empty)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>P(empty), V(full), P(full), V(empty)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3708/gate2004-it-65\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>A process executes the following segment of code :<br><pre><code> for(i = 1; i &lt;= n; i++)\n    fork ();</code></pre>\nThe number of new processes created is <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n</p>",
            "<b>B.</b> <p>((n(n + 1))/2)</p>",
            "<b>C.</b> <p>\\(2^n - 1\\)</p>",
            "<b>D.</b> <p>\\(3^n - 1\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(2^n - 1\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3707/gate2004-it-64\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>In a certain operating system, deadlock prevention is attemped using the following scheme. Each process is assigned a unique timestamp, and is restarted with the same timestamp if killed. Let \\(P_h\\) be the process holding a resource R, \\(P_r\\) be a process requesting for the same resource R, and T(\\(P_h\\)) and T(\\(P_r\\)) be their timestamps respectively. The decision to wait or preempt one of the processes is based on the following algorithm.<br><pre><code> if T(Pr) &lt; T(Ph) then \n    kill Pr \nelse wait</code></pre> Which one of the following is TRUE? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The scheme is deadlock-free, but not starvation-free</p>",
            "<b>B.</b> <p>The scheme is not deadlock-free, but starvation-free</p>",
            "<b>C.</b> <p>The scheme is neither deadlock-free nor starvation-free</p>",
            "<b>D.</b> <p>The scheme is both deadlock-free and starvation-free</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The scheme is deadlock-free, but not starvation-free</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3706/gate2004-it-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>A disk has 200 tracks (numbered 0 through 199). At a given time, it was servicing the request of reading data from track 120, and at the previous request, service was for track 90. The pending requests (in order of their arrival) are for track numbers.<br><br>\n30 70 115 130 110 80 20 25.<br><br>\nHow many times will the head change its direction for the disk scheduling policies SSTF(Shortest Seek Time First) and FCFS (First Come First Serve)? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2 and 3</p>",
            "<b>B.</b> <p>3 and 3</p>",
            "<b>C.</b> <p>3 and 4</p>",
            "<b>D.</b> <p>4 and 4</p>"
          ],
          "correct_answer": "<b>C.</b> <p>3 and 4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3705/gate2004-it-62\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Which of the following commands or sequences of commands will rename a file x to file y in a Unix system ?<br>\nI. mv y, x<br>\nII. mv x, y<br>\nIII. cp y, x (rm x)<br>\nIV. cp x, y (rm x)<br> <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>II and III</p>",
            "<b>B.</b> <p>II and IV</p>",
            "<b>C.</b> <p>I and III</p>",
            "<b>D.</b> <p>II only</p>"
          ],
          "correct_answer": "<b>B.</b> <p>II and IV</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3657/gate2004-it-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Which one of the following is NOT shared by the threads of the same process ? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Stack</p>",
            "<b>B.</b> <p>Address Space</p>",
            "<b>C.</b> <p>File Descriptor Table</p>",
            "<b>D.</b> <p>Message Queue</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Stack</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3655/gate2004-it-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>A unix-style I-node has 10 direct pointers and one single, one double and one triple indirect pointers.\nDisk block size is 1 Kbyte, disk block address is 32 bits, and 48-bit integers are used. What is the\nmaximum possible file size? <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(2^{24}\\)bytes</p>",
            "<b>B.</b> <p>\\(2^{32}\\)bytes</p>",
            "<b>C.</b> <p>\\(2^{34}\\)bytes</p>",
            "<b>D.</b> <p>\\(2^{48}\\)bytes</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(2^{34}\\)bytes</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1045/gate2004-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider two processes P1 and P2 accessing the shared variables X and Y protected by two binary\nsemaphores Sx and Sy respectively, both initialized to 1. P and V denote the usual semaphore\noperators, where P decrements the semaphore value, and V increments the semaphore value. The\npseudo-code of P1 and P2 is as follows:<br>P1<pre><code> While true do {\n   L1 : ................\n   L2 : ................\n   X = X + 1;\n   Y = Y - 1;\n   V(Sx);\n   V(Sy);             \n }</code></pre><br>P2<pre><code> While true do {\n   L3 : ................   \n   L4 : ................\n   Y = Y + 1;\n   X = Y - 1;\n   V(Sy);\n   V(Sx);            \n}</code></pre>\nIn order to avoid deadlock, the correct operators at L1 , L2 , L3 and L4 are respectively. <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P(Sy), P(Sx); P(Sx), P(Sy)</p>",
            "<b>B.</b> <p>P(Sx), P(Sy); P(Sy), P(Sx)</p>",
            "<b>C.</b> <p>P(Sx), P(Sx); P(Sy), P(Sy)</p>",
            "<b>D.</b> <p>P(Sx), P(Sy); P(Sx), P(Sy)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>P(Sx), P(Sy); P(Sx), P(Sy)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1044/gate2004-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider a system with a two-level paging scheme in which a regular memory access takes 150\nnanoseconds, and servicing a page fault takes 8 milliseconds. An average instruction takes 100\nnanoseconds of CPU time, and two memory accesses. The TLB hit ratio is 90%, and the page fault\nrate is one in every 10,000 instructions. What is the effective average instruction execution time? <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>645 nanoseconds</p>",
            "<b>B.</b> <p>1050 nanoseconds</p>",
            "<b>C.</b> <p>1215 nanoseconds</p>",
            "<b>D.</b> <p>1230 nanoseconds</p>"
          ],
          "correct_answer": "<b>D.</b> <p>1230 nanoseconds</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/318/gate2004-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the following set of processes, with the arrival times and the CPU-burst times given in\nmilliseconds.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q46_0eee0bd6.jpg\"><br>\nWhat is the average turnaround time for these processes with the preemptive shortest remaining\nprocessing time first (SRPT) algorithm? <br><br><strong>(GATE CSE 2004)</strong></p>",
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
        }
      ]
    }
  ]
});
