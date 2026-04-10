window.__examLoadCallback({
  "title": "Memory_Management - Memory_Management - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "Memory_Management",
      "questions": [
        {
          "id": 1,
          "question": "<p>Assume that in a certain computer, the virtual addresses are 64 bits long and the physical addresses are 48 bits long. The memory is word addressable. The page size is 8kB and the word size is 4 bytes. The Translation Look-aside Buffer (TLB) in the address translation path has 128 valid entries. At most how many distinct virtual addresses can be translated without any TLB miss? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(16 \\times 2^{10}\\)</p>",
            "<b>B.</b> <p>\\(256 \\times 2^{10}\\)</p>",
            "<b>C.</b> <p>\\(4 \\times 2^{20}\\)</p>",
            "<b>D.</b> <p>\\(8 \\times 2^{20}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(256 \\times 2^{10}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/302815/gate2019-cs-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider a process executing on an operating system that uses demand paging. The average time for a memory access in the system is M units if the corresponding memory page is available in memory, and D units if the memory access causes a page fault. It has been experimentally measured that the average time taken for a memory access in the process is X units. <br> Which one of the following is the correct expression for the page fault rate experienced by the process? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(D - M) / (X - M)</p>",
            "<b>B.</b> <p>(X - M) / (D - M)</p>",
            "<b>C.</b> <p>(D - X) / (D - M)</p>",
            "<b>D.</b> <p>(X - M) / (D - X)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>(X - M) / (D - M)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/204084/gate2018-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
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
          "id": 4,
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
          "id": 5,
          "question": "<p>Consider a computer system with ten physical page frames. The system is provided with an accessse quence \\((a_{1},a_{2},...,a_{20},a_{1},a_{2},...,a_{20})\\), where each \\(a_{i}\\) is a distinct virtual page number. The difference in the number of page faults between the last-in-first-outpage replacement policy and the optimal page replacement policy is ______. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39711/gate2016-1-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider a computer system with 40-bit virtual addressing and page size of sixteen\nkilobytes. If the computer system has a one level page table per process and each page table entry requires 48 bits, then the size of the per-process page table is _________ mega bytes. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "384",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39690/gate2016-1-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>A processor can support a maximum memory of 4GB, where the memory is word-addressable (a word consists of two bytes). The size of the address bus of the process or is at least bits________. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "31",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39632/gate2016-1-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>A computer system implements 8 kilobyte pages and a 32-bit physical address space. Each page table entry contains a valid bit, a dirty bit, three permission bits, and the translation. If the maximum size of the page table of a process is 24 megabytes, the length of the virtual address supported by the system is _____ bits. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "36",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8247/gate2015-2-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider six memory partitions of sizes 200 KB, 400 KB, 600 KB, 500 KB, 300 KB and 250 KB, where KB refers to kilobyte. These partitions need to be allotted to four processes of sizes 357 KB, 210 KB, 468 KB and 491 KB in that order. If the best fit algorithm is used, which partitions are NOT allotted to any process? <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>200 KB and 300 KB</p>",
            "<b>B.</b> <p>200 KB and 250 KB</p>",
            "<b>C.</b> <p>250 KB and 300 KB</p>",
            "<b>D.</b> <p>300 KB and 400 KB</p>"
          ],
          "correct_answer": "<b>A.</b> <p>200 KB and 300 KB</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8145/gate2015-2-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>A computer system implements a 40-bit virtual address, page size of 8 kilobytes, and a 128-entry translation look-aside buffer (TLB) organized into 32 sets each having four ways. Assume that the TLB tag does not store any process id. The minimum length of the TLB tag in bits is _________. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "22",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8120/gate2015-2-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider a main memory with five page frames and the following sequence of page references: 3, 8, 2, 3, 9, 1, 6, 3, 8, 9, 3, 6, 2, 1, 3. Which one of the following is true with respect to page replacement policies First In First Out (FIFO) and Least Recently Used (LRU)? <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both incur the same number of page faults</p>",
            "<b>B.</b> <p>FIFO incurs 2 more page faults than LRU</p>",
            "<b>C.</b> <p>LRU incurs 2 more page faults than FIFO</p>",
            "<b>D.</b> <p>FIFO incurs 1 more page faults than LRU</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Both incur the same number of page faults</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8353/gate2015-1-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider a system with byte-addressable memory, 32-bit logical addresses, 4 kilobyte page size and page table entries of 4 bytes each. The size of the page table in the system in megabytes is ________ . <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8186/gate2015-1-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider a paging hardware with a TLB. Assume that the entire page table and all the pages are in the physical memory. It takes 10 milliseconds to search the TLB and 80 milliseconds to access the physical memory. If the TLB hit ratio is 0.6, the effective memory access time (in milliseconds) is _________. <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "122",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2067/gate2014-3-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>A system uses 3 page frames for storing process pages in main memory. It uses the Least Recently Used (LRU) page replacement policy. Assume that all the page frames are initially empty. What is the total number of page faults that will occur while processing the page reference string given below?\n4, 7, 6, 1, 7, 6, 1, 2, 7, 2 <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2054/gate2014-3-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>A computer has twenty physical page frames which contain pages numbered 101 through\n120. Now a program accesses the pages numbered 1, 2, ..., 100 in that order, and repeats the\naccess sequence THRICE. Which one of the following page replacement policies experiences\nthe same number of page faults as the optimal page replacement policy for this program? <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Least-recently-used</p>",
            "<b>B.</b> <p>First-in-first-out</p>",
            "<b>C.</b> <p>Last-in-first-out</p>",
            "<b>D.</b> <p>Most-recently-used</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Most-recently-used</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1992/gate2014-2-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
