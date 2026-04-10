window.__examLoadCallback({
  "title": "CO and Architecture - Pipelining",
  "duration": 28,
  "sections": [
    {
      "name": "Pipelining",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"836\"></a><div itemprop=\"text\"><p>The performance of a pipelined processor suffers if:</p>\n\n</div><br><br><b>CO & Architecture: GATE CSE 2002 | Question: 2.6, ISRO2008</b></p>",
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
          "id": 2,
          "question": "<p><a name=\"901\"></a><div itemprop=\"text\"><p>For a pipelined CPU with a single ALU, consider the following situations</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>\n\t<p>The \\( {j+1}^{st} \\) instruction uses the result of the \\( j^{th} \\) instruction as an operand</p>\n\t</li>\n\t<li>\n\t<p>The execution of a conditional jump instruction</p>\n\t</li>\n\t<li>\n\t<p>The \\( j^{th} \\) and \\( {j+1}^{st} \\) instructions require the ALU at the same time.</p>\n\t</li>\n</ol>\n\n<p>Which of the above can cause a hazard</p>\n\n</div><br><br><b>CO & Architecture: GATE CSE 2003 | Question: 10, ISRO</b></p>",
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
          "id": 3,
          "question": "<p><a name=\"1235\"></a><div itemprop=\"text\"><p>Consider a pipelined processor with the following four stages:</p>\n\n<ul>\n<li>IF: Instruction Fetch</li>\n<li>ID: Instruction Decode and Operand Fetch</li>\n<li>EX: Execute</li>\n<li>WB: Write Back</li>\n</ul>\n\n<p>The IF, ID and WB stages take one clock cycle each to complete the operation. The number of clock cycles for the EX stage depends on the instruction. The ADD and SUB instructions need \\( 1 \\) clock cycle and the MUL instruction needs \\( 3 \\) clock cycles in the EX stage. Operand forwarding is used in the pipelined processor. What is the number of clock cycles taken to complete the following sequence of instructions?<br>\n\\[ \\begin{array}{ll}&nbsp;\\textbf{ADD} &amp; \\text{R2, R1, R0} &amp;&amp;&amp; \\text{R2 \\( \\leftarrow \\) R1\\( + \\)R0} \\\\&nbsp; \\textbf{MUL} &amp; \\text{R4, R3, R2} &amp;&amp;&amp; \\text{R4 \\( \\leftarrow \\) R3\\( * \\)R2} \\\\&nbsp; &nbsp;\\textbf{SUB} &amp; \\text{R6, R5, R4} &amp;&amp;&amp; \\text{R6 \\( \\leftarrow \\) R5\\( - \\)R4} \\\\&nbsp; &nbsp;\\end{array} \\]</p>\n\n</div><br><br><b>CO & Architecture: GATE CSE 2007 | Question: 37, ISRO2009</b></p>",
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
          "id": 4,
          "question": "<p><a name=\"52\"></a><div itemprop=\"text\"><p>Register renaming is done in pipelined processors:</p>\n\n</div><br><br><b>CO & Architecture: GATE CSE 2012 | Question: 20,  ISRO2016</b></p>",
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
          "id": 5,
          "question": "<p><a name=\"3437\"></a><div itemprop=\"text\"><p>A processor takes \\( 12 \\) cycles to complete an instruction I. The corresponding pipelined processor uses \\( 6 \\) stages with the execution times of \\( 3, 2, 5, 4, 6 \\) and \\( 2 \\) cycles respectively. What is the asymptotic speedup assuming that a very large number of instructions are to be executed?</p>\n\n</div><br><br><b>CO & Architecture: GATE IT 2007 | Question: 6, ISRO2011</b></p>",
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
          "id": 6,
          "question": "<p><a name=\"55465\"></a><div itemprop=\"text\"><p>Consider a non-pipelined processor with a clock rate of \\( 2.5 \\) gigahertz and average cycles per instruction of four. The same processor is upgraded to a pipelined processor with five stages; but due to the internal pipeline delay, the clock speed is reduced to \\( 2 \\) gigahertz. Assume that there are no stalls in the pipeline. The speedup achieved in this pipelined processor is</p>\n\n</div><br><br><b>CO & Architecture: ISRO CSE 2016 | Question: 19</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 3.2 \\)</p>",
            "<p>\\( 3.0 \\)</p>",
            "<p>\\( 2.2 \\)</p>",
            "<p>\\( 2.0 \\)</p>"
          ],
          "correct_answer": "<p>\\( 3.2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/55465/isro-cse-2016-question-19\" target=\"_blank\">https://gateoverflow.in/55465/isro-cse-2016-question-19</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"331437\"></a><div itemprop=\"text\"><p>A non-pipelined CPU has \\( 12 \\) general purpose registers \\( (R0,R1,R2, \\dots ,R12) \\). Following operations are supported</p>\n\n<ul>\n\t<li>\\( \\begin{array}{ll} \\text{ADD&nbsp;Ra,&nbsp;Rb,&nbsp;Rr} &amp; \\text{Add Ra&nbsp;to Rb&nbsp;and store the result in Rr} \\end{array} \\)</li>\n\t<li>\\( \\begin{array}{ll} \\text{MUL Ra,&nbsp;Rb,&nbsp;Rr} &amp; \\text{Multiply Ra&nbsp;to Rb&nbsp;and store the result in Rr} \\end{array} \\)</li>\n</ul>\n\n<p>\\( \\text{MUL} \\) operation takes two clock cycles, \\( \\text{ADD} \\) takes one clock cycle.</p>\n\n<p>Calculate minimum number of clock cycles required to compute the value of the expression \\( XY+XYZ+YZ \\). The variable \\( X,Y,Z \\) are initially available in registers \\( R0,R1 \\) and \\( R2 \\) and contents of these registers must not be modified.</p>\n\n</div><br><br><b>CO & Architecture: ISRO CSE 2020 | Question: 6</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 5 \\)</p>",
            "<p>\\( 6 \\)</p>",
            "<p>\\( 7 \\)</p>",
            "<p>\\( 8 \\)</p>"
          ],
          "correct_answer": "<p>\\( 6 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/331437/isro-cse-2020-question-6\" target=\"_blank\">https://gateoverflow.in/331437/isro-cse-2020-question-6</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"331285\"></a><div itemprop=\"text\"><p>Consider a \\( 5 \\)- segment pipeline with a clock cycle time \\( 20 \\) ns in each sub operation. Find out the approximate speed-up ratio between pipelined and non-pipelined system to execute \\( 100 \\) instructions. (if an average, every five cycles, a bubble due to data hazard has to be introduced in the pipeline)</p>\n\n</div><br><br><b>CO & Architecture: ISRO CSE 2020 | Question: 7</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 5 \\)</p>",
            "<p>\\( 4.03 \\)</p>",
            "<p>\\( 4.81 \\)</p>",
            "<p>\\( 4.17 \\)</p>"
          ],
          "correct_answer": "<p>\\( 4.03 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/331285/isro-cse-2020-question-7\" target=\"_blank\">https://gateoverflow.in/331285/isro-cse-2020-question-7</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"435372\"></a><div itemprop=\"text\"><p>An instruction pipeline can be implemented by means of</p></div><br><br><b>CO & Architecture: ISRO CSE 2023 | Question: 24</b></p>",
          "type": "single",
          "options": [
            "<p>LIFO buffer</p>",
            "<p>FIFO buffer</p>",
            "<p>Stack</p>",
            "<p>None of the above<p>&nbsp;</p></p>"
          ],
          "correct_answer": "<p>FIFO buffer</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/435372/isro-cse-2023-question-24\" target=\"_blank\">https://gateoverflow.in/435372/isro-cse-2023-question-24</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"43806\"></a><div itemprop=\"text\">\n<p>A pipeline \\( P \\) operating at \\( 400 \\) MHz has a speedup factor of \\( 6 \\) and operating at \\( 70 \\)% efficiency. How many stages are there in the pipeline?</p>\n\n\n</div><br><br><b>CO & Architecture: ISRO</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 5 \\)</p>",
            "<p>\\( 6 \\)</p>",
            "<p>\\( 8 \\)</p>",
            "<p>\\( 9 \\)</p>"
          ],
          "correct_answer": "<p>\\( 9 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43806/isro-2013-15\" target=\"_blank\">https://gateoverflow.in/43806/isro-2013-15</a></p>"
        }
      ]
    }
  ]
});
