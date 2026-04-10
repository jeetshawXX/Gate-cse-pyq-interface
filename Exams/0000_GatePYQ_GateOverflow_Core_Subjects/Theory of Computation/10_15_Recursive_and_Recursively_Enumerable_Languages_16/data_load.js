window.__examLoadCallback({
  "title": "Theory of Computation - Recursive and Recursively Enumerable Languages",
  "duration": 44,
  "sections": [
    {
      "name": "Recursive and Recursively Enumerable Languages",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"84833\"></a><div itemprop=\"text\"><p>Recursive languages are:</p>\n\n</div><br><br><b>GATE CSE 1990 | Question: 3-vi</b></p>",
          "type": "multiple",
          "options": [
            "<p>A proper superset of context free languages.</p>",
            "<p>Always recognizable by pushdown automata.</p>",
            "<p>Also called type \\( 0 \\) languages.</p>",
            "<p>Recognizable by Turing machines.</p>"
          ],
          "correct_answer": [
            "<p>A proper superset of context free languages.</p>",
            "<p>Recognizable by Turing machines.</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/84833/gate-cse-1990-question-3-vi\" target=\"_blank\">https://gateoverflow.in/84833/gate-cse-1990-question-3-vi</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"904\"></a><div itemprop=\"text\"><p>Nobody knows yet if \\( P=NP \\). Consider the language \\( L \\) defined as follows.\\[ L = \\begin{cases} (0+1)^* &amp; \\text{ if } P = NP \\\\ \\phi &amp; otherwise \\end{cases}  \\]Which of the following statements is true?</p>\n\n</div><br><br><b>GATE CSE 2003 | Question: 13</b></p>",
          "type": "single",
          "options": [
            "<p>\\( L \\) is recursive</p>",
            "<p>\\( L \\) is recursively enumerable but not recursive</p>",
            "<p>\\( L \\) is not recursively enumerable</p>",
            "<p>Whether \\( L \\) is recursively enumerable or not will be known after we find out if \\( P=NP \\)</p>"
          ],
          "correct_answer": "<p>\\( L \\) is recursive</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/904/gate-cse-2003-question-13\" target=\"_blank\">https://gateoverflow.in/904/gate-cse-2003-question-13</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"120\"></a><div itemprop=\"text\"><p>If the strings of a language \\( L \\) can be effectively enumerated in lexicographic (i.e., alphabetic) order, which of the following statements is true?</p>\n\n</div><br><br><b>GATE CSE 2003 | Question: 15</b></p>",
          "type": "single",
          "options": [
            "<p>\\( L \\) is necessarily finite</p>",
            "<p>\\( L \\) is regular but not necessarily finite</p>",
            "<p>\\( L \\) is context free but not necessarily regular</p>",
            "<p>\\( L \\) is recursive but not necessarily context-free</p>"
          ],
          "correct_answer": "<p>\\( L \\) is recursive but not necessarily context-free</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/120/gate-cse-2003-question-15\" target=\"_blank\">https://gateoverflow.in/120/gate-cse-2003-question-15</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"355\"></a><div itemprop=\"text\"><p>Define languages \\( L_0 \\) and \\( L_1 \\) as follows :</p><ul><li>\\( L_0 = \\{\\langle M, w, 0 \\rangle \\mid M \\text{ halts on }w\\}  \\)</li><li>\\( L_1 = \\{\\langle M, w, 1 \\rangle \\mid M \\text{ does not halts on }w\\} \\)</li></ul><p>Here \\( \\langle M, w, i \\rangle \\) is a triplet, whose first component \\( M \\) is an encoding of a Turing<br>Machine, second component \\(  w \\) is a string, and third component \\( i \\) &nbsp;is a bit.<br><br>Let \\( L = L_0 \\cup L_1 \\). Which of the following is true?</p></div><br><br><b>GATE CSE 2003 | Question: 54</b></p>",
          "type": "single",
          "options": [
            "<p>\\( L \\) is recursively enumerable, but \\( L' \\) is not</p>",
            "<p>\\( L' \\) is recursively enumerable, but \\(  L \\) is not</p>",
            "<p>Both \\( L \\) and \\( L' \\) are recursive &nbsp;</p>",
            "<p>Neither \\( L \\) nor \\( L' \\) is recursively enumerable</p>"
          ],
          "correct_answer": "<p>Neither \\( L \\) nor \\( L' \\) is recursively enumerable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/355/gate-cse-2003-question-54\" target=\"_blank\">https://gateoverflow.in/355/gate-cse-2003-question-54</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"1083\"></a><div itemprop=\"text\"><p>\\( L_1 \\) is a recursively enumerable language over \\( \\Sigma \\). An algorithm \\( A \\) effectively enumerates its words as \\( \\omega_1, \\omega_2, \\omega_3, \\dots . \\)&nbsp;Define another language \\( L_2 \\) over \\( \\Sigma \\cup \\left\\{\\text{#}\\right\\} \\) as \\( \\left\\{w_i&nbsp;\\text{#} w_j&nbsp;\\mid w_i,&nbsp;w_j \\in L_1, i &lt; j \\right\\} \\). Here # is new symbol. Consider the following assertions.</p><ul><li>\\( S_1:L_1 \\) is recursive implies \\( L_2 \\) is recursive</li><li>\\( S_2:L_2 \\) is recursive implies \\( L_1 \\) is recursive</li></ul><p>Which of the following statements is true?</p></div><br><br><b>GATE CSE 2004 | Question: 89</b></p>",
          "type": "single",
          "options": [
            "<p>Both \\( S_1 \\) and \\( S_2 \\) are true</p>",
            "<p>\\( S_1 \\) is true but \\( S_2 \\) is not necessarily true</p>",
            "<p>\\( S_2 \\) is true but \\( S_1 \\) is not necessarily true</p>",
            "<p>Neither is necessarily true</p>"
          ],
          "correct_answer": "<p>Both \\( S_1 \\) and \\( S_2 \\) are true</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1083/gate-cse-2004-question-89\" target=\"_blank\">https://gateoverflow.in/1083/gate-cse-2004-question-89</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"1379\"></a><div itemprop=\"text\"><p>Let \\( L_1 \\)&nbsp;be a recursive language, and let \\( L_2 \\) be a recursively enumerable but not a recursive language. Which one of the following is TRUE?</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 56</b></p>",
          "type": "single",
          "options": [
            "<p>\\( L_1 \\)'&nbsp;is recursive and \\( L_2 \\)' is recursively enumerable</p>",
            "<p>\\( L_1 \\)' is recursive and \\( L_2 \\)' is not recursively enumerable</p>",
            "<p>\\( L_1 \\)' and \\( L_2 \\)' are recursively enumerable</p>",
            "<p>\\( L_1 \\)' is recursively enumerable and \\( L_2 \\)' is recursive</p>"
          ],
          "correct_answer": "<p>\\( L_1 \\)' is recursive and \\( L_2 \\)' is not recursively enumerable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1379/gate-cse-2005-question-56\" target=\"_blank\">https://gateoverflow.in/1379/gate-cse-2005-question-56</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"411\"></a><div itemprop=\"text\"><p>If \\( L \\) and \\( \\overline{L} \\)&nbsp;are recursively enumerable then \\( L \\) is</p>\n\n</div><br><br><b>GATE CSE 2008 | Question: 13,  ISRO2016-36</b></p>",
          "type": "single",
          "options": [
            "<p>regular</p>",
            "<p>context-free</p>",
            "<p>context-sensitive</p>",
            "<p>recursive</p>"
          ],
          "correct_answer": "<p>recursive</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/411/gate-cse-2008-question-13-isro2016-36\" target=\"_blank\">https://gateoverflow.in/411/gate-cse-2008-question-13-isro2016-36</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"461\"></a><div itemprop=\"text\"><p>Which of the following statements is false?</p>\n\n</div><br><br><b>GATE CSE 2008 | Question: 48</b></p>",
          "type": "single",
          "options": [
            "<p>Every NFA can be converted to an equivalent DFA</p>",
            "<p>Every non-deterministic Turing machine can be converted to an equivalent deterministic Turing machine</p>",
            "<p>Every regular language is also a context-free language</p>",
            "<p>Every subset of a recursively enumerable set is recursive</p>"
          ],
          "correct_answer": "<p>Every subset of a recursively enumerable set is recursive</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/461/gate-cse-2008-question-48\" target=\"_blank\">https://gateoverflow.in/461/gate-cse-2008-question-48</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"2190\"></a><div itemprop=\"text\"><p>Let \\( L_1 \\) be the recursive language. Let \\( L_2 \\) and \\( L_3 \\) be languages that are recursively enumerable but not recursive. Which of the following statements is not necessarily true?</p>\n\n</div><br><br><b>GATE CSE 2010 | Question: 17</b></p>",
          "type": "single",
          "options": [
            "<p>\\( L_2 - L_1 \\:\\text{is recursively enumerable.} \\)</p>",
            "<p>\\( L_1 - L_3 \\:\\text{is recursively enumerable.} \\)</p>",
            "<p>\\( L_2 \\cap L_3 \\:\\text{is recursively enumerable.} \\)</p>",
            "<p>\\( L_2 \\cup L_3 \\:\\text{is recursively enumerable.} \\)</p>"
          ],
          "correct_answer": "<p>\\( L_1 - L_3 \\:\\text{is recursively enumerable.} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2190/gate-cse-2010-question-17\" target=\"_blank\">https://gateoverflow.in/2190/gate-cse-2010-question-17</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"1810\"></a><div itemprop=\"text\"><p>Let \\( L \\) be a language and \\( \\bar{L} \\) be its complement. Which one of the following is&nbsp;<strong>NOT&nbsp;</strong>a viable possibility?</p>\n\n</div><br><br><b>GATE CSE 2014 Set 1 | Question: 35</b></p>",
          "type": "single",
          "options": [
            "<p>Neither \\( L \\) nor &nbsp;\\( \\bar{L} \\) is recursively enumerable \\( (r.e.) \\).&nbsp;</p>",
            "<p>One of \\( L \\) and \\( \\bar{L} \\) is r.e. but not recursive; the other is not r.e.</p>",
            "<p>Both \\( L \\) and \\( \\bar{L} \\) are r.e. but not recursive.</p>",
            "<p>Both \\( L \\) and \\( \\bar{L} \\) are recursive.</p>"
          ],
          "correct_answer": "<p>Both \\( L \\) and \\( \\bar{L} \\) are r.e. but not recursive.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1810/gate-cse-2014-set-1-question-35\" target=\"_blank\">https://gateoverflow.in/1810/gate-cse-2014-set-1-question-35</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"1972\"></a><div itemprop=\"text\"><p>Let \\( A\\:\\leq_m\\:B \\) denotes that language \\( A \\) is mapping reducible (also known as many-to-one reducible) to language \\( B \\). Which one of the following is FALSE?</p>\n\n</div><br><br><b>GATE CSE 2014 Set 2 | Question: 16</b></p>",
          "type": "single",
          "options": [
            "<p>If \\( A\\: \\leq_m B \\)&nbsp;and \\( B \\) is recursive then \\( A \\) is recursive.</p>",
            "<p>If \\( A\\: \\leq_m B \\)&nbsp;and \\( A \\) is undecidable then \\( B \\) is undecidable.</p>",
            "<p>If \\( A\\: \\leq_m B \\) and \\( B \\) is recursively enumerable then \\( A \\) is recursively enumerable.</p>",
            "<p>If \\( A\\: \\leq_m B \\)&nbsp;and \\( B \\) is not recursively enumerable then \\( A \\) is not recursively enumerable.</p>"
          ],
          "correct_answer": "<p>If \\( A\\: \\leq_m B \\)&nbsp;and \\( B \\) is not recursively enumerable then \\( A \\) is not recursively enumerable.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1972/gate-cse-2014-set-2-question-16\" target=\"_blank\">https://gateoverflow.in/1972/gate-cse-2014-set-2-question-16</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"1994\"></a><div itemprop=\"text\"><p>Let \\( \\langle M \\rangle \\) be the encoding of a Turing machine as a string over \\( \\Sigma=\\left\\{0,1\\right\\} \\). Let \\[ L=\\left\\{\\langle M \\rangle \\mid M \\text{ is a Turing machine}\\\\\\text{ that accepts a string of length 2014} \\right\\}. \\] Then \\( L \\) is:</p></div><br><br><b>GATE CSE 2014 Set 2 | Question: 35</b></p>",
          "type": "single",
          "options": [
            "<p>decidable and recursively enumerable</p>",
            "<p>undecidable but recursively enumerable</p>",
            "<p>undecidable and not recursively enumerable</p>",
            "<p>decidable but not recursively enumerable</p>"
          ],
          "correct_answer": "<p>undecidable but recursively enumerable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1994/gate-cse-2014-set-2-question-35\" target=\"_blank\">https://gateoverflow.in/1994/gate-cse-2014-set-2-question-35</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"8019\"></a><div itemprop=\"text\"><p>For any two languages \\( L_{1} \\) and \\( L_{2} \\) such that \\( L_{1} \\) is context-free and \\( L_{2} \\) is recursively enumerable but not recursive, which of the following is/are necessarily true?</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>\\( \\bar{L}_{1} \\) ( Complement of \\( L_{1} \\)) is recursive</li>\n\t<li>\\( \\bar{L}_{2} \\) ( Complement of \\( L_{2} \\)) is recursive</li>\n\t<li>\\( \\bar{L}_{1} \\) is context-free</li>\n\t<li>\\( \\bar{L}_{1} \\)&nbsp;∪ \\( L_{2} \\) is recursively enumerable</li>\n</ol>\n\n</div><br><br><b>GATE CSE 2015 Set 1 | Question: 3</b></p>",
          "type": "single",
          "options": [
            "<p>I only</p>",
            "<p>III only</p>",
            "<p>III and IV only</p>",
            "<p>I and IV only</p>"
          ],
          "correct_answer": "<p>I and IV only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8019/gate-cse-2015-set-1-question-3\" target=\"_blank\">https://gateoverflow.in/8019/gate-cse-2015-set-1-question-3</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"39596\"></a><div itemprop=\"text\"><p>Consider the following languages.</p>\n\n<ul>\n\t<li>\\( L_{1} = \\left\\{\\left\\langle M \\right\\rangle \\mid M \\text{ takes at least 2016 steps on some input} \\right\\} \\),</li>\n\t<li>\\( L_{2} = \\left\\{\\left\\langle M \\right\\rangle \\mid M \\text { takes at least 2016 steps on all inputs} \\right\\} \\) and</li>\n\t<li>\\( L_{3} = \\left\\{\\left\\langle M \\right\\rangle \\mid M \\ \\text {accepts }\\epsilon\\right\\} \\),</li>\n</ul>\n\n<p>where for each Turing machine \\( M,&nbsp;\\left\\langle M \\right\\rangle \\) denotes a specific encoding of \\( M \\). Which one of the following is TRUE?</p>\n\n</div><br><br><b>GATE CSE 2016 Set 2 | Question: 44</b></p>",
          "type": "single",
          "options": [
            "<p>\\( L_{1} \\) is recursive and \\( L_{2}, L_{3} \\) are not recursive</p>",
            "<p>\\( L_{2} \\) is recursive and \\( L_{1}, L_{3} \\) are not recursive</p>",
            "<p>\\( L_{1}, L_{2} \\) are recursive and \\( L_{3} \\) is not recursive</p>",
            "<p>\\( L_{1}, L_{2}, L_{3} \\) are recursive</p>"
          ],
          "correct_answer": "<p>\\( L_{1}, L_{2} \\) are recursive and \\( L_{3} \\) is not recursive</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/39596/gate-cse-2016-set-2-question-44\" target=\"_blank\">https://gateoverflow.in/39596/gate-cse-2016-set-2-question-44</a></p>"
        },
        {
          "id": 15,
          "question": "<p><a name=\"357440\"></a><div itemprop=\"text\"><p>Let \\( \\langle M \\rangle \\) denote an encoding of an automaton \\( M \\). Suppose that \\( \\Sigma = \\{0,1\\} \\). Which of the following languages is/are \\( \\text{NOT} \\) recursive?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 1 | Question: 12</b></p>",
          "type": "single",
          "options": [
            "<p>\\( L= \\{ \\langle M \\rangle \\mid M \\) is a \\( \\text{DFA} \\) such that \\( L(M)=\\emptyset&nbsp;\\} \\)</p>",
            "<p>\\( L= \\{ \\langle M \\rangle \\mid M \\) is a \\( \\text{DFA} \\) such that \\( L(M)=\\Sigma^* \\} \\)</p>",
            "<p>\\( L= \\{ \\langle M \\rangle \\mid M \\) is a \\( \\text{PDA} \\) such that \\( L(M)=\\emptyset&nbsp;\\} \\)</p>",
            "<p>\\( L= \\{ \\langle M \\rangle \\mid M \\) is a \\( \\text{PDA} \\) such that \\( L(M)=\\Sigma ^* \\} \\)</p>"
          ],
          "correct_answer": "<p>\\( L= \\{ \\langle M \\rangle \\mid M \\) is a \\( \\text{PDA} \\) such that \\( L(M)=\\Sigma ^* \\} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357440/gate-cse-2021-set-1-question-12\" target=\"_blank\">https://gateoverflow.in/357440/gate-cse-2021-set-1-question-12</a></p>"
        },
        {
          "id": 16,
          "question": "<p><a name=\"357412\"></a><div itemprop=\"text\"><p>For a Turing machine \\( M \\), \\( \\langle&nbsp;M \\rangle \\) denotes an encoding of \\( M \\). Consider the following two languages.</p>\n\n<p>\\[ \\begin{array}{ll} L_1 = \\{ \\langle M \\rangle \\mid M \\text{ takes more than } 2021 \\text{ steps on all inputs} \\} \\\\ L_2 = \\{ \\langle M \\rangle \\mid M\\text{ takes more than } 2021 \\text{ steps on some input} \\} \\end{array} \\]</p>\n\n<p>Which one of the following options is correct?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 1 | Question: 39</b></p>",
          "type": "single",
          "options": [
            "<p>Both \\( L_1 \\) and \\( L_2 \\) are decidable</p>",
            "<p>\\( L_1 \\) is decidable&nbsp; and \\( L_2 \\) is undecidable</p>",
            "<p>\\( L_1 \\) is undecidable&nbsp; and \\( L_2 \\) is decidable</p>",
            "<p>Both \\( L_1 \\) and \\( L_2 \\) are undecidable</p>"
          ],
          "correct_answer": "<p>Both \\( L_1 \\) and \\( L_2 \\) are decidable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357412/gate-cse-2021-set-1-question-39\" target=\"_blank\">https://gateoverflow.in/357412/gate-cse-2021-set-1-question-39</a></p>"
        }
      ]
    }
  ]
});
