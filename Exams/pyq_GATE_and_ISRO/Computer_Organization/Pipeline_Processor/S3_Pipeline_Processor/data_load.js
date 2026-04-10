window.__examLoadCallback({
  "title": "Pipeline_Processor - Pipeline_Processor - Slot 3",
  "duration": 42,
  "sections": [
    {
      "name": "Pipeline_Processor",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
          "question": "<p>Consider an instruction pipeline with four stages (S1, S2, S3 and S4) each with\ncombinational circuit only. The pipeline registers are required between each stage\nand at the end of the last stage. Delays for the stages and for the pipeline\nregisters are as given in the figure. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Pipeline_Processor\\q30_eec15aeb.jpg\"> What is the approximate speed up of the pipeline in steady state under ideal conditions when compared to the corresponding non-pipeline implementation? <br><br><strong>(GATE CSE 2011)</strong></p>",
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
          "id": 5,
          "question": "<p>A 5-stage pipelined processor has Instruction Fetch (IF), Instruction Decode (ID),\nOperand Fetch (OF), Perform Operation (PO) and Write Operand (WO) stages.\nThe IF, ID, OF and WO stages take 1 clock cycle each for any instruction. The PO\nstage takes 1 clock cycle for ADD and SUB instructions, 3 clock cycles for MUL\ninstruction, and 6 clock cycles for DIV instruction respectively. Operand\nforwarding is used in the pipeline. What is the number of clock cycles needed to\nexecute the following sequence of instructions?\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Pipeline_Processor\\q33_b6d0f7e6.jpg\"> <br><br><strong>(GATE CSE 2010)</strong></p>",
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
          "id": 6,
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
          "id": 7,
          "question": "<p>Consider a 4 stage pipeline processor. The number of cycles needed by the four\ninstructions I1, I2, I3, I4 in stages S1, S2, S3, S4 is shown below:  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Pipeline_Processor\\q28_52a82c1b.jpg\"><br> What is the number of cycles needed to execute the following loop? <br> For (i=1 to 2) {I1; I2; I3; I4;} <br><br><strong>(GATE CSE 2009)</strong></p>",
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
