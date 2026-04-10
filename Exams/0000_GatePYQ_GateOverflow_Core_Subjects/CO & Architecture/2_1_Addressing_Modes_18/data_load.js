window.__examLoadCallback({
  "title": "CO & Architecture - Addressing Modes",
  "duration": 50,
  "sections": [
    {
      "name": "Addressing Modes",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"80194\"></a><div itemprop=\"text\"><p>The most relevant addressing mode to write position-independent codes is:</p>\n\n</div><br><br><b>GATE CSE 1987 | Question: 1-V</b></p>",
          "type": "single",
          "options": [
            "<p>Direct mode</p>",
            "<p>Indirect mode</p>",
            "<p>Relative mode</p>",
            "<p>Indexed mode</p>"
          ],
          "correct_answer": "<p>Relative mode</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/80194/gate-cse-1987-question-1-v\" target=\"_blank\">https://gateoverflow.in/80194/gate-cse-1987-question-1-v</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"94388\"></a><div itemprop=\"text\">In the program scheme given below indicate the instructions containing any operand needing relocation for position independent behaviour. Justify your answer.\\[ \\begin{array}{llll} &amp; Y = 10 &amp; &nbsp;\\\\ &nbsp;&amp; \\text{MOV} &amp; {X(R_0), R_{1}} &nbsp;\\\\ &amp; \\text{MOV} &amp; {X, R_0} \\\\ &amp; \\text{MOV} &amp; {2(R_0), R_{1}} \\\\ &nbsp;&amp; \\text{MOV} &amp; {Y(R_0), R_{5}} \\\\ &nbsp;&amp; \\ \\cdot &amp; &nbsp;&nbsp;\\\\ &amp; \\ \\cdot &amp; &nbsp;\\\\ &nbsp;&amp; \\ \\cdot &amp; \\\\ X: &amp; \\text{WORD} &amp; 0,0,0 &nbsp;\\\\ \\end{array} \\]</div><br><br><b>GATE CSE 1988 | Question: 9iii</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/94388/gate-cse-1988-question-9iii\" target=\"_blank\">https://gateoverflow.in/94388/gate-cse-1988-question-9iii</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"87078\"></a><div itemprop=\"text\">Match the pairs in the following questions:\\[ \\begin{array}{|ll|ll|}\\hline \\text{(A)} &amp; \\text{Base addressing} &amp; \\text{(p)} &amp; \\text{Reentranecy} \\\\\\hline &nbsp;\\text{(B)} &amp; \\text{Indexed addressing} &amp; \\text{(q)}&amp; \\text{Accumulator} \\\\\\hline &nbsp;&nbsp;\\text{(C)}&amp; \\text{Stack addressing} &amp; \\text{(r)} &nbsp;&amp; \\text{Array} \\\\\\hline &nbsp;\\text{(D)} &amp; \\text{Implied addressing} &amp;\\text{(s)} &nbsp;&amp; \\text{Position independent} &nbsp;\\\\\\hline \\end{array} \\]</div><br><br><b>GATE CSE 1989 | Question: 2-ii</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/87078/gate-cse-1989-question-2-ii\" target=\"_blank\">https://gateoverflow.in/87078/gate-cse-1989-question-2-ii</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"2307\"></a><div itemprop=\"text\"><p>The instruction format of a CPU is:</p>\n\n<p style=\"text-align:center\"><img alt=\"\" height=\"103\" src=\"images/gateOverflow_pyq_images/co___architecture___addressing_modes/069b6ff157333ac12fd69866802620bb.png\" width=\"280\"></p>\n\n<p>\\( \\text{Mode} \\) and \\( \\text{RegR} \\) together specify the operand. \\( \\text{RegR} \\) specifies a CPU register and \\( \\text{Mode} \\) specifies an addressing mode. In particular, \\( \\text{Mode}=2 \\) specifies that ‘the register \\( \\text{RegR} \\) contains the address of the operand, after fetching the operand, the contents of&nbsp;\\( \\text{RegR} \\) are incremented by \\( 1 \\)'.</p>\n\n<p>An instruction at memory location \\( 2000 \\) specifies \\( \\text{Mode}= 2 \\) and the \\( \\text{RegR} \\) refers to program counter (PC).</p>\n\n</div><br><br><b>GATE CSE 1993 | Question: 10</b></p>",
          "type": "numeric",
          "options": [
            "<p>What is the address of the operand?</p>",
            "<p>Assuming that is a non-jump instruction, what are the contents of PC after the execution of this instruction?</p>"
          ],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2307/gate-cse-1993-question-10\" target=\"_blank\">https://gateoverflow.in/2307/gate-cse-1993-question-10</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"2720\"></a><div itemprop=\"text\"><p>Relative mode of addressing is most relevant to writing:</p>\n\n</div><br><br><b>GATE CSE 1996 | Question: 1.16, ISRO2016-42</b></p>",
          "type": "single",
          "options": [
            "<p>Co – routines</p>",
            "<p>Position – independent code</p>",
            "<p>Shareable code</p>",
            "<p>Interrupt Handlers</p>"
          ],
          "correct_answer": "<p>Position – independent code</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2720/gate-cse-1996-question-1-16-isro2016-42\" target=\"_blank\">https://gateoverflow.in/2720/gate-cse-1996-question-1-16-isro2016-42</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"1656\"></a><div itemprop=\"text\">\n<p>Which of the following addressing modes permits relocation without any change whatsoever in the code?</p>\n\n\n</div><br><br><b>GATE CSE 1998 | Question: 1.19</b></p>",
          "type": "single",
          "options": [
            "<p>Indirect addressing</p>",
            "<p>Indexed addressing</p>",
            "<p>Base register addressing</p>",
            "<p>PC relative addressing</p>"
          ],
          "correct_answer": "<p>PC relative addressing</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1656/gate-cse-1998-question-1-19\" target=\"_blank\">https://gateoverflow.in/1656/gate-cse-1998-question-1-19</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"1500\"></a><div itemprop=\"text\"><p>A certain processor supports only the immediate and the direct addressing modes. Which of the following programming language features cannot be implemented on this processor?</p>\n\n</div><br><br><b>GATE CSE 1999 | Question: 2.23</b></p>",
          "type": "multiple",
          "options": [
            "<p>Pointers</p>",
            "<p>Arrays</p>",
            "<p>Records</p>",
            "<p>Recursive procedures with local variable</p>"
          ],
          "correct_answer": [
            "<p>Pointers</p>",
            "<p>Arrays</p>",
            "<p>Records</p>",
            "<p>Recursive procedures with local variable</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1500/gate-cse-1999-question-2-23\" target=\"_blank\">https://gateoverflow.in/1500/gate-cse-1999-question-2-23</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"633\"></a><div itemprop=\"text\"><p>The most appropriate matching for the following pairs\\[ \\begin{array}{ll}&nbsp;\\text{X: Indirect addressing} &amp; \\text{1: Loops } \\\\&nbsp; \\text{Y: Immediate addressing } &amp; \\text{2: Pointers} \\\\&nbsp; &nbsp;\\text{Z: Auto decrement addressing } &amp; \\text{3: Constants } \\\\&nbsp; \\end{array} \\] is</p>\n\n</div><br><br><b>GATE CSE 2000 | Question: 1.10</b></p>",
          "type": "single",
          "options": [
            "<p>\\( X - 3,&nbsp; Y - 2,&nbsp; Z - 1 \\)</p>",
            "<p>\\( X - 1,&nbsp; Y - 3,&nbsp; Z - 2 \\)</p>",
            "<p>\\( X - 2,&nbsp; Y - 3,&nbsp; Z - 1 \\)</p>",
            "<p>\\( X - 3,&nbsp; Y - 1,&nbsp; Z - 2 \\)</p>"
          ],
          "correct_answer": "<p>\\( X - 2,&nbsp; Y - 3,&nbsp; Z - 1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/633/gate-cse-2000-question-1-10\" target=\"_blank\">https://gateoverflow.in/633/gate-cse-2000-question-1-10</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"727\"></a><div itemprop=\"text\"><p>Which is the most appropriate match for the items in the first column with the items in the second column:\\[ \\begin{array}{|cl|cl|} \\hline \\text{X.} &amp;\\text{Indirect Addressing} &amp; &nbsp;\\text{I.} &amp;\\text{Array implementation}&nbsp;\\\\\\hline<br>\n\\text{Y.} &amp;\\text{Indexed Addressing} &amp;&nbsp;\\text{II.} &amp;\\text{Writing relocatable code}&nbsp;&nbsp;\\\\\\hline&nbsp;<br>\n\\text {Z.} &amp;\\text{Base Register Addressing}&nbsp;&nbsp;&amp; \\text{III.} &amp;\\text{Passing array as parameter}\\\\\\hline&nbsp; \\end{array} \\]</p>\n\n</div><br><br><b>GATE CSE 2001 | Question: 2.9</b></p>",
          "type": "single",
          "options": [
            "<p>(X, III), (Y, I), (Z, II)</p>",
            "<p>(X, II), (Y, III), (Z, I)</p>",
            "<p>(X, III), (Y, II), (Z, I)</p>",
            "<p>(X, I), (Y, III), (Z, II)</p>"
          ],
          "correct_answer": "<p>(X, III), (Y, I), (Z, II)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/727/gate-cse-2001-question-2-9\" target=\"_blank\">https://gateoverflow.in/727/gate-cse-2001-question-2-9</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"829\"></a><div itemprop=\"text\"><p>In the absolute addressing mode:</p>\n\n</div><br><br><b>GATE CSE 2002 | Question: 1.24</b></p>",
          "type": "single",
          "options": [
            "<p>the operand is inside the instruction</p>",
            "<p>the address of the operand in inside the instruction</p>",
            "<p>the register containing the address of the operand is specified inside the instruction</p>",
            "<p>the location of the operand is implicit</p>"
          ],
          "correct_answer": "<p>the address of the operand in inside the instruction</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/829/gate-cse-2002-question-1-24\" target=\"_blank\">https://gateoverflow.in/829/gate-cse-2002-question-1-24</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"1017\"></a><div itemprop=\"text\"><p>Which of the following addressing modes are suitable for program relocation at run time?</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>\n\t<p>Absolute addressing</p>\n\t</li>\n\t<li>\n\t<p>Based addressing</p>\n\t</li>\n\t<li>\n\t<p>Relative addressing</p>\n\t</li>\n\t<li>\n\t<p>Indirect addressing</p>\n\t</li>\n</ol>\n\n</div><br><br><b>GATE CSE 2004 | Question: 20</b></p>",
          "type": "single",
          "options": [
            "<p>I&nbsp;and IV</p>",
            "<p>I&nbsp;and II</p>",
            "<p>II&nbsp;and III</p>",
            "<p>I, II&nbsp;and IV</p>"
          ],
          "correct_answer": "<p>II&nbsp;and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1017/gate-cse-2004-question-20\" target=\"_blank\">https://gateoverflow.in/1017/gate-cse-2004-question-20</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"1388\"></a><div itemprop=\"text\"><p>Consider a three word machine instruction</p>\n\n<p>\\( \\text{ADD} A[R_0], @B \\)</p>\n\n<p>The first operand (destination) \\( “A[R_0]” \\)&nbsp;uses indexed addressing mode with \\( R_0 \\) as the index register. The second operand (source) \\( “@B” \\)&nbsp;uses indirect addressing mode. \\( A \\) and \\( B \\) are memory addresses residing at the second and third words, respectively. The first word of the instruction specifies the opcode, the index register designation and the source and destination addressing modes. During execution of \\( \\text{ADD} \\) instruction, the two operands are added and stored in the destination (first operand).</p>\n\n<p>The number of memory cycles needed during the execution cycle of the instruction is:</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 65</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 3 \\)</p>",
            "<p>\\( 4 \\)</p>",
            "<p>\\( 5 \\)</p>",
            "<p>\\( 6 \\)</p>"
          ],
          "correct_answer": "<p>\\( 4 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1388/gate-cse-2005-question-65\" target=\"_blank\">https://gateoverflow.in/1388/gate-cse-2005-question-65</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"1389\"></a><div itemprop=\"text\"><p>Match each of the high level language statements given on the left hand side with the most natural addressing mode from those listed on the right hand side.\\[ \\begin{array}{clcl}&nbsp;\\text{(1)} &amp;\\text{\\( A[I] = B[J] \\)} &amp; \\qquad\\text{(a)} &amp;\\text{Indirect addressing} \\\\&nbsp;<br>\n\\text{(2)} &amp;\\text{while \\( (^*A\\text{++}); \\)} &amp; \\qquad\\text{(b)} &amp; \\text{Indexed addressing} \\\\&nbsp; &nbsp;<br>\n\\text{(3)} &amp; \\text{int temp \\( = ^*x \\)} &amp; \\qquad\\text{(c)} &amp;\\text{Auto increment}&nbsp; \\\\&nbsp;\\end{array} \\]</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 66</b></p>",
          "type": "single",
          "options": [
            "<p>\\( (1, c), (2, b), (3, a) \\)</p>",
            "<p>\\( (1, c), (2, c), (3, b) \\)</p>",
            "<p>\\( (1, b), (2, c), (3, a) \\)</p>",
            "<p>\\( (1, a), (2, b), (3, c) \\)</p>"
          ],
          "correct_answer": "<p>\\( (1, b), (2, c), (3, a) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1389/gate-cse-2005-question-66\" target=\"_blank\">https://gateoverflow.in/1389/gate-cse-2005-question-66</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"444\"></a><div itemprop=\"text\"><p>Which of the following is/are true of the auto-increment addressing mode?</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>\n\t<p>It is useful in creating self-relocating code</p>\n\t</li>\n\t<li>\n\t<p>If it is included in an Instruction Set Architecture, then an additional ALU is required for effective address calculation</p>\n\t</li>\n\t<li>\n\t<p>The amount of increment depends on the size of the data item accessed</p>\n\t</li>\n</ol>\n\n</div><br><br><b>GATE CSE 2008 | Question: 33, ISRO2009-80</b></p>",
          "type": "single",
          "options": [
            "<p>I only</p>",
            "<p>II only</p>",
            "<p>III only</p>",
            "<p>II and III only</p>"
          ],
          "correct_answer": "<p>III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/444/gate-cse-2008-question-33-isro2009-80\" target=\"_blank\">https://gateoverflow.in/444/gate-cse-2008-question-33-isro2009-80</a></p>"
        },
        {
          "id": 15,
          "question": "<p><a name=\"2123\"></a><div itemprop=\"text\"><p>Consider a hypothetical processor with an instruction of type \\( \\text{LW &nbsp;R1, 20(R2)} \\), which during execution reads a \\( 32\\text{-bit} \\) word from memory and stores it in a \\( 32\\text{-bit} \\) register \\( \\text{R1} \\). The effective address of the memory location is obtained by the addition of a constant \\( 20 \\) and the contents of register \\( \\text{R2} \\). Which of the following best reflects the addressing mode implemented by this instruction for the operand in memory?</p>\n\n</div><br><br><b>GATE CSE 2011 | Question: 21</b></p>",
          "type": "single",
          "options": [
            "<p>Immediate addressing</p>",
            "<p>Register addressing</p>",
            "<p>Register Indirect Scaled Addressing</p>",
            "<p>Base Indexed Addressing</p>"
          ],
          "correct_answer": "<p>Base Indexed Addressing</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2123/gate-cse-2011-question-21\" target=\"_blank\">https://gateoverflow.in/2123/gate-cse-2011-question-21</a></p>"
        },
        {
          "id": 16,
          "question": "<p><a name=\"118291\"></a><div itemprop=\"text\"><p>Consider the \\( C \\)&nbsp; struct defined below:</p>\n\n<pre class=\"prettyprint lang-c_cpp\">struct data {\n    int marks [100];\n    char grade;\n    int cnumber;\n};\nstruct data student;</pre>\n\n<p>The base address of student is available in register \\( R1 \\). The field student.grade can be accessed efficiently using:</p>\n\n</div><br><br><b>GATE CSE 2017 Set 1 | Question: 11</b></p>",
          "type": "single",
          "options": [
            "<p>Post-increment addressing mode, \\( (R1)+ \\)</p>",
            "<p>Pre-decrement addressing mode, \\( -(R1) \\)</p>",
            "<p>Register direct addressing mode, \\( R1 \\)</p>",
            "<p>Index addressing mode, \\( X(R1) \\), where \\( X \\) is an offset represented in \\( 2's \\) complement \\( 16\\text{-bit} \\) representation</p>"
          ],
          "correct_answer": "<p>Index addressing mode, \\( X(R1) \\), where \\( X \\) is an offset represented in \\( 2's \\) complement \\( 16\\text{-bit} \\) representation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/118291/gate-cse-2017-set-1-question-11\" target=\"_blank\">https://gateoverflow.in/118291/gate-cse-2017-set-1-question-11</a></p>"
        },
        {
          "id": 17,
          "question": "<p><a name=\"3578\"></a><div itemprop=\"text\"><p>Which of the following statements about relative addressing mode is FALSE?</p>\n\n</div><br><br><b>GATE IT 2006 | Question: 39, ISRO2009-42</b></p>",
          "type": "single",
          "options": [
            "<p>It enables reduced instruction size</p>",
            "<p>It allows indexing of array element with same instruction</p>",
            "<p>It enables easy relocation of data</p>",
            "<p>It enables faster address calculation than absolute addressing</p>"
          ],
          "correct_answer": "<p>It enables faster address calculation than absolute addressing</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3578/gate-it-2006-question-39-isro2009-42\" target=\"_blank\">https://gateoverflow.in/3578/gate-it-2006-question-39-isro2009-42</a></p>"
        },
        {
          "id": 18,
          "question": "<p><a name=\"3581\"></a><div itemprop=\"text\"><p>The memory locations \\( 1000,1001 \\) and \\( 1020 \\) have data values \\( 18,1 \\) and \\( 16 \\) respectively before the following program is executed.</p>\n\n<p>\\[ \\begin{array}{ll}&nbsp;\\text{MOVI} &amp; \\text{\\( R_s, 1 \\)} &amp;&amp; \\text{; Move immediate} \\\\&nbsp; \\text{LOAD} &amp; \\text{\\( R_d, 1000(R_s) \\)} &amp;&amp; \\text{; Load from memory}\\\\&nbsp; &nbsp;\\text{ADDI} &amp; \\text{\\(  R_d, 1000 \\)} &amp;&amp; \\text{; Add immediate}\\\\&nbsp; \\text{STOREI} &amp; \\text{\\( 0(R_d), 20 \\)} &amp;&amp; \\text{; Store immediate}&nbsp; &nbsp;\\end{array} \\] Which of the statements below is TRUE after the program is executed ?</p>\n\n</div><br><br><b>GATE IT 2006 | Question: 40</b></p>",
          "type": "single",
          "options": [
            "<p>Memory location \\( 1000 \\) has value \\( 20 \\)</p>",
            "<p>Memory location \\( 1020 \\) has value \\( 20 \\)</p>",
            "<p>Memory location \\( 1021 \\) has value \\( 20 \\)</p>",
            "<p>Memory location \\( 1001 \\) has value \\( 20 \\)</p>"
          ],
          "correct_answer": "<p>Memory location \\( 1001 \\) has value \\( 20 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3581/gate-it-2006-question-40\" target=\"_blank\">https://gateoverflow.in/3581/gate-it-2006-question-40</a></p>"
        }
      ]
    }
  ]
});
