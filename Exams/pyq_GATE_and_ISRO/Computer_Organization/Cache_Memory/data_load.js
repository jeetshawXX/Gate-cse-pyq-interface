window.__examLoadCallback({
  "title": "Computer_Organization - Cache_Memory",
  "duration": 219,
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
        },
        {
          "id": 16,
          "question": "<p>A computer system with a word length of 32 bits has a 16 MB byte- addressable main memory and a 64 KB, 4-way set associative cache memory with a block size of 256 bytes. Consider the following four physical addresses represented in hexadecimal notation.<br><br>\nA1=0x42C8A4,<br>\nA2=0x546888,<br>\nA3=0x6A289C,<br> A4=0x5E4880<br><br>\nWhich one of the following is TRUE? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A1 and A4 are mapped to different cache sets.</p>",
            "<b>B.</b> <p>A2 and A3 are mapped to the same cache set.</p>",
            "<b>C.</b> <p>A3 and A4 are mapped to the same cache set.</p>",
            "<b>D.</b> <p>A1 and A3 are mapped to the same cache set.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A2 and A3 are mapped to the same cache set.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/333201/gate2020-cs-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>A direct mapped cache memory of 1 MB has a block size of 256 bytes. The cache has an access time of 3 ns and a hit rate of 94%. During a cache miss, it takes 20 ns to bring the first word of a block from the main memory, while each subsequent word takes 5 ns. The word size is 64 bits. The average memory access time in ns (round off to 1 decimal place) is______. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "13.5",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "Other Answer as per GATE 2020 Answer Key : 13.3 to 13.3 or 13.5 to 13.5 <br> <a href=\"https://gateoverflow.in/333210/gate2020-cs-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>A certain processor deploys a single-level cache. The cache block size is 8 words and the word size is 4 bytes. The memory system uses a 60-MHz clock. To service a cache-miss, the memory controller first takes 1 cycle to accept the starting address of the block, it then takes 3 cycles to fetch all the eight words of the block, and finally transmits the words of the requested block at the rate of 1 word per cycle. The maximum bandwidth for the memory system when the program running on the processor issues a series of read operations is _________\\(\\times 10^6\\) bytes/sec. <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "160",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302803/gate2019-cs-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>A certain processor uses a fully associative cache of size 16 kB, The cache block size is 16 bytes. Assume that the main memory is byte addressable and uses a 32-bit address. How many bits are required for the Tag and the Index fields respectively in the addresses generated by the processor? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>24 bits and 0 bits</p>",
            "<b>B.</b> <p>28 bits and 4 bits</p>",
            "<b>C.</b> <p>24 bits and 4 bits</p>",
            "<b>D.</b> <p>28 bits and 0 bits</p>"
          ],
          "correct_answer": "<b>D.</b> <p>28 bits and 0 bits</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/302847/gate2019-cs-1#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
          "question": "<p>For a multi-processor architecture, in which protocol a write transaction is forwarded to only those processors that are known to possess a copy of newly altered cache line? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Snoopy bus protocol</p>",
            "<b>B.</b> <p>Cache coherency protocol</p>",
            "<b>C.</b> <p>Directory based protocol</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Directory based protocol</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213515/isro2018-73\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
          "question": "<p>The size of the physical address space of a processor is \\(2^{P}\\) bytes. The word length is \\(2^{W}\\) bytes. The capacity of cache memory is \\(2^{N}\\) Bytes. The size of each cache block is \\(2^{M}\\) words. For a K-way set-associative cache memory, the length (in number of bits) of the\ntag field is <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(P-N-log_{2}K\\)</p>",
            "<b>B.</b> <p>\\(P-N+log_{2}K\\)</p>",
            "<b>C.</b> <p>\\(P-N-M-W-log_{2}K\\)</p>",
            "<b>D.</b> <p>\\(P-N-M-W+log_{2}K\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(P-N+log_{2}K\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204108/gate2018-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
          "question": "<p>A cache memory needs an access time of 30 ns and main memory 150 ns, what is average access time of CPU (assume hit ratio = 80%)? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>60 ns</p>",
            "<b>B.</b> <p>30 ns</p>",
            "<b>C.</b> <p>150 ns</p>",
            "<b>D.</b> <p>70 ns</p>"
          ],
          "correct_answer": "<b>A.</b> <p>60 ns</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128633/isro2017-21\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
          "question": "<p>Consider a machine with a byte addressable main memory of \\(2^{32}\\) bytes divided into blocks of size 32 bytes. Assume that a direct mapped cache having 512 cache lines is used with this machine. The size of the tag field in bits is ______. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "18",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118613/gate2017-2-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 24,
          "question": "<p>The read access times and the hit ratios for different caches in a memory hierarchy are as\ngiven below. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Cache_Memory\\q45_877a44e0.jpg\"> <br> The read access time of main memory is 90 nanoseconds. Assume that the caches use the referred word-first read policy and the write back policy. Assume that all the caches are direct mapped caches. Assume that the dirty bit is always 0 for all the blocks in the caches. In execution of a program, 60% of memory reads are for instruction fetch and 40% are for memory operand fetch. The average read access time in nanoseconds (up to 2 decimal places) is______. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4.72",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118597/gate2017-2-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 25,
          "question": "<p>In a two-level cache system, the access times of \\(L_{1}\\) and \\(L_{2}\\) caches are 1 and 8 clock cycles, respectively. The miss penalty from L2 cache to main memory is 18 clock cycles . The miss rate of \\(L_{1}\\) cache is twice that of \\(L_{2}\\). The average memory access time (AMAT) of this cache system is 2 cycles. This miss rates of \\(L_{1}\\) and \\(L_{2}\\) respectively are : <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0.111 and 0.056</p>",
            "<b>B.</b> <p>0.056 and 0.111</p>",
            "<b>C.</b> <p>0.0892 and 0.1784</p>",
            "<b>D.</b> <p>0.1784 and 0.0892</p>"
          ],
          "correct_answer": "<b>A.</b> <p>0.111 and 0.056</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118371/gate2017-2-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 26,
          "question": "<p>A cache memory unit with capacity of N words and block size of B words is to be designed.\nIf it is designed as a direct mapped cache, the length of the TAG field is 10 bits. If the cache\nunit is now designed as a 16-way set-associative cache, the length of the TAG field is\n______bits. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "14",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118748/gate2017-1-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 27,
          "question": "<p>Consider a 2-way set associative cache with 256 blocks and uses LRU replacement, Initially\nthe cache is empty. Conflict misses are those misses which occur due the contention of\nmultiple blocks for the same cache set. Compulsory misses occur due to first time access to\nthe block. The following sequence of accesses to memory blocks. <br><br>\n(0,128,256,128,0,128,256,128,1,129,257,129,1,129,257,129)<br><br>\nis repeated 10 times. The number of conflict misses experienced by the cache is ___________. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "76",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118745/gate2017-1-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 28,
          "question": "<p>Consider a two-level cache hierarchy with L1 and L2 caches. An application incurs 1.4\nmemory accesses per instruction on average. For this application, the miss rate of L1 cache 0.1, the L2 cache experiences, on average, 7 misses per 1000 instructions. The miss rate of L2 expressed correct to two decimal places is ___________. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0.05",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118305/gate2017-1-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 29,
          "question": "<p>Consider a system with 2 level cache. Access times of Level 1 cache, Level 2 cache and main memory are 1 ns, 10 ns, and 500 ns respectively. The hit rates of Level 1 and Level 2 caches are 0.8 and 0.9, respectively. What is the average access time of the system ignoring the search time within the cache? <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>13.0</p>",
            "<b>B.</b> <p>12.8</p>",
            "<b>C.</b> <p>12.6</p>",
            "<b>D.</b> <p>12.4</p>"
          ],
          "correct_answer": "<b>C.</b> <p>12.6</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3653/gate2004-it-12-isro2016-77\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 30,
          "question": "<p>A file system uses an in-memory cache to cache disk blocks.The miss rate of the cache is shown in the figure. The latency to read a block from the cache is 1 ms and to read a block from the disk is 10ms. Assume that the cost of checking whether a block exists in the cache is negligible. Available cache sizes are in multiples of 10MB. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Cache_Memory\\q50_ff9c459d.jpg\"> <br>The smallest cache size required to ensure an average read latency of less than 6ms is_________\nMB. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "30",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39592/gate2016-2-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 31,
          "question": "<p>The width of the physical address on a machine is 40 bits. The width of the tag field in a 512KB 8-way set associative cache is ________ bits. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "24",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39622/gate2016-2-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 32,
          "question": "<p>Consider a machine with a byte addressable main memory of \\(2^{20}\\)  bytes, block size of 16 bytes and a direct mapped cache having \\(2^{12}\\) cache lines. Let the addresses of two consecutive bytes in main memory be \\((E201F)_{16}\\) and \\((E2020)_{16}\\). What are the tag and cache line address (in hex) for main memory address \\((E201F)_{16}\\)? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>E, 201</p>",
            "<b>B.</b> <p>F, 201</p>",
            "<b>C.</b> <p>E, E20</p>",
            "<b>D.</b> <p>2, 01F</p>"
          ],
          "correct_answer": "<b>A.</b> <p>E, 201</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8410/gate2015-3-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 33,
          "question": "<p>Assume that for a certain processor, a read request takes 50 nanoseconds on a cache miss and 5 nanoseconds on a cache hit. Suppose while running a program, it was observed that 80% of the processor's read requests result in a cache hit. The average read access time in nanoseconds is __________. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "14",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8119/gate2015-2-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 34,
          "question": "<p>The memory access time is 1 nanosecond for a read operation with a hit in cache, 5\nnanoseconds for a read operation with a miss in cache, 2 nanoseconds for a write operation\nwith a hit in cache and 10 nanoseconds for a write operation with a miss in cache. Execution\nof a sequence of instructions involves 100 instruction fetch operations, 60 memory operand\nread operations and 40 memory operand write operations. The cache hit-ratio is 0.9. The\naverage memory access time (in nanoseconds) in executing the sequence of instructions is\n__________. <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.68",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2078/gate2014-3-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 35,
          "question": "<p>If the associativity of a processor cache is doubled while keeping the capacity and block size\nunchanged, which one of the following is guaranteed to be NOT affected? <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Width of tag comparator</p>",
            "<b>B.</b> <p>Width of set index decoder</p>",
            "<b>C.</b> <p>Width of way selection multiplexor</p>",
            "<b>D.</b> <p>Width of processor to main memory data bus</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Width of processor to main memory data bus</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2010/gate2014-2-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 36,
          "question": "<p>In designing a computer's cache system, the cache block (or cache line) size is an important\nParameter. Which one of the following statements is correct in this context? <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A smaller block size implies better spatial locality</p>",
            "<b>B.</b> <p>A smaller block size implies a smaller cache tag and hence lower cache tag overhead</p>",
            "<b>C.</b> <p>A smaller block size implies a larger cache tag and hence lower cache hit time</p>",
            "<b>D.</b> <p>A smaller block size incurs a lower cache miss penalty</p>"
          ],
          "correct_answer": "<b>D.</b> <p>A smaller block size incurs a lower cache miss penalty</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2009/gate2014-2-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 37,
          "question": "<p>A 4-way set-associative cache memory unit with a capacity of 16 KB is built using a block\nsize of 8 words. The word length is 32 bits. The size of the physical address space is 4 GB.\nThe number of bits for the TAG field is _____ <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "20",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1963/gate2014-2-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 38,
          "question": "<p>An access sequence of cache block addresses is of length N and contains n unique block\naddresses. The number of unique block addresses between two consecutive accesses to the\nsame block address is bounded above K. What is the miss ratio if the access sequence is\npassed through a cache of associativity A\\(\\geq\\)k exercising least-recently-used replacement policy? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n/N</p>",
            "<b>B.</b> <p>1/N</p>",
            "<b>C.</b> <p>1/A</p>",
            "<b>D.</b> <p>k/n</p>"
          ],
          "correct_answer": "<b>A.</b> <p>n/N</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1922/gate2014-1-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 39,
          "question": "<p>How much speed do we gain by using the cache, when cache is used 80% of the time? Assume cache is faster than main memory. <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5.27</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>4.16</p>",
            "<b>D.</b> <p>6.09</p>"
          ],
          "correct_answer": "<b>C.</b> <p>4.16</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43812/isro-2013-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 40,
          "question": "<p>In a k-way set associative cache, the cache is divided into v sets, each of which consists of k lines.\nThe lines of a set are placed in sequence one after another. The lines in set s are sequenced before\nthe lines in set (s+1). The main memory blocks are numbered 0 onwards. The main memory block numbered j must be mapped to any one of the cache lines from <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(j mod v)*k to (j mod v)*k + (k-1)</p>",
            "<b>B.</b> <p>(j mod v) to (j mod v)+(k-1)</p>",
            "<b>C.</b> <p>(j mod k) to (j mod k)+(v-1)</p>",
            "<b>D.</b> <p>(j mod k)*v to (j mod k)*v + (v-1)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>(j mod v)*k to (j mod v)*k + (k-1)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1442/gate2013-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 41,
          "question": "<p>A computer has a 256 KByte, 4-way set associative, write back data cache with block size of 32 Bytes. The\nprocessor sends 32 bit addresses to the cache controller. Each cache tag directory entry contains, in addition to address tag, 2 valid bits, 1 modified bit and 1 replacement bit. <br><br>The size of the cache tag directory is <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>160 Kbits</p>",
            "<b>B.</b> <p>136 Kbits</p>",
            "<b>C.</b> <p>40 Kbits</p>",
            "<b>D.</b> <p>32 Kbits</p>"
          ],
          "correct_answer": "<b>A.</b> <p>160 Kbits</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43311/gate2012-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 42,
          "question": "<p>A computer has a 256 KByte, 4-way set associative, write back data cache with block size of 32 Bytes. The\nprocessor sends 32 bit addresses to the cache controller. Each cache tag directory entry contains, in addition to address tag, 2 valid bits, 1 modified bit and 1 replacement bit. <br><br>The number of bits in the tag field of an address is <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>11</p>",
            "<b>B.</b> <p>14</p>",
            "<b>C.</b> <p>16</p>",
            "<b>D.</b> <p>27</p>"
          ],
          "correct_answer": "<b>C.</b> <p>16</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2192/gate2012-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 43,
          "question": "<p>The search concept used in associative memory is <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Parallel search</p>",
            "<b>B.</b> <p>Sequential search</p>",
            "<b>C.</b> <p>Binary search</p>",
            "<b>D.</b> <p>Selection search</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Parallel search</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18093/isro2011-42\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 44,
          "question": "<p>Consider a direct mapped cache with 64 blocks and a block size of 16 bytes. To what block number does the byte address 1206 map to <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>does not map</p>",
            "<b>B.</b> <p>6</p>",
            "<b>C.</b> <p>11</p>",
            "<b>D.</b> <p>54</p>"
          ],
          "correct_answer": "<b>C.</b> <p>11</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51330/isro2011-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 45,
          "question": "<p>An 8KB direct mapped write-back cache is organized as multiple blocks, each of\nsize 32-bytes. The processor generates 32-bit addresses. The cache controller\nmaintains the tag information for each cache block comprising of the following.\n1 Valid bit\n1 Modified bit\nAs many bits as the minimum needed to identify the memory block mapped in\nthe cache.\nWhat is the total size of memory needed at the cache controller to store metadata\n(tags) for the cache? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4864 bits</p>",
            "<b>B.</b> <p>6144bits</p>",
            "<b>C.</b> <p>6656bits</p>",
            "<b>D.</b> <p>5376bits</p>"
          ],
          "correct_answer": "<b>D.</b> <p>5376bits</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2145/gate2011-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 46,
          "question": "<p>A computer system has an L1 cache, an L2 cache, and a main memory unit\nconnected as shown below. The block size in L1 cache is 4 words. The block size\nin L2 cache is 16 words. The memory access times are 2 nanoseconds.\n20 nanoseconds and 200 nanoseconds for L1 cache, L2 cache and main memory\nunit respectively. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Cache_Memory\\q48_06dbca39.jpg\"><br>When there is a miss in both L1 cache and L2 cache, first a block is transferred\nfrom main memory to L2 cache, and then a block is transferred from L2 cache to\nL1 cache. What is the total time taken for these transfers? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>222 nanoseconds</p>",
            "<b>B.</b> <p>888 nanoseconds</p>",
            "<b>C.</b> <p>902 nanoseconds</p>",
            "<b>D.</b> <p>968 nanoseconds</p>"
          ],
          "correct_answer": "<b>C.</b> <p>902 nanoseconds</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43329/gate2010-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 47,
          "question": "<p>A computer system has an L1 cache, an L2 cache, and a main memory unit\nconnected as shown below. The block size in L1 cache is 4 words. The block size\nin L2 cache is 16 words. The memory access times are 2 nanoseconds.\n20 nanoseconds and 200 nanoseconds for L1 cache, L2 cache and main memory\nunit respectively. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Cache_Memory\\q48_06dbca39.jpg\"><br> When there is a miss in L1 cache and a hit in L2 cache, a block is transferred\nfrom L2 cache to L1 cache. What is the time taken for this transfer? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2 nanoseconds</p>",
            "<b>B.</b> <p>20 nanoseconds</p>",
            "<b>C.</b> <p>22 nanoseconds</p>",
            "<b>D.</b> <p>88 nanoseconds</p>"
          ],
          "correct_answer": "<b>C.</b> <p>22 nanoseconds</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2352/gate2010-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 48,
          "question": "<p>Consider a 4-way set associative cache (initially empty) with total 16 cache\nblocks. The main memory consists of 256 blocks and the request for memory\nblocks is in the following order: <br><br>\n0, 255, 1, 4, 3, 8, 133, 159, 216, 129, 63, 8, 48, 32, 73, 92, 155. <br><br>\nWhich one of the following memory block will NOT be in cache if LRU replacement\npolicy is used? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>129</p>",
            "<b>D.</b> <p>216</p>"
          ],
          "correct_answer": "<b>D.</b> <p>216</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1315/gate2009-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 49,
          "question": "<p>More than one word are put in one cache block to: <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>exploit the temporal locality of reference in a program</p>",
            "<b>B.</b> <p>exploit the spatial locality of reference in a program</p>",
            "<b>C.</b> <p>reduce the miss penalty</p>",
            "<b>D.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>exploit the spatial locality of reference in a program</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/700/gate2001-1-7-isro2008-18\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 50,
          "question": "<p>Consider a computer with a 4-ways set-associative mapped cache of the following characteristics: a total of 1 MB of main memory, a word size of 1 byte, a block size of 128 words and a cache size of 8 KB.<br>\nWhile accessing the memory location 0C795H by the CPU, the contents of the TAG field of the corresponding cache line is: <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>000011000</p>",
            "<b>B.</b> <p>110001111</p>",
            "<b>C.</b> <p>00011000</p>",
            "<b>D.</b> <p>110010101</p>"
          ],
          "correct_answer": "<b>A.</b> <p>000011000</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3405/gate2008-it-81\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 51,
          "question": "<p>Consider a computer with a 4-ways set-associative mapped cache of the following characteristics: a total of 1 MB of main memory, a word size of 1 byte, a block size of 128 words and a cache size of 8 KB.<br>\nThe number of bits in the TAG, SET and WORD fields, respectively are: <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>7,6,7</p>",
            "<b>B.</b> <p>8,5,7</p>",
            "<b>C.</b> <p>8,6,6</p>",
            "<b>D.</b> <p>9,4,7</p>"
          ],
          "correct_answer": "<b>D.</b> <p>9,4,7</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3403/gate2008-it-80\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 52,
          "question": "<p>Consider a machine with a 2-way set associative data cache of size 64Kbytes and\nblock size 16bytes. The cache is managed using 32 bit virtual addresses and the\npage size is 4Kbyts. A program to be run on this machine begins as follows:<pre><code>  double ARR[1024][1024];\nint i, j;\n \n// Initialize array ARR to 0.0\nfor(i = 0; i &lt; 1024; i++)\n    for(j = 0; j &lt; 1024; j++)\n        ARR[i][j] = 0.0;</code></pre>  The size of double is 8Bytes. Array ARR is located in memory starting at the\nbeginning of virtual page 0xFF000 and stored in row major order. The cache is\ninitially empty and no pre-fetching is done. The only data memory references\nmade by the program are those to array ARR <br> <br>The cache hit ratio for this initialization loop is <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0%</p>",
            "<b>B.</b> <p>25%</p>",
            "<b>C.</b> <p>50%</p>",
            "<b>D.</b> <p>75%</p>"
          ],
          "correct_answer": "<b>C.</b> <p>50%</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43491/gate2008-73#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 53,
          "question": "<p>Consider a machine with a 2-way set associative data cache of size 64Kbytes and\nblock size 16bytes. The cache is managed using 32 bit virtual addresses and the\npage size is 4Kbyts. A program to be run on this machine begins as follows:<pre><code>  double ARR[1024][1024];\nint i, j;\n \n// Initialize array ARR to 0.0\nfor(i = 0; i &lt; 1024; i++)\n    for(j = 0; j &lt; 1024; j++)\n        ARR[i][j] = 0.0;</code></pre>  The size of double is 8Bytes. Array ARR is located in memory starting at the\nbeginning of virtual page 0xFF000 and stored in row major order. The cache is\ninitially empty and no pre-fetching is done. The only data memory references\nmade by the program are those to array ARR <br> <br>Which of the following array elements has the same cache index as ARR[0][0]? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>ARR [0] [4]</p>",
            "<b>B.</b> <p>ARR [4] [0]</p>",
            "<b>C.</b> <p>ARR [0] [5]</p>",
            "<b>D.</b> <p>ARR [5] [0]</p>"
          ],
          "correct_answer": "<b>B.</b> <p>ARR [4] [0]</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43490/gate2008-72#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 54,
          "question": "<p>Consider a machine with a 2-way set associative data cache of size 64Kbytes and\nblock size 16bytes. The cache is managed using 32 bit virtual addresses and the\npage size is 4Kbyts. A program to be run on this machine begins as follows:<pre><code>  double ARR[1024][1024];\nint i, j;\n \n// Initialize array ARR to 0.0\nfor(i = 0; i &lt; 1024; i++)\n    for(j = 0; j &lt; 1024; j++)\n        ARR[i][j] = 0.0;</code></pre>  The size of double is 8Bytes. Array ARR is located in memory starting at the\nbeginning of virtual page 0xFF000 and stored in row major order. The cache is\ninitially empty and no pre-fetching is done. The only data memory references\nmade by the program are those to array ARR <br> <br>The total size of the tags in the cache directory is <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>32Kbits</p>",
            "<b>B.</b> <p>34Kbits</p>",
            "<b>C.</b> <p>64Kbits</p>",
            "<b>D.</b> <p>68Kbits</p>"
          ],
          "correct_answer": "<b>D.</b> <p>68Kbits</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/494/gate2008-71#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 55,
          "question": "<p>For inclusion to hold between two cache levels L1 and L2 in a multi-level cache\nhierarchy, which of the following are necessary? <br> <br>\nI. L1 must be a write-through cache <br>\nII. L2 must be a write-through cache <br>\nIII. The associativity of L2 must be greater than that of L1 <br>\nIV. The L2 cache must be at least as large as the L1 cache <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>IV only</p>",
            "<b>B.</b> <p>I and IV only</p>",
            "<b>C.</b> <p>I, II and IV only</p>",
            "<b>D.</b> <p>I, II, III and IV</p>"
          ],
          "correct_answer": "<b>A.</b> <p>IV only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/446/gate2008-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 56,
          "question": "<p>Consider a small 2-way set-associative cache memory, consisting of four blocks. For choosing the block to be replaced, use the least recently (LRU) scheme. The number of cache misses for the following sequence of block addresses is 8, 12, 0, 12, 8 <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>C.</b> <p>4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49525/isro2007-46\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 57,
          "question": "<p>The principal of the locality of reference justifies the use of <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>virtual memory</p>",
            "<b>B.</b> <p>interrupts</p>",
            "<b>C.</b> <p>main memory</p>",
            "<b>D.</b> <p>cache memory</p>"
          ],
          "correct_answer": "<b>D.</b> <p>cache memory</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49485/isro2007-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 58,
          "question": "<p>Consider a Direct Mapped Cache with 8 cache blocks (numbered 0-7). If the memory block requests are in the following order <br>\n3, 5, 2, 8, 0, 63, 9,16, 20, 17, 25, 18, 30, 24, 2, 63, 5, 82,17, 24. <br>\nWhich of the following memory blocks will not be in the cache at the end of the sequence ? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>18</p>",
            "<b>C.</b> <p>20</p>",
            "<b>D.</b> <p>30</p>"
          ],
          "correct_answer": "<b>B.</b> <p>18</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3470/gate2007-it-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 59,
          "question": "<p>Consider a machine with a byte addressable main memory of \\(2^{16}\\)  bytes. Assume that a direct mapped data cache consisting of 32 lines of 64 bytes each is used in the system. A 50 x 50 two-dimensional array of bytes is stored in the main memory starting from memory location 1100H. Assume that the data cache is initially empty. The complete array is accessed twice. Assume that the contents of the data cache do not change in between the two accesses. <br><br>Which of the following lines of the data cache will be replaced by new blocks in\naccessing the array for the second time? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>line 4 to line 11</p>",
            "<b>B.</b> <p>line 4 to line 12</p>",
            "<b>C.</b> <p>line 0 to line 7</p>",
            "<b>D.</b> <p>line 0 to line 8</p>"
          ],
          "correct_answer": "<b>A.</b> <p>line 4 to line 11</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43511/gate2007-81#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 60,
          "question": "<p>Consider a machine with a byte addressable main memory of \\(2^{16}\\)  bytes. Assume that a direct mapped data cache consisting of 32 lines of 64 bytes each is used in the system. A 50 x 50 two-dimensional array of bytes is stored in the main memory starting from memory location 1100H. Assume that the data cache is initially empty. The complete array is accessed twice. Assume that the contents of the data cache do not change in between the two accesses. <br><br>How many data cache misses will occur in total? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>48</p>",
            "<b>B.</b> <p>50</p>",
            "<b>C.</b> <p>56</p>",
            "<b>D.</b> <p>59</p>"
          ],
          "correct_answer": "<b>C.</b> <p>56</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1273/gate2007-80#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 61,
          "question": "<p>Consider a 4-way set associative cache consisting of 128 lines with a line size of\n64 words. The CPU generates a 20-bit address of a word in main memory. The\nnumber of bits in the TAG, LINE and WORD fields are respectively: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>9, 6, 5</p>",
            "<b>B.</b> <p>7, 7, 6</p>",
            "<b>C.</b> <p>7, 5, 8</p>",
            "<b>D.</b> <p>9, 5, 6</p>"
          ],
          "correct_answer": "<b>D.</b> <p>9, 5, 6</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1208/gate2007-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 62,
          "question": "<p>A computer system has a level-1 instruction cache (1-cache), a level-1 data cache (D-cache) and a level-2 cache (L2-cache) with the following specifications: <br>\\(\\begin{array}{|l|c|c|c|} \\hline \\text {} &amp; \\textbf{Capacity }&amp; \\textbf{Mapping Method} &amp; \\textbf{Block Size}\\\\\\hline \\text{$I$-Cache} &amp; \\text{$4K$ words}&amp; \\text{Direct mapping} &amp; \\text{$4$ words} \\\\\\hline \\text{$D$-Cache} &amp; \\text{$4K$ words}&amp; \\text{$2$ -way set associative mapping} &amp; \\text{$4$ words}\\\\\\hline \\text{$L2$-Cache} &amp; \\text{$64K$ words}&amp; \\text{$4$-way set associative mapping} &amp; \\text{$16$ words} \\\\\\hline \\end{array}\\)\n<br>\nThe length of the physical address of a word in the main memory is 30 bits. The capacity of the tag memory in the I-cache, D-cache and L2-cache is, respectively, <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1 K x 18-bit, 1 K x 19-bit, 4 K x 16-bit</p>",
            "<b>B.</b> <p>1 K x 16-bit, 1 K x 19-bit, 4 K x 18-bit</p>",
            "<b>C.</b> <p>1 K x 16-bit, 512 x 18-bit, 1 K x 16-bit</p>",
            "<b>D.</b> <p>1 K x 18-bit, 512 x 18-bit, 1 K x 18-bit</p>"
          ],
          "correct_answer": "<b>A.</b> <p>1 K x 18-bit, 1 K x 19-bit, 4 K x 16-bit</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3586/gate2006-it-43\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 63,
          "question": "<p>A cache line is 64 bytes. The main memory has latency 32 ns and bandwidth 1 GBytes/s. The time required to fetch the entire cache line from the main memory is: <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>32 ns</p>",
            "<b>B.</b> <p>64 ns</p>",
            "<b>C.</b> <p>96 ns</p>",
            "<b>D.</b> <p>128 ns</p>"
          ],
          "correct_answer": "<b>C.</b> <p>96 ns</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3585/gate2006-it-42\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 64,
          "question": "<p>A CPU has a 32 KB direct mapped cache with 128-byte block size. Suppose A is a twodimensional array of size 512x512 with elements that occupy 8-bytes each. Consider the following two C code segments, P1 and P2.<pre><code> P1:\nfor (i=0; i&lt;512; i++) {\n   for (j=0; j&lt;512; j++) {\n      x += A[i][j];\n   }\n}\nP2:\nfor (i=0; i&lt;512; i++) {\n   for (j=0; j&lt;512; j++) {\n      x += A[j][i];\n   }\n}</code></pre> P1 and P2 are executed independently with the same initial state, namely, the array A is not in the cache and i, j, x are in registers. Let the number of cache misses experienced by P1 be M1 and that for P2 be M2 . <br><br>The value of ratio \\(\\frac{M1}{M2}\\) is: <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>\\(\\frac{1}{16}\\)</p>",
            "<b>C.</b> <p>\\(\\frac{1}{8}\\)</p>",
            "<b>D.</b> <p>16</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\frac{1}{16}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43517/gate2006-81#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 65,
          "question": "<p>A CPU has a 32 KB direct mapped cache with 128-byte block size. Suppose A is a twodimensional array of size 512x512 with elements that occupy 8-bytes each. Consider the following two C code segments, P1 and P2.<pre><code> P1:\nfor (i=0; i&lt;512; i++) {\n   for (j=0; j&lt;512; j++) {\n      x += A[i][j];\n   }\n}\nP2:\nfor (i=0; i&lt;512; i++) {\n   for (j=0; j&lt;512; j++) {\n      x += A[j][i];\n   }\n}</code></pre> P1 and P2 are executed independently with the same initial state, namely, the array A is not in the cache and i, j, x are in registers. Let the number of cache misses experienced by P1 be M1 and that for P2 be M2 . <br><br>The value of M1 is: <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>2048</p>",
            "<b>C.</b> <p>16384</p>",
            "<b>D.</b> <p>262144</p>"
          ],
          "correct_answer": "<b>C.</b> <p>16384</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1854/gate2006-80#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 66,
          "question": "<p>Consider two cache organizations: The first one is 32 KB 2-way set associative with 32-byte block size. The second one is of the same size but direct mapped. The size of an address is 32 bits in both cases. A 2-to-1 multiplexer has a latency of 0.6 ns while a kbit comparator has a latency of k/10 ns. The hit latency of the set associative organization is h1 while that of the direct mapped one is h2. <br><br>The value of h2 is: <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2.4ns</p>",
            "<b>B.</b> <p>2.3ns</p>",
            "<b>C.</b> <p>1.8ns</p>",
            "<b>D.</b> <p>1.7ns</p>"
          ],
          "correct_answer": "<b>D.</b> <p>1.7ns</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43565/gate2006-75#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 67,
          "question": "<p>Consider two cache organizations: The first one is 32 KB 2-way set associative with 32-byte block size. The second one is of the same size but direct mapped. The size of an address is 32 bits in both cases. A 2-to-1 multiplexer has a latency of 0.6 ns while a kbit comparator has a latency of k/10 ns. The hit latency of the set associative organization is h1 while that of the direct mapped one is h2. <br><br>The value of h1 is: <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2.4ns</p>",
            "<b>B.</b> <p>2.3ns</p>",
            "<b>C.</b> <p>1.8ns</p>",
            "<b>D.</b> <p>1.7ns</p>"
          ],
          "correct_answer": "<b>A.</b> <p>2.4ns</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1851/gate2006-74#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 68,
          "question": "<p>A CPU generates 32-bit virtual addresses. The page size is 4 KB. The processor\nhas a translation look-aside buffer (TLB) which can hold a total of 128 page table\nentries and is 4-way set associative. The minimum size of the TLB tag is <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>11bits</p>",
            "<b>B.</b> <p>13bits</p>",
            "<b>C.</b> <p>15bits</p>",
            "<b>D.</b> <p>20bits</p>"
          ],
          "correct_answer": "<b>C.</b> <p>15bits</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1840/gate2006-62#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 69,
          "question": "<p>A CPU has a cache with block size 64 bytes. The main memory has k banks, each\nbank being c bytes wide. Consecutive c-byte chunks are mapped on consecutive\nbanks with warp-around. All the k banks can be accessed in parallel, but two\naccesses to the same bank must be serialized. A cache block access may involve\nmultiple iterations of parallel bank accesses depending on the amount of data\nobtained by accessing all the k banks in parallel. Each iteration requires decoding\nthe bank numbers to be accessed in parallel and this takes k/2 ns . The latency of\none bank access is 80 ns . If c = 2 and k=24, then latency of retrieving a cache\nblock starting at address zero from main memory is <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>92ns</p>",
            "<b>B.</b> <p>104ns</p>",
            "<b>C.</b> <p>172ns</p>",
            "<b>D.</b> <p>184ns</p>"
          ],
          "correct_answer": "<b>D.</b> <p>184ns</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1817/gate2006-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 70,
          "question": "<p>Consider a 2-way set associative cache memory with 4 sets and total 8 cache blocks (0-7) and a main memory with 128 blocks (0-127). What memory blocks will be present in the cache after the following sequence of memory block references if LRU policy is used for cache block replacement?<br><br> 0 5 3 9 7 0 16 55\n<br>Assuming that initially the cache did not have any memory block from the current job? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0 3 5 7 16 55</p>",
            "<b>B.</b> <p>0 3 5 7 9 16 55</p>",
            "<b>C.</b> <p>0 5 7 9 16 55</p>",
            "<b>D.</b> <p>3 5 7 9 16 55</p>"
          ],
          "correct_answer": "<b>C.</b> <p>0 5 7 9 16 55</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3822/gate2005-it-61\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 71,
          "question": "<p>Consider a direct mapped cache of size 32 KB with block size 32 bytes. The CPU generates 32 bit\naddresses. The number of bits needed for cache indexing and the number of tag bits are respectively. <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10,17</p>",
            "<b>B.</b> <p>10,22</p>",
            "<b>C.</b> <p>15,17</p>",
            "<b>D.</b> <p>5,17</p>"
          ],
          "correct_answer": "<b>A.</b> <p>10,17</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1390/gate2005-67#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 72,
          "question": "<p>Consider a fully associative cache with 8 cache blocks (numbered 0-7) and the following sequence of memory block requests:<br>\n4,3,25,8,19,6,25,8,16,35,45,22,8,3,16,25,7<br>\nIf LRU replacement policy is used, which cache block will have memory block 7? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>6</p>",
            "<b>D.</b> <p>7</p>"
          ],
          "correct_answer": "<b>B.</b> <p>5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3691/gate2004-it-48\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 73,
          "question": "<p>Consider a system with 2 level cache. Access times of Level 1 cache, Level 2 cache and main memory are 1 ns, 10 ns, and 500 ns respectively. The hit rates of Level 1 and Level 2 caches are 0.8 and 0.9, respectively. What is the average access time of the system ignoring the search time within the cache? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>13</p>",
            "<b>B.</b> <p>12.8</p>",
            "<b>C.</b> <p>12.6</p>",
            "<b>D.</b> <p>12.4</p>"
          ],
          "correct_answer": "<b>C.</b> <p>12.6</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3653/gate2004-it-12-isro2016-77\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 74,
          "question": "<p>Consider a small two-way set-associative cache memory, consisting of four blocks. For choosing the\nblock to be replaced, use the least recently used (LRU) scheme. The number of cache misses for the\nfollowing sequence of block addresses is 8, 12, 0, 12,8 <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>C.</b> <p>4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1059/gate2004-65#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 75,
          "question": "<p>Which of the following is not a form of memory ? <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Instruction cache</p>",
            "<b>B.</b> <p>Instruction register</p>",
            "<b>C.</b> <p>Instruction opcode</p>",
            "<b>D.</b> <p>Translation-a-side buffer</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Instruction opcode</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/817/gate2002-1-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 76,
          "question": "<p>The main memory of a computer has 2 cm blocks while the cache has 2c blocks. If the cache uses the set associative mapping scheme with 2 blocks per set, then block k of the main memory maps to the set: <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(k mod m) of the cache</p>",
            "<b>B.</b> <p>(k mod c) of the cache</p>",
            "<b>C.</b> <p>(k mod 2c) of the cache</p>",
            "<b>D.</b> <p>(k mod 2 cm) of the cache</p>"
          ],
          "correct_answer": "<b>B.</b> <p>(k mod c) of the cache</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1475/gate-cse-1999-question-1-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 77,
          "question": "<p>A computer system has a 4 K word cache organized in block-set-associative manner with 4 blocks per set, 64 words per block. The number of bits in the SET and WORD fields of the main memory address format is: <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>15,40</p>",
            "<b>B.</b> <p>6,4</p>",
            "<b>C.</b> <p>7,2</p>",
            "<b>D.</b> <p>4,6</p>"
          ],
          "correct_answer": "<b>D.</b> <p>4,6</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2638/gate1995-2-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 78,
          "question": "<p>The principle of locality justifies the use of: <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Interrupts</p>",
            "<b>B.</b> <p>DMA</p>",
            "<b>C.</b> <p>Polling</p>",
            "<b>D.</b> <p>Cache Memory</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Cache Memory</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2593/gate1995-1-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 79,
          "question": "<p>More than one word are put in one cache block to <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Exploit the temporal locality of reference in a program</p>",
            "<b>B.</b> <p>Exploit the spatial locality of reference in a program</p>",
            "<b>C.</b> <p>Reduce the miss penalty</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Exploit the spatial locality of reference in a program</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/700/gate2001-1-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
