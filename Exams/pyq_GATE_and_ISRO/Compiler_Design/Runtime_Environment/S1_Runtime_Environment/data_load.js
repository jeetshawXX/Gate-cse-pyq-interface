window.__examLoadCallback({
  "title": "Runtime_Environment - Runtime_Environment - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Runtime_Environment",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the control flow graph shown. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Runtime_Environment\\q27_d6e3a8a0.jpg\"><br>\nWhich one of the following choices correctly lists the set of live variables at the exit\npoint of each basic block? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>B1: {}, B2: {a}, B3: {a}, B4: {a}</p>",
            "<b>B.</b> <p>B1: {i, j}, B2: {a}, B3: {a}, B4: {i}</p>",
            "<b>C.</b> <p>B1: {a, i, j}, B2: {a, i, j}, B3: {a, i}, B4: {a}</p>",
            "<b>D.</b> <p>B1: {a, i, j}, B2: {a, j}, B3: {a, j}, B4: {a, i, j}</p>"
          ],
          "correct_answer": "<b>D.</b> <p>B1: {a, i, j}, B2: {a, j}, B3: {a, j}, B4: {a, i, j}</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/399284/gate-cse-2023-question-27#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>For a statement S in a program, in the context of liveness analysis, the following sets are defined:<br><br>USE(S) : the set of variables used in S<br>\nIN(S) : the set of variables that are live at the entry of S<br>\nOUT(S) : the set of variables that are live at the exit of S<br><br>\nConsider a basic block that consists of two statements, S1 followed by S2. Which one of the following statements is correct? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>OUT(S1) = IN (S2)</p>",
            "<b>B.</b> <p>OUT (S1) = IN (S1) \\(\\cup\\) USE (S1)</p>",
            "<b>C.</b> <p>OUT (S1) =IN (S2) \\(\\cup\\) OUT (S2)</p>",
            "<b>D.</b> <p>OUT (S1) = USE (S1)\\(\\cup\\) IN (S2)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>OUT(S1) = IN (S2)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357502/gate-cse-2021-set-2-question-38#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the following statements.<br>\n<br>\nS1: The sequence of procedure calls corresponds to a preorder traversal of the activation tree.\n<br>S2: The sequence of procedure returns corresponds to a postorder traversal of the activation tree.<br><br>Which one of the following options is correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1 is true and S2 is false</p>",
            "<b>B.</b> <p>S1 is false and S2 is true</p>",
            "<b>C.</b> <p>S1 is true and S2 is true</p>",
            "<b>D.</b> <p>S1 is false and S2 is false</p>"
          ],
          "correct_answer": "<b>C.</b> <p>S1 is true and S2 is true</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357448/gate-cse-2021-set-1-question-4#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Which of the following comparisons between static and dynamic type checking incorrect? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Dynamic type checking slows down the execution</p>",
            "<b>B.</b> <p>Dynamic type checking offers more flexibility to the programmers</p>",
            "<b>C.</b> <p>In contrast to Static type checking, dynamic type checking may cause failure in runtime due to type errors</p>",
            "<b>D.</b> <p>Unlike static type checking dynamic type checking is done during compilation</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Unlike static type checking dynamic type checking is done during compilation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213578/isro2018-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>simple two-pass assembler does which of the following in the first pass: <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Checks to see if the instructions are legal in the current assembly mode</p>",
            "<b>B.</b> <p>It allocates space for the literals.</p>",
            "<b>C.</b> <p>It builds the symbol table for the symbols and their values.</p>",
            "<b>D.</b> <p>All of these</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All of these</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/56088/isro2016-43\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Match thefollowing:\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Runtime_Environment\\q19_26e5b72c.jpg\"> <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P\\(\\leftrightarrow\\)i, Q \\(\\leftrightarrow\\) ii, R\\(\\leftrightarrow\\) iv,S\\(\\leftrightarrow\\) iii</p>",
            "<b>B.</b> <p>P\\(\\leftrightarrow\\) iii, Q\\(\\leftrightarrow\\)i, R\\(\\leftrightarrow\\) ii, S\\(\\leftrightarrow\\) iv</p>",
            "<b>C.</b> <p>P\\(\\leftrightarrow\\) ii, Q\\(\\leftrightarrow\\) iii, R\\(\\leftrightarrow\\) i, S\\(\\leftrightarrow\\) iv</p>",
            "<b>D.</b> <p>P\\(\\leftrightarrow\\) iv,Q\\(\\leftrightarrow\\) i, R\\(\\leftrightarrow\\) ii, S\\(\\leftrightarrow\\) iii</p>"
          ],
          "correct_answer": "<b>B.</b> <p>P\\(\\leftrightarrow\\) iii, Q\\(\\leftrightarrow\\)i, R\\(\\leftrightarrow\\) ii, S\\(\\leftrightarrow\\) iv</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39548/gate2016-2-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Which of the following is NOT represented in a subroutine's activation record frame for a stack-based programming language? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Values of local variables</p>",
            "<b>B.</b> <p>Return address</p>",
            "<b>C.</b> <p>Heap area</p>",
            "<b>D.</b> <p>Information needed to access non local variables</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Heap area</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17221/isro2014-51\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Which of the following statements are CORRECT?  <br> 1) Static allocation of all data areas by a compiler makes it impossible to implement recursion. <br>\n2) Automatic garbage collection is essential to implement recursion. <br>\n3) Dynamic allocation of activation records is essential to implement recursion. <br>\n4) Both heap and stack are essential to implement recursion. <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1 and 2 only</p>",
            "<b>B.</b> <p>2 and 3 only</p>",
            "<b>C.</b> <p>3 and 4 only</p>",
            "<b>D.</b> <p>1 and 3 only</p>"
          ],
          "correct_answer": "<b>D.</b> <p>1 and 3 only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2052/gate2014-3-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Which one of the following is NOT performed during compilation? <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Dynamic memory allocation</p>",
            "<b>B.</b> <p>Type checking</p>",
            "<b>C.</b> <p>Symbol table management</p>",
            "<b>D.</b> <p>Inline expansion</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Dynamic memory allocation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1975/gate2014-2-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the program given below, in a block-structured pseudo-language with lexical scoping and\nnesting of procedures permitted.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Runtime_Environment\\q36_e237e299.jpg\"><br>\nConsider the calling chain: Main \\(\\rightarrow\\) A1 \\(\\rightarrow\\) A2 \\(\\rightarrow\\) A21 \\(\\rightarrow\\) A1 <br>\nThe correct set of activation records along with their access links is given by <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Runtime_Environment\\q36a_b9042f97.jpg\"> <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>D.</b> <p>D</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1758/gate2012-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>In compiler terminology reduction in strength means <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Replacing run time computation by compile time computation</p>",
            "<b>B.</b> <p>Removing loop invariant computation</p>",
            "<b>C.</b> <p>Removing common subexpressions</p>",
            "<b>D.</b> <p>replacing a costly operation by a relatively cheaper one</p>"
          ],
          "correct_answer": "<b>D.</b> <p>replacing a costly operation by a relatively cheaper one</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50567/isro2011-3\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Which languages necessarily need heap allocation in the runtime environment? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Those that support recursion</p>",
            "<b>B.</b> <p>Those that use dynamic scoping</p>",
            "<b>C.</b> <p>Those that allow dynamic data structures</p>",
            "<b>D.</b> <p>Those that use global variables</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Those that allow dynamic data structures</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2187/gate2010-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Which of the following class of statement usually produces no executable code when compiled? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>declaration</p>",
            "<b>B.</b> <p>assignment statements</p>",
            "<b>C.</b> <p>input and output statements</p>",
            "<b>D.</b> <p>structural statements</p>"
          ],
          "correct_answer": "<b>D.</b> <p>structural statements</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17249/isro2008-68\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>In a resident - OS computer, which of the following systems must reside in the main memory under all situations? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Assembler</p>",
            "<b>B.</b> <p>Linker</p>",
            "<b>C.</b> <p>Loader</p>",
            "<b>D.</b> <p>Compiler</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Loader</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1662/gate1998-1-25-isro2008-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Relative to the program translated by a compiler, the same program when interpreted runs <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Faster</p>",
            "<b>B.</b> <p>Slower</p>",
            "<b>C.</b> <p>At the same speed</p>",
            "<b>D.</b> <p>May be faster or slower</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Slower</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18495/isro2008-38\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
