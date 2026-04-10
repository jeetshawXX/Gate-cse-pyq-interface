window.__examLoadCallback({
  "title": "Operating_System - Operating_System - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Operating_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>A computer system supports a logical address space of \\(2^{32}\\) bytes. It uses two-level hierarchical paging with a page size of 4096 bytes. A logical address is divided into a \\(b\\)-bit index to the outer page table, an offset within the page of the inner page table, and an offset within the desired page. Each entry of the inner page table uses eight bytes. All the pages in the system have the same size. <br><br>The value of \\(b\\) is ___________ . (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "11",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460845/gate-cse-2025-set-2-question-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>\\(P = \\{P_1, P_2, P_3, P_4\\} \\) consists of all active processes in an operating system.\n\\(R = \\{R_1, R_2, R_3, R_4\\} \\) consists of single instances of distinct types of resources in the system.  <br>\nThe resource allocation graph has the following assignment and claim edges.<br><br>\n\\(\n\\text{Assignment edges: } R_1 \\to P_1,  R_2 \\to P_2,  R_3 \\to P_3,  R_4 \\to P_4\n\\) (the assignment edge \\(R_1 \\to P_1\\) means resource \\(R_1\\) is assigned to process \\(P_1\\), and so on for others) <br><br>\n\\(\n\\text{Claim edges: } P_1 \\to R_2, P_2 \\to R_3, P_3 \\to R_1, P_2 \\to R_4, P_4 \\to R_2\n\\) (the claim edge \\(P_1 \\to R_2\\) means process \\(P_1\\) is waiting for resource \\(R_2\\), and so on for others)  <br><br>\nWhich of the following statement(s) is/are CORRECT? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Aborting \\(P_1 \\) makes the system deadlock free.</p>",
            "<b>B.</b> <p>Aborting \\(P_3 \\) makes the system deadlock free.</p>",
            "<b>C.</b> <p>Aborting \\(P_2 \\) makes the system deadlock free.</p>",
            "<b>D.</b> <p>Aborting \\(P_1 \\) and \\(P_4 \\) makes the system deadlock free.</p>"
          ],
          "correct_answer": [
            "<b>C.</b> <p>Aborting \\(P_2 \\) makes the system deadlock free.</p>",
            "<b>D.</b> <p>Aborting \\(P_1 \\) and \\(P_4 \\) makes the system deadlock free.</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460797/gate-cse-2025-set-2-question-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider a demand paging system with three frames, and the following page reference string:\n1 2 3 4 5 4 1 6 4 5 1 3 2. The contents of the frames are as follows initially and after each reference (from left to right):\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q37_c7e13067.webp\"><br>\nThe *-marked references cause page replacements.  <br>\nWhich one or more of the following could be the page replacement policy/policies in use? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Least Recently Used page replacement policy</p>",
            "<b>B.</b> <p>Least Frequently Used page replacement policy</p>",
            "<b>C.</b> <p>Most Frequently Used page replacement policy</p>",
            "<b>D.</b> <p>Optimal page replacement policy</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Optimal page replacement policy</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460798/gate-cse-2025-set-2-question-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
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
          "id": 5,
          "question": "<p>In optimal page replacement algorithm, information about all future page references is available to the operating system (OS). A modification of the optimal page replacement algorithm is as follows:\n<br>\nThe OS correctly predicts only up to next 4 page references (including the current page) at the time of allocating a frame to a page.\n<br>\nA process accesses the pages in the following order of page numbers:\n<br><br>\n1, 3, 2, 4, 2, 3, 1, 2, 4, 3, 1, 4.\n<br><br>\nIf the system has three memory frames that are initially empty, the number of page faults that will occur during execution of the process is _________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460036/gate-cse-2025-set-1-question-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>A disk of size \\( 512M \\) bytes is divided into blocks of \\( 64K \\) bytes. A file is stored in the disk using linked allocation. Each data block reserves 4 bytes to store the pointer to the next data block. The link part of the last data block contains a NULL pointer (also of 4 bytes). Suppose a file of \\( 1M \\) bytes needs to be stored in the disk. Assume, \\( 1K=2^{10}, 1M=2^{20} \\). The amount of space in bytes that will be wasted due to internal fragmentation is _________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "65468",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460039/gate-cse-2025-set-1-question-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
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
          "id": 8,
          "question": "<p>Suppose in a multiprogramming environment, the following C program segment is executed. A process goes into I/O queue whenever an I/O related operation is performed. Assume that there will always be a context switch whenever a process requests for an I/O, and also whenever the process returns from an I/O. The number of times the process will enter the ready queue during its lifetime (not counting the time the process enters the ready queue when it is run initially) is _______. (Answer in integer)<pre><code>\nint main()\n{\n\tint x=0,i=0;\n\tscanf(\"%d\",&amp;x);\n\tfor(i=0; i&lt;20; i++)\n\t{\n\t\t x = x + 20;\n\t\t printf(\"%d\\n\",x);\n\t}\n\treturn 0;\n}\n</code></pre> <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "21",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460061/gate-cse-2025-set-1-question-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider a demand paging memory management system with 32-bit logical address, 20-bit physical address, and page size of 2048 bytes. Assuming that the memory is byte addressable, what is the maximum number of entries in the page table? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(2^{21}\\)</p>",
            "<b>B.</b> <p>\\(2^{20}\\)</p>",
            "<b>C.</b> <p>\\(2^{22}\\)</p>",
            "<b>D.</b> <p>\\(2^{24}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(2^{21}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460076/gate-cse-2025-set-1-question-4#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider a 32-bit system with \\(4 \\mathrm{~KB} \\) page size and page table entries of size 4 bytes each. Assume \\( 1 \\mathrm{~KB}=2^{10} \\) bytes. The OS uses a 2-level page table for memory management, with the page table containing an outer page directory and an inner page table. The OS allocates a page for the outer page directory upon process creation. The OS uses demand paging when allocating memory for the inner page table, i.e., a page of the inner page table is allocated only if it contains at least one valid page table entry.\n<br>\nAn active process in this system accesses 2000 unique pages during its execution, and none of the pages are swapped out to disk. After it completes the page accesses, let \\( X \\) denote the minimum and \\( Y \\) denote the maximum number of pages across the two levels of the page table of the process.\n<br>\nThe value of \\( X+Y \\) is _____ <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1028",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422843/gate-cse-2024-set-2-question-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider a multi-threaded program with two threads T1 and T2. The threads share\ntwo semaphores: s1 (initialized to 1) and s2 (initialized to 0). The threads also\nshare a global variable x (initialized to 0). The threads execute the code shown\nbelow.<pre><code>\n// code of T1\nwait(s1);\nx = x+1;\nprint(x);\nwait(s2);\nsignal(s1);\n\n// code of T2\nwait(s1);\nx = x+1;\nprint(x);\nsignal(s2);\nsignal(s1);</code></pre>\nWhich of the following outcomes is/are possible when threads T1 and T2 execute\nconcurrently? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T1 runs first and prints 1, T2 runs next and prints 2</p>",
            "<b>B.</b> <p>T2 runs first and prints 1, T1 runs next and prints 2</p>",
            "<b>C.</b> <p>T1 runs first and prints 1, T2 does not print anything (deadlock)</p>",
            "<b>D.</b> <p>T2 runs first and prints 1, T1 does not print anything (deadlock)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>T2 runs first and prints 1, T1 runs next and prints 2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422861/gate-cse-2024-set-2-question-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
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
          "id": 13,
          "question": "<p>Consider a process P running on a CPU. Which one or more of the following events will always trigger a context switch by the OS that results in process P moving to a non-running state (e.g., ready, blocked)? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P makes a blocking system call to read a block of data from the disk</p>",
            "<b>B.</b> <p>P tries to access a page that is in the swap space, triggering a page fault</p>",
            "<b>C.</b> <p>An interrupt is raised by the disk to deliver data requested by some other process</p>",
            "<b>D.</b> <p>A timer interrupt is raised by the hardware</p>"
          ],
          "correct_answer": "<b>A.</b> <p>P makes a blocking system call to read a block of data from the disk</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422882/gate-cse-2024-set-2-question-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Which of the following tasks is/are the responsibility/responsibilities of the memory\nmanagement unit (MMU) in a system with paging-based memory management? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Allocate a new page table for a newly created process</p>",
            "<b>B.</b> <p>Translate a virtual address to a physical address using the page table</p>",
            "<b>C.</b> <p>Raise a trap when a virtual address is not found in the page table</p>",
            "<b>D.</b> <p>Raise a trap when a process tries to write to a page marked with read-only permission in the page table</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Translate a virtual address to a physical address using the page table</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422883/gate-cse-2024-set-2-question-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider a memory management system that uses a page size of \\( 2 \\mathrm{~KB} \\). Assume that both the physical and virtual addresses start from 0. Assume that the pages \\( 0,1,2 \\), and \\(3\\) are stored in the page frames \\( 1,3,2 \\), and \\(0\\), respectively. The physical address (in decimal format) corresponding to the virtual address \\(2500\\) (in decimal format) is ____ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6596",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422790/gate-cse-2024-set-1-question-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
