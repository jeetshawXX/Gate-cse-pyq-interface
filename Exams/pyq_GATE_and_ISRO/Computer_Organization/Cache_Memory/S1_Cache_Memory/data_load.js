window.__examLoadCallback({
  "title": "Cache_Memory - Cache_Memory - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Cache_Memory",
      "questions": [
        {
          "id": 1,
          "question": "<p>Given a computing system with two levels of cache (L1 and L2) and a main memory. The first level (L1) cache access time is 1 nanosecond (ns) and the \"hit rate\" for L1 cache is 90% while the processor is accessing the data from L1 cache. Whereas, for the second level (L2) cache, the \"hit rate\" is 80% and the \"miss penalty\" for transferring data from L2 cache to L1 cache is 10 ns. The \"miss penalty\" for the data to be transferred from main memory to L2 cache is 100 ns. <br><br>Then the average memory access time in this system in nanoseconds is ___________ . (rounded off to one decimal place) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460848/gate-cse-2025-set-2-question-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>For a direct-mapped cache, 4 bits are used for the tag field and 12 bits are used to index into a cache block. The size of each cache block is one byte. Assume that there is no other information stored for each cache block.  <br>\nWhich ONE of the following is the CORRECT option for the sizes of the main memory and the cache memory in this system (byte addressable), respectively? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>64 KB and 4 KB</p>",
            "<b>B.</b> <p>128 KB and 16 KB</p>",
            "<b>C.</b> <p>64 KB and 8 KB</p>",
            "<b>D.</b> <p>128 KB and 6 KB</p>"
          ],
          "correct_answer": "<b>A.</b> <p>64 KB and 4 KB</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460806/gate-cse-2025-set-2-question-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>A computer has a memory hierarchy consisting of two-level cache (L1 and L2) and a main memory. If the processor needs to access data from memory, it first looks into L1 cache. If the data is not found in L1 cache, it goes to L2 cache. If it fails to get the data from L2 cache, it goes to main memory, where the data is definitely available. Hit rates and access times of various memory units are shown in the figure. The average memory access time in nanoseconds (ns) is _________. (rounded off to two decimal places) <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Cache_Memory\\q43_7d1f00ff.webp\"><br> <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "11.83",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460037/gate-cse-2025-set-1-question-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider a memory system with 1M bytes of main memory and 16K bytes of cache memory. Assume that the processor generates 20-bit memory address, and the cache block size is 16 bytes. If the cache uses direct mapping, how many bits will be required to store all the tag values? [Assume memory is byte addressable, 1K = \\(2^{10}\\), 1M = \\(2^{20}\\).] <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(6 \\times 2^{10}\\)</p>",
            "<b>B.</b> <p>\\(8 \\times 2^{10}\\)</p>",
            "<b>C.</b> <p>\\(2^{12}\\)</p>",
            "<b>D.</b> <p>\\(2^{14}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(6 \\times 2^{10}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460054/gate-cse-2025-set-1-question-26#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>A given program has 25% load/store instructions. Suppose the ideal CPI (cycles per\ninstruction) without any memory stalls is 2. The program exhibits 2% miss rate on\ninstruction cache and 8% miss rate on data cache. The miss penalty is 100 cycles.\nThe speedup (rounded off to two decimal places) achieved with a perfect cache (i.e.,\nwith NO data or instruction cache misses) is _________ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422796/gate-cse-2024-set-1-question-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider two set-associative cache memory architectures: WBC, which uses the\nwrite back policy, and WTC, which uses the write through policy. Both of them use\nthe LRU (Least Recently Used) block replacement policy. The cache memory is\nconnected to the main memory. Which of the following statements is/are TRUE? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>A read miss in WBC never evicts a dirty block</p>",
            "<b>B.</b> <p>A read miss in WTC never triggers a write back operation of a cache block to\nmain memory</p>",
            "<b>C.</b> <p>A write hit in WBC can modify the value of the dirty bit of a cache block</p>",
            "<b>D.</b> <p>A write miss in WTC always writes the victim cache block to main memory\nbefore loading the missed block to the cache</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>A read miss in WTC never triggers a write back operation of a cache block to\nmain memory</p>",
            "<b>C.</b> <p>A write hit in WBC can modify the value of the dirty bit of a cache block</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422799/gate-cse-2024-set-1-question-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>An 8-way set associative cache of size 64 KB (1 KB = 1024 bytes) is used in a\nsystem with 32-bit address. The address is sub-divided into TAG, INDEX, and\nBLOCK OFFSET.<br>\nThe number of bits in the TAG is ____. <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "19",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399257/gate-cse-2023-question-54#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider a system with 2 KB direct mapped data cache with a block size of 64 bytes. The system has a physical address space of 64 KB and a word length of 16 bits. During the execution of a program, four data words P, Q, R, and S are accessed in that order 10 times (i.e., PQRSPQRS...). Hence, there are 40 accesses to data cache altogether. Assume that the data cache is initially empty and no other data words are accessed by the program. The addresses of the first bytes of P, Q, R, and S are 0xA248, 0xC28A, 0xCA8A, and 0xA262, respectively. For the execution of the above program, which of the following statements is/are TRUE with respect to the data cache? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Every access to S is a hit.</p>",
            "<b>B.</b> <p>Once P is brought to the cache it is never evicted.</p>",
            "<b>C.</b> <p>At the end of the execution only R and S reside in the cache.</p>",
            "<b>D.</b> <p>Every access to R evicts Q from the cache.</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>Every access to S is a hit.</p>",
            "<b>B.</b> <p>Once P is brought to the cache it is never evicted.</p>",
            "<b>D.</b> <p>Every access to R evicts Q from the cache.</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371892/Gate-cse-2022-question-44#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>A cache memory that has a hit rate of 0.8 has an access latency 10 ns and miss penalty 100 ns. An optimization is done on the cache to reduce the miss rate. However, the optimization results in an increase of cache access latency to 15 ns, whereas the miss penalty is not affected. The minimum hit rate (rounded off to two decimal places) needed after the optimization such that it should not increase the average memory access time is _____. <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0.85",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371913/Gate-cse-2022-question-23#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Let WB and WT be two set associative cache organizations that use LRU algorithm for cache block replacement. WB is a write back cache and WT is a write through cache. Which of the following statements is/are FALSE? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Each cache block in WB and WT has a dirty bit.</p>",
            "<b>B.</b> <p>Every write hit in WB leads to a data transfer from cache to main memory.</p>",
            "<b>C.</b> <p>Eviction of a block from WT will not lead to data transfer from cache to main memory.</p>",
            "<b>D.</b> <p>A read miss in WB will never lead to eviction of a dirty block from WB.</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>Each cache block in WB and WT has a dirty bit.</p>",
            "<b>B.</b> <p>Every write hit in WB leads to a data transfer from cache to main memory.</p>",
            "<b>D.</b> <p>A read miss in WB will never lead to eviction of a dirty block from WB.</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371922/Gate-cse-2022-question-14#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Assume a two-level inclusive cache hierarchy, L1 and L2, where L2 is the larger of the two. Consider the following statements.\n<br><br>\nS1: Read misses in a write through L1 cache do not result in writebacks of dirty lines to the L2<br>\nS2: Write allocate policy must be used in conjunction with write through caches and no-write allocate policy is used with writeback caches.<br><br>\nWhich of the following statements is correct? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1  is true and S2 is false</p>",
            "<b>B.</b> <p>S1  is false and S2 is true</p>",
            "<b>C.</b> <p>S1  is true and S2 is true</p>",
            "<b>D.</b> <p>S1  is false and S2 is false</p>"
          ],
          "correct_answer": "<b>A.</b> <p>S1  is true and S2 is false</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357513/gate-cse-2021-set-2-question-27#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider a set-associative cache of size 2KB (\\(1KB=2^{10}\\) bytes) with cache block size of 64 bytes. Assume that the cache is byte-addressable and a 32 -bit address is used for accessing the cache. If the width of the tag field is 22 bits, the associativity of the cache is ______ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357521/gate-cse-2021-set-2-question-19#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider a computer system with a byte-addressable primary memory of size \\(2^{32} \\text{ bytes}\\). Assume the computer system has a direct-mapped cache of size \\(32 KB (1 KB = 2^{10}  \\text{ bytes})\\), and each cache block is of size 64 bytes.<br>\nThe size of the tag field is __________ bits. <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "17",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357429/gate-cse-2021-set-1-question-22#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>How many total bits are required for a direct-mapped cache with 128 KB of data and 1 word block size, assuming a 32-bit address and 1 word size of 4 bytes? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2  Mbits</p>",
            "<b>B.</b> <p>1.7 Mbits</p>",
            "<b>C.</b> <p>2.5 Mbits</p>",
            "<b>D.</b> <p>1.5 Mbits</p>"
          ],
          "correct_answer": "<b>D.</b> <p>1.5 Mbits</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331421/isro2020-47\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Which of the following is an efficient method of cache updating? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Snoopy writes</p>",
            "<b>B.</b> <p>Write through</p>",
            "<b>C.</b> <p>Write within</p>",
            "<b>D.</b> <p>Buffered write</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Snoopy writes</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331409/isro2020-43\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
