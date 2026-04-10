window.__examLoadCallback({
  "title": "Compiler_Design - Compiler_Design",
  "duration": 529,
  "sections": [
    {
      "name": "Compiler_Design",
      "questions": [
        {
          "id": 1,
          "question": "<p>Given the following syntax-directed translation rules:\n<br><br>\n\\( \\text{Rule 1: } R \\rightarrow AB \\{ B.i = R.i - 1; A.i = B.i; R.i = A.i + 1; \\} \\)<br>\n\\( \\text{Rule 2: } P \\rightarrow CD \\{ P.i = C.i + D.i; D.i = C.i + 2; \\} \\)<br>\n\\( \\text{Rule 3: } Q \\rightarrow EF \\{ Q.i = E.i + F.i; \\} \\)\n<br><br>\nWhich ONE is the CORRECT option among the following? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Rule 1 is S-attributed and L-attributed;  Rule 2 is S-attributed and not L-attributed;  Rule 3 is neither S-attributed nor L-attributed.</p>",
            "<b>B.</b> <p>Rule 1 is neither S-attributed nor L-attributed;  Rule 2 is S-attributed and L-attributed;  Rule 3 is S-attributed and L-attributed.</p>",
            "<b>C.</b> <p>Rule 1 is neither S-attributed nor L-attributed;  Rule 2 is not S-attributed and is L-attributed;  Rule 3 is S-attributed and L-attributed.</p>",
            "<b>D.</b> <p>Rule 1 is S-attributed and not L-attributed;  Rule 2 is not S-attributed and is L-attributed;  Rule 3 is S-attributed and L-attributed.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Rule 1 is neither S-attributed nor L-attributed;  Rule 2 is not S-attributed and is L-attributed;  Rule 3 is S-attributed and L-attributed.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460823/gate-cse-2025-set-2-question-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
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
          "id": 3,
          "question": "<p>Refer to the given 3-address code sequence. This code sequence is split into basic blocks. The number of basic blocks is _________. (Answer in integer)\n<br><br>\n1001: i = 1<br>\n1002: j = 1<br>\n1003: t1 = 10*i<br>\n1004: t2 = t1+j<br>\n1005: t3 = 8*t2<br>\n1006: t4 = t3-88<br>\n1007: a[t4] = 0.0<br>\n1008: j = j+1<br>\n1009: if j &lt;= 10 goto 1003<br>\n1010: i = i+1<br>\n1011: if i &lt;= 10 goto 1002<br>\n1012: i = 1<br>\n1013: t5 = i-1<br>\n1014: t6 = 88*t5<br>\n1015: a[t6] = 1.0<br>\n1016: i = i+1<br>\n1017: if i &lt;= 10 goto 1013<br> <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460038/gate-cse-2025-set-1-question-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Which of the following statement(s) is/are TRUE while computing \\(First\\) and \\(Follow\\) during top-down parsing by a compiler? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>For a production \\(A \\to \\epsilon ,  \\epsilon \\) will be added to \\(First(A) \\).</p>",
            "<b>B.</b> <p>If there is any input right end marker, it will be added to\\( First(S) \\), where \\( S \\) is the start symbol.</p>",
            "<b>C.</b> <p>For a production \\( A \\to \\epsilon,  \\epsilon \\) will be added to \\( Follow(A) \\).</p>",
            "<b>D.</b> <p>If there is any input right end marker, it will be added to \\( Follow(S) \\), where \\( S \\) is the start symbol.</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>For a production \\(A \\to \\epsilon ,  \\epsilon \\) will be added to \\(First(A) \\).</p>",
            "<b>D.</b> <p>If there is any input right end marker, it will be added to \\( Follow(S) \\), where \\( S \\) is the start symbol.</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460044/gate-cse-2025-set-1-question-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
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
          "id": 6,
          "question": "<p>Which ONE of the following statements is FALSE regarding the symbol table? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Symbol table is responsible for keeping track of the scope of variables.</p>",
            "<b>B.</b> <p>Symbol table can be implemented using a binary search tree.</p>",
            "<b>C.</b> <p>Symbol table is not required after the parsing phase.</p>",
            "<b>D.</b> <p>Symbol table is created during the lexical analysis phase.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Symbol table is not required after the parsing phase.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460079/gate-cse-2025-set-1-question-2#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
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
          "id": 8,
          "question": "<p>Which of the following statements is/are FALSE? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An attribute grammar is a syntax-directed definition (SDD) in which the functions in the semantic rules have no side effects</p>",
            "<b>B.</b> <p>The attributes in a L-attributed definition cannot always be evaluated in a depth- first order</p>",
            "<b>C.</b> <p>Synthesized attributes can be evaluated by a bottom-up parser as the input is parsed</p>",
            "<b>D.</b> <p>All  L-attributed  definitions  based  on  LR(1)  grammar  can  be  evaluated  using  a bottom-up parsing strategy</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The attributes in a L-attributed definition cannot always be evaluated in a depth- first order</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422878/gate-cse-2024-set-2-question-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the following two sets:<br>\n\\(\\begin{array}{ll}\n\\textbf{Set X}  &amp;      \\textbf{Set Y} \\\\\n\\text{P. Lexical Analyzer} &amp; \\text{1. Abstract Syntax Tree} \\\\\n\\text{Q. Syntax Analyzer} &amp; \\text{2. Token}\\\\\n\\text{R. Intermediate Code Generator } &amp; \\text{3. Parse Tree} \\\\\n\\text{S. Code Optimizer} &amp; \\text{4. Constant Folding }\n\\end{array}\\)\n<br>   Which one of the following options is the CORRECT match from Set X to Set Y ? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P-4; Q-1; R-3; S-2</p>",
            "<b>B.</b> <p>P-2; Q-3; R-1; S-4</p>",
            "<b>C.</b> <p>P-2; Q-1; R-3; S-4</p>",
            "<b>D.</b> <p>P-4; Q-3; R-2; S-1</p>"
          ],
          "correct_answer": "<b>B.</b> <p>P-2; Q-3; R-1; S-4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422886/gate-cse-2024-set-2-question-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
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
          "id": 11,
          "question": "<p>Consider the following grammar \\(G \\), with \\(S \\) as the start symbol. The grammar \\(G \\) has three incomplete productions denoted by (1), (2), and (3).<br><br>\n\\(\n\\begin{aligned}\n&amp; S \\rightarrow d a T \\mid \\quad(1) \\\\\n&amp; T \\rightarrow a S|b T|(2) \\\\\n&amp; R \\rightarrow \\text { (3) } \\mid \\epsilon\n\\end{aligned}\n\\)\n<br><br>\nThe set of terminals is \\(\\{a, b, c, d, f\\} \\). The FIRST and FOLLOW sets of the different non-terminals are as follows.<br><br>\n\\(\n\\begin{aligned}\n&amp; \\operatorname{FIRST}(S)=\\{c, d, f\\}, \\operatorname{FIRST}(T)=\\{a, b, \\epsilon\\}, \\operatorname{FIRST}(R)=\\{c, \\epsilon\\} \\\\\n&amp; \\operatorname{FOLLOW}(S)=\\operatorname{FOLLOW}(T)=\\{c, f, \\$\\}, \\operatorname{FOLLOW}(R)=\\{f\\}\n\\end{aligned}\n\\)\n<br><br>\nWhich one of the following options CORRECTLY fills in the incomplete productions? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(1) \\(S \\rightarrow R f \\)\n(2) \\(T \\rightarrow \\epsilon \\)\n(3) \\(R \\rightarrow c T R \\)</p>",
            "<b>B.</b> <p>(1) \\(S \\rightarrow f R \\)\n(2) \\(T \\rightarrow \\epsilon \\)\n(3) \\(R \\rightarrow c T R \\)</p>",
            "<b>C.</b> <p>(1) \\(S \\rightarrow f R \\)\n(2) \\(T \\rightarrow c T \\)\n(3) \\(R \\rightarrow c R \\)</p>",
            "<b>D.</b> <p>(1) \\(S \\rightarrow R f \\)\n(2) \\(T \\rightarrow c T \\)\n(3) \\(R \\rightarrow c R \\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>(1) \\(S \\rightarrow R f \\)\n(2) \\(T \\rightarrow \\epsilon \\)\n(3) \\(R \\rightarrow c T R \\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422814/gate-cse-2024-set-1-question-28#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the following syntax-directed definition (SDD).<br><br>\\(\n\\begin{array}{|l|l|}\n\\hline S \\rightarrow  DHTU &amp; \\{ S.val = D.val + H.val + T.val + U.val; \\} \\\\\n\\hline D \\rightarrow \"M\"D_1 &amp;  \\{ D.val =5+D_1 . val; \\} \\\\\n\\hline D \\rightarrow \\epsilon  &amp; \\{ D.val =-5 ;\\} \\\\\n\\hline H \\rightarrow \"L\" H_1 &amp; \\{ H.val =5 * 10+H_1 . val; \\} \\\\\n\\hline H \\rightarrow \\epsilon  &amp;  \\{ H.val =-10 ;\\} \\\\\n\\hline T \\rightarrow  \"C\"  T_1  &amp;  \\{T . v a l=5 * 100+T_1 . val; \\} \\\\\n\\hline T \\rightarrow \\epsilon  &amp;  \\{T . v a l=-5 ;\\}  \\\\\n\\hline U \\rightarrow  \"K\" &amp;  \\{  U.val =5 ;\\}  \\\\\n\\hline\n\\end{array}\n\\)<br><br>\nGiven \"MMLK\" as the input, which one of the following options is the CORRECT value computed by the SDD (in the attribute S.val)? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>45</p>",
            "<b>B.</b> <p>50</p>",
            "<b>C.</b> <p>55</p>",
            "<b>D.</b> <p>65</p>"
          ],
          "correct_answer": "<b>A.</b> <p>45</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422815/gate-cse-2024-set-1-question-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Which of the following is/are Bottom-Up Parser(s)? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Shift-reduce Parser</p>",
            "<b>B.</b> <p>Predictive Parser</p>",
            "<b>C.</b> <p>LL(1) Parser</p>",
            "<b>D.</b> <p>LR Parser</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>Shift-reduce Parser</p>",
            "<b>D.</b> <p>LR Parser</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422826/gate-cse-2024-set-1-question-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the syntax directed translation given by the following grammar and semantic rules. Here \\(N, I, F \\; and \\; B\\) are non-terminals. \\(N\\) is the starting non-terminal,\nand \\(\\#,0 \\; and \\; 1\\) are lexical tokens corresponding to input letters \\(\"\\#\",\"0\" \\; and \\; \"1\"\\),\nrespectively. \\(X.val\\) denotes the synthesized attribute (a numeric value) associated\nwith a non-terminal \\(X\\). \\(I_1\\) and \\(F_1\\) denote occurrences of \\(I\\) and \\(F\\) on the right hand\nside of a production, respectively. For the tokens \\(0\\) and \\(1\\), \\(0.val=0\\) and \\(1.val=1\\).<br><br>The value computed by the translation scheme for the input string<br>\\(\\begin{aligned}\nN &amp; \\rightarrow I \\# F &amp; N.val=I.val+F.val \\\\\nI &amp;\\rightarrow I_1B &amp; I.val = (2 I1.val) + B.val\\\\\nI &amp;\\rightarrow B&amp;I.val = B.val\\\\\nF &amp;\\rightarrow BF_1&amp; F.val = \\frac{1}{2}(B.val + F1.val)\\\\\nF &amp;\\rightarrow B&amp;  F.val = \\frac{1}{2} B.val\\\\\nB&amp;\\rightarrow 0&amp; B.val = 0.val\\\\\nB &amp;\\rightarrow 1&amp;B.val = 1.val\n\\end{aligned} \\)  <br>\\(10\\# 011\\)<br><br>is ____ (Rounded off to three decimal places) <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2.374",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399261/gate-cse-2023-question-50#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the control flow graph shown. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q27_d6e3a8a0.jpg\"><br>\nWhich one of the following choices correctly lists the set of live variables at the exit\npoint of each basic block? <br><br><strong>(GATE CSE 2023)</strong></p>",
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
          "id": 16,
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
          "id": 17,
          "question": "<p>Consider the following grammar along with translation rules.<br>\\( \\begin{aligned}\n&amp;S \\rightarrow S_1  \\# T &amp; &amp; \\{S._{val}=S_{1.val}*T._{val} \\} \\\\\n&amp;S \\rightarrow T &amp; &amp; \\{S._{val}=T._{val} \\} \\\\\n&amp;T \\rightarrow T_1  \\% R &amp; &amp; \\{T._{val}=T_{1.val}  \\div R._{val} \\} \\\\\n&amp;T \\rightarrow R &amp; &amp; \\{T._{val}=R._{val} \\} \\\\\n&amp;R \\rightarrow id &amp; &amp; \\{R._{val}=id._{val} \\} \\\\\n\\end{aligned}\\)<br>Here \\( \\#\\) and \\( \\%\\) are operators and \\(id\\) is a token that represents an integer and \\(id_{.val}\\) represents the corresponding integer value. The set of non-terminals is \\( \\{S,T,R,P \\}\\) and a subscripted non-terminal indicates an instance of the non-terminal.\n<br>Using this translation scheme, the computed value of \\(S_{.val}\\) for root of the parse tree for the expression \\(20  \\# 10  \\% 5  \\# 8 \\% 2  \\% 2\\) is <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "80",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371881/Gate-cse-2022-question-55#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>Consider the augmented grammar with \\( \\{+, *, (, ), id  \\}\\) as the set of terminals.\n<br>\n\\( \\begin{aligned}&amp;S' \\rightarrow S  \\\\ &amp;S \\rightarrow S+R|R  \\\\ &amp;R \\rightarrow R*P|P \\\\ &amp;P \\rightarrow (S)|id \\end{aligned}\\)<br>If \\(I_0\\) is the set of two \\(LR(0)\\) items \\( \\{ [S' \\rightarrow S.], [S \\rightarrow S.+R]  \\}\\), then \\(goto(closure(I_0 ),+)\\) contains exactly ______ items. <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371917/Gate-cse-2022-question-19#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>Which one of the following statements is TRUE? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The LALR(1) parser for a grammar G cannot have reduce-reduce conflict if the\nLR(1) parser for G does not have reduce-reduce conflict.</p>",
            "<b>B.</b> <p>Symbol table is accessed only during the lexical analysis phase.</p>",
            "<b>C.</b> <p>Data flow analysis is necessary for run-time memory management.</p>",
            "<b>D.</b> <p>LR(1) parsing is sufficient for deterministic context-free languages.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>LR(1) parsing is sufficient for deterministic context-free languages.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/371933/Gate-cse-2022-question-3#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
          "question": "<p>Consider the following augmented grammar with \\(\\{ \\#, @, &lt;, &gt;, a, b, c \\}\\) as the set of terminals.<br><br>\n\\(\\begin{array}{l} S' \\rightarrow S \\\\ S \\rightarrow S \\# cS \\\\ S \\rightarrow SS \\\\ S \\rightarrow S @ \\\\ S \\rightarrow &lt; S &gt; \\\\ S \\rightarrow a \\\\ S \\rightarrow b \\\\ S \\rightarrow c \\end{array}\\)<br><br>\nLet \\(I_0 = \\text{CLOSURE}(\\{S' \\rightarrow \\bullet S\\})\\). The number of items in the set \\(\\text{GOTO(GOTO}(I_0 \\lt ), \\lt )\\) is ___________ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "8",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357486/gate-cse-2021-set-2-question-51#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
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
          "id": 22,
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
          "id": 23,
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
          "id": 24,
          "question": "<p>Consider the following ANSI C program:<pre><code>int main () {\n    Integer x;\n    return 0;\n} </code></pre>  Which one of the following phases in a seven-phase C compiler will throw an error? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Lexical analyzer</p>",
            "<b>B.</b> <p>Syntax analyzer</p>",
            "<b>C.</b> <p>Semantic analyzer</p>",
            "<b>D.</b> <p>Machine dependent optimizer</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Semantic analyzer</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357537/gate-cse-2021-set-2-question-3#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 25,
          "question": "<p>Consider the following C code segment:<br><br>a = b + c;<br>\ne = a + 1;\n<br>\nd = b + c;\n<br>\nf = d + 1;\n<br>\ng = e + f;<br><br>In a compiler, this code segment is represented internally as a directed acyclic graph (DAG). The number of nodes in the DAG is  _____________ <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357401/gate-cse-2021-set-1-question-50#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 26,
          "question": "<p>Consider the following grammar (that admits a series of declarations, followed by expressions) and the associated syntax directed translation (SDT) actions, given as pseudo-code<br><br>\\(\\begin{array}{lll} P &amp; \\rightarrow &amp; D^* E^* \\\\ D &amp; \\rightarrow &amp; \\textsf{int ID} \\{ \\text{record that } \\textsf{ID.} \\text{lexeme is of type} \\textsf{ int\\}} \\\\ D &amp; \\rightarrow &amp; \\textsf{bool ID} \\{ \\text{record that } \\textsf{ID.} \\text{lexeme is of type} \\textsf{ bool\\}} \\\\ E&amp; \\rightarrow &amp; E_1 +E_2 \\{ \\text{check that } E_1. \\text{type}=E_2. \\text{type} = \\textsf{int}; \\text{set } E.\\text{type }:= \\textsf{int} \\} \\\\ E &amp; \\rightarrow &amp; !E_1 \\{ \\text{check that } E_1. \\text{type} = \\textsf{bool}; \\text{ set } E.\\text{type} := \\textsf{bool} \\} \\\\ E &amp; \\rightarrow &amp; \\textsf{ID} \\{ \\text{set } E. \\text{type } := \\textsf{int} \\} \\end{array}\\)\n<br><br>\nWith respect to the above grammar, which one of the following choices is correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The actions can be used to correctly type-check any syntactically correct program</p>",
            "<b>B.</b> <p>The actions can be used to type-check syntactically correct integer variable declarations and integer expressions</p>",
            "<b>C.</b> <p>The actions can be used to type-check syntactically correct boolean variable declarations and boolean expressions.</p>",
            "<b>D.</b> <p>The actions will lead to an infinite loop</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The actions can be used to type-check syntactically correct integer variable declarations and integer expressions</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357425/gate-cse-2021-set-1-question-26#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 27,
          "question": "<p>Consider the following statements.<br><br>S1: Every SLR(1) grammar is unambiguous but there are certain unambiguous grammars that are not SLR(1).<br>\nS2: For any context-free grammar, there is a parser that takes at most \\(O(n^3)\\) time to parse a string of length n.<br><br>\nWhich one of the following options is correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
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
          "explanation": "<a href=\"https://gateoverflow.in/357447/gate-cse-2021-set-1-question-5#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 28,
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
          "id": 29,
          "question": "<p>A grammar is defined as<br>\\(A \\rightarrow B C\\)<br>\\(B \\rightarrow x \\mid B x\\)<br>\\(C \\rightarrow B \\mid D\\)<br>\\(D \\rightarrow y \\mid Ey\\)<br>\\(E \\rightarrow z\\)<br>The non terminal alphabet of the grammar is <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\{A, B, C, D, E\\}\\)</p>",
            "<b>B.</b> <p>\\(\\{B, C, D, E\\}\\)</p>",
            "<b>C.</b> <p>\\(\\{A, B, C, D, E,x,y,z\\}\\)</p>",
            "<b>D.</b> <p>\\(\\{x,y,z\\}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\{A, B, C, D, E\\}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331302/isro2020-75\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 30,
          "question": "<p>A given grammar is called ambiguous if <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>two or more productions have the same non-terminal on the left hand side</p>",
            "<b>B.</b> <p>a derivation tree has more than one associated sentence</p>",
            "<b>C.</b> <p>there is a sentence with more than one derivation tree corresponding to it</p>",
            "<b>D.</b> <p>brackets are not present in the grammar</p>"
          ],
          "correct_answer": "<b>C.</b> <p>there is a sentence with more than one derivation tree corresponding to it</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331462/isro2020-60\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 31,
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
          "id": 32,
          "question": "<p>Given the grammar<br>\\(s \\rightarrow T^{*} S \\mid T\\)<br>\\(T \\rightarrow U+T \\mid U\\)<br>\\(U \\rightarrow a \\mid b\\)<br>Which of the following statements is wrong? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Grammar is not ambiguous</p>",
            "<b>B.</b> <p>Priority of + over * is ensured</p>",
            "<b>C.</b> <p>Right to left evaluation of * and + happens</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of these</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331360/isro2020-35\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 33,
          "question": "<p>Which one indicates a technique of building cross compilers? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Beta cross</p>",
            "<b>B.</b> <p>Canadian cross</p>",
            "<b>C.</b> <p>Mexican cross</p>",
            "<b>D.</b> <p>X-cross</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Canadian cross</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331473/isro2020-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 34,
          "question": "<p>In a two-pass assembler, resolution of subroutine calls and inclusion of labels in the symbol table is done during <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Second pass</p>",
            "<b>B.</b> <p>first pass and second pass respectively</p>",
            "<b>C.</b> <p>second pass and first pass respectively</p>",
            "<b>D.</b> <p>first pass</p>"
          ],
          "correct_answer": "<b>D.</b> <p>first pass</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331377/isro2020-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 35,
          "question": "<p>The number of tokens in the following C code segment is<br><pre><code> switch(inputvalue)\n{\n    case 1 : b =c*d; break;\n    default : b =b++; break;\n}</code></pre> <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>27</p>",
            "<b>B.</b> <p>29</p>",
            "<b>C.</b> <p>26</p>",
            "<b>D.</b> <p>24</p>"
          ],
          "correct_answer": "<b>C.</b> <p>26</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331374/isro2020-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 36,
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
          "id": 37,
          "question": "<p>Consider the following  grammar. <br><br>\\(S\\rightarrow aSB|d\\) <br> \\(B\\rightarrow b\\)<br><br> The number of reduction steps taken by a bottom-up parser while accepting the string \\(aaadbbb\\) is___________. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333207/gate2020-cs-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 38,
          "question": "<p>Consider the following statements.<br><br>\nI. Symbol table is accessed only during lexical analysis and syntax analysis.<br>\nII. Compilers for programming languages that support recursion necessarily need heap storage for memory allocation in the run-time environment.<br>\nIII. Errors violating the condition 'any variable must be declared before its use' are detected during syntax analysis.<br><br>\nWhich of the above statements is/are TRUE? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>I and III only</p>",
            "<b>C.</b> <p>II only</p>",
            "<b>D.</b> <p>None of I, II and III</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of I, II and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333222/gate2020-cs-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 39,
          "question": "<p>Consider the augmented grammar given below: <br>\\(S'\\rightarrow S\\) <br>\\(S \\rightarrow \\lt L \\gt |id\\) <br>\\(L \\rightarrow L,S|S\\) <br><br>Let \\(I_0=CLOSURE(\\{[S'\\rightarrow \\cdot S]\\}) \\). The number of items in the set \\(GOTO(I_0,\\lt)\\) is __________. <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302805/gate2019-cs-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 40,
          "question": "<p>Consider the following grammar and the semantic actions to support the inherited type declaration attributes. Let \\(X_1,X_2,X_3,X_4,X_5 \\; and \\; X_6\\) be the placeholders for the non-terminals D, T, L or \\(L_1\\) in the following table: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q36_b81fa569.jpg\"><br> Which one of the following are the appropriate choices for \\(X_1,X_2,X_3 \\; and \\; X_4\\)? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(X_1=L,X_2=T,X_3=L_1,X_4=L\\)</p>",
            "<b>B.</b> <p>\\(X_1=T,X_2=L,X_3=L_1,X_4=T\\)</p>",
            "<b>C.</b> <p>\\(X_1=L,X_2=L,X_3=L_1,X_4=T\\)</p>",
            "<b>D.</b> <p>\\(X_1=T,X_2=L,X_3=T,X_4=L_1\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(X_1=L,X_2=T,X_3=L_1,X_4=L\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/302812/gate2019-cs-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 41,
          "question": "<p>Consider the following given grammar:<pre><code> \nS -&gt; Aa\nA -&gt; BD\nB -&gt; b| ε\nD -&gt; d| ε </code></pre> Let a, b, d and $ be indexed as follows:   <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q19_b9df82b8.jpg\"><br>Compute the FOLLOW set of the non-terminal B and write the index values for the symbols in the FOLLOW set in the descending order. (For example, if the FOLLOW set is {a, b, d, $}, then the answer should be 3210). <br> Answer:_____ <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "31",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302829/gate2019-cs-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 42,
          "question": "<p>Which one of the following kinds of derivation is used by LR parsers? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Leftmost</p>",
            "<b>B.</b> <p>Leftmost in reverse</p>",
            "<b>C.</b> <p>Rightmost</p>",
            "<b>D.</b> <p>Rightmost in reverse</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Rightmost in reverse</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/302845/gate2019-cs-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 43,
          "question": "<p>A particular BNF definition for a \"word is given by the following rules.<br>&lt; word &gt;      :: =&lt; letter &gt; I &lt; letter &gt; &lt; charpair &gt; I &lt; letter &gt;&lt; intpair &gt;<br>&lt; charpair &gt; :: =&lt; letter &gt;&lt; letter &gt; I &lt; charpair &gt;&lt; letter &gt;&lt; letter &gt;<br>&lt; intpair &gt;    :: = &lt; integer &gt;&lt; integer &gt; I &lt; intpair &gt;&lt; integer &gt;&lt; integer &gt;<br>&lt; letter &gt;      :: = a I b I c I ......I Y I Z<br>&lt; integer &gt;   :: = 0 I 1 I 2 I ......I 9<br>Which of the following lexical entries can be derived from &lt; word &gt;?<br>I.   pick<br>\nII.  picks<br>\nIII. c44<br> <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I, II and III</p>",
            "<b>B.</b> <p>I and II only</p>",
            "<b>C.</b> <p>I and III only</p>",
            "<b>D.</b> <p>II and III only</p>"
          ],
          "correct_answer": "<b>D.</b> <p>II and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213524/isro2018-64\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 44,
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
          "id": 45,
          "question": "<p>DU-chains(Definition-Use) in compiler design: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>consist of a definition of a variable and all its uses, reachable from that definition</p>",
            "<b>B.</b> <p>are created using a form static code analysis</p>",
            "<b>C.</b> <p>are prerequisite for many compiler optimization including constant propagation and common sub-expression elimination</p>",
            "<b>D.</b> <p>All of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213559/isro2018-29\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 46,
          "question": "<p>Incremental-Compiler is a compiler: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>which is written in a language that is different from the source language</p>",
            "<b>B.</b> <p>compiles the whole source code to generate object code afresh</p>",
            "<b>C.</b> <p>compiles only those portion of source code that have been modified</p>",
            "<b>D.</b> <p>that runs on one machine but produces object code for another machine</p>"
          ],
          "correct_answer": "<b>C.</b> <p>compiles only those portion of source code that have been modified</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213560/isro2018-28\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 47,
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
          "id": 48,
          "question": "<p>C onsider the following parse tree for the expression a#b$c$d#e#f, involving two binary operators $ and #. <br> <img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q38_52f1a2a9.jpg\"> <br>  Which one of the following is correct for the given parse tree? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\$\\) has higher precedence and is left associative; # is right associative</p>",
            "<b>B.</b> <p># has higher precedence and is left associative; \\(\\$\\) is right associative</p>",
            "<b>C.</b> <p>\\(\\$\\) has higher precedence and is left associative; # is left associative</p>",
            "<b>D.</b> <p># has higher precedence and is right associative; \\(\\$\\) is left associative</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\$\\) has higher precedence and is left associative; # is right associative</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204112/gate2018-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 49,
          "question": "<p>A lexical analyzer uses the following patterns to recognize three tokens  \\(T_{1}, T_{2}, \\; and \\; T_{3} \\) over the alphabet {a,b,c}. <br><br>  \\(T_{1}:a?(b|c)^* a \\) <br> \\(T_{2}:b?(a|c)^* b \\) <br> \\( T_{3}:c?(b|a)^* c\\) <br> <br>Note that 'x?' means 0 or 1 occurrence of the symbol x. Note also that the analyzer outputs the token that matches the longest possible prefix.<br><br>\nIf the string <i>bbaacabc</i> is processed by the analyzer, which one of the following is the\nsequence of tokens it outputs? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T_{1}T_{2}T_{3}\\)</p>",
            "<b>B.</b> <p>\\(T_{1}T_{1}T_{3}\\)</p>",
            "<b>C.</b> <p>\\(T_{2}T_{1}T_{3}\\)</p>",
            "<b>D.</b> <p>\\(T_{3}T_{3}\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(T_{3}T_{3}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204111/gate2018-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 50,
          "question": "<p>Which one of the following statements is FALSE? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Context-free grammar can be used to specify both lexical and syntax rules.</p>",
            "<b>B.</b> <p>Type checking is done before parsing.</p>",
            "<b>C.</b> <p>High-level language programs can be translated to different Intermediate Representations.</p>",
            "<b>D.</b> <p>Arguments to a function can be passed using the program stack.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Type checking is done before parsing.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/204082/gate2018-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 51,
          "question": "<p>The output of  a lexical analyzer is <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A parse tree</p>",
            "<b>B.</b> <p>Intermediate code</p>",
            "<b>C.</b> <p>Machine code</p>",
            "<b>D.</b> <p>A stream of tokens</p>"
          ],
          "correct_answer": "<b>D.</b> <p>A stream of tokens</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128493/isro-2017-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 52,
          "question": "<p>Match the following according to input (from the left column) to the complier phase (in the\nright column) that processes it. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q17_4dc50d68.jpg\"> <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P-(ii),Q-(iii), R-(iv), S-(i)</p>",
            "<b>B.</b> <p>P-(ii),Q-(i), R-(iii), S-(iv)</p>",
            "<b>C.</b> <p>P-(iii),Q-(iv), R-(i), S-(ii)</p>",
            "<b>D.</b> <p>P-(i),Q-(iv), R-(ii), S-(iii)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P-(iii),Q-(iv), R-(i), S-(ii)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118592/gate2017-2-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 53,
          "question": "<p>Consider the expression ( a-1)* (((b + c) / 3) + d)) . Let X be the minimum number of\nregisters required by an optimal code generation (without any register spill) algorithm for a\nload/store architecture in which (i) only loads and store instructions can have memory\noperands and (ii) arithmetic instructions can have only register or immediate operands. The\nvalue of X is _________. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118746/gate2017-1-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 54,
          "question": "<p>Consider the following grammar:<br><br>\nstmt\\(\\rightarrow\\) if expr then expr else expr; stmt| \\(\\dot{O}\\)<br>\nexpr\\(\\rightarrow\\)term relop term|term<br>\nterm\\(\\rightarrow\\) id|number <br>\nif\\(\\rightarrow\\)a|b|c <br>\nnumber\\(\\rightarrow\\) [0-9] <br><br>\nwhere <b>relop</b> is a relational operate (e.g \\(\\lt ,\\gt\\),...), \\(\\dot{O}\\) refers to the empty statement, and if\n,then, else are terminals. <br><br>\nConsider a program P following the above grammar containing ten if terminals. The number\nof control flows paths in P is ____________. For example the program <br><br>\nif \\(e_1\\) then \\(e_2\\) else \\(e_3\\)<br><br>\nhas 2 controls flow paths  \\(e_{1} \\rightarrow e_{2}\\) and  \\(e_{1} \\rightarrow e_{3}\\). <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1024",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118326/gate2017-1-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 55,
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
          "id": 56,
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
          "id": 57,
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
          "id": 58,
          "question": "<p>A top-down parser generates <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Rightmost Derivation</p>",
            "<b>B.</b> <p>Rightmost derivation in reverse</p>",
            "<b>C.</b> <p>Leftmost derivation</p>",
            "<b>D.</b> <p>Leftmost derivation in reverse</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Leftmost derivation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55922/isro2016-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 59,
          "question": "<p>Recursive descent parsing is an example of <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Top-down parsers</p>",
            "<b>B.</b> <p>Bottom-up parsers</p>",
            "<b>C.</b> <p>Predictive parsers</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Top-down parsers</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/56036/isro2016-40\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 60,
          "question": "<p>A student wrote two context-free grammars G1 and G2 for generating a single C-like array declaration. The dimension of the array is at least one. For example, <br>\nint a[10][3]; <br>\nThe grammars use D as the start symbol,and use six terminal symbols <b>int ;id[]num.</b> <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q46_7b18643f.jpg\"> <br>\nWhich of the grammars correctly generate the declaration mentioned above? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both G1 and G2</p>",
            "<b>B.</b> <p>Only G1</p>",
            "<b>C.</b> <p>Only G2</p>",
            "<b>D.</b> <p>Neither G1 nor G2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Both G1 and G2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39598/gate2016-2-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 61,
          "question": "<p>Match thefollowing:\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q19_26e5b72c.jpg\"> <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
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
          "id": 62,
          "question": "<p>Consider the following Syntax Directed Translation Scheme(SDTS),with non-terminals {S, A} and terminals {a, b}. <br>\nS \\(\\rightarrow\\) aA {print 1} <br>\nS \\(\\rightarrow\\) a { print 2} <br>\nA \\(\\rightarrow\\) Sb { print 3} <br>\nUsing the above SDTS, the output printed by a bottom-up parser, for the input aab is: <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>132</p>",
            "<b>B.</b> <p>223</p>",
            "<b>C.</b> <p>231</p>",
            "<b>D.</b> <p>syntax error</p>"
          ],
          "correct_answer": "<b>C.</b> <p>231</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39700/gate2016-1-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 63,
          "question": "<p>Consider the following code segment.<br>\nx =u-t; <br>\ny =x*v; <br>\nx =y+w; <br>\ny =t-z; <br>\ny =x*y; <br>\nThe minimum number of total variables required to convert the above code segment to static single assignment form is__________ . <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39675/gate2016-1-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 64,
          "question": "<p>Which statement is true? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>LALR parser is more powerful and costly as compare to other parsers</p>",
            "<b>B.</b> <p>All CFG's are LP and not all grammars are uniquely defined</p>",
            "<b>C.</b> <p>Every SLR grammar is unambiguous but not every unambiguous grammar is SLR</p>",
            "<b>D.</b> <p>LR(K) is the most general back tracking shift reduce parsing method</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Every SLR grammar is unambiguous but not every unambiguous grammar is SLR</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51210/isro2015-29\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 65,
          "question": "<p>Yacc stands for <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>yet accept compiler constructs</p>",
            "<b>B.</b> <p>yet accept compiler compiler</p>",
            "<b>C.</b> <p>yet another compiler constructs</p>",
            "<b>D.</b> <p>yet another compiler compiler</p>"
          ],
          "correct_answer": "<b>D.</b> <p>yet another compiler compiler</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51209/isro2015-28\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 66,
          "question": "<p>Which one of the following is a top-down parser? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Recursive descent parser</p>",
            "<b>B.</b> <p>Shift left associative parser</p>",
            "<b>C.</b> <p>SLR(k) parser</p>",
            "<b>D.</b> <p>LR(k) parser</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Recursive descent parser</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51207/isro2015-27\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 67,
          "question": "<p>Which grammar rules violate the requirement of the operator grammar? A, B, C are variables and a, b, c are terminals<br>1. \\(A \\rightarrow B C\\)<br>2. \\(A \\rightarrow C c B b\\)<br>3. \\(A \\rightarrow  B a C\\)<br>4. \\(A \\rightarrow \\epsilon\\) <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1 only</p>",
            "<b>B.</b> <p>1 and 2</p>",
            "<b>C.</b> <p>1 and 3</p>",
            "<b>D.</b> <p>1 and 4</p>"
          ],
          "correct_answer": "<b>D.</b> <p>1 and 4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51202/isro2015-26\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 68,
          "question": "<p>The number of tokens in the following C statement is<br><pre><code> printf(\"i=%d, &amp;i=%x\", i, &amp;i);</code></pre> <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>26</p>",
            "<b>C.</b> <p>10</p>",
            "<b>D.</b> <p>21</p>"
          ],
          "correct_answer": "<b>C.</b> <p>10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/641/gate2000-1-18-isro2015-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 69,
          "question": "<p>Given the following expression grammar:<br>\\(E \\rightarrow E * F|F+E| F\\)<br>\\(F \\rightarrow F-F \\mid i d\\)<br>Which of the following is true? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>* has higher precedence than +</p>",
            "<b>B.</b> <p>\\(-\\) has higher precedence than *</p>",
            "<b>C.</b> <p>+ and \\(-\\) have same precedence</p>",
            "<b>D.</b> <p>+ has higher precedence than \\(-\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(-\\) has higher precedence than *</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/668/gate2000-2-21-isro2015-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 70,
          "question": "<p>Consider the following grammar<br>\nS \\( \\rightarrow\\) F|H <br>\nF \\( \\rightarrow\\)  p|c <br>\nH \\( \\rightarrow\\)  d|c <br>\nwhere S,F, and H are non-terminal symbols, p,d, and c are terminal symbols. Which of the following statement(s) is/are correct? <br>\nS1. LL(1) can parse all strings that are generated using grammar G <br>\nS2. LR(1) can parse all strings that are generated using grammar G <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only S1</p>",
            "<b>B.</b> <p>Only S2</p>",
            "<b>C.</b> <p>Both S1 and S2</p>",
            "<b>D.</b> <p>Neither S1 nor S2</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Neither S1 nor S2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8488/gate2015-3-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 71,
          "question": "<p>Among simple LR (SLR) , canonical LR, and look-ahead LR (LALR), which of the following pairs identify the method that is very easy to implement and the method that is the most powerful , in that order? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>SLR, LALR</p>",
            "<b>B.</b> <p>Canonical LR, LALR</p>",
            "<b>C.</b> <p>SLR, canonical LR</p>",
            "<b>D.</b> <p>LALR, canonical LR</p>"
          ],
          "correct_answer": "<b>C.</b> <p>SLR, canonical LR</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8413/gate2015-3-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 72,
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
          "id": 73,
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
          "id": 74,
          "question": "<p>Match the following:\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q17_dff5c21d.jpg\"> <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P-2, Q-3, R-1, S-4</p>",
            "<b>B.</b> <p>P-2, Q-1, R-4, S-3</p>",
            "<b>C.</b> <p>P-2, Q-4, R-1, S-3</p>",
            "<b>D.</b> <p>P-2, Q-3, R-4, S-1</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P-2, Q-4, R-1, S-3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8098/gate2015-2-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 75,
          "question": "<p>The least number of temporary variables required to create a three-address code in static single assignment form for the expression q + r / 3 + s - t * 5 + u * v /w is _______________. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "8",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8365/gate2015-1-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 76,
          "question": "<p>A variable x is said to be live at a statement \\(S_{i}\\) in a program if the following three conditions hold simultaneously: <br>\ni. There exists a statement \\(S_{j}\\) that uses x <br>\nii. There is a path from \\(S_{i}\\) to \\(S_{j}\\) in the flow graph corresponding to the program <br>\niii. The path has no intervening assignment to x including at \\(S_{i}\\) and \\(S_{j}\\) <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q36_5e8cdf73.jpg\"><br> The variables which are live both at the statement in basic block 2 and at the statement in basic block 3 of the above control flow graph are <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
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
          "id": 77,
          "question": "<p>Which one of the following is TRUE at any valid state in shift-reduce parsing? <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Viable prefixes appear only at the bottom of the stack and not inside</p>",
            "<b>B.</b> <p>Viable prefixes appear only at the top of the stack and not inside</p>",
            "<b>C.</b> <p>The stack contains only a set of viable prefixes</p>",
            "<b>D.</b> <p>The stack never contains viable prefixes</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The stack contains only a set of viable prefixes</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8187/gate2015-1-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 78,
          "question": "<p>Consider the following grammar.<br>\\(\\mathrm{S} \\rightarrow \\mathrm{AB}\\)<br>\\(\\mathrm{A} \\rightarrow \\mathrm{a}\\)<br>\\(\\mathrm{A} \\rightarrow \\mathrm{BaB}\\)<br>\\(\\mathrm{B} \\rightarrow \\mathrm{bbA}\\)<br>Which of the following statements is FALSE? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The length of every string produced by this grammar is even</p>",
            "<b>B.</b> <p>No string produced by this grammar has three consecutive a's</p>",
            "<b>C.</b> <p>The length of substring produced by B is always odd</p>",
            "<b>D.</b> <p>No string produced by this grammar has four consecutive b's</p>"
          ],
          "correct_answer": "<b>D.</b> <p>No string produced by this grammar has four consecutive b's</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/54994/isro2014-52\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 79,
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
          "id": 80,
          "question": "<p>Consider the following Java code fragment:<br><pre><code> public class While\n{\n    public void loop()\n    {\n        int x = 0;\n        while(1)\n        {\n            System.out.println(\"x plus one is\" +(x+1));\n        }\n    }\n}</code></pre> <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>There is syntax error in line no. 1</p>",
            "<b>B.</b> <p>There is syntax errors in line nos. 1 &amp; 6</p>",
            "<b>C.</b> <p>There is syntax error in line no. 8</p>",
            "<b>D.</b> <p>There is syntax error in line no. 6</p>"
          ],
          "correct_answer": "<b>D.</b> <p>There is syntax error in line no. 6</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/54121/isro2014-29\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 81,
          "question": "<p>What is the number of steps required to derive the string ((() ()) ()) for the following grammar?\n<br>\\(S \\rightarrow S S\\)<br>\\(S \\rightarrow(S)\\)<br>\\(S \\rightarrow \\varepsilon\\) <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>12</p>",
            "<b>C.</b> <p>15</p>",
            "<b>D.</b> <p>16</p>"
          ],
          "correct_answer": "<b>A.</b> <p>10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17222/isro2014-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 82,
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
          "id": 83,
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
          "id": 84,
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
          "id": 85,
          "question": "<p>The minimum number of arithmetic operations required to evaluate the polynomial\n\\(P(x)=x^{5}+4x^{3}+6x+5\\) for a given value of x, using only one temporary variable is _____. <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2045/gate2014-3-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 86,
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
          "id": 87,
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
          "id": 88,
          "question": "<p>Consider the grammar defined by the following production rules, with two operators * and + <br>\nS \\(\\rightarrow\\)T *P <br>\nT \\(\\rightarrow\\)U| T*U <br>\nP \\(\\rightarrow\\) Q +P |Q <br>\nQ \\(\\rightarrow\\) Id <br>\nU \\(\\rightarrow\\) Id <br>\nWhich one of the following is TRUE? <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(+\\) is left associative, while * is right associative</p>",
            "<b>B.</b> <p>\\(+\\) is right associative, while * is left associative</p>",
            "<b>C.</b> <p>Both + and * are right associative</p>",
            "<b>D.</b> <p>Both + and * are left associative</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(+\\) is right associative, while * is left associative</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1973/gate2014-2-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 89,
          "question": "<p>A canonical set of items is given below <br>\nS\\(\\rightarrow L.  \\gt R\\) <br>\nQ\\(\\rightarrow\\)R. <br>\nOn input symbol \\(\\lt \\) the set has <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>a shift-reduce conflict and a reduce-reduce conflict.</p>",
            "<b>B.</b> <p>a shift-reduce conflict but not a reduce-reduce conflict</p>",
            "<b>C.</b> <p>a reduce-reduce conflict but not a shift-reduce conflict.</p>",
            "<b>D.</b> <p>neither a shift-reduce nor a reduce-reduce conflict</p>"
          ],
          "correct_answer": "<b>D.</b> <p>neither a shift-reduce nor a reduce-reduce conflict</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1807/gate2014-1-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 90,
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
          "id": 91,
          "question": "<p>Which of the following productions eliminate left recursion in the productions given below:<br>\n\\(S \\rightarrow Aa \\mid b\\)<br>\n\\(A \\rightarrow Ac \\mid Sd \\mid \\epsilon\\) <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(S \\rightarrow Aa \\mid b, \\;\\; A \\rightarrow bdA', \\;\\; A' \\rightarrow A'c \\mid A'ba \\mid A \\mid \\epsilon\\)</p>",
            "<b>B.</b> <p>\\(S \\rightarrow Aa \\mid b, \\;\\; A \\rightarrow A' \\mid bdA', \\;\\; A' \\rightarrow cA' \\mid adA' \\mid \\epsilon\\)</p>",
            "<b>C.</b> <p>\\(S \\rightarrow Aa \\mid b, \\;\\; A \\rightarrow A'c \\mid A'd ,\\;\\;  A' \\rightarrow bdA' \\mid cA \\mid \\epsilon\\)</p>",
            "<b>D.</b> <p>\\(S \\rightarrow Aa \\mid b, \\;\\; A \\rightarrow cA' \\mid adA' \\mid bdA',\\;\\;  A' \\rightarrow A \\mid \\epsilon\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(S \\rightarrow Aa \\mid b, \\;\\; A \\rightarrow A' \\mid bdA', \\;\\; A' \\rightarrow cA' \\mid adA' \\mid \\epsilon\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43760/isro-2013-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 92,
          "question": "<p>Shift reduce parsing belongs to a class of <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Bottom up parsing.</p>",
            "<b>B.</b> <p>Top down parsing.</p>",
            "<b>C.</b> <p>Recursive parsing.</p>",
            "<b>D.</b> <p>Predictive parsing.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Bottom up parsing.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43755/isro-2013-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 93,
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
          "id": 94,
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
          "id": 95,
          "question": "<p>Consider the following two sets of LR(1) items of an LR(1) grammar.\n<br><br>\\(\\begin{array}{l|l}\nX \\rightarrow c.X, c∕d &amp;X → c.X, \\$\\\\\nX \\rightarrow .cX, c∕&nbsp;&nbsp;d&amp;&nbsp;X → .cX, \\$\\\\\nX \\rightarrow .d, c∕&nbsp;d &amp;&nbsp;X → .d, \\$\n\\end{array}\\)  <br><br>\nWhich of the following statements related to merging of the two sets in the corresponding LALR parser is/are FALSE? <br>\n1. Cannot be merged since look aheads are different. <br>\n2. Can be merged but will result in S-R conflict. <br>\n3. Can be merged but will result in R-R conflict. <br>\n4. Cannot be merged since goto on c will lead to two different sets. <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1 only</p>",
            "<b>B.</b> <p>2 only</p>",
            "<b>C.</b> <p>1 and 4 only</p>",
            "<b>D.</b> <p>1, 2, 3 and 4</p>"
          ],
          "correct_answer": "<b>D.</b> <p>1, 2, 3 and 4</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1551/gate2013-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 96,
          "question": "<p>What is the maximum number of reduce moves that can be taken by a bottom-up parser for a\ngrammar with no epsilon- and unit-production (i.e., of type \\(A\\rightarrow \\epsilon\\) and \\(A \\rightarrow a \\)) to parse a string\nwith n tokens? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n/2</p>",
            "<b>B.</b> <p>n-1</p>",
            "<b>C.</b> <p>2n-1</p>",
            "<b>D.</b> <p>\\(2^{n}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>n-1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1418/gate2013-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 97,
          "question": "<p>For the grammar below, a partial LL(1) parsing table is also presented along with the grammar. Entries that\nneed to be filled are indicated as E1, E2, and E3. \\(\\varepsilon\\) is the empty string, $ indicates end of input, and, | separates alternate right hand sides of productions.<br>\\(S\\rightarrow aAbB|bAaB|\\varepsilon\\)<br>  \\(A\\rightarrow S\\) <br>\\(B\\rightarrow S\\)  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q52_d25c144f.jpg\"> <br>The appropriate entries for E1, E2, and E3 are <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>E1: S\\(\\rightarrow\\)aAbB, A\\(\\rightarrow\\)S <br>\nE2: S\\(\\rightarrow\\)bAaB, B\\(\\rightarrow\\)S <br>\nE3: B\\(\\rightarrow\\)S</p>",
            "<b>B.</b> <p>E1: S\\(\\rightarrow\\) aAbB, S \\(\\rightarrow \\varepsilon  \\)  <br>\nE2: S\\(\\rightarrow\\) bAaB, S \\(\\rightarrow \\varepsilon \\)  <br>\nE3: B\\(\\rightarrow \\varepsilon\\)S</p>",
            "<b>C.</b> <p>E1: S \\(\\rightarrow\\) aAbB, S \\(\\rightarrow \\varepsilon\\)<br>\nE2: S \\(\\rightarrow\\) bAaB, S \\(\\rightarrow \\varepsilon\\) <br>\nE3: B \\(\\rightarrow\\) S</p>",
            "<b>D.</b> <p>E1: A\\(\\rightarrow\\)S, S \\(\\rightarrow \\varepsilon\\)  <br>\nE2: B\\(\\rightarrow\\)S, S \\(\\rightarrow \\varepsilon\\)  <br>\nE3: B\\(\\rightarrow\\)S</p>"
          ],
          "correct_answer": "<b>C.</b> <p>E1: S \\(\\rightarrow\\) aAbB, S \\(\\rightarrow \\varepsilon\\)<br>\nE2: S \\(\\rightarrow\\) bAaB, S \\(\\rightarrow \\varepsilon\\) <br>\nE3: B \\(\\rightarrow\\) S</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43312/gate2012-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 98,
          "question": "<p>For the grammar below, a partial LL(1) parsing table is also presented along with the grammar. Entries that\nneed to be filled are indicated as E1, E2, and E3. \\(\\varepsilon\\) is the empty string, $ indicates end of input, and, | separates alternate right hand sides of productions.<br>\\(S\\rightarrow aAbB|bAaB|\\varepsilon\\)<br>  \\(A\\rightarrow S\\) <br>\\(B\\rightarrow S\\)  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q52_d25c144f.jpg\"> <br>The FIRST and FOLLOW sets for the non-terminals A and B are <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>FIRST(A) = {a, b, \\(\\varepsilon\\)} = FIRST(B)<br>\nFOLLOW(A) = {a, b}<br>\nFOLLOW(B) = {a, b, $}</p>",
            "<b>B.</b> <p>FIRST(A) = {a, b, $}<br>\nFIRST(B) = {a, b, \\(\\varepsilon\\)}<br>\nFOLLOW(A) = {a, b}<br>\nFOLLOW(B) = {$}</p>",
            "<b>C.</b> <p>FIRST(A) = {a, b, \\(\\varepsilon\\)} = FIRST(B)<br>\nFOLLOW(A) = {a, b} <br>\nFOLLOW(B) = \\(\\phi\\)</p>",
            "<b>D.</b> <p>FIRST(A) = {a, b} = FIRST(B) <br>\nFOLLOW(A) = {a, b} <br>\nFOLLOW(B) = {a, b}</p>"
          ],
          "correct_answer": "<b>A.</b> <p>FIRST(A) = {a, b, \\(\\varepsilon\\)} = FIRST(B)<br>\nFOLLOW(A) = {a, b}<br>\nFOLLOW(B) = {a, b, $}</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2181/gate2012-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 99,
          "question": "<p>Consider the program given below, in a block-structured pseudo-language with lexical scoping and\nnesting of procedures permitted.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q36_e237e299.jpg\"><br>\nConsider the calling chain: Main \\(\\rightarrow\\) A1 \\(\\rightarrow\\) A2 \\(\\rightarrow\\) A21 \\(\\rightarrow\\) A1 <br>\nThe correct set of activation records along with their access links is given by <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q36a_b9042f97.jpg\"> <br><br><strong>(GATE CSE 2012)</strong></p>",
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
          "id": 100,
          "question": "<p>A symbol table of length 152 is processing 25 entries at any instant. What is occupation density? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0.164</p>",
            "<b>B.</b> <p>127</p>",
            "<b>C.</b> <p>8.06</p>",
            "<b>D.</b> <p>6.08</p>"
          ],
          "correct_answer": "<b>A.</b> <p>0.164</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/53152/isro2011-78\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 101,
          "question": "<p>Number of comparisons required for an unsuccessful search of an element in a sequential search organized, fixed length, symbol table of length L is <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>L</p>",
            "<b>B.</b> <p>L/2</p>",
            "<b>C.</b> <p>(L+1)/2</p>",
            "<b>D.</b> <p>2L</p>"
          ],
          "correct_answer": "<b>A.</b> <p>L</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18148/isro2011-70\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 102,
          "question": "<p>Which of the following sentences can be generated by <br>\n\\(S -&gt; aS \\mid bA\\)<br>\n\\(A -&gt; d \\mid cA\\) <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>bccdd</p>",
            "<b>B.</b> <p>abbcca</p>",
            "<b>C.</b> <p>abcabc</p>",
            "<b>D.</b> <p>abcd</p>"
          ],
          "correct_answer": "<b>D.</b> <p>abcd</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52864/isro2011-68\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 103,
          "question": "<p>Which variable does not drive a terminal string in grammar?<br>\nS -&gt; AB<br>\nA -&gt; a<br>\nB -&gt; b<br>\nB -&gt; C<br> <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>S</p>"
          ],
          "correct_answer": "<b>C.</b> <p>C</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51695/isro2011-43\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 104,
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
          "id": 105,
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
          "id": 106,
          "question": "<p>Consider evaluating the following expression tree on a machine with load-store\narchitecture in which memory can be accessed only through load and store\ninstructions. The variables a, b, c, d and e are initially stored in memory. The\nbinary operators used in this expression tree can be evaluated by the machine\nonly when the operands are in registers. The instructions produce result only in a\nregister. If no intermediate results can be stored in memory, what is the\nminimum number of registers needed to evaluate this expression?  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q47_a8b512f3.jpg\"> <br><br><strong>(GATE CSE 2011)</strong></p>",
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
          "id": 107,
          "question": "<p>Consider two binary operators  '\\(\\uparrow\\)\n'and '\\(\\downarrow\\)' with the precedence of operator \\(\\downarrow\\)\nbeing lower than that of the operator \\(\\uparrow\\) . Operator \\(\\uparrow\\) is right associative while\noperator \\(\\downarrow\\) is left associative. Which one of the following represents the parse\ntree for expression (7 \\(\\downarrow\\) 3 \\(\\uparrow\\)4 \\(\\uparrow\\) 3 \\(\\downarrow\\)2)? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q37_199e567a.jpg\"> <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>B.</b> <p>B</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2129/gate2011-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 108,
          "question": "<p>The lexical analysis for a modern computer language such as Java needs the\npower of which one of the following machine models in a necessary and sufficient\nsense? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Finite state automata</p>",
            "<b>B.</b> <p>Deterministic pushdown automata</p>",
            "<b>C.</b> <p>Non-Deterministic pushdown automata</p>",
            "<b>D.</b> <p>Turing machine</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Finite state automata</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2121/gate2011-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 109,
          "question": "<p>In a compiler, keywords of a language are recognized during <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>parsing of the program</p>",
            "<b>B.</b> <p>the code generation</p>",
            "<b>C.</b> <p>the lexical analysis of the program</p>",
            "<b>D.</b> <p>dataflow analysis</p>"
          ],
          "correct_answer": "<b>C.</b> <p>the lexical analysis of the program</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2103/gate2011-1#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 110,
          "question": "<p>The grammar S\\(\\rightarrow\\)aSa|bS|c is <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>LL(1) but not LR(1)</p>",
            "<b>B.</b> <p>LR(1) but not LR(1)</p>",
            "<b>C.</b> <p>Both LL(1) and LR(1)</p>",
            "<b>D.</b> <p>Neither LL(1) nor LR(1)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both LL(1) and LR(1)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2339/gate2010-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 111,
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
          "id": 112,
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
          "id": 113,
          "question": "<p>Which data structure in a compiler is used for managing information about\nvariables and their attributes? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Abstract syntax tree</p>",
            "<b>B.</b> <p>Symbol table</p>",
            "<b>C.</b> <p>Semantic stack</p>",
            "<b>D.</b> <p>Parse table</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Symbol table</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2186/gate2010-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 114,
          "question": "<p>Which of the following statements are TRUE? <br><br>\nI There exist parsing algorithms for some programming languages whose\ncomplexities are less than \\(\\theta (n^{3})\\). <br>\nII A programming language which allows recursion can be implemented with static storage allocation. <br>\nIII No L-attributed definition can be evaluated in the framework of bottom-up parsing.<br>\nIV Code improving transformations can be performed at both source language and intermediate code level. <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II</p>",
            "<b>B.</b> <p>I and IV</p>",
            "<b>C.</b> <p>III and IV</p>",
            "<b>D.</b> <p>I, III and IV</p>"
          ],
          "correct_answer": "<b>B.</b> <p>I and IV</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1328/gate2009-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 115,
          "question": "<p>Match all items in Group 1 with correct options from those given in Group 2. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q17_042f5f0c.jpg\"> <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P-4. Q-1, R-2, S-3</p>",
            "<b>B.</b> <p>P-3, Q-1, R-4, S-2</p>",
            "<b>C.</b> <p>P-3, Q-4, R-1, S-2</p>",
            "<b>D.</b> <p>P-2, Q-1, R-4, S-3</p>"
          ],
          "correct_answer": "<b>B.</b> <p>P-3, Q-1, R-4, S-2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1309/gate2009-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 116,
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
          "id": 117,
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
          "id": 118,
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
        },
        {
          "id": 119,
          "question": "<p>Consider the grammar<br>\n\\(S \\rightarrow ABCc \\mid bc\\)<br>\n\\(BA \\rightarrow AB\\)<br>\n\\(Bb \\rightarrow bb\\)<br>\n\\(Ab \\rightarrow ab\\)<br>\n\\(Aa \\rightarrow aa\\)<br>\nWhich of the following sentences can be derived by this grammar? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>abc</p>",
            "<b>B.</b> <p>aab</p>",
            "<b>C.</b> <p>abcc</p>",
            "<b>D.</b> <p>abbc</p>"
          ],
          "correct_answer": "<b>A.</b> <p>abc</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49668/isro2008-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 120,
          "question": "<p>An LALR(1) parser for a grammar G can have shift-reduce (S-R) conflicts if and\nonly if <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The SLR(1) parser for G has S-R conflicts</p>",
            "<b>B.</b> <p>The LR(1) parser for G has S-R conflicts</p>",
            "<b>C.</b> <p>The LR(0) parser for G has S-R conflicts</p>",
            "<b>D.</b> <p>The LALR(1) parser for G has reduce-reduce conflicts</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The LR(1) parser for G has S-R conflicts</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/478/gate2008-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 121,
          "question": "<p>Which of the following are true? <br><br>\nI. A programming language which does not permit global variables of any kind\nand has no nesting of procedures/functions, but permits recursion can be\nimplemented with static storage allocation <br><br>\nII. Multi-level access link (or display) arrangement is needed to arrange\nactivation records only if the programming language being implemented has\nnesting of procedures/functions <br><br>\nIII. Recursion in programming languages cannot be implemented with dynamic\nstorage allocation <br><br>\nIV. Nesting procedures/functions and recursion require a dynamic heap\nallocation scheme and cannot be implemented with a stack-based allocation\nscheme for activation records <br><br>\nV. Programming languages which permit a function to return a function as its\nresult cannot be implemented with a stack-based storage allocation scheme\nfor activation records <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>II and V only</p>",
            "<b>B.</b> <p>I, III and IV only</p>",
            "<b>C.</b> <p>I, II and V only</p>",
            "<b>D.</b> <p>II, III and V only</p>"
          ],
          "correct_answer": "<b>A.</b> <p>II and V only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/477/gate2008-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 122,
          "question": "<p>Match the following: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q51_b2e86863.jpg\"> <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>E - P, F - R, G - Q, H - S</p>",
            "<b>B.</b> <p>E - R, F - P, G - S, H - Q</p>",
            "<b>C.</b> <p>E - R, F - P, G - Q, H - S</p>",
            "<b>D.</b> <p>E - P, F - R, G - S, H - Q</p>"
          ],
          "correct_answer": "<b>C.</b> <p>E - R, F - P, G - Q, H - S</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/463/gate2008-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 123,
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
          "id": 124,
          "question": "<p>Which of the following describes a handle (as applicable to LR-parsing) appropriately? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It is the position in a sentential form where the next shift or reduce operation\nwill occur</p>",
            "<b>B.</b> <p>It is non-terminal whose production will be used for reduction in the next step</p>",
            "<b>C.</b> <p>It is a production that may be used for reduction in a future step along with a\nposition in the sentential form where the next shift or reduce operation will occur</p>",
            "<b>D.</b> <p>It is the production p that will be used for reduction in the next step along with a position in the sentential form where the right hand side of the production may be found</p>"
          ],
          "correct_answer": "<b>D.</b> <p>It is the production p that will be used for reduction in the next step along with a position in the sentential form where the right hand side of the production may be found</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/409/gate2008-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 125,
          "question": "<p>Consider the following grammars. Names representing terminals have been specified in capital letters.<br>\\(\\begin{array}{llll}\\hline \\text{$G1$ :} &amp; \\text{stmnt} &amp; \\text{$\\rightarrow$} &amp; \\text{WHILE (expr) stmnt} \\\\ \\text{} &amp; \\text{stmnt} &amp; \\text{$\\rightarrow$} &amp; \\text{OTHER} \\\\ \\text{} &amp; \\text{expr} &amp; \\text{$\\rightarrow$} &amp; \\text{ID} \\\\\\hline \\text{ $G2$ :} &amp; \\text{stmnt} &amp; \\text{$\\rightarrow$} &amp; \\text{WHILE (expr) stmnt} \\\\ \\text{} &amp; \\text{stmnt} &amp; \\text{$\\rightarrow$} &amp; \\text{OTHER} \\\\ \\text{} &amp; \\text{expr} &amp; \\text{$\\rightarrow$} &amp; \\text{expr $+$ expr} \\\\ \\text{} &amp; \\text{expr} &amp; \\text{$\\rightarrow$} &amp; \\text{expr $*$ expr} \\\\ \\text{} &amp; \\text{expr} &amp; \\text{$\\rightarrow$} &amp; \\text{ID} \\\\\\hline \\end{array}\\)<br>Which one of the following statements is true? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(G_1\\) is context-free but not regular and \\(G_2\\) is regular</p>",
            "<b>B.</b> <p>\\(G_2\\) is context-free but not regular and \\(G_1\\) is regular</p>",
            "<b>C.</b> <p>Both \\(G_1\\) and \\(G_2\\) are regular</p>",
            "<b>D.</b> <p>Both \\(G_1\\) and \\(G_2\\) are context-free but neither of them is regular</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Both \\(G_1\\) and \\(G_2\\) are context-free but neither of them is regular</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3491/gate2007-it-49\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 126,
          "question": "<p>Consider the grammar given below:<br>\\(S \\rightarrow x \\ B \\mid y \\ A\\)<br>\n\\(A \\rightarrow x \\mid x \\ S \\mid y \\ A \\ A\\)<br>\n\\(B \\rightarrow y \\mid y \\ S \\mid x \\ B \\ B\\)<br><br>\nConsider the following strings.<br>\ni.   xxyyx<br>\nii.  xxyyxy<br>\niii. xyxy<br>\niv.  yxxy<br>\nv.   yxx<br>\nvi.  xyx<br>\nWhich of the above strings are generated by the grammar ? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>i, ii and iii</p>",
            "<b>B.</b> <p>ii, v and vi</p>",
            "<b>C.</b> <p>ii, iii and iv</p>",
            "<b>D.</b> <p>i, iii and iv</p>"
          ],
          "correct_answer": "<b>C.</b> <p>ii, iii and iv</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3490/gate2007-it-48\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 127,
          "question": "<p>Early binding refers to a binding performed at compile time and late binding refers to a binding performed at execution time. Consider the following statements:<br>\ni.   Static scope facilitates w1 bindings.<br>\nii.  Dynamic scope requires w2 bindings.<br>\niii. Early bindings w3 execution efficiency.<br>\niv.  Late bindings w4 execution efficiency.<br>\nThe right choices of wl, w2, w3 and w4 (in that order) are <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Early, late, decrease, increase</p>",
            "<b>B.</b> <p>Late, early, increase, decrease</p>",
            "<b>C.</b> <p>Late, early, decrease, increase</p>",
            "<b>D.</b> <p>Early, late, increase, decrease</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Early, late, increase, decrease</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3468/gate2007-it-35\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 128,
          "question": "<p>Consider an ambiguous grammar G and its disambiguated version D. Let the language recognized by the two grammars be denoted by L(G) and L(D) respectively. Which one of the following is true? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(L (D) \\subset L (G)\\)</p>",
            "<b>B.</b> <p>\\(L (D) \\supset L (G)\\)</p>",
            "<b>C.</b> <p>L (D) = L (G)</p>",
            "<b>D.</b> <p>L (D) is empty</p>"
          ],
          "correct_answer": "<b>C.</b> <p>L (D) = L (G)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3442/gate2007-it-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 129,
          "question": "<p>Consider the CFG with {S, A,B} as the non-terminal alphabet, {a,b} as the terminal\nalphabet, S as the start symbol and the following set of production rules:  <br> S\\(\\rightarrow\\) aB S\\(\\rightarrow\\)bA <br>\nB\\(\\rightarrow\\) b A \\(\\rightarrow\\)a <br>\nB\\(\\rightarrow\\) bS A \\(\\rightarrow\\)aS <br>\nB\\(\\rightarrow\\) aBB S \\(\\rightarrow\\)bAA    <br> <br>  For the string \"aabbab\", how many derivation trees are there? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>4</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43512/gate2007-79#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 130,
          "question": "<p>Consider the CFG with {S, A,B} as the non-terminal alphabet, {a,b} as the terminal\nalphabet, S as the start symbol and the following set of production rules:  <br> S\\(\\rightarrow\\) aB S\\(\\rightarrow\\)bA <br>\nB\\(\\rightarrow\\) b A \\(\\rightarrow\\)a <br>\nB\\(\\rightarrow\\) bS A \\(\\rightarrow\\)aS <br>\nB\\(\\rightarrow\\) aBB S \\(\\rightarrow\\)bAA    <br> <br>    Which of the following strings is generated by the grammar? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>aaaabb</p>",
            "<b>B.</b> <p>aabbbb</p>",
            "<b>C.</b> <p>aabbab</p>",
            "<b>D.</b> <p>abbbba</p>"
          ],
          "correct_answer": "<b>C.</b> <p>aabbab</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1272/gate2007-78#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 131,
          "question": "<p>In a simplified computer the instructions are:\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q54a_496f1284.jpg\"> <br>\nThe computer has only two registers, and OP is either ADD or SUB. Consider the\nfollowing basic block:   <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q54b_a712a573.jpg\"> <br>\nAssume that all operands are initially in memory. The final value of the\ncomputation should be in memory. What is the minimum number of MOV\ninstructions in the code generated for this basic block? <br><br><strong>(GATE CSE 2007)</strong></p>",
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
          "id": 132,
          "question": "<p>Consider the grammar with non-terminals N={\\(S,C,S_1\\)}, terminals\nT={a,b,i,t,e}, with S as the start symbol, and the following set of rules: <br><br>\n\\(S\\rightarrow iCtSS_{1}|a \\) <br> \\(S_{1}\\rightarrow eS|\\epsilon  \\)<br> \\(C \\rightarrow b\\)<br><br>\nThe grammar is NOT LL(1) because: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>it is left recursive</p>",
            "<b>B.</b> <p>it is right recursive</p>",
            "<b>C.</b> <p>it is ambiguous</p>",
            "<b>D.</b> <p>it is not context-free.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>it is ambiguous</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1250/gate2007-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 133,
          "question": "<p>Which one of the following is a top-down parser? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Recursive descent parser.</p>",
            "<b>B.</b> <p>Operator precedence parser</p>",
            "<b>C.</b> <p>An LR(k) parser</p>",
            "<b>D.</b> <p>An LALR(k) parser</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Recursive descent parser.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1216/gate2007-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 134,
          "question": "<p>The grammar <br><br> S\\(\\rightarrow\\)AC|CB <br> C\\(\\rightarrow\\)aCb|\\(\\varepsilon\\)        <br>A\\(\\rightarrow\\)aA|a      <br>B\\(\\rightarrow\\)Bb|b <br><br> generates the language \\(L=\\{a^{i}b^{j}|i\\neq j\\}\\) , what is the length of the derivation (number of steps starting from S) to generate the string \\(a^{l}b^{m} \\) with \\(l \\neq m\\)? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>max(l,m)+2</p>",
            "<b>B.</b> <p>l+m+2</p>",
            "<b>C.</b> <p>l+m+3</p>",
            "<b>D.</b> <p>max(l,m)+3</p>"
          ],
          "correct_answer": "<b>A.</b> <p>max(l,m)+2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/79801/gate2006-85#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 135,
          "question": "<p>Which one of the following grammars generates the language <br> \\(L=\\{a^{i}b^{j}|i\\neq j\\}\\) <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q84_2026e286.jpg\"> <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>D.</b> <p>D</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1856/gate2006-84#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 136,
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
          "id": 137,
          "question": "<p>Consider the following translation scheme. <br>\nS \\(\\rightarrow\\) ER <br>\nR  \\(\\rightarrow\\)* E{print('*');}R|\\(\\varepsilon\\) <br>\nE\\(\\rightarrow\\)F+E{print('+');}|F <br>\nF\\(\\rightarrow\\)(S)|id{print(id.value);} <br>\nHere id is a taken that represents an integer and id.value represents the\ncorresponding integer value. For an input '2*3+4', this translation scheme prints <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2*3+4</p>",
            "<b>B.</b> <p>2*+34</p>",
            "<b>C.</b> <p>23*4+</p>",
            "<b>D.</b> <p>234+*</p>"
          ],
          "correct_answer": "<b>D.</b> <p>234+*</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1837/gate2006-59#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 138,
          "question": "<p>Consider the following grammar <br>\nS \\(\\rightarrow\\) FR <br>\nR \\(\\rightarrow\\)* S | \\(\\varepsilon\\) <br>\nF \\(\\rightarrow\\) id <br>\nIn the predictive parser table, M, of the grammar the entries M[S, id] and M[R,$]\nrespectively <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{S \\(\\rightarrow\\) FR} and {R \\(\\rightarrow \\varepsilon\\) }</p>",
            "<b>B.</b> <p>{S \\(\\rightarrow\\) FR} and {}</p>",
            "<b>C.</b> <p>{S \\(\\rightarrow\\) FR} and {R \\(\\rightarrow\\) * S}</p>",
            "<b>D.</b> <p>{F \\(\\rightarrow\\) id} and {R \\(\\rightarrow \\varepsilon\\) }</p>"
          ],
          "correct_answer": "<b>A.</b> <p>{S \\(\\rightarrow\\) FR} and {R \\(\\rightarrow \\varepsilon\\) }</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1836/gate2006-58#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 139,
          "question": "<p>Consider the following grammar. <br>\nS \\(\\rightarrow\\) S * E <br>\nS \\(\\rightarrow\\) E <br>\nE \\(\\rightarrow\\) F + E <br>\nE \\(\\rightarrow\\) F   <br>                                                                                                F F \\(\\rightarrow\\) id <br>\nConsider the following LR(0) items corresponding to the grammar above. <br>\n(i) S \\(\\rightarrow\\) S * .E<br>\n(ii) E \\(\\rightarrow\\) F. + E<br>\n(iii) E \\(\\rightarrow\\) F + .E<br>\nGiven the items above, which two of them will appear in the same set in the\ncanonical sets-of-items for the grammar? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(i) and (ii)</p>",
            "<b>B.</b> <p>(ii) and (iii)</p>",
            "<b>C.</b> <p>(i) and (iii)</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of these</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/886/gate2006-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 140,
          "question": "<p>Consider the context-free grammar <br>\n\\(E\\rightarrow E+E\\)<br>\n\\(E\\rightarrow (E *E)\\)<br>\n\\(E\\rightarrow \\text{id}\\)<br>\nwhere E is the starting symbol, the set of terminals is {id, (,+,),*}, and the set of non-terminals is {E}.<br>For the terminal string id + id + id + id, how many parse trees are possible? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>2</p>"
          ],
          "correct_answer": "<b>A.</b> <p>5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3850/gate2005-it-83b\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 141,
          "question": "<p>Consider the context-free grammar <br>\n\\(E\\rightarrow E+E\\)<br>\n\\(E\\rightarrow (E *E)\\)<br>\n\\(E\\rightarrow \\text{id}\\)<br>\nwhere E is the starting symbol, the set of terminals is \\(\\{id, (,+,),*\\}\\), and the set of nonterminals is {E}.\nWhich of the following terminal strings has more than one parse tree when parsed according to the above grammar? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>id+id+id+id</p>",
            "<b>B.</b> <p>id+(id*(id*id))</p>",
            "<b>C.</b> <p>(id*(id*id))+id</p>",
            "<b>D.</b> <p>((id*id+id)*id)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>id+id+id+id</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3849/gate2005-it-83a\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 142,
          "question": "<p>Consider the following expression grammar. The semantic rules for expression calculation are stated next to each grammar production.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q84_bef15a5a.jpg\"> <br>  Assume the conflicts of this question are resolved usinf yacc tool and an LALR(1) parser is generated for parsing arithmetic expressions as per the given grammar. Consider an expression 3 x 2 + 1. What precedence and associativity properties does the generated parser realize? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Equal precedence and left associativity; ex?pression is evaluated to 7</p>",
            "<b>B.</b> <p>Equal precedence and right associativity; ex?pression is evaluated to 9</p>",
            "<b>C.</b> <p>Precedence of 'x' is higher than that of '+', and both operators are left associative; expression is evaluated to 7</p>",
            "<b>D.</b> <p>Precedence of '+' is higher than that of 'x', and both operators are left associative; expression is evaluated to 9</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Equal precedence and right associativity; ex?pression is evaluated to 9</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/87037/gate2005-86#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 143,
          "question": "<p>Consider the following expression grammar. The semantic rules for expression calculation are stated next to each grammar production.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q84_bef15a5a.jpg\"> <br> The above grammar and the semantic rules are fed to a yacc tool (which is an LALR (1) parser generator) for parsing and evaluating arithmetic expressions. Which one of the following is true about the action of yacc for the given grammar? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It detects recursion and eliminates recursion</p>",
            "<b>B.</b> <p>It detects reduce-reduce conflict, and resolves</p>",
            "<b>C.</b> <p>It detects shift-reduce conflict, and resolves the conflict in favor of a shift over a reduce action</p>",
            "<b>D.</b> <p>It detects shift-reduce conflict, and resolves the conflict in favor of a reduce over a shift action</p>"
          ],
          "correct_answer": "<b>C.</b> <p>It detects shift-reduce conflict, and resolves the conflict in favor of a shift over a reduce action</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1405/gate2005-85#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 144,
          "question": "<p>Consider the grammar:<br><br>\nS \\(\\rightarrow\\) (S) | a <br><br>\nLet the number of states in SLR (1), LR(1) and LALR(1) parsers for the grammar be n1, n2 and n3\nrespectively. The following relationship holds good: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n1 \\(\\lt\\) n2 \\(\\lt\\) n3</p>",
            "<b>B.</b> <p>n1 = n3 \\(\\lt\\) n2</p>",
            "<b>C.</b> <p>n1 = n2 = n3</p>",
            "<b>D.</b> <p>n1 \\(\\geq\\) n3 \\(\\geq\\) n2</p>"
          ],
          "correct_answer": "<b>B.</b> <p>n1 = n3 \\(\\lt\\) n2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1383/gate2005-60#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 145,
          "question": "<p>Consider the grammar:<br><br>\nE \\(\\rightarrow\\) E + n | E * n | n <br><br>\nFor a sentence n + n *  n, the handles in the right-sentential form of the reduction are: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n, E + n and E + n * n</p>",
            "<b>B.</b> <p>n, E + n and E + E * n</p>",
            "<b>C.</b> <p>n, n + n and n + n * n</p>",
            "<b>D.</b> <p>n, E + n and E * n</p>"
          ],
          "correct_answer": "<b>D.</b> <p>n, E + n and E * n</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1382/gate2005-59#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 146,
          "question": "<p>The grammar \\(A\\rightarrow AA|(A)|\\varepsilon\\) is not suitable for predictive-parsing because the grammar is: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>ambiguous</p>",
            "<b>B.</b> <p>left-recursive</p>",
            "<b>C.</b> <p>right-recursive</p>",
            "<b>D.</b> <p>operator-grammar</p>"
          ],
          "correct_answer": "<b>A.</b> <p>ambiguous</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1350/gate2005-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 147,
          "question": "<p>Consider the grammar with the following translation rules and E as the start symbol.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q45_57f67ac9.jpg\"><br>\nCompute E.value for the root of the parse tree for the expression:2 # 3 &amp; 5 # 6 &amp; 4. <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>200</p>",
            "<b>B.</b> <p>180</p>",
            "<b>C.</b> <p>160</p>",
            "<b>D.</b> <p>40</p>"
          ],
          "correct_answer": "<b>C.</b> <p>160</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1042/gate2004-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 148,
          "question": "<p>Consider the grammar rule  \\(E \\rightarrow E1 - E2 \\) for arithmetic expressions. The code generated is targeted to a CPU having a single user register. The subtraction operation requires the first operand to be in the register. If E1 and E2 do not have nay-common sub-expression, in order to get the shortest possible code <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>E1 should be evaluated first</p>",
            "<b>B.</b> <p>E2 should be evaluated first</p>",
            "<b>C.</b> <p>Evaluation of E1 and E2 should necessarily be interleaved</p>",
            "<b>D.</b> <p>Order to evaluation of E1 and E2 is of no consequence</p>"
          ],
          "correct_answer": "<b>B.</b> <p>E2 should be evaluated first</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/4069/gate2004-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 149,
          "question": "<p>Consider a program P that consists of two source modules M1 and M2 contained in two different files. If M1 contains a reference to a function defined in M2 the reference will be resolved at <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Edit time</p>",
            "<b>B.</b> <p>Compile time</p>",
            "<b>C.</b> <p>Link time</p>",
            "<b>D.</b> <p>Load time</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Link time</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1006/gate2004-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 150,
          "question": "<p>Which of the following is NOT an advantage of using shared, dynamically linked\nlibraries as opposed to using statically linked libraries? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Smaller sizes of executable</p>",
            "<b>B.</b> <p>Lesser overall page fault rate in the system</p>",
            "<b>C.</b> <p>Faster program startup</p>",
            "<b>D.</b> <p>Existing programs need not be re-linked to take advantage of newer\nversions of libraries</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Lesser overall page fault rate in the system</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/962/gate2003-76#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 151,
          "question": "<p>Consider the syntax directed definition shown below <br><br>\\(\\begin{array}{ll}\nS \\rightarrow \\mathbf{ id :=} E&amp;\\qquad \\{gen(\\mathbf{ id}.place = E.place;);\\}\\\\\nE \\rightarrow E_1 + E_2 &amp;\\qquad \\{t = newtemp();\\\\\n&amp;\\qquad gen(t = E_1.place + E_2.place;);\\\\\n&amp;\\qquad E.place = t;\\}\\\\\nE \\rightarrow id&amp;\\qquad \\{E.place = \\mathbf{id}.place;\\}\n\\end{array}\n\\)<br><br>\nHere, gen is a function that generates the output code, and newtemp is a function\nthat returns the name of a new temporary variable on every call. Assume that ti's are the temporary variable names generated by newtemp.\nFor the statement 'X:= Y + Z', the 3-address code sequence generated by this\ndefinition is <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>X = Y + Z</p>",
            "<b>B.</b> <p>t1 = Y + Z;  X=t1</p>",
            "<b>C.</b> <p>t1 = Y; t2 = t1+ Z;  X = t2</p>",
            "<b>D.</b> <p>t1 = Y; t2 = Z; t3=t1+t2; X = t3</p>"
          ],
          "correct_answer": "<b>B.</b> <p>t1 = Y + Z;  X=t1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/947/gate2003-59#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 152,
          "question": "<p>Consider the translation scheme shown below <br>\nS \\(\\rightarrow\\) TR <br>\nR \\(\\rightarrow\\)+ T {print ('+');}R | \\(\\epsilon \\) <br>\nT \\(\\rightarrow\\) num {print (num.val);}<br>\nHere num is a token that represents an integer and num. val represents the corresponding integer value. For an input string '9 + 5+ 2', this translation scheme will print <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>9+5+2</p>",
            "<b>B.</b> <p>95+2+</p>",
            "<b>C.</b> <p>952++</p>",
            "<b>D.</b> <p>++ 9 5 2</p>"
          ],
          "correct_answer": "<b>B.</b> <p>95+2+</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/946/gate2003-58#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 153,
          "question": "<p>Consider the grammar shown below  <br>\\(S\\rightarrow iEtSS'|a \\) <br>\\(S'\\rightarrow eS|\\epsilon \\) <br>\\( E\\rightarrow b\\) <br> In the predictive parse table. M, of this grammar, the entries M[S',e] and M[S',$] respectively are <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{\\(S'\\rightarrow eS\\)} and {\\(S'\\rightarrow \\varepsilon \\)}</p>",
            "<b>B.</b> <p>{\\(S'\\rightarrow eS\\)} and {}</p>",
            "<b>C.</b> <p>{\\(S' \\rightarrow   \\varepsilon \\)} and {\\(S'\\rightarrow \\varepsilon \\)}</p>",
            "<b>D.</b> <p>{\\(S'\\rightarrow eS,S'\\rightarrow \\varepsilon \\)} and {\\(S'\\rightarrow \\varepsilon \\)}</p>"
          ],
          "correct_answer": "<b>D.</b> <p>{\\(S'\\rightarrow eS,S'\\rightarrow \\varepsilon \\)} and {\\(S'\\rightarrow \\varepsilon \\)}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/944/gate2003-56#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 154,
          "question": "<p>Which of the following statements is FALSE? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>In statically typed language, each variable in a program has a fixed type</p>",
            "<b>B.</b> <p>In un-typed languages, values do not have any types</p>",
            "<b>C.</b> <p>In dynamically typed languages, variables have no types</p>",
            "<b>D.</b> <p>In all statically typed languages, each variable in a program is associated\nwith values of only a single type during the execution of the program</p>"
          ],
          "correct_answer": "<b>C.</b> <p>In dynamically typed languages, variables have no types</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/914/gate2003-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 155,
          "question": "<p>In a bottom-up evaluation of a syntax directed definition, inherited attributes can <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>always be evaluated</p>",
            "<b>B.</b> <p>be evaluated if the definition is L-attributed</p>",
            "<b>C.</b> <p>be evaluated only if the definition has synthesized attributes</p>",
            "<b>D.</b> <p>never be evaluated</p>"
          ],
          "correct_answer": "<b>B.</b> <p>be evaluated if the definition is L-attributed</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/908/gate2003-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 156,
          "question": "<p>Assume that the SLR parser for a grammar G has n1 states and the LALR parser\nfor G has n2 states. The relationship between n1 and n2 is <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n1 is necessarily less than n2</p>",
            "<b>B.</b> <p>n1 is necessarily equal to n2</p>",
            "<b>C.</b> <p>n1 is necessarily greater than n2</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>n1 is necessarily equal to n2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/907/gate2003-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 157,
          "question": "<p>Dynamic linking can cause security concerns because <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Security is dynamic</p>",
            "<b>B.</b> <p>The path for searching dynamic libraries is not known till run time.</p>",
            "<b>C.</b> <p>Linking is insecure</p>",
            "<b>D.</b> <p>Cryptographic procedures are not available for dynamic linking</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The path for searching dynamic libraries is not known till run time.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/850/gate2002-2-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 158,
          "question": "<p>In the C language <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>At most one activation record exists between the current activation record\nand the activation record for the main.</p>",
            "<b>B.</b> <p>The number of activation records between the current activation record and\nthe activation record for the main depends on the actual function calling\nsequence.</p>",
            "<b>C.</b> <p>The visibility of global variables depends on the actual function calling\nsequence.</p>",
            "<b>D.</b> <p>Recursion requires the activation record for the recursive function to be\nsaved on a different stack before the recursive fraction can be called.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The number of activation records between the current activation record and\nthe activation record for the main depends on the actual function calling\nsequence.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/822/gate2002-1-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 159,
          "question": "<p>Given the following expression grammar:<br><br>\n\\(\\begin{array}{l} E \\to E * F \\mid F + E \\mid F \\\\ F \\to F - F \\mid id \\end{array}\\)<br><br>Which of the following is true? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>* has higher precedence than +</p>",
            "<b>B.</b> <p>- has higher precedence than *</p>",
            "<b>C.</b> <p>\\(+\\) and - have same precedence</p>",
            "<b>D.</b> <p>+ has higher precedence than *</p>"
          ],
          "correct_answer": "<b>B.</b> <p>- has higher precedence than *</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/668/gate2000-2-21-isro2015-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 160,
          "question": "<p>Which of the following derivations does a top-down parser use while parsing an input string? The input is scanned from left to right. <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Leftmost derivation</p>",
            "<b>B.</b> <p>Leftmost derivation traced out in reverse</p>",
            "<b>C.</b> <p>Rightmost derivation</p>",
            "<b>D.</b> <p>Rightmost derivation traced out in reverse</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Leftmost derivation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/642/gate2000-1-19-ugcnet-dec2013-ii-30\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 161,
          "question": "<p>The number of tokens in the following C statement is<br><pre><code> printf(\"i=%d, &amp;i=%x\", i, &amp;i);</code></pre> <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>26</p>",
            "<b>C.</b> <p>10</p>",
            "<b>D.</b> <p>21</p>"
          ],
          "correct_answer": "<b>C.</b> <p>10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/641/gate2000-1-18-isro2015-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 162,
          "question": "<p>A grammar that is both left and right recursive for a non-terminal, is <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Ambiguous</p>",
            "<b>B.</b> <p>Unambiguous</p>",
            "<b>C.</b> <p>Information is not sufficient to decide whether it is ambiguous or unambiguous</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Information is not sufficient to decide whether it is ambiguous or unambiguous</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1493/gate1999-2-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 163,
          "question": "<p>The number of tokens in the FORTRAN statement DO 10 I = 1.25 is <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1492/gate1999-2-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 164,
          "question": "<p>Which of the following is the most powerful parsing method? <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>LL (1)</p>",
            "<b>B.</b> <p>Canonical LR</p>",
            "<b>C.</b> <p>SLR</p>",
            "<b>D.</b> <p>LALR</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Canonical LR</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1470/gate1999-1-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 165,
          "question": "<p>The overlay tree for a program is as shown below:<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Compiler_Design\\q2.16_85b2e6fd.jpg\"><br>What will be the size of the partition (in physical memory) required to load (and run) this program? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>12 KB</p>",
            "<b>B.</b> <p>14 KB</p>",
            "<b>C.</b> <p>10 KB</p>",
            "<b>D.</b> <p>8 KB</p>"
          ],
          "correct_answer": "<b>B.</b> <p>14 KB</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1689/gate1998-2-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 166,
          "question": "<p>Faster access to non-local variables is achieved using an array of pointers to activation records called a <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>stack</p>",
            "<b>B.</b> <p>heap</p>",
            "<b>C.</b> <p>display</p>",
            "<b>D.</b> <p>activation tree</p>"
          ],
          "correct_answer": "<b>C.</b> <p>display</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1687/gate1998-2-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 167,
          "question": "<p>A linker reads four modules whose lengths are 200, 800, 600 and 500 words, respectively. If they are loaded in that order, what are the relocation constants? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(0, 200, 500, 600\\)</p>",
            "<b>B.</b> <p>\\(0, 200, 1000, 1600\\)</p>",
            "<b>C.</b> <p>\\(200, 500, 600, 800\\)</p>",
            "<b>D.</b> <p>\\(200, 700, 1300, 2100\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(0, 200, 1000, 1600\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1665/gate1998-1-28\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 168,
          "question": "<p>Type checking is normally done during <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>lexical analysis</p>",
            "<b>B.</b> <p>syntax analysis</p>",
            "<b>C.</b> <p>syntax directed translation</p>",
            "<b>D.</b> <p>code optimization</p>"
          ],
          "correct_answer": "<b>C.</b> <p>syntax directed translation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1664/gate1998-1-27\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 169,
          "question": "<p>Which of the following statements is true? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>SLR parser is more powerful than LALR</p>",
            "<b>B.</b> <p>LALR parser is more powerful than Canonical LR parser</p>",
            "<b>C.</b> <p>Canonical LR parser is more powerful than LALR parser</p>",
            "<b>D.</b> <p>The parsers SLR, Canonical CR, and LALR have the same power</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Canonical LR parser is more powerful than LALR parser</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1663/gate1998-1-26\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 170,
          "question": "<p>In a resident-OS computer, which of the following systems must reside in the main memory under all situations? <br><br><strong>(GATE CSE 1998)</strong></p>",
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
          "id": 171,
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
          "id": 172,
          "question": "<p>Heap allocation is required for languages. <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>that support recursion</p>",
            "<b>B.</b> <p>that support dynamic data structure</p>",
            "<b>C.</b> <p>that use dynamic scope rules</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>that support dynamic data structure</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2226/gate1997-1-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 173,
          "question": "<p>A language L allows declaration of arrays whose sizes are not known during compilation. It is required to make efficient use of memory. Which one of the following is true? <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A compiler using static memory allocation can be written for L</p>",
            "<b>B.</b> <p>A compiler cannot be written for L; an interpreter must be used</p>",
            "<b>C.</b> <p>A compiler using dynamic memory allocation can be written for L</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>A compiler using dynamic memory allocation can be written for L</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2224/gate1997-1-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 174,
          "question": "<p>In the following grammar<br>\n\\(\\begin{aligned} X &amp;::= X \\oplus Y \\mid Y \\\\ Y&amp;::= Z * Y \\mid Z\\\\ Z&amp;::= id \\end{aligned}\\)<br>\nWhich of the following is true? <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>'\\(\\oplus\\)' is left associative while '*' is right associative</p>",
            "<b>B.</b> <p>Both '\\(\\oplus\\)' and '*' are left associative</p>",
            "<b>C.</b> <p>'\\(\\oplus\\)' is right associative while '*' is left associative</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>'\\(\\oplus\\)' is left associative while '*' is right associative</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2222/gate1997-1-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 175,
          "question": "<p>The correct matching for the following pairs is<br><br> \\(\\begin{array}{ll|ll} \\text{(A)}&amp;\\text{Activation record} &amp; \\text{(1)} &amp;\\text{Linking loader} \\\\ \\text{(B)} &amp;\\text{Location counter} &amp; \\text{(2)} &amp;\\text{Garbage collection} \\\\ \\text{(C)}&amp; \\text{Reference counts} &amp; \\text{(3)} &amp;\\text{Subroutine call} \\\\ \\text{(D)}&amp; \\text{Address relocation} &amp; \\text{(4)}&amp; \\text{Assembler} \\\\ \\end{array}\\) <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A-3 B-4 C-1 D-2</p>",
            "<b>B.</b> <p>A-4 B-3 C-1 D-2</p>",
            "<b>C.</b> <p>A-4 B-3 C-2 D-1</p>",
            "<b>D.</b> <p>A-3 B-4 C-2 D-1</p>"
          ],
          "correct_answer": "<b>D.</b> <p>A-3 B-4 C-2 D-1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2746/gate1996-2-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 176,
          "question": "<p>The grammar whose productions are<br>\n\\(\\langle\\text{stmt}\\rangle \\to\\text{ if id then } \\langle\\text{stmt}\\rangle\\)<br>\n\\(\\langle\\text{stmt}\\rangle\\to\\text{ if id then } \\langle\\text{stmt}\\rangle\\text{ else } \\langle \\text{stmt}\\rangle\\)<br>\n\\(\\langle\\text{stmt}\\rangle \\to\\text{ id }:=\\text{ id}\\)<br>\nis ambiguous because <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the sentence<br>\\(\\text{\nif a then if b then c:= d } \\)<br>\nhas more than two parse trees</p>",
            "<b>B.</b> <p>the left most and right most derivations of the sentence<br>\\(\\text{\nif a then if b then c:= d } \\)<br>\ngive rise to different parse trees</p>",
            "<b>C.</b> <p>the sentence <br>\\(\\text{\nif a then if b then c:= d else c:= f} \\)<br>\nhas more than two parse trees</p>",
            "<b>D.</b> <p>the sentence<br>\\(\\text{\nif a then if b then c:= d else c:= f} \\)<br>\nhas two parse trees</p>"
          ],
          "correct_answer": "<b>D.</b> <p>the sentence<br>\\(\\text{\nif a then if b then c:= d else c:= f} \\)<br>\nhas two parse trees</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2739/gate1996-2-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 177,
          "question": "<p>The pass numbers for each of the following activities<br>\ni.   object code generation<br>\nii.  literals added to literal table<br>\niii. listing printed<br>\niv.  address resolution of local symbols that occur in a two pass assembler<br>\nrespectively are <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1, 2, 1, 2</p>",
            "<b>B.</b> <p>2, 1, 2, 1</p>",
            "<b>C.</b> <p>2, 1, 1, 2</p>",
            "<b>D.</b> <p>1, 2, 2, 2</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2, 1, 2, 1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2721/gate1996-1-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 178,
          "question": "<p>A shift reduce parser carries out the actions specified within braces immediately after reducing with the corresponding rule of grammar <br>\n\\(S \\rightarrow xxW \\;\\text{{print \"1\"}}\\)<br>\n\\(S \\rightarrow y \\;\\text{{print \"2\"}}\\)<br>\n\\(W \\rightarrow Sz\\; \\text{{print \"3\"}}\\)<br>\nWhat is the translation of \\(xxxxyzz\\) using the syntax directed translation scheme described by the above rules? <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>23131</p>",
            "<b>B.</b> <p>11233</p>",
            "<b>C.</b> <p>11231</p>",
            "<b>D.</b> <p>33211</p>"
          ],
          "correct_answer": "<b>A.</b> <p>23131</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2622/gate1995-2-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 179,
          "question": "<p>A linker is given object modules for a set of programs that were compiled separately. What information need to be included in an object module? <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Object code</p>",
            "<b>B.</b> <p>Relocation bits</p>",
            "<b>C.</b> <p>Names and locations of all external symbols defined in the object module</p>",
            "<b>D.</b> <p>Absolute addresses of internal symbols</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Names and locations of all external symbols defined in the object module</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2601/gate1995-1-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 180,
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
          "id": 181,
          "question": "<p>A part of the system software which under all circumstances must reside in the main memory is: <br><br><strong>(GATE CSE 1993)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>text editor</p>",
            "<b>B.</b> <p>assembler</p>",
            "<b>C.</b> <p>linker</p>",
            "<b>D.</b> <p>loader</p>",
            "<b>E.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>loader</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2295/gate1993-7-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 182,
          "question": "<p>A simple two-pass assembler does the following in the first pass: <br><br><strong>(GATE CSE 1993)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It allocates space for the literals.</p>",
            "<b>B.</b> <p>It computes the total length of the program.</p>",
            "<b>C.</b> <p>It builds the symbol table for the symbols and their values.</p>",
            "<b>D.</b> <p>It generates code for all the load and store register instructions.</p>",
            "<b>E.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>It allocates space for the literals.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2294/gate1993-7-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 183,
          "question": "<p>Which of the following statements is false ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An unambiguous grammar has same left most and right most derivation</p>",
            "<b>B.</b> <p>An LL(1) parser is a top-down parser</p>",
            "<b>C.</b> <p>LALR is more powerful than SLR</p>",
            "<b>D.</b> <p>An ambiguous grammar can never be LR(K) for any k</p>"
          ],
          "correct_answer": "<b>A.</b> <p>An unambiguous grammar has same left most and right most derivation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/711/gate2001-1-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 184,
          "question": "<p>The process of assigning load addresses to the various parts of the program and\nadjusting the code and date in the program to reflect the assigned addresses is\ncalled <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Assembly</p>",
            "<b>B.</b> <p>Parsing</p>",
            "<b>C.</b> <p>Relocation</p>",
            "<b>D.</b> <p>Symbol resolution</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Relocation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/710/gate2001-1-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 185,
          "question": "<p>Choose the correct alternatives (more than one may be correct ) and write the corresponding letters only:<br>Consider the SLR(1) and LALR(1)  parsing tables for a context free grammar. Which of the following statement is/are true? <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The goto part of both tables may be different.</p>",
            "<b>B.</b> <p>The shift entries are identical in both the tables.</p>",
            "<b>C.</b> <p>The reduce entries in the tables may be different.</p>",
            "<b>D.</b> <p>The error entries in tables may be different</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The shift entries are identical in both the tables.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/571/gate1992-02-xiv\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 186,
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
          "id": 187,
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
        },
        {
          "id": 188,
          "question": "<p>Choose the correct alternatives (more than one may be correct ) and write the corresponding letters only<br>A \"link editor\" is a program that: <br><br><strong>(GATE CSE 1991)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>matches the parameters of the macro-definition with locations of the parameters of the macro call</p>",
            "<b>B.</b> <p>matches external names of one program with their location in other programs</p>",
            "<b>C.</b> <p>matches the parameters of subroutine definition with the location of parameters of subroutine call.</p>",
            "<b>D.</b> <p>acts as a link between text editor and the user</p>",
            "<b>E.</b> <p>acts as a link between compiler and the user program</p>"
          ],
          "correct_answer": "<b>B.</b> <p>matches external names of one program with their location in other programs</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/519/gate1991-03-ix\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 189,
          "question": "<p>In a compiler the module that checks every character of the source text is called: <br><br><strong>(GATE CSE 1988)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The code generator.</p>",
            "<b>B.</b> <p>The code optimiser.</p>",
            "<b>C.</b> <p>The lexical analyser.</p>",
            "<b>D.</b> <p>The syntax analyser.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The lexical analyser.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80282/gate1987-1-xi\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 190,
          "question": "<p>An operator precedence parser is a <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Bottom-up parser.</p>",
            "<b>B.</b> <p>Top-down parser.</p>",
            "<b>C.</b> <p>Back tracking parser.</p>",
            "<b>D.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Bottom-up parser.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80295/gate1987-1-xiv\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 191,
          "question": "<p>In a compiler the module that checks every character of the source text is called: <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The code generator.</p>",
            "<b>B.</b> <p>The code optimiser.</p>",
            "<b>C.</b> <p>The lexical analyser.</p>",
            "<b>D.</b> <p>The syntax analyser.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The lexical analyser.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80282/gate1987-1-xi\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
