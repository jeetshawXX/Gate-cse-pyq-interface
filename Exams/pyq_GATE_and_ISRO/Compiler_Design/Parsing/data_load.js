window.__examLoadCallback({
  "title": "Compiler_Design - Parsing",
  "duration": 230,
  "sections": [
    {
      "name": "Parsing",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
          "question": "<p>Consider the following grammar along with translation rules.<br>\\( \\begin{aligned}\n&amp;S \\rightarrow S_1  \\# T &amp; &amp; \\{S._{val}=S_{1.val}*T._{val} \\} \\\\\n&amp;S \\rightarrow T &amp; &amp; \\{S._{val}=T._{val} \\} \\\\\n&amp;T \\rightarrow T_1  \\% R &amp; &amp; \\{T._{val}=T_{1.val}  \\div R._{val} \\} \\\\\n&amp;T \\rightarrow R &amp; &amp; \\{T._{val}=R._{val} \\} \\\\\n&amp;R \\rightarrow id &amp; &amp; \\{R._{val}=id._{val} \\} \\\\\n\\end{aligned}\\)<br>Here \\( \\#\\) and \\( \\%\\) are operators and \\(id\\) is a token that represents an integer and \\(id_{.val}\\) represents the corresponding integer value. The set of non-terminals is \\( \\{S,T,R,P \\}\\) and a subscripted non-terminal indicates an instance of the non-terminal.\n<br>Using this translation scheme, the computed value of \\(S_{.val}\\) for root of the parse tree for the expression \\(20  \\# 10  \\% 5  \\# 8 \\% 2  \\% 2\\) is <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "80",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371881/Gate-cse-2022-question-55#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the augmented grammar with \\( \\{+, *, (, ), id  \\}\\) as the set of terminals.\n<br>\n\\( \\begin{aligned}&amp;S' \\rightarrow S  \\\\ &amp;S \\rightarrow S+R|R  \\\\ &amp;R \\rightarrow R*P|P \\\\ &amp;P \\rightarrow (S)|id \\end{aligned}\\)<br>If \\(I_0\\) is the set of two \\(LR(0)\\) items \\( \\{ [S' \\rightarrow S.], [S \\rightarrow S.+R]  \\}\\), then \\(goto(closure(I_0 ),+)\\) contains exactly ______ items. <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371917/Gate-cse-2022-question-19#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
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
          "id": 7,
          "question": "<p>Consider the following augmented grammar with \\(\\{ \\#, @, &lt;, &gt;, a, b, c \\}\\) as the set of terminals.<br><br>\n\\(\\begin{array}{l} S' \\rightarrow S \\\\ S \\rightarrow S \\# cS \\\\ S \\rightarrow SS \\\\ S \\rightarrow S @ \\\\ S \\rightarrow &lt; S &gt; \\\\ S \\rightarrow a \\\\ S \\rightarrow b \\\\ S \\rightarrow c \\end{array}\\)<br><br>\nLet \\(I_0 = \\text{CLOSURE}(\\{S' \\rightarrow \\bullet S\\})\\). The number of items in the set \\(\\text{GOTO(GOTO}(I_0 \\lt ), \\lt )\\) is ___________ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "8",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357486/gate-cse-2021-set-2-question-51#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the following C code segment:<br><br>a = b + c;<br>\ne = a + 1;\n<br>\nd = b + c;\n<br>\nf = d + 1;\n<br>\ng = e + f;<br><br>In a compiler, this code segment is represented internally as a directed acyclic graph (DAG). The number of nodes in the DAG is  _____________ <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357401/gate-cse-2021-set-1-question-50#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
          "id": 13,
          "question": "<p>Consider the following  grammar. <br><br>\\(S\\rightarrow aSB|d\\) <br> \\(B\\rightarrow b\\)<br><br> The number of reduction steps taken by a bottom-up parser while accepting the string \\(aaadbbb\\) is___________. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333207/gate2020-cs-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the augmented grammar given below: <br>\\(S'\\rightarrow S\\) <br>\\(S \\rightarrow \\lt L \\gt |id\\) <br>\\(L \\rightarrow L,S|S\\) <br><br>Let \\(I_0=CLOSURE(\\{[S'\\rightarrow \\cdot S]\\}) \\). The number of items in the set \\(GOTO(I_0,\\lt)\\) is __________. <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302805/gate2019-cs-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the following given grammar:<pre><code> \nS -&gt; Aa\nA -&gt; BD\nB -&gt; b| ε\nD -&gt; d| ε </code></pre> Let a, b, d and $ be indexed as follows:   <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Parsing\\q19_b9df82b8.jpg\"><br>Compute the FOLLOW set of the non-terminal B and write the index values for the symbols in the FOLLOW set in the descending order. (For example, if the FOLLOW set is {a, b, d, $}, then the answer should be 3210). <br> Answer:_____ <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "31",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302829/gate2019-cs-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
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
          "id": 17,
          "question": "<p>C onsider the following parse tree for the expression a#b$c$d#e#f, involving two binary operators $ and #. <br> <img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Parsing\\q38_52f1a2a9.jpg\"> <br>  Which one of the following is correct for the given parse tree? <br><br><strong>(GATE CSE 2018)</strong></p>",
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
          "id": 18,
          "question": "<p>Consider the following grammar:<br><br>\nstmt\\(\\rightarrow\\) if expr then expr else expr; stmt| \\(\\dot{O}\\)<br>\nexpr\\(\\rightarrow\\)term relop term|term<br>\nterm\\(\\rightarrow\\) id|number <br>\nif\\(\\rightarrow\\)a|b|c <br>\nnumber\\(\\rightarrow\\) [0-9] <br><br>\nwhere <b>relop</b> is a relational operate (e.g \\(\\lt ,\\gt\\),...), \\(\\dot{O}\\) refers to the empty statement, and if\n,then, else are terminals. <br><br>\nConsider a program P following the above grammar containing ten if terminals. The number\nof control flows paths in P is ____________. For example the program <br><br>\nif \\(e_1\\) then \\(e_2\\) else \\(e_3\\)<br><br>\nhas 2 controls flow paths  \\(e_{1} \\rightarrow e_{2}\\) and  \\(e_{1} \\rightarrow e_{3}\\). <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1024",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118326/gate2017-1-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
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
          "id": 20,
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
          "id": 21,
          "question": "<p>A student wrote two context-free grammars G1 and G2 for generating a single C-like array declaration. The dimension of the array is at least one. For example, <br>\nint a[10][3]; <br>\nThe grammars use D as the start symbol,and use six terminal symbols <b>int ;id[]num.</b> <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Parsing\\q46_7b18643f.jpg\"> <br>\nWhich of the grammars correctly generate the declaration mentioned above? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
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
          "id": 22,
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
          "id": 23,
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
          "id": 24,
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
          "id": 25,
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
          "id": 26,
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
          "id": 27,
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
          "id": 28,
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
          "id": 29,
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
          "id": 30,
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
          "id": 31,
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
          "id": 32,
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
          "id": 33,
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
          "id": 34,
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
          "id": 35,
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
          "id": 36,
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
          "id": 37,
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
          "id": 38,
          "question": "<p>For the grammar below, a partial LL(1) parsing table is also presented along with the grammar. Entries that\nneed to be filled are indicated as E1, E2, and E3. \\(\\varepsilon\\) is the empty string, $ indicates end of input, and, | separates alternate right hand sides of productions.<br>\\(S\\rightarrow aAbB|bAaB|\\varepsilon\\)<br>  \\(A\\rightarrow S\\) <br>\\(B\\rightarrow S\\)  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Parsing\\q52_d25c144f.jpg\"> <br>The appropriate entries for E1, E2, and E3 are <br><br><strong>(GATE CSE 2012)</strong></p>",
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
          "id": 39,
          "question": "<p>For the grammar below, a partial LL(1) parsing table is also presented along with the grammar. Entries that\nneed to be filled are indicated as E1, E2, and E3. \\(\\varepsilon\\) is the empty string, $ indicates end of input, and, | separates alternate right hand sides of productions.<br>\\(S\\rightarrow aAbB|bAaB|\\varepsilon\\)<br>  \\(A\\rightarrow S\\) <br>\\(B\\rightarrow S\\)  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Parsing\\q52_d25c144f.jpg\"> <br>The FIRST and FOLLOW sets for the non-terminals A and B are <br><br><strong>(GATE CSE 2012)</strong></p>",
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
          "id": 40,
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
          "id": 41,
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
          "id": 42,
          "question": "<p>Consider two binary operators  '\\(\\uparrow\\)\n'and '\\(\\downarrow\\)' with the precedence of operator \\(\\downarrow\\)\nbeing lower than that of the operator \\(\\uparrow\\) . Operator \\(\\uparrow\\) is right associative while\noperator \\(\\downarrow\\) is left associative. Which one of the following represents the parse\ntree for expression (7 \\(\\downarrow\\) 3 \\(\\uparrow\\)4 \\(\\uparrow\\) 3 \\(\\downarrow\\)2)? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Parsing\\q37_199e567a.jpg\"> <br><br><strong>(GATE CSE 2011)</strong></p>",
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
          "id": 43,
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
          "id": 44,
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
          "id": 45,
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
          "id": 46,
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
          "id": 47,
          "question": "<p>Match the following: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Parsing\\q51_b2e86863.jpg\"> <br><br><strong>(GATE CSE 2008)</strong></p>",
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
          "id": 48,
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
          "id": 49,
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
          "id": 50,
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
          "id": 51,
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
          "id": 52,
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
          "id": 53,
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
          "id": 54,
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
          "id": 55,
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
          "id": 56,
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
          "id": 57,
          "question": "<p>Which one of the following grammars generates the language <br> \\(L=\\{a^{i}b^{j}|i\\neq j\\}\\) <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Parsing\\q84_2026e286.jpg\"> <br><br><strong>(GATE CSE 2006)</strong></p>",
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
          "id": 58,
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
          "id": 59,
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
          "id": 60,
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
          "id": 61,
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
          "id": 62,
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
          "id": 63,
          "question": "<p>Consider the following expression grammar. The semantic rules for expression calculation are stated next to each grammar production.<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Parsing\\q84_bef15a5a.jpg\"> <br>  Assume the conflicts of this question are resolved usinf yacc tool and an LALR(1) parser is generated for parsing arithmetic expressions as per the given grammar. Consider an expression 3 x 2 + 1. What precedence and associativity properties does the generated parser realize? <br><br><strong>(GATE CSE 2005)</strong></p>",
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
          "id": 64,
          "question": "<p>Consider the following expression grammar. The semantic rules for expression calculation are stated next to each grammar production.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Parsing\\q84_bef15a5a.jpg\"> <br> The above grammar and the semantic rules are fed to a yacc tool (which is an LALR (1) parser generator) for parsing and evaluating arithmetic expressions. Which one of the following is true about the action of yacc for the given grammar? <br><br><strong>(GATE CSE 2005)</strong></p>",
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
          "id": 65,
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
          "id": 66,
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
          "id": 67,
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
          "id": 68,
          "question": "<p>Consider the grammar with the following translation rules and E as the start symbol.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Parsing\\q45_57f67ac9.jpg\"><br>\nCompute E.value for the root of the parse tree for the expression:2 # 3 &amp; 5 # 6 &amp; 4. <br><br><strong>(GATE CSE 2004)</strong></p>",
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
          "id": 69,
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
          "id": 70,
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
          "id": 71,
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
          "id": 72,
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
          "id": 73,
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
          "id": 74,
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
          "id": 75,
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
          "id": 76,
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
          "id": 77,
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
          "id": 78,
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
          "id": 79,
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
          "id": 80,
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
          "id": 81,
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
          "id": 82,
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
          "id": 83,
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
        }
      ]
    }
  ]
});
