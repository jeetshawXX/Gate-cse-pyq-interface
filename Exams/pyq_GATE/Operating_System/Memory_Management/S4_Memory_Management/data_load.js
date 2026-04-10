window.__examLoadCallback({
  "title": "Memory_Management - Memory_Management - Slot 4",
  "duration": 42,
  "sections": [
    {
      "name": "Memory_Management",
      "questions": [
        {
          "id": 1,
          "question": "<p>Let a memory have four free blocks of sizes 4k, 8k, 20k, 2k. These blocks are allocated following the best-fit strategy. The allocation requests are stored in a queue as shown below.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Memory_Management\\q11_cd424688.jpg\"><br>The time at which the request for J7 will be completed will be <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>16</p>",
            "<b>B.</b> <p>19</p>",
            "<b>C.</b> <p>20</p>",
            "<b>D.</b> <p>37</p>"
          ],
          "correct_answer": "<b>B.</b> <p>19</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3444/gate2007-it-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>A process has been allocated 3 page frames. Assume that none of the pages of the process are available in the memory initially. The process makes the following sequence of page references (reference string): 1, 2, 1, 3, 7, 4, 5, 6, 3, 1.  <br><br>  Least Recently Used (LRU) page replacement policy is a practical approximation\nto optimal page replacement. For the above reference string, how many more\npage faults occur with LRU than with the optimal page replacement policy? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>1</p>",
            "<b>C.</b> <p>2</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>C.</b> <p>2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43510/gate2007-83#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>A process has been allocated 3 page frames. Assume that none of the pages of the process are available in the memory initially. The process makes the following sequence of page references (reference string): 1, 2, 1, 3, 7, 4, 5, 6, 3, 1.  <br><br> If optimal page replacement policy is used, how many page faults occur for the\nabove reference string? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>7</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>9</p>",
            "<b>D.</b> <p>10</p>"
          ],
          "correct_answer": "<b>A.</b> <p>7</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1274/gate2007-82#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>A virtual memory system uses First In First Out (FIFO) page replacement policy and allocates a fixed number of frames to a process. Consider the following statements: <br><br>\nP: Increasing the number of page frames allocated to a process sometimes\nincreases the page fault rate.<br>\nQ: Some programs do not exhibit locality of reference. <br><br>\nWhich one of the following is TRUE? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both P and Q are true, and Q is the reason for P</p>",
            "<b>B.</b> <p>Both P and Q are true, but Q is not the reason for P.</p>",
            "<b>C.</b> <p>P is false, but Q is true</p>",
            "<b>D.</b> <p>Both P and Q are false.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Both P and Q are true, but Q is not the reason for P.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1254/gate2007-56#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>For each of the four processes \\(P_1, P_2, P_3,\\) and \\(P_4\\). The total size in kilobytes (KB) and the number of segments are given below.<br>\n\\(\\begin{array}{|c|c|c|}\\hline \\textbf{Process} &amp; \\textbf{Total size (in KB)} &amp; \\textbf{Number of segments} \\\\\\hline \\text{$P_1$} &amp; \\text{195}&amp; \\text{4}\\\\\\hline \\text{$P_2$} &amp; \\text{254} &amp; \\text{5}\\\\\\hline \\text{$P_3$} &amp; \\text{45}&amp; \\text{3} \\\\\\hline \\text{$P_4$} &amp; \\text{364}&amp; \\text{8} \\\\\\hline \\end{array}\\)<br>\nThe page size is 1 KB. The size of an entry in the page table is 4 bytes. The size of an entry in the segment table is 8 bytes. The maximum size of a segment is 256 KB. The paging method for memory management uses two-level paging, and its storage overhead is P. The storage overhead for the segmentation method is S. The storage overhead for the segmentation and paging method is T. What is the relation among the overheads for the different methods of memory management in the concurrent execution of the above four processes? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(P  \\lt  S  \\lt  T\\)</p>",
            "<b>B.</b> <p>\\(S  \\lt  P  \\lt  T\\)</p>",
            "<b>C.</b> <p>\\(S  \\lt  T  \\lt  P\\)</p>",
            "<b>D.</b> <p>\\(T \\lt S  \\lt  P\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(S  \\lt  P  \\lt  T\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3600/gate2006-it-56\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>In the working-set strategy, which of the following is done by the operating system to prevent thrashing?<br><br>\nI. It initiates another process if there are enough extra frames.<br>\nII. It selects a process to suspend if the sum of the sizes of the working-sets exceeds the total number of available frames. <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>Neither I nor II</p>",
            "<b>D.</b> <p>Both I and II</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Both I and II</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3551/gate2006-it-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>A computer system supports 32-bit virtual addresses as well as 32-bit physical\naddresses, Since the virtual address space is of the same size as the physical\naddress space, the operating system designers decide to get rid of the virtual\nentirely. Which one of the following is true? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Efficient implementation of multi-user support is no longer possible</p>",
            "<b>B.</b> <p>The processor cache organization can be made more efficient now</p>",
            "<b>C.</b> <p>Hardware support for memory management is no longer needed</p>",
            "<b>D.</b> <p>CPU scheduling can be made more efficient now</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Efficient implementation of multi-user support is no longer possible</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1841/gate2006-63#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
          "question": "<p>The minimum number of page frames that must be allocated to a running process in a virtual\nmemory environment is determined by <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the instruction set architecture</p>",
            "<b>B.</b> <p>page size</p>",
            "<b>C.</b> <p>physical memory size</p>",
            "<b>D.</b> <p>number of processes in memory</p>"
          ],
          "correct_answer": "<b>A.</b> <p>the instruction set architecture</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1018/gate2004-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
