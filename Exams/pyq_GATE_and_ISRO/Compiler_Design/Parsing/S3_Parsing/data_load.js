window.__examLoadCallback({
  "title": "Parsing - Parsing - Slot 3",
  "duration": 42,
  "sections": [
    {
      "name": "Parsing",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
