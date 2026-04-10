window.__examLoadCallback({
  "title": "CO & Architecture - Machine Instruction",
  "duration": 58,
  "sections": [
    {
      "name": "Machine Instruction",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"94384\"></a><div itemprop=\"text\"><p>The following program fragment was written in an assembly language for a single address computer with one accumulator register:</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">LOAD\tB\nMULT\tC\nSTORE\tT1\nADD\tA\nSTORE\tT2\nMULT\tT2\nADD\tT1\nSTORE\tZ</pre>\n\n<p>Give the arithmetic expression implemented by the fragment.</p></div><br><br><b>GATE CSE 1988 | Question: 9i</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/94384/gate-cse-1988-question-9i\" target=\"_blank\">https://gateoverflow.in/94384/gate-cse-1988-question-9i</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"2508\"></a><div itemprop=\"text\"></div><br><br><b>GATE CSE 1994 | Question: 12</b></p>",
          "type": "numeric",
          "options": [
            "<p>Assume that a CPU has only two registers \\( R_1 \\) and \\( R_2 \\) and that only the following instruction is available \\( XOR \\: R_i, R_j;\\{R_j \\leftarrow R_i \\oplus R_j, \\text{ for } i, j =1, 2\\} \\)</p>\n\n\t<p>Using this XOR instruction, find an instruction sequence in order to exchange the contents of the registers \\( R_1 \\) and \\( R_2 \\)</p>",
            "<p>The line p of the circuit shown in figure has stuck at \\( 1 \\) fault. Determine an input test to detect the fault.</p>\n\n\t<p><img alt=\"\" src=\"images/gateOverflow_pyq_images/co___architecture___machine_instruction/ea4ea38538acf144f65595f881031484.png\" width=\"450\"></p>"
          ],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2508/gate-cse-1994-question-12\" target=\"_blank\">https://gateoverflow.in/2508/gate-cse-1994-question-12</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"1516\"></a><div itemprop=\"text\"><p>Consider the following program fragment in the assembly language of a certain hypothetical processor. The processor has three general purpose registers \\( R1, R2 \\) and \\( R3 \\). The meanings of the instructions are shown by comments (starting with ;) after the instructions.</p><pre class=\"prettyprint lang-c_cpp\">X:  CMP R1, 0;  Compare R1 and 0, set flags appropriately in status register\n    JZ  Z;   Jump if zero to target Z\n    MOV R2, R1; Copy contents of R1 to R2\n    SHR R1; Shift right R1 by 1 bit\n    SHL R1; Shift left R1 by 1 bit\n    CMP R2, R1; Compare R2 and R1 and set flag in status register\n    JZ  Y;    Jump if zero to target Y\n    INC R3; Increment R3 by 1;\nY:  SHR R1; Shift right R1 by 1 bit\n    JMP X;  Jump to target X\nZ:...\n</pre></div><br><br><b>GATE CSE 1999 | Question: 17</b></p>",
          "type": "numeric",
          "options": [
            "<p>Initially \\( R1, R2 \\) and \\( R3 \\) contain the values \\( 5 \\),\\( 0 \\) and \\( 0 \\) respectively, what are the final values of \\( R1 \\) and \\( R3 \\) when control reaches Z?</p>",
            "<p>In general, if \\( R1, R2 \\) and \\( R3 \\) initially contain the values n, 0, and 0 respectively. What is the final value of \\( R3 \\) when control reaches \\( Z \\)?</p>"
          ],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/1516/gate-cse-1999-question-17\" target=\"_blank\">https://gateoverflow.in/1516/gate-cse-1999-question-17</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"938\"></a><div itemprop=\"text\"><p>Consider the following assembly language program for a hypothetical processor \\( A, B, \\) and \\( C \\) are \\( 8- \\)bit registers. The meanings of various instructions are shown as comments.<br>\n\\[ \\small \\begin{array}{lll}&nbsp;&amp; \\text{MOV B, #0}&amp;&amp; \\text{;} &amp; \\text{\\( B \\leftarrow 0 \\)} \\\\&amp; \\text{MOV C, #8} &amp;&amp; \\text{;}&amp; \\text{\\( C \\leftarrow 8 \\)} \\\\<br>\n\\text{Z:} &amp; \\text{CMP C, #0} &amp;&amp;\\text{;}&amp; \\text{compare C with 0} \\\\&nbsp;<br>\n&amp; \\text{JZ X} &amp;&amp; \\text{;}&amp; \\text{jump to X if zero flag is set}&nbsp; \\\\<br>\n&amp; \\text{SUB C, #1} &amp;&amp; \\text{;}&amp; \\text{\\( C \\gets C-1 \\)}&nbsp; \\\\&nbsp;<br>\n&amp; \\text{RRC A, #1} &amp;&amp; \\text{;}&amp; \\text{right rotate A through carry by one bit. Thus:}&nbsp; \\\\&nbsp; &amp; \\text{} &amp;&amp; \\text{;}&amp; \\text{If the initial values of A and the carry flag are \\( a_7\\ldots a_0 \\) and}&nbsp; \\\\&nbsp;<br>\n&amp; \\text{} &amp;&amp; \\text{;}&amp; \\text{\\( c_0 \\) respectively, their values after the execution of this}&nbsp; \\\\&nbsp;<br>\n&amp; \\text{} &amp;&amp; \\text{;}&amp; \\text{instruction will be \\( c_0a_7\\ldots a_1 \\) and \\( a_0 \\) respectively.}&nbsp; \\\\&nbsp;<br>\n&amp; \\text{JC Y} &amp;&amp; \\text{;}&amp; \\text{jump to Y if carry flag is set}&nbsp; \\\\<br>\n&amp; \\text{JMP Z} &amp;&amp; \\text{;}&amp; \\text{jump to Z}&nbsp; \\\\<br>\n\\text{Y:} &amp; \\text{ADD B, #1} &amp;&amp; \\text{;}&amp; \\text{\\( B \\gets B+1 \\)}&nbsp; \\\\&nbsp;<br>\n&amp; \\text{JMP Z} &amp;&amp; \\text{;}&amp; \\text{jump to Z}&nbsp; \\\\&nbsp;<br>\n\\text{X:}&amp; \\text{} &amp;&amp; \\text{;}&amp; \\text{}&nbsp; \\\\ \\end{array} \\]<br>\nIf the initial value of register A is A0 the value of register B after the program execution will be</p>\n\n</div><br><br><b>GATE CSE 2003 | Question: 48</b></p>",
          "type": "single",
          "options": [
            "<p>the number of \\( 0 \\) bits in \\( A_0 \\)</p>",
            "<p>the number of \\( 1 \\) bits in \\( A_0 \\)</p>",
            "<p>\\( A_0 \\)</p>",
            "<p>\\( 8 \\)</p>"
          ],
          "correct_answer": "<p>the number of \\( 1 \\) bits in \\( A_0 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/938/gate-cse-2003-question-48\" target=\"_blank\">https://gateoverflow.in/938/gate-cse-2003-question-48</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"43577\"></a><div itemprop=\"text\"><p>Consider the following assembly language program for a hypothetical processor \\( A, B, \\) and&nbsp;\\( C \\) are \\( 8 \\) bit registers. The meanings of various instructions are shown as comments.</p>\n\n<table border=\"0\" cellpadding=\"1\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td style=\"width:8%\">&nbsp;</td>\n\t\t\t<td>\n\t\t\t<p>MOV B, #0</p>\n\t\t\t</td>\n\t\t\t<td style=\"width:1px\">\n\t\t\t<p>;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p>\\( B \\leftarrow 0 \\)</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td style=\"width:125px\">\n\t\t\t<p>MOV C, #8</p>\n\t\t\t</td>\n\t\t\t<td style=\"width:1px\">\n\t\t\t<p>;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p>\\( C \\leftarrow 8 \\)</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p>Z:</p>\n\t\t\t</td>\n\t\t\t<td style=\"width:85px\">\n\t\t\t<p>CMP C, #0</p>\n\t\t\t</td>\n\t\t\t<td style=\"width:1px\">\n\t\t\t<p>;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p>compare C with 0</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td style=\"width:85px\">\n\t\t\t<p>JZ X</p>\n\t\t\t</td>\n\t\t\t<td style=\"width:1px\">\n\t\t\t<p>;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p>jump to X if zero flag is set</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td style=\"width:85px\">\n\t\t\t<p>SUB C, #1</p>\n\t\t\t</td>\n\t\t\t<td style=\"width:1px\">\n\t\t\t<p>;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p>\\( C \\gets C-1 \\)</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td style=\"width:85px\">\n\t\t\t<p>RRC A, #1</p>\n\t\t\t</td>\n\t\t\t<td style=\"width:1px\">\n\t\t\t<p>;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p>right rotate A through carry by one bit. Thus:</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td style=\"width:85px\">&nbsp;</td>\n\t\t\t<td style=\"width:1px\">\n\t\t\t<p>;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p>If the initial values of A and the carry flag are \\( a_7..a_0 \\) and&nbsp;</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td style=\"width:85px\">&nbsp;</td>\n\t\t\t<td style=\"width:1px\">\n\t\t\t<p>;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p>\\( c_0 \\) respectively, their values after the execution of this</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td style=\"width:85px\">&nbsp;</td>\n\t\t\t<td style=\"width:1px\">\n\t\t\t<p>;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p>instruction will be \\( c_0a_7..a_1 \\) and \\( a_0 \\) respectively.</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td style=\"width:85px\">\n\t\t\t<p>JC Y</p>\n\t\t\t</td>\n\t\t\t<td style=\"width:1px\">\n\t\t\t<p>;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p>jump to Y if carry flag is set</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td style=\"width:85px\">\n\t\t\t<p>JMP Z</p>\n\t\t\t</td>\n\t\t\t<td style=\"width:1px\">\n\t\t\t<p>;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p>jump to Z</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p>Y:</p>\n\t\t\t</td>\n\t\t\t<td style=\"width:85px\">\n\t\t\t<p>ADD B, #1</p>\n\t\t\t</td>\n\t\t\t<td style=\"width:1px\">\n\t\t\t<p>;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p>\\( B \\gets B+1 \\)</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>&nbsp;</td>\n\t\t\t<td style=\"width:85px\">\n\t\t\t<p>JMP Z</p>\n\t\t\t</td>\n\t\t\t<td style=\"width:1px\">\n\t\t\t<p>;</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p>jump to Z</p>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p>X:</p>\n\t\t\t</td>\n\t\t\t<td style=\"width:85px\">&nbsp;</td>\n\t\t\t<td style=\"width:1px\">&nbsp;</td>\n\t\t\t<td>&nbsp;</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p>Which of the following instructions when inserted at location \\( X \\) will ensure that the value of the register \\( A \\) after program execution is as same as its initial value?</p>\n\n</div><br><br><b>GATE CSE 2003 | Question: 49</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{RRC A}, \\#1 \\)</p>",
            "<p>\\( \\text{NOP} ; \\) no operation</p>",
            "<p>\\( \\text{LRC A,} \\#1;  \\)&nbsp; left rotate \\( A \\) through carry flag by one bit</p>",
            "<p>\\( \\text{ADD A,} \\#1 \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{RRC A}, \\#1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43577/gate-cse-2003-question-49\" target=\"_blank\">https://gateoverflow.in/43577/gate-cse-2003-question-49</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"1058\"></a><div itemprop=\"text\"><p>Consider the following program segment for a hypothetical CPU having three user registers \\( R_1, R_2 \\) and \\( R_3. \\) \\[ \\begin{array}{|l|l|c|} \\hline \\text {Instruction} &nbsp;&amp; &nbsp;\\text{Operation&nbsp;}&amp; \\text{Instruction size} \\\\&amp;&amp; \\text{(in words)} \\\\\\hline \\text{MOV \\( R_1,5000 \\)} &amp; \\text{\\( R_1 \\)}&nbsp;\\leftarrow&nbsp; \\text{Memory\\( [5000] \\)}&amp; \\text{\\( 2 \\)} \\\\\\hline\\text{MOV \\( R2,(R1) \\)} &amp; \\text{\\( R2 \\)}&nbsp;\\leftarrow&nbsp; \\text{Memory\\( [(R_1)] \\)}&amp; \\text{\\( 1 \\)} \\\\\\hline \\text{ADD&nbsp;\\( R_2,R_3 \\)} &amp; \\text{\\( R2 \\)}&nbsp;\\leftarrow&nbsp; \\text{\\( R_2 + R_3 \\)} &amp; \\text{\\( 1 \\)} \\\\\\hline \\text{MOV&nbsp;\\( 6000,R_2 \\)} &amp; \\text{Memory\\( [6000] \\)}&nbsp;\\leftarrow&nbsp; \\text{\\( R_2 \\)} &amp; \\text{\\( 2 \\)} \\\\\\hline \\text{HALT} &amp; \\text{Machine Halts} &amp; \\text{\\( 1 \\)} \\\\\\hline \\end{array} \\]Consider that the memory is byte addressable with size \\( 32 \\) bits, and the program has been loaded starting from memory location \\( 1000 \\) (decimal). If an interrupt occurs while the CPU has been halted after executing the HALT instruction, the return address (in decimal) saved in the stack will be</p>\n\n</div><br><br><b>GATE CSE 2004 | Question: 63</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 1007 \\)</p>",
            "<p>\\( 1020 \\)</p>",
            "<p>\\( 1024 \\)</p>",
            "<p>\\( 1028 \\)</p>"
          ],
          "correct_answer": "<p>\\( 1028 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1058/gate-cse-2004-question-63\" target=\"_blank\">https://gateoverflow.in/1058/gate-cse-2004-question-63</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"43570\"></a><div itemprop=\"text\"><p>Consider the following program segment for a hypothetical CPU having three user registers \\( R_1, R_2 \\) and \\( R_3. \\)</p>\n\n<p>\\begin{array}{|l|l|c|} \\hline \\text {Instruction} &nbsp;&amp; &nbsp;\\text{Operation&nbsp;}&amp; \\text{Instruction size (in Words)} \\\\\\hline \\text{MOV \\( R_1,5000 \\)}&nbsp;<br>\n&amp; \\text{\\( R1 \\)}&nbsp;\\leftarrow&nbsp; \\text{Memory\\( [5000] \\)}&amp; \\text{\\( 2 \\)} \\\\\\hline\\text{MOV \\( R_2(R_1) \\)} &amp; \\text{\\( R2 \\)}&nbsp;\\leftarrow&nbsp; \\text{Memory\\( [(R_1)] \\)}&amp; \\text{\\( 1 \\)} \\\\\\hline \\text{ADD&nbsp;\\( R_2,R_3 \\)} &amp; \\text{\\( R_2 \\)}&nbsp;\\leftarrow&nbsp; \\text{\\( R_2 + R_3 \\)} &amp; \\text{\\( 1 \\)} \\\\\\hline \\text{MOV&nbsp;\\( 6000,R_2 \\)} &amp; \\text{Memory\\( [6000] \\)}&nbsp;\\leftarrow&nbsp; \\text{\\( R_2 \\)} &amp; \\text{\\( 2 \\)} \\\\\\hline \\text{Halt} &amp; \\text{Machine Halts} &amp; \\text{\\( 1 \\)} \\\\\\hline \\end{array}</p>\n\n<p>Let the clock cycles required for various operations be as follows:</p>\n\n<p>\\begin{array}{|l|l|} \\hline \\text {Register to/from memory transfer} &nbsp;&amp; &nbsp;\\text{3 clock cycles&nbsp;} \\\\\\hline&nbsp; \\text {ADD with both operands in register} &nbsp;&amp; &nbsp;\\text{1&nbsp;clock cycles&nbsp;}&nbsp;\\\\\\hline \\text {Instruction fetch and decode} &nbsp;&amp; &nbsp;\\text{2&nbsp;clock cycles&nbsp;}\\\\\\hline&nbsp;\\end{array}</p>\n\n<p>The total number of clock cycles required to execute the program is</p>\n\n</div><br><br><b>GATE CSE 2004 | Question: 64</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 29 \\)</p>",
            "<p>\\( 24 \\)</p>",
            "<p>\\( 23 \\)</p>",
            "<p>\\( 20 \\)</p>"
          ],
          "correct_answer": "<p>\\( 24 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43570/gate-cse-2004-question-64\" target=\"_blank\">https://gateoverflow.in/43570/gate-cse-2004-question-64</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"888\"></a><div itemprop=\"text\"><p>A CPU has \\( 24 \\)-\\( bit \\) instructions. A program starts at address \\( 300 \\) (in decimal). Which one of the following is a legal program counter (all values in decimal)?</p>\n\n</div><br><br><b>GATE CSE 2006 | Question: 09, ISRO2009-35</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 400 \\)</p>",
            "<p>\\( 500 \\)</p>",
            "<p>\\( 600 \\)</p>",
            "<p>\\( 700 \\)</p>"
          ],
          "correct_answer": "<p>\\( 600 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/888/gate-cse-2006-question-09-isro2009-35\" target=\"_blank\">https://gateoverflow.in/888/gate-cse-2006-question-09-isro2009-35</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"1252\"></a><div itemprop=\"text\"><p>In a simplified computer the instructions are:</p>\n\n<p>\\[ \\begin{array}{|l|l|} \\hline \\text {OP }R _j , R _i &amp; \\text{Perform }R _j \\text{ OP } R _i \\text{ and store the result in register }R _j \\\\\\hline<br>\n\\text{OP }m,R _i &amp; \\text{Perform } val\\text{ OP }R _i \\text{ and store the result in register }R _i&nbsp; \\\\<br>\n&amp; val \\text{ denotes the content of the memory location }m \\\\\\hline<br>\n\\text{MOV }m,R _i &amp; \\text{Moves the content of memory location }m \\text{ to register }R _i \\\\\\hline<br>\n\\text{MOV }R _i,m &amp; \\text{Moves the content of register }R _i\\text{ to memory location }m\\\\\\hline \\end{array} \\]</p>\n\n<p>The computer has only two registers, and OP is either ADD or SUB. Consider the following basic block:</p>\n\n<ul>\n\t<li>\\( t_1\\: = \\: a+b \\)</li>\n\t<li>\\( t_2\\: = \\: c+d \\)</li>\n\t<li>\\( t_3\\: = \\: e-t_2 \\)</li>\n\t<li>\\( t_4\\: = \\: t_1 – t_3 \\)</li>\n</ul>\n\n<p>Assume that all operands are initially in memory. The final value of the computation should be in memory. What is the minimum number of MOV instructions in the code generated for this basic block?</p>\n\n</div><br><br><b>GATE CSE 2007 | Question: 54</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2 \\)</p>",
            "<p>\\( 3 \\)</p>",
            "<p>\\( 5 \\)</p>",
            "<p>\\( 6 \\)</p>"
          ],
          "correct_answer": "<p>\\( 3 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1252/gate-cse-2007-question-54\" target=\"_blank\">https://gateoverflow.in/1252/gate-cse-2007-question-54</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"1269\"></a><div itemprop=\"text\"><p>Consider the following program segment. Here \\( \\text{R1, R2} \\) and \\( \\text{R3} \\) are the general purpose registers.<br>\n\\[ \\begin{array}{|l|l|l|c|} \\hline &amp; \\text {Instruction} &amp; \\text{Operation }&amp; \\text{Instruction Size} \\\\ &amp; &amp; &amp; \\text{(no. of words)} \\\\\\hline &amp; \\text{MOV R1,(3000)} &amp; \\text{R1} \\leftarrow \\text{M[3000]} &amp; \\text{\\( 2 \\)} \\\\\\hline \\text{LOOP:}&amp; \\text{MOV R2,(R3)} &amp; \\text{R2} \\leftarrow \\text{M[R3]} &amp; \\text{\\( 1 \\)} \\\\\\hline &amp; \\text{ADD R2,R1} &amp; \\text{R2} \\leftarrow \\text{R1 + R2} &amp; \\text{\\( 1 \\)} \\\\\\hline &amp; \\text{MOV (R3),R2} &amp; \\text{M[R3]} \\leftarrow \\text{R2} &amp; \\text{\\( 1 \\)} \\\\\\hline&amp; \\text{INC R3} &amp; \\text{R3} \\leftarrow \\text{R3 + 1} &amp; \\text{\\( 1 \\)} \\\\\\hline &amp; \\text{DEC R1} &amp; \\text{R1} \\leftarrow \\text{R1 – 1} &amp; \\text{\\( 1 \\)} \\\\\\hline&amp; \\text{BNZ LOOP} &amp; \\text{Branch on not zero} &amp; \\text{\\( 2 \\)} \\\\\\hline &amp; \\text{HALT} &amp; \\text{Stop} &amp; \\text{\\( 1 \\)} \\\\\\hline\\end{array} \\]</p>\n\n<p>Assume that the content of memory location \\( 3000 \\) is \\( 10 \\) and the content of the register \\( \\text{R3} \\) is \\( 2000 \\). The content of each of the memory locations from \\( 2000 \\) to \\( 2010 \\) is \\( 100 \\). The program is loaded from the memory location \\( 1000 \\). All the numbers are in decimal.</p>\n\n<p>Assume that the memory is word addressable. The number of memory references for accessing the data in executing the program completely is</p>\n\n</div><br><br><b>GATE CSE 2007 | Question: 71</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 10 \\)</p>",
            "<p>\\( 11 \\)</p>",
            "<p>\\( 20 \\)</p>",
            "<p>\\( 21 \\)</p>"
          ],
          "correct_answer": "<p>\\( 21 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1269/gate-cse-2007-question-71\" target=\"_blank\">https://gateoverflow.in/1269/gate-cse-2007-question-71</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"43515\"></a><div itemprop=\"text\"><p>Consider the following program segment. Here \\( \\text{R1, R2} \\) and \\( \\text{R3} \\) are the general purpose registers.<br>\n\\[ \\small \\begin{array}{|c|l|l||c|} \\hline &amp; \\text {Instruction} &amp; &nbsp;\\text{Operation&nbsp;}&amp; \\text{Instruction Size}&nbsp;<br>\n\\\\ &amp; &amp; &amp; \\text{(no. of words)} \\\\\\hline &amp; \\text{MOV R1,(3000)}&nbsp;&amp; \\text{R1} \\leftarrow \\text{M[3000]} &amp; 2<br>\n\\\\\\hline \\text{LOOP:}&amp; \\text{MOV R2,(R3)}&nbsp;&amp; \\text{R2} \\leftarrow \\text{M[R3]} &amp; 1<br>\n\\\\\\hline &amp; \\text{ADD&nbsp;R2,R1}&nbsp;&amp; \\text{R2} \\leftarrow \\text{R1 + R2} &amp; 1<br>\n\\\\\\hline &amp; \\text{MOV (R3),R2}&nbsp;&amp; \\text{M[R3]} \\leftarrow \\text{R2} &amp; 1<br>\n\\\\\\hline&amp; \\text{INC&nbsp;R3}&nbsp;&amp; \\text{R3} \\leftarrow \\text{R3 + 1} &amp; 1<br>\n\\\\\\hline &amp; \\text{DEC&nbsp;R1}&nbsp;&amp; \\text{R1} \\leftarrow \\text{R1 –&nbsp;1} &amp; 1<br>\n\\\\\\hline&amp; \\text{BNZ&nbsp;LOOP}&nbsp;&amp; \\text{Branch on not zero} &amp; 2<br>\n\\\\\\hline &amp; \\text{HALT}&nbsp;&amp; \\text{Stop} &amp; 1<br>\n\\\\\\hline\\end{array} \\]</p>\n\n<p>Assume that the content of memory location \\( 3000 \\) is \\( 10 \\) and the content of the register \\( \\text{R3} \\) is \\( 2000 \\). The content of each of the memory locations from \\( 2000 \\) to \\( 2010 \\) is \\( 100 \\). The program is loaded from the memory location \\( 1000 \\). All the numbers are in decimal.</p>\n\n<p>Assume that the memory is word addressable. After the execution of this program, the content of memory location \\( 2010 \\) is:</p>\n\n</div><br><br><b>GATE CSE 2007 | Question: 72</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 100 \\)</p>",
            "<p>\\( 101 \\)</p>",
            "<p>\\( 102 \\)</p>",
            "<p>\\( 110 \\)</p>"
          ],
          "correct_answer": "<p>\\( 100 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43515/gate-cse-2007-question-72\" target=\"_blank\">https://gateoverflow.in/43515/gate-cse-2007-question-72</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"43516\"></a><div itemprop=\"text\"><p>Consider the following program segment. Here \\( \\text{R1, R2} \\) and \\( \\text{R3} \\) are the general purpose registers.</p>\n\n<p>\\[ \\begin{array}{|l|l|l|c|} \\hline &amp; \\text {Instruction} &amp; \\text{Operation }&amp; \\text{Instruction Size} \\\\ &amp; &amp; &amp; \\text{(no. of words)}\\\\\\hline &amp; \\text{MOV R1,(3000)} &amp; \\text{R1} \\leftarrow \\text{M[3000]} &amp; \\text{\\( 2 \\)} \\\\\\hline \\text{LOOP:}&amp; \\text{MOV R2,(R3)} &amp; \\text{R2} \\leftarrow \\text{M[R3]} &amp; \\text{\\( 1 \\)} \\\\\\hline &amp; \\text{ADD R2,R1} &amp; \\text{R2} \\leftarrow \\text{R1 + R2} &amp; \\text{\\( 1 \\)} \\\\\\hline &amp; \\text{MOV (R3),R2} &amp; \\text{M[R3]} \\leftarrow \\text{R2} &amp; \\text{\\( 1 \\)} \\\\\\hline&amp; \\text{INC R3} &amp;\\text{R3} \\leftarrow \\text{R3 + 1} &amp; \\text{\\( 1 \\)} \\\\\\hline &amp; \\text{DEC R1} &amp;\\text{R1} \\leftarrow \\text{R1 – 1} &amp; \\text{\\( 1 \\)} \\\\\\hline&amp; \\text{BNZ LOOP} &amp; \\text{Branch on not zero} &amp; \\text{\\( 2 \\)} \\\\\\hline &amp; \\text{HALT} &amp; \\text{Stop} &amp; \\text{\\( 1 \\)} \\\\\\hline\\end{array} \\]</p>\n\n<p>Assume that the content of memory location \\( 3000 \\) is \\( 10 \\) and the content of the register \\( \\text{R3} \\) is \\( 2000. \\) The content of each of the memory locations from \\( 2000 \\) to \\( 2010 \\) is \\( 100. \\) The program is loaded from the memory location \\( 1000. \\) All the numbers are in decimal.</p>\n\n<p>Assume that the memory is byte addressable and the word size is \\( 32 \\) bits. If an interrupt occurs during the execution&nbsp; of the instruction “INC R3”, what return address will be pushed on to the stack?</p>\n\n</div><br><br><b>GATE CSE 2007 | Question: 73</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 1005 \\)</p>",
            "<p>\\( 1020 \\)</p>",
            "<p>\\( 1024 \\)</p>",
            "<p>\\( 1040 \\)</p>"
          ],
          "correct_answer": "<p>\\( 1024 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43516/gate-cse-2007-question-73\" target=\"_blank\">https://gateoverflow.in/43516/gate-cse-2007-question-73</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"445\"></a><div itemprop=\"text\"><p>Which of the following must be true for the RFE (Return From Exception) instruction on a general purpose processor?</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>\n\t<p>It must be a trap instruction</p>\n\t</li>\n\t<li>\n\t<p>It must be a privileged instruction</p>\n\t</li>\n\t<li>\n\t<p>An exception cannot be allowed to occur during execution of an RFE instruction</p>\n\t</li>\n</ol>\n\n</div><br><br><b>GATE CSE 2008 | Question: 34</b></p>",
          "type": "single",
          "options": [
            "<p>I only</p>",
            "<p>II only</p>",
            "<p>I and II only</p>",
            "<p>I, II and III only</p>"
          ],
          "correct_answer": "<p>I, II and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/445/gate-cse-2008-question-34\" target=\"_blank\">https://gateoverflow.in/445/gate-cse-2008-question-34</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"8215\"></a><div itemprop=\"text\"><p>Consider a processor with byte-addressable memory. Assume that all registers, including program counter (PC) and Program Status Word (PSW), are size of two bytes. A stack in the main memory is implemented from memory location \\( (0100)_{16} \\) and it grows upward. The stack pointer (SP) points to the top element of the stack. The current value of SP is \\( (016E)_{16} \\). The CALL instruction is of two words, the first word is the op-code and the second word is the starting address of the subroutine (one word = 2 bytes). The CALL instruction is implemented as follows:</p>\n\n<ul>\n\t<li>Store the current value of PC in the stack</li>\n\t<li>Store the value of PSW register in the stack</li>\n\t<li>Load the statring address of the subroutine in PC</li>\n</ul>\n\n<p>The content of PC just before the fetch of a CALL instruction is \\( (5FA0)_{16} \\). After execution of the CALL instruction, the value of the stack pointer is:</p>\n\n</div><br><br><b>GATE CSE 2015 Set 2 | Question: 42</b></p>",
          "type": "single",
          "options": [
            "<p>\\( (016A)_{16} \\)</p>",
            "<p>\\( (016C)_{16} \\)</p>",
            "<p>\\( (0170)_{16} \\)</p>",
            "<p>\\( (0172)_{16} \\)</p>"
          ],
          "correct_answer": "<p>\\( (0172)_{16} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8215/gate-cse-2015-set-2-question-42\" target=\"_blank\">https://gateoverflow.in/8215/gate-cse-2015-set-2-question-42</a></p>"
        },
        {
          "id": 15,
          "question": "<p><a name=\"39547\"></a><div itemprop=\"text\">A processor has \\( 40 \\) distinct instruction and \\( 24 \\) general purpose registers. A \\( 32 \\)-bit instruction word has an opcode, two registers operands and an immediate operand. The number of bits available for the immediate operand field is_______.</div><br><br><b>GATE CSE 2016 Set 2 | Question: 10</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "16",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/39547/gate-cse-2016-set-2-question-10\" target=\"_blank\">https://gateoverflow.in/39547/gate-cse-2016-set-2-question-10</a></p>"
        },
        {
          "id": 16,
          "question": "<p><a name=\"357397\"></a><div itemprop=\"text\">Consider the following instruction sequence where registers \\( \\text{R1}, \\text{R2} \\) and \\( \\text{R3} \\) are general purpose and \\( \\text{MEMORY[X]} \\) denotes the content at the memory location \\( \\text{X}. \\)<br>\n<br>\n\\( \\begin{array}{llc} \\textbf{Instruction} &amp; \\textbf{Semantics} &amp; \\textbf{Instruction Size} \\text{ (bytes)} \\\\ \\hline \\text{MOV } \\text{R1}, (5000) &amp; \\text{R1} \\leftarrow \\text{MEMORY}[5000] &amp; 4 \\\\ \\hline \\text{MOV } \\text{R2}, (\\text{R3}) &amp; \\text{R2} \\leftarrow \\text{MEMORY[R3]} &amp; 4 \\\\ \\hline \\text{ADD} \\text{R2}, \\text{R1} &amp; \\text{R2} \\leftarrow \\text{R1} + \\text{R2} &amp; 2 \\\\ \\hline \\text{MOV } (\\text{R3}), \\text{R2} &amp; \\text{MEMORY[R3]} \\leftarrow \\text{R2} &amp; 4 \\\\ \\hline \\text{INC } \\text{R3} &amp; \\text{R3} \\leftarrow \\text{R3}+1 &nbsp;&amp; 2 \\\\ \\hline \\text{DEC } \\text{R1} &amp; \\text{R1} \\leftarrow \\text{R1}-1 &amp; 2 \\\\ \\hline \\text{BNZ } 1004 &amp; \\text{Branch if not zero to the} &amp; 2 \\\\ &amp; \\text{given absolute address}&amp; \\\\ \\hline \\text{HALT} &nbsp;&amp; \\text{Stop} &amp; 1 \\\\ \\hline \\end{array} \\)<br>\n<br>\nAssume that the content of the memory location \\( 5000 \\) is \\( 10 \\), and the content of the register \\( \\text{R3} \\) is \\( 3000 \\). The content of each of the memory locations from \\( 3000 \\) to \\( 3020 \\) is \\( 50 \\). The instruction sequence starts from the memory location \\( 1000 \\). All the numbers are in decimal format. Assume that the memory is byte addressable.<br>\n<br>\nAfter the execution of the program, the content of memory location \\( 3010 \\) is ____________</div><br><br><b>GATE CSE 2021 Set 1 | Question: 55</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "50:50",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/357397/gate-cse-2021-set-1-question-55\" target=\"_blank\">https://gateoverflow.in/357397/gate-cse-2021-set-1-question-55</a></p>"
        },
        {
          "id": 17,
          "question": "<p><a name=\"399280\"></a><div itemprop=\"text\"><p>Consider the given \\( \\text{C} \\)-code and its corresponding assembly code, with a few operands \\( \\text{U1-U4} \\) being unknown. Some useful information as well as the semantics of each unique assembly instruction is annotated as inline comments in the code. The memory is byte-addressable.</p><table border=\"1\" cellpadding=\"1\" style=\"width:100%\"><tbody><tr><td style=\"width:300px\"><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" style=\"text-align: left;\">//C-code\n&nbsp;\n&nbsp; &nbsp; &nbsp; \n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; \n\nint a[10], b[10], i;\n&nbsp;// int is 32 bit\n for(i=0; i&lt;10; i++)\n   a[i] = b[i] * 8;\n\n</pre></td><td style=\"width:650px\"><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" style=\"text-align: left;\"> ;assembly code (; indicates comments)\n&nbsp;;r1-r5 are 32-bit integer registers\n&nbsp;;initialize r1=0, r2=10 &nbsp; &nbsp; \n&nbsp;;initialize r3, r4 with base address of a, b \n\n  L01: jeq r1, r2, end  ;if(r1==r2) goto end\n  L02: lw, r5, 0(r4)    ;r5 &lt;- Memory[r4+0]\n  L03: shl, r5, r5, U1  ;r5 &lt;- r5 &lt;&lt; U1\n  L04: sw, r5, 0(r3)    ;Memory[r3+0] &lt;- r5\n  L05: add, r3, r3, U2  ;r3 &lt;- r3+U2\n  L06: add, r4, r4, U3 \n  L07: add, r1, r1, 1\n  L08: jmp U4           ;goto U4\n  L09: end\n</pre></td></tr></tbody></table><p>&nbsp;</p><p>Which one of the following options is a \\( \\text{CORRECT} \\) replacement for operands in the position \\( \\text{(U1, U2, U3, U4)} \\) in the above assembly code?</p></div><br><br><b>GATE CSE 2023 | Question: 31</b></p>",
          "type": "single",
          "options": [
            "<p>\\( (8,4,1, \\text{L02)} \\)</p>",
            "<p>\\( (3,4,4, \\text{L01)} \\)</p>",
            "<p>\\( (8,1,1, \\text{L02)} \\)</p>",
            "<p>\\( (3,1,1, \\text{L01)} \\)</p>"
          ],
          "correct_answer": "<p>\\( (3,4,4, \\text{L01)} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/399280/gate-cse-2023-question-31\" target=\"_blank\">https://gateoverflow.in/399280/gate-cse-2023-question-31</a></p>"
        },
        {
          "id": 18,
          "question": "<p><a name=\"460053\"></a><div itemprop=\"text\"><p>A processor has \\( 64 \\) general-purpose registers and \\( 50 \\) distinct instruction types. An instruction is encoded in \\( 32 \\)-bits. What is the maximum number of bits that can be used to store the immediate operand for the given instruction?<br><br><strong>\\( \\text{ADD R1} \\), \\( \\#25 \\)&nbsp; / /&nbsp; \\( \\text{R 1=R 1+25} \\)</strong></p></div><br><br><b>GATE CSE 2025 | Set 1 | Question: 27</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 16 \\)</p>",
            "<p>\\( 20 \\)</p>",
            "<p>\\( 22 \\)</p>",
            "<p>\\( 24 \\)</p>"
          ],
          "correct_answer": "<p>\\( 20 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/460053/gate-cse-2025-set-1-question-27\" target=\"_blank\">https://gateoverflow.in/460053/gate-cse-2025-set-1-question-27</a></p>"
        },
        {
          "id": 19,
          "question": "<p><a name=\"3689\"></a><div itemprop=\"text\"><p>If we use internal data forwarding to speed up the performance of a CPU (R1, R2 and R3 are registers and M[100] is a memory reference), then the sequence of operations</p>\n\n<p>R1 → M[100]<br>\nM[100] → R2<br>\nM[100] → R3</p>\n\n<p>can be replaced by</p>\n\n</div><br><br><b>GATE IT 2004 | Question: 46</b></p>",
          "type": "single",
          "options": [
            "<p>R1 → R3<br>\n\tR2 → M[100]</p>",
            "<p>M[100] → R2<br>\n\tR1 → R2<br>\n\tR1 → R3</p>",
            "<p>R1 → M[100]<br>\n\tR2 → R3</p>",
            "<p>R1 → R2<br>\n\tR1 → R3<br>\n\tR1 → M[100]</p>"
          ],
          "correct_answer": "<p>R1 → R2<br>\n\tR1 → R3<br>\n\tR1 → M[100]</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3689/gate-it-2004-question-46\" target=\"_blank\">https://gateoverflow.in/3689/gate-it-2004-question-46</a></p>"
        },
        {
          "id": 20,
          "question": "<p><a name=\"3476\"></a><div itemprop=\"text\"><p>Following table indicates the latencies of operations between the instruction producing the result and instruction using the result.<br>\n\\[ \\begin{array}{|l|l|c|} \\hline \\textbf {Instruction producing the result} &amp; &nbsp;\\textbf{Instruction using the result }&amp; \\textbf{Latency} \\\\\\hline \\text{ALU&nbsp;Operation} &amp; \\text{ALU Operation}&nbsp;&amp; 2 \\\\\\hline \\text{ALU Operation}&nbsp;&amp; \\text{Store} &amp; \\text{2}\\\\\\hline \\text{Load} &amp; \\text{ALU Operation}&nbsp;&amp; \\text{1}\\\\\\hline \\text{Load} &amp; \\text{Store} &amp; \\text{0}&nbsp;\\\\\\hline \\end{array} \\]</p>\n\n<p>Consider the following code segment:</p>\n\n<pre class=\"prettyprint lang-c_cpp\"> Load R1, Loc 1; Load R1 from memory location Loc1\n Load R2, Loc 2; Load R2 from memory location Loc 2\n Add R1, R2, R1; Add R1 and R2 and save result in R1\n Dec R2;         Decrement R2\n Dec R1;         Decrement R1\n Mpy R1, R2, R3; Multiply R1 and R2 and save result in R3\n Store R3, Loc 3; Store R3 in memory location Loc 3</pre>\n\n<p><br>\nWhat is the number of cycles needed to execute the above code segment assuming each instruction takes one cycle to execute?</p>\n\n</div><br><br><b>GATE IT 2007 | Question: 41</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 7 \\)</p>",
            "<p>\\( 10 \\)</p>",
            "<p>\\( 13 \\)</p>",
            "<p>\\( 14 \\)</p>"
          ],
          "correct_answer": "<p>\\( 13 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3476/gate-it-2007-question-41\" target=\"_blank\">https://gateoverflow.in/3476/gate-it-2007-question-41</a></p>"
        },
        {
          "id": 21,
          "question": "<p><a name=\"3348\"></a><div itemprop=\"text\"><p>Assume that EA = (X)+ is the effective address equal to the contents of location X, with X incremented by one word length after the effective address is calculated; EA = −(X) is the effective address equal to the contents of location X, with X decremented by one word length before the effective address is calculated; EA = (X)− is the effective address equal to the contents of location X, with X decremented by one word length after the effective address is calculated. The format of the instruction is (opcode, source, destination), which means (destination ← source op destination). Using X as a stack pointer, which of the following instructions can pop the top two elements from the stack, perform the addition operation and push the result back to the stack.</p>\n\n</div><br><br><b>GATE IT 2008 | Question: 38</b></p>",
          "type": "single",
          "options": [
            "<p>ADD (X)−, (X)</p>",
            "<p>ADD (X), (X)−</p>",
            "<p>ADD −(X), (X)+</p>",
            "<p>ADD −(X), (X)</p>"
          ],
          "correct_answer": "<p>ADD (X)−, (X)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3348/gate-it-2008-question-38\" target=\"_blank\">https://gateoverflow.in/3348/gate-it-2008-question-38</a></p>"
        }
      ]
    }
  ]
});
