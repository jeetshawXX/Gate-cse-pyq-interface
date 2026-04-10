window.__examLoadCallback({
  "title": "Operating_System - Operating_System - Slot 22",
  "duration": 42,
  "sections": [
    {
      "name": "Operating_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>Suppose we want to synchronize two concurrent processes P and Q using binary semaphores S and T. The code for the processes P and Q is shown below.<pre><code> Process P:\nwhile (1) {\nW:\n   print '0';\n   print '0';\nX:\n}\n \nProcess Q:\nwhile (1) {\nY:\n   print '1';\n   print '1';\nZ:\n}</code></pre> Synchronization statements can be inserted only at points W, X, Y and Z. <br><br>Which of the following will always lead to an output staring with '001100110011' ? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P(S) at W, V(S) at X, P(T) at Y, V(T) at Z, S and T initially 1</p>",
            "<b>B.</b> <p>P(S) at W, V(T) at X, P(T) at Y, V(S) at Z, S initially 1, and T initially 0</p>",
            "<b>C.</b> <p>P(S) at W, V(T) at X, P(T) at Y, V(S) at Z, S and T initially 1</p>",
            "<b>D.</b> <p>P(S) at W, V(S) at X, P(T) at Y, V(T) at Z, S initially 1, and T initially 0</p>"
          ],
          "correct_answer": "<b>B.</b> <p>P(S) at W, V(T) at X, P(T) at Y, V(S) at Z, S initially 1, and T initially 0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/964/gate2003-80#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>A processor uses 2-level page tables for virtual to physical address translation. Page tables for both levels are stored in the main memory. Virtual and physical addresses are both 32 bits wide. The memory is byte addressable. For virtual to physical address translation, the 10 most significant bits of the virtual address are used as index into the first level page table while the next 10 bits are used as index into the second level page table. The 12 least significant bits of the virtual address are used as offset within the page. Assume that the page table entries in both levels of page tables are 4 bytes wide. Further, the processor has a translation look-aside buffer (TLB), with a hit rate of 96%. The TLB caches recently used virtual page numbers and the corresponding physical page numbers. The processor also has a physically addressed cache with a hit rate of 90%. Main memory access time is 10 ns, cache access time is 1 ns, and TLB access time is also 1 ns. <br><br>Suppose a process has only the following pages in its virtual address space: two contiguous code pages starting at virtual address 0x00000000, two contiguous data pages starting at virtual address 0x00400000, and a stack page starting at virtual address 0xFFFFF000. The amount of memory required for storing the page tables of this process is: <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8 KB</p>",
            "<b>B.</b> <p>12 KB</p>",
            "<b>C.</b> <p>16 KB</p>",
            "<b>D.</b> <p>20 KB</p>"
          ],
          "correct_answer": "<b>C.</b> <p>16 KB</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43578/gate2003-79#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>A processor uses 2-level page tables for virtual to physical address translation. Page tables for both levels are stored in the main memory. Virtual and physical addresses are both 32 bits wide. The memory is byte addressable. For virtual to physical address translation, the 10 most significant bits of the virtual address are used as index into the first level page table while the next 10 bits are used as index into the second level page table. The 12 least significant bits of the virtual address are used as offset within the page. Assume that the page table entries in both levels of page tables are 4 bytes wide. Further, the processor has a translation look-aside buffer (TLB), with a hit rate of 96%. The TLB caches recently used virtual page numbers and the corresponding physical page numbers. The processor also has a physically addressed cache with a hit rate of 90%. Main memory access time is 10 ns, cache access time is 1 ns, and TLB access time is also 1 ns. <br><br>Assuming that no page faults occur, the average time taken to access a virtual address is approximately (to the nearest 0.5 ns) <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1.5 ns</p>",
            "<b>B.</b> <p>2 ns</p>",
            "<b>C.</b> <p>3 ns</p>",
            "<b>D.</b> <p>4 ns</p>"
          ],
          "correct_answer": "<b>D.</b> <p>4 ns</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/788/gate2003-78#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
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
          "id": 5,
          "question": "<p>The following are the starting and ending times of activities A,B,C,D,E,F,G and\nH respectively in chronological order:  \\( a_{s}\\; b_{s} \\; c_{s}\\;a_{e}\\;d_{s}\\;c_{e}\\;e_{s}\\;f_{s}\\;b_{e}\\;d_{e}\\;g_{s}\\;e_{e}\\;f_{e}\\;h_{s}\\;g_{e}\\;h_{e} \\). Here, \\(x_{s}\\) denotes the starting time and \\(x_{e}\\)\ndenotes the ending time of activity X. W need\nto schedule the activities in a set of rooms available to us. An activity can be\nscheduled in a room only if the room is reserved for the activity for its entire\nduration. What is the minimum number of rooms required? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/956/gate2003-69#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>In a system with 32 bit virtual addresses and 1 KB page size, use of one-level\npage tables for virtual to physical address translation is not practical because of <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the large amount of internal fragmentation</p>",
            "<b>B.</b> <p>the large amount of external fragmentation</p>",
            "<b>C.</b> <p>the large memory overhead in maintaining page tables</p>",
            "<b>D.</b> <p>the large computation overhead in the translation process</p>"
          ],
          "correct_answer": "<b>C.</b> <p>the large memory overhead in maintaining page tables</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/916/gate2003-26#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
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
          "id": 8,
          "question": "<p>The optimal page replacement algorithm will select the page that <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Has not been used for the longest time in the past.</p>",
            "<b>B.</b> <p>Will not be used for the longest time in the future.</p>",
            "<b>C.</b> <p>Has been used least number of times.</p>",
            "<b>D.</b> <p>Has been used most number of times</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Will not be used for the longest time in the future.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/828/gate2002-1-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
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
          "id": 10,
          "question": "<p>Which of the following is not a valid deadlock prevention scheme? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Release all resources before requesting a new resource.</p>",
            "<b>B.</b> <p>Number the resources uniquely and never request a lower numbered resource than the last one requested.</p>",
            "<b>C.</b> <p>Never request a resource after releasing any resource.</p>",
            "<b>D.</b> <p>Request and all required resources be allocated before execution.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Never request a resource after releasing any resource.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/670/gate2000-2-23\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Suppose the time to service a page fault is on the average 10 milliseconds, while a memory access takes 1 microsecond. Then a 99.99% hit ratio results in average memory access time of <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1.9999 milliseconds</p>",
            "<b>B.</b> <p>1 millisecond</p>",
            "<b>C.</b> <p>9.999 microseconds</p>",
            "<b>D.</b> <p>1.9999 microseconds</p>"
          ],
          "correct_answer": "<b>D.</b> <p>1.9999 microseconds</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/669/gate2000-2-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>A graphics card has on board memory of 1 MB. Which of the following modes can the card not support? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1600 x 400 resolution with 256 colors on a 17 inch monitor</p>",
            "<b>B.</b> <p>1600 x 400 resolution with 16 million colors on a 14 inch monitor</p>",
            "<b>C.</b> <p>800 x 400 resolution with 16 million colors on a 17 inch monitor</p>",
            "<b>D.</b> <p>800 x 800 resolution with 256 colors on a 14 inch monitor</p>"
          ],
          "correct_answer": "<b>B.</b> <p>1600 x 400 resolution with 16 million colors on a 14 inch monitor</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/660/gate2000-2-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Let \\(m[0]\\ldots m[4]\\)be mutexes (binary semaphores) and \\(P[0]\\ldots P[4]\\) be processes.  Suppose each process P[i] executes the following:<pre><code>wait (m[i]; wait (m(i+1) mod 4]);\n ........... \n release (m[i]); release (m(i+1) mod 4]);</code></pre> This could cause <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Thrashing</p>",
            "<b>B.</b> <p>Deadlock</p>",
            "<b>C.</b> <p>Starvation, but not deadlock</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Deadlock</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/645/gate2000-1-21\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Which of the following need not necessarily be saved on a context switch between processes? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>General purpose registers</p>",
            "<b>B.</b> <p>Translation look-aside buffer</p>",
            "<b>C.</b> <p>Program counter</p>",
            "<b>D.</b> <p>All of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Translation look-aside buffer</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/644/gate2000-1-20-isro2008-47\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Which of the following actions is/are typically not performed by the operating system when switching context from process A to process B? <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Saving current register values and restoring saved register values for process B.</p>",
            "<b>B.</b> <p>Changing address translation tables.</p>",
            "<b>C.</b> <p>Swapping out the memory image of process A to the disk.</p>",
            "<b>D.</b> <p>Invalidating the translation look-aside buffer.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Swapping out the memory image of process A to the disk.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1490/gate1999-2-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
