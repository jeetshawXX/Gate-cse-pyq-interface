window.__examLoadCallback({
  "title": "Parsing - Parsing - Slot 1",
  "duration": 42,
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
          "question": "<p>Consider the following  grammar. <br><br>\\(S\\rightarrow aSB|d\\) <br> \\(B\\rightarrow b\\)<br><br> The number of reduction steps taken by a bottom-up parser while accepting the string \\(aaadbbb\\) is___________. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333207/gate2020-cs-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the augmented grammar given below: <br>\\(S'\\rightarrow S\\) <br>\\(S \\rightarrow \\lt L \\gt |id\\) <br>\\(L \\rightarrow L,S|S\\) <br><br>Let \\(I_0=CLOSURE(\\{[S'\\rightarrow \\cdot S]\\}) \\). The number of items in the set \\(GOTO(I_0,\\lt)\\) is __________. <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302805/gate2019-cs-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the following given grammar:<pre><code> \nS -&gt; Aa\nA -&gt; BD\nB -&gt; b| ε\nD -&gt; d| ε </code></pre> Let a, b, d and $ be indexed as follows:   <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Parsing\\q19_b9df82b8.jpg\"><br>Compute the FOLLOW set of the non-terminal B and write the index values for the symbols in the FOLLOW set in the descending order. (For example, if the FOLLOW set is {a, b, d, $}, then the answer should be 3210). <br> Answer:_____ <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "31",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302829/gate2019-cs-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
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
          "id": 14,
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
          "id": 15,
          "question": "<p>Consider the following grammar:<br><br>\nstmt\\(\\rightarrow\\) if expr then expr else expr; stmt| \\(\\dot{O}\\)<br>\nexpr\\(\\rightarrow\\)term relop term|term<br>\nterm\\(\\rightarrow\\) id|number <br>\nif\\(\\rightarrow\\)a|b|c <br>\nnumber\\(\\rightarrow\\) [0-9] <br><br>\nwhere <b>relop</b> is a relational operate (e.g \\(\\lt ,\\gt\\),...), \\(\\dot{O}\\) refers to the empty statement, and if\n,then, else are terminals. <br><br>\nConsider a program P following the above grammar containing ten if terminals. The number\nof control flows paths in P is ____________. For example the program <br><br>\nif \\(e_1\\) then \\(e_2\\) else \\(e_3\\)<br><br>\nhas 2 controls flow paths  \\(e_{1} \\rightarrow e_{2}\\) and  \\(e_{1} \\rightarrow e_{3}\\). <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1024",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118326/gate2017-1-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
