window.__examLoadCallback({
  "title": "Addressing_Modes - Addressing_Modes - Slot 1",
  "duration": 39,
  "sections": [
    {
      "name": "Addressing_Modes",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider a RISC machine where each instruction is exactly 4 bytes long. Conditional and\nunconditional branch instructions use PC- relative addressing mode with Offset specified in\nbytes to the target location of the branch instruction. Further the Offset is always with respect\nto the address of the next instruction in the program sequence. Consider the following\ninstruction sequence.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Addressing_Modes\\q28_d9c8664a.jpg\"><br>\nIf the target of the branch instruction is i, then the decimal value of the Offset is __________ <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "-16",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118332/gate2017-1-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
          "question": "<p>Which is the most appropriate match for the items in the first column with the\nitems in the second column <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Addressing_Modes\\q34_3270de0d.jpg\"> <br><br><strong>(GATE CSE 2001)</strong></p>",
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
        }
      ]
    }
  ]
});
