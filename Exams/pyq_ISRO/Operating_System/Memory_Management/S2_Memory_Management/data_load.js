window.__examLoadCallback({
  "title": "Memory_Management - Memory_Management - Slot 2",
  "duration": 50,
  "sections": [
    {
      "name": "Memory_Management",
      "questions": [
        {
          "id": 1,
          "question": "<p>Using the page table shown below, translate the physical address 25 to virtual address. The address length is 16 bits and page size is 2048 words while the size of the physical memory is four frames.<br>\\(\\begin{array}{lcc} \\text { Page } &amp; \\text { Present }(1-In , 0-Out) &amp; \\text { Frame } \\\\ 0 &amp; 1 &amp; 3 \\\\ 1 &amp; 1 &amp; 2 \\\\ 2 &amp; 1 &amp; 0 \\\\ 3 &amp; 0 &amp; - \\end{array}\\) <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>25</p>",
            "<b>B.</b> <p>6169</p>",
            "<b>C.</b> <p>2073</p>",
            "<b>D.</b> <p>4121</p>"
          ],
          "correct_answer": "<b>D.</b> <p>4121</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/46107/isro2014-35\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the following segment table in segmentation scheme :<br>\\(\\begin{array}{|l|l|l|} \\hline \\text { Segment ID } &amp; \\text { Base } &amp; \\text { Limit } \\\\ \\hline 0 &amp; 200 &amp; 200 \\\\ \\hline 1 &amp; 5000 &amp; 1210 \\\\ \\hline 2 &amp; 1527 &amp; 498 \\\\ \\hline 3 &amp; 2500 &amp; 50 \\\\ \\hline \\end{array}\\)<br>What happens if the logical address requested is - Segment Id 2 and offset 1000? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Fetches the entry at the physical address 2527 for segment Id 2</p>",
            "<b>B.</b> <p>A trap is generated</p>",
            "<b>C.</b> <p>Deadlock</p>",
            "<b>D.</b> <p>Fetches the entry at offset 27 in Segment Id 3</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A trap is generated</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/16942/isro2014-18\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the list of page references in the time line as below:<br>\n9  6  2  3  4  4  4  4  3  4  4  2  5  8  6  8  5  5  3  2  3  3  9  6  2  7<br>What is the working set at the penultimate page reference if \\(\\Delta\\) is 5? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{8, 5, 3, 2, 9, 6}</p>",
            "<b>B.</b> <p>{4, 3, 6, 2, 5}</p>",
            "<b>C.</b> <p>{3, 9, 6, 2, 7}</p>",
            "<b>D.</b> <p>{3, 9, 6, 2}</p>"
          ],
          "correct_answer": "<b>D.</b> <p>{3, 9, 6, 2}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/45557/isro-2013-65\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>In a 64- bit machine, with 2 GB RAM, and 8 KB page size, how many entries will be there in the page table if its is inverted? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(2^{18}\\)</p>",
            "<b>B.</b> <p>\\(2^{20}\\)</p>",
            "<b>C.</b> <p>\\(2^{33}\\)</p>",
            "<b>D.</b> <p>\\(2^{51}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(2^{18}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44402/isro-2013-56\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider a logical address space of 8 pages of 1024 words each, mapped onto a physical memory of 32 frames. How many bits are there in the physical address and logical address respectively? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5,3</p>",
            "<b>B.</b> <p>10,10</p>",
            "<b>C.</b> <p>15,13</p>",
            "<b>D.</b> <p>15,15</p>"
          ],
          "correct_answer": "<b>C.</b> <p>15,13</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44401/isro2013-55\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Which of the following are the likely causes of thrashing? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Page size was very small.</p>",
            "<b>B.</b> <p>There are too many users connected to the system.</p>",
            "<b>C.</b> <p>Least recently used policy is used for page replacement.</p>",
            "<b>D.</b> <p>First in First out policy is used for page replacement.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Page size was very small.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44400/isro-2013-54\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
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
          "id": 8,
          "question": "<p>Consider a 32-bit machine where four-level paging scheme is used. If the hit ratio to TLB is 98%, and it takes 20 nanosecond to search the TLB and 100 nanoseconds to access the main memory what is effective memory access time in nanoseconds? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>126</p>",
            "<b>B.</b> <p>128</p>",
            "<b>C.</b> <p>122</p>",
            "<b>D.</b> <p>120</p>"
          ],
          "correct_answer": "<b>B.</b> <p>128</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52592/isro2011-49\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>If the page size in a 32-bit machine is 4K bytes then the size of page table is <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1 M bytes</p>",
            "<b>B.</b> <p>2 M bytes</p>",
            "<b>C.</b> <p>4 M bytes</p>",
            "<b>D.</b> <p>4 K bytes</p>"
          ],
          "correct_answer": "<b>C.</b> <p>4 M bytes</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/47001/isro2011-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>A page fault <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Occurs when a program accesses an available page on memory</p>",
            "<b>B.</b> <p>is an error in a specific page</p>",
            "<b>C.</b> <p>is a reference to a page belonging to another program</p>",
            "<b>D.</b> <p>occurs when a program accesses a page not currently in memory</p>"
          ],
          "correct_answer": "<b>D.</b> <p>occurs when a program accesses a page not currently in memory</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50331/isro2009-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>The page replacement algorithm which gives the lowest page fault rate is <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>LRU</p>",
            "<b>B.</b> <p>FIFO</p>",
            "<b>C.</b> <p>Optimal page replacement</p>",
            "<b>D.</b> <p>Second chance algorithm</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Optimal page replacement</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50133/isro2008-67\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider a logical address space of 8 pages of 1024 words mapped into memory of 32 frames. How many bits are there in the logical address? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>13 bits</p>",
            "<b>B.</b> <p>15 bits</p>",
            "<b>C.</b> <p>14 bits</p>",
            "<b>D.</b> <p>12 bits</p>"
          ],
          "correct_answer": "<b>A.</b> <p>13 bits</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50005/isro2008-65\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Overlaying <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>requires use of a loader</p>",
            "<b>B.</b> <p>allows larger programs, but requires more effort</p>",
            "<b>C.</b> <p>is most used on large computers</p>",
            "<b>D.</b> <p>is transparent to the user</p>"
          ],
          "correct_answer": "<b>B.</b> <p>allows larger programs, but requires more effort</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/47809/isro2008-60\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Dirty bit for a page in a page table <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>helps avoid unnecessary writes on a paging device</p>",
            "<b>B.</b> <p>helps maintain LRU information</p>",
            "<b>C.</b> <p>allows only read on a page</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>helps avoid unnecessary writes on a paging device</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2241/gate1997-3-10-isro2008-57-isro2015-64\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Thrashing <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>always occurs on large computers</p>",
            "<b>B.</b> <p>is a natural consequence of virtual memory systems</p>",
            "<b>C.</b> <p>can always be avoided by swapping</p>",
            "<b>D.</b> <p>can be caused by poor paging algorithms</p>"
          ],
          "correct_answer": "<b>D.</b> <p>can be caused by poor paging algorithms</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17260/isro2008-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
          "question": "<p>Dynamic address translation <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>is part of the operating system paging algorithm</p>",
            "<b>B.</b> <p>is useless when swapping is used</p>",
            "<b>C.</b> <p>is the hardware necessary to implement paging</p>",
            "<b>D.</b> <p>storage pages at a specific location on disk</p>"
          ],
          "correct_answer": "<b>C.</b> <p>is the hardware necessary to implement paging</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17262/isro2008-52\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
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
          "id": 18,
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
        }
      ]
    }
  ]
});
