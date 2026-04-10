window.__examLoadCallback({
  "title": "Computer_Organization - Computer_Organization - Slot 19",
  "duration": 42,
  "sections": [
    {
      "name": "Computer_Organization",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
