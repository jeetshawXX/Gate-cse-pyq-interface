window.__examLoadCallback({
  "title": "CO & Architecture - Pipelining",
  "duration": 119,
  "sections": [
    {
      "name": "Pipelining",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"1512\"></a><div itemprop=\"text\">An instruction pipeline consists of \\( 4 \\) stages – Fetch \\( (F) \\), Decode field \\( (D) \\), Execute \\( (E) \\) and Result Write \\( (W) \\). The \\( 5 \\) instructions in a certain instruction sequence need these stages for the different number of clock cycles as shown by the table below \\[ \\begin{array}{|c|c|c|c|c|} \\hline \\textbf{Instruction} &amp; \\textbf {F} &amp;\\textbf {D} &amp; \\textbf {E} &amp; &nbsp;\\textbf{W } \\\\\\hline \\textbf{1}&amp; 1 &amp; 2 &nbsp;&amp; 1 &amp; 1 \\\\\\hline \\textbf{2} &amp; 1 &amp; 2 &amp; 2 &nbsp;&amp; 1\\\\\\hline &nbsp;\\textbf{3}&amp; 2 &amp; 1 &nbsp;&amp; 3 &amp; 2 \\\\\\hline \\textbf{4} &amp; 1 &amp; 3 &amp; 2 &nbsp;&amp; 1 \\\\\\hline \\textbf{5} &amp; 1 &amp; 2 &amp; 1 &nbsp;&amp; 2 \\\\\\hline \\end{array} \\] Find the number of clock cycles needed to perform the \\( 5 \\) instructions.</div><br><br><b>GATE CSE 1999 | Question: 13</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "15",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/1512/gate-cse-1999-question-13\" target=\"_blank\">https://gateoverflow.in/1512/gate-cse-1999-question-13</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"631\"></a><div itemprop=\"text\"><p>Comparing the time T1 taken for a single instruction on a pipelined CPU with time T2 taken on a non-pipelined but identical CPU, we can say that</p>\n\n\n\n</div><br><br><b>GATE CSE 2000 | Question: 1.8</b></p>",
          "type": "single",
          "options": [
            "<p>T1&nbsp;≤ T2</p>",
            "<p>T1&nbsp;≥ T2</p>",
            "<p>T1&nbsp;&lt; T2</p>",
            "<p>T1 and T2 plus the time taken for one instruction fetch cycle</p>"
          ],
          "correct_answer": "<p>T1&nbsp;≥ T2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/631/gate-cse-2000-question-1-8\" target=\"_blank\">https://gateoverflow.in/631/gate-cse-2000-question-1-8</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"683\"></a><div itemprop=\"text\"><p>An instruction pipeline has five stages where each stage take 2 nanoseconds&nbsp;and all instruction use all five stages. Branch instructions are not overlapped.&nbsp;i.e., the instruction after the branch is not fetched till the branch instruction is&nbsp;completed. Under ideal conditions,</p>\n\n</div><br><br><b>GATE CSE 2000 | Question: 12</b></p>",
          "type": "numeric",
          "options": [
            "<p>Calculate the average instruction execution time assuming that 20% of all&nbsp;instructions executed are branch instruction. Ignore the fact that some&nbsp;branch instructions may be conditional.</p>",
            "<p>If a branch instruction is a conditional branch instruction, the branch need&nbsp;not be taken. If the branch is not taken, the&nbsp;following&nbsp;instructions can be&nbsp;overlapped. When 80% of all branch instructions are conditional branch&nbsp;instructions, and 50% of the conditional branch instructions are such that the&nbsp;branch is taken, calculate the average instruction execution time.</p>"
          ],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/683/gate-cse-2000-question-12\" target=\"_blank\">https://gateoverflow.in/683/gate-cse-2000-question-12</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"753\"></a><div itemprop=\"text\"><p>Consider a \\( 5- \\)stage pipeline - IF (Instruction Fetch), ID (Instruction Decode and register read), EX (Execute), MEM (memory), and WB (Write Back). All (memory or register) reads take place in the second phase of a clock cycle and all writes occur in the first phase. Consider the execution of the following instruction sequence:</p>\n\n<p>\\[ \\begin{array}{|l|l|} \\hline \\text{I1:} &amp; \\text{sub&nbsp;\\( r 2,r 3,r 4 \\)} &amp; \\text{/*}\\quad&nbsp; r2 \\leftarrow r3 - r4 \\quad\\text{*/} \\\\\\hline&nbsp;\\text{I2:} &amp; \\text{sub&nbsp;\\( r 4,r 2,r 3 \\)} &amp; \\text{/*}\\quad r4&nbsp;\\leftarrow r2 - r3 \\quad\\text{*/}&nbsp;\\\\\\hline \\text{I3:}&nbsp;&amp;&nbsp;&nbsp;\\text{sw&nbsp;\\( r2,100(r1) \\)} &amp; \\text{/*}\\quad\\text{\\( M[r1 + 100] \\)} \\leftarrow \\text{r2}&nbsp; \\quad\\text{*/}\\\\\\hline \\text{I4:}&nbsp;&amp;&nbsp;&nbsp;\\text{sub&nbsp;\\( r 3,r 4,r 2 \\)} &amp; \\text{/*}\\quad r3&nbsp;\\leftarrow&nbsp; r4&nbsp;- r2 \\quad\\text{*/}&nbsp;\\\\\\hline\\end{array} \\]</p>\n\n</div><br><br><b>GATE CSE 2001 | Question: 12</b></p>",
          "type": "numeric",
          "options": [
            "<p>Show all data dependencies between the four instructions.</p>",
            "<p>Identify the data hazards.</p>",
            "<p>Can all hazards be avoided by forwarding in this case.</p>"
          ],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/753/gate-cse-2001-question-12\" target=\"_blank\">https://gateoverflow.in/753/gate-cse-2001-question-12</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"836\"></a><div itemprop=\"text\"><p>The performance of a pipelined processor suffers if:</p>\n\n</div><br><br><b>GATE CSE 2002 | Question: 2.6, ISRO2008-19</b></p>",
          "type": "single",
          "options": [
            "<p>the pipeline stages have different delays</p>",
            "<p>consecutive instructions are dependent on each other</p>",
            "<p>the pipeline stages share hardware resources</p>",
            "<p>All of the above</p>"
          ],
          "correct_answer": "<p>All of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/836/gate-cse-2002-question-2-6-isro2008-19\" target=\"_blank\">https://gateoverflow.in/836/gate-cse-2002-question-2-6-isro2008-19</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"901\"></a><div itemprop=\"text\"><p>For a pipelined CPU with a single ALU, consider the following situations</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>\n\t<p>The \\( {j+1}^{st} \\) instruction uses the result of the \\( j^{th} \\) instruction as an operand</p>\n\t</li>\n\t<li>\n\t<p>The execution of a conditional jump instruction</p>\n\t</li>\n\t<li>\n\t<p>The \\( j^{th} \\) and \\( {j+1}^{st} \\) instructions require the ALU at the same time.</p>\n\t</li>\n</ol>\n\n<p>Which of the above can cause a hazard</p>\n\n</div><br><br><b>GATE CSE 2003 | Question: 10, ISRO-DEC2017-41</b></p>",
          "type": "single",
          "options": [
            "<p>I and II only</p>",
            "<p>II and III only</p>",
            "<p>III only</p>",
            "<p>All the three</p>"
          ],
          "correct_answer": "<p>All the three</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/901/gate-cse-2003-question-10-isro-dec2017-41\" target=\"_blank\">https://gateoverflow.in/901/gate-cse-2003-question-10-isro-dec2017-41</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"1063\"></a><div itemprop=\"text\"><p>A 4-stage pipeline has the stage delays as \\( 150 \\), \\( 120 \\), \\( 160 \\) and \\( 140 \\) \\( nanoseconds \\), respectively. Registers that are used between the stages have a delay of \\( 5 \\) \\( nanoseconds \\) each. Assuming constant clocking rate, the total time taken to process \\( 1000 \\) data items on this pipeline will be:</p>\n\n</div><br><br><b>GATE CSE 2004 | Question: 69</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{120.4 microseconds} \\)</p>",
            "<p>\\( \\text{160.5 microseconds} \\)</p>",
            "<p>\\( \\text{165.5 microseconds} \\)</p>",
            "<p>\\( \\text{590.0 microseconds} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{165.5 microseconds} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1063/gate-cse-2004-question-69\" target=\"_blank\">https://gateoverflow.in/1063/gate-cse-2004-question-69</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"1391\"></a><div itemprop=\"text\"><p>A \\( 5 \\) stage pipelined CPU has the following sequence of stages:</p>\n\n<ul>\n\t<li>IF – instruction fetch from instruction memory</li>\n\t<li>RD – Instruction decode and register read</li>\n\t<li>EX – Execute: ALU operation for data and address computation</li>\n\t<li>MA – Data memory access – for write access, the register read at RD state is used.</li>\n\t<li>WB – Register write back</li>\n</ul>\n\n<p>Consider the following sequence of instructions:</p>\n\n<ul>\n\t<li>\\( I_1 \\): \\( L \\) \\( R0, loc \\) \\( 1 \\); \\( R0 \\Leftarrow M[loc1] \\)</li>\n\t<li>\\( I_2 \\): \\( A \\) \\( R0 \\), \\( R0 \\); \\( R0 \\Leftarrow R0 +R0 \\)</li>\n\t<li>\\( I_3 \\): \\( S \\) \\( R2 \\), \\( R0 \\); \\( R2 \\Leftarrow R2-R0 \\)</li>\n</ul>\n\n<p>Let each stage take one clock cycle.</p>\n\n<p>What is the number of clock cycles taken to complete the above sequence of instructions starting from the fetch of \\( I_1 \\)?</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 68</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 8 \\)</p>",
            "<p>\\( 10 \\)</p>",
            "<p>\\( 12 \\)</p>",
            "<p>\\( 15 \\)</p>"
          ],
          "correct_answer": "<p>\\( 8 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1391/gate-cse-2005-question-68\" target=\"_blank\">https://gateoverflow.in/1391/gate-cse-2005-question-68</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"1818\"></a><div itemprop=\"text\"><p>A CPU has a five-stage pipeline and runs at \\( 1 \\) GHz frequency. Instruction fetch&nbsp;happens in the first stage of the pipeline. A conditional branch instruction&nbsp;computes the target address and evaluates the condition in the third stage of the&nbsp;pipeline. The processor stops fetching new instructions following a conditional&nbsp;branch until the branch outcome is known. A program executes \\( 10^9 \\) instructions&nbsp;out of which \\( 20\\% \\) are conditional branches. If each instruction takes one cycle to&nbsp;complete on average, the total execution time of the program is:&nbsp;</p>\n\n</div><br><br><b>GATE CSE 2006 | Question: 42</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{1.0 second} \\)</p>",
            "<p>\\( \\text{1.2 seconds} \\)</p>",
            "<p>\\( \\text{1.4 seconds} \\)</p>",
            "<p>\\( \\text{1.6 seconds} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{1.4 seconds} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1818/gate-cse-2006-question-42\" target=\"_blank\">https://gateoverflow.in/1818/gate-cse-2006-question-42</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"1235\"></a><div itemprop=\"text\"><p>Consider a pipelined processor with the following four stages:</p>\n\n<ul>\n<li>IF: Instruction Fetch</li>\n<li>ID: Instruction Decode and Operand Fetch</li>\n<li>EX: Execute</li>\n<li>WB: Write Back</li>\n</ul>\n\n<p>The IF, ID and WB stages take one clock cycle each to complete the operation. The number of clock cycles for the EX stage depends on the instruction. The ADD and SUB instructions need \\( 1 \\) clock cycle and the MUL instruction needs \\( 3 \\) clock cycles in the EX stage. Operand forwarding is used in the pipelined processor. What is the number of clock cycles taken to complete the following sequence of instructions?<br>\n\\[ \\begin{array}{ll}&nbsp;\\textbf{ADD} &amp; \\text{R2, R1, R0} &amp;&amp;&amp; \\text{R2 \\( \\leftarrow \\) R1\\( + \\)R0} \\\\&nbsp; \\textbf{MUL} &amp; \\text{R4, R3, R2} &amp;&amp;&amp; \\text{R4 \\( \\leftarrow \\) R3\\( * \\)R2} \\\\&nbsp; &nbsp;\\textbf{SUB} &amp; \\text{R6, R5, R4} &amp;&amp;&amp; \\text{R6 \\( \\leftarrow \\) R5\\( - \\)R4} \\\\&nbsp; &nbsp;\\end{array} \\]</p>\n\n</div><br><br><b>GATE CSE 2007 | Question: 37, ISRO2009-37</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 7 \\)</p>",
            "<p>\\( 8 \\)</p>",
            "<p>\\( 10 \\)</p>",
            "<p>\\( 14 \\)</p>"
          ],
          "correct_answer": "<p>\\( 8 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1235/gate-cse-2007-question-37-isro2009-37\" target=\"_blank\">https://gateoverflow.in/1235/gate-cse-2007-question-37-isro2009-37</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"447\"></a><div itemprop=\"text\"><p>Which of the following are NOT true in a pipelined processor?</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>Bypassing can handle all RAW hazards</li>\n\t<li>Register renaming can eliminate all register carried WAR hazards</li>\n\t<li>Control hazard penalties can be eliminated by dynamic branch prediction</li>\n</ol>\n\n</div><br><br><b>GATE CSE 2008 | Question: 36</b></p>",
          "type": "single",
          "options": [
            "<p>I and II only</p>",
            "<p>I and III only</p>",
            "<p>II and III only&nbsp;</p>",
            "<p>I, II and III</p>"
          ],
          "correct_answer": "<p>I and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/447/gate-cse-2008-question-36\" target=\"_blank\">https://gateoverflow.in/447/gate-cse-2008-question-36</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"496\"></a><div itemprop=\"text\">\n<p>Delayed branching can help in the handling of control hazards</p>\n\n<p>For all delayed conditional branch instructions, irrespective of whether the condition evaluates to true or false,</p>\n\n\n</div><br><br><b>GATE CSE 2008 | Question: 76</b></p>",
          "type": "single",
          "options": [
            "<p>The instruction following the conditional branch instruction in memory is executed</p>",
            "<p>The first instruction in the fall through path is executed</p>",
            "<p>The first instruction in the taken path is executed</p>",
            "<p>The branch takes longer to execute than any other instruction</p>"
          ],
          "correct_answer": "<p>The instruction following the conditional branch instruction in memory is executed</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/496/gate-cse-2008-question-76\" target=\"_blank\">https://gateoverflow.in/496/gate-cse-2008-question-76</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"43487\"></a><div itemprop=\"text\">\n<p>Delayed branching can help in the handling of control hazards</p>\n\n<p>The following code is to run on a pipelined processor with one branch delay slot:</p>\n\n<p>I1: ADD \\( R2 \\leftarrow R7 + R8 \\)</p>\n\n<p>I2: Sub \\( R4 \\leftarrow R5 – R6 \\)</p>\n\n<p>I3: ADD \\( R1 \\leftarrow R2 + R3 \\)</p>\n\n<p>I4: STORE Memory \\( [R4] \\leftarrow R1 \\)</p>\n\n<p>&nbsp; &nbsp; &nbsp;BRANCH to Label if \\( R1 == 0 \\)</p>\n\n<p>Which of the instructions I1, I2, I3 or I4 can legitimately occupy the delay slot without any program modification?</p>\n\n\n</div><br><br><b>GATE CSE 2008 | Question: 77</b></p>",
          "type": "single",
          "options": [
            "<p><span style=\"line-height: 1.6;\">I1</span></p>",
            "<p><span style=\"line-height: 1.6;\">I2</span></p>",
            "<p><span style=\"line-height: 1.6;\">I3</span></p>",
            "<p><span style=\"line-height: 1.6;\">I4</span></p>"
          ],
          "correct_answer": "<p><span style=\"line-height: 1.6;\">I4</span></p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43487/gate-cse-2008-question-77\" target=\"_blank\">https://gateoverflow.in/43487/gate-cse-2008-question-77</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"1314\"></a><div itemprop=\"text\"><p>Consider a \\( 4 \\) stage pipeline processor. The number of cycles needed by the four instructions \\( I1, I2, I3, I4 \\) in stages \\( S1, S2, S3, S4 \\) is shown below:</p>\n\n<p>\\[ \\begin{array}{|c|c|c|c|c|} \\hline \\textbf{} &amp; \\textbf {S1} &amp;\\textbf {S2} &amp; \\textbf {S3} &amp; &nbsp;\\textbf{S4 } \\\\\\hline \\textbf{I1}&amp; 2 &amp;&nbsp;1&nbsp;&nbsp;&amp; 1 &amp; 1 \\\\\\hline \\textbf{I2} &amp; 1&nbsp;&amp; 3 &amp; 2&nbsp;&nbsp;&amp; 2\\\\\\hline&nbsp;&nbsp;\\textbf{I3}&amp; 2 &amp;&nbsp;1&nbsp;&nbsp;&amp; 1 &amp; 3 \\\\\\hline \\textbf{I4} &amp; 1&nbsp;&amp; 2 &amp; 2&nbsp;&nbsp;&amp; 2 \\\\\\hline&nbsp; \\end{array} \\]</p>\n\n<p>&nbsp;</p>\n\n<p>What is the number of cycles needed to execute the following loop?</p>\n\n<p>For (i=1 to 2) {I1; I2; I3; I4;}</p>\n\n</div><br><br><b>GATE CSE 2009 | Question: 28</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 16 \\)</p>",
            "<p>\\( 23 \\)</p>",
            "<p>\\( 28 \\)</p>",
            "<p>\\( 30 \\)</p>"
          ],
          "correct_answer": "<p>\\( 23 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1314/gate-cse-2009-question-28\" target=\"_blank\">https://gateoverflow.in/1314/gate-cse-2009-question-28</a></p>"
        },
        {
          "id": 15,
          "question": "<p><a name=\"2207\"></a><div itemprop=\"text\"><p>A \\( 5- \\)stage pipelined processor has Instruction Fetch (IF), Instruction Decode (ID), Operand Fetch (OF), Perform Operation (PO) and Write Operand (WO) stages. The IF, ID, OF and WO stages take \\( 1 \\) clock cycle each for any instruction. The PO stage takes \\( 1 \\) clock cycle for ADD and SUB instructions, \\( 3 \\) clock cycles for MUL instruction and \\( 6 \\) clock cycles for DIV instruction respectively. Operand forwarding is used in the pipeline. What is the number of clock cycles needed to execute the following sequence of instructions?</p>\n\n<p>\\[ \\begin{array}{|c|l||} \\hline &nbsp;\\textbf {Instruction} &amp; &nbsp;\\textbf{Meaning of instruction} &nbsp;\\\\\\hline &nbsp;\\text{\\( t _0 \\): MUL&nbsp;\\( R _2 \\),\\( R _0 \\),\\( R _1 \\)}&nbsp;&amp;&nbsp;\\text{R}_2&nbsp; \\gets \\text{R}_0*\\text{R}_1\\\\\\hline &nbsp;\\text{\\( t _1 \\): DIV \\( R _5,R _3,R _4 \\)}&nbsp;&amp; \\text{R}_5 \\gets \\text{R}_3 ∕&nbsp;\\text{R}_4\\\\\\hline&nbsp;&nbsp;&nbsp;\\text{\\( t _2 \\): ADD&nbsp;\\( R _2,R _5,R _2 \\)}&nbsp;&amp;&nbsp;\\text{R}_2 \\gets \\text{R}_5 + \\text{R}_2&nbsp;\\\\\\hline t_3: \\text{SUB} \\:\\text{R}_5,\\text{R}_2,\\text{R}_6 &amp;&nbsp;\\text{R}_5 \\gets \\text{R}_2 - \\text{R}_6&nbsp;&nbsp;\\\\\\hline\\end{array} \\]</p>\n\n</div><br><br><b>GATE CSE 2010 | Question: 33</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 13 \\)</p>",
            "<p>\\( 15 \\)</p>",
            "<p>\\( 17 \\)</p>",
            "<p>\\( 19 \\)</p>"
          ],
          "correct_answer": "<p>\\( 15 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2207/gate-cse-2010-question-33\" target=\"_blank\">https://gateoverflow.in/2207/gate-cse-2010-question-33</a></p>"
        },
        {
          "id": 16,
          "question": "<p><a name=\"2143\"></a><div itemprop=\"text\"><p>Consider an instruction pipeline with four stages \\( \\text{(S1, S2, S3 and S4)} \\) each with combinational circuit only. The pipeline registers are required between each stage and at the end of the last stage. Delays for the stages and for the pipeline registers are as given in the figure.</p>\n\n<p style=\"text-align:center\"><img alt=\"\" src=\"images/gateOverflow_pyq_images/co___architecture___pipelining/a114bfa9dc2ce537e5d65c38298ecf5f.png\" width=\"650\"></p>\n\n<p>What is the approximate speed up of the pipeline in steady state under ideal conditions when compared to the corresponding non-pipeline implementation?</p>\n\n</div><br><br><b>GATE CSE 2011 | Question: 41</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 4.0 \\)</p>",
            "<p>\\( 2.5 \\)</p>",
            "<p>\\( 1.1 \\)</p>",
            "<p>\\( 3.0 \\)</p>"
          ],
          "correct_answer": "<p>\\( 2.5 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2143/gate-cse-2011-question-41\" target=\"_blank\">https://gateoverflow.in/2143/gate-cse-2011-question-41</a></p>"
        },
        {
          "id": 17,
          "question": "<p><a name=\"52\"></a><div itemprop=\"text\"><p>Register renaming is done in pipelined processors:</p>\n\n</div><br><br><b>GATE CSE 2012 | Question: 20,  ISRO2016-23</b></p>",
          "type": "single",
          "options": [
            "<p>as an alternative to register allocation at compile time</p>",
            "<p>for efficient access to function parameters and local variables</p>",
            "<p>to handle certain kinds of hazards</p>",
            "<p>as part of address translation</p>"
          ],
          "correct_answer": "<p>to handle certain kinds of hazards</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/52/gate-cse-2012-question-20-isro2016-23\" target=\"_blank\">https://gateoverflow.in/52/gate-cse-2012-question-20-isro2016-23</a></p>"
        },
        {
          "id": 18,
          "question": "<p><a name=\"330\"></a><div itemprop=\"text\"><p>Consider an instruction pipeline with five stages without any branch prediction:</p>\n\n<p>Fetch Instruction&nbsp;(FI), Decode Instruction (DI), Fetch Operand (FO), Execute Instruction (EI) and Write Operand&nbsp;(WO). The stage delays for FI, DI, FO, EI and WO are&nbsp;\\( \\text{5 ns, 7 ns, 10 ns, 8 ns and 6 ns}, \\) respectively. There are intermediate storage buffers after each stage and the delay of each buffer is \\( 1\\ \\text{ns}. \\) A program consisting of \\( 12 \\) instructions \\( \\text{I1, I2, I3,}\\ldots,\\text{ I12} \\) is executed in this pipelined processor. Instruction \\( \\text{I4} \\) is the only branch instruction and its branch target is \\( \\text{I9}. \\) If the branch is taken during the execution of this program, the time (in ns) needed to complete the program is</p>\n\n</div><br><br><b>GATE CSE 2013 | Question: 45</b></p>",
          "type": "single",
          "options": [
            "<p>&nbsp;\\( 132 \\)&nbsp; &nbsp;</p>",
            "<p>&nbsp;\\( 165 \\)&nbsp;</p>",
            "<p>&nbsp;\\( 176 \\)</p>",
            "<p>&nbsp;\\( 328 \\)</p>"
          ],
          "correct_answer": "<p>&nbsp;\\( 165 \\)&nbsp;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/330/gate-cse-2013-question-45\" target=\"_blank\">https://gateoverflow.in/330/gate-cse-2013-question-45</a></p>"
        },
        {
          "id": 19,
          "question": "<p><a name=\"1921\"></a><div itemprop=\"text\">Consider a \\( 6 \\)-stage instruction pipeline, where all stages are perfectly balanced. Assume that there is no cycle-time overhead of pipelining. When an application is executing on this \\( 6 \\)-stage pipeline, the speedup achieved with respect to non-pipelined execution if \\( 25 \\)% of the instructions incur \\( 2 \\) pipeline stall cycles is ____________</div><br><br><b>GATE CSE 2014 Set 1 | Question: 43</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/1921/gate-cse-2014-set-1-question-43\" target=\"_blank\">https://gateoverflow.in/1921/gate-cse-2014-set-1-question-43</a></p>"
        },
        {
          "id": 20,
          "question": "<p><a name=\"2077\"></a><div itemprop=\"text\">An instruction pipeline has five stages, namely, instruction fetch (IF), instruction decode and register fetch (ID/RF), instruction execution (EX), memory access (MEM), and register writeback (WB) with stage latencies \\( 1 \\) ns, \\( 2.2  \\) ns, \\( 2 \\) ns, \\( 1 \\) ns, and \\( 0.75 \\) ns, respectively (ns stands for nanoseconds). To gain in terms of frequency, the designers have decided to split the ID/RF stage into three stages (ID, RF1, RF2) each of latency \\( 2.2/3 \\) ns. Also, the EX stage is split into two stages (EX1, EX2) each of latency \\( 1 \\) ns. The new design has a total of eight pipeline stages. A program has \\( 20\\% \\) branch instructions which execute in the EX stage and produce the next instruction pointer at the end of the EX stage in the old design and at the end of the EX2 stage in the new design. The IF stage stalls after fetching a branch instruction until the next instruction pointer is computed. All instructions other than the branch instruction have an average CPI of one in both the designs. The execution times of this program on the old and the new design are \\( P \\) and \\( Q \\) nanoseconds, respectively. The value of \\( P/Q \\) is __________.</div><br><br><b>GATE CSE 2014 Set 3 | Question: 43</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.50:1.60",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2077/gate-cse-2014-set-3-question-43\" target=\"_blank\">https://gateoverflow.in/2077/gate-cse-2014-set-3-question-43</a></p>"
        },
        {
          "id": 21,
          "question": "<p><a name=\"2043\"></a><div itemprop=\"text\"><p>Consider the following processors (ns stands for nanoseconds). Assume that the pipeline registers have zero latency.&nbsp;</p>\n\n<ul>\n\t<li>\\( \\text{P1:} \\) Four-stage pipeline with stage latencies \\( \\text{1&nbsp;ns, 2&nbsp;ns, 2&nbsp;ns, 1&nbsp;ns} \\).&nbsp;</li>\n\t<li>\\( \\text{P2:} \\) Four-stage pipeline with stage latencies \\( \\text{1&nbsp;ns, 1.5&nbsp;ns, 1.5&nbsp;ns, 1.5&nbsp;ns} \\).&nbsp;</li>\n\t<li>\\( \\text{P3:} \\) Five-stage pipeline with stage latencies \\( \\text{0.5&nbsp;ns, 1&nbsp;ns, 1&nbsp;ns, 0.6&nbsp;ns, 1 ns} \\).&nbsp;</li>\n\t<li>\\( \\text{P4:} \\) Five-stage pipeline with stage latencies \\( \\text{0.5&nbsp;ns, 0.5&nbsp;ns, 1&nbsp;ns, 1 ns, 1.1&nbsp;ns} \\).&nbsp;</li>\n</ul>\n\n<p>Which processor has the highest peak clock frequency?</p>\n\n</div><br><br><b>GATE CSE 2014 Set 3 | Question: 9</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{P1} \\)</p>",
            "<p>\\( \\text{P2} \\)</p>",
            "<p>\\( \\text{P3} \\)</p>",
            "<p>\\( \\text{P4} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{P3} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2043/gate-cse-2014-set-3-question-9\" target=\"_blank\">https://gateoverflow.in/2043/gate-cse-2014-set-3-question-9</a></p>"
        },
        {
          "id": 22,
          "question": "<p><a name=\"8288\"></a><div itemprop=\"text\">Consider a non-pipelined processor with a clock rate of \\( 2.5 \\) gigahertz and average cycles per instruction of four. The same processor is upgraded to a pipelined processor with five stages; but due to the internal pipeline delay, the clock speed is reduced to \\( 2 \\) gigahertz. Assume that there are no stalls in the pipeline. The speedup achieved in this pipelined processor is_______________.</div><br><br><b>GATE CSE 2015 Set 1 | Question: 38</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3.2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/8288/gate-cse-2015-set-1-question-38\" target=\"_blank\">https://gateoverflow.in/8288/gate-cse-2015-set-1-question-38</a></p>"
        },
        {
          "id": 23,
          "question": "<p><a name=\"8218\"></a><div itemprop=\"text\">Consider the sequence of machine instruction given below:<br>\n\\[ \\begin{array}{ll} \\text{MUL} &amp; \\text{R5, R0, R1} \\\\ &nbsp;\\text{DIV} &amp; \\text{R6, R2, R3} \\\\ &nbsp;&nbsp;\\text{ADD} &amp; \\text{R7, R5, R6} \\\\ &nbsp;\\text{SUB} &amp; \\text{R8, R7, R4} &nbsp;\\\\ \\end{array} \\]<br>\nIn &nbsp;the above sequence, \\( R0 \\) to \\( R8 \\) are general purpose registers. In the instructions shown, the first register shows the result of the operation performed on the second and the third registers. This sequence of instructions is to be executed in a pipelined instruction processor with the following \\( 4 \\) stages: \\( (1) \\) Instruction Fetch and Decode \\( (IF) \\), \\( (2) \\) Operand Fetch \\( (OF) \\), \\( (3) \\) Perform Operation \\( (PO) \\) and \\( (4) \\) Write back the result \\( (WB) \\). The \\( IF \\), \\( OF \\) and \\( WB \\) stages take \\( 1 \\) clock cycle each for any instruction. The \\( PO \\) stage takes \\( 1 \\) clock cycle for ADD and SUB instruction, \\( 3 \\) clock cycles for MUL instruction and \\( 5 \\) clock cycles for DIV instruction. The pipelined processor uses operand forwarding from the PO stage to the OF stage. The number of clock cycles taken for the execution of the above sequence of instruction is _________.</div><br><br><b>GATE CSE 2015 Set 2 | Question: 44</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "13",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/8218/gate-cse-2015-set-2-question-44\" target=\"_blank\">https://gateoverflow.in/8218/gate-cse-2015-set-2-question-44</a></p>"
        },
        {
          "id": 24,
          "question": "<p><a name=\"8560\"></a><div itemprop=\"text\">Consider the following reservation table for a pipeline having three stages \\( S_1, S_2 \\text{ and } S_3 \\).<br>\n\\[ \\begin{array}{|l|l|} \\hline \\textbf{Time} \\rightarrow \\\\\\hline &amp; \\text{1}&amp; \\text{2} &amp; \\text{\\( 3 \\)} &nbsp;&amp; \\text{\\( 4 \\)} &amp; \\text{\\( 5 \\)} \\\\\\hline \\textbf{\\( S _1 \\)} &amp; \\text{\\( X \\)} &amp; &amp; &nbsp;&nbsp;&amp; &amp; &nbsp;\\text{\\( X \\)}\\\\\\hline &nbsp;\\textbf{\\( S _2 \\)} &amp; &nbsp;&amp; \\text{\\( X \\)} &nbsp;&amp; &nbsp;&amp; &nbsp;&nbsp;\\text{\\( X \\)}\\\\\\hline \\textbf{\\( S _3 \\)} &amp; &nbsp;&amp; &amp; \\text{\\( X \\)} &nbsp;&amp; &nbsp;\\\\\\hline \\end{array} \\]<br>\nThe minimum average latency (MAL) is ______</div><br><br><b>GATE CSE 2015 Set 3 | Question: 51</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/8560/gate-cse-2015-set-3-question-51\" target=\"_blank\">https://gateoverflow.in/8560/gate-cse-2015-set-3-question-51</a></p>"
        },
        {
          "id": 25,
          "question": "<p><a name=\"39691\"></a><div itemprop=\"text\">The stage delays in a \\( 4 \\)-stage pipeline are \\( 800, 500, 400 \\) and \\( 300 \\) picoseconds. The first stage (with delay \\( 800 \\) picoseconds) is replaced with a functionality equivalent design involving two stages with respective delays \\( 600 \\) and \\( 350 \\) picoseconds. The throughput increase of the pipeline is ___________ percent.</div><br><br><b>GATE CSE 2016 Set 1 | Question: 32</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "33.0:34.0",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/39691/gate-cse-2016-set-1-question-32\" target=\"_blank\">https://gateoverflow.in/39691/gate-cse-2016-set-1-question-32</a></p>"
        },
        {
          "id": 26,
          "question": "<p><a name=\"39580\"></a><div itemprop=\"text\">Consider a \\( 3 \\ \\text{GHz} \\) (gigahertz) processor with a three stage pipeline and stage latencies \\( \\large\\tau_1,\\tau_2 \\) and \\( \\large\\tau_3 \\) such that \\( \\large\\tau_1 =\\dfrac{3 \\tau_2}{4}=2\\tau_3 \\). If the longest pipeline stage is split into two pipeline stages of equal latency , the new frequency is __________ \\( \\text{GHz} \\), ignoring delays in the pipeline registers.</div><br><br><b>GATE CSE 2016 Set 2 | Question: 33</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/39580/gate-cse-2016-set-2-question-33\" target=\"_blank\">https://gateoverflow.in/39580/gate-cse-2016-set-2-question-33</a></p>"
        },
        {
          "id": 27,
          "question": "<p><a name=\"118719\"></a><div itemprop=\"text\"><p>Instruction execution in a processor is divided into \\( 5 \\) stages,&nbsp;<em>Instruction Fetch&nbsp;</em>(IF), <em>Instruction Decode&nbsp;</em>(ID),&nbsp;<em>Operand fetch&nbsp;</em>(OF), <em>Execute&nbsp;</em>(EX), and&nbsp;<em>Write Back&nbsp;</em>(WB). These stages take&nbsp;<strong>5, 4, 20, 10&nbsp;</strong>and&nbsp;<strong>3 nanoseconds (ns)&nbsp;</strong>respectively. A pipelined implementation of the processor requires buffering between each pair of consecutive stages with a delay of&nbsp;<strong>2 ns</strong>. Two pipelined implementation of the processor are contemplated:</p>\n\n<ol style=\"list-style-type:lower-roman\">\n\t<li>a naive pipeline implementation (NP) with \\( 5 \\) stages and</li>\n\t<li>an efficient pipeline (EP) where the OF stage is divided into stages \\( \\text{OF1} \\) and \\( \\text{OF2} \\) with execution times of&nbsp;<strong>12 ns&nbsp;</strong>and&nbsp;<strong>8 ns&nbsp;</strong>respectively.</li>\n</ol>\n\n<p>The speedup (correct to two decimal places) achieved by EP over NP in executing \\( 20 \\) independent instructions with no hazards is _________ .</p></div><br><br><b>GATE CSE 2017 Set 1 | Question: 50</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.50:1.51",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/118719/gate-cse-2017-set-1-question-50\" target=\"_blank\">https://gateoverflow.in/118719/gate-cse-2017-set-1-question-50</a></p>"
        },
        {
          "id": 28,
          "question": "<p><a name=\"204125\"></a><div itemprop=\"text\">The instruction pipeline of a RISC processor has the following stages: Instruction Fetch \\( (IF) \\), Instruction Decode \\( (ID) \\), Operand Fetch \\( (OF) \\), Perform Operation \\( (PO) \\) and Writeback \\( (WB) \\), The \\( IF \\), \\( ID \\), \\( OF \\) and \\( WB \\) stages take \\( 1 \\) clock cycle each for every instruction. Consider a sequence of \\( 100 \\) instructions. In the \\( PO \\) stage, \\( 40 \\) instructions take \\( 3 \\) clock cycles each, \\( 35 \\) instructions take \\( 2 \\) clock cycles each, and the remaining \\( 25 \\) instructions take \\( 1 \\) clock cycle each. Assume that there are no data hazards and no control hazards.<br>\n<br>\nThe number of clock cycles required for completion of execution of the sequence of instruction is _____.</div><br><br><b>GATE CSE 2018 | Question: 50</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "219",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/204125/gate-cse-2018-question-50\" target=\"_blank\">https://gateoverflow.in/204125/gate-cse-2018-question-50</a></p>"
        },
        {
          "id": 29,
          "question": "<p><a name=\"333188\"></a><div itemprop=\"text\">Consider a non-pipelined processor operating at \\( 2.5 \\) GHz. It takes \\( 5 \\) clock cycles to complete an instruction. You are going to make a \\( 5 \\)- stage pipeline out of this processor. Overheads associated with pipelining force you to operate the pipelined processor at \\( 2 \\) GHz. In a given program, assume that \\( 30\\% \\) are memory instructions, \\( 60 \\% \\) are ALU instructions and the rest are branch instructions. \\( 5 \\% \\) of the memory instructions cause stalls of \\( 50 \\) clock cycles each due to cache misses and \\( 50 \\% \\) of the branch instructions cause stalls of \\( 2 \\) cycles each. Assume that there are no stalls associated with the execution of ALU instructions. For this program, the speedup achieved by the pipelined processor over the non-pipelined processor (round off to \\( 2 \\) decimal places) is_____________.</div><br><br><b>GATE CSE 2020 | Question: 43</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2.15:2.18",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/333188/gate-cse-2020-question-43\" target=\"_blank\">https://gateoverflow.in/333188/gate-cse-2020-question-43</a></p>"
        },
        {
          "id": 30,
          "question": "<p><a name=\"357398\"></a><div itemprop=\"text\">A five-stage pipeline has stage delays of \\( 150, 120, 150, 160 \\) and \\( 140 \\) nanoseconds. The registers that are used between the pipeline stages have a delay of \\( 5 \\) nanoseconds each.<br>\nThe total time to execute \\( 100 \\) independent instructions on this pipeline, assuming there are no pipeline stalls, is _______ nanoseconds.</div><br><br><b>GATE CSE 2021 Set 1 | Question: 53</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "17160:17160",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/357398/gate-cse-2021-set-1-question-53\" target=\"_blank\">https://gateoverflow.in/357398/gate-cse-2021-set-1-question-53</a></p>"
        },
        {
          "id": 31,
          "question": "<p><a name=\"357484\"></a><div itemprop=\"text\">Consider a pipelined processor with \\( 5 \\) stages, \\( \\text{Instruction Fetch} (\\textsf{IF}) \\), \\( \\text{Instruction Decode} \\textsf{(ID)} \\), \\( \\text{Execute } \\textsf{(EX)} \\), \\( \\text{Memory Access } \\textsf{(MEM)} \\), and \\( \\text{Write Back } \\textsf{(WB)} \\). Each stage of the pipeline, except the \\( \\textsf{EX} \\) stage, takes one cycle. Assume that the \\( \\textsf{ID} \\) stage merely decodes the instruction and the register read is performed in the \\( \\textsf{EX} \\) stage. The \\( \\textsf{EX} \\) stage takes one cycle for \\( \\textsf{ADD} \\) instruction and two cycles for \\( \\textsf{MUL} \\) instruction. Ignore pipeline register latencies.<br>\n<br>\nConsider the following sequence of \\( 8 \\) instructions:<br>\n\\[ \\textsf{ADD, MUL, ADD, MUL, ADD, MUL, ADD, MUL} \\] Assume that every \\( \\textsf{MUL} \\) instruction is data-dependent on the \\( \\textsf{ADD} \\) instruction just before it and every \\( \\textsf{ADD} \\) instruction (except the first \\( \\textsf{ADD} \\)) is data-dependent on the \\( \\textsf{MUL} \\) instruction just before it. The \\( \\textit{speedup} \\) defined as follows.<br>\n\\[ \\textit{Speedup} = \\dfrac{\\text{Execution time without operand forwarding}}{\\text{Execution time with operand forearding}} \\] The \\( \\textit{Speedup}  \\) achieved in executing the given instruction sequence on the pipelined processor (rounded to \\( 2 \\) decimal places) is _____________</div><br><br><b>GATE CSE 2021 Set 2 | Question: 53</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.87:1.88",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/357484/gate-cse-2021-set-2-question-53\" target=\"_blank\">https://gateoverflow.in/357484/gate-cse-2021-set-2-question-53</a></p>"
        },
        {
          "id": 32,
          "question": "<p><a name=\"371885\"></a><div itemprop=\"text\">A processor \\( \\text{X}_{1} \\) operating at \\( 2 \\; \\text{GHz} \\) has a standard \\( 5- \\)stage \\( \\text{RISC} \\) instruction pipeline having a base \\( \\text{CPI (cycles per instruction)} \\) of one without any pipeline hazards. For a given program \\( \\text{P} \\) that has \\( 30 \\% \\) branch instructions, control hazards incur \\( 2 \\) cycles stall for every branch. A new version of the processor \\( \\text{X}_{2} \\) operating at same clock frequency has an additional branch predictor unit \\( \\text{(BPU)} \\) that completely eliminates stalls for correctly predicted branches. There is neither any savings nor any additional stalls for wrong predictions. There are no structural hazards and data hazards for \\( \\text{X}_{1} \\) and \\( \\text{X}_{2}. \\) If the \\( \\text{BPU} \\) has a prediction accuracy of \\( 80 \\%, \\) the speed up \\( \\textit{(rounded off to two decimal places)} \\) obtained by \\( \\text{X}_{2} \\) over \\( \\text{X}_{1} \\) in executing \\( \\text{P} \\) is _______________.</div><br><br><b>GATE CSE 2022 | Question: 51</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.42:1.45",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/371885/gate-cse-2022-question-51\" target=\"_blank\">https://gateoverflow.in/371885/gate-cse-2022-question-51</a></p>"
        },
        {
          "id": 33,
          "question": "<p><a name=\"399288\"></a><div itemprop=\"text\">Consider a \\( 3 \\)-stage pipelined processor having a delay of \\( 10 \\mathrm{~ns} \\) (nanoseconds), \\( 20 \\mathrm{~ns} \\), and \\( 14 \\mathrm{~ns}, \\) for the first, second, and the third stages, respectively. Assume that there is no other delay and the processor does not suffer from any pipeline hazards. Also assume that one instruction is fetched every cycle.<br>\n<br>\nThe total execution time for executing \\( 100 \\) instructions on this processor is _____________ \\( \\mathrm{ns}. \\)</div><br><br><b>GATE CSE 2023 | Question: 23</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2040",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/399288/gate-cse-2023-question-23\" target=\"_blank\">https://gateoverflow.in/399288/gate-cse-2023-question-23</a></p>"
        },
        {
          "id": 34,
          "question": "<p><a name=\"422822\"></a><div itemprop=\"text\"><p>Consider a \\( 5 \\)-stage pipelined processor with Instruction Fetch (IF), Instruction Decode (ID), Execute (EX), Memory Access (MEM), and Register Writeback (WB) stages. Which of the following statements about <em>forwarding </em>is/are CORRECT?</p></div><br><br><b>GATE CSE 2024 | Set 1 | Question: 20</b></p>",
          "type": "multiple",
          "options": [
            "<p>In a pipelined execution, forwarding means the result from a source stage of an earlier instruction is passed on to the destination stage of a later instruction</p>",
            "<p>In forwarding, data from the output of the MEM stage can be passed on to the input of the EX stage of the next instruction</p>",
            "<p>Forwarding cannot prevent all pipeline stalls</p>",
            "<p>Forwarding does not require any extra hardware to retrieve the data from the pipeline stages&nbsp;</p>"
          ],
          "correct_answer": [
            "<p>In a pipelined execution, forwarding means the result from a source stage of an earlier instruction is passed on to the destination stage of a later instruction</p>",
            "<p>In forwarding, data from the output of the MEM stage can be passed on to the input of the EX stage of the next instruction</p>",
            "<p>Forwarding cannot prevent all pipeline stalls</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422822/gate-cse-2024-set-1-question-20\" target=\"_blank\">https://gateoverflow.in/422822/gate-cse-2024-set-1-question-20</a></p>"
        },
        {
          "id": 35,
          "question": "<p><a name=\"422876\"></a><div itemprop=\"text\"><p>​​​​​An instruction format has the following structure:</p><p style=\"text-align: center;\">Instruction Number: <em>Opcode destination reg, source reg-\\( 1 \\), source reg-\\( 2 \\)</em><br>&nbsp;</p><p style=\"text-align: center;\">Consider the following sequence of instructions to be executed in a pipelined processor:</p><p>\\( \\text{I 1: DIV R3, R1, R2} \\)</p><p>\\( \\text{I 2: SUB R5, R3, R4} \\)</p><p>\\( \\text{I 3: ADD R3, R5, R6} \\)</p><p>\\( \\text{I 4: MUL R7, R3, R8} \\)<br><br>Which of the following statements is/are TRUE?</p></div><br><br><b>GATE CSE 2024 | Set 2 | Question: 21</b></p>",
          "type": "single",
          "options": [
            "<p>There is a RAW dependency on \\( \\text{R 3} \\) between \\( \\text{I 1} \\) and \\( \\text{I 2} \\)</p>",
            "<p>There is a WAR dependency on \\( \\text{R 3} \\)&nbsp;between \\( \\text{I 1} \\) and \\( \\text{I 3} \\)</p>",
            "<p>There is a RAW dependency on \\( \\text{R 3} \\) between \\( \\text{I 2} \\) and \\( \\text{I 3} \\)</p>",
            "<p>There is a WAW dependency on \\( \\text{R 3} \\) between \\( \\text{I 3} \\) and \\( \\text{I 4} \\)</p>"
          ],
          "correct_answer": "<p>There is a RAW dependency on \\( \\text{R 3} \\) between \\( \\text{I 1} \\) and \\( \\text{I 2} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422876/gate-cse-2024-set-2-question-21\" target=\"_blank\">https://gateoverflow.in/422876/gate-cse-2024-set-2-question-21</a></p>"
        },
        {
          "id": 36,
          "question": "<p><a name=\"422849\"></a><div itemprop=\"text\">A non-pipelined instruction execution unit operating at \\( 2 \\mathrm{GHz} \\) takes an average of \\( 6 \\) cycles to execute an instruction of a program \\( \\text{P} \\). The unit is then redesigned to operate on a \\( 5 \\) -stage pipeline at \\( 2 \\mathrm{GHz} \\). Assume that the ideal throughput of the pipelined unit is \\( 1 \\) instruction per cycle. In the execution of program \\( \\text{P} \\), \\( 20 \\% \\) instructions incur an average of \\( 2 \\) cycles stall due to data hazards and \\( 20 \\% \\) instructions incur an average of \\( 3 \\) cycles stall due to control hazards. The speedup (rounded off to one decimal place) obtained by the pipelined design over the non-pipelined design is ____________.</div><br><br><b>GATE CSE 2024 | Set 2 | Question: 48</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/422849/gate-cse-2024-set-2-question-48\" target=\"_blank\">https://gateoverflow.in/422849/gate-cse-2024-set-2-question-48</a></p>"
        },
        {
          "id": 37,
          "question": "<p><a name=\"460847\"></a><div itemprop=\"text\">A \\( 5 \\)-stage instruction pipeline has stage delays of \\( 180,250,150,170 \\), and \\( 250 \\), respectively, in nanoseconds. The delay of an inter-stage latch is \\( 10 \\) nanoseconds. Assume that there are no pipeline stalls due to branches and other hazards. The time taken to process \\( 1000 \\) instructions in microseconds is __________. (rounded off to two decimal places)</div><br><br><b>GATE CSE 2025 | Set 2 | Question: 46</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "260.20:261.20",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/460847/gate-cse-2025-set-2-question-46\" target=\"_blank\">https://gateoverflow.in/460847/gate-cse-2025-set-2-question-46</a></p>"
        },
        {
          "id": 38,
          "question": "<p><a name=\"3690\"></a><div itemprop=\"text\"><p>Consider a pipeline processor with \\( 4 \\) stages \\( S1 \\) to \\( S4 \\). We want to execute the following loop:</p>\n\n<pre class=\"prettyprint lang-c_cpp\">for (i = 1; i &lt; = 1000; i++) \n    {I1, I2, I3, I4} </pre>\n\n<p>where the time taken (in ns) by instructions \\( I1 \\) to \\( I4 \\) for stages \\( S1 \\) to \\( S4 \\) are given below:</p>\n\n<p>\\[ \\begin{array}{|c|c|c|c|c|} \\hline &nbsp;&amp; \\textbf {\\( S&nbsp;_1 \\)} &amp;\\textbf {\\( S _2 \\)} &amp; \\textbf {\\( S _3 \\)} &amp; &nbsp;\\textbf{\\( S _4 \\)&nbsp;} \\\\\\hline \\textbf{I1}&amp; \\text{\\( 1 \\)} &amp;&nbsp;\\text{\\( 2 \\)}&nbsp; &amp; \\text{\\( 1 \\)} &amp; \\text{\\( 2 \\)} \\\\\\hline \\textbf{I2} &amp; \\text{\\( 2 \\)}&nbsp;&amp; \\text{\\( 1 \\)} &amp; \\text{\\( 2 \\)}&nbsp; &amp; \\text{\\( 1 \\)}\\\\\\hline&nbsp; \\textbf{I3}&amp; \\text{\\( 1 \\)} &amp;&nbsp;\\text{\\( 1 \\)}&nbsp; &amp; \\text{\\( 2 \\)} &amp; \\text{\\( 1 \\)} \\\\\\hline \\textbf{I4} &amp; \\text{\\( 2 \\)}&nbsp;&amp; \\text{\\( 1 \\)} &amp; \\text{\\( 2 \\)}&nbsp; &amp; \\text{\\( 1 \\)} \\\\\\hline \\end{array} \\]</p>\n\n<p>The output of&nbsp; \\( I1 \\) for \\( i = 2 \\) will be available after</p>\n\n</div><br><br><b>GATE IT 2004 | Question: 47</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{11 ns} \\)</p>",
            "<p>\\( \\text{12 ns} \\)</p>",
            "<p>\\( \\text{13 ns} \\)</p>",
            "<p>\\( \\text{28 ns} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{13 ns} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3690/gate-it-2004-question-47\" target=\"_blank\">https://gateoverflow.in/3690/gate-it-2004-question-47</a></p>"
        },
        {
          "id": 39,
          "question": "<p><a name=\"3805\"></a><div itemprop=\"text\"><p>We have two designs \\( D1 \\) and \\( D2 \\) for a synchronous pipeline processor. \\( D1 \\) has \\( 5 \\) pipeline stages with execution times of \\( 3 \\)&nbsp;nsec, \\( 2 \\)&nbsp;nsec, \\( 4 \\)&nbsp;nsec, \\( 2 \\)&nbsp;nsec and \\( 3 \\)&nbsp;nsec while the design \\( D2 \\) has \\( 8 \\) pipeline stages each with \\( 2 \\)&nbsp;nsec execution time How much time can be saved using design \\( D2 \\) over design \\( D1 \\) for executing \\( 100 \\) instructions?</p>\n\n</div><br><br><b>GATE IT 2005 | Question: 44</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 214 \\)&nbsp;nsec</p>",
            "<p>\\( 202 \\)&nbsp;nsec</p>",
            "<p>\\( 86 \\)&nbsp;nsec</p>",
            "<p>\\( -200 \\)&nbsp;nsec</p>"
          ],
          "correct_answer": "<p>\\( 202 \\)&nbsp;nsec</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3805/gate-it-2005-question-44\" target=\"_blank\">https://gateoverflow.in/3805/gate-it-2005-question-44</a></p>"
        },
        {
          "id": 40,
          "question": "<p><a name=\"3622\"></a><div itemprop=\"text\"><p>A pipelined processor uses a \\( 4- \\)stage instruction pipeline with the following stages: Instruction fetch (IF), Instruction decode (ID), Execute (EX) and Writeback (WB). The arithmetic operations as well as the load and store operations are carried out in the EX stage. The sequence of instructions corresponding to the statement \\( X = (S - R * (P + Q))/T \\) is given below. The values of variables \\( P, Q, R, S \\) and \\( T \\) are available in the registers \\( R0, R1, R2, R3 \\) and \\( R4 \\) respectively, before the execution of the instruction sequence.<br>\n\\[ \\begin{array}{ll}&nbsp;\\text{ADD} &amp; \\text{R5, R0, R1} &amp;&amp; \\text{; R5&nbsp;← R0 + R1} \\\\&nbsp; \\text{MUL} &amp; \\text{R6, R2, R5} &amp;&amp; \\text{; R6 ←&nbsp;R2 * R5} \\\\&nbsp; &nbsp;\\text{SUB} &amp; \\text{R5, R3, R6} &amp;&amp; \\text{; R5 ←&nbsp;R3 - R6} \\\\&nbsp; \\text{DIV} &amp;&nbsp;\\text{R6, R5, R4} &amp;&amp; \\text{; R6 ←&nbsp;R5/R4} \\\\&nbsp;\\text{STORE} &amp; \\text{R6, X} &amp;&amp; \\text{; X&nbsp; ← R6} \\\\&nbsp;\\end{array} \\]<br>\nThe number of Read-After-Write (RAW) dependencies, Write-After-Read( WAR) dependencies, and Write-After-Write (WAW) dependencies in the sequence of instructions are, respectively,</p>\n\n</div><br><br><b>GATE IT 2006 | Question: 78</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2, 2, 4 \\)</p>",
            "<p>\\( 3, 2, 3 \\)</p>",
            "<p>\\( 4, 2, 2 \\)</p>",
            "<p>\\( 3, 3, 2 \\)</p>"
          ],
          "correct_answer": "<p>\\( 4, 2, 2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3622/gate-it-2006-question-78\" target=\"_blank\">https://gateoverflow.in/3622/gate-it-2006-question-78</a></p>"
        },
        {
          "id": 41,
          "question": "<p><a name=\"3623\"></a><div itemprop=\"text\"><p>A pipelined processor uses a 4-stage instruction pipeline with the following stages: Instruction fetch (IF), Instruction decode (ID), Execute (EX) and Writeback (WB). The arithmetic operations as well as the load and store operations are carried out in the EX stage. The sequence of instructions corresponding to the statement \\( X = (S - R * (P + Q))/T \\) is given below. The values of variables \\( P, Q, R, S \\) and \\( T \\) are available in the registers \\( R0, R1, R2, R3 \\) and \\( R4 \\) respectively, before the execution of the instruction sequence.</p>\n\n<p>\\[ \\begin{array}{lll}&nbsp; \\text{ADD}&nbsp;&amp; \\text{\\( R5,R0,R1 \\)} &amp; \\text{\\( ;R5 \\)}&nbsp;\\leftarrow \\text{R0 + R1} \\\\<br>\n\\text{MUL}&amp; \\text{\\( R6,R2,R5 \\)}&nbsp;&amp; \\text{\\( ;R6 \\)} \\leftarrow \\text{R2 * R5} \\\\<br>\n&nbsp;\\text{SUB} &amp;&nbsp; \\text{\\( R5,R3,R6 \\)}&nbsp;&amp; \\text{\\( ;R5 \\)} \\leftarrow \\text{R3&nbsp;-R6} &nbsp;\\\\&nbsp;<br>\n\\text{DIV} &amp;\\text{\\( R6,R5,R4 \\)}&nbsp;&amp; \\text{\\( ;R6 \\)} \\leftarrow \\text{R5/R4} \\\\<br>\n\\text{STORE}&nbsp;&amp;\\text{\\( R6,X \\)}&amp; \\text{\\( ;X \\)} \\leftarrow \\text{R6} &nbsp;\\\\<br>\n\\end{array} \\]</p>\n\n<p>The IF, ID and WB stages take 1 clock cycle each. The EX stage takes \\( 1 \\) clock cycle each for the ADD, SUB and STORE operations, and \\( 3 \\) clock cycles each for MUL and DIV operations. Operand forwarding from the EX stage to the ID stage is used. The number of clock cycles required to complete the sequence of instructions is</p>\n\n</div><br><br><b>GATE IT 2006 | Question: 79</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 10 \\)</p>",
            "<p>\\( 12 \\)</p>",
            "<p>\\( 14 \\)</p>",
            "<p>\\( 16 \\)</p>"
          ],
          "correct_answer": "<p>\\( 12 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3623/gate-it-2006-question-79\" target=\"_blank\">https://gateoverflow.in/3623/gate-it-2006-question-79</a></p>"
        },
        {
          "id": 42,
          "question": "<p><a name=\"3437\"></a><div itemprop=\"text\"><p>A processor takes \\( 12 \\) cycles to complete an instruction I. The corresponding pipelined processor uses \\( 6 \\) stages with the execution times of \\( 3, 2, 5, 4, 6 \\) and \\( 2 \\) cycles respectively. What is the asymptotic speedup assuming that a very large number of instructions are to be executed?</p>\n\n</div><br><br><b>GATE IT 2007 | Question: 6, ISRO2011-25</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 1.83 \\)</p>",
            "<p>\\( 2 \\)</p>",
            "<p>\\( 3 \\)</p>",
            "<p>\\( 6 \\)</p>"
          ],
          "correct_answer": "<p>\\( 2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3437/gate-it-2007-question-6-isro2011-25\" target=\"_blank\">https://gateoverflow.in/3437/gate-it-2007-question-6-isro2011-25</a></p>"
        },
        {
          "id": 43,
          "question": "<p><a name=\"3350\"></a><div itemprop=\"text\"><p>A non pipelined single cycle processor operating at \\( 100\\;\\text{MHz} \\) is converted into a synchro­nous pipelined processor with five stages requiring \\( 2.5\\;\\text{nsec}, 1.5\\;\\text{nsec}, 2\\;\\text{nsec}, 1.5\\;\\text{nsec} \\) and \\( 2.5\\;\\text{nsec} \\), respectively. The delay of the latches is \\( 0.5\\;\\text{nsec} \\). The speedup of the pipeline processor for a large number of instructions is:</p>\n\n</div><br><br><b>GATE IT 2008 | Question: 40</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 4.5 \\)</p>",
            "<p>\\( 4.0 \\)</p>",
            "<p>\\( 3.33 \\)</p>",
            "<p>\\( 3.0 \\)</p>"
          ],
          "correct_answer": "<p>\\( 3.33 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3350/gate-it-2008-question-40\" target=\"_blank\">https://gateoverflow.in/3350/gate-it-2008-question-40</a></p>"
        }
      ]
    }
  ]
});
