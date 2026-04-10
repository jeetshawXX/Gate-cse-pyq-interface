window.__examLoadCallback({
  "title": "Computer_Organization - Computer_Organization - Slot 5",
  "duration": 42,
  "sections": [
    {
      "name": "Computer_Organization",
      "questions": [
        {
          "id": 1,
          "question": "<p>Instructions execution in a processor is divided into 5 stages. Instruction Fetch (IF),\nInstruction Decode (ID) , Operand Fetch (OF), Execute (EX), and Write Back (WB), These\nstages take 5,4,20, 10 and 3 nanoseconds (ns) respectively. A pipelined implementation of\nthe processor requires buffering between each pair of consecutive stages with a delay of 2ns. <br>\nTwo pipelined implementations of the processor are contemplated.<br><br>\n(i) a naive pipeline implementation (NP) with 5 stages and <br>\n(ii) an efficient pipeline (EP) where the OF stage id divided into stages OF1 and OF2\nwith execution times of 12 ns and 8 ns respectively. <br><br>\nThe speedup (correct to two decimals places) achieved by EP over NP in executing 20\nindependent instructions with no hazards is ________________. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.49",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118719/gate2017-1-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider a RISC machine where each instruction is exactly 4 bytes long. Conditional and\nunconditional branch instructions use PC- relative addressing mode with Offset specified in\nbytes to the target location of the branch instruction. Further the Offset is always with respect\nto the address of the next instruction in the program sequence. Consider the following\ninstruction sequence.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q28_d9c8664a.jpg\"><br>\nIf the target of the branch instruction is i, then the decimal value of the Offset is __________ <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "-16",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118332/gate2017-1-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider a two-level cache hierarchy with L1 and L2 caches. An application incurs 1.4\nmemory accesses per instruction on average. For this application, the miss rate of L1 cache 0.1, the L2 cache experiences, on average, 7 misses per 1000 instructions. The miss rate of L2 expressed correct to two decimal places is ___________. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0.05",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118305/gate2017-1-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
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
          "id": 5,
          "question": "<p>A file system uses an in-memory cache to cache disk blocks.The miss rate of the cache is shown in the figure. The latency to read a block from the cache is 1 ms and to read a block from the disk is 10ms. Assume that the cost of checking whether a block exists in the cache is negligible. Available cache sizes are in multiples of 10MB. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q50_ff9c459d.jpg\"> <br>The smallest cache size required to ensure an average read latency of less than 6ms is_________\nMB. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "30",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39592/gate2016-2-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider a 3GHz (gigahertz) processor with a three-stage pipeline and stage latencies \\(\\tau _{1}\\), \\(\\tau _{2}\\), and \\(\\tau _{3}\\) such that \\(\\tau _{1}=3\\tau _{2}/4=2\\tau _{3}\\). If the longest pipeline stage is split into two pipeline stages of equal latency, the new frequency is _____GHz, ignoring delays in the pipeline registers. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3.9",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39580/gate2016-2-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>The width of the physical address on a machine is 40 bits. The width of the tag field in a 512KB 8-way set associative cache is ________ bits. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "24",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39622/gate2016-2-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider a processor with 64 registers  and an instruction set of size twelve. Each instruction has five distinct fields, namely, opcode, two source register identifiers, one destination register identifier, and a twelve-bit immediate value. Each instruction must be stored in memory in  byte-aligned fashion. If a program has 100 instructions, the amount of memory(in bytes) consumed by the program text is _____ . <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "500",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39601/gate2016-2-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Suppose the functions F and G can be computed in 5 and 3 nano seconds by functional units \\(U_{F}\\) and \\(U_{G}\\), respectively. Given two instances of \\(U_{F}\\) and two instances of \\(U_{G}\\), it is required to implement the computation \\(F(G(X_{i}))\\) for \\(1\\leq i\\leq 10\\). Ignoring all other delays, the minimum time required to complete this computation is ________ nanoseconds. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "28",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39627/gate-cse-2016-set-2-question-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>A processor has 40 distinct instructions and 24 general purpose registers. A 32-bit instruction word has an opcode, two register operands and an immediate operand. The number of bits available for the immediate operand field is _______ . <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "16",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39547/gate2016-2-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>The stage delays in a 4-stage pipeline are 800,500,400 and 300 picoseconds.The first stage (with delay 800 picoseconds)is replaced with a functionally equivalent design involving two stages with respective delays 600 and 350 picoseconds.The throughput increase of the pipeline is ________ percent. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "33",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39691/gate2016-1-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>The size of the data count register of a DMA controller is 16 bits.The processor needs to transfer a file of 29,154 kilobytes from disk to main memory.The memory is byte addressable. The minimum number of times the DMA control lerneeds to get the control of the systembus from the processor to transfer the file from the disk to main memory is ____. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "456",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39698/gate2016-1-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
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
          "id": 14,
          "question": "<p>Consider the following reservation table for a pipeline having three stages S1,S2 and S3.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Computer_Organization\\q38_2b8ca31a.jpg\"><br> The minimum average latency (MAL) is ________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8560/gate2015-3-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
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
        }
      ]
    }
  ]
});
