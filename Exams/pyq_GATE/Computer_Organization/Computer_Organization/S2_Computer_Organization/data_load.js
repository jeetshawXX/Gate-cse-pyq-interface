window.__examLoadCallback({
  "title": "Computer_Organization - Computer_Organization - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "Computer_Organization",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider  a  computer  with  a  4  MHz  processor.  Its  DMA  controller  can  transfer 8 bytes in 1 cycle from a device to main memory through cycle stealing at regular intervals. Which one of the following is the data transfer rate (in bits per second) of the DMA controller if 1% of the processor cycles are used for DMA? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2,56,000</p>",
            "<b>B.</b> <p>3,200</p>",
            "<b>C.</b> <p>25,60,000</p>",
            "<b>D.</b> <p>32,000</p>"
          ],
          "correct_answer": "<b>C.</b> <p>25,60,000</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422896/gate-cse-2024-set-2-question-1#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>A given program has 25% load/store instructions. Suppose the ideal CPI (cycles per\ninstruction) without any memory stalls is 2. The program exhibits 2% miss rate on\ninstruction cache and 8% miss rate on data cache. The miss penalty is 100 cycles.\nThe speedup (rounded off to two decimal places) achieved with a perfect cache (i.e.,\nwith NO data or instruction cache misses) is _________ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422796/gate-cse-2024-set-1-question-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>The baseline execution time of a program on a 2 GHz single core machine is\n100 nanoseconds (ns). The code corresponding to 90% of the execution time can be\nfully parallelized. The overhead for using an additional core is 10 ns when running\non a multicore system. Assume that all cores in the multicore system run their share\nof the parallelized code for an equal amount of time.<br>\nThe number of cores that minimize the execution time of the program is _______ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422797/gate-cse-2024-set-1-question-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider a 512 GB hard disk with 32 storage surfaces. There are 4096 sectors per\ntrack and each sector holds 1024 bytes of data. The number of cylinders in the hard\ndisk is ____ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4096",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422798/gate-cse-2024-set-1-question-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
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
          "id": 6,
          "question": "<p>Consider a 5-stage pipelined processor with Instruction Fetch (IF), Instruction Decode (ID), Execute (EX), Memory Access (MEM), and Register Writeback (WB) stages. Which of the following statements about forwarding is/are CORRECT? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>In a pipelined execution, forwarding means the result from a source stage of an\nearlier instruction is passed on to the destination stage of a later instruction</p>",
            "<b>B.</b> <p>In forwarding, data from the output of the MEM stage can be passed on to the\ninput of the EX stage of the next instruction</p>",
            "<b>C.</b> <p>Forwarding cannot prevent all pipeline stalls</p>",
            "<b>D.</b> <p>Forwarding does not require any extra hardware to retrieve the data from the\npipeline stages</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>In a pipelined execution, forwarding means the result from a source stage of an\nearlier instruction is passed on to the destination stage of a later instruction</p>",
            "<b>B.</b> <p>In forwarding, data from the output of the MEM stage can be passed on to the\ninput of the EX stage of the next instruction</p>",
            "<b>C.</b> <p>Forwarding cannot prevent all pipeline stalls</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422822/gate-cse-2024-set-1-question-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Which one of the following statements is FALSE? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>In the cycle stealing mode of DMA, one word of data is transferred between an I/O\ndevice and main memory in a stolen cycle</p>",
            "<b>B.</b> <p>For bulk data transfer, the burst mode of DMA has a higher throughput than the\ncycle stealing mode</p>",
            "<b>C.</b> <p>Programmed I/O mechanism has a better CPU utilization than the interrupt driven\nI/O mechanism</p>",
            "<b>D.</b> <p>The CPU can start executing an interrupt service routine faster with vectored\ninterrupts than with non-vectored interrupts</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Programmed I/O mechanism has a better CPU utilization than the interrupt driven\nI/O mechanism</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422837/gate-cse-2024-set-1-question-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>An 8-way set associative cache of size 64 KB (1 KB = 1024 bytes) is used in a\nsystem with 32-bit address. The address is sub-divided into TAG, INDEX, and\nBLOCK OFFSET.<br>\nThe number of bits in the TAG is ____. <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "19",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399257/gate-cse-2023-question-54#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>A 4 kilobyte (KB) byte-addressable memory is realized using four 1 KB memory\nblocks. Two input address lines (IA4 and IA3) are connected to the chip select\n(CS) port of these memory blocks through a decoder as shown in the figure. The\nremaining ten input address lines from IA11-IA0 are connected to the address\nport of these blocks. The chip select (CS) is active high. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q32_9bb50bc2.jpg\"><br>The input memory addresses (IA11-IA0), in decimal, for the starting locations\n(Addr=0) of each block (indicated as X1, X2, X3, X4 in the figure) are among the\noptions given below. Which one of the following options is CORRECT? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(0, 1, 2, 3)</p>",
            "<b>B.</b> <p>(0, 1024, 2048, 3072)</p>",
            "<b>C.</b> <p>(0, 8, 16, 24)</p>",
            "<b>D.</b> <p>(0, 0, 0, 0)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>(0, 8, 16, 24)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/399279/gate-cse-2023-question-32#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the given C-code and its corresponding assembly code, with a few\noperands U1-U4 being unknown. Some useful information as well as the semantics\nof each unique assembly instruction is annotated as inline comments in the code.\nThe memory is byte-addressable.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q31_991991da.jpg\"><br>Which one of the following options is a CORRECT replacement for operands in\nthe position (U1, U2, U3, U4) in the above assembly code? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(8, 4, 1, Lo2)</p>",
            "<b>B.</b> <p>(3, 4, 4, Lo1)</p>",
            "<b>C.</b> <p>(8, 1, 1, Lo2)</p>",
            "<b>D.</b> <p>(3, 1, 1, Lo1)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>(3, 4, 4, Lo1)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/399280/gate-cse-2023-question-31#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>A keyboard connected to a computer is used at a rate of 1 keystroke per second.\nThe computer system polls the keyboard every 10 ms (milli seconds) to check for\na keystroke and consumes 100 \\( \\mu s\\) (micro seconds) for each poll. If it is determined\nafter polling that a key has been pressed, the system consumes an additional 200\n\\( \\mu s\\) to process the keystroke. Let \\( T_1\\) denote the fraction of a second spent in polling\nand processing a keystroke.<br>\nIn an alternative implementation, the system uses interrupts instead of polling.\nAn interrupt is raised for every keystroke. It takes a total of 1 ms for servicing an\ninterrupt and processing a keystroke. Let  \\( T_2\\) denote the fraction of a second spent\nin servicing the interrupt and processing a keystroke.\nThe ratio \\( \\frac{T_1}{T_2}\\)\nis ______ . (Rounded off to one decimal place) <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10.2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399287/gate-cse-2023-question-24#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider a 3-stage pipelined processor having a delay of 10 ns (nanoseconds),\n20 ns, and 14 ns, for the first, second, and the third stages, respectively. Assume\nthat there is no other delay and the processor does not suffer from any pipeline\nhazards. Also assume that one instruction is fetched every cycle.<br>\nThe total execution time for executing 100 instructions on this processor is _______\nns <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2040",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399288/gate-cse-2023-question-23#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>A processor \\(X_1\\) operating at 2 GHz has a standard 5-stage RISC instruction pipeline having a base CPI (cycles per instruction) of one without any pipeline hazards. For a given program P that has 30% branch instructions, control hazards incur 2 cycles stall for every branch. A new version of the processor \\(X_2\\) operating at same clock frequency has an additional branch predictor unit (BPU) that completely eliminates stalls for correctly predicted branches. There is neither any savings nor any additional stalls for wrong predictions. There are no structural hazards and data hazards for \\(X_1\\) and \\(X_2\\). If the BPU has a prediction accuracy of 80%, the speed up (rounded   off to   two decimal places)   obtained   by \\(X_2\\)    over   \\(X_1\\)   in executing P is <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.42",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371885/Gate-cse-2022-question-51#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
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
          "id": 15,
          "question": "<p>Consider a digital display system (DDS) shown in the figure that displays the contents of register X. A 16-bit code word is used to load a word in X, either from S or from R. S is a 1024-word memory segment and R is a 32-word register file. Based on the value of mode bit M, T selects an input word to load in X. P and Q interface with the corresponding bits in the code word to choose the addressed word. Which one of the following represents the functionality of P, Q, and T?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q30_7807d2ff.jpg\"><br> <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P is 10:1 multiplexer; <br>Q is 5:1 multiplexer; <br>T is 2:1 multiplexer</p>",
            "<b>B.</b> <p>P is \\(10:2^{10}\\) decoder; <br>Q is \\(5:2^{5}\\) decoder; <br>T is 2:1 encoder</p>",
            "<b>C.</b> <p>P is \\(10:2^{10}\\) decoder; <br>Q is \\(5:2^{5}\\) decoder; <br>T is 2:1 multiplexer</p>",
            "<b>D.</b> <p>P is 1:10 de-multiplexer;<br>Q is 1:5 de-multiplexer; <br>T is 2:1 multiplexer</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P is \\(10:2^{10}\\) decoder; <br>Q is \\(5:2^{5}\\) decoder; <br>T is 2:1 multiplexer</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/371906/Gate-cse-2022-question-30#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
