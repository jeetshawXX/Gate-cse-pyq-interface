window.__examLoadCallback({
  "title": "Pipeline_Processor - Pipeline_Processor - Slot 4",
  "duration": 33,
  "sections": [
    {
      "name": "Pipeline_Processor",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
        }
      ]
    }
  ]
});
