window.__examLoadCallback({
  "title": "Computer_Organization - Computer_Organization",
  "duration": 983,
  "sections": [
    {
      "name": "Computer_Organization",
      "questions": [
        {
          "id": 1,
          "question": "<p>An application executes \\(6.4 \\times 10^8\\) number of instructions in 6.3 seconds. There are four types of instructions, the details of which are given in the table. The duration of a clock cycle in nanoseconds is _________. (rounded off to one decimal place)\\( \\begin{array}{|c|c|c|}\n\\hline\n\\text{Instruction type} &amp; \\text{Clock cycles required per instruction (CPI)} &amp; \\text{Number of instructions executed} \\\\\n\\hline\n\\text{Branch} &amp; 2 &amp; 2.25 \\times 10^8 \\\\\n\\text{Load} &amp; 5 &amp; 1.20 \\times 10^8 \\\\\n\\text{Store} &amp; 4 &amp; 1.65 \\times 10^8 \\\\\n\\text{Arithmetic} &amp; 3 &amp; 1.30 \\times 10^8 \\\\\n\\hline\n\\end{array} \\) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460842/gate-cse-2025-set-2-question-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>A 5-stage instruction pipeline has stage delays of 180, 250, 150, 170, and 250, respectively, in nanoseconds. The delay of an inter-stage latch is 10 nanoseconds. Assume that there are no pipeline stalls due to branches and other hazards. The time taken to process 1000 instructions in microseconds is __________ . (rounded off to two decimal places) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "260.2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460847/gate-cse-2025-set-2-question-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Given a computing system with two levels of cache (L1 and L2) and a main memory. The first level (L1) cache access time is 1 nanosecond (ns) and the \"hit rate\" for L1 cache is 90% while the processor is accessing the data from L1 cache. Whereas, for the second level (L2) cache, the \"hit rate\" is 80% and the \"miss penalty\" for transferring data from L2 cache to L1 cache is 10 ns. The \"miss penalty\" for the data to be transferred from main memory to L2 cache is 100 ns. <br><br>Then the average memory access time in this system in nanoseconds is ___________ . (rounded off to one decimal place) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460848/gate-cse-2025-set-2-question-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
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
          "id": 5,
          "question": "<p>Which of the following is/are part of an Instruction Set Architecture of a processor? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The size of the cache memory</p>",
            "<b>B.</b> <p>The clock frequency of the processor</p>",
            "<b>C.</b> <p>The number of cache memory levels</p>",
            "<b>D.</b> <p>The total number of registers</p>"
          ],
          "correct_answer": "<b>D.</b> <p>The total number of registers</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460817/gate-cse-2025-set-2-question-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>A computer has a memory hierarchy consisting of two-level cache (L1 and L2) and a main memory. If the processor needs to access data from memory, it first looks into L1 cache. If the data is not found in L1 cache, it goes to L2 cache. If it fails to get the data from L2 cache, it goes to main memory, where the data is definitely available. Hit rates and access times of various memory units are shown in the figure. The average memory access time in nanoseconds (ns) is _________. (rounded off to two decimal places) <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q43_7d1f00ff.webp\"><br> <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "11.83",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460037/gate-cse-2025-set-1-question-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>A processor has 64 general-purpose registers and 50 distinct instruction types. An instruction is encoded in 32-bits. What is the maximum number of bits that can be used to store the immediate operand for the given instruction?\n<br><br>\nADD  R1, #25       // R1 = R1 + 25 <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>16</p>",
            "<b>B.</b> <p>20</p>",
            "<b>C.</b> <p>22</p>",
            "<b>D.</b> <p>24</p>"
          ],
          "correct_answer": "<b>B.</b> <p>20</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460053/gate-cse-2025-set-1-question-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
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
          "id": 9,
          "question": "<p>A partial data path of a processor is given in the figure, where \\(RA\\), \\(RB\\), and \\(RZ\\) are 32-bit registers. Which option(s) is/are CORRECT related to arithmetic operations using the data path as shown? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q17_85b8e89d.webp\"><br> <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>The data path can implement arithmetic operations involving two registers.</p>",
            "<b>B.</b> <p>The data path can implement arithmetic operations involving one register and one immediate value.</p>",
            "<b>C.</b> <p>The data path can implement arithmetic operations involving two immediate values.</p>",
            "<b>D.</b> <p>The data path can only implement arithmetic operations involving one register and one immediate value.</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>The data path can implement arithmetic operations involving two registers.</p>",
            "<b>B.</b> <p>The data path can implement arithmetic operations involving one register and one immediate value.</p>",
            "<b>C.</b> <p>The data path can implement arithmetic operations involving two immediate values.</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460063/gate-cse-2025-set-1-question-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Suppose a program is running on a non-pipelined single processor computer system. The computer is connected to an external device that can interrupt the processor asynchronously. The processor needs to execute the interrupt service routine (ISR) to serve this interrupt. The following steps (not necessarily in order) are taken by the processor when the interrupt arrives:\n<br><br>\n(i) The processor saves the content of the program counter.\n<br>(ii) The program counter is loaded with the start address of the ISR.\n<br>(iii) The processor finishes the present instruction.\n<br><br>\nWhich ONE of the following is the CORRECT sequence of steps? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(iii), (i), (ii)</p>",
            "<b>B.</b> <p>(i), (iii), (ii)</p>",
            "<b>C.</b> <p>(i), (ii), (iii)</p>",
            "<b>D.</b> <p>(iii), (ii), (i)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>(iii), (i), (ii)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460080/gate-cse-2025-set-1-question-1#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>A processor uses a 32-bit instruction format and supports byte-addressable memory\naccess. The ISA of the processor has 150 distinct instructions. The instructions are\nequally divided into two types, namely R-type and I-type, whose formats are shown\nbelow.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q51_81cf05b3.webp\"><br>\nIn the OPCODE, 1 bit is used to distinguish between I-type and R-type instructions\nand the remaining bits indicate the operation. The processor has 50 architectural\nregisters, and all register fields in the instructions are of equal size.<br>\nLet X be the number of bits used to encode the UNUSED field, Y be the number\nof bits used to encode the OPCODE field, and Z be the number of bits used to\nencode the immediate value/address field. The value of X + 2Y + Z is ______ <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "34",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422846/gate-cse-2024-set-2-question-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>A non-pipelined instruction execution unit operating at 2 GHz takes an average of\n6 cycles to execute an instruction of a program P. The unit is then redesigned to\noperate on a 5-stage pipeline at 2 GHz. Assume that the ideal throughput of the\npipelined unit is 1 instruction per cycle. In the execution of program P,\n20% instructions incur an average of 2 cycles stall due to data hazards and\n20% instructions incur an average of 3 cycles stall due to control hazards. The\nspeedup (rounded off to one decimal place) obtained by the pipelined design over\nthe non-pipelined design is ________ <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2.9",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422849/gate-cse-2024-set-2-question-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>A processor with 16 general purpose registers uses a 32-bit instruction format. The\ninstruction format consists of an opcode field, an addressing mode field, two register\noperand fields, and a 16-bit scalar field. If 8 addressing modes are to be supported,\nthe maximum number of unique opcodes possible for every addressing mode\nis _________ <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "32",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422850/gate-cse-2024-set-2-question-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider a disk with the following specifications: rotation speed of 6000 RPM,\naverage seek time of 5 milliseconds, 500 sectors/track, 512-byte sectors.\nA file has content stored in 3000 sectors located randomly on the disk. Assuming\naverage rotational latency, the total time (in seconds, rounded off to 2 decimal\nplaces) to read the entire file from the disk is _______ <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "29.5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422854/gate-cse-2024-set-2-question-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>An instruction format has the following structure:<br><br>\nInstruction Number: \\(Opcode \\; \\; destination reg, \\;\\; source reg-1, \\;\\;source reg-2\\)<br><br>\nConsider the following sequence of instructions to be executed in a pipelined\nprocessor:<br><br>\nI1: DIV R3, R1, R2 <br>\nI2: SUB R5, R3, R4 <br>\nI3: ADD R3, R5, R6 <br>\nI4: MUL R7, R3, R8 <br><br>\nWhich of the following statements is/are TRUE <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>There is a RAW dependency on R3 between I1 and I2</p>",
            "<b>B.</b> <p>There is a WAR dependency on R3 between I1 and I3</p>",
            "<b>C.</b> <p>There is a RAW dependency on R3 between I2 and I3</p>",
            "<b>D.</b> <p>There is a WAW dependency on R3 between I3 and I4</p>"
          ],
          "correct_answer": "<b>A.</b> <p>There is a RAW dependency on R3 between I1 and I2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422876/gate-cse-2024-set-2-question-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
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
          "id": 17,
          "question": "<p>A given program has 25% load/store instructions. Suppose the ideal CPI (cycles per\ninstruction) without any memory stalls is 2. The program exhibits 2% miss rate on\ninstruction cache and 8% miss rate on data cache. The miss penalty is 100 cycles.\nThe speedup (rounded off to two decimal places) achieved with a perfect cache (i.e.,\nwith NO data or instruction cache misses) is _________ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422796/gate-cse-2024-set-1-question-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>The baseline execution time of a program on a 2 GHz single core machine is\n100 nanoseconds (ns). The code corresponding to 90% of the execution time can be\nfully parallelized. The overhead for using an additional core is 10 ns when running\non a multicore system. Assume that all cores in the multicore system run their share\nof the parallelized code for an equal amount of time.<br>\nThe number of cores that minimize the execution time of the program is _______ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422797/gate-cse-2024-set-1-question-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>Consider a 512 GB hard disk with 32 storage surfaces. There are 4096 sectors per\ntrack and each sector holds 1024 bytes of data. The number of cylinders in the hard\ndisk is ____ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4096",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422798/gate-cse-2024-set-1-question-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
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
          "id": 21,
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
          "id": 22,
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
          "id": 23,
          "question": "<p>An 8-way set associative cache of size 64 KB (1 KB = 1024 bytes) is used in a\nsystem with 32-bit address. The address is sub-divided into TAG, INDEX, and\nBLOCK OFFSET.<br>\nThe number of bits in the TAG is ____. <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "19",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399257/gate-cse-2023-question-54#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 24,
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
          "id": 25,
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
          "id": 26,
          "question": "<p>A keyboard connected to a computer is used at a rate of 1 keystroke per second.\nThe computer system polls the keyboard every 10 ms (milli seconds) to check for\na keystroke and consumes 100 \\( \\mu s\\) (micro seconds) for each poll. If it is determined\nafter polling that a key has been pressed, the system consumes an additional 200\n\\( \\mu s\\) to process the keystroke. Let \\( T_1\\) denote the fraction of a second spent in polling\nand processing a keystroke.<br>\nIn an alternative implementation, the system uses interrupts instead of polling.\nAn interrupt is raised for every keystroke. It takes a total of 1 ms for servicing an\ninterrupt and processing a keystroke. Let  \\( T_2\\) denote the fraction of a second spent\nin servicing the interrupt and processing a keystroke.\nThe ratio \\( \\frac{T_1}{T_2}\\)\nis ______ . (Rounded off to one decimal place) <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10.2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399287/gate-cse-2023-question-24#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 27,
          "question": "<p>Consider a 3-stage pipelined processor having a delay of 10 ns (nanoseconds),\n20 ns, and 14 ns, for the first, second, and the third stages, respectively. Assume\nthat there is no other delay and the processor does not suffer from any pipeline\nhazards. Also assume that one instruction is fetched every cycle.<br>\nThe total execution time for executing 100 instructions on this processor is _______\nns <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2040",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399288/gate-cse-2023-question-23#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 28,
          "question": "<p>A processor \\(X_1\\) operating at 2 GHz has a standard 5-stage RISC instruction pipeline having a base CPI (cycles per instruction) of one without any pipeline hazards. For a given program P that has 30% branch instructions, control hazards incur 2 cycles stall for every branch. A new version of the processor \\(X_2\\) operating at same clock frequency has an additional branch predictor unit (BPU) that completely eliminates stalls for correctly predicted branches. There is neither any savings nor any additional stalls for wrong predictions. There are no structural hazards and data hazards for \\(X_1\\) and \\(X_2\\). If the BPU has a prediction accuracy of 80%, the speed up (rounded   off to   two decimal places)   obtained   by \\(X_2\\)    over   \\(X_1\\)   in executing P is <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.42",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371885/Gate-cse-2022-question-51#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 29,
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
          "id": 30,
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
        },
        {
          "id": 31,
          "question": "<p>A cache memory that has a hit rate of 0.8 has an access latency 10 ns and miss penalty 100 ns. An optimization is done on the cache to reduce the miss rate. However, the optimization results in an increase of cache access latency to 15 ns, whereas the miss penalty is not affected. The minimum hit rate (rounded off to two decimal places) needed after the optimization such that it should not increase the average memory access time is _____. <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0.85",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371913/Gate-cse-2022-question-23#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 32,
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
          "id": 33,
          "question": "<p>Which one of the following facilitates transfer of bulk data from hard disk to main memory with the highest throughput? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>DMA based I/O transfer</p>",
            "<b>B.</b> <p>Interrupt driven I/O transfer</p>",
            "<b>C.</b> <p>Polling based I/O transfer</p>",
            "<b>D.</b> <p>Programmed I/O transfer</p>"
          ],
          "correct_answer": "<b>A.</b> <p>DMA based I/O transfer</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/371929/Gate-cse-2022-question-7#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 34,
          "question": "<p>Consider a pipelined processor with 5 stages, Instruction Fetch(IF), Instruction Decode(ID), Execute (EX), Memory Access (MEM), and Write Back (WB). Each stage of the pipeline, except the EX stage, takes one cycle. Assume that the ID stage merely decodes the instruction and the register read is performed in the EX stage. The EX stage takes one cycle for ADD instruction and the register read is performed in the EX stage, The EX stage takes one cycle for ADD instruction and two cycles for MUL instruction. Ignore pipeline register latencies.<br>\nConsider the following sequence of 8 instructions:<br><br>\nADD, MUL, ADD, MUL, ADD, MUL, ADD, MUL<br><br>\nAssume that every MUL instruction is data-dependent on the ADD instruction just before it and every ADD instruction (except the first ADD) is data-dependent on the MUL instruction just before it. The speedup defined as follows.\n<br><br>\n\\(\\textit{Speedup} = \\dfrac{\\text{Execution time without operand forwarding}}{\\text{Execution time with operand forearding}}\\)\n<br><br>\nThe Speedup achieved in executing the given instruction sequence on the pipelined processor (rounded to 2 decimal places) is _____________ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.87",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357484/gate-cse-2021-set-2-question-53#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 35,
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
          "id": 36,
          "question": "<p>Consider a computer system with DMA support. The DMA module is transferring one 8-bit character in one CPU cycle from a device to memory through cycle stealing at regular intervals. Consider a 2 MHz processor. If 0.5% processor cycles are used for DMA, the data transfer rate of the device is __________ bits per second. <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "80000",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357520/gate-cse-2021-set-2-question-20#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 37,
          "question": "<p>Consider a set-associative cache of size 2KB (\\(1KB=2^{10}\\) bytes) with cache block size of 64 bytes. Assume that the cache is byte-addressable and a 32 -bit address is used for accessing the cache. If the width of the tag field is 22 bits, the associativity of the cache is ______ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357521/gate-cse-2021-set-2-question-19#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 38,
          "question": "<p>Consider the following instruction sequence where registers \\(R_1,R_2 \\text{ and }R_3\\) are general purpose and \\(MEMORY[X]\\) denotes the content at the memory location \\(X\\).<br><br>\\(\\begin{array}{llc} \\textbf{Instruction} &amp; \\textbf{Semantics} &amp; \\textbf{Instruction Size} \\text{ (bytes)} \\\\ \\hline \\text{MOV } R1, (5000) &amp; R1 \\leftarrow \\text{MEMORY}[5000] &amp; 4 \\\\ \\hline \\text{MOV } R2, (R3) &amp; R2 \\leftarrow \\text{MEMORY}[R3] &amp; 4 \\\\ \\hline \\text{ADD} R2, R1 &amp; R2 \\leftarrow R1 + R2 &amp; 2 \\\\ \\hline \\text{MOV } (R3), R2 &amp; \\text{MEMORY}[R3] \\leftarrow R2 &amp; 4 \\\\ \\hline \\text{INC } R3 &amp; R3 \\leftarrow R3+1 &amp; 2 \\\\ \\hline \\text{DEC } R1 &amp; R1 \\leftarrow R1-1 &amp; 2 \\\\ \\hline \\text{BNZ } 1004 &amp; \\text{Branch if not zero to the} &amp; 2 \\\\ &amp; \\text{given absolute address} \\\\ \\hline \\text{HALT} &amp; \\text{Stop} &amp; 1 \\\\ \\hline \\end{array}\\)<br><br>\nAssume that the content of the memory location 5000 is 10, and the content of the register \\(R_3\\) is 3000. The content of each of the memory locations from 3000 to 3020 is 50. The instruction sequence starts from the memory location 1000. All the numbers are in decimal format. Assume that the memory is byte addressable.\n<br>\nAfter the execution of the program, the content of memory location 3010 is ____________ <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "50",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357397/gate-cse-2021-set-1-question-55#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 39,
          "question": "<p>A five-stage pipeline has stage delays of 150, 120, 150, 160 and 140 nanoseconds. The registers that are used between the pipeline stages have a delay of 5 nanoseconds each.<br>The total time to execute 100 independent instructions on this pipeline, assuming there are no pipeline stalls, is _______ nanoseconds. <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "17160",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357398/gate-cse-2021-set-1-question-53#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 40,
          "question": "<p>Consider a computer system with a byte-addressable primary memory of size \\(2^{32} \\text{ bytes}\\). Assume the computer system has a direct-mapped cache of size \\(32 KB (1 KB = 2^{10}  \\text{ bytes})\\), and each cache block is of size 64 bytes.<br>\nThe size of the tag field is __________ bits. <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "17",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357429/gate-cse-2021-set-1-question-22#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 41,
          "question": "<p>One instruction tries to write an operand before it is written by previous instruction. This may lead to a dependency called <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>True dependency</p>",
            "<b>B.</b> <p>Anti-dependency</p>",
            "<b>C.</b> <p>Output dependency</p>",
            "<b>D.</b> <p>Control Hazard</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Output dependency</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331391/isro2020-49\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 42,
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
          "id": 43,
          "question": "<p>A magnetic disk has 100 cylinders, each with 10 tracks of 10 sectors. If each sector contains 128 bytes, what is the maximum capacity of the disk in kilobytes? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>12,80,000</p>",
            "<b>B.</b> <p>1280</p>",
            "<b>C.</b> <p>1250</p>",
            "<b>D.</b> <p>1,28,000</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1250</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331420/isro2020-46\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 44,
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
          "id": 45,
          "question": "<p>A computer which issues instructions in order, has only 2 registers and 3 opcodes ADD, SUB and MOV. Consider 2 different implementations of the following basic block :<br>\\(\\begin{array}{l|l} \\text { Case } 1 &amp; \\text { Case } 2 \\\\ \\hline t 1=a+b ; &amp; t 2=c+d \\\\ t 2=c+d ; &amp; t 3=e-t 2 \\\\ t 3=e-t 2 ; &amp; t 1=a+b \\\\ t 4=t 1-t 2 ; &amp; t 4=t 1-t 2 \\end{array}\\)<br>Assume that all operands are initially in memory. Final value of computation also has to reside in memory. Which one is better in terms of memory accesses and by how many MOV instructions? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Case 2, 2</p>",
            "<b>B.</b> <p>Case 2, 3</p>",
            "<b>C.</b> <p>Case 1, 2</p>",
            "<b>D.</b> <p>Case 1, 3</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Case 2, 2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331470/isro2020-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 46,
          "question": "<p>A stack organized computer is characterised by instructions with <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>indirect addressing</p>",
            "<b>B.</b> <p>direct addressing</p>",
            "<b>C.</b> <p>zero addressing</p>",
            "<b>D.</b> <p>index addressing</p>"
          ],
          "correct_answer": "<b>C.</b> <p>zero addressing</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331467/isro2020-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 47,
          "question": "<p>Consider a 32- bit processor which supports 70 instructions. Each instruction is 32 bit long and has 4 fields namely opcode, two register identifiers and an immediate operand of unsigned integer type. Maximum value of the immediate operand that can be supported by the processor is 8191. How many registers the processor has? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>32</p>",
            "<b>B.</b> <p>64</p>",
            "<b>C.</b> <p>128</p>",
            "<b>D.</b> <p>16</p>"
          ],
          "correct_answer": "<b>B.</b> <p>64</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331291/isro2020-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 48,
          "question": "<p>Consider a 5- segment pipeline with a clock cycle time 20 ns in each sub operation. Find out the approximate speed-up ratio between pipelined and non-pipelined system to execute 100 instructions. (if an average, every five cycles, a bubble due to data hazard has to be introduced in the pipeline) <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>4.03</p>",
            "<b>C.</b> <p>4.81</p>",
            "<b>D.</b> <p>4.17</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4.03</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331285/isro2020-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 49,
          "question": "<p>A non-pipelined CPU has 12 general purpose registers?(R0,R1,R2,...,R12). Following operations are supported<br><br>ADD Ra, Rb, Rr      Add Ra to Rb and store the result in Rr<br>MUL Ra, Rb, Rr      Multiply Ra to Rb and store the result in Rr<br><br>MUL  operation takes two clock cycles, ADD takes one clock cycle.<br><br>Calculate minimum number of clock cycles required to compute the value of the expression XY+XYZ+YZ. The variable X,Y,Z are initially available in registers R0,R1 and R2 and contents of these registers must not be modified. <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>6</p>",
            "<b>C.</b> <p>7</p>",
            "<b>D.</b> <p>8</p>"
          ],
          "correct_answer": "<b>B.</b> <p>6</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331437/isro2020-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 50,
          "question": "<p>An array of 2 two byte integers is stored in big endian machine in byte addresses as shown below. What will be its storage pattern in little endian machine ?<br>\\(\\begin{array}{c|c}\\text{Address}&amp; \\text{Data}\\\\\\hline0 \\times 104&amp;78\\\\0 \\times 103&amp;56\\\\0 \\times 102&amp;34\\\\0 \\times 101&amp;12\\end{array}\\) <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\begin{array}{c|c}\\text{Address}&amp; \\text{Data}\\\\\\hline0 \\times 104&amp;12\\\\0 \\times 103&amp;56\\\\0 \\times 102&amp;34\\\\0 \\times 101&amp;78\\end{array}\\)</p>",
            "<b>B.</b> <p>\\(\\begin{array}{c|c}\\text{Address}&amp; \\text{Data}\\\\\\hline0 \\times 104&amp;12\\\\0 \\times 103&amp;34\\\\0 \\times 102&amp;56\\\\0 \\times 101&amp;78\\end{array} \\\\\\)</p>",
            "<b>C.</b> <p>\\(\\begin{array}{c|c}\\text{Address}&amp; \\text{Data}\\\\\\hline0 \\times 104&amp;56\\\\0 \\times 103&amp;78\\\\0 \\times 102&amp;12\\\\0 \\times 101&amp;34\\end{array} \\\\\\)</p>",
            "<b>D.</b> <p>\\(\\begin{array}{c|c}\\text{Address}&amp; \\text{Data}\\\\\\hline0 \\times 104&amp;56\\\\0 \\times 103&amp;12\\\\0 \\times 102&amp;78\\\\0 \\times 101&amp;34\\end{array}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\begin{array}{c|c}\\text{Address}&amp; \\text{Data}\\\\\\hline0 \\times 104&amp;56\\\\0 \\times 103&amp;78\\\\0 \\times 102&amp;12\\\\0 \\times 101&amp;34\\end{array} \\\\\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331434/isro2020-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 51,
          "question": "<p>Which of the following affects the processing power assuming they do not influence each other<br>1. Data bus capability<br>2. Address scheme<br>\n3. Clock speed <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3 only</p>",
            "<b>B.</b> <p>1 and 3 only</p>",
            "<b>C.</b> <p>2 and 3 only</p>",
            "<b>D.</b> <p>1,2 and 3</p>"
          ],
          "correct_answer": "<b>D.</b> <p>1,2 and 3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331336/isro2020-3\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 52,
          "question": "<p>Statements associated with registers of a CPU are given. Identify the false statement. <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The program counter holds the memory address of the instruction in execution</p>",
            "<b>B.</b> <p>Only opcode is transferred to the control unit</p>",
            "<b>C.</b> <p>An instruction in the instruction register consists of the opcode and the operand</p>",
            "<b>D.</b> <p>The value of the program counter is incremented by 1 once its value has been read to the memory address register</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The program counter holds the memory address of the instruction in execution</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331334/isro2020-2\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 53,
          "question": "<p>The immediate addressing mode can be used for<br>1. Loading internal registers with initial values<br>\n2. Perform arithmetic or logical operation on data contained in instructions<br>Which of the following is true? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only 1</p>",
            "<b>B.</b> <p>Only 2</p>",
            "<b>C.</b> <p>Both 1 and 2</p>",
            "<b>D.</b> <p>Immediate mode refers to data in cache</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both 1 and 2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331331/isro2020-1\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 54,
          "question": "<p>A processor has 64 registers and uses 16-bit instruction format. It has two types of instructions: I-type and R-type. Each I-type instruction contains an opcode, a register name, and a 4-bit immediate value. Each R-type instruction contains an opcode and two register names. If there are 8 distinct I-type opcodes, then the maximum number of distinct R-type opcodes is _______. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "14",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333187/gate2020-cs-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 55,
          "question": "<p>Consider a non-pipelined processor operating at 2.5 GHz. It takes 5 clock cycles to complete an instruction. You are going to make a 5-stage pipeline out of this processor. Overheads associated with pipelining force you to operate the pipelined processor at 2 GHz. In a given program, assume that 30% are memory instructions, 60% are ALU instructions and the rest are branch instructions. 5% of the memory instructions cause stalls of 50 clock cycles each due to cache misses and 50% of the branch instructions cause stalls of 2 cycles each. Assume that there are no stalls associated with the execution of ALU instructions. For this program, the speedup achieved by the pipelined processor over the non-pipelined processor (round off to 2 decimal places) is________. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2.15",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333188/gate2020-cs-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 56,
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
          "id": 57,
          "question": "<p>A direct mapped cache memory of 1 MB has a block size of 256 bytes. The cache has an access time of 3 ns and a hit rate of 94%. During a cache miss, it takes 20 ns to bring the first word of a block from the main memory, while each subsequent word takes 5 ns. The word size is 64 bits. The average memory access time in ns (round off to 1 decimal place) is______. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "13.5",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "Other Answer as per GATE 2020 Answer Key : 13.3 to 13.3 or 13.5 to 13.5 <br><a href=\"https://gateoverflow.in/333210/gate2020-cs-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 58,
          "question": "<p>Consider the following data path diagram. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q4_f58f93bb.jpg\"><br> Consider an instruction: \\(R0\\leftarrow R1+R2\\). The following steps are used to execute it over the given data path. Assume that PC is incremented appropriately. The subscripts r and w indicate read and write operations, respectively. <br><br>\n\\(1. \\; R2_r,TEMP1_r,ALU_{add},TEMP2_w\\)  <br>  \\(2. \\; R1_r,TEMP1_w\\) <br> \\(3. \\; PC_r,MAR_w,MEM_r\\)  <br>\\(4. \\; TEMP2_r,R0_w\\) <br> \\(5. \\; MDR_r,IR_w\\)<br><br>\nWhich one of the following is the correct order of execution of the above steps? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2,1,4,5,3</p>",
            "<b>B.</b> <p>1,2,4,3,5</p>",
            "<b>C.</b> <p>3,5,2,1,4</p>",
            "<b>D.</b> <p>3,5,1,2,4</p>"
          ],
          "correct_answer": "<b>C.</b> <p>3,5,2,1,4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333227/gate2020-cs-4#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 59,
          "question": "<p>Consider the following statements.<br><br>\nI. Daisy chaining is used to assign priorities in attending interrupts.<br>\nII. When a device raises a vectored interrupt, the CPU does polling to identify the source of interrupt.<br>\nIII. In polling,the CPU periodically checks the status bits to know if any device needs its attention.<br>\nIV. During DMA, both the CPU and DMA controller can be bus masters at the same time.<br><br>\nWhich of the above statements is/are TRUE? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II only</p>",
            "<b>B.</b> <p>I and IV only</p>",
            "<b>C.</b> <p>I and III only</p>",
            "<b>D.</b> <p>III only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>I and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333228/gate2020-cs-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 60,
          "question": "<p>A certain processor deploys a single-level cache. The cache block size is 8 words and the word size is 4 bytes. The memory system uses a 60-MHz clock. To service a cache-miss, the memory controller first takes 1 cycle to accept the starting address of the block, it then takes 3 cycles to fetch all the eight words of the block, and finally transmits the words of the requested block at the rate of 1 word per cycle. The maximum bandwidth for the memory system when the program running on the processor issues a series of read operations is _________\\(\\times 10^6\\) bytes/sec. <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "160",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302803/gate2019-cs-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 61,
          "question": "<p>The chip select logic for a certain DRAM chip in a memory system design is shown below. Assume that the memory system has 16 address lines denoted by \\(A_{15} \\; to \\; A_0\\). What is the range of address (in hexadecimal) of the memory system that can get enabled by the chip select (CS) signal? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q2_f0302f91.jpg\"> <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>C800 to CFFF</p>",
            "<b>B.</b> <p>CA00 to CAFF</p>",
            "<b>C.</b> <p>C800 to C8FF</p>",
            "<b>D.</b> <p>DA00 to DFFF</p>"
          ],
          "correct_answer": "<b>A.</b> <p>C800 to CFFF</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/302846/gate2019-cs-2#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 62,
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
          "id": 63,
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
          "id": 64,
          "question": "<p>A particular parallel program computation requires 100 sec when executed on a single processor, if 40% of this computation is inherently sequential (i.e. will not benefit from additional processors), then theoretically best possible elapsed times of this program running with 2 and 4 processors, respectively, are: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>20 sec and 10 sec</p>",
            "<b>B.</b> <p>30 sec and 15 sec</p>",
            "<b>C.</b> <p>50 sec and 25 sec</p>",
            "<b>D.</b> <p>70 sec and 55 sec</p>"
          ],
          "correct_answer": "<b>D.</b> <p>70 sec and 55 sec</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213517/isro2018-71\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 65,
          "question": "<p>Of the following, which best characterizes computers that use memory-mapped I/O? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The computer provides special instructions for manipulating I/O ports</p>",
            "<b>B.</b> <p>I/O ports are placed at addresses on the bus and are accessed just like other memory locations</p>",
            "<b>C.</b> <p>To perform I/O operations. it is sufficient to place the data in an address register and call channel to perform the operation</p>",
            "<b>D.</b> <p>I/O can be performed only when memory management hardware is turned on</p>"
          ],
          "correct_answer": "<b>B.</b> <p>I/O ports are placed at addresses on the bus and are accessed just like other memory locations</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213523/isro2018-65\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 66,
          "question": "<p>A particular disk unit uses a bit string to record the occupancy or vacancy of its tracks, with 0 denoting vacant and 1 for occupied. A 32-bit segment of this string has hexadecimal value D4FE2003. The percentage of occupied tracks for the corresponding part of the disk, to the nearest percentage is: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>12</p>",
            "<b>B.</b> <p>25</p>",
            "<b>C.</b> <p>38</p>",
            "<b>D.</b> <p>44</p>"
          ],
          "correct_answer": "<b>D.</b> <p>44</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213538/isro2018-50\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 67,
          "question": "<p>Micro program is: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the name of a source program in micro computers</p>",
            "<b>B.</b> <p>set of microinstructions that defines the individual operations in response to a machine-language instruction</p>",
            "<b>C.</b> <p>a primitive form of macros used in assembly language programming</p>",
            "<b>D.</b> <p>a very small segment of machine code</p>"
          ],
          "correct_answer": "<b>B.</b> <p>set of microinstructions that defines the individual operations in response to a machine-language instruction</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213554/isro2018-34\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 68,
          "question": "<p>A byte addressable computer has a memory capacity of \\(2^{m} K B(k \\text { bytes })\\) and can perform \\(2^{n}\\) operations. An instruction involving 3 operands and one operator needs maximum of: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3m bits</p>",
            "<b>B.</b> <p>3m+n bits</p>",
            "<b>C.</b> <p>m+n bits</p>",
            "<b>D.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>none of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213557/isro2018-31\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 69,
          "question": "<p>A data driven machine is one that executes an instruction if the needed data is available. The physical ordering of the code listing does not dictate the course of execution. Consider the following pseudo-code:<br><br>A. Multiply E by 0.5 to get F<br>B. Add A and B to get E<br>\nC. Add B with 0.5 to get D<br>\nD. Add E and F to get G<br>\nE. Add A with 10.5 to get C<br><br>Assume A,B,C are already assigned values and the desired output is G. Which of the following sequence of execution is valid? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>B, C, D, A, E</p>",
            "<b>B.</b> <p>C, B, E, A, D</p>",
            "<b>C.</b> <p>A, B, C, D, E</p>",
            "<b>D.</b> <p>E, D, C, B, A</p>"
          ],
          "correct_answer": "<b>B.</b> <p>C, B, E, A, D</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213582/isro2018-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 70,
          "question": "<p>A processor has 16 integer registers (R0, R1,...,R15) and 64 floating point registers (F0, F1,...,F63). It uses a 2-byte instruction format. There are four categories of instructions: Type-1, Type-2, Type-3, and Type-4. Type-1 category consists of four instructions, each with 3 integer register operands (3Rs). Type-2 category consists of eight instructions, each with 2 floating point register operands (2Fs). Type-3 category consists of fourteen instructions, each with one integer register operand and one floating point register operand (1R+1F). Type-4 category consists of N instructions, each with a floating point register operand (1F). <br>\nThe maximum value of N is __________. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "32",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204126/gate2018-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 71,
          "question": "<p>The instruction pipeline of a RISC processor has the following stages: Instruction Fetch (IF), Instruction Decode (ID), Operand Fetch (OF), Perform Operation (PO) and Writeback (WB). The IF, ID, OF and WB stages take 1 clock cycle each for every instruction. Consider a sequence of 100 instructions. In the PO stage, 40 instructions take 3 clock cycles each, 35 instructions take 2 clock cycles each, and the remaining 25 instructions take 1 clock cycle each. Assume that there are no data hazards and no control hazards. <br>The number of clock cycles required for completion of execution of the sequence of instructions is ______. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "219",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204125/gate2018-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 72,
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
          "id": 73,
          "question": "<p>A 32-bit wide main memory unit with a capacity of 1 GB is built using 256M x 4-bit DRAM chips. The number of rows of memory cells in the DRAM chip is \\(2^{14}\\). The time taken to perform one refresh operation is 50 nanoseconds. The refresh period is 2 milliseconds. The percentage (rounded to the closest integer) of the time available for performing the memory read/write operations in the main memory unit is __________. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "59",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204097/gate2018-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 74,
          "question": "<p>The following are some events that occur after a device controller issues an interrupt while process L is under execution.  <br>(P) The processor pushes the process status of L onto the control stack.<br>\n(Q) The processor finishes the execution of the current instruction.\n<br>\n(R) The processor executes the interrupt service routine.\n<br>\n(S) The processor pops the process status of L from the control stack.\n<br>\n(T) The processor loads the new PC value based on the interrupt.\n<br> Which one of the following is the correct order in which the events above occur? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>QPTRS</p>",
            "<b>B.</b> <p>PTRSQ</p>",
            "<b>C.</b> <p>TRPQS</p>",
            "<b>D.</b> <p>QTPRS</p>"
          ],
          "correct_answer": "<b>A.</b> <p>QPTRS</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/204083/gate2018-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 75,
          "question": "<p>Consider the following processor design characteristics.<br> I. Register-to-register arithmetic operations only<br>\nII. Fixed-length instruction format <br>\nIII. Hardwired control unit <br>Which of the characteristics above are used in the design of a RISC processor? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II only</p>",
            "<b>B.</b> <p>II and III only</p>",
            "<b>C.</b> <p>I and III only</p>",
            "<b>D.</b> <p>I, II and III</p>"
          ],
          "correct_answer": "<b>D.</b> <p>I, II and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/204079/gate2018-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 76,
          "question": "<p>SATA is the abbreviation of <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Serial Advanced Technology Attachment</p>",
            "<b>B.</b> <p>Serial Advanced Technology Architecture</p>",
            "<b>C.</b> <p>Serial Advanced Technology Adapter</p>",
            "<b>D.</b> <p>Serial Advanced Technology Array</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Serial Advanced Technology Attachment</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128688/isro2017-46\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 77,
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
          "id": 78,
          "question": "<p>Which interrupt in 8085 Microprocessor is unmaskable? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>RST 5.5</p>",
            "<b>B.</b> <p>RST 7.5</p>",
            "<b>C.</b> <p>TRAP</p>",
            "<b>D.</b> <p>Both (A) and (B)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>TRAP</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128631/isro2017-20\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 79,
          "question": "<p>The most appropriate matching for the following pairs:<br>\\(\\begin{array}{|l|l|l|l|} \\hline \\text{X.} &amp; \\text{Indirect Addressing} &amp; i. &amp; \\text{Loop} \\\\ \\hline \\text{Y.} &amp; \\text{Immediate Addressing} &amp; ii. &amp; \\text{Pointers} \\\\ \\hline \\text{Z.} &amp; \\text{Auto Decrement Addressing} &amp; iii. &amp; \\text{Constants} \\\\ \\hline \\end{array}\\) <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>X-iii, Y-ii, Z-i</p>",
            "<b>B.</b> <p>X-ii, Y-iii, Z-i</p>",
            "<b>C.</b> <p>X-iii, Y-i, Z-ii</p>",
            "<b>D.</b> <p>X-ii, Y-i, Z-iii</p>"
          ],
          "correct_answer": "<b>B.</b> <p>X-ii, Y-iii, Z-i</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128630/isro2017-19\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 80,
          "question": "<p>How many 128x8 bit RAMs are required to design 32Kx32 bit RAM? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>512</p>",
            "<b>B.</b> <p>1024</p>",
            "<b>C.</b> <p>128</p>",
            "<b>D.</b> <p>32</p>"
          ],
          "correct_answer": "<b>B.</b> <p>1024</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128487/isro2017-18\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 81,
          "question": "<p>Consider a machine with a byte addressable main memory of \\(2^{32}\\) bytes divided into blocks of size 32 bytes. Assume that a direct mapped cache having 512 cache lines is used with this machine. The size of the tag field in bits is ______. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "18",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118613/gate2017-2-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 82,
          "question": "<p>The read access times and the hit ratios for different caches in a memory hierarchy are as\ngiven below. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q45_877a44e0.jpg\"> <br> The read access time of main memory is 90 nanoseconds. Assume that the caches use the referred word-first read policy and the write back policy. Assume that all the caches are direct mapped caches. Assume that the dirty bit is always 0 for all the blocks in the caches. In execution of a program, 60% of memory reads are for instruction fetch and 40% are for memory operand fetch. The average read access time in nanoseconds (up to 2 decimal places) is______. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4.72",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118597/gate2017-2-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 83,
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
          "id": 84,
          "question": "<p>A cache memory unit with capacity of N words and block size of B words is to be designed.\nIf it is designed as a direct mapped cache, the length of the TAG field is 10 bits. If the cache\nunit is now designed as a 16-way set-associative cache, the length of the TAG field is\n______bits. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "14",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118748/gate2017-1-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 85,
          "question": "<p>Consider a 2-way set associative cache with 256 blocks and uses LRU replacement, Initially\nthe cache is empty. Conflict misses are those misses which occur due the contention of\nmultiple blocks for the same cache set. Compulsory misses occur due to first time access to\nthe block. The following sequence of accesses to memory blocks. <br><br>\n(0,128,256,128,0,128,256,128,1,129,257,129,1,129,257,129)<br><br>\nis repeated 10 times. The number of conflict misses experienced by the cache is ___________. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "76",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118745/gate2017-1-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 86,
          "question": "<p>Instructions execution in a processor is divided into 5 stages. Instruction Fetch (IF),\nInstruction Decode (ID) , Operand Fetch (OF), Execute (EX), and Write Back (WB), These\nstages take 5,4,20, 10 and 3 nanoseconds (ns) respectively. A pipelined implementation of\nthe processor requires buffering between each pair of consecutive stages with a delay of 2ns. <br>\nTwo pipelined implementations of the processor are contemplated.<br><br>\n(i) a naive pipeline implementation (NP) with 5 stages and <br>\n(ii) an efficient pipeline (EP) where the OF stage id divided into stages OF1 and OF2\nwith execution times of 12 ns and 8 ns respectively. <br><br>\nThe speedup (correct to two decimals places) achieved by EP over NP in executing 20\nindependent instructions with no hazards is ________________. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.49",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118719/gate2017-1-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 87,
          "question": "<p>Consider a RISC machine where each instruction is exactly 4 bytes long. Conditional and\nunconditional branch instructions use PC- relative addressing mode with Offset specified in\nbytes to the target location of the branch instruction. Further the Offset is always with respect\nto the address of the next instruction in the program sequence. Consider the following\ninstruction sequence.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q28_d9c8664a.jpg\"><br>\nIf the target of the branch instruction is i, then the decimal value of the Offset is __________ <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "-16",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118332/gate2017-1-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 88,
          "question": "<p>Consider a two-level cache hierarchy with L1 and L2 caches. An application incurs 1.4\nmemory accesses per instruction on average. For this application, the miss rate of L1 cache 0.1, the L2 cache experiences, on average, 7 misses per 1000 instructions. The miss rate of L2 expressed correct to two decimal places is ___________. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0.05",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118305/gate2017-1-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 89,
          "question": "<p>Consider the C struct defined below:<pre><code>struct data {\nint marks [100] ;\nchar grade;\nint cnumber;\n};\nstruct data student;</code></pre>The base address of student is available in register R1. The field student.grade can be\naccessed efficiently using <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Post-increment addressing mode. (R1)+</p>",
            "<b>B.</b> <p>Pre-decrement addressing mode, -(R1)</p>",
            "<b>C.</b> <p>Register direct addressing mode, R1</p>",
            "<b>D.</b> <p>Index addressing mode, X(R1), where X is an offset represented in 2's complement 16-bit representation</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Index addressing mode, X(R1), where X is an offset represented in 2's complement 16-bit representation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118291/gate2017-1-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 90,
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
          "id": 91,
          "question": "<p>Relative mode of addressing is most relevant to writing: <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Co - routines</p>",
            "<b>B.</b> <p>Position - independent code</p>",
            "<b>C.</b> <p>Shareable code</p>",
            "<b>D.</b> <p>Interrupt Handlers</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Position - independent code</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2720/gate1996-1-16-isro2016-42\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 92,
          "question": "<p>In which class of Flynn's taxanomy, Von Neumann architecture belongs to? <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>SISD</p>",
            "<b>B.</b> <p>SIMD</p>",
            "<b>C.</b> <p>MIMD</p>",
            "<b>D.</b> <p>MISD</p>"
          ],
          "correct_answer": "<b>A.</b> <p>SISD</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55479/isro2016-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 93,
          "question": "<p>Register renaming is done in pipelined processors: <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>as an alternative to register allocation at compile time</p>",
            "<b>B.</b> <p>for efficient access to function parameters and local variables</p>",
            "<b>C.</b> <p>to handle certain kinds of hazards</p>",
            "<b>D.</b> <p>as part of address translation</p>"
          ],
          "correct_answer": "<b>C.</b> <p>to handle certain kinds of hazards</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52/gate2012-20-isro2016-23\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 94,
          "question": "<p>Consider a disk pack with 16 surfaces, 128 tracks per surface and 256 sectors per track. 512 bytes of data are stored in a bit serial manner in a sector. The capacity of the disk pack and the number of bits required to specify a particular sector in the disk are respectively: <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>256  Mbyte, 19 bits</p>",
            "<b>B.</b> <p>256 Mbyte, 28 bits</p>",
            "<b>C.</b> <p>512 Mbyte, 20 bits</p>",
            "<b>D.</b> <p>64 Gbyte, 28 bits</p>"
          ],
          "correct_answer": "<b>A.</b> <p>256  Mbyte, 19 bits</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1209/gate2007-11-isro2009-36-isro2016-21\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 95,
          "question": "<p>Consider a non-pipelined processor with a clock rate of 2.5 gigahertz and average cycles per instruction of four. The same processor is upgraded to a pipelined processor with five stages; but due to the internal pipeline delay, the clock speed is reduced to 2 gigahertz. Assume that there are no stalls in the pipeline. The speedup achieved in this pipelined processor is <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3.2</p>",
            "<b>B.</b> <p>\\(3.0\\)</p>",
            "<b>C.</b> <p>2.2</p>",
            "<b>D.</b> <p>\\(2.0\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>3.2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55465/isro2016-19\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 96,
          "question": "<p>The dynamic hazard problem occurs in <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>combinational circuit alone</p>",
            "<b>B.</b> <p>sequential circuit only</p>",
            "<b>C.</b> <p>Both (A) and (B)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both (A) and (B)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55543/isro2016-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 97,
          "question": "<p>A file system uses an in-memory cache to cache disk blocks.The miss rate of the cache is shown in the figure. The latency to read a block from the cache is 1 ms and to read a block from the disk is 10ms. Assume that the cost of checking whether a block exists in the cache is negligible. Available cache sizes are in multiples of 10MB. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q50_ff9c459d.jpg\"> <br>The smallest cache size required to ensure an average read latency of less than 6ms is_________\nMB. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "30",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39592/gate2016-2-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 98,
          "question": "<p>Consider a 3GHz (gigahertz) processor with a three-stage pipeline and stage latencies \\(\\tau _{1}\\), \\(\\tau _{2}\\), and \\(\\tau _{3}\\) such that \\(\\tau _{1}=3\\tau _{2}/4=2\\tau _{3}\\). If the longest pipeline stage is split into two pipeline stages of equal latency, the new frequency is _____GHz, ignoring delays in the pipeline registers. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3.9",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39580/gate2016-2-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 99,
          "question": "<p>The width of the physical address on a machine is 40 bits. The width of the tag field in a 512KB 8-way set associative cache is ________ bits. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "24",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39622/gate2016-2-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 100,
          "question": "<p>Consider a processor with 64 registers  and an instruction set of size twelve. Each instruction has five distinct fields, namely, opcode, two source register identifiers, one destination register identifier, and a twelve-bit immediate value. Each instruction must be stored in memory in  byte-aligned fashion. If a program has 100 instructions, the amount of memory(in bytes) consumed by the program text is _____ . <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "500",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39601/gate2016-2-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 101,
          "question": "<p>Suppose the functions F and G can be computed in 5 and 3 nano seconds by functional units \\(U_{F}\\) and \\(U_{G}\\), respectively. Given two instances of \\(U_{F}\\) and two instances of \\(U_{G}\\), it is required to implement the computation \\(F(G(X_{i}))\\) for \\(1\\leq i\\leq 10\\). Ignoring all other delays, the minimum time required to complete this computation is ________ nanoseconds. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "28",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39627/gate-cse-2016-set-2-question-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 102,
          "question": "<p>A processor has 40 distinct instructions and 24 general purpose registers. A 32-bit instruction word has an opcode, two register operands and an immediate operand. The number of bits available for the immediate operand field is _______ . <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "16",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39547/gate2016-2-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 103,
          "question": "<p>The stage delays in a 4-stage pipeline are 800,500,400 and 300 picoseconds.The first stage (with delay 800 picoseconds)is replaced with a functionally equivalent design involving two stages with respective delays 600 and 350 picoseconds.The throughput increase of the pipeline is ________ percent. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "33",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39691/gate2016-1-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 104,
          "question": "<p>The size of the data count register of a DMA controller is 16 bits.The processor needs to transfer a file of 29,154 kilobytes from disk to main memory.The memory is byte addressable. The minimum number of times the DMA control lerneeds to get the control of the systembus from the processor to transfer the file from the disk to main memory is ____. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "456",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39698/gate2016-1-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 105,
          "question": "<p>In X=(M+NxO)/(PxQ), how many one-address instructions are required to evaluate it? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>6</p>",
            "<b>C.</b> <p>8</p>",
            "<b>D.</b> <p>10</p>"
          ],
          "correct_answer": "<b>C.</b> <p>8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/37956/isro2015-77\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 106,
          "question": "<p>The minimum time delay between the initiation of two independent memory operations is called <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Access time</p>",
            "<b>B.</b> <p>Cycle time</p>",
            "<b>C.</b> <p>Rotational time</p>",
            "<b>D.</b> <p>Latency time</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Cycle time</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/19446/isro2015-62\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 107,
          "question": "<p>The contents of the flag register after execution of the following program by 8085 microprocessor will be<br><br>Program<br> SUB A<br>\nMVI B,(01)H<br>\nDCR B<br>\nHLT<br> <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((54)_{H}\\)</p>",
            "<b>B.</b> <p>\\((00)_{H}\\)</p>",
            "<b>C.</b> <p>\\((01)_{H}\\)</p>",
            "<b>D.</b> <p>\\((45)_{H}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\((54)_{H}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/46026/isro2015-61\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 108,
          "question": "<p>A hard disk system has the following parameters :<br>Number of tracks =500<br>Number of sectors/track =100<br>Number of bytes /sector =500<br>Time taken by the head to move from one track to adjacent track =1 ms<br>Rotation speed =600 rpm.<br>What is the average time taken for transferring 250 bytes from the disk ? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>300.5 ms</p>",
            "<b>B.</b> <p>255.5 ms</p>",
            "<b>C.</b> <p>255 ms</p>",
            "<b>D.</b> <p>300 ms</p>"
          ],
          "correct_answer": "<b>D.</b> <p>300 ms</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3479/gate2007-it-44-isro2015-34\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 109,
          "question": "<p>Six files F1, F2, F3, F4, F5 and F6 have 100, 200, 50, 80, 120, 150 records respectively. In what order should they be stored so as to optimize act. Assume each file is accessed with the same frequency <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>F3, F4, F1, F5, F6, F2</p>",
            "<b>B.</b> <p>F2, F6, F5, F1, F4, F3</p>",
            "<b>C.</b> <p>F1, F2, F3, F4, F5, F6</p>",
            "<b>D.</b> <p>Ordering is immaterial as all files are accessed with the same frequency.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>F3, F4, F1, F5, F6, F2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/37207/isro2015-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 110,
          "question": "<p>How many 32K x 1 RAM chips are needed to provide a memory capacity of 256K-bytes? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8</p>",
            "<b>B.</b> <p>32</p>",
            "<b>C.</b> <p>64</p>",
            "<b>D.</b> <p>128</p>"
          ],
          "correct_answer": "<b>C.</b> <p>64</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1299/gate2009-7-isro2015-3\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 111,
          "question": "<p>Consider the following code sequence having five instructions I1 to I5. Each of these instructions has the following format. <br><br>OP Ri, Rj, Rk <br><br>where operation OP is performed on contents of registers Rj and Rk and the result is stored in register Ri. <br><br>\nI1: ADD R1, R2, R3  <br>\nI2: MUL R7, R1, R3 <br>\nI3: SUB R4, R1, R5 <br>\nI4: ADD R3, R2, R4 <br>\nI5: MUL R7, R8, R9 <br><br> Consider the following three statements. <br>\nS1: There is an anti-dependence between instructions l2 and l5 <br>\nS2: There is an anti-dependence between instructions l2 and l4  <br>                              S3: Within an instruction pipeline an anti-dependence always creates one or more stalls <br><br> Which one of above statements is/are correct? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only S1 is true</p>",
            "<b>B.</b> <p>Only S2 is true</p>",
            "<b>C.</b> <p>Only S1 and S3 are true</p>",
            "<b>D.</b> <p>Only S2 and S3 are true</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Only S2 is true</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8556/gate2015-3-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 112,
          "question": "<p>Consider the following reservation table for a pipeline having three stages S1,S2 and S3.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q38_2b8ca31a.jpg\"><br> The minimum average latency (MAL) is ________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8560/gate2015-3-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 113,
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
          "id": 114,
          "question": "<p>Consider a processor with byte-addressable memory. Assume that all registers, including Program Counter (PC) and Program Status Word (PSW), are of size 2 bytes. A stack in the main memory is implemented from memory location \\((0100)_{16}\\) and it grows upward. The stack pointer (SP) points to the top element of the stack. The current value of SP is \\((016E)_{16}\\). The CALL instruction is of two words, the first word is the op-code and the second word is the starting address of the subroutine (one word = 2 bytes). The CALL instruction is implemented as follows: <br><br>\nStore the current value of PC in the stack <br>\nStore the value of PSW register in the stack <br>\nLoad the starting address of the subroutine in PC <br><br>\nThe content of PC just before the fetch of a CALL instruction is \\((5FA0)_{16}\\).  After execution of the CALL instruction, the value of the stack pointer is <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((016A)_{16}\\)</p>",
            "<b>B.</b> <p>\\((016C)_{16}\\)</p>",
            "<b>C.</b> <p>\\((0170)_{16}\\)</p>",
            "<b>D.</b> <p>\\((0172)_{16}\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\((0172)_{16}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8215/gate2015-2-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 115,
          "question": "<p>Consider the sequence of machine instructions given below:<br>\nMUL R5, R0, R1  <br>\nDIV R6, R2, R3 <br>\nADD R7, R5, R6 <br>\nSUB R8, R7, R4 <br>\nIn the above sequence, R0 to R8 are general purpose registers. In the instructions shown, the first register stores the result of the operation performed on the second and the third registers. This sequence of instructions is to be executed in a pipelined instruction processor with the following 4 stages: (1) Instruction Fetch and Decode (IF), (2) Operand Fetch (OF), (3) Perform Operation (PO) and (4) Write back the result (WB). The IF, OF and WB stages take 1 clock cycle each for any instruction. The PO stage takes 1 clock cycle for ADD or SUB instruction, 3 clock cycles for MUL instruction and 5 clock cycles for DIV instruction. The pipelined processor uses operand forwarding from the PO stage to the OF stage. <br><br>The number of clock cycles taken for the execution of the above sequence of instructions is ___________. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "13",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8218/gate2015-2-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 116,
          "question": "<p>Consider a typical disk that rotates at 15000 rotations per minute (RPM) and has a transfer rate of 50x\\(10^{6}\\)  bytes/sec. If the average seek time of the disk is twice the average rotational delay and the controller's transfer time is 10 times the disk transfer time, the average time (in milliseconds) to read or write a 512-byte sector of the disk is ______. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6.1",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8251/gate2015-2-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 117,
          "question": "<p>Assume that for a certain processor, a read request takes 50 nanoseconds on a cache miss and 5 nanoseconds on a cache hit. Suppose while running a program, it was observed that 80% of the processor's read requests result in a cache hit. The average read access time in nanoseconds is __________. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "14",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8119/gate2015-2-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 118,
          "question": "<p>Consider a non-pipelined processor with a clock rate of 2.5 gigahertz and average cycles per instruction of four. The same processor is upgraded to a pipelined processor with five stages; but due to the internal pipeline delay, the clock speed is reduced to 2 gigahertz. Assume that there are no stalls in the pipeline. The speed up achieved in this pipelined processor is_________. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3.2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8288/gate2015-1-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 119,
          "question": "<p>Consider a disk pack with a seek time of 4 milliseconds and rotational speed of 10000 rotations per minute (RPM). It has 600 sectors per track and each sector can store 512 bytes of data. Consider a file stored in the disk. The file contains 2000 sectors. Assume that every sector access necessitates a seek, and the average rotational latency for accessing each sector is half of the time for one complete rotation. The total time (in milliseconds) needed to read the entire file is ____________. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "14020",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8354/gate2015-1-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 120,
          "question": "<p>For computers based on three-address instruction formats, each address field can be used to specify which of the following: <br>(S1) A memory operand <br>(S2) A processor register <br>(S3) An implied accumulator register <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Either S1 or S2</p>",
            "<b>B.</b> <p>Either S2 or S3</p>",
            "<b>C.</b> <p>Only S2 and S3</p>",
            "<b>D.</b> <p>All of S1, S2 and S3</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Either S1 or S2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8096/gate2015-1-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 121,
          "question": "<p>Assume that 16-bit CPU is trying to access a double word stating at an odd address. How many memory operations are required to access the data? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>4</p>"
          ],
          "correct_answer": "<b>C.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52438/isro2014-40\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 122,
          "question": "<p>Suppose you want to build a memory with 4 byte words and a capacity of \\(2^{21}\\) bits. What is type of decoder required if the memory is built using \\(2K \\times 8\\) RAM chips? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5 to 32</p>",
            "<b>B.</b> <p>6 to 64</p>",
            "<b>C.</b> <p>4 to 16</p>",
            "<b>D.</b> <p>7 to 128</p>"
          ],
          "correct_answer": "<b>A.</b> <p>5 to 32</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/15028/isro2014-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 123,
          "question": "<p>If each address space represents one byte of storage space, how many address lines are needed to access RAM chips arranged in a \\(4 \\times 6\\) array, where each chip is \\(8K \\times 4\\) bits ? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>13</p>",
            "<b>B.</b> <p>15</p>",
            "<b>C.</b> <p>16</p>",
            "<b>D.</b> <p>17</p>"
          ],
          "correct_answer": "<b>D.</b> <p>17</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/15027/isro2014-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 124,
          "question": "<p>The memory access time is 1 nanosecond for a read operation with a hit in cache, 5\nnanoseconds for a read operation with a miss in cache, 2 nanoseconds for a write operation\nwith a hit in cache and 10 nanoseconds for a write operation with a miss in cache. Execution\nof a sequence of instructions involves 100 instruction fetch operations, 60 memory operand\nread operations and 40 memory operand write operations. The cache hit-ratio is 0.9. The\naverage memory access time (in nanoseconds) in executing the sequence of instructions is\n__________. <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.68",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2078/gate2014-3-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 125,
          "question": "<p>An instruction pipeline has five stages, namely, instruction fetch (IF), instruction decode and register fetch (ID/RF), instruction execution (Ex), memory access (MEM), and register write back (WB) with stage latencies 1 ns, 2.2 ns, 2 ns, 1 ns, and 0.75 ns, respectively (ns stands for nanoseconds). To gain in terms of frequency, the designers have decided to split the ID/RF stage into three stages (ID, RF1, RF2) each of latency 2.2/3 ns. Also, the Ex stage is split into two stages (Ex1, Ex2) each of latency 1 ns. The new design has a total of eight pipeline stages. A program has 20% branch instructions which execute in the Ex stage and produce the next instruction pointer at the end of the Ex stage in the old design and at the end of the Ex2 stage in the new design. The IF stage stalls after fetching a branch instruction until the next instruction pointer is computed. All instructions other than the branch instruction have an average CPI of one in both the designs. The execution times of this program on the old and the new design are P and Q nanoseconds, respectively. The value of P/Q is __________ <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2077/gate2014-3-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 126,
          "question": "<p>Consider the following processors (ns stands for nanoseconds).\nAssume that the pipeline registers have zero latency. <br>\nP1:  Four-stage pipeline with stage latencies 1 ns, 2 ns, 2 ns, 1 ns. <br>\nP2:  Four-stage pipeline with stage latencies 1 ns, 1.5 ns, 1.5 ns, 1.5 ns. <br>\nP3:  Five-stage pipeline with stage latencies 0.5 ns, 1 ns, 1 ns, 0.6 ns, 1 ns. <br>\nP4:  Five-stage pipeline with stage latencies 0.5 ns, 0.5 ns, 1 ns, 1 ns, 1.1 ns. <br>\nWhich processor has the highest peak clock frequency? <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P1</p>",
            "<b>B.</b> <p>P2</p>",
            "<b>C.</b> <p>P3</p>",
            "<b>D.</b> <p>P4</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2043/gate2014-3-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 127,
          "question": "<p>Consider a main memory system that consists of 8 memory modules attached to the system\nbus, which is one word wide. When a write request is made, the bus is occupied for 100\nnanoseconds (ns) by the data, address, and control signals. During the same 100 ns, and for\n500 ns thereafter, the addressed memory module executes one cycle accepting and storing the data. The (internal) operation of different memory modules may overlap in time, but only one request can be on the bus at any time. The maximum number of stores (of one word each) that can be initiated in 1 millisecond is ____________ <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10000",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2022/gate2014-2-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 128,
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
          "id": 129,
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
          "id": 130,
          "question": "<p>A 4-way set-associative cache memory unit with a capacity of 16 KB is built using a block\nsize of 8 words. The word length is 32 bits. The size of the physical address space is 4 GB.\nThe number of bits for the TAG field is _____ <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "20",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1963/gate2014-2-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 131,
          "question": "<p>Consider two processors P1 and P2 executing the same instruction set. Assume that under\nidentical conditions, for the same input, a program running on P2 takes 25% less time but\nincurs 20% more CPI (clock cycles per instruction) as compared to the program running on\nP1. If the clock frequency of P1 is 1GHz, then the clock frequency of P2 (in GHz) is _________. <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.6",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1935/gate2014-1-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 132,
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
          "id": 133,
          "question": "<p>Consider a 6-stage instruction pipeline, where all stages are perfectly balanced. Assume that\nthere is no cycle-time overhead of pipelining. When an application is executing on this 6-stage pipeline, the speedup achieved with respect to non-pipelined execution if 25% of the instructions incur 2 pipeline stall cycles is _________. <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1921/gate2014-1-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 134,
          "question": "<p>A machine has a 32-bit architecture, with 1-word long instructions. It has 64 registers, each of  which is 32 bits long. It needs to support 45 instructions, which have an immediate operand in addition to two register operands. Assuming that the immediate operand is an unsigned integer, the maximum value of the immediate operand is ____________. <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "16383",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1767/gate2014-1-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 135,
          "question": "<p>In case of a DVD, the speed of data transfer is mentioned in multiples of? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>150 KB/s</p>",
            "<b>B.</b> <p>1.38 MB/s</p>",
            "<b>C.</b> <p>300 KB/s</p>",
            "<b>D.</b> <p>2.40 MB/s</p>"
          ],
          "correct_answer": "<b>B.</b> <p>1.38 MB/s</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44397/isro-2013-51\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 136,
          "question": "<p>In 8085 microprocessor, the ISR for handling trap interrupt is at which location? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3CH</p>",
            "<b>B.</b> <p>34H</p>",
            "<b>C.</b> <p>74H</p>",
            "<b>D.</b> <p>24H</p>"
          ],
          "correct_answer": "<b>D.</b> <p>24H</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43971/isro-2013-36\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 137,
          "question": "<p>How many number of times the instruction sequence below will loop before coming out of the loop?<br>\nMOV AL, 00H<br>\nA1:  INC AL<br>\nJNZ A1 <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>255</p>",
            "<b>C.</b> <p>256</p>",
            "<b>D.</b> <p>Will not come out of the loop.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>256</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43970/isro-2013-35\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 138,
          "question": "<p>In 8086, the jump condition for the instruction JNBE is? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>CF = 0 or ZF = 0</p>",
            "<b>B.</b> <p>ZF = 0 and SF = 1</p>",
            "<b>C.</b> <p>CF = 0 and ZF = 0</p>",
            "<b>D.</b> <p>CF = 0</p>"
          ],
          "correct_answer": "<b>C.</b> <p>CF = 0 and ZF = 0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43969/isro-2013-34\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 139,
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
          "id": 140,
          "question": "<p>A pipeline P operating at 400 MHz has a speedup factor of 6 and operating at 70% efficiency. How many stages are there in the pipeline? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>6</p>",
            "<b>C.</b> <p>8</p>",
            "<b>D.</b> <p>9</p>"
          ],
          "correct_answer": "<b>D.</b> <p>9</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43806/isro-2013-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 141,
          "question": "<p>A processor is fetching instructions at the rate of 1 MIPS. A DMA module is used to transfer characters to RAM from a device transmitting at 9600 bps. How much time will the processor be slowed down due to DMA activity? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>9.6ms</p>",
            "<b>B.</b> <p>4.8ms</p>",
            "<b>C.</b> <p>2.4ms</p>",
            "<b>D.</b> <p>1.2ms</p>"
          ],
          "correct_answer": "<b>D.</b> <p>1.2ms</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43805/isro-2013-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 142,
          "question": "<p>A RAM chip has a capacity of 1024 words of 8 bits each (1K x 8). The number of 2 x 4 decoders\nwith enable line needed to construct a 16K x 16 RAM from 1K x 8 RAM is <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>6</p>",
            "<b>D.</b> <p>7</p>"
          ],
          "correct_answer": "<b>B.</b> <p>5</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1555/gate2013-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 143,
          "question": "<p>Consider an instruction pipeline with five stages without any branch prediction: Fetch Instruction\n(FI), Decode Instruction (DI), Fetch Operand (FO), Execute Instruction (EI) and Write Operand\n(WO). The stage delays for FI, DI, FO, EI and WO are 5 ns, 7 ns, 10 ns, 8 ns and 6 ns, respectively.\nThere are intermediate storage buffers after each stage and the delay of each buffer is 1 ns. A\nprogram consisting of 12 instructions I1, I2, I3,..., I12 is executed in this pipelined processor.\nInstruction I4 is the only branch instruction and its branch target is I9. If the branch is taken during\nthe execution of this program, the time (in ns) needed to complete the program is <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>132</p>",
            "<b>B.</b> <p>165</p>",
            "<b>C.</b> <p>176</p>",
            "<b>D.</b> <p>328</p>"
          ],
          "correct_answer": "<b>B.</b> <p>165</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/330/gate2013-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 144,
          "question": "<p>Consider a hard disk with 16 recording surfaces (0-15) having 16384 cylinders (0-16383) and each\ncylinder contains 64 sectors (0-63). Data storage capacity in each sector is 512 bytes. Data are\norganized cylinder-wise and the addressing format is (cylinder no., surface no., sector no.). A file\nof size 42797 KB is stored in the disk and the starting disk location of the file is (1200, 9, 40).\nWhat is the cylinder number of the last sector of the file, if it is stored in a contiguous manner? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1281</p>",
            "<b>B.</b> <p>1282</p>",
            "<b>C.</b> <p>1283</p>",
            "<b>D.</b> <p>1284</p>"
          ],
          "correct_answer": "<b>D.</b> <p>1284</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1540/gate2013-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 145,
          "question": "<p>Consider the following sequence of micro-operations. <br>\nMBR \\(\\leftarrow\\) PC <br>\nMAR \\(\\leftarrow\\) X <br>\nPC \\(\\leftarrow\\) Y <br>\nMemory \\(\\leftarrow\\) MBR  <br>\nWhich one of the following is a possible operation performed by this sequence? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Instruction fetch</p>",
            "<b>B.</b> <p>Operand fetch</p>",
            "<b>C.</b> <p>Conditional branch</p>",
            "<b>D.</b> <p>Initiation of interrupt service</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Initiation of interrupt service</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1539/gate2013-28#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 146,
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
          "id": 147,
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
          "id": 148,
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
          "id": 149,
          "question": "<p>Register renaming is done in pipelined processors <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>as an alternative to register allocation at compile time</p>",
            "<b>B.</b> <p>for efficient access to function parameters and local variables</p>",
            "<b>C.</b> <p>to handle certain kinds of hazards</p>",
            "<b>D.</b> <p>as part of address translation</p>"
          ],
          "correct_answer": "<b>C.</b> <p>to handle certain kinds of hazards</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52/gate2012-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 150,
          "question": "<p>The amount of ROM needed to implement a 4 bit multiplier is <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>64 bits</p>",
            "<b>B.</b> <p>128 bits</p>",
            "<b>C.</b> <p>1 Kbits</p>",
            "<b>D.</b> <p>2 Kbits</p>"
          ],
          "correct_answer": "<b>D.</b> <p>2 Kbits</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51/gate2012-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 151,
          "question": "<p>In DMA transfer scheme, the transfer scheme other than burst mode is <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>cycle technique</p>",
            "<b>B.</b> <p>stealing technique</p>",
            "<b>C.</b> <p>cycle stealing technique</p>",
            "<b>D.</b> <p>cycle bypass technique</p>"
          ],
          "correct_answer": "<b>C.</b> <p>cycle stealing technique</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52824/isro2011-58\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 152,
          "question": "<p>Number of chips (\\(128 \\times 8\\) RAM) needed to provide a memory capacity of 2048 bytes <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>8</p>",
            "<b>D.</b> <p>16</p>"
          ],
          "correct_answer": "<b>D.</b> <p>16</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52817/isro2011-54\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 153,
          "question": "<p>Which RAID level gives block level striping with double distributed parity? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>RAID 10</p>",
            "<b>B.</b> <p>RAID 2</p>",
            "<b>C.</b> <p>RAID 6</p>",
            "<b>D.</b> <p>RAID 5</p>"
          ],
          "correct_answer": "<b>C.</b> <p>RAID 6</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52586/isro2011-46\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 154,
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
          "id": 155,
          "question": "<p>If a microcomputer operates at 5 MHz with an 8-bit bus and a newer version operates at 20 MHz with a 32-bit bus, the maximum speed-up possible approximately will be <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>8</p>",
            "<b>D.</b> <p>16</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18090/isro2011-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 156,
          "question": "<p>Two control signals in microprocessor which are related to Direct Memory Access (DMA) are <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>INTR &amp; INTA</p>",
            "<b>B.</b> <p>RD &amp; WR</p>",
            "<b>C.</b> <p>S0 &amp; S1</p>",
            "<b>D.</b> <p>HOLD &amp; HLDA</p>"
          ],
          "correct_answer": "<b>D.</b> <p>HOLD &amp; HLDA</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52487/isro2011-39\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 157,
          "question": "<p>A fast wide SCSI-II disk drive spins at 7200 RPM, has a sector size of 512 bytes, and holds 160 sectors per track. Estimate the sustained transfer rate of this drive <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>576000 Kilobytes / sec</p>",
            "<b>B.</b> <p>9600 Kilobytes / sec</p>",
            "<b>C.</b> <p>4800 Kilobytes / sec</p>",
            "<b>D.</b> <p>19200 Kilobytes / sec</p>"
          ],
          "correct_answer": "<b>B.</b> <p>9600 Kilobytes / sec</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52486/isro2011-38\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 158,
          "question": "<p>Find the memory address of the next instruction executed by the microprocessor (8086), when operated in real mode for CS=1000 and IP=E000 <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10E00</p>",
            "<b>B.</b> <p>1E000</p>",
            "<b>C.</b> <p>F000</p>",
            "<b>D.</b> <p>1000E</p>"
          ],
          "correct_answer": "<b>B.</b> <p>1E000</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52485/isro2011-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 159,
          "question": "<p>A processor takes 12 cycles to complete an instruction I. The corresponding pipelined processor uses 6 stages with the execution times of 3,2,5,4,6 and 2 cycles respectively. What is the asymptotic speedup assuming that a very large number of instructions are to be executed? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1.83</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3437/gate2007-it-6-isro2011-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 160,
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
          "id": 161,
          "question": "<p>MOV [BX], AL  type of data addressing is called ? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>register</p>",
            "<b>B.</b> <p>immediate</p>",
            "<b>C.</b> <p>register indirect</p>",
            "<b>D.</b> <p>register relative</p>"
          ],
          "correct_answer": "<b>C.</b> <p>register indirect</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/19326/isro2011-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 162,
          "question": "<p>An application loads 100 libraries at startup. Loading each library requires exactly\none disk access. The seek time of the disk to a random location is given as 10ms.\nRotational speed of disk is 6000rpm. If all 100 libraries are loaded from random\nlocations on the disk, how long does it take to load all libraries? (The time to\ntransfer data from the disk block once the head has been positioned at the start\nof the block may be neglected) <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0.5s</p>",
            "<b>B.</b> <p>1.5s</p>",
            "<b>C.</b> <p>1.25s</p>",
            "<b>D.</b> <p>1s</p>"
          ],
          "correct_answer": "<b>B.</b> <p>1.5s</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2146/gate2011-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 163,
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
          "id": 164,
          "question": "<p>Consider an instruction pipeline with four stages (S1, S2, S3 and S4) each with\ncombinational circuit only. The pipeline registers are required between each stage\nand at the end of the last stage. Delays for the stages and for the pipeline\nregisters are as given in the figure. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q30_eec15aeb.jpg\"> What is the approximate speed up of the pipeline in steady state under ideal conditions when compared to the corresponding non-pipeline implementation? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>2.5</p>",
            "<b>C.</b> <p>1.1</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2.5</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2143/gate2011-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 165,
          "question": "<p>On a non-pipelined sequential processor, a program segment, which is a part of\nthe interrupt service routine, is given to transfer 500 bytes from an I/O device to\nmemory. <br><br>\nInitialize the address register <br>\nInitialize the count to 500 <br>\nLOOP: Load a byte from device <br>\nStore in memory at address given by address register <br>\nIncrement the address register <br>\nDecrement the count <br>\nIf count != 0 go to LOOP <br><br>\nAssume that each statement in this program is equivalent to a machine\ninstruction which takes one clock cycle to execute if it is a non-load/store\ninstruction. The load-store instructions take two clock cycles to execute. <br><br>\nThe designer of the system also has an alternate approach of using the DMA\ncontroller to implement the same transfer. The DMA controller requires 20 clock\ncycles for initialization and other overheads. Each DMA transfer cycle takes two clock cycles to transfer one byte of data from the device to the memory. <br><br>\nWhat is the approximate speedup when the DMA controller based design is used\nin place of the interrupt driven program based input-output? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3.4</p>",
            "<b>B.</b> <p>4.4</p>",
            "<b>C.</b> <p>5.1</p>",
            "<b>D.</b> <p>6.7</p>"
          ],
          "correct_answer": "<b>A.</b> <p>3.4</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2130/gate2011-28#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 166,
          "question": "<p>Consider a hypothetical processor with an instruction of type LW R1, 20(R2),\nwhich during execution reads a 32-bit word from memory and stores it in a 32-bit\nregister R1. The effective address of the memory location is obtained by the\naddition of constant 20 and the contents of register R2. Which of the following\nbest reflects the Addressing Modes implemented by this instruction for the\noperand in memory? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Immediate Addressing</p>",
            "<b>B.</b> <p>Register Addressing</p>",
            "<b>C.</b> <p>Register Indirect Scaled Addressing</p>",
            "<b>D.</b> <p>Base Indexed Addressing</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Base Indexed Addressing</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2123/gate2011-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 167,
          "question": "<p>A computer handles several interrupt sources of which the following are relevant for this question. <br><br>\nInterrupt from CPU temperature sensor  (raises interrupt if CPU temperature is too high)<br>\nInterrupt from Mouse      (raises Interrupt if the mouse is moved or a button is pressed)           <br>                                                                                              Interrupt from Keyboard  (raises Interrupt if a key is pressed or released)<br>\nInterrupt from Hard Disk  (raises Interrupt when a disk read is completed)<br><br>Which one of these will be handled at the HIGHEST priority? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Interrupt from Hard Disk</p>",
            "<b>B.</b> <p>Interrupt from Mouse</p>",
            "<b>C.</b> <p>Interrupt from Keyboard</p>",
            "<b>D.</b> <p>Interrupt from CPU temp sensor</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Interrupt from CPU temp sensor</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2113/gate2011-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 168,
          "question": "<p>A computer system has an L1 cache, an L2 cache, and a main memory unit\nconnected as shown below. The block size in L1 cache is 4 words. The block size\nin L2 cache is 16 words. The memory access times are 2 nanoseconds.\n20 nanoseconds and 200 nanoseconds for L1 cache, L2 cache and main memory\nunit respectively. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q48_06dbca39.jpg\"><br>When there is a miss in both L1 cache and L2 cache, first a block is transferred\nfrom main memory to L2 cache, and then a block is transferred from L2 cache to\nL1 cache. What is the total time taken for these transfers? <br><br><strong>(GATE CSE 2010)</strong></p>",
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
          "id": 169,
          "question": "<p>A computer system has an L1 cache, an L2 cache, and a main memory unit\nconnected as shown below. The block size in L1 cache is 4 words. The block size\nin L2 cache is 16 words. The memory access times are 2 nanoseconds.\n20 nanoseconds and 200 nanoseconds for L1 cache, L2 cache and main memory\nunit respectively. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q48_06dbca39.jpg\"><br> When there is a miss in L1 cache and a hit in L2 cache, a block is transferred\nfrom L2 cache to L1 cache. What is the time taken for this transfer? <br><br><strong>(GATE CSE 2010)</strong></p>",
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
          "id": 170,
          "question": "<p>A 5-stage pipelined processor has Instruction Fetch (IF), Instruction Decode (ID),\nOperand Fetch (OF), Perform Operation (PO) and Write Operand (WO) stages.\nThe IF, ID, OF and WO stages take 1 clock cycle each for any instruction. The PO\nstage takes 1 clock cycle for ADD and SUB instructions, 3 clock cycles for MUL\ninstruction, and 6 clock cycles for DIV instruction respectively. Operand\nforwarding is used in the pipeline. What is the number of clock cycles needed to\nexecute the following sequence of instructions?\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q33_b6d0f7e6.jpg\"> <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>13</p>",
            "<b>B.</b> <p>15</p>",
            "<b>C.</b> <p>17</p>",
            "<b>D.</b> <p>19</p>"
          ],
          "correct_answer": "<b>B.</b> <p>15</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2207/gate2010-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 171,
          "question": "<p>A main memory unit with a capacity of 4 megabytes is built using 1Mx1-bit\nDRAM chips. Each DRAM chip has 1K rows of cells with 1K cells in each row. The\ntime taken for a single refresh operation is 100 nanoseconds. The time required\nto perform one refresh operation on all the cells in the memory unit is <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>100 nanoseconds</p>",
            "<b>B.</b> <p>100 *\\(2^{10}\\) nanoseconds</p>",
            "<b>C.</b> <p>100*\\(2^{20}\\) nanoseconds</p>",
            "<b>D.</b> <p>3200*\\(2^{20}\\) nanoseconds</p>"
          ],
          "correct_answer": "<b>B.</b> <p>100 *\\(2^{10}\\) nanoseconds</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2178/gate2010-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 172,
          "question": "<p>Which of the following is/are true of the auto-increment addressing mode?<br>\nI. It is useful in creating self-relocating code<br>\nII. If it is included in an Instruction Set Architecture, then an additional ALU is required for effective address calculation<br>\nIII. The amount of increment depends on the size of the data item accessed <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>III only</p>",
            "<b>D.</b> <p>II and III only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/444/gate2008-33-isro2009-80\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 173,
          "question": "<p>Compared to CISC processors,RISC processors contain <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>More register and smaller instruction set</p>",
            "<b>B.</b> <p>larger instruction set</p>",
            "<b>C.</b> <p>less registers and smaller instruction set</p>",
            "<b>D.</b> <p>more transistor elements</p>"
          ],
          "correct_answer": "<b>A.</b> <p>More register and smaller instruction set</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18580/isro2009-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 174,
          "question": "<p>On receiving an interrupt from an I/O device,the CPU <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Halts for a predetermined time</p>",
            "<b>B.</b> <p>Branches off to the interrupt service routine after completion of the current instruction</p>",
            "<b>C.</b> <p>Branches off to the interrupt service routine immediately</p>",
            "<b>D.</b> <p>Hands over control of address bus and data bus to the interrupting device</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Branches off to the interrupt service routine after completion of the current instruction</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18581/isro2009-78\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 175,
          "question": "<p>Which of the following statements about relative addressing mode is FALSE? <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It enables reduced instruction size</p>",
            "<b>B.</b> <p>It allows indexing of array element with same instruction</p>",
            "<b>C.</b> <p>It enables easy relocation of data</p>",
            "<b>D.</b> <p>It enables faster address calculation than absolute addressing</p>"
          ],
          "correct_answer": "<b>D.</b> <p>It enables faster address calculation than absolute addressing</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3578/gate2006-it-39-isro2009-42\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 176,
          "question": "<p>A processor that has carry, overflow and sign flag bits as part of its program status word (PSW) performs addition of the following two 2's complement numbers 01001101 and 11101001. After the execution of this addition operation, the status of the carry, overflow and sign flags, respectively will be <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1, 1, 0</p>",
            "<b>B.</b> <p>1, 0, 0</p>",
            "<b>C.</b> <p>0, 1, 0</p>",
            "<b>D.</b> <p>1, 0, 1</p>"
          ],
          "correct_answer": "<b>B.</b> <p>1, 0, 0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/48064/isro2009-39-gate2008-it_15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 177,
          "question": "<p>The use of multiple register windows with overlap causes a reduction in the number of memory accesses for:<br>\nI.   Function locals and parameters<br>\nII.  Register saves and restores<br>\nIII. Instruction fetches <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>III only</p>",
            "<b>D.</b> <p>I, II and III</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/448/gate2008-37-isro2009-38\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 178,
          "question": "<p>Consider a pipelined processor with the following four stages:<br>\nIF: Instruction Fetch<br>\nID: Instruction Decode and Operand Fetch<br>\nEX: Execute<br>\nWB: Write Back<br>\nThe IF, ID and WB stages take one clock cycle each to complete the operation. The number of clock cycles for the EX stage depends on the instruction. The ADD and SUB instructions need 1 clock cycle and the MUL instruction needs 3 clock cycles in the EX stage. Operand forwarding is used in the pipelined processor. What is the number of clock cycles taken to complete the following sequence of instructions?<br>\n\\(\\begin{array}{lllll} \\textbf{ADD} &amp; \\text{R2, R1, R0} &amp;&amp;&amp; \\text{R2 $\\leftarrow$ R1+R0} \\\\ \\textbf{MUL} &amp; \\text{R4, R3, R2} &amp;&amp;&amp; \\text{R4 $\\leftarrow$ R3*R2} \\\\ \\textbf{SUB} &amp; \\text{R6, R5, R4} &amp;&amp;&amp; \\text{R6 $\\leftarrow$ R5-R4} \\\\ \\end{array}\\) <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>7</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>10</p>",
            "<b>D.</b> <p>14</p>"
          ],
          "correct_answer": "<b>B.</b> <p>8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1235/gate2007-37-isro2009-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 179,
          "question": "<p>Consider a disk pack with 16 surfaces, 128 tracks per surface and 256 sectors per track. 512 bytes of data are stores in a bit serial manner in a sector. The capacity of the disk pack and the number of bits required to specify a particular sector in the disk are respectively <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>256 Mbyte, 19 bits</p>",
            "<b>B.</b> <p>256 Mbute, 28 bits</p>",
            "<b>C.</b> <p>512 Mbyte, 20 bits</p>",
            "<b>D.</b> <p>64 Gbyte, 28 bits</p>"
          ],
          "correct_answer": "<b>A.</b> <p>256 Mbyte, 19 bits</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/48058/isro2009-36\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 180,
          "question": "<p>A CPU has 24-bit instructions. A program starts at address 300 (in decimal). Which one of the following is a legal program counter (all values in decimal)? <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>400</p>",
            "<b>B.</b> <p>500</p>",
            "<b>C.</b> <p>600</p>",
            "<b>D.</b> <p>700</p>"
          ],
          "correct_answer": "<b>C.</b> <p>600</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/888/gate2006-09-isro2009-35\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 181,
          "question": "<p>The microinstructions stored in the control memory of a processor have a width of 26 bits. Each microinstruction is divided into three fields. a micro operation field of 13 bits, a next address field (X), and a MUX select field (Y). There are 8 status bits in the inputs of the MUX. How many bits are there in the X and Y fields, and what is the size of the control memory in number of words? <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10, 3, 1024</p>",
            "<b>B.</b> <p>8, 5, 256</p>",
            "<b>C.</b> <p>5, 8, 2048</p>",
            "<b>D.</b> <p>10, 3, 512</p>"
          ],
          "correct_answer": "<b>A.</b> <p>10, 3, 1024</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/48055/isro2009-34\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 182,
          "question": "<p>The process of organizing the memory into two banks to allow 8-and 16-bit data operation is called <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Bank switching</p>",
            "<b>B.</b> <p>Indexed mapping</p>",
            "<b>C.</b> <p>Two-way memory interleaving</p>",
            "<b>D.</b> <p>Memory segmentation</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Two-way memory interleaving</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/48046/isro2009-23\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 183,
          "question": "<p>A certain microprocessor requires 4.5 microseconds to respond to an interrupt. Assuming that the three interrupts\\(I_1\\), \\(I_2\\) and \\(I_3\\) require the following execution time after the interrupt is recognized:<br>\nI.   \\(I_1\\) requires 25 microseconds<br>\nII.  \\(I_2\\) requires 35 microseconds<br>\nIII. \\(I_3\\) requires 20 microseconds<br>\n\\(I_1\\) has the highest priority and \\(I_3\\) has the lowest. What is the possible range of time for \\(I_3\\) to be executed assuming that it may or may not occur simultaneously with other interrupts? <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>24.5 microseconds to 39.5 microseconds</p>",
            "<b>B.</b> <p>24.5 microseconds to 93.5 microseconds</p>",
            "<b>C.</b> <p>4.5 microseconds to 24.5 microseconds</p>",
            "<b>D.</b> <p>29.5 microseconds 93.5 microseconds</p>"
          ],
          "correct_answer": "<b>B.</b> <p>24.5 microseconds to 93.5 microseconds</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/48044/isro2009-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 184,
          "question": "<p>In which addressing mode, the effectives address of the operand is generated by adding a constant value to the content of a register? <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Absolute mode</p>",
            "<b>B.</b> <p>Indirect mode</p>",
            "<b>C.</b> <p>Immediate mode</p>",
            "<b>D.</b> <p>Index mode</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Index mode</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/48041/isro2009-21-ugcnet-dec2012-ii-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 185,
          "question": "<p>Which of the following statements about synchronous and asynchronous I/O is NOT true? <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An ISR is invoked on completion of I/O in synchronous I/O but not in asynchronous I/O</p>",
            "<b>B.</b> <p>In both synchronous and asynchronous I/O, an ISR (Interrupt Service Routine) is invoked after completion of the I/O</p>",
            "<b>C.</b> <p>A process making a synchronous I/O call waits until I/O is complete, but a process making an asynchronous I/O call does not wait for completion of the I/O</p>",
            "<b>D.</b> <p>In the case of synchronous I/O, the process waiting for the completion of I/O is woken up by the ISR that is invoked after the completion of I/O</p>"
          ],
          "correct_answer": "<b>B.</b> <p>In both synchronous and asynchronous I/O, an ISR (Interrupt Service Routine) is invoked after completion of the I/O</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/487/gate2008-64-isro2009-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 186,
          "question": "<p>A hard disk has 63 sectors per track, 10 platters each with 2 recording surfaces\nand 1000 cylinders. The address of a sector is given as a triple (c,h,s), where c is the cylinder number, h is the surface number and s is the sector number. Thus, the \\(0^{th}\\) sector is addressed as (0,0,0), the \\(1^{st}\\) sector as (0,0,1), and so on <br><br>The address of the \\(1039^{th}\\) sector is <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(0,15,31)</p>",
            "<b>B.</b> <p>(0,16,30)</p>",
            "<b>C.</b> <p>(0,16,31)</p>",
            "<b>D.</b> <p>(0,17,31)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>(0,16,31)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43477/gate2009-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 187,
          "question": "<p>A hard disk has 63 sectors per track, 10 platters each with 2 recording surfaces\nand 1000 cylinders. The address of a sector is given as a triple (c,h,s), where c is the cylinder number, h is the surface number and s is the sector number. Thus, the \\(0^{th}\\) sector is addressed as (0,0,0), the \\(1^{st}\\) sector as (0,0,1), and so on <br><br> The address (400, 16, 29) corresponds to sector number: <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>505035</p>",
            "<b>B.</b> <p>505036</p>",
            "<b>C.</b> <p>505037</p>",
            "<b>D.</b> <p>505038</p>"
          ],
          "correct_answer": "<b>C.</b> <p>505037</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1337/gate2009-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 188,
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
          "id": 189,
          "question": "<p>Consider a 4 stage pipeline processor. The number of cycles needed by the four\ninstructions I1, I2, I3, I4 in stages S1, S2, S3, S4 is shown below:  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q28_52a82c1b.jpg\"><br> What is the number of cycles needed to execute the following loop? <br> For (i=1 to 2) {I1; I2; I3; I4;} <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>16</p>",
            "<b>B.</b> <p>23</p>",
            "<b>C.</b> <p>28</p>",
            "<b>D.</b> <p>30</p>"
          ],
          "correct_answer": "<b>B.</b> <p>23</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1314/gate2009-28#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 190,
          "question": "<p>A CPU generally handles an interrupt by executing an interrupt service routine <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>As soon as an interrupt is raised</p>",
            "<b>B.</b> <p>By checking the interrupt register at the end of fetch cycle.</p>",
            "<b>C.</b> <p>By checking the interrupt register after finishing the execution of the current instruction.</p>",
            "<b>D.</b> <p>By checking the interrupt register at fixed time intervals.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>By checking the interrupt register after finishing the execution of the current instruction.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1300/gate2009-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 191,
          "question": "<p>How many 32K x 1 RAM chips are needed to provide a memory capacity of 256Kbytes? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8</p>",
            "<b>B.</b> <p>32</p>",
            "<b>C.</b> <p>64</p>",
            "<b>D.</b> <p>128</p>"
          ],
          "correct_answer": "<b>C.</b> <p>64</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1299/gate2009-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 192,
          "question": "<p>Which of the following is an example of spooled device? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A line printer used to print the output of a number of jobs</p>",
            "<b>B.</b> <p>A terminal used to enter input data to a running program</p>",
            "<b>C.</b> <p>A secondary storage device in a virtual memory system</p>",
            "<b>D.</b> <p>A graphic display device</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A line printer used to print the output of a number of jobs</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2724/gate1996-1-20-isro2008-56\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 193,
          "question": "<p>The Memory Address Register <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>is a hardware memory device which denotes the location of the current instruction being executed.</p>",
            "<b>B.</b> <p>is a group of electrical ckt, that performs the intent of instructions fetched from memory</p>",
            "<b>C.</b> <p>contains the address of the memory location that is to be read from or stored into</p>",
            "<b>D.</b> <p>contains a copy of the designated memory location specified by the MAR after a \"read\" or the new contents of the memory prior to a \"write\"</p>"
          ],
          "correct_answer": "<b>C.</b> <p>contains the address of the memory location that is to be read from or stored into</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49998/isro2008-55\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 194,
          "question": "<p>The total time to prepare a disk drive mechanism for a block of data to be read from it is <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>seek time</p>",
            "<b>B.</b> <p>latency</p>",
            "<b>C.</b> <p>latency plus seek time</p>",
            "<b>D.</b> <p>transmission time</p>"
          ],
          "correct_answer": "<b>C.</b> <p>latency plus seek time</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17263/isro2008-49\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 195,
          "question": "<p>Raid configurations of the disks are used to provide <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Fault-tolerance</p>",
            "<b>B.</b> <p>High speed</p>",
            "<b>C.</b> <p>High data density</p>",
            "<b>D.</b> <p>(A) &amp; (B)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>(A) &amp; (B)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1496/gate1999-2-18-isro2008-46\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 196,
          "question": "<p>The TRAP is one of the interrupts available in INTEL 8085. Which one of the following statements is true of TRAP ? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>it is level triggered</p>",
            "<b>B.</b> <p>it is negative edge triggered</p>",
            "<b>C.</b> <p>it is +ve edge triggered</p>",
            "<b>D.</b> <p>it is both +ve and -ve edges triggered</p>"
          ],
          "correct_answer": "<b>D.</b> <p>it is both +ve and -ve edges triggered</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/47657/isro2008-45\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 197,
          "question": "<p>The device which is used to connect a peripheral to bus is known as <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>control register</p>",
            "<b>B.</b> <p>interface</p>",
            "<b>C.</b> <p>communication protocol</p>",
            "<b>D.</b> <p>none of these</p>"
          ],
          "correct_answer": "<b>B.</b> <p>interface</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49974/isro2008-44\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 198,
          "question": "<p>Which of the following architecture is/are not suitable for realising SIMD? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Vector processor</p>",
            "<b>B.</b> <p>Array processor</p>",
            "<b>C.</b> <p>Von Neumann</p>",
            "<b>D.</b> <p>All of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Von Neumann</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49969/isro2008-42\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 199,
          "question": "<p>Consider the following Assembly language program<br>\nMVIA\t30 H<br>\nACI\t30 H<br>\nXRA\tA<br>\nPOP\tH<br>\nAfter the execution of the above program, the contents of the accumulator will be <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>30 H</p>",
            "<b>B.</b> <p>60 H</p>",
            "<b>C.</b> <p>00 H</p>",
            "<b>D.</b> <p>contents of stack</p>"
          ],
          "correct_answer": "<b>C.</b> <p>00 H</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49921/isro2008-39\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 200,
          "question": "<p>The ability to temporarily halt the CPU and use this time to send information on buses is called <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>direct memory access</p>",
            "<b>B.</b> <p>vectoring the interrupt</p>",
            "<b>C.</b> <p>polling</p>",
            "<b>D.</b> <p>cycle stealing</p>"
          ],
          "correct_answer": "<b>D.</b> <p>cycle stealing</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49919/isro2008-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 201,
          "question": "<p>An interrupt in which the external device supplies its address as well as the interrupt requests is known as <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>vectored interrupt</p>",
            "<b>B.</b> <p>maskable interrupt</p>",
            "<b>C.</b> <p>non maskable interrupt</p>",
            "<b>D.</b> <p>designated interrupt</p>"
          ],
          "correct_answer": "<b>A.</b> <p>vectored interrupt</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49917/isro2008-36\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 202,
          "question": "<p>The performance of a pipelined processor suffers if: <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the pipeline stages have different delays</p>",
            "<b>B.</b> <p>consecutive instructions are dependent on each other</p>",
            "<b>C.</b> <p>the pipeline stages share hardware resources</p>",
            "<b>D.</b> <p>All of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/836/gate2002-2-6-isro2008-19\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 203,
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
          "id": 204,
          "question": "<p>The address space of 8086 CPU is <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>one Megabyte</p>",
            "<b>B.</b> <p>256 Kilobytes</p>",
            "<b>C.</b> <p>1 K Megabytes</p>",
            "<b>D.</b> <p>64 Kilobytes</p>"
          ],
          "correct_answer": "<b>A.</b> <p>one Megabyte</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1682/gate1998-2-10-isro2008-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 205,
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
          "id": 206,
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
          "id": 207,
          "question": "<p>A non pipelined single cycle processor operating at 100 MHz is converted into a synchronous pipelined processor with five stages requiring 2.5 nsec, 1.5 nsec, 2 nsec, 1.5 nsec and 2.5 nsec, respectively. The delay of the latches is 0.5 nsec. The speedup of the pipeline processor for a large number of instructions is: <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4.5</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>3.33</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>C.</b> <p>3.33</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3350/gate2008-it-40\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 208,
          "question": "<p>Consider a CPU where all the instructions require 7 clock cycles to complete execution. There are 140 instructions in the instruction set. It is found that 125 control signals are needed to be generated by the control unit. While designing the horizontal microprogrammed control unit, single address field format is used for branch control logic. What is the minimum size of the control word and control address register? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>125, 7</p>",
            "<b>B.</b> <p>125, 10</p>",
            "<b>C.</b> <p>135, 9</p>",
            "<b>D.</b> <p>135, 10</p>"
          ],
          "correct_answer": "<b>D.</b> <p>135, 10</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3349/gate2008-it-39\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 209,
          "question": "<p>Assume that EA = (X)+ is the effective address equal to the contents of location X, with X incremented by one word length after the effective address is calculated; EA = -(X) is the effective address equal to the contents of location X, with X decremented by one word length before the effective address is calculated; EA = (X)- is the effective address equal to the contents of location X, with X decremented by one word length after the effective address is calculated. The format of the instruction is (opcode, source, destination), which means (destination \\(\\longleftarrow\\) source op destination). Using X as a stack pointer, which of the following instructions can pop the top two elements from the stack, perform the addition operation and push the result back to the stack. <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>ADD (X)-, (X)</p>",
            "<b>B.</b> <p>ADD (X), (X)-</p>",
            "<b>C.</b> <p>ADD -(X), (X)+</p>",
            "<b>D.</b> <p>ADD -(X), (X)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>ADD (X)-, (X)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3348/gate2008-it-38\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 210,
          "question": "<p>A processor that has the carry, overflow and sign flag bits as part of its program status word (PSW) performs addition of the following two 2's complement numbers 01001101 and 11101001. After the execution of this addition operation, the status of the carry, overflow and sign flags, respectively will be: <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1, 1, 0</p>",
            "<b>B.</b> <p>1, 0, 0</p>",
            "<b>C.</b> <p>0, 1, 0</p>",
            "<b>D.</b> <p>1, 0, 1</p>"
          ],
          "correct_answer": "<b>B.</b> <p>1, 0, 0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3275/gate2008-it-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 211,
          "question": "<p>Delayed branching can help in the handling of control hazards <br><br> The following code is to run on a pipelined processor with one branch delay slot: <br> I1: ADD \\(\\leftarrow\\)R2  R7 +R8 <br>\nI2 : SUB R4 \\(\\leftarrow\\)R5 - R6 <br>\nI3: ADD R1 \\(\\leftarrow\\) R2 + R3 <br>\nI4 : STORE Memory [R4] \\(\\leftarrow\\) R1 <br>\nBRANCH to Label if R1==0 <br> <br>Which of the instructions I1, I2, I3 or I4 can legitimately occupy the delay slot without any other program modification? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I1</p>",
            "<b>B.</b> <p>I2</p>",
            "<b>C.</b> <p>I3</p>",
            "<b>D.</b> <p>I4</p>"
          ],
          "correct_answer": "<b>D.</b> <p>I4</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43487/gate2008-77#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 212,
          "question": "<p>Delayed branching can help in the handling of control hazards <br><br> For all delayed conditional branch instructions, irrespective of whether the condition evaluates to true or false <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The instruction following the conditional branch instruction in memory is executed</p>",
            "<b>B.</b> <p>The first instruction in the fall through path is executed</p>",
            "<b>C.</b> <p>The first instruction in the taken path is executed</p>",
            "<b>D.</b> <p>The branch takes longer to execute than any other instruction</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The instruction following the conditional branch instruction in memory is executed</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/496/gate2008-76#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 213,
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
          "id": 214,
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
          "id": 215,
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
          "id": 216,
          "question": "<p>Which of the following statements about synchronous and asynchronous I/O is\nNOT true? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An ISR is invoked on completion of I/O in synchronous I/O but not in\nasynchronous I/O</p>",
            "<b>B.</b> <p>In both synchronous and asynchronous I/O, an ISR (Interrupt Service\nRoutine) is invoked after completion of the I/O</p>",
            "<b>C.</b> <p>A process making a synchronous I/O call waits until I/O is complete, but a process making an asynchronous I/O call does not wait for completion of the I/O</p>",
            "<b>D.</b> <p>In the case of synchronous I/O, the process waiting for the completion of I/O\nis woken up by the ISR that is invoked after the completion of I/O</p>"
          ],
          "correct_answer": "<b>B.</b> <p>In both synchronous and asynchronous I/O, an ISR (Interrupt Service\nRoutine) is invoked after completion of the I/O</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/487/gate2008-64#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 217,
          "question": "<p>In an instruction execution pipeline, the earliest that the data TLB (Translation\nLookaside Buffer) can be accessed is <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Before effective address calculation has started</p>",
            "<b>B.</b> <p>During effective address calculation</p>",
            "<b>C.</b> <p>After effective address calculation has completed</p>",
            "<b>D.</b> <p>After data cache lookup has completed</p>"
          ],
          "correct_answer": "<b>C.</b> <p>After effective address calculation has completed</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/449/gate2008-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 218,
          "question": "<p>The use of multiple register windows with overlap causes a reduction in the\nnumber of memory accesses for<br><br>\nI. Function locals and parameters<br>\nII. Register saves and restores<br>\nIII. Instruction fetches <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>III only</p>",
            "<b>D.</b> <p>I, II and III</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/448/gate2008-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 219,
          "question": "<p>Which of the following are NOT true in a pipelined processor?<br><br>\nI. Bypassing can handle all RAW hazards<br>\nII. Register renaming can eliminate all register carried WAR hazards <br>\nIII. Control hazard penalties can be eliminated by dynamic branch prediction <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II only</p>",
            "<b>B.</b> <p>I and III only</p>",
            "<b>C.</b> <p>II and III only</p>",
            "<b>D.</b> <p>I, II and III</p>"
          ],
          "correct_answer": "<b>B.</b> <p>I and III only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/447/gate2008-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 220,
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
          "id": 221,
          "question": "<p>Which of the following must be true for the RFE (Return From Exception)\ninstruction on a general purpose processor? <br><br>\nI. It must be a trap instruction<br>\nII. It must be a privileged instruction<br>\nIII. An exception cannot be allowed to occur during execution of an RFE instruction <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>I and II only</p>",
            "<b>D.</b> <p>I, II and III only</p>"
          ],
          "correct_answer": "<b>D.</b> <p>I, II and III only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/445/gate2008-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 222,
          "question": "<p>Which of the following is/are true of the auto-increment Addressing Modes?<br>\nI. It is useful in creating self-relocating code <br><br>\nII. If it is included in an Instruction Set Architecture, then an additional ALU is\nrequired for effective address calculation <br>\nIII. The amount of increment depends on the size of the data item accessed <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>III only</p>",
            "<b>D.</b> <p>II and III only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>III only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/444/gate2008-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 223,
          "question": "<p>For a magnetic disk with concentric circular tracks, the seek latency is not linearly\nproportional to the seek distance due to <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>non-uniform distribution of requests</p>",
            "<b>B.</b> <p>arm starting and stopping inertia</p>",
            "<b>C.</b> <p>higher capacity of tracks on the periphery of the platter</p>",
            "<b>D.</b> <p>use of unfair arm scheduling policies</p>"
          ],
          "correct_answer": "<b>B.</b> <p>arm starting and stopping inertia</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/443/gate2008-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 224,
          "question": "<p>Which of the following RAID level provides the highest Data Transfer Rate (Read/Write) <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>RAID 1</p>",
            "<b>B.</b> <p>RAID 3</p>",
            "<b>C.</b> <p>RAID 4</p>",
            "<b>D.</b> <p>RAID 5</p>"
          ],
          "correct_answer": "<b>A.</b> <p>RAID 1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49539/isro2007-56\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 225,
          "question": "<p>In the Big-Endian system, the computer stores <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>MSB of data in the lowest memory address of data unit</p>",
            "<b>B.</b> <p>LSB of data in the lowest memory address of data unit</p>",
            "<b>C.</b> <p>MSB of data in the highest memory address of data unit</p>",
            "<b>D.</b> <p>LSB of data in the highest memory address of data unit</p>"
          ],
          "correct_answer": "<b>A.</b> <p>MSB of data in the lowest memory address of data unit</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49534/isro2007-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 226,
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
          "id": 227,
          "question": "<p>In comparison with static RAM memory, the dynamic Ram memory has <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>lower bit density and higher power consumption</p>",
            "<b>B.</b> <p>higher bit density and higher power consumption</p>",
            "<b>C.</b> <p>lower bit density and lower power consumption</p>",
            "<b>D.</b> <p>higher bit density and lower power consumption</p>"
          ],
          "correct_answer": "<b>B.</b> <p>higher bit density and higher power consumption</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49512/isro2007-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 228,
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
          "id": 229,
          "question": "<p>A read bit can be read <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>and written by CPU</p>",
            "<b>B.</b> <p>and written by peripheral</p>",
            "<b>C.</b> <p>by peripheral and written by CPU</p>",
            "<b>D.</b> <p>by CPU and written by the peripheral</p>"
          ],
          "correct_answer": "<b>D.</b> <p>by CPU and written by the peripheral</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49478/isro2007-08\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 230,
          "question": "<p>A hard disk system has the following parameters :<br>Number of tracks = 500<br>\nNumber of sectors/track = 100<br>\nNumber of bytes /sector = 500<br>\nTime taken by the head to move from one track to adjacent track = 1 ms<br>\nRotation speed = 600 rpm.<br>\nWhat is the average time taken for transferring 250 bytes from the disk ? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>300.5  ms</p>",
            "<b>B.</b> <p>255.5  ms</p>",
            "<b>C.</b> <p>255 ms</p>",
            "<b>D.</b> <p>300  ms</p>"
          ],
          "correct_answer": "<b>D.</b> <p>300  ms</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3479/gate2007-it-44-isro2015-34\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 231,
          "question": "<p>Following table indicates the latencies of operations between the instruction producing the result and instruction using the result.<br>\n\\(\\begin{array}{|l|l|c|} \\hline \\textbf {Instruction producing the result} &amp; \\textbf{Instruction using the result }&amp; \\textbf{Latency} \\\\\\hline \\text{ALU Operation} &amp; \\text{ALU Operation} &amp; 2 \\\\\\hline \\text{ALU Operation} &amp; \\text{Store} &amp; \\text{2}\\\\\\hline \\text{Load} &amp; \\text{ALU Operation} &amp; \\text{1}\\\\\\hline \\text{Load} &amp; \\text{Store} &amp; \\text{0} \\\\\\hline \\end{array}\\)<br>\nConsider the following code segment:<br><pre><code>Load R1, Loc 1; Load R1 from memory location Loc1\n Load R2, Loc 2; Load R2 from memory location Loc 2\n Add R1, R2, R1; Add R1 and R2 and save result in R1\n Dec R2;         Decrement R2\n Dec R1;         Decrement R1\n Mpy R1, R2, R3; Multiply R1 and R2 and save result in R3\n Store R3, Loc 3; Store R3 in memory location Loc 3 </code></pre> <br>\nWhat is the number of cycles needed to execute the above code segment assuming each instruction takes one cycle to execute? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>7</p>",
            "<b>B.</b> <p>10</p>",
            "<b>C.</b> <p>13</p>",
            "<b>D.</b> <p>14</p>"
          ],
          "correct_answer": "<b>C.</b> <p>13</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3476/gate2007-it-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 232,
          "question": "<p>Data forwarding techniques can be used to speed up the operation in presence of data dependencies. Consider the following replacements of LHS with RHS.<br>\ni. \\(R1\\rightarrow Loc, Loc\\rightarrow R2 \\; \\equiv \\; R1\\rightarrow R2, R1 \\rightarrow Loc\\)<br>\nii. \\(R1\\rightarrow Loc, Loc\\rightarrow R2 \\; \\equiv \\; R1\\rightarrow R2\\)<br>\niii. \\(R1\\rightarrow Loc, R2 \\rightarrow Loc \\; \\equiv \\; R1\\rightarrow Loc\\)<br>\niv. \\(R1\\rightarrow Loc, R2 \\rightarrow Loc \\; \\equiv \\; R2\\rightarrow Loc\\)<br>\nIn which of the following options, will the result of executing the RHS be the same as executing the LHS irrespective of the instructions that follow ? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>i and iii</p>",
            "<b>B.</b> <p>i and iv</p>",
            "<b>C.</b> <p>ii and iii</p>",
            "<b>D.</b> <p>ii and iv</p>"
          ],
          "correct_answer": "<b>B.</b> <p>i and iv</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3472/gate2007-it-39\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 233,
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
          "id": 234,
          "question": "<p>The floating point unit of a processor using a design D takes 2t cycles compared to t cycles taken by the fixed point unit. There are two more design suggestions \\(D_1\\) and \\(D_2\\). \\(D_1\\) uses 30% more cycles for fixed point unit but 30% less cycles for floating point unit as compared to design D. \\(D_2\\) uses 40% less cycles for fixed point unit but 10% more cycles for floating point unit as compared to design D. For a given program which has 80% fixed point operations and 20% floating point operations, which of the following ordering reflects the relative performances of three designs?\n(\\(D_i\\) &gt; \\(D_j\\) denotes that \\(D_i\\) is faster than \\(D_j\\)) <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(D_1 &gt; D &gt; D_2\\)</p>",
            "<b>B.</b> <p>\\(D_2 &gt; D &gt; D_1\\)</p>",
            "<b>C.</b> <p>\\(D &gt; D_2 &gt; D_1\\)</p>",
            "<b>D.</b> <p>\\(D &gt; D_1 &gt; D_2\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(D_2 &gt; D &gt; D_1\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3469/gate2007-it-36\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 235,
          "question": "<p>A processor takes 12 cycles to complete an instruction \\(I\\). The corresponding pipelined processor uses 6 stages with the execution times of 3, 2, 5, 4, 6 and 2 cycles respectively. What is the asymptotic speedup assuming that a very large number of instructions are to be executed? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1.83</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3437/gate2007-it-6-isro2011-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 236,
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
          "id": 237,
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
          "id": 238,
          "question": "<p>Consider the following program segment. Here R1, R2 and R3 are the general purpose registers. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q71_d5243e81.jpg\"><br>  Assume that the content of memory location 3000 is 10 and the content of the register R3 is 2000. The content of each of the memory locations from 2000 to 2010 is 100. The program is loaded from the memory location 1000. All the numbers are in decimal. <br><br>Assume that the memory is byte addressable and the word size is 32 bits. If an interrupt occurs during the execution of the instruction \"INC R3\", what return address will be pushed on to the stack? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1005</p>",
            "<b>B.</b> <p>1020</p>",
            "<b>C.</b> <p>1024</p>",
            "<b>D.</b> <p>1040</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1024</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43516/gate2007-73#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 239,
          "question": "<p>Consider the following program segment. Here R1, R2 and R3 are the general purpose registers. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q71_d5243e81.jpg\"><br>  Assume that the content of memory location 3000 is 10 and the content of the register R3 is 2000. The content of each of the memory locations from 2000 to 2010 is 100. The program is loaded from the memory location 1000. All the numbers are in decimal. <br><br> Assume that the memory is word addressable. After the execution of this\nprogram, the content of memory location 2010 is: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>100</p>",
            "<b>B.</b> <p>101</p>",
            "<b>C.</b> <p>102</p>",
            "<b>D.</b> <p>110</p>"
          ],
          "correct_answer": "<b>A.</b> <p>100</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43515/gate2007-72#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 240,
          "question": "<p>Consider the following program segment. Here R1, R2 and R3 are the general purpose registers. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q71_d5243e81.jpg\"><br>  Assume that the content of memory location 3000 is 10 and the content of the register R3 is 2000. The content of each of the memory locations from 2000 to 2010 is 100. The program is loaded from the memory location 1000. All the numbers are in decimal. <br><br>Assume that the memory is word addressable. The number of memory references for accessing the data in executing the program completely is: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>11</p>",
            "<b>C.</b> <p>20</p>",
            "<b>D.</b> <p>21</p>"
          ],
          "correct_answer": "<b>D.</b> <p>21</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1269/gate2007-71#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 241,
          "question": "<p>Consider a pipelined processor with the following four stages: <br>\nIF: Instruction Fetch <br>\nID: Instruction Decode and Operand Fetch <br>\nEX: Execute <br>\nWB: Write Back <br><br>\nThe IF, ID and WB stages take one clock cycle each to complete the operation.\nThe number of clock cycles for the EX stage depends on the instruction. The ADD\nand SUB instructions need 1 clock cycle and the MUL instruction needs 3 clock\ncycles in the EX stage. Operand forwarding is used in the pipelined processor.\nWhat is the number of clock cycles taken to complete the following sequence of\ninstructions? <br>\nADD R2, R1, R0              (R2 \\(\\leftarrow\\)  R1 + R0) <br>\nMUL R4, R3, R2              (R4 \\(\\leftarrow\\)  R3 * R2)<br>\nSUB R6, R5, R4               (R6 \\(\\leftarrow\\)  R5 - R4)<br> <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>7</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>10</p>",
            "<b>D.</b> <p>14</p>"
          ],
          "correct_answer": "<b>B.</b> <p>8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1235/gate2007-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 242,
          "question": "<p>Consider a disk pack with 16 surfaces, 128 tracks per surface and 256 sectors per track. 512 bytes of data are stored in a bit serial manner in a sector. The capacity of the disk pack and the number of bits required to specify a particular sector in the disk are respectively: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>256 Mbyte, 19 bits</p>",
            "<b>B.</b> <p>256 Mbyte, 28 bits</p>",
            "<b>C.</b> <p>512 Mbyte, 20 bits</p>",
            "<b>D.</b> <p>64 Gbyte, 28 bits</p>"
          ],
          "correct_answer": "<b>A.</b> <p>256 Mbyte, 19 bits</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1209/gate2007-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 243,
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
          "id": 244,
          "question": "<p>A pipelined processor uses a 4-stage instruction pipeline with the following stages: Instruction fetch (IF), Instruction decode (ID), Execute (EX) and Writeback (WB). The arithmetic operations as well as the load and store operations are carried out in the EX stage. The sequence of instructions corresponding to the statement \\(X = (S - R * (P + Q))/T\\) is given below. The values of variables P, Q, R, S and T are available in the registers R0, R1, R2, R3 and R4 respectively, before the execution of the instruction sequence.<br><br>\n\\(\\begin{array}{lll} \\text{ADD} &amp; \\text{$R5,R0,R1$} &amp; \\text{$;R5$} \\leftarrow \\text{R0 + R1} \\\\ \\text{MUL}&amp; \\text{$R6,R2,R5$} &amp; \\text{$;R6$} \\leftarrow \\text{R2 * R5} \\\\ \\text{SUB} &amp; \\text{$R5,R3,R6$} &amp; \\text{$;R5$} \\leftarrow \\text{R3 -R6} \\\\ \\text{DIV} &amp;\\text{$R6,R5,R4$} &amp; \\text{$;R6$} \\leftarrow \\text{R5/R4} \\\\ \\text{STORE} &amp;\\text{$R6,X$}&amp; \\text{$;X$} \\leftarrow \\text{R6} \\\\ \\end{array}\\) <br><br>The IF, ID and WB stages take 1 clock cycle each. The EX stage takes 1 clock cycle each for the ADD, SUB and STORE operations, and 3 clock cycles each for MUL and DIV operations. Operand forwarding from the EX stage to the ID stage is used. The number of clock cycles required to complete the sequence of instructions is <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>12</p>",
            "<b>C.</b> <p>14</p>",
            "<b>D.</b> <p>16</p>"
          ],
          "correct_answer": "<b>B.</b> <p>12</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3623/gate2006-it-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 245,
          "question": "<p>A pipelined processor uses a 4-stage instruction pipeline with the following stages: Instruction fetch (IF), Instruction decode (ID), Execute (EX) and Writeback (WB). The arithmetic operations as well as the load and store operations are carried out in the EX stage. The sequence of instructions corresponding to the statement \\(X = (S - R * (P + Q))/T\\) is given below. The values of variables P, Q, R, S and T are available in the registers R0, R1, R2, R3 and R4 respectively, before the execution of the instruction sequence.<br><br>\n\\(\\begin{array}{lll} \\text{ADD} &amp; \\text{$R5,R0,R1$} &amp; \\text{$;R5$} \\leftarrow \\text{R0 + R1} \\\\ \\text{MUL}&amp; \\text{$R6,R2,R5$} &amp; \\text{$;R6$} \\leftarrow \\text{R2 * R5} \\\\ \\text{SUB} &amp; \\text{$R5,R3,R6$} &amp; \\text{$;R5$} \\leftarrow \\text{R3 -R6} \\\\ \\text{DIV} &amp;\\text{$R6,R5,R4$} &amp; \\text{$;R6$} \\leftarrow \\text{R5/R4} \\\\ \\text{STORE} &amp;\\text{$R6,X$}&amp; \\text{$;X$} \\leftarrow \\text{R6} \\\\ \\end{array}\\) <br><br>The number of Read-After-Write (RAW) dependencies, Write-After-Read( WAR) dependencies, and Write-After-Write (WAW) dependencies in the sequence of instructions are, respectively, <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2,2,4</p>",
            "<b>B.</b> <p>3,2,3</p>",
            "<b>C.</b> <p>4,2,2</p>",
            "<b>D.</b> <p>3,3,2</p>"
          ],
          "correct_answer": "<b>C.</b> <p>4,2,2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3622/gate2006-it-78\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 246,
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
          "id": 247,
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
          "id": 248,
          "question": "<p>The data path shown in the figure computes the number of 1s in the 32-bit input word corresponding to an unsigned even integer stored in the shift register. <br>\nThe unsigned counter, initially zero, is incremented if the most significant bit of the shift register is 1. <br><br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q41_0ce010b4.jpg\"><br>\nThe microprogram for the control is shown in the table below with missing control words for microinstructions \\(I_1, I_2, \\ldots I_n\\). <br>\n\\(\\begin{array}{|l|c|c|c|} \\hline \\textbf {Microinstruction} &amp; \\textbf{Reset Counter}&amp; \\textbf{Shift left} &amp; \\textbf{Load output} \\\\\\hline \\text{BEGIN} &amp; \\text{1} &amp; \\text{0} &amp; \\text{0} \\\\\\hline \\text{I1}&amp; \\text{$?$} &amp; \\text{$?$} &amp; \\text{$?$} \\\\\\hline \\text{:} &amp; \\text{:} &amp; \\text{:} &amp; \\text{:} \\\\\\hline \\text{In} &amp; \\text{$?$} &amp; \\text{$?$} &amp; \\text{$?$} \\\\\\hline \\text{END} &amp; \\text{0} &amp; \\text{0} &amp; \\text{1} \\\\\\hline \\end{array}\\)<br>\nThe counter width (k), the number of missing microinstructions (n), and the control word for microinstructions \\(I_1, I_2, \\ldots I_n\\) are, respectively, <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>32,5,010</p>",
            "<b>B.</b> <p>5,32,010</p>",
            "<b>C.</b> <p>5,31,011</p>",
            "<b>D.</b> <p>5,31,010</p>"
          ],
          "correct_answer": "<b>D.</b> <p>5,31,010</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3584/gate2006-it-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 249,
          "question": "<p>The memory locations 1000,1001 and 1020 have data values 18,1 and 16 respectively before the following program is executed.<br><br>\n\\(\\begin{array}{llll} \\text{MOVI} &amp; \\text{$R_s, 1$} &amp;&amp; \\text{; Move immediate} \\\\ \\text{LOAD} &amp; \\text{$R_d, 1000(R_s)$} &amp;&amp; \\text{; Load from memory}\\\\ \\text{ADDI} &amp; \\text{$ R_d, 1000$} &amp;&amp; \\text{; Add immediate}\\\\ \\text{STOREI} &amp; \\text{$0(R_d), 20$} &amp;&amp; \\text{; Store immediate} \\end{array}\\)<br><br>\nWhich of the statements below is TRUE after the program is executed ? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Memory location 1000 has value 20</p>",
            "<b>B.</b> <p>Memory location 1020 has value 20</p>",
            "<b>C.</b> <p>Memory location 1021 has value 20</p>",
            "<b>D.</b> <p>Memory location 1001 has value 20</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Memory location 1001 has value 20</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3581/gate2006-it-40\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 250,
          "question": "<p>Which of the following statements about relative addressing mode is FALSE? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It enables reduced instruction size</p>",
            "<b>B.</b> <p>It allows indexing of array element with same instruction</p>",
            "<b>C.</b> <p>It enables easy relocation of data</p>",
            "<b>D.</b> <p>It enables faster address calculation than absolute addressing</p>"
          ],
          "correct_answer": "<b>D.</b> <p>It enables faster address calculation than absolute addressing</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3578/gate2006-it-39-isro2009-42\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 251,
          "question": "<p>Which of the following DMA transfer modes and interrupt handling mechanisms will enable the highest I/O band-width? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Transparent DMA and Polling interrupts</p>",
            "<b>B.</b> <p>Cycle-stealing and Vectored interrupts</p>",
            "<b>C.</b> <p>Block transfer and Vectored interrupts</p>",
            "<b>D.</b> <p>Block transfer and Polling interrupts</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Block transfer and Vectored interrupts</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3547/gate2006-it-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 252,
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
          "id": 253,
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
          "id": 254,
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
          "id": 255,
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
          "id": 256,
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
          "id": 257,
          "question": "<p>Consider these two functions and two statements S1 and S2 about them. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q55_f6311440.jpg\"><br>  S1 : The transformation from work 1 to work 2 is valid, i.e., for any program state\nand input arguments, work 2 will compute the same output and have the same\neffect on program state as work 1 <br>\nS2 : All the transformations applied to work 1 to get work 2 will always improve\nthe performance (i.e. reduce CPU time) of work 2 compared to work 1 <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1 is false and S2 is false</p>",
            "<b>B.</b> <p>S1 is false and S2 is true</p>",
            "<b>C.</b> <p>S1 is true and S2 is false</p>",
            "<b>D.</b> <p>S1 is true and S2 is true</p>"
          ],
          "correct_answer": "<b>A.</b> <p>S1 is false and S2 is false</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1833/gate2006-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 258,
          "question": "<p>Consider a new instruction named branch-on-bit-set (mnemonic bbs). The\ninstruction \"bbs reg, pos, labbel\" jumps to label if bit in position pos of register\noperand reg is one. a register is 32 bits wide and the bits are numbered 0 to 31,\nbit in position 0 being the least significant. Consider the following emulation of\nthis instruction on a processor that does not have bbs implemented. <br><br>\ntemp\\(\\leftarrow\\)reg &amp; mask <br>\nBranch to label if temp is non-zero<br><br>\nThe variable temp is a temporary register. For correct emulation the variable\nmask must be generated by <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>mask \\(\\leftarrow 0 \\times 1 \\lt \\lt pos\\)</p>",
            "<b>B.</b> <p>musk \\(\\leftarrow 0 \\times ffffffff \\gt \\gt  pos\\)</p>",
            "<b>C.</b> <p>mask \\(\\leftarrow\\) pos</p>",
            "<b>D.</b> <p>msdk \\(\\leftarrow 0 \\times f\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>mask \\(\\leftarrow 0 \\times 1 \\lt \\lt pos\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1819/gate2006-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 259,
          "question": "<p>A CPU has five-stages pipeline and runs at 1GHz frequency. Instruction fetch\nhappens in the first stage of the pipeline. A conditional branch instruction\ncomputes the target address and evaluates the condition in the third stage of the\npipeline. The processor stops fetching new instructions following a conditional\nbranch until the branch outcome is known. A program executes \\(10^{9}\\) instructions\nout of which 20% are conditional branches. If each instruction takes one cycle to\ncomplete on average, then total execution time of the program is <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1.0 second</p>",
            "<b>B.</b> <p>1.2 seconds</p>",
            "<b>C.</b> <p>1.4 seconds</p>",
            "<b>D.</b> <p>1.6 seconds</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1.4 seconds</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1818/gate2006-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 260,
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
          "id": 261,
          "question": "<p>A CPU has 24-bit instructions. A program starts at address 300 (in decimal). Which one of the following is a legal program counter (all values in decimal)? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>400</p>",
            "<b>B.</b> <p>500</p>",
            "<b>C.</b> <p>600</p>",
            "<b>D.</b> <p>700</p>"
          ],
          "correct_answer": "<b>C.</b> <p>600</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/888/gate2006-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 262,
          "question": "<p>A disk has 8 equidistant tracks. The diameters of the innermost and outermost tracks are 1 cm and 8 cm respectively. The innermost track has a storage capacity of 10 MB.<br>If the disk has 20 sectors per track and is currently at the end of the \\(5^{th}\\) sector of the inner-most track and the head can move at a speed of 10 meters/sec and it is rotating at constant angular velocity of 6000 RPM, how much time will it take to read 1 MB contiguous data starting from the sector 4 of the outer-most track? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>13.5 ms</p>",
            "<b>B.</b> <p>10  ms</p>",
            "<b>C.</b> <p>9.5 ms</p>",
            "<b>D.</b> <p>20 ms</p>"
          ],
          "correct_answer": "<b>B.</b> <p>10  ms</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3846/gate2005-it-81-b\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 263,
          "question": "<p>A disk has 8 equidistant tracks. The diameters of the innermost and outermost tracks are 1 cm and 8 cm respectively. The innermost track has a storage capacity of 10 MB.<br>\nWhat is the total amount of data that can be stored on the disk if it is used with a drive that rotates it with<br>\nI.Constant Linear Velocity<br>\nII.Constant Angular Velocity?<br> <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(I. 80 \\ \\text{MB}; \\;  II. 2040 \\ \\text{MB}\\)</p>",
            "<b>B.</b> <p>\\(I. 2040 \\ \\text{MB}; \\;  II 80 \\ \\text{MB}\\)</p>",
            "<b>C.</b> <p>\\(I. 80 \\ \\text{MB}; \\; II. 360 \\ \\text{MB}\\)</p>",
            "<b>D.</b> <p>\\(I. 360 \\ \\text{MB};  \\; II. 80 \\ \\text{MB}\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(I. 360 \\ \\text{MB};  \\; II. 80 \\ \\text{MB}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3845/gate2005-it-81-a\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 264,
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
          "id": 265,
          "question": "<p>An instruction set of a processor has 125 signals which can be divided into 5 groups of mutually exclusive signals as follows: <br>\nGroup 1 : 20 signals, Group 2 : 70 signals, Group 3 : 2 signals, Group 4 : 10 signals, Group 5 : 23 signals.<br>\nHow many bits of the control words can be saved by using vertical microprogramming over horizontal microprogramming? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>103</p>",
            "<b>C.</b> <p>22</p>",
            "<b>D.</b> <p>55</p>"
          ],
          "correct_answer": "<b>B.</b> <p>103</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3810/gate2005-it-49\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 266,
          "question": "<p>A hardwired CPU uses 10 control signals \\(S_1\\) to \\(S_{10}\\), in various time steps \\(T_1\\) to \\(T_5\\), to implement 4 instructions \\(I_1\\) to \\(I_4\\) as shown below: <br><br>\n\\(\\begin{array}{|c|c|c|c|c|c|}\\hline&amp;\\bf{T_1}&amp;\\bf{T_2}&amp;\\bf{T_3}&amp;\\bf{T_4}&amp;\\bf{T_5}\\\\\\hline\\bf{I_1}&amp;S_1,S_3,S_5&amp;S_2,S_4,S_6&amp;S_1,S_7&amp;S_{10}&amp;S_3,S_8\\\\\\hline\\bf{I_2}&amp;S_1,S_3,S_5&amp;S_8,S_9,S_{10}&amp;S_5,S_6S_7&amp;S_{6}&amp;S_{10}\\\\\\hline\\bf{I_3}&amp;S_1,S_3,S_5&amp;S_7,S_8,S_{10}&amp;S_2,S_6,S_{9}&amp;S_{10}&amp;S_1,S_3\\\\\\hline\\bf{I_4}&amp;S_1,S_3,S_5&amp;S_2,S_6,S_7&amp;S_5,S_{10}&amp;S_{6},S_9&amp;S_{10}\\\\\\hline\\end{array}\\) <br><br>\nWhich of the following pairs of expressions represent the circuit for generating control signals \\(S_5\\) and \\(S_{10}\\) respectively?<br><br>\n\\(((I_j + I_k)T_n\\) indicates that the control signal should be generated in time step \\(T_n\\) if the instruction being executed is \\(l_j\\) or \\(l_k\\)) <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(S_5 = T_1 + I_2 \\cdot T_3\\) and \\(S_{10} = (I_1 + I_3) \\cdot T_4 + (I_2 + I_4) \\cdot T_5\\)</p>",
            "<b>B.</b> <p>\\(S_5 = T_1 + (I_2 + I_4) \\cdot T_3\\) and \\(S_{10} = (I_1 + I_3) \\cdot T_4 + (I_2 + I_4) \\cdot T_5\\)</p>",
            "<b>C.</b> <p>\\(S_5 = T_1 + (I_2 + I_4) \\cdot T_3\\) and \\(S_{10} = (I_2 + I_3 + I_4) \\cdot T_2 + (I_1 + I_3) \\cdot T_4 + (I_2 + I_4) \\cdot T_5\\)</p>",
            "<b>D.</b> <p>\\(S_5 = T_1 + (I_2 + I_4) \\cdot T_3\\) and \\(S_{10} = (I_2 + I_3) \\cdot T_2 + I_4 \\cdot T_3 + (I_1 + I_3) \\cdot T_4 + (I_2 + I_4) \\cdot T_5\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(S_5 = T_1 + (I_2 + I_4) \\cdot T_3\\) and \\(S_{10} = (I_2 + I_3) \\cdot T_2 + I_4 \\cdot T_3 + (I_1 + I_3) \\cdot T_4 + (I_2 + I_4) \\cdot T_5\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3806/gate2005-it-45\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 267,
          "question": "<p>We have two designs D1 and D2 for a synchronous pipeline processor. D1 has 5 pipeline stages with execution times of 3 nsec, 2 nsec, 4 nsec, 2 nsec and 3 nsec while the design D2 has 8 pipeline stages each with 2 nsec execution time How much time can be saved using design D2 over design D1 for executing 100 instructions? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>214 nsec</p>",
            "<b>B.</b> <p>202 nsec</p>",
            "<b>C.</b> <p>86 nsec</p>",
            "<b>D.</b> <p>-200 nsec</p>"
          ],
          "correct_answer": "<b>B.</b> <p>202 nsec</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3805/gate2005-it-44\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 268,
          "question": "<p>A dynamic RAM has a memory cycle time of 64 nsec. It has to be refreshed 100 times per msec and each refresh takes 100 nsec. What percentage of the memory cycle time is used for refreshing? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>6.4</p>",
            "<b>C.</b> <p>1</p>",
            "<b>D.</b> <p>0.64</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3754/gate2005-it-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 269,
          "question": "<p>Consider the following data path of a CPU.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q79_570ada15.jpg\"> <br> ALU, the bus and all the registers in the data path are of identical size. All operations including incrementation of the PC and the GPRs are to be carried out in the ALU. Two clock cycles are needed for memory read operation - the first one for loading address in the MAR and the next one for loading data from the memory bus into the MDR. <br><br> The instruction \"call Rn, sub\" is a two word instruction. Assuming that PC is incremented during the fetch cycle of the first word of the instruction, its register transfer interpretation is<pre><code> Rn &lt; = PC + 1;\nPC &lt; = M[PC];</code></pre>    The minimum number of CPU clock cycles needed during the execution cycle of this instruction is: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43568/gate2005-80#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 270,
          "question": "<p>Consider the following data path of a CPU.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q79_570ada15.jpg\"> <br>ALU, the bus and all the registers in the data path are of identical size. All operations including incrementation of the PC and the GPRs are to be carried out in the ALU. Two clock cycles are needed for memory read operation - the first one for loading address in the MAR and the next one for loading data from the memory bus into the MDR. <br><br> The instruction \"add R0, R1\" has the register transfer interpretation R0&lt;=R0+R1. The minimum number of clock cycles needed for execution cycle of this instruction is. <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1402/gate2005-79#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 271,
          "question": "<p>Consider a disk drive with the following specifications:\n16 surfaces, 512 tracks/surface, 512 sectors/track, 1 KB/sector, rotation speed 3000 rpm. The disk is\noperated in cycle stealing mode whereby whenever one 4 byte word is ready it is sent to memory;\nsimilarly, for writing, the disk interface reads a 4 byte word from the memory in each DMA cycle.\nMemory cycle time is 40 nsec. The maximum percentage of time that the CPU gets blocked during\nDMA operation is: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>25</p>",
            "<b>C.</b> <p>40</p>",
            "<b>D.</b> <p>50</p>"
          ],
          "correct_answer": "<b>B.</b> <p>25</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1393/gate2005-70#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 272,
          "question": "<p>A device with data transfer rate 10 KB/sec is connected to a CPU. Data is transferred byte-wise. Let\nthe interrupt overhead be 4 \\(\\mu\\)sec. The byte transfer time between the device interfaces register and\nCPU or memory is negligible. What is the minimum performance gain of operating the device under\ninterrupt mode over operating it under program-controlled mode? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>15</p>",
            "<b>B.</b> <p>25</p>",
            "<b>C.</b> <p>35</p>",
            "<b>D.</b> <p>45</p>"
          ],
          "correct_answer": "<b>B.</b> <p>25</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1392/gate2005-69#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 273,
          "question": "<p>A 5 stage pipelined CPU has the following sequence of stages:<pre><code>\nIF - Instruction fetch from instruction memory,\nRD - Instruction decode and register read,\nEX - Execute: ALU operation for data and address computation,\nMA - Data memory access - for write access, the register read at RD stage is used,\nWB - Register write back. \nConsider the following sequence of instructions:\nI1 : L R0, 1oc1;        R0 &lt;= M[1oc1]\nI2 : A R0, R0;           R0 &lt;= R0 + R0\nI3 : S R2, R0;           R2 &lt;= R2 - R0\n </code></pre> Let each stage take one clock cycle. What is the number of clock cycles taken to complete the above sequence of instructions starting from the fetch of I1 ? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8</p>",
            "<b>B.</b> <p>10</p>",
            "<b>C.</b> <p>12</p>",
            "<b>D.</b> <p>15</p>"
          ],
          "correct_answer": "<b>A.</b> <p>8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1391/gate2005-68#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 274,
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
          "id": 275,
          "question": "<p>Match each of the high level language statements given on the left hand side with the most natural\nAddressing Modes from those listed on the right hand side.<pre><code>1 A[1] = B[J];      a Indirect addressing\n 2 while [*A++];     b Indexed, addressing\n 3 int temp = *x;    c Autoincrement  </code></pre> <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(1, c), (2,b), (3,a)</p>",
            "<b>B.</b> <p>(1, a), (2,c), (3,b)</p>",
            "<b>C.</b> <p>(1, b), (2,c), (3,a)</p>",
            "<b>D.</b> <p>(1, a), (2,b), (3,c)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>(1, b), (2,c), (3,a)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1389/gate2005-66#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 276,
          "question": "<p>Consider a three word machine instruction<pre><code>ADD A[R0], @B </code></pre>\nThe first operand (destination) \"A[R0]\" uses indexed addressing mode with R0 as the index register.\nThe second operand (source) \"@B\" uses indirect addressing mode. A and B are memory addresses\nresiding at the second and the third words, respectively. The first word of the instruction specifies the\nopcode, the index register designation and the source and destination addressing modes.\nDuring execution of ADD instruction, the two operands are added and stored in the destination (first\noperand). <br>\nThe number of memory cycles needed during the execution cycle of the instruction is: <br><br><strong>(GATE CSE 2005)</strong></p>",
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
          "explanation": "<a href=\"https://gateoverflow.in/1388/gate2005-65#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 277,
          "question": "<p>Normally user programs are prevented from handling I/O directly by I/O instructions in them. For CPUs having explicit I/O instructions, such I/O protection is ensured by having the I/O instructions privileged. In a CPU with memory mapped I/O, there is no explicit I/O instruction. Which one of the following is true for a CPU with memory mapped I/O? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I/O protection is ensured by operating system routine(s)</p>",
            "<b>B.</b> <p>I/O protection is ensured by a hardware trap</p>",
            "<b>C.</b> <p>I/O protection is ensured during system configuration</p>",
            "<b>D.</b> <p>I/O protection is not possible</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I/O protection is ensured by operating system routine(s)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1356/gate2005-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 278,
          "question": "<p>Which one of the following is true for a CPU having a single interrupt request line and a single\ninterrupt grant line? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Neither vectored interrupt nor multiple interrupting devices are possible</p>",
            "<b>B.</b> <p>Vectored interrupts are not possible but multiple interrupting devices are possible.</p>",
            "<b>C.</b> <p>Vectored interrupts and multiple interrupting devices are both possible</p>",
            "<b>D.</b> <p>Vectored interrupt is possible but multiple interrupting devices are not possible</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Vectored interrupts and multiple interrupting devices are both possible</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1355/gate2005-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 279,
          "question": "<p>The storage area of a disk has the innermost diameter of 10 cm and outermost diameter of 20 cm. The maximum storage density of the disk is 1400 bits/cm. The disk rotates at a speed of 4200 RPM. The main memory of a computer has 64-bit word length and 1\\(\\mu s\\) cycle time. If cycle stealing is used for data transfer from the disk, the percentage of memory cycles stolen for transferring one word is <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0.50%</p>",
            "<b>B.</b> <p>1%</p>",
            "<b>C.</b> <p>5%</p>",
            "<b>D.</b> <p>10%</p>"
          ],
          "correct_answer": "<b>C.</b> <p>5%</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3694/gate2004-it-51\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 280,
          "question": "<p>In an enhancement of a design of a CPU, the speed of a floating point unit has been increased by 20% and the speed of a fixed point unit has been increased by 10%. What is the overall speedup achieved if the ratio of the number of floating point operations to the number of fixed point operations is 2:3 and the floating point operation used to take twice the time taken by the fixed point operation in the original design? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1.155</p>",
            "<b>B.</b> <p>1.185</p>",
            "<b>C.</b> <p>1.255</p>",
            "<b>D.</b> <p>1.285</p>"
          ],
          "correct_answer": "<b>A.</b> <p>1.155</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/790/gate2004-it-50\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 281,
          "question": "<p>A CPU has only three instructions I1, I2 and I3, which use the following signals in time steps T1-T5:<br>\n<b>I1 :</b> <br>T1 : Ain, Bout, Cin<br>\nT2 : PCout, Bin<br>\nT3 : Zout, Ain<br>\nT4 : Bin, Cout<br>\nT5 : End<br><b>I2 :</b> <br>T1 : Cin, Bout, Din<br>\nT2 : Aout, Bin<br>\nT3 : Zout, Ain<br>\nT4 : Bin, Cout<br>\nT5 : End<br><b>I3 :</b> <br>T1 : Din, Aout<br>\nT2 : Ain, Bout<br>\nT3 : Zout, Ain<br>\nT4 : Dout, Ain<br>\nT5 : End<br><br>\nWhich of the following logic functions will generate the hardwired control for the signal Ain ? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T1.I1 + T2.I3 + T4.I3 + T3</p>",
            "<b>B.</b> <p>(T1 + T2 + T3).I3 + T1.I1</p>",
            "<b>C.</b> <p>(T1 + T2 ).I1 + (T2 + T4).I3 + T3</p>",
            "<b>D.</b> <p>(T1 + T2 ).I2 + (T1 + T3).I1 + T3</p>"
          ],
          "correct_answer": "<b>A.</b> <p>T1.I1 + T2.I3 + T4.I3 + T3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3692/gate2004-it-49\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 282,
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
          "id": 283,
          "question": "<p>Consider a pipeline processor with 4 stages S1 to S4. We want to execute the following loop:<br><pre><code> for (i = 1; i &lt; = 1000; i++) \n    {I1, I2, I3, I4} </code></pre>\nwhere the time taken (in ns) by instructions I1 to I4 for stages S1 to S4 are given below:<br>\\(\\begin{array}{|c|c|c|c|c|} \\hline &amp; \\textbf {$S _1$} &amp;\\textbf {$S _2$} &amp; \\textbf {$S _3$} &amp; \\textbf{$S _4$ } \\\\\\hline \\textbf{I1}&amp; \\text{$1$} &amp; \\text{$2$} &amp; \\text{$1$} &amp; \\text{$2$} \\\\\\hline \\textbf{I2} &amp; \\text{$2$} &amp; \\text{$1$} &amp; \\text{$2$} &amp; \\text{$1$}\\\\\\hline \\textbf{I3}&amp; \\text{$1$} &amp; \\text{$1$} &amp; \\text{$2$} &amp; \\text{$1$} \\\\\\hline \\textbf{I4} &amp; \\text{$2$} &amp; \\text{$1$} &amp; \\text{$2$} &amp; \\text{$1$} \\\\\\hline \\end{array}\\)<br>The output of  I1 for i = 2 will be available after<br> <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>11 ns</p>",
            "<b>B.</b> <p>12 ns</p>",
            "<b>C.</b> <p>13 ns</p>",
            "<b>D.</b> <p>28 ns</p>"
          ],
          "correct_answer": "<b>C.</b> <p>13 ns</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3690/gate2004-it-47\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 284,
          "question": "<p>If we use internal data forwarding to speed up the performance of a CPU (R1, R2 and R3 are registers and M[100] is a memory reference), then the sequence of operations<br>\nR1 \\(\\rightarrow\\) M[100]<br>\nM[100] \\(\\rightarrow\\) R2<br>\nM[100] \\(\\rightarrow\\) R3<br>\ncan be replaced by <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>R1 \\(\\rightarrow\\) R3\nR2 \\(\\rightarrow\\) M[100]</p>",
            "<b>B.</b> <p>M[100] \\(\\rightarrow\\) R2\nR1 \\(\\rightarrow\\) R2\nR1 \\(\\rightarrow\\) R3</p>",
            "<b>C.</b> <p>R1 \\(\\rightarrow\\) M[100]\nR2 \\(\\rightarrow\\) R3</p>",
            "<b>D.</b> <p>R1 \\(\\rightarrow\\) R2\nR1 \\(\\rightarrow\\) R3\nR1 \\(\\rightarrow\\) M[100]</p>"
          ],
          "correct_answer": "<b>D.</b> <p>R1 \\(\\rightarrow\\) R2\nR1 \\(\\rightarrow\\) R3\nR1 \\(\\rightarrow\\) M[100]</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3689/gate2004-it-46\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 285,
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
          "id": 286,
          "question": "<p>What is the bit rate of a video terminal unit with 80 characters/line, 8 bits/character and horizontal sweep time of 100 \\(\\mu s\\) (including 20 \\(\\mu s\\) of retrace time)? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(8 \\text{Mbps}\\)</p>",
            "<b>B.</b> <p>\\(6.4 \\text{Mbps}\\)</p>",
            "<b>C.</b> <p>\\(0.8 \\text{Mbps}\\)</p>",
            "<b>D.</b> <p>\\(0.64 \\text{Mbps}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(6.4 \\text{Mbps}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3652/gate2004-it-11-isro2011-33\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 287,
          "question": "<p>What is the minimum size of ROM required to store the complete truth table of an 8-bit \\(\\times\\) 8-bit multiplier? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>32 K \\(\\times\\) 16 bits</p>",
            "<b>B.</b> <p>64 K \\(\\times\\) 16 bits</p>",
            "<b>C.</b> <p>16 K \\(\\times\\) 32 bits</p>",
            "<b>D.</b> <p>64 K \\(\\times\\) 32 bits</p>"
          ],
          "correct_answer": "<b>B.</b> <p>64 K \\(\\times\\) 16 bits</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3651/gate2004-it-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 288,
          "question": "<p>A 4-stage pipeline has the stage delays as 150, 120, 160 and 140 nanoseconds respectively. Registers\nthat are used between the stages have a delay of 5 nanoseconds each. Assuming constant clocking\nrate, the total time taken to process 1000 data items on this pipeline will be <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>120.4 microseconds</p>",
            "<b>B.</b> <p>160.5 microseconds</p>",
            "<b>C.</b> <p>165.5 microseconds</p>",
            "<b>D.</b> <p>590 microseconds</p>"
          ],
          "correct_answer": "<b>C.</b> <p>165.5 microseconds</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1063/gate2004-69#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 289,
          "question": "<p>A hard disk with a transfer rate of 10 Mbytes/second is constantly transferring data to memory using\nDMA. The processor runs at 600 MHz, and takes 300 and 900 clock cycles to initiate and complete\nDMA transfer respectively. If the size of the transfer is 20 Kbytes, what is the percentage of processor\ntime consumed for the transfer operation? <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5%</p>",
            "<b>B.</b> <p>1%</p>",
            "<b>C.</b> <p>0.50%</p>",
            "<b>D.</b> <p>0.10%</p>"
          ],
          "correct_answer": "<b>D.</b> <p>0.10%</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1062/gate2004-68#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 290,
          "question": "<p>The microinstructions stored in the control memory of a processor have a width of 26 bits. Each microinstruction is divided into three fields: a micro-operation field of 13 bits, a next address field (X), and a MUX select field (Y). There are 8 status bits in the inputs of the MUX. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q67_759b6f1e.jpg\"> <br>\nHow many bits are there in the X and Y fields, and what\nis the size of the control memory in number of words? <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10,3,1024</p>",
            "<b>B.</b> <p>8,5,256</p>",
            "<b>C.</b> <p>5,8,2048</p>",
            "<b>D.</b> <p>10,3,512</p>"
          ],
          "correct_answer": "<b>A.</b> <p>10,3,1024</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1061/gate2004-67#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 291,
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
          "id": 292,
          "question": "<p>Consider the following program segment for a hypothetical CPU having three user registers R1, R2 and R3.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q63_df1a4f4b.jpg\"> <br>  Let the clock cycles required fro various operations be as follows:<br><br>\nRegister to/from memory transfer : 3 clock cycles<br>\nADD with both operands in register : 1 clock cycle<br>\nInstruction fetch and decode : 2 clock cycles per word<br><br>\nThe total number of clock cycles required to execute the program is <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>29</p>",
            "<b>B.</b> <p>24</p>",
            "<b>C.</b> <p>23</p>",
            "<b>D.</b> <p>20</p>"
          ],
          "correct_answer": "<b>B.</b> <p>24</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43570/gate2004-64#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 293,
          "question": "<p>Consider the following program segment for a hypothetical CPU having three user registers R1, R2 and R3. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q63_df1a4f4b.jpg\"> <br> Consider that the memory is byte addressable with size 32 bits, and the program has been loaded starting from memory location 1000 (decimal). If an interrupt occurs while the CPU has been halted after executing the HALT instruction, the return address (in decimal) saved in the stack will be <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1007</p>",
            "<b>B.</b> <p>1020</p>",
            "<b>C.</b> <p>1024</p>",
            "<b>D.</b> <p>1028</p>"
          ],
          "correct_answer": "<b>D.</b> <p>1028</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1058/gate2004-63#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 294,
          "question": "<p>Which of the following Addressing Modess are suitable for program relocation at run time? <br><br>\n(i) Absolute addressing <br> (ii) Based addressing <br>\n(iii) Relative addressing <br> (iv) Indirect addressing <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(i) and (iv)</p>",
            "<b>B.</b> <p>(i) and (ii)</p>",
            "<b>C.</b> <p>(ii) and (iii)</p>",
            "<b>D.</b> <p>(i), (ii) and (iv)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>(ii) and (iii)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1017/gate2004-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 295,
          "question": "<p>Consider the following assembly language program for a hypothetical processor. A, B, and C are 8 bit registers. The meanings of various instructions are shown as comments. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q48_464367e7.jpg\"> <br> Which of the following instructions when inserted at location X will ensure that\nthe value of register A after program execution is the same as its initial value? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>RRC A,# 1</p>",
            "<b>B.</b> <p>NOP ; no operation</p>",
            "<b>C.</b> <p>LRC A, # 1 ; left rotate A through carry flag by one bit</p>",
            "<b>D.</b> <p>ADD A, # 1</p>"
          ],
          "correct_answer": "<b>A.</b> <p>RRC A,# 1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43577/gate2003-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 296,
          "question": "<p>Consider the following assembly language program for a hypothetical processor. A, B, and C are 8 bit registers. The meanings of various instructions are shown as comments. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q48_464367e7.jpg\"> <br> If the initial value of register A is A0 the value of register B after the program\nexecution will be <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the number of 0 bits in A0</p>",
            "<b>B.</b> <p>the number of 1 bits in A0</p>",
            "<b>C.</b> <p>A0</p>",
            "<b>D.</b> <p>8</p>"
          ],
          "correct_answer": "<b>B.</b> <p>the number of 1 bits in A0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/938/gate2003-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 297,
          "question": "<p>Using a larger block size in a fixed block size file system leads to <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>better disk throughput but poorer disk space utilization</p>",
            "<b>B.</b> <p>better disk throughput and better disk space utilization</p>",
            "<b>C.</b> <p>poorer disk throughput but better disk space utilization</p>",
            "<b>D.</b> <p>poorer disk throughput and poorer disk space utilization</p>"
          ],
          "correct_answer": "<b>A.</b> <p>better disk throughput but poorer disk space utilization</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/915/gate2003-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 298,
          "question": "<p>For a pipelined CPU with a single ALU, consider the following situations <br>\n1. The (j + 1)-th instruction uses the result of j-th instruction as an operand <br>\n2. The execution of a conditional jump instruction <br>\n3. The j - th and j + 1 - st instructions require the ALU at the same time <br>\nWhich of the above can cause a hazard? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1 and 2 only</p>",
            "<b>B.</b> <p>2 and 3 only</p>",
            "<b>C.</b> <p>3 only</p>",
            "<b>D.</b> <p>All the three</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All the three</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/901/gate2003-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 299,
          "question": "<p>Horizontal microprogramming <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Does not require use of signal decoders</p>",
            "<b>B.</b> <p>Results in larger sized microinstructions than vertical microprogramming</p>",
            "<b>C.</b> <p>Uses one bit for each control signal</p>",
            "<b>D.</b> <p>All of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/837/gate2002-2-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 300,
          "question": "<p>The performance of a pipelined processor suffers if <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The pipelined stages have different delays</p>",
            "<b>B.</b> <p>Consecutive instructions are dependent on each other</p>",
            "<b>C.</b> <p>The pipeline stages share hardware resources</p>",
            "<b>D.</b> <p>All the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/836/gate2002-2-6#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 301,
          "question": "<p>What are the states of the Auxiliary Carry (AC) and Carry Flag (CY) after\nexecuting the following 8085 program ? <br><br>\nMIV H, 5DH <br>\nMIV L, 6BH <br>\nMOV A, H <br>\nADD L <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>AC = 0 and CY = 0</p>",
            "<b>B.</b> <p>AC = 1 and CY = 1</p>",
            "<b>C.</b> <p>AC = 1 and CY = 0</p>",
            "<b>D.</b> <p>AC = 0 and CY = 1</p>"
          ],
          "correct_answer": "<b>C.</b> <p>AC = 1 and CY = 0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/834/gate2002-2-4#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 302,
          "question": "<p>In the absolute the Addressing Modes : <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The operand is inside the instruction</p>",
            "<b>B.</b> <p>The address of the operand is inside the instruction</p>",
            "<b>C.</b> <p>The register containing the address of the operand is specified inside the\ninstruction</p>",
            "<b>D.</b> <p>The location of the operand is implicit</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The address of the operand is inside the instruction</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/829/gate2002-1-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 303,
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
          "id": 304,
          "question": "<p>In 8085 which of the following modifies the program counter ? <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only PCHL instruction</p>",
            "<b>B.</b> <p>Only ADD instructions</p>",
            "<b>C.</b> <p>Only JMP and CALL instructions</p>",
            "<b>D.</b> <p>All instructions</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All instructions</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/814/gate2002-1-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 305,
          "question": "<p>A device employing INTR line for device interrupt puts the CALL instruction on\nthe data bus while <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\overline{INTA}\\) is active</p>",
            "<b>B.</b> <p>HOLD is active</p>",
            "<b>C.</b> <p>READY is active</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\overline{INTA}\\) is active</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/813/gate2002-1-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 306,
          "question": "<p>The most appropriate matching for the following pairs is: <br><br>\\(\\begin{array}{ll} \\text{X: Indirect addressing} &amp; \\text{1: Loops } \\\\ \\text{Y: Immediate addressing } &amp; \\text{2: Pointers} \\\\ \\text{Z: Auto decrement addressing } &amp; \\text{3: Constants } \\\\ \\end{array}\\) <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>X-3, Y-2, Z-1</p>",
            "<b>B.</b> <p>X-1, Y-3, Z-2</p>",
            "<b>C.</b> <p>X-2, Y-3, Z-1</p>",
            "<b>D.</b> <p>X-3, Y-1, Z-2</p>"
          ],
          "correct_answer": "<b>C.</b> <p>X-2, Y-3, Z-1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/633/gate2000-1-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 307,
          "question": "<p>The 8085 microprocessor responds to the presence of an interrupt <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>as soon as the TRAP pin becomes 'high'</p>",
            "<b>B.</b> <p>by checking the TRAP pin for 'high' status at the end of each instruction</p>",
            "<b>C.</b> <p>by checking the TRAP pin for 'high' status at the end of the execution of each instruction.</p>",
            "<b>D.</b> <p>by checking the TRAP pin for 'high' status at regular intervals.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>by checking the TRAP pin for 'high' status at the end of the execution of each instruction.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/632/gate2000-1-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 308,
          "question": "<p>Comparing the time T1 taken for a single instruction on a pipelined CPU with time T2 taken on a non-pipelined but identical CPU, we can say that <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T1 \\(\\leq\\) T2</p>",
            "<b>B.</b> <p>T1 \\(\\geq\\) T2</p>",
            "<b>C.</b> <p>T1 &lt; T2</p>",
            "<b>D.</b> <p>T1 and T2 plus the time taken for one instruction fetch cycle</p>"
          ],
          "correct_answer": "<b>B.</b> <p>T1 \\(\\geq\\) T2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/631/gate2000-1-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 309,
          "question": "<p>To put the 8085 microprocessor in the wait state <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>lower the HOLD input</p>",
            "<b>B.</b> <p>lower the READY input</p>",
            "<b>C.</b> <p>raise the HOLD input</p>",
            "<b>D.</b> <p>raise the READY input</p>"
          ],
          "correct_answer": "<b>B.</b> <p>lower the READY input</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/630/gate2000-1-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 310,
          "question": "<p>A certain processor supports only the immediate and the direct addressing modes. Which of the following programming language features cannot be implemented on this processor?<br>\na) Pointers<br>\nb) Arrays<br>\nc) Records<br>\nd) Recursive procedures with local variables <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only a</p>",
            "<b>B.</b> <p>a and b</p>",
            "<b>C.</b> <p>c and d</p>",
            "<b>D.</b> <p>a, b, c and d</p>"
          ],
          "correct_answer": "<b>D.</b> <p>a, b, c and d</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1500/gate1999-2-23\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 311,
          "question": "<p>The main difference(s) between a CISC and a RISC processor is/are that a RISC processor typically:<br>\na) has fewer instructions<br>\nb) has fewer addressing modes<br>\nc) has more registers<br>\nd) is easier to implement using hardwired control logic <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>a and b</p>",
            "<b>B.</b> <p>b and c</p>",
            "<b>C.</b> <p>a and d</p>",
            "<b>D.</b> <p>a, b, c and d</p>"
          ],
          "correct_answer": "<b>D.</b> <p>a, b, c and d</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1499/gate1999-2-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 312,
          "question": "<p>Arrange the following configuration for CPU in decreasing order of operating speeds:<br>\nHard wired control, Vertical microprogramming, Horizontal microprogramming. <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Hard wired control, Vertical microprogramming, Horizontal microprogramming.</p>",
            "<b>B.</b> <p>Hard wired control, Horizontal microprogramming, Vertical microprogramming.</p>",
            "<b>C.</b> <p>Horizontal microprogramming, Vertical microprogramming, Hard wired control.</p>",
            "<b>D.</b> <p>Vertical microprogramming, Horizontal microprogramming, Hard wired control.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Hard wired control, Horizontal microprogramming, Vertical microprogramming.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1497/gate1999-2-19\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 313,
          "question": "<p>Raid configurations of the disks are used to provide <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Fault-tolerance</p>",
            "<b>B.</b> <p>High speed</p>",
            "<b>C.</b> <p>High data density</p>",
            "<b>D.</b> <p>(A) &amp; (B)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>(A) &amp; (B)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1496/gate1999-2-18-isro2008-46\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 314,
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
          "id": 315,
          "question": "<p>The address space of 8086 CPU is <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>one Megabyte</p>",
            "<b>B.</b> <p>256 Kilobytes</p>",
            "<b>C.</b> <p>1 K Megabytes</p>",
            "<b>D.</b> <p>64 Kilobytes</p>"
          ],
          "correct_answer": "<b>A.</b> <p>one Megabyte</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1682/gate1998-2-10-isro2008-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 316,
          "question": "<p>Formatting for a floppy disk refers to <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>arranging the data on the disk in contiguous fashion</p>",
            "<b>B.</b> <p>writing the directory</p>",
            "<b>C.</b> <p>erasing the system data</p>",
            "<b>D.</b> <p>writing identification information on all tracks and sectors</p>"
          ],
          "correct_answer": "<b>D.</b> <p>writing identification information on all tracks and sectors</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1681/gate1998-2-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 317,
          "question": "<p>Which of the following is an example of a spooled device? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The terminal used to enter the input data for the C program being executed</p>",
            "<b>B.</b> <p>An output device used to print the output of a number of jobs</p>",
            "<b>C.</b> <p>The secondary memory device in a virtual storage system</p>",
            "<b>D.</b> <p>The swapping area on a disk used by the swapper</p>"
          ],
          "correct_answer": "<b>B.</b> <p>An output device used to print the output of a number of jobs</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1666/gate1998-1-29\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 318,
          "question": "<p>Which of the following is true? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Unless enabled, a CPU will not be able to process interrupts.</p>",
            "<b>B.</b> <p>Loop instructions cannot be interrupted till they complete.</p>",
            "<b>C.</b> <p>A processor checks for interrupts before executing a new instruction.</p>",
            "<b>D.</b> <p>Only level triggered interrupts are possible on microprocessors.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Unless enabled, a CPU will not be able to process interrupts.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1657/gate1998-1-20\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 319,
          "question": "<p>Which of the following addressing modes permits relocation without any change whatsoever in the code? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Indirect addressing</p>",
            "<b>B.</b> <p>Indexed addressing</p>",
            "<b>C.</b> <p>Base register addressing</p>",
            "<b>D.</b> <p>PC relative addressing</p>"
          ],
          "correct_answer": "<b>D.</b> <p>PC relative addressing</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1656/gate1998-1-19\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 320,
          "question": "<p>Which of the following devices should get higher priority in assigning interrupts? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Hard disk</p>",
            "<b>B.</b> <p>Printer</p>",
            "<b>C.</b> <p>Keyboard</p>",
            "<b>D.</b> <p>Floppy disk</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Hard disk</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1655/gate1998-1-18\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 321,
          "question": "<p>A micro instruction is to be designed to specify:<br><br>\na. none or one of the three micro operations of one kind and<br>\nb. none or upto six micro operations of another kind<br><br>\nThe minimum number of bits in the micro-instruction is: <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>9</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>8</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2254/gate1997-5-3\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 322,
          "question": "<p>Contents of A register after the execution of the following 8085 microprocessor program is <br><pre><code>MVIA, 55 H\nMVI C, 25 H\nADDC\nDAA</code></pre> <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>7AH</p>",
            "<b>B.</b> <p>80H</p>",
            "<b>C.</b> <p>50H</p>",
            "<b>D.</b> <p>22H</p>"
          ],
          "correct_answer": "<b>B.</b> <p>80H</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2253/gate1997-5-2\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 323,
          "question": "<p>The correct matching for the following pairs is:<br>\\(\\begin{array}{ll} \\text{(A) DMA I/O} &amp; \\text{(1) High speed RAM} \\\\ \\text{(B) Cache} &amp; \\text{(2) Disk} \\\\ \\text{(C) Interrupt I/O} &amp; \\text{(3) Printer} \\\\ \\text{(D) Condition Code Register} &amp; \\text{(4) ALU} \\\\ \\end{array}\\) <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A-4 B-3 C-1 D-2</p>",
            "<b>B.</b> <p>A-2 B-1 C-3 D-4</p>",
            "<b>C.</b> <p>A-4 B-3 C-2 D-1</p>",
            "<b>D.</b> <p>A-2 B-3 C-4 D-1</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A-2 B-1 C-3 D-4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2230/gate1997-2-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 324,
          "question": "<p>RST 7.5 interrupt in 8085 microprocessor executes the interrupt service routing from interrupt vector location <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0000H</p>",
            "<b>B.</b> <p>0075H</p>",
            "<b>C.</b> <p>003CH</p>",
            "<b>D.</b> <p>0034H</p>"
          ],
          "correct_answer": "<b>C.</b> <p>003CH</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2228/gate1997-2-2\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 325,
          "question": "<p>A micro program control unit is required to generate a total of 25 control signals. Assume that during any micro instruction, at most two control signals are active. Minimum number of bits required in the control word to generate the required control signals will be: <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>2.5</p>",
            "<b>C.</b> <p>10</p>",
            "<b>D.</b> <p>12</p>"
          ],
          "correct_answer": "<b>C.</b> <p>10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2754/gate1996-2-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 326,
          "question": "<p>For the daisy chain scheme of connecting I/O devices, which of the following statements is true? <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It gives non-uniform priority to various devices</p>",
            "<b>B.</b> <p>It gives uniform priority to all devices</p>",
            "<b>C.</b> <p>It is only useful for connecting slow devices to a processor device</p>",
            "<b>D.</b> <p>It requires a separate interrupt pin on the processor for each device</p>"
          ],
          "correct_answer": "<b>A.</b> <p>It gives non-uniform priority to various devices</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2728/gate1996-1-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 327,
          "question": "<p>Number of machine cycles required for RET instruction in 8085 microprocessor is <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>C.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2726/gate1996-1-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 328,
          "question": "<p>A ROM is used to store the table for multiplication of two 8-bit unsigned integers. The size of ROM required is <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(256 \\times 16\\)</p>",
            "<b>B.</b> <p>\\(64 K \\times 8\\)</p>",
            "<b>C.</b> <p>\\(4 K \\times 16\\)</p>",
            "<b>D.</b> <p>\\(64 K \\times 16\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(64 K \\times 16\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2725/gate1996-1-21\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 329,
          "question": "<p>Relative mode of addressing is most relevant to writing: <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Co - routines</p>",
            "<b>B.</b> <p>Position - independent code</p>",
            "<b>C.</b> <p>Shareable code</p>",
            "<b>D.</b> <p>Interrupt Handlers</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Position - independent code</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2720/gate1996-1-16-isro2016-42\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 330,
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
          "id": 331,
          "question": "<p>The capacity of a memory unit is defined by the number of words multiplied by the number of bits/word. How many separate address and data lines are needed for a memory of \\(4K \\times 16\\)? <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10 address, 16 data lines</p>",
            "<b>B.</b> <p>11 address, 8 data lines</p>",
            "<b>C.</b> <p>12 address, 16 data lines</p>",
            "<b>D.</b> <p>12 address, 12 data lines</p>"
          ],
          "correct_answer": "<b>C.</b> <p>12 address, 16 data lines</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2614/gate1995-2-2\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 332,
          "question": "<p>A sequence of two instructions that multiplies the contents of the DE register pair by 2 and stores the result in the HL register pair (in 8085 assembly language) is: <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>XCHG and DAD B</p>",
            "<b>B.</b> <p>XTHL and DAD H</p>",
            "<b>C.</b> <p>PCHL and DAD D</p>",
            "<b>D.</b> <p>XCHG and DAD H</p>"
          ],
          "correct_answer": "<b>D.</b> <p>XCHG and DAD H</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2613/gate1995-2-1\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 333,
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
          "id": 334,
          "question": "<p>In a vectored interrupt: <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The branch address is assigned to a fixed location in memory</p>",
            "<b>B.</b> <p>The interrupting source supplies the branch information to the processor through an interrupt vector</p>",
            "<b>C.</b> <p>The branch address is obtained from a register in the processor</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The interrupting source supplies the branch information to the processor through an interrupt vector</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2590/gate1995-1-3\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 335,
          "question": "<p>Which of the following statements is true? <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>ROM is a Read/Write memory</p>",
            "<b>B.</b> <p>PC points to the last instruction that was executed</p>",
            "<b>C.</b> <p>Stack works on the principle of LIFO</p>",
            "<b>D.</b> <p>All instructions affect the flags</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Stack works on the principle of LIFO</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2589/gate1995-1-2\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 336,
          "question": "<p>A single instruction to clear the lower four bits of the accumulator in 8085 assembly language? <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>XRI 0FH</p>",
            "<b>B.</b> <p>ANI F0H</p>",
            "<b>C.</b> <p>XRI F0H</p>",
            "<b>D.</b> <p>ANI 0FH</p>"
          ],
          "correct_answer": "<b>B.</b> <p>ANI F0H</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2588/gate1995-1-1\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 337,
          "question": "<p>Identify the logic function performed by the circuit shown in figure.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q6.1_1f0bee2f.jpg\"><br> <br><br><strong>(GATE CSE 1993)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>exclusive OR</p>",
            "<b>B.</b> <p>exclusive NOR</p>",
            "<b>C.</b> <p>NAND</p>",
            "<b>D.</b> <p>NOR</p>",
            "<b>E.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>exclusive NOR</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2290/gate1993-6-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 338,
          "question": "<p>Consider the following data path of a simple non-pilelined CPU. The registers\nA, B, A1, A2, MDR, the bus and the ALU are 8-bit wide. SP and MAR are 16-\nbit registers. The MUX is of size 8x(2:1) and the DEMUX is of size 8x(1:2). Each memory operation takes 2 CPU clock cycles and uses MAR (Memory\nAddress Register) and MDR (Memory Date Register). SP can be decremented\nlocally. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q38_b8097889.jpg\"><br> The CPU instruction \"push r\", where = A or B, has the specification <br><br>\nM[SP]\\(\\rightarrow\\)r<br>\nSP \\(\\rightarrow\\) SP - 1<br><br>\nHow many CPU clock cycles are needed to execute the \"push r\" instruction ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>D.</b> <p>5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/731/gate2001-2-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 339,
          "question": "<p>Which is the most appropriate match for the items in the first column with the\nitems in the second column <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q34_3270de0d.jpg\"> <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(X, III) (Y, I) (Z, II)</p>",
            "<b>B.</b> <p>(X, II) (Y, III) (Z, I)</p>",
            "<b>C.</b> <p>(X, III) (Y, II) (Z, I)</p>",
            "<b>D.</b> <p>(X, I) (Y, III) (Z, II)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>(X, III) (Y, I) (Z, II)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/727/gate2001-2-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 340,
          "question": "<p>A CPU has two modes-privileged and non-privileged. In order to change the\nmode from privileged to non-privileged <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A hardware interrupt is needed.</p>",
            "<b>B.</b> <p>A software interrupt is needed.</p>",
            "<b>C.</b> <p>A privileged instruction (which does not generate an interrupt) is needed</p>",
            "<b>D.</b> <p>a non-privileged instruction (which does not generate an interrupt is needed</p>"
          ],
          "correct_answer": "<b>D.</b> <p>a non-privileged instruction (which does not generate an interrupt is needed</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/706/gate2001-1-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 341,
          "question": "<p>A processor needs software interrupt to <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Test the interrupt system of the processor.</p>",
            "<b>B.</b> <p>Implement co-routines.</p>",
            "<b>C.</b> <p>Obtain system services which need execution of privileged instructions.</p>",
            "<b>D.</b> <p>Return from subroutine</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Obtain system services which need execution of privileged instructions.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/705/gate2001-1-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 342,
          "question": "<p>Suppose a processor does not have any stack pointer register. Which of the\nfollowing statements is true ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It cannot have subroutine call instruction</p>",
            "<b>B.</b> <p>It can have subroutine call instruction, but no nested subroutine calls.</p>",
            "<b>C.</b> <p>Nested subroutine calls are possible, but interrupts are not.</p>",
            "<b>D.</b> <p>All sequences of subroutine calls and also interrupts are possible</p>"
          ],
          "correct_answer": "<b>B.</b> <p>It can have subroutine call instruction, but no nested subroutine calls.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/703/gate2001-1-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 343,
          "question": "<p>A low memory can be connected to 8085 by using <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>INTER</p>",
            "<b>B.</b> <p>\\(\\overline{RESET \\;IN}\\)</p>",
            "<b>C.</b> <p>HOLD</p>",
            "<b>D.</b> <p>READY</p>"
          ],
          "correct_answer": "<b>D.</b> <p>READY</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/702/gate2001-1-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 344,
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
        },
        {
          "id": 345,
          "question": "<p>PCHL is an instruction in 8085 which transfers the contents of the register\npair HL to PC. This is not a very commonly used instruction as it changes the\nflow of control in rather 'unstructured' fashion. This instruction can be useful\nin implementing. <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>if ... then ... else ... construct</p>",
            "<b>B.</b> <p>while .. construct</p>",
            "<b>C.</b> <p>case .. construct</p>",
            "<b>D.</b> <p>call ... construct</p>"
          ],
          "correct_answer": "<b>D.</b> <p>call ... construct</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/558/gate1992-02-iv\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 346,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:<br>\nBit-slice processors <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>can be cascaded to get any desired word length processor</p>",
            "<b>B.</b> <p>speed of operation is independent of the word length configured</p>",
            "<b>C.</b> <p>do not contain anything equivalent of program counter in a 'normal' microprocessor</p>",
            "<b>D.</b> <p>Contain only the data path of a 'normal' CPU</p>"
          ],
          "correct_answer": "<b>A.</b> <p>can be cascaded to get any desired word length processor</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "It's Out of Syllabus now.<br><a href=\"https://gateoverflow.in/557/gate1992-02-iii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 347,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:<br>The ALE line of  an 8085 microprocessor is used to: <br><br><strong>(GATE CSE 1991)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Latch the output of an I/O instruction into an external latch.</p>",
            "<b>B.</b> <p>Deactivate the chip-select signal from memory devices.</p>",
            "<b>C.</b> <p>Latch the 8 bits of address lines AD7-AD0 into  an external latch.</p>",
            "<b>D.</b> <p>Find the interrupt enable status of the TRAP interrupt.</p>",
            "<b>E.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Latch the 8 bits of address lines AD7-AD0 into  an external latch.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/520/gate1991-03-v\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 348,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:\n<br>\nThe TRAP interrupts mechanism of the 8085 microprocessor: <br><br><strong>(GATE CSE 1991)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>executes an RST by hardware</p>",
            "<b>B.</b> <p>executes an instruction supplied by an external device through the INTA signal</p>",
            "<b>C.</b> <p>executes an instruction from memory location 20H</p>",
            "<b>D.</b> <p>executes a NOP</p>",
            "<b>E.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>E.</b> <p>none of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/518/gate1991-03-iv\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 349,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:\n<br>The advantages of CMOS technology over a MOS is: <br><br><strong>(GATE CSE 1991)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>lower power dissipation</p>",
            "<b>B.</b> <p>greater speed</p>",
            "<b>C.</b> <p>smaller chip size</p>",
            "<b>D.</b> <p>fewer masks for fabrication</p>",
            "<b>E.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>greater speed</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/515/gate1991-03-i\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 350,
          "question": "<p>On receiving an interrupt from a I/O device the CPU: <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Halts for a predetermined time.</p>",
            "<b>B.</b> <p>Hands over control of address bus and data bus to the interrupting device.</p>",
            "<b>C.</b> <p>Branches off to the interrupt service routine immediately.</p>",
            "<b>D.</b> <p>Branches off to the interrupt service routine after completion of the current instruction.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Branches off to the interrupt service routine after completion of the current instruction.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80274/gate1987-1-viii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 351,
          "question": "<p>A microprogrammed control unit <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Is faster than a hard-wired control unit.</p>",
            "<b>B.</b> <p>Facilitates easy implementation of new instruction.</p>",
            "<b>C.</b> <p>Is useful when very small programs are to be run.</p>",
            "<b>D.</b> <p>Usually refers to the control unit of a microprocessor.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Facilitates easy implementation of new instruction.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80199/gate1987-1-vi\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 352,
          "question": "<p>The most relevant addressing mode to write position-independent codes is: <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Direct mode</p>",
            "<b>B.</b> <p>Indirect mode</p>",
            "<b>C.</b> <p>Relative mode</p>",
            "<b>D.</b> <p>Indexed mode</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Relative mode</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80194/gate1987-1-v\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 353,
          "question": "<p>Microprogrammed control unit: <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>is faster than a hardwired control unit</p>",
            "<b>B.</b> <p>facilitates easy implementation of new instructions</p>",
            "<b>C.</b> <p>is useful when very small programs are to be run</p>",
            "<b>D.</b> <p>usually refers to control unit of a microprocessor</p>"
          ],
          "correct_answer": "<b>B.</b> <p>facilitates easy implementation of new instructions</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/166/gate1987-1-vi\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 354,
          "question": "<p>The data transfer rate of a double-density floppy disk system is about: <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5K bits/sec</p>",
            "<b>B.</b> <p>50K bits/sec</p>",
            "<b>C.</b> <p>500K bits/sec</p>",
            "<b>D.</b> <p>5000K bits/sec</p>"
          ],
          "correct_answer": "<b>C.</b> <p>500K bits/sec</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80281/gate1987-1-x\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 355,
          "question": "<p>The refreshing rate of dynamic RAMs is in the range of <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2 microseconds</p>",
            "<b>B.</b> <p>2 milliseconds.</p>",
            "<b>C.</b> <p>50 milli seconds</p>",
            "<b>D.</b> <p>500 milliseconds</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2 milliseconds.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80278/gate1987-1-ix\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
