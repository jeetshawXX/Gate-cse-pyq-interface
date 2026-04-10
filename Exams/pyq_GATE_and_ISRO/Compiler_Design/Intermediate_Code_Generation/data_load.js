window.__examLoadCallback({
  "title": "Compiler_Design - Intermediate_Code_Generation",
  "duration": 100,
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
        },
        {
          "id": 16,
          "question": "<p>Consider the intermediate code given below.<br>\n(1) i = 1 <br>\n(2) j = 1 <br>\n(3) t1 = 5 * i  <br>\n(4) t2 = t1 + j  <br>\n(5) t3 = 4 * t2 <br>\n(6) t4 = t3 <br>\n(7) a[t4] = -1 <br>\n(8) j = j + 1 <br>\n(9) if j\\(\\leq \\)5 goto (3) <br>\n(10) i=i+1 <br>\n(11) if i\\(\\lt \\)5 goto (2) <br>\nThe number of nodes and edges in the control-flow-graph constructed for the above code, respectively, are <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5 and 7</p>",
            "<b>B.</b> <p>6 and 7</p>",
            "<b>C.</b> <p>5 and 5</p>",
            "<b>D.</b> <p>7 and 8</p>"
          ],
          "correct_answer": "<b>B.</b> <p>6 and 7</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8139/gate2015-2-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>In the context of abstract-syntax-tree (AST) and control-flow-graph (CFG), which one of the following is TRUE? <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>In both AST and CFG, let node N2 be the successor of node N1. In the input program, the code corresponding to N2 is present after the code corresponding to N1</p>",
            "<b>B.</b> <p>For any input program, neither AST nor CFG will contain a cycle</p>",
            "<b>C.</b> <p>The maximum number of successors of a node in an AST and a CFG depends on the input program</p>",
            "<b>D.</b> <p>Each node in AST and CFG corresponds to at most one statement in the input program</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The maximum number of successors of a node in an AST and a CFG depends on the input program</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8084/gate2015-2-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>The least number of temporary variables required to create a three-address code in static single assignment form for the expression q + r / 3 + s - t * 5 + u * v /w is _______________. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "8",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8365/gate2015-1-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>A variable x is said to be live at a statement \\(S_{i}\\) in a program if the following three conditions hold simultaneously: <br>\ni. There exists a statement \\(S_{j}\\) that uses x <br>\nii. There is a path from \\(S_{i}\\) to \\(S_{j}\\) in the flow graph corresponding to the program <br>\niii. The path has no intervening assignment to x including at \\(S_{i}\\) and \\(S_{j}\\) <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Intermediate_Code_Generation\\q36_5e8cdf73.jpg\"><br> The variables which are live both at the statement in basic block 2 and at the statement in basic block 3 of the above control flow graph are <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>p, s, u</p>",
            "<b>B.</b> <p>r, s, u</p>",
            "<b>C.</b> <p>r,u</p>",
            "<b>D.</b> <p>q,v</p>"
          ],
          "correct_answer": "<b>C.</b> <p>r,u</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8356/gate2015-1-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
          "question": "<p>Consider the basic block given below.<br>\na= b + c <br>\nc =a + d <br>\nd =b + c <br>\ne =d - b <br>\na =e + b <br>\nThe minimum number of nodes and edges present in the DAG representation of the above basic block respectively are <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>6 and 6</p>",
            "<b>B.</b> <p>8 and 10</p>",
            "<b>C.</b> <p>9 and 12</p>",
            "<b>D.</b> <p>4 and 4</p>"
          ],
          "correct_answer": "<b>A.</b> <p>6 and 6</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2068/gate2014-3-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
          "question": "<p>One of the purposes of using intermediate code in compilers is to <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>make parsing and semantic analysis simpler</p>",
            "<b>B.</b> <p>improve error recovery and error reporting</p>",
            "<b>C.</b> <p>increase the chances of reusing the machine-independent code optimizer in other compliers.</p>",
            "<b>D.</b> <p>improve the register allocation</p>"
          ],
          "correct_answer": "<b>C.</b> <p>increase the chances of reusing the machine-independent code optimizer in other compliers.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2051/gate2014-3-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
          "question": "<p>The minimum number of arithmetic operations required to evaluate the polynomial\n\\(P(x)=x^{5}+4x^{3}+6x+5\\) for a given value of x, using only one temporary variable is _____. <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2045/gate2014-3-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
          "question": "<p>For a C program accessing x[i][j][k], the following intermediate code is generated by a\ncompiler. Assume that the size of an integer is 32 bits and the size of a character is 8 bits. <br>\nt0 = i * 1024 <br>\nt1 = j * 32 <br>\nt2 = k * 4 <br>\nt3 = t1 + t0 <br>\nt4 = t3 + t2 <br>\nt5 = x[t4]<br>\nWhich one of the following statements about the source code for the C program is\nCORRECT? <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>x is declared as \"int x[32] [32] [8]\".</p>",
            "<b>B.</b> <p>x is declared as \"int x[4] [1024] [32]\".</p>",
            "<b>C.</b> <p>x is declared as \"char x[4] [32] [8]\".</p>",
            "<b>D.</b> <p>x is declared as \"char x[32] [16] [2]\".</p>"
          ],
          "correct_answer": "<b>A.</b> <p>x is declared as \"int x[32] [32] [8]\".</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1993/gate2014-2-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 24,
          "question": "<p>Which one of the following is FALSE? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A basic block is a sequence of instructions where control enters the sequence at the\nbeginning and exits at the end.</p>",
            "<b>B.</b> <p>Available expression analysis can be used for common subexpression elimination.</p>",
            "<b>C.</b> <p>Live variable analysis can be used for dead code elimination</p>",
            "<b>D.</b> <p>x=4*5 \\(\\Rightarrow\\)x=20 is an example of common subexpression elimination</p>"
          ],
          "correct_answer": "<b>D.</b> <p>x=4*5 \\(\\Rightarrow\\)x=20 is an example of common subexpression elimination</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1784/gate2014-1-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 25,
          "question": "<p>The following code segment is executed on a processor which allows only register operands in its\ninstructions. Each instruction can have atmost two source operands and one destination operand. Assume\nthat all variables are dead after this code segment.<pre><code>c = a + b;\nd = c * a;\ne = c + a;\nx = c * c;\nif (x &gt; a) {\n   y = a * a;\n}\nelse {\n   d = d * d;\n   e = e * e;\n} </code></pre> What is the minimum number of registers needed in the instruction set architecture of the processor\nto compile this code segment without any spill to memory? Do not apply any optimization other\nthan optimizing register allocation <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43293/gate2013-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 26,
          "question": "<p>The following code segment is executed on a processor which allows only register operands in its\ninstructions. Each instruction can have atmost two source operands and one destination operand. Assume\nthat all variables are dead after this code segment.<pre><code>c = a + b;\nd = c * a;\ne = c + a;\nx = c * c;\nif (x &gt; a) {\n   y = a * a;\n}\nelse {\n   d = d * d;\n   e = e * e;\n} </code></pre>  Suppose the instruction set architecture of the processor has only two registers. The only allowed\ncompiler optimization is code motion, which moves statements from one place to another while\npreserving correctness. What is the minimum number of spills to memory in the compiled code? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>1</p>",
            "<b>C.</b> <p>2</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>B.</b> <p>1</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1556/gate2013-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 27,
          "question": "<p>Which of the following statements about peephole optimization is False? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It is applied to a small part of the code</p>",
            "<b>B.</b> <p>It can be used to optimize intermediate code</p>",
            "<b>C.</b> <p>To get the best out of this, it has to be applied repeatedly</p>",
            "<b>D.</b> <p>It can be applied to the portion of the code that is not contiguous</p>"
          ],
          "correct_answer": "<b>D.</b> <p>It can be applied to the portion of the code that is not contiguous</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52264/isro2011-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 28,
          "question": "<p>Consider evaluating the following expression tree on a machine with load-store\narchitecture in which memory can be accessed only through load and store\ninstructions. The variables a, b, c, d and e are initially stored in memory. The\nbinary operators used in this expression tree can be evaluated by the machine\nonly when the operands are in registers. The instructions produce result only in a\nregister. If no intermediate results can be stored in memory, what is the\nminimum number of registers needed to evaluate this expression?  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Intermediate_Code_Generation\\q47_a8b512f3.jpg\"> <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>9</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>D.</b> <p>3</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2138/gate2011-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 29,
          "question": "<p>The program below uses six temporary variables a, b, c, d, e, f. <br><br>\na =1 <br>\nb= 10<br>\nc =20<br>\nd= a +b<br>\ne= c +d<br>\nf =c +e<br>\nb= c+ e<br>\ne =b +f<br>\nd =5 +e<br>\nreturn d +f<br><br>\nAssuming that all operations take their operands from registers, what is the\nminimum number of registers needed to execute this program without spilling? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2338/gate2010-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 30,
          "question": "<p>Some code optimizations are carried out on the intermediate code because <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>They enhance the portability of the compiler to other target processors</p>",
            "<b>B.</b> <p>Program analysis is more accurate on intermediate code than on machine code</p>",
            "<b>C.</b> <p>The information from dataflow analysis cannot otherwise be used for optimization</p>",
            "<b>D.</b> <p>The information from the front end cannot otherwise be used for optimization</p>"
          ],
          "correct_answer": "<b>A.</b> <p>They enhance the portability of the compiler to other target processors</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/410/gate2008-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 31,
          "question": "<p>In a simplified computer the instructions are:\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Intermediate_Code_Generation\\q54a_496f1284.jpg\"> <br>\nThe computer has only two registers, and OP is either ADD or SUB. Consider the\nfollowing basic block:   <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Intermediate_Code_Generation\\q54b_a712a573.jpg\"> <br>\nAssume that all operands are initially in memory. The final value of the\ncomputation should be in memory. What is the minimum number of MOV\ninstructions in the code generated for this basic block? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1252/gate2007-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 32,
          "question": "<p>Consider the following C code segment.<pre><code>\nfor (i = 0, &lt; i  n; i++) \n{ \n    for (j=0; j&lt; n; j++) \n    { \n        if (i%2) \n        { \n            x += (4*j + 5*i); \n            y += (7 + 4*j); \n        } \n    } \n} \n</code></pre>\nWhich one to the following false? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The code contains loop-in variant computation</p>",
            "<b>B.</b> <p>There is scope of common sub-expression elimination in this code</p>",
            "<b>C.</b> <p>There is scope strength reduction in this code</p>",
            "<b>D.</b> <p>There is scope of dead code elimination in this code</p>"
          ],
          "correct_answer": "<b>D.</b> <p>There is scope of dead code elimination in this code</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1838/gate2006-60#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 33,
          "question": "<p>The expression \\(( a * b) * c \\; op \\dots\\)<br>\nwhere 'op' is one of '+', '*' and '\\(\\uparrow\\)' (exponentiation) can be evaluated on a CPU with single register without  storing the value of (a * b) if <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>op' is '+' or '*'</p>",
            "<b>B.</b> <p>op' is '\\(\\uparrow\\)' or '*'</p>",
            "<b>C.</b> <p>op' is '\\(\\uparrow\\)' or '+'</p>",
            "<b>D.</b> <p>not possible to evaluate without storing</p>"
          ],
          "correct_answer": "<b>A.</b> <p>op' is '+' or '*'</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2250/gate1997-4-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 34,
          "question": "<p>Generation of intermediate code based on an abstract machine model is useful in compilers because <br><br><strong>(GATE CSE 1994)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>it makes implementation of lexical analysis and syntax analysis easier</p>",
            "<b>B.</b> <p>syntax-directed translations can be written for intermediate code generation</p>",
            "<b>C.</b> <p>it enhances the portability of the front end of the compiler</p>",
            "<b>D.</b> <p>it is not possible to generate code for real machines directly from high level language programs</p>"
          ],
          "correct_answer": "<b>C.</b> <p>it enhances the portability of the front end of the compiler</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2453/gate1994-1-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 35,
          "question": "<p>Mention the pass number for each of the following activities that occur in a two pass assembler:\n<br><br>A. object code generation\n<br>B. literals added to literal table\n<br>C. listing printed\n<br>D. address resolution of local symbols <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2 1 2 1</p>",
            "<b>B.</b> <p>1 1 1 2</p>",
            "<b>C.</b> <p>1 2 2 2</p>",
            "<b>D.</b> <p>1 2 1 2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>2 1 2 1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/579/gate1992-03-ii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 36,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:<br>Indicate all the true statements from the following: <br><br><strong>(GATE CSE 1991)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Recursive descent parsing cannot be used for grammar with left recursion.</p>",
            "<b>B.</b> <p>The intermediate form for representing expressions which is best suited for code optimization is the postfix form.</p>",
            "<b>C.</b> <p>A programming language not supporting either recursion or pointer type does not need the support of dynamic memory allocation.</p>",
            "<b>D.</b> <p>Although C does not support call-by-name parameter passing, the effect can be correctly simulated in C</p>",
            "<b>E.</b> <p>No feature of Pascal typing violates strong typing in Pascal.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Recursive descent parsing cannot be used for grammar with left recursion.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/524/gate1991-03-x\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
