window.__examLoadCallback({
  "title": "Intermediate_Code_Generation - Intermediate_Code_Generation - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Intermediate_Code_Generation",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following statements about the use of backpatching in a compiler for intermediate code generation:\n<br><br>\n(I) Backpatching can be used to generate code for Boolean expression in one pass.\n<br>\n(II) Backpatching can be used to generate code for flow-of-control statements in one pass.\n<br><br>\nWhich ONE of the following options is CORRECT? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only (I) is correct.</p>",
            "<b>B.</b> <p>Only (II) is correct.</p>",
            "<b>C.</b> <p>Both (I) and (II) are correct.</p>",
            "<b>D.</b> <p>Neither (I) nor (II) is correct.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both (I) and (II) are correct.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460824/gate-cse-2025-set-2-question-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Refer to the given 3-address code sequence. This code sequence is split into basic blocks. The number of basic blocks is _________. (Answer in integer)\n<br><br>\n1001: i = 1<br>\n1002: j = 1<br>\n1003: t1 = 10*i<br>\n1004: t2 = t1+j<br>\n1005: t3 = 8*t2<br>\n1006: t4 = t3-88<br>\n1007: a[t4] = 0.0<br>\n1008: j = j+1<br>\n1009: if j &lt;= 10 goto 1003<br>\n1010: i = i+1<br>\n1011: if i &lt;= 10 goto 1002<br>\n1012: i = 1<br>\n1013: t5 = i-1<br>\n1014: t6 = 88*t5<br>\n1015: a[t6] = 1.0<br>\n1016: i = i+1<br>\n1017: if i &lt;= 10 goto 1013<br> <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460038/gate-cse-2025-set-1-question-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Which ONE of the following techniques used in compiler code optimization uses live variable analysis? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Run-time function call management</p>",
            "<b>B.</b> <p>Register assignment to variables</p>",
            "<b>C.</b> <p>Strength reduction</p>",
            "<b>D.</b> <p>Constant folding</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Register assignment to variables</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460077/gate-cse-2025-set-1-question-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the following expression: \\( x[i]=(p+r) *-s[i]+u / w \\). The following sequence shows the list of triples representing the given expression, with entries missing for triples (1), (3), and (6).<br>\\(\n\\begin{array}{|c|c|c|c|}\n\\hline  (0)   &amp; + &amp;   p   &amp;   r   \\\\\n\\hline  (1)   &amp; &amp; &amp; \\\\\n\\hline  (2)   &amp; uminus &amp;   (1)   &amp; \\\\\n\\hline  (3)   &amp; &amp; &amp; \\\\\n\\hline  (4)   &amp;   /   &amp;   u   &amp;   w   \\\\\n\\hline  (5)   &amp; + &amp;   (3)   &amp;   (4)   \\\\\n\\hline  (6)   &amp; &amp; &amp; \\\\\n\\hline  (7)   &amp;   =   &amp;   (6)   &amp;   (5)   \\\\\n\\hline\n\\end{array}\\)\n<br>\nWhich one of the following options fills in the missing entries CORRECTLY? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(1) \\(=[]  s  i \\) ,        (3) * (0) (2) ,        (6) \\([] =x i \\)</p>",
            "<b>B.</b> <p>(1) \\([] =s i \\) ,        (3) - (0) (2) ,        (6) \\( =[] x (5) \\)</p>",
            "<b>C.</b> <p>(1) \\( =[] s i \\) ,        (3) * (0) (2) ,        (6) \\([] =x (5) \\)</p>",
            "<b>D.</b> <p>(1) \\( []=s i \\) ,        (3)-(0)(2) ,        (6) \\( =[] x i \\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>(1) \\(=[]  s  i \\) ,        (3) * (0) (2) ,        (6) \\([] =x i \\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422864/gate-cse-2024-set-2-question-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following pseudo-code.<br>\\(\n\\begin{array}{ll}\nL 1: &amp; t 1=-1 \\\\\nL 2: &amp; t 2=0 \\\\\nL 3: &amp; t 3=0 \\\\\nL 4: &amp; t 4=4 * t 3 \\\\\nL 5: &amp; t 5=4 * t 2 \\\\\nL 6: &amp; t 6=t 5 * M \\\\\nL 7: &amp; t 7=t 4+t 6 \\\\\nL 8: &amp; t 8=a[t 7] \\\\\nL 9: &amp; if \\; t 8 \\lt = max  \\; goto  \\; L 11 \\\\\nL 10: &amp; t 1=t 8 \\\\\nL 11: &amp; t 3=t 3+1 \\\\\nL 12: &amp; if  \\; t 3 \\lt M  \\;  goto L 4 \\\\\nL 13: &amp; t 2=t 2+1 \\\\\nL 14: &amp; if  \\; t 2 \\lt N  \\; goto  \\; L 3 \\\\\nL 15: &amp; max =t 1\n\\end{array}\n\\)<br>\nWhich of of the following options CORRECTLY specifies the number of basic blocks and the number of instructions in the largest basic block, respectively? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>6 and 6</p>",
            "<b>B.</b> <p>6 and 7</p>",
            "<b>C.</b> <p>7 and 7</p>",
            "<b>D.</b> <p>7 and 6</p>"
          ],
          "correct_answer": "<b>D.</b> <p>7 and 6</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422813/gate-cse-2024-set-1-question-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the following statements regarding the front-end and back-end of a compiler.\n<br><br>\nS1: The front-end includes phases that are independent of the target hardware.\n<br>S2: The back-end includes phases that are specific to the target hardware.<br>\nS3: The back-end includes phases that are specific to the programming language used in the source code.\n<br><br>\nIdentify the CORRECT option. <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only S1 is TRUE.</p>",
            "<b>B.</b> <p>Only S1 and S2 are TRUE.</p>",
            "<b>C.</b> <p>S1, S2, and S3 are all TRUE.</p>",
            "<b>D.</b> <p>Only S1 and S3 are TRUE.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Only S1 and S2 are TRUE.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/399311/gate-cse-2023-question-1#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the following ANSI C code segment:<pre><code> z=x + 3 + y-&gt; f1 + y-&gt; f2;\nfor (i = 0; i &lt; 200; i = i + 2) \n{\n    if (z &gt; i) \n    {\n        p = p + x + 3;\n        q = q + y-&gt; f1;\n    } else \n    {\n        p = p + y-&gt; f2;\n        q = q + x + 3;\n    }\n}</code></pre>Assume that the variable y points to a struct (allocated on the heap) containing two fields f1 and f2, and the local variables x, y, z, p, q, and i are allotted registers. Common sub-expression elimination (CSE) optimization is applied on the code. The number of addition and the dereference operations (of the form  y -&gt; f1 or y -&gt; f2) in the optimized code, respectively, are: <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>403  and 102</p>",
            "<b>B.</b> <p>203  and 2</p>",
            "<b>C.</b> <p>303  and 102</p>",
            "<b>D.</b> <p>303  and 2</p>"
          ],
          "correct_answer": "<b>D.</b> <p>303  and 2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357510/gate-cse-2021-set-2-question-30#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>In the context of compilers, which of the following is/are NOT an intermediate representation of the source program? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Three address code</p>",
            "<b>B.</b> <p>Abstract Syntax Tree (AST)</p>",
            "<b>C.</b> <p>Control Flow Graph (CFG)</p>",
            "<b>D.</b> <p>Symbol table</p>"
          ],
          "correct_answer": [
            "<b>D.</b> <p>Symbol table</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357527/gate-cse-2021-set-2-question-13#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Which of the following is a type of a out-of-order execution, with the reordering done by a compiler <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>loop unrolling</p>",
            "<b>B.</b> <p>dead code elimination</p>",
            "<b>C.</b> <p>strength reduction</p>",
            "<b>D.</b> <p>software pipelining</p>"
          ],
          "correct_answer": "<b>D.</b> <p>software pipelining</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331453/isro2020-42\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the productions \\(A\\rightarrow PQ\\) and \\(A\\rightarrow XY\\). Each of the five non-terminals A,P,Q,X, and Y has two attributes: s is a synthesized attribute, and i is an inherited attribute. Consider the following rules.<br><br>Rule 1: P.i=A.i+2, Q.i=P.i+A.i, and A.s=P.s+Q.s<br>Rule 2: X.i=A.i+Y.s and Y.i=X.s+A.i<br><br>Which one of the following is TRUE? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both Rule 1 and Rule 2 are L-attributed.</p>",
            "<b>B.</b> <p>Only Rule 1 is L-attributed.</p>",
            "<b>C.</b> <p>Only Rule 2 is L-attributed.</p>",
            "<b>D.</b> <p>Neither Rule 1 nor Rule 2 is L-attributed.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Only Rule 1 is L-attributed.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/333198/gate2020-cs-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Which of the following comment about peep-hole optimization is true? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It is applied to small part of the code and applied repeatedly</p>",
            "<b>B.</b> <p>It can be used to optimize intermediate code</p>",
            "<b>C.</b> <p>It can be applied to a portion of the code that is not contiguous</p>",
            "<b>D.</b> <p>It is applied in symbol table to optimize the memory requirements.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>It is applied to small part of the code and applied repeatedly</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213558/isro2018-30\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the expression ( a-1)* (((b + c) / 3) + d)) . Let X be the minimum number of\nregisters required by an optimal code generation (without any register spill) algorithm for a\nload/store architecture in which (i) only loads and store instructions can have memory\noperands and (ii) arithmetic instructions can have only register or immediate operands. The\nvalue of X is _________. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118746/gate2017-1-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the following intermediate program in three address code<br>\np= a -b <br>\nq= p *c <br>\np= u * v <br>\nq= p + q <br>\nWhich one of the following corresponds to a static single assignment form of the above code? <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(p_{1}=a-b\\)<br>\\( q_{1}=p_{1}*c \\)<br>\\(p_{1}=u*v \\)<br>\\(q_{1}=p_{1}+q_{1}\\)</p>",
            "<b>B.</b> <p>\\(p_{3}=a-b \\)<br>\\(q_{4}=p_{3}*c \\)<br>\\(p_{4}=u*v \\)<br>\\(q_{3}=p_{4}+q_{4}\\)</p>",
            "<b>C.</b> <p>\\(p_{1}=a-b \\)<br>\\(q_{1}=p_{2}*c \\)<br>\\(p_{3}=u*v \\)<br>\\(q_{2}=p_{4}+q_{3}\\)</p>",
            "<b>D.</b> <p>\\(p_{1}=a-b \\)<br>\\(q_{1}=p_{1}*c \\)<br>\\(p_{2}=u*v \\)<br>\\(q_{2}=p+q\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(p_{3}=a-b \\)<br>\\(q_{4}=p_{3}*c \\)<br>\\(p_{4}=u*v \\)<br>\\(q_{3}=p_{4}+q_{4}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118292/gate2017-1-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Peephole optimization is form of <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Loop optimization</p>",
            "<b>B.</b> <p>Local optimization</p>",
            "<b>C.</b> <p>Constant folding</p>",
            "<b>D.</b> <p>Data flow analysis</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Local optimization</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55598/isro2016-44\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the following code segment.<br>\nx =u-t; <br>\ny =x*v; <br>\nx =y+w; <br>\ny =t-z; <br>\ny =x*y; <br>\nThe minimum number of total variables required to convert the above code segment to static single assignment form is__________ . <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39675/gate2016-1-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
