window.__examLoadCallback({
  "title": "Memory_Management - Memory_Management - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "Memory_Management",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider a paging system that uses 1-level page table residing in main memory and a TLB for address translation. Each main memory access takes 100 ns and TLB lookup takes 20 ns. Each page transfer to/from the disk takes 5000 ns. Assume that the TLB hit ratio is 95%, page fault rate is 10%. Assume that for 20% of the total page faults, a dirty page has to be written back to disk before the required page is read from disk. TLB update time is negligible. The average memory access time in ns (round off to 1 decimal places) is ___________ <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "154.5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333178/gate2020-cs-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider allocation of memory to a new process. Assume that none of the existing holes in the memory will exactly fit the process's memory requirement. Hence, a new hole of smaller size will be created if allocation is made in any of the existing holes. Which one of the following statement is TRUE? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The hole created by first fit is always larger than the hole created by next fit.</p>",
            "<b>B.</b> <p>The hole created by worst fit is always larger than the hole created by first fit.</p>",
            "<b>C.</b> <p>The hole created by best fit is never larger than the hole created by first fit.</p>",
            "<b>D.</b> <p>The hole created by next fit is never larger than the hole created by best fit.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The hole created by best fit is never larger than the hole created by first fit.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333220/gate2020-cs-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
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
          "id": 4,
          "question": "<p>The Operating System of a computer may periodically collect all the free memory space to form contiguous block of free space. This is called: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Concatenation</p>",
            "<b>B.</b> <p>Garbage Collection</p>",
            "<b>C.</b> <p>Collision</p>",
            "<b>D.</b> <p>Dynamic Memory Allocation</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Garbage Collection</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213527/isro2018-61\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>A computer has 1000K of main memory. The jobs arrive and finish in the following sequence.<br> Job 1 requiring 200 K arrives <br>Job 2 requiring 350 K arrives <br>Job 3 requiring 300 K arrives<br>Job 1 finishes<br>Job 4 requiring 120 K arrives<br>Job 5 requiring 150 K arrives<br>Job 6 requiring 80 K arrives<br>Among best fit and first fit, which performs better for this sequence? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>First fit</p>",
            "<b>B.</b> <p>Best fit</p>",
            "<b>C.</b> <p>Both perform the same</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>First fit</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213566/isro2018-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Determine the number of page faults when references to pages occur in the order 1,2,4,5,2,1,2,4. Assume that the main memory can accommodate 3 pages and the main memory already has the pages 1 and 2, with page 1 brought earlier than page 2. (assume LRU i.e., Least-Recently-Used algorithm is applied) <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213426/isro2018-20\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
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
          "id": 8,
          "question": "<p>Given reference to the following pages by a program<br>0,9,0,1,8,1,8,7,8,7,1,2,8,2,7,8,2,3,8,3<br>How many page faults will occur if the program has three page frames available to it and uses an optimal replacement? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>7</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>9</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>7</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128704/isro2017-52\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
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
          "id": 10,
          "question": "<p>A CPU generates 32-bit virtual addresses. The page size is 4 KB. The processor has a translation look-aside buffer (TLB) which can hold a total of 128 page table entries and is 4-way set associative. The minimum size of the TLB tag is: <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>11 bits</p>",
            "<b>B.</b> <p>13 bits</p>",
            "<b>C.</b> <p>15 bits</p>",
            "<b>D.</b> <p>20 bits</p>"
          ],
          "correct_answer": "<b>C.</b> <p>15 bits</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1840/gate2006-62-isro2016-50\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Determine the number of page faults when references to pages occur in the following order:\n1, 2, 4, 5, 2, 1, 2, 4\nAssume that the main memory can accommodate 3 pages and the main memory already has the pages 1 and 2, with page one having brought earlier than page 2. (LRU page replacement algorithm is used) <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>C.</b> <p>4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55927/isro2016-48\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Let the page fault service time be 10 ms in a computer with average memory access time being 20 ns. If one page fault is generated for every \\(10^6\\) memory accesses, what is the effective access time for the memory? <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>21.4 ns</p>",
            "<b>B.</b> <p>29.9 ns</p>",
            "<b>C.</b> <p>23.5 ns</p>",
            "<b>D.</b> <p>35.1 ns</p>"
          ],
          "correct_answer": "<b>B.</b> <p>29.9 ns</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55475/isro2016-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
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
          "id": 14,
          "question": "<p>Consider a computer system with ten physical page frames. The system is provided with an accessse quence \\((a_{1},a_{2},...,a_{20},a_{1},a_{2},...,a_{20})\\), where each \\(a_{i}\\) is a distinct virtual page number. The difference in the number of page faults between the last-in-first-outpage replacement policy and the optimal page replacement policy is ______. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39711/gate2016-1-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider a computer system with 40-bit virtual addressing and page size of sixteen\nkilobytes. If the computer system has a one level page table per process and each page table entry requires 48 bits, then the size of the per-process page table is _________ mega bytes. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "384",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39690/gate2016-1-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
