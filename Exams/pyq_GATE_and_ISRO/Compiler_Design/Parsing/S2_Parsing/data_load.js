window.__examLoadCallback({
  "title": "Parsing - Parsing - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "Parsing",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
          "question": "<p>Consider the following grammar:<br><br>\nstmt\\(\\rightarrow\\) if expr then expr else expr; stmt| \\(\\dot{O}\\)<br>\nexpr\\(\\rightarrow\\)term relop term|term<br>\nterm\\(\\rightarrow\\) id|number <br>\nif\\(\\rightarrow\\)a|b|c <br>\nnumber\\(\\rightarrow\\) [0-9] <br><br>\nwhere <b>relop</b> is a relational operate (e.g \\(\\lt ,\\gt\\),...), \\(\\dot{O}\\) refers to the empty statement, and if\n,then, else are terminals. <br><br>\nConsider a program P following the above grammar containing ten if terminals. The number\nof control flows paths in P is ____________. For example the program <br><br>\nif \\(e_1\\) then \\(e_2\\) else \\(e_3\\)<br><br>\nhas 2 controls flow paths  \\(e_{1} \\rightarrow e_{2}\\) and  \\(e_{1} \\rightarrow e_{3}\\). <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1024",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118326/gate2017-1-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
