window.__examLoadCallback({
  "title": "Computer_Organization - Computer_Organization - Slot 15",
  "duration": 42,
  "sections": [
    {
      "name": "Computer_Organization",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
