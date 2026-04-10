window.__examLoadCallback({
  "title": "Compiler Design - Grammar",
  "duration": 141,
  "sections": [
    {
      "name": "Grammar",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"94390\"></a><div itemprop=\"text\"><p>Consider the following grammar:</p>\n\n<ul>\n\t<li>\\( S \\rightarrow S \\)</li>\n\t<li>\\( S \\rightarrow SS \\mid a \\mid \\epsilon \\)</li>\n</ul>\n\n<p>Construct the collection of sets of \\( \\text{LR (0)} \\) items for this grammar and draw its goto graph.</p></div><br><br><b>GATE CSE 1988 | Question: 10ia</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/94390/gate-cse-1988-question-10ia\" target=\"_blank\">https://gateoverflow.in/94390/gate-cse-1988-question-10ia</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"94391\"></a><div itemprop=\"text\"><p>Consider the following grammar:</p>\n\n<ul>\n\t<li>\\( S \\rightarrow S \\)</li>\n\t<li>\\( S \\rightarrow SS \\mid a \\mid \\epsilon \\)</li>\n</ul>\n\n<p>Indicate the shift-reduce and reduce-reduce conflict (if any) in the various states of the \\( \\text{LR(0)} \\) parser.</p></div><br><br><b>GATE CSE 1988 | Question: 10ib</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/94391/gate-cse-1988-question-10ib\" target=\"_blank\">https://gateoverflow.in/94391/gate-cse-1988-question-10ib</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"86869\"></a><div itemprop=\"text\">Show that grammar \\( G_1 \\) is ambiguous using parse trees:<br>\n<br>\n\\( G_{1}: &nbsp;&nbsp;S \\rightarrow \\) if \\( S \\) then \\( S \\) else \\( S \\)<br>\n<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\( S \\rightarrow \\) if \\( S \\) then \\( S \\)</div><br><br><b>GATE CSE 1990 | Question: 16a</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/86869/gate-cse-1990-question-16a\" target=\"_blank\">https://gateoverflow.in/86869/gate-cse-1990-question-16a</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"537\"></a><div itemprop=\"text\"><p>Consider the following grammar for arithmetic expressions using binary operators \\( - \\) and \\( / \\) which are not associative</p><ul><li>\\( E \\rightarrow E -T\\mid T \\)</li><li>\\( T \\rightarrow T/F\\mid F \\) &nbsp;</li><li>\\( F \\rightarrow (E) \\mid id \\)</li></ul><p>(\\( E \\) is the start symbol)<br><br>Is the grammar unambiguous? Is so, what is the relative precedence between &nbsp;\\( - \\) and \\( / \\)? If not, give an unambiguous grammar that gives \\( / \\) precedence over \\( - \\).</p></div><br><br><b>GATE CSE 1991 | Question: 10a</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/537/gate-cse-1991-question-10a\" target=\"_blank\">https://gateoverflow.in/537/gate-cse-1991-question-10a</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"43604\"></a><div itemprop=\"text\"><p>Consider the following grammar for arithmetic expressions using binary operators \\( - \\) and \\( / \\) which are not associative</p>\n\n<ul>\n\t<li>\\( E \\rightarrow E -T\\mid T \\)</li>\n\t<li>\\( T \\rightarrow T/F\\mid F \\) &nbsp;</li>\n\t<li>\\( F \\rightarrow (E) \\mid id \\)</li>\n</ul>\n\n<p>(\\( E \\) is the start symbol)<br>\n<br>\nDoes the grammar allow expressions with redundant parentheses as in \\( ({id}/{id}) \\) or in \\( id -({id}/{id}) \\) ? If so, convert the grammar into one which does not generate expressions with redundant parentheses. Do this with minimum number of changes to the given production rules and adding at most one more production rule.</p></div><br><br><b>GATE CSE 1991 | Question: 10b</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/43604/gate-cse-1991-question-10b\" target=\"_blank\">https://gateoverflow.in/43604/gate-cse-1991-question-10b</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"43605\"></a><div itemprop=\"text\"><p>Consider the following grammar for arithmetic expressions using binary operators \\( - \\) and \\( / \\) which are not associative</p>\n\n<ul>\n\t<li>\\( E \\rightarrow E -T\\mid T \\)</li>\n\t<li>\\( T \\rightarrow T/F\\mid F \\) &nbsp;</li>\n\t<li>\\( F \\rightarrow (E) \\mid id \\)</li>\n</ul>\n\n<p>(\\( E \\) is the start symbol)<br>\n<br>\nDoes the grammar allow expressions with redundant parentheses as in \\( (id/id) \\) or in \\( id−(id/id) \\)? If so, convert the grammar into one which does not generate expressions with redundant parentheses. Do this with minimum number of changes to the given production rules and adding at most one more production rule.<br>\n<br>\nConvert the grammar obtained above into one that is not left recursive.</p></div><br><br><b>GATE CSE 1991 | Question: 10c</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/43605/gate-cse-1991-question-10c\" target=\"_blank\">https://gateoverflow.in/43605/gate-cse-1991-question-10c</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"576\"></a><div itemprop=\"text\"><p>If \\( G \\) is a context free grammar and \\( w \\) is a string of length \\( l \\) in \\( L(G) \\), how long is a derivation of \\( w \\) in \\( G \\), if \\( G \\) is in Chomsky normal form?</p></div><br><br><b>GATE CSE 1992 | Question: 02,xviii</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2l \\)</p>",
            "<p>\\( 2l +1 \\)</p>",
            "<p>\\( 2l -1 \\)</p>",
            "<p>\\( l \\)</p>"
          ],
          "correct_answer": "<p>\\( 2l -1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/576/gate-cse-1992-question-02-xviii\" target=\"_blank\">https://gateoverflow.in/576/gate-cse-1992-question-02-xviii</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"2461\"></a><div itemprop=\"text\">\n<p>Which of the following features cannot be captured by context-free grammars?</p>\n\n\n</div><br><br><b>GATE CSE 1994 | Question: 1.18</b></p>",
          "type": "single",
          "options": [
            "<p>Syntax of if-then-else statements</p>",
            "<p>Syntax of recursive procedures</p>",
            "<p>Whether a variable has been declared before its use</p>",
            "<p>Variable names of arbitrary length</p>"
          ],
          "correct_answer": "<p>Whether a variable has been declared before its use</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2461/gate-cse-1994-question-1-18\" target=\"_blank\">https://gateoverflow.in/2461/gate-cse-1994-question-1-18</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"2516\"></a><div itemprop=\"text\">A grammar \\( G \\) is in Chomsky-Normal Form (CNF) if all its productions are of the form \\( A \\to BC \\) or \\( A \\to a \\), where \\( A,B \\) and \\( C \\), are non-terminals and \\( a \\) is a terminal. Suppose \\( G \\) is a CFG in CNF and \\( w \\) is a string in \\( L(G) \\) of length \\( n \\), then how long is a derivation of \\( w \\) in \\( G \\)?</div><br><br><b>GATE CSE 1994 | Question: 20</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2516/gate-cse-1994-question-20\" target=\"_blank\">https://gateoverflow.in/2516/gate-cse-1994-question-20</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"2482\"></a><div itemprop=\"text\">Match the following items\\[ \\begin{array}{|ll|ll|}\\hline \\text{(i)} &amp; \\text{Backus-Naur form} &amp; \\text{(a)} &amp; \\text{Regular expressions} \\\\\\hline &nbsp;\\text{(ii)} &amp; \\text{Lexical analysis} &amp; \\text{(b)}&amp; \\text{LALR(1) grammar} \\\\\\hline &nbsp;&nbsp;\\text{(iii)}&amp; \\text{YACC} &amp; \\text{(c)} &nbsp;&amp; \\text{LL(1) grammars} \\\\\\hline &nbsp;\\text{(iv)} &amp; \\text{Recursive descent parsing} &amp;\\text{(d)} &nbsp;&amp; \\text{General context-free grammars} &nbsp;\\\\\\hline \\end{array} \\]</div><br><br><b>GATE CSE 1994 | Question: 3.5</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2482/gate-cse-1994-question-3-5\" target=\"_blank\">https://gateoverflow.in/2482/gate-cse-1994-question-3-5</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"2597\"></a><div itemprop=\"text\"><p>Consider a grammar with the following productions</p>\n\n<ul>\n\t<li>\\( S &nbsp;\\rightarrow &nbsp;a \\alpha &nbsp;b \\mid b \\alpha &nbsp;c \\mid aB \\)</li>\n\t<li>\\( S &nbsp;\\rightarrow \\alpha &nbsp;S\\mid b \\)</li>\n\t<li>\\( S &nbsp;\\rightarrow \\alpha b b\\mid ab \\)</li>\n\t<li>\\( S &nbsp;\\alpha \\rightarrow bd b\\mid b \\)</li>\n</ul>\n\n<p>The above grammar is:</p>\n\n</div><br><br><b>GATE CSE 1995 | Question: 1.10</b></p>",
          "type": "numeric",
          "options": [
            "<p>Context free</p>",
            "<p>Regular</p>",
            "<p>Context sensitive</p>",
            "<p>\\( LR(k) \\)</p>"
          ],
          "correct_answer": "X",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2597/gate-cse-1995-question-1-10\" target=\"_blank\">https://gateoverflow.in/2597/gate-cse-1995-question-1-10</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"2644\"></a><div itemprop=\"text\"></div><br><br><b>GATE CSE 1995 | Question: 9</b></p>",
          "type": "numeric",
          "options": [
            "<p>Translate the arithmetic expression \\( a^\\ast -(b+c) \\) into syntax tree.</p>",
            "<p>A grammar is said to have cycles if it is the case that \\( A \\overset{+}{\\Rightarrow}&nbsp;A \\)</p>\n\tShow that no grammar that has cycles can be \\( \\text{LL(1)}. \\)"
          ],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2644/gate-cse-1995-question-9\" target=\"_blank\">https://gateoverflow.in/2644/gate-cse-1995-question-9</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"2763\"></a><div itemprop=\"text\"><p>Let \\( G \\) be a context-free grammar where \\( G=(\\{S, A, B, C\\}, \\{a, b, d\\}, P, S) \\) with the productions in \\( P \\) given below.</p>\n\n<ul>\n\t<li>\\( S \\rightarrow ABAC \\)</li>\n\t<li>\\( A \\rightarrow aA \\mid \\varepsilon \\)</li>\n\t<li>\\( B \\rightarrow bB \\mid \\varepsilon \\)</li>\n\t<li>\\( C \\rightarrow d \\)</li>\n</ul>\n\n<p>(\\( \\varepsilon \\) denotes the null string). Transform the grammar \\( G \\) to an equivalent context-free grammar \\( G' \\) that has no \\( \\varepsilon \\) productions and no unit productions. (A unit production is of the form \\( x \\rightarrow y \\), and \\( x \\) and \\( y \\) are non terminals).</p></div><br><br><b>GATE CSE 1996 | Question: 11</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2763/gate-cse-1996-question-11\" target=\"_blank\">https://gateoverflow.in/2763/gate-cse-1996-question-11</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"2739\"></a><div itemprop=\"text\"><p>The grammar whose productions are</p>\n\n<ul>\n<li>\\( \\langle\\text{stmt}\\rangle&nbsp;\\to\\text{&nbsp;if id then } \\langle\\text{stmt}\\rangle \\)</li>\n<li>\\( \\langle\\text{stmt}\\rangle\\to\\text{&nbsp;if id then } \\langle\\text{stmt}\\rangle\\text{ else } \\langle\\text{stmt}\\rangle \\)</li>\n<li>\\( \\langle\\text{stmt}\\rangle \\to\\text{ id }:=\\text{ id} \\)</li>\n</ul>\n\n<p>is ambiguous because</p>\n\n<p>(a) the sentence</p>\n\n<pre class=\"prettyprint lang-c_cpp\" style=\"margin-left: 40px;\">if a then if b then c:= d</pre>\n\n<p>has more than two parse trees</p>\n\n<p>(b) the left most and right most derivations of the sentence</p>\n\n<pre class=\"prettyprint lang-c_cpp\" style=\"margin-left: 40px;\">if a then if b then c:= d</pre>\n\n<p>give rise to different parse trees</p>\n\n<p>(c) the sentence&nbsp;</p>\n\n<pre class=\"prettyprint lang-c_cpp\" style=\"margin-left: 40px;\">if a then if b then c:= d else c:= f</pre>\n\n<p>has more than two parse trees</p>\n\n<p>(d) the sentence</p>\n\n<pre class=\"prettyprint lang-c_cpp\" style=\"margin-left: 40px;\">if a then if b then c:= d else c:= f</pre>\n\n<p>has two parse trees</p></div><br><br><b>GATE CSE 1996 | Question: 2.10</b></p>",
          "type": "single",
          "options": [],
          "correct_answer": "<p>D</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2739/gate-cse-1996-question-2-10\" target=\"_blank\">https://gateoverflow.in/2739/gate-cse-1996-question-2-10</a></p>"
        },
        {
          "id": 15,
          "question": "<p><a name=\"2222\"></a><div itemprop=\"text\"><p>In the following grammar</p><ul><li>\\( X ::= X \\oplus Y \\mid Y \\)</li><li>\\( Y::= Z * Y \\mid Z \\)</li><li>\\( Z::= id  \\)</li></ul><p>Which of the following is true?</p></div><br><br><b>GATE CSE 1997 | Question: 1.6</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{‘}\\oplus\\text{’} \\)&nbsp;is left associative while \\( \\text{‘}*\\text{’} \\)&nbsp;is right associative</p>",
            "<p>Both \\( \\text{‘}\\oplus\\text{’} \\)&nbsp;and \\( \\text{‘}*\\text{’} \\)&nbsp;are left associative</p>",
            "<p>\\( \\text{‘}\\oplus\\text{’} \\)&nbsp;is right associative while \\( \\text{‘}*\\text{’} \\) is left associative</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>\\( \\text{‘}\\oplus\\text{’} \\)&nbsp;is left associative while \\( \\text{‘}*\\text{’} \\)&nbsp;is right associative</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2222/gate-cse-1997-question-1-6\" target=\"_blank\">https://gateoverflow.in/2222/gate-cse-1997-question-1-6</a></p>"
        },
        {
          "id": 16,
          "question": "<p><a name=\"2271\"></a><div itemprop=\"text\"><p>Consider the grammar</p>\n\n<ul>\n\t<li>\\( S \\rightarrow bSe \\)</li>\n\t<li>\\( S \\rightarrow PQR \\)</li>\n\t<li>\\( P \\rightarrow bPc \\)</li>\n\t<li>\\( P \\rightarrow &nbsp;\\varepsilon \\)</li>\n\t<li>\\( Q \\rightarrow cQd \\)</li>\n\t<li>\\( Q \\rightarrow &nbsp;\\varepsilon \\)</li>\n\t<li>\\( R \\rightarrow dRe \\)</li>\n\t<li>\\( R \\rightarrow \\varepsilon \\)</li>\n</ul>\n\n<p>where \\( S, P, Q, R \\) are non-terminal symbols with \\( S \\) being the start symbol; \\( b, c, d, e \\) are terminal symbols and ‘\\( \\varepsilon \\)’ is the empty string. This grammar generates strings of the form \\( b^i, c^j, d^k, e^m \\) for some \\( i, j, k, m \\geq 0 \\).</p>\n\n<ol style=\"list-style-type:lower-alpha\">\n\t<li>\n\t<p>What is the condition on the values of \\( i, j, k, m \\)?</p>\n\t</li>\n\t<li>\n\t<p>Find the smallest string that has two parse trees.</p>\n\t</li>\n</ol></div><br><br><b>GATE CSE 1997 | Question: 11</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2271/gate-cse-1997-question-11\" target=\"_blank\">https://gateoverflow.in/2271/gate-cse-1997-question-11</a></p>"
        },
        {
          "id": 17,
          "question": "<p><a name=\"1728\"></a><div itemprop=\"text\"></div><br><br><b>GATE CSE 1998 | Question: 14</b></p>",
          "type": "numeric",
          "options": [
            "<p>Let \\( G_1 = (N, T, P, S_1) \\) be a CFG where, \\( N=\\{S_1, A, B\\},T=\\{a, b\\} \\) and \\( P \\) is given by\\[ \\begin{array}{l|l}<br>\n\tS_1 \\rightarrow a S_1 b &amp;S_1 \\rightarrow a B b \\\\<br>\n\tS_1 \\rightarrow a A b &amp;&nbsp;B \\rightarrow Bb\\\\<br>\n\tA \\rightarrow a A &amp;&nbsp;B \\rightarrow b\\\\<br>\n\tA \\rightarrow a<br>\n\t\\end{array} \\]What is \\( L(G_1) \\)?</p>",
            "<p>Use the grammar in Part(a) to give a CFG for \\( L_2 = \\{a^ib^ja^kb^l \\mid i, j, k, l&nbsp;\\geq 1, i=j \\text{ or } k=l\\} \\) by adding not more than \\( 5 \\) production rules.</p>",
            "<p>Is \\( L_2 \\) inherently ambiguous?</p>"
          ],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/1728/gate-cse-1998-question-14\" target=\"_blank\">https://gateoverflow.in/1728/gate-cse-1998-question-14</a></p>"
        },
        {
          "id": 18,
          "question": "<p><a name=\"1697\"></a><div itemprop=\"text\"><p>Consider the grammar</p>\n\n<ul>\n\t<li>S \\( \\rightarrow &nbsp;Aa \\mid b \\)</li>\n\t<li>A \\( \\rightarrow Ac \\mid Sd \\mid \\epsilon \\)</li>\n</ul>\n\n<p>Construct an equivalent grammar with no left recursion and with minimum number of production rules.</p>\n\n</div><br><br><b>GATE CSE 1998 | Question: 6b</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/1697/gate-cse-1998-question-6b\" target=\"_blank\">https://gateoverflow.in/1697/gate-cse-1998-question-6b</a></p>"
        },
        {
          "id": 19,
          "question": "<p><a name=\"1493\"></a><div itemprop=\"text\"><p>A grammar that is both left and right recursive for a non-terminal, is</p>\n\n\n\n</div><br><br><b>GATE CSE 1999 | Question: 2.15</b></p>",
          "type": "single",
          "options": [
            "<p>Ambiguous</p>",
            "<p>Unambiguous</p>",
            "<p>Information is not sufficient to decide whether it is ambiguous or unambiguous</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>Information is not sufficient to decide whether it is ambiguous or unambiguous</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1493/gate-cse-1999-question-2-15\" target=\"_blank\">https://gateoverflow.in/1493/gate-cse-1999-question-2-15</a></p>"
        },
        {
          "id": 20,
          "question": "<p><a name=\"711\"></a><div itemprop=\"text\"><p>Which of the following statements is false?</p>\n\n</div><br><br><b>GATE CSE 2001 | Question: 1.18</b></p>",
          "type": "single",
          "options": [
            "<p>An unambiguous grammar has same leftmost and rightmost derivation</p>",
            "<p>An LL(1) parser is a top-down parser</p>",
            "<p>LALR is more powerful than SLR</p>",
            "<p>An ambiguous grammar can never be LR(k) for any k</p>"
          ],
          "correct_answer": "<p>An unambiguous grammar has same leftmost and rightmost derivation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/711/gate-cse-2001-question-1-18\" target=\"_blank\">https://gateoverflow.in/711/gate-cse-2001-question-1-18</a></p>"
        },
        {
          "id": 21,
          "question": "<p><a name=\"759\"></a><div itemprop=\"text\"><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\\( S \\rightarrow aSbS\\mid bSaS \\mid \\epsilon \\)</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Construct all possible parse trees for the string abab. Is the grammar ambiguous?</p></div><br><br><b>GATE CSE 2001 | Question: 18</b></p>",
          "type": "numeric",
          "options": [
            "<p>Remove left-recursion from the following grammar:&nbsp;\\( S \\rightarrow Sa \\mid Sb \\mid&nbsp;a \\mid&nbsp;b \\)</p>",
            "<p>Consider the following grammar:&nbsp;</p>"
          ],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/759/gate-cse-2001-question-18\" target=\"_blank\">https://gateoverflow.in/759/gate-cse-2001-question-18</a></p>"
        },
        {
          "id": 22,
          "question": "<p><a name=\"944\"></a><div itemprop=\"text\"><p>Consider the grammar shown below</p>\n\n<ul>\n\t<li>\\( S \\rightarrow&nbsp;i&nbsp;E t S S’ \\mid&nbsp;a \\)</li>\n\t<li>\\( S’ \\rightarrow&nbsp;e S \\mid \\epsilon \\)</li>\n\t<li>\\( E \\rightarrow&nbsp;b \\)</li>\n</ul>\n\n<p>In the predictive parse table, \\( M, \\) of this grammar, the entries \\( M[S’ , e] \\) and \\( M[S’ , \\ \\)]$ respectively are</p>\n\n</div><br><br><b>GATE CSE 2003 | Question: 56</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\{S’ \\rightarrow&nbsp;e S\\} \\) and \\( \\{S’ \\rightarrow \\epsilon\\} \\)</p>",
            "<p>\\( \\{S’ \\rightarrow&nbsp;e S\\} \\) and \\( \\{ \\} \\)</p>",
            "<p>\\( \\{S’ \\rightarrow \\epsilon\\} \\) and \\( \\{S’ &nbsp;\\rightarrow \\epsilon\\} \\)</p>",
            "<p>\\( \\{S’ \\rightarrow &nbsp;e S, S’ \\rightarrow \\varepsilon \\)} and \\( \\{S’ &nbsp;\\rightarrow \\epsilon\\} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\{S’ \\rightarrow &nbsp;e S, S’ \\rightarrow \\varepsilon \\)} and \\( \\{S’ &nbsp;\\rightarrow \\epsilon\\} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/944/gate-cse-2003-question-56\" target=\"_blank\">https://gateoverflow.in/944/gate-cse-2003-question-56</a></p>"
        },
        {
          "id": 23,
          "question": "<p><a name=\"945\"></a><div itemprop=\"text\"><p>Consider the grammar shown below.&nbsp;</p>\n\n<ul>\n\t<li>\\( S \\rightarrow&nbsp;C \\ C \\)</li>\n\t<li>\\( C \\rightarrow&nbsp;c \\ C \\mid&nbsp;d \\)</li>\n</ul>\n\n<p>This grammar is</p>\n\n</div><br><br><b>GATE CSE 2003 | Question: 57</b></p>",
          "type": "single",
          "options": [
            "<p>LL(1)</p>",
            "<p>SLR(1) but not LL(1)</p>",
            "<p>LALR(1) but not SLR(1)</p>",
            "<p>LR(I) but not LALR(1)</p>"
          ],
          "correct_answer": "<p>LL(1)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/945/gate-cse-2003-question-57\" target=\"_blank\">https://gateoverflow.in/945/gate-cse-2003-question-57</a></p>"
        },
        {
          "id": 24,
          "question": "<p><a name=\"946\"></a><div itemprop=\"text\"><p>Consider the translation scheme shown below.</p><ul><li>\\( S \\rightarrow&nbsp;T\\;R \\)</li><li>\\( R \\rightarrow&nbsp;+ T&nbsp;\\{\\text{print}(‘+’);\\} R\\mid&nbsp;\\varepsilon \\)</li><li>\\( T&nbsp; \\rightarrow \\) <strong>num&nbsp;</strong>\\( \\{\\text{print} \\)(<strong>num.</strong>val)\\( ;\\} \\)</li></ul><p>Here <strong>num</strong> is a token that represents an integer and <strong>num</strong>.val represents the corresponding integer value. For an input string ‘\\( 9 + 5 + 2 \\)’, this translation scheme will print</p></div><br><br><b>GATE CSE 2003 | Question: 58</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 9 + 5 + 2 \\)</p>",
            "<p>\\( 9 \\ 5 + 2 + \\)</p>",
            "<p>\\( 9 \\ 5 \\ 2 + + \\)</p>",
            "<p>\\( + + 9 \\ 5 \\ 2 \\)</p>"
          ],
          "correct_answer": "<p>\\( 9 \\ 5 + 2 + \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/946/gate-cse-2003-question-58\" target=\"_blank\">https://gateoverflow.in/946/gate-cse-2003-question-58</a></p>"
        },
        {
          "id": 25,
          "question": "<p><a name=\"1042\"></a><div itemprop=\"text\"><p>Consider the grammar with the following translation rules and \\( E \\) as the start symbol\\[ \\begin{array}{lll}<br>E \\rightarrow &nbsp; E_ 1\\# \\: T &amp; \\qquad\\left\\{E.value = E_1.value * T.value\\right\\}\\\\<br>\\qquad\\mid T &amp; \\qquad \\{E.value = T.value\\}\\\\<br>T \\rightarrow &nbsp;T_1 \\&amp; \\: F &amp;\\qquad \\{T.value = T_1.value + F.value\\}\\\\<br>\\qquad\\mid F&amp;\\qquad \\{T.value = F.value\\}\\\\<br>F \\rightarrow \\text{num}&amp;\\qquad&nbsp;\\{F.value=num.value\\}<br>\\end{array} \\]Compute E.value for the root of the parse tree for the expression:\\( 2 \\) # \\( 3 \\) &amp; \\( 5 \\) # \\( 6 \\) &amp; \\( 4 \\)</p></div><br><br><b>GATE CSE 2004 | Question: 45</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 200 \\)</p>",
            "<p>\\( 180 \\)</p>",
            "<p>\\( 160 \\)</p>",
            "<p>\\( 40 \\)</p>"
          ],
          "correct_answer": "<p>\\( 160 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1042/gate-cse-2004-question-45\" target=\"_blank\">https://gateoverflow.in/1042/gate-cse-2004-question-45</a></p>"
        },
        {
          "id": 26,
          "question": "<p><a name=\"1005\"></a><div itemprop=\"text\"><p>Which of the following grammar rules violate the requirements of an operator grammar? \\( P, Q, R \\) are nonterminals, and \\( r, s, t \\) are terminals.</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>\n\t<p>\\( P \\rightarrow&nbsp;Q R \\)</p>\n\t</li>\n\t<li>\n\t<p>\\( P \\rightarrow&nbsp;Q s R \\)</p>\n\t</li>\n\t<li>\n\t<p>\\( P \\rightarrow \\: \\varepsilon \\)</p>\n\t</li>\n\t<li>\n\t<p>\\( P \\rightarrow&nbsp;Q t R r  \\)</p>\n\t</li>\n</ol>\n\n</div><br><br><b>GATE CSE 2004 | Question: 8</b></p>",
          "type": "single",
          "options": [
            "<p>(I) only</p>",
            "<p>(I) and (III) only</p>",
            "<p>(II) and (III) only</p>",
            "<p>(III) and (IV) only</p>"
          ],
          "correct_answer": "<p>(I) and (III) only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1005/gate-cse-2004-question-8\" target=\"_blank\">https://gateoverflow.in/1005/gate-cse-2004-question-8</a></p>"
        },
        {
          "id": 27,
          "question": "<p><a name=\"1082\"></a><div itemprop=\"text\"><p>Consider the following grammar G:</p>\n\n<p>\\( S \\rightarrow bS \\mid&nbsp;aA \\mid&nbsp;b \\)</p>\n\n<p>\\( A \\rightarrow bA \\mid&nbsp;aB \\)</p>\n\n<p>\\( B \\rightarrow bB \\mid&nbsp;aS \\mid&nbsp;a \\)</p>\n\n<p>Let \\( N_a(w) \\) and \\( N_b(w) \\) denote the number of a’s and b’s in a string \\( \\omega \\) respectively.</p>\n\n<p>The language \\( L(G) \\) over &nbsp;\\( \\left\\{a, b\\right\\}^+ \\) generated by \\( G \\) is</p>\n\n</div><br><br><b>GATE CSE 2004 | Question: 88</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\left\\{w \\mid&nbsp;N_a(w) &gt; 3N_b(w)\\right\\} \\)</p>",
            "<p>\\( \\left\\{w \\mid&nbsp;N_b(w) &gt; 3N_a(w)\\right\\} \\)</p>",
            "<p>\\( \\left\\{w \\mid&nbsp;N_a(w) = 3k, k \\in&nbsp;\\left\\{0, 1, 2, …\\right\\}\\right\\} \\)</p>",
            "<p>\\( \\left\\{w \\mid&nbsp;N_b(w) = 3k, k \\in \\left\\{0, 1, 2, …\\right\\}\\right\\} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\left\\{w \\mid&nbsp;N_a(w) = 3k, k \\in&nbsp;\\left\\{0, 1, 2, …\\right\\}\\right\\} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1082/gate-cse-2004-question-88\" target=\"_blank\">https://gateoverflow.in/1082/gate-cse-2004-question-88</a></p>"
        },
        {
          "id": 28,
          "question": "<p><a name=\"1350\"></a><div itemprop=\"text\"><p>The grammar \\( A \\rightarrow&nbsp;AA \\mid&nbsp;(A) \\mid \\epsilon \\) is not suitable for predictive-parsing because the grammar is:</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 14</b></p>",
          "type": "single",
          "options": [
            "<p>ambiguous</p>",
            "<p>left-recursive</p>",
            "<p>right-recursive</p>",
            "<p>an operator-grammar</p>"
          ],
          "correct_answer": "<p>ambiguous</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1350/gate-cse-2005-question-14\" target=\"_blank\">https://gateoverflow.in/1350/gate-cse-2005-question-14</a></p>"
        },
        {
          "id": 29,
          "question": "<p><a name=\"1382\"></a><div itemprop=\"text\"><p>Consider the grammar:</p>\n\n<p>\\[ E \\rightarrow&nbsp;E + n \\mid&nbsp;E \\times&nbsp;n \\mid&nbsp;n \\]</p>\n\n<p>For a sentence \\( n + n \\times&nbsp;n \\), the handles in the right-sentential form of the reduction are:</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 59</b></p>",
          "type": "single",
          "options": [
            "<p>\\( n, E + n \\) and \\( E + n \\times&nbsp;n \\)</p>",
            "<p>\\( n, E + n \\) and \\( E + E \\times&nbsp;n \\)</p>",
            "<p>\\( n, n + n \\) and \\( n + n \\times&nbsp;n \\)</p>",
            "<p>\\( n, E + n \\) and \\( E \\times&nbsp;n \\)</p>"
          ],
          "correct_answer": "<p>\\( n, E + n \\) and \\( E \\times&nbsp;n \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1382/gate-cse-2005-question-59\" target=\"_blank\">https://gateoverflow.in/1382/gate-cse-2005-question-59</a></p>"
        },
        {
          "id": 30,
          "question": "<p><a name=\"995\"></a><div itemprop=\"text\"><p>Consider the following statements about the context free grammar<br><br>\\[ G = \\left \\{ S \\rightarrow SS, S \\rightarrow ab, S \\rightarrow ba, S \\rightarrow \\epsilon \\right \\}  \\]</p><ol style=\"list-style-type:upper-roman\"><li>\\( G \\) is ambiguous</li><li>\\( G \\) produces all strings with equal number of \\( a \\)’s and \\( b \\)’s</li><li>\\( G \\) can be accepted by a deterministic PDA.</li></ol><p>Which combination below expresses all the true statements about \\( G \\)?</p></div><br><br><b>GATE CSE 2006 | Question: 32, ISRO2016-35</b></p>",
          "type": "single",
          "options": [
            "<p>I only</p>",
            "<p>I and III only</p>",
            "<p>II and III only</p>",
            "<p>I, II and III</p>"
          ],
          "correct_answer": "<p>I and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/995/gate-cse-2006-question-32-isro2016-35\" target=\"_blank\">https://gateoverflow.in/995/gate-cse-2006-question-32-isro2016-35</a></p>"
        },
        {
          "id": 31,
          "question": "<p><a name=\"1837\"></a><div itemprop=\"text\"><p>Consider the following translation scheme.&nbsp;</p>\n\n<ul>\n\t<li>\\(  S\\rightarrow ER \\)</li>\n\t<li>\\(  R\\rightarrow *E\\left \\{ \\text{print}(\\text{‘}*\\text{’}); \\right \\} R\\mid \\varepsilon  \\)</li>\n\t<li>\\(  E\\rightarrow F+E\\left \\{ \\text{print}(\\text{‘}+\\text{’}); \\right \\}\\mid F  \\)</li>\n\t<li>\\(  F\\rightarrow (S)\\mid id \\left \\{ \\text{print}(id.value); \\right \\}  \\)</li>\n</ul>\n\n<p>Here \\( id \\) is a token that represents an integer and \\( id.value \\) represents the&nbsp;corresponding integer value. For an input \\( \\text{‘}2 * 3 + 4\\text{’}, \\)&nbsp; this translation scheme&nbsp;prints&nbsp;</p>\n\n</div><br><br><b>GATE CSE 2006 | Question: 59</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2 * 3 + 4 \\)</p>",
            "<p>\\( 2 * +3 \\ 4 \\)</p>",
            "<p>\\( 2 \\ 3 * 4 + \\)</p>",
            "<p>\\( 2 \\ 3 \\ 4+* \\)</p>"
          ],
          "correct_answer": "<p>\\( 2 \\ 3 \\ 4+* \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1837/gate-cse-2006-question-59\" target=\"_blank\">https://gateoverflow.in/1837/gate-cse-2006-question-59</a></p>"
        },
        {
          "id": 32,
          "question": "<p><a name=\"1856\"></a><div itemprop=\"text\"><p>Which one of the following grammars generates the language \\(  L=\\left \\{ a^{i}b^{j}\\mid i\\neq j \\right \\} \\)?</p>\n\n</div><br><br><b>GATE CSE 2006 | Question: 84</b></p>",
          "type": "single",
          "options": [
            "<p>\\( S\\rightarrow AC\\mid CB \\)<br>\n\t\\( C\\rightarrow aCb\\mid a\\mid b \\)<br>\n\t\\( A\\rightarrow aA\\mid \\varepsilon \\)<br>\n\t\\( B\\rightarrow Bb\\mid \\varepsilon \\)<br>\n\t&nbsp;</p>",
            "<p>\\( S\\rightarrow aS\\mid Sb \\mid a\\mid b \\)<br>\n\t&nbsp;</p>",
            "<p>\\( S\\rightarrow AC\\mid CB \\)<br>\n\t\\( C\\rightarrow aCb\\mid \\varepsilon \\)<br>\n\t\\( A\\rightarrow aA\\mid \\varepsilon \\)<br>\n\t\\( B\\rightarrow Bb\\mid \\varepsilon \\)<br>\n\t&nbsp;</p>",
            "<p>\\( S\\rightarrow AC\\mid CB \\)<br>\n\t\\( C\\rightarrow aCb\\mid \\varepsilon \\)<br>\n\t\\( A\\rightarrow aA\\mid a \\)<br>\n\t\\( B\\rightarrow Bb\\mid b \\)</p>"
          ],
          "correct_answer": "<p>\\( S\\rightarrow AC\\mid CB \\)<br>\n\t\\( C\\rightarrow aCb\\mid \\varepsilon \\)<br>\n\t\\( A\\rightarrow aA\\mid a \\)<br>\n\t\\( B\\rightarrow Bb\\mid b \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1856/gate-cse-2006-question-84\" target=\"_blank\">https://gateoverflow.in/1856/gate-cse-2006-question-84</a></p>"
        },
        {
          "id": 33,
          "question": "<p><a name=\"79801\"></a><div itemprop=\"text\"><p>The&nbsp;grammar</p>\n\n<ul>\n\t<li>\\( S\\rightarrow AC\\mid CB \\)</li>\n\t<li>\\( C\\rightarrow aCb\\mid \\epsilon \\)</li>\n\t<li>\\( A\\rightarrow aA\\mid a \\)</li>\n\t<li>\\( B\\rightarrow Bb\\mid b \\)</li>\n</ul>\n\n<p>generates the language \\(  L=\\left \\{ a^{i}b^{j}\\mid i\\neq j \\right \\} \\). In this&nbsp;grammar what is the length of the derivation (number of steps starting from \\( S \\)) to generate the string \\( a^{l}b^{m} \\) with \\( l\\neq m \\)</p>\n\n</div><br><br><b>GATE CSE 2006 | Question: 85</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\max (l,m) + 2 \\)</p>",
            "<p>\\( l + m + 2 \\)</p>",
            "<p>\\( l + m + 3 \\)</p>",
            "<p>\\( \\max (l,m) + 3 \\)</p>"
          ],
          "correct_answer": "<p>\\( \\max (l,m) + 2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/79801/gate-cse-2006-question-85\" target=\"_blank\">https://gateoverflow.in/79801/gate-cse-2006-question-85</a></p>"
        },
        {
          "id": 34,
          "question": "<p><a name=\"1250\"></a><div itemprop=\"text\"><p>Consider the grammar with non-terminals \\( N=\\left\\{S,C,S_1\\right\\} \\), terminals \\( T=\\left\\{a, b, i, t, e\\right\\} \\), with \\( S \\) as the start symbol, and the following set of rules:</p>\n\n<p>\\( S \\rightarrow iCtSS_1 \\mid&nbsp;a \\)</p>\n\n<p>\\( S_1 \\rightarrow eS \\mid \\epsilon \\)</p>\n\n<p>\\( C \\rightarrow b \\)</p>\n\n<p>The grammar is NOT LL(1) because:</p>\n\n</div><br><br><b>GATE CSE 2007 | Question: 52</b></p>",
          "type": "single",
          "options": [
            "<p>it is left recursive</p>",
            "<p>it is right recursive</p>",
            "<p>it is ambiguous</p>",
            "<p>it is not context-free</p>"
          ],
          "correct_answer": "<p>it is ambiguous</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1250/gate-cse-2007-question-52\" target=\"_blank\">https://gateoverflow.in/1250/gate-cse-2007-question-52</a></p>"
        },
        {
          "id": 35,
          "question": "<p><a name=\"1251\"></a><div itemprop=\"text\"><p>Consider the following two statements:</p>\n\n<ul>\n\t<li>P: Every regular grammar is LL(1)</li>\n\t<li>Q: Every regular set has a LR(1) grammar</li>\n</ul>\n\n<p>Which of the following is <strong>TRUE</strong>?</p>\n\n</div><br><br><b>GATE CSE 2007 | Question: 53</b></p>",
          "type": "single",
          "options": [
            "<p>Both P and Q are true</p>",
            "<p>P is true and Q is false</p>",
            "<p>P is false and Q is true</p>",
            "<p>Both P and Q are false</p>"
          ],
          "correct_answer": "<p>P is false and Q is true</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1251/gate-cse-2007-question-53\" target=\"_blank\">https://gateoverflow.in/1251/gate-cse-2007-question-53</a></p>"
        },
        {
          "id": 36,
          "question": "<p><a name=\"1272\"></a><div itemprop=\"text\"><p>Consider the CFG with \\( \\left\\{S, A, B\\right\\} \\) as the non-terminal alphabet, \\( \\{a, b\\} \\) as the terminal alphabet, \\( S \\) as the start symbol and the following set of production rules:</p><p>\\( S \\rightarrow aB \\)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; \\( S \\rightarrow bA \\)</p><p>\\( B \\rightarrow&nbsp;b \\)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\\( A \\rightarrow&nbsp;a \\)&nbsp;</p><p>\\( B \\rightarrow&nbsp;bS \\)&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; \\( A \\rightarrow&nbsp;aS \\)</p><p>\\( B \\rightarrow&nbsp;aBB \\)&nbsp; &nbsp; &nbsp; &nbsp;\\( A \\rightarrow bAA \\)</p><p>Which of the following strings is generated by the grammar?</p></div><br><br><b>GATE CSE 2007 | Question: 78</b></p>",
          "type": "single",
          "options": [
            "<p>\\( aaaabb \\)</p>",
            "<p>\\( aabbbb \\)</p>",
            "<p>\\( aabbab \\)</p>",
            "<p>\\( abbbba \\)</p>"
          ],
          "correct_answer": "<p>\\( aabbab \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1272/gate-cse-2007-question-78\" target=\"_blank\">https://gateoverflow.in/1272/gate-cse-2007-question-78</a></p>"
        },
        {
          "id": 37,
          "question": "<p><a name=\"43512\"></a><div itemprop=\"text\"><p>Consider the CFG with \\( \\left\\{S, A, B\\right\\} \\) as the non-terminal alphabet, \\( \\{a, b\\} \\) as the terminal alphabet, \\( S \\) as the start symbol and the following set of production rules:</p><p>\\( S \\rightarrow aB \\)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; \\( S \\rightarrow bA \\)</p><p>\\( B \\rightarrow&nbsp;b \\)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\\( A \\rightarrow&nbsp;a \\)</p><p>\\( B \\rightarrow&nbsp;bS \\)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\\( A \\rightarrow&nbsp;aS \\)</p><p>\\( B \\rightarrow&nbsp;aBB \\)&nbsp; &nbsp; &nbsp; \\( A \\rightarrow&nbsp;bAA \\)</p><p>For the string \\( aabbab \\), how many derivation trees are there?</p></div><br><br><b>GATE CSE 2007 | Question: 79</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 1 \\)</p>",
            "<p>\\( 2 \\)</p>",
            "<p>\\( 3 \\)</p>",
            "<p>\\( 4 \\)</p>"
          ],
          "correct_answer": "<p>\\( 2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43512/gate-cse-2007-question-79\" target=\"_blank\">https://gateoverflow.in/43512/gate-cse-2007-question-79</a></p>"
        },
        {
          "id": 38,
          "question": "<p><a name=\"395\"></a><div itemprop=\"text\"><p>Which of the following statements are true?</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>Every left-recursive grammar can be converted to a right-recursive grammar and vice-versa</li>\n\t<li>All \\( \\epsilon \\)-productions can be removed from any context-free grammar by suitable transformations</li>\n\t<li>The language generated by a context-free grammar all of whose productions are of the form \\( X \\rightarrow&nbsp;w \\) or \\( X \\rightarrow&nbsp;wY \\) (where, \\( w \\) is a string of terminals and \\( Y \\) is a non-terminal), is always regular</li>\n\t<li>The derivation trees of strings generated by a context-free grammar in Chomsky Normal Form are always binary trees</li>\n</ol>\n\n</div><br><br><b>GATE CSE 2008 | Question: 50</b></p>",
          "type": "single",
          "options": [
            "<p>I, II, III and IV</p>",
            "<p>II, III and IV only</p>",
            "<p>I, III and IV only</p>",
            "<p>I, II and IV only</p>"
          ],
          "correct_answer": "<p>I, III and IV only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/395/gate-cse-2008-question-50\" target=\"_blank\">https://gateoverflow.in/395/gate-cse-2008-question-50</a></p>"
        },
        {
          "id": 39,
          "question": "<p><a name=\"2339\"></a><div itemprop=\"text\"><p>The grammar \\(  S \\to aSa \\mid bS \\mid c \\) is&nbsp;</p>\n\n</div><br><br><b>GATE CSE 2010 | Question: 38</b></p>",
          "type": "single",
          "options": [
            "<p>LL(1) but not LR(1)</p>",
            "<p>LR(1) but not LL(1)</p>",
            "<p>Both LL(1) and LR(1)</p>",
            "<p>Neither LL(1) nor LR(1)</p>"
          ],
          "correct_answer": "<p>Both LL(1) and LR(1)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2339/gate-cse-2010-question-38\" target=\"_blank\">https://gateoverflow.in/2339/gate-cse-2010-question-38</a></p>"
        },
        {
          "id": 40,
          "question": "<p><a name=\"1973\"></a><div itemprop=\"text\"><p>Consider the grammar defined by the following production rules, with two operators \\( ∗ \\) and \\( + \\)</p><ul><li>\\( S\\:\\to\\:T∗P \\)</li><li>\\( T\\:\\to\\:U\\mid T∗U \\)</li><li>\\( P\\:\\to\\:Q+P\\mid Q \\)</li><li>\\( Q\\:\\to Id \\)</li><li>\\( U\\:\\to Id \\)</li></ul><p>Which one of the following is TRUE?</p></div><br><br><b>GATE CSE 2014 Set 2 | Question: 17</b></p>",
          "type": "single",
          "options": [
            "<p>\\( &nbsp;+ \\) is left associative, while \\( ∗ \\) is right associative</p>",
            "<p>\\( &nbsp;+ \\) is right associative, while \\( ∗ \\) is left associative</p>",
            "<p>Both \\( + \\) and \\( ∗ \\) are right associative</p>",
            "<p>Both \\( + \\) and \\( ∗ \\) are left associative</p>"
          ],
          "correct_answer": "<p>\\( &nbsp;+ \\) is right associative, while \\( ∗ \\) is left associative</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1973/gate-cse-2014-set-2-question-17\" target=\"_blank\">https://gateoverflow.in/1973/gate-cse-2014-set-2-question-17</a></p>"
        },
        {
          "id": 41,
          "question": "<p><a name=\"39594\"></a><div itemprop=\"text\"><p>Which one of the following grammars is free from left recursion?</p><p>&nbsp;</p><p>&nbsp;</p></div><br><br><b>GATE CSE 2016 Set 2 | Question: 45</b></p>",
          "type": "single",
          "options": [
            "<p>\\( S \\rightarrow AB \\)<br>\\( A \\rightarrow Aa \\mid&nbsp;b \\)<br>\\( B \\rightarrow c \\)</p>",
            "<p>\\( S \\rightarrow Ab \\mid&nbsp;Bb \\mid&nbsp;c \\)<br>\\( A \\rightarrow Bd \\mid&nbsp;\\epsilon \\)<br>\\( B \\rightarrow e \\)</p>",
            "<p>\\( S \\rightarrow Aa \\mid&nbsp;B \\)<br>\\( A \\rightarrow Bb \\mid&nbsp;Sc \\mid&nbsp;\\epsilon \\)<br>\\(  B \\rightarrow d \\)</p>",
            "<p>\\( S \\rightarrow Aa \\mid&nbsp;Bb \\mid&nbsp;c \\)<br>\\( A \\rightarrow Bd \\mid&nbsp;\\epsilon \\)<br>\\( B \\rightarrow Ae \\mid&nbsp;\\epsilon \\)</p>"
          ],
          "correct_answer": "<p>\\( S \\rightarrow Ab \\mid&nbsp;Bb \\mid&nbsp;c \\)<br>\\( A \\rightarrow Bd \\mid&nbsp;\\epsilon \\)<br>\\( B \\rightarrow e \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/39594/gate-cse-2016-set-2-question-45\" target=\"_blank\">https://gateoverflow.in/39594/gate-cse-2016-set-2-question-45</a></p>"
        },
        {
          "id": 42,
          "question": "<p><a name=\"39598\"></a><div itemprop=\"text\"><p>A student wrote two context-free grammars G1 and G2 for generating a single C-like array declaration. The dimension of the array is at least one. For example,</p>\n\n<pre class=\"prettyprint lang-c_cpp\">                int a[10] [3];</pre>\n\n<p>The grammars use D as the start symbol, and use six terminal symbols <strong>int ; id [ ] num.</strong><br>\n\\[ \\begin{array}{l|l}&nbsp;\\text{Grammar } \\textbf{G1}&nbsp; &amp; \\text{Grammar } \\textbf{G2} \\\\\\hline \\text{D} \\rightarrow&nbsp;&nbsp;\\textbf{int L;} &amp; \\text{D} \\rightarrow&nbsp;&nbsp;\\textbf{int L;}\\\\&nbsp;<br>\n\\text{L} \\rightarrow&nbsp;&nbsp;\\textbf{id [E} &amp; \\text{L} \\rightarrow&nbsp;\\textbf{id E}\\\\&nbsp;\\text{E} \\rightarrow&nbsp;\\textbf{num ]} &amp; \\text{E} \\rightarrow&nbsp;\\textbf{E [num]}\\\\&nbsp;<br>\n\\text{E} \\rightarrow \\textbf{num ] [E} &amp; \\text{E} \\rightarrow&nbsp;\\textbf{[num]}\\\\&nbsp;\\end{array} \\]Which of the grammars correctly generate the declaration mentioned above?</p>\n\n</div><br><br><b>GATE CSE 2016 Set 2 | Question: 46</b></p>",
          "type": "single",
          "options": [
            "<p>Both<strong> G1</strong> and <strong>G2</strong></p>",
            "<p>Only <strong>G1</strong></p>",
            "<p>Only <strong>G2</strong></p>",
            "<p>Neither <strong>G1</strong> nor <strong>G2</strong></p>"
          ],
          "correct_answer": "<p>Both<strong> G1</strong> and <strong>G2</strong></p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/39598/gate-cse-2016-set-2-question-46\" target=\"_blank\">https://gateoverflow.in/39598/gate-cse-2016-set-2-question-46</a></p>"
        },
        {
          "id": 43,
          "question": "<p><a name=\"118374\"></a><div itemprop=\"text\"><p>Consider the following expression grammar \\( G \\):</p>\n\n<ul>\n\t<li>\\( E \\rightarrow E-T \\mid T \\)</li>\n\t<li>\\( T \\rightarrow T + F \\mid F \\)</li>\n\t<li>\\( F \\rightarrow (E) \\mid id \\)</li>\n</ul>\n\n<p>Which of the following grammars is not left recursive, but is equivalent to \\( G \\)?</p>\n\n</div><br><br><b>GATE CSE 2017 Set 2 | Question: 32</b></p>",
          "type": "single",
          "options": [
            "<p>\\( E \\rightarrow E-T \\mid T \\)</p>\n\n\t<p>\\( T&nbsp; \\rightarrow T +F \\mid F \\)</p>\n\t\\( F \\rightarrow (E) \\mid id \\)",
            "<p>\\( E \\rightarrow TE’ \\)</p>\n\n\t<p>\\( E’ \\rightarrow -TE’ \\mid \\epsilon \\)</p>\n\n\t<p>\\( T \\rightarrow T + F \\mid F \\)</p>\n\n\t<p>\\( F \\rightarrow (E) \\mid id \\)</p>",
            "<p>\\( E \\rightarrow TX  \\)</p>\n\n\t<p>\\( X \\rightarrow -TX \\mid \\epsilon \\)</p>\n\n\t<p>\\( T \\rightarrow FY \\)</p>\n\n\t<p>\\( Y \\rightarrow +FY \\mid \\epsilon \\)</p>\n\n\t<p>\\( F \\rightarrow&nbsp;(E) \\mid id \\)</p>",
            "<p>\\( E \\rightarrow TX \\mid (TX) \\)</p>\n\n\t<p>\\( X \\rightarrow -TX \\mid +TX \\mid \\epsilon \\)</p>\n\n\t<p>\\( T \\rightarrow&nbsp; id \\)</p>"
          ],
          "correct_answer": "<p>\\( E \\rightarrow TX  \\)</p>\n\n\t<p>\\( X \\rightarrow -TX \\mid \\epsilon \\)</p>\n\n\t<p>\\( T \\rightarrow FY \\)</p>\n\n\t<p>\\( Y \\rightarrow +FY \\mid \\epsilon \\)</p>\n\n\t<p>\\( F \\rightarrow&nbsp;(E) \\mid id \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/118374/gate-cse-2017-set-2-question-32\" target=\"_blank\">https://gateoverflow.in/118374/gate-cse-2017-set-2-question-32</a></p>"
        },
        {
          "id": 44,
          "question": "<p><a name=\"302805\"></a><div itemprop=\"text\"><p>Consider the augmented grammar given below:</p>\n\n<ul>\n\t<li>\\( S’ \\rightarrow S \\)</li>\n\t<li>\\( S \\rightarrow \\langle L \\rangle \\mid id \\)</li>\n\t<li>\\( L \\rightarrow L, S \\mid S \\)</li>\n</ul>\n\n<p>Let \\( I_0 = \\text{CLOSURE} (\\{[S’ \\rightarrow \\cdot S ]\\}). \\) The number of items in the set \\( \\text{GOTO} (I_0, \\langle \\: ) \\) is______</p></div><br><br><b>GATE CSE 2019 | Question: 43</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/302805/gate-cse-2019-question-43\" target=\"_blank\">https://gateoverflow.in/302805/gate-cse-2019-question-43</a></p>"
        },
        {
          "id": 45,
          "question": "<p><a name=\"357420\"></a><div itemprop=\"text\"><p>Consider the following context-free grammar where the set of terminals is \\( \\{a,b,c,d,f\\} \\). \\[ \\begin{array}{lll} \\text{S} &amp; \\rightarrow &amp; d \\: a \\: \\text{T} \\mid \\text{R} \\: f \\\\ \\text{T} &amp; \\rightarrow &amp; a \\: \\text{S}&nbsp;\\: \\mid \\: b \\: a \\: \\text{T}&nbsp;\\: \\mid \\epsilon \\\\ \\text{R}&nbsp;&amp; \\rightarrow &amp; c \\: a \\: \\text{T}&nbsp;\\: \\text{R}&nbsp;\\: \\mid \\epsilon \\end{array} \\]</p>\n\n<p>The following is a partially-filled \\( \\textsf{LL(1)} \\) parsing table.$$\\begin{array} {c c c }&nbsp; &amp; a &amp; b &amp; c &amp; d &amp; f &amp; \\$ \\\\\\hline&nbsp; \\text{S}&nbsp;&amp; &amp; &amp; \\boxed{1}&nbsp;&amp; \\text{S}&nbsp;\\rightarrow da&nbsp;\\text{T}&nbsp;&amp; \\boxed{2} &amp; \\\\\\hline \\text{T}&nbsp;&amp; \\text{T}&nbsp;\\rightarrow a\\text{S}&nbsp;&amp; \\text{T}&nbsp;\\rightarrow ba\\text{T}&nbsp;&amp; \\boxed{3} &amp;&nbsp; &amp; \\text{T} \\rightarrow \\varepsilon &amp; \\boxed{4}\\\\\\hline&nbsp;\\text{R}&nbsp;&amp;&nbsp; &amp; &amp; \\text{R}&nbsp;\\rightarrow ca\\text{T}\\text{R}&nbsp;&amp; &amp;&nbsp; &nbsp;\\text{R}&nbsp;\\rightarrow \\varepsilon &amp;&nbsp;&nbsp;\\end{array}$$ Which one of the following choices represents the correct combination for the numbered cells in the parsing table (“blank” denotes that the corresponding cell is empty)?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 1 | Question: 31</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\boxed{1}\\;\\text{S}&nbsp;\\rightarrow&nbsp;\\text{R}f \\qquad&nbsp;\\boxed{2}\\;\\text{S}&nbsp;\\rightarrow&nbsp;\\text{R}f \\qquad \\boxed{3}\\;&nbsp;\\text{T}&nbsp;\\rightarrow \\varepsilon \\qquad \\boxed{4}\\;\\text{T}&nbsp;\\rightarrow \\varepsilon \\)</p>",
            "<p>\\( \\boxed{1}\\;\\text{blank} \\qquad&nbsp;\\boxed{2}\\;\\text{S}&nbsp;\\rightarrow&nbsp;\\text{R}f \\qquad \\boxed{3}\\;&nbsp;\\text{T}&nbsp;\\rightarrow \\varepsilon \\qquad \\boxed{4}\\;\\text{T}&nbsp;\\rightarrow \\varepsilon \\)</p>",
            "<p>\\( \\boxed{1}\\;\\text{S}&nbsp;\\rightarrow&nbsp;\\text{R}f&nbsp; \\qquad&nbsp;\\boxed{2}\\;\\text{blank} \\qquad \\boxed{3}\\;&nbsp;\\text{blank} \\qquad \\boxed{4}\\;\\text{T}&nbsp;\\rightarrow \\varepsilon \\)</p>",
            "<p>\\( \\boxed{1}\\;\\text{blank} \\qquad&nbsp;\\boxed{2}\\;\\text{S}&nbsp;\\rightarrow&nbsp;\\text{R}f \\qquad \\boxed{3}\\;&nbsp;\\text{blank} \\qquad \\boxed{4}\\;\\text{blank}  \\)</p>"
          ],
          "correct_answer": "<p>\\( \\boxed{1}\\;\\text{S}&nbsp;\\rightarrow&nbsp;\\text{R}f \\qquad&nbsp;\\boxed{2}\\;\\text{S}&nbsp;\\rightarrow&nbsp;\\text{R}f \\qquad \\boxed{3}\\;&nbsp;\\text{T}&nbsp;\\rightarrow \\varepsilon \\qquad \\boxed{4}\\;\\text{T}&nbsp;\\rightarrow \\varepsilon \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357420/gate-cse-2021-set-1-question-31\" target=\"_blank\">https://gateoverflow.in/357420/gate-cse-2021-set-1-question-31</a></p>"
        },
        {
          "id": 46,
          "question": "<p><a name=\"422793\"></a><div itemprop=\"text\">Let \\( G=(V, \\Sigma, S, P) \\) be a context-free grammar in Chomsky Normal Form with \\( \\Sigma=\\{a, b, c\\} \\) and \\( V \\) containing \\( 10 \\) variable symbols including the start symbol \\( S \\). The string \\( w=a^{30} b^{30} c^{30} \\) is derivable from \\( S \\). The number of steps (application of rules) in the derivation \\( S \\rightarrow^* w \\) is __________.</div><br><br><b>GATE CSE 2024 | Set 1 | Question: 49</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "179",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/422793/gate-cse-2024-set-1-question-49\" target=\"_blank\">https://gateoverflow.in/422793/gate-cse-2024-set-1-question-49</a></p>"
        },
        {
          "id": 47,
          "question": "<p><a name=\"422855\"></a><div itemprop=\"text\"><p>​​​​Consider a context-free grammar \\( \\text{G} \\) with the following \\( 3 \\) rules.</p><p>\\[ S \\rightarrow a S,&nbsp; &nbsp; &nbsp; S \\rightarrow a S b S ,&nbsp; &nbsp; S \\rightarrow c \\] Let \\( w \\in L(G) \\). Let \\(  n_{a}(w), n_{b}(w), n_{c}(w)  \\) denote the number of times \\( a, b, c \\) occur in \\( w \\), respectively. Which of the following statements is/are TRUE?</p></div><br><br><b>GATE CSE 2024 | Set 2 | Question: 42</b></p>",
          "type": "multiple",
          "options": [
            "<p>\\( n_{a}(w)&gt;n_{b}(w) \\)</p>",
            "<p>\\( n_{a}(w)&gt;n_{c}(w)-2 \\)</p>",
            "<p>\\( n_{c}(w)=n_{b}(w)+1 \\)</p>",
            "<p>\\( n_{c}(w)=n_{b}(w) * 2 \\)</p>"
          ],
          "correct_answer": [
            "<p>\\( n_{a}(w)&gt;n_{c}(w)-2 \\)</p>",
            "<p>\\( n_{c}(w)=n_{b}(w)+1 \\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422855/gate-cse-2024-set-2-question-42\" target=\"_blank\">https://gateoverflow.in/422855/gate-cse-2024-set-2-question-42</a></p>"
        },
        {
          "id": 48,
          "question": "<p><a name=\"460852\"></a><div itemprop=\"text\"><p>Consider two grammars \\( G_{1} \\) and \\( G_{2} \\) with the production rules given below:&nbsp;</p><p><br>\\( G_{1} : S \\rightarrow \\) \\( if \\) \\( E \\) \\( then \\) \\( S \\) \\( | \\) \\( if \\) \\( E \\) \\( then \\) \\( S \\) \\( else \\) \\( S \\) \\( | \\) \\( a \\)</p><p>&nbsp; &nbsp; &nbsp; &nbsp; \\( E \\rightarrow b \\)</p><p>\\( G_{2} :S \\rightarrow \\) \\( if \\) \\( E \\) \\( then \\) \\( S \\) \\( | \\) \\( M \\)&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; \\( M \\rightarrow \\) \\( if \\) \\( E \\) \\( then \\) \\( M \\) \\( else \\) \\( S \\) \\( | \\) \\( c \\)</p><p>&nbsp; &nbsp; &nbsp; &nbsp; \\( E \\rightarrow b \\)&nbsp;<br>&nbsp;</p><p>where \\( if, then, else, a, b, c \\)&nbsp; are the terminals.&nbsp;</p><p>Which of the following option(s) is/are CORRECT?&nbsp;</p></div><br><br><b>GATE CSE 2025 | Set 2 | Question: 41</b></p>",
          "type": "multiple",
          "options": [
            "<p>\\( G_{1} \\) is not \\( LL(1) \\) and \\( G_{2} \\) is \\( LL(1) \\)&nbsp;</p>",
            "<p>\\( G_{1} \\) is \\( LL(1) \\) and \\( G_{2} \\) is not \\( LL(1) \\)&nbsp;</p>",
            "<p>\\( G_{1} \\) and \\( G_{2} \\) are not \\( LL(1) \\)&nbsp;</p>",
            "<p>\\( G_{1} \\) and \\( G_{2} \\) are ambiguous.</p>"
          ],
          "correct_answer": [
            "<p>\\( G_{1} \\) and \\( G_{2} \\) are not \\( LL(1) \\)&nbsp;</p>",
            "<p>\\( G_{1} \\) and \\( G_{2} \\) are ambiguous.</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/460852/gate-cse-2025-set-2-question-41\" target=\"_blank\">https://gateoverflow.in/460852/gate-cse-2025-set-2-question-41</a></p>"
        },
        {
          "id": 49,
          "question": "<p><a name=\"3849\"></a><div itemprop=\"text\"><p>Consider the context-free grammar</p>\n\n<p>\\( E&nbsp;&nbsp;\\rightarrow&nbsp;E + E \\)<br>\n\\( E&nbsp;\\rightarrow (E * E) \\)<br>\n\\( E&nbsp;&nbsp;\\rightarrow id \\)</p>\n\n<p>where \\( E \\) is the starting symbol, the set of terminals is \\( \\{id, (,+,),*\\} \\), and the set of nonterminals is \\( \\{E\\} \\).</p>\n\n<p>Which of the following terminal strings has more than one parse tree when parsed according to the above grammar?</p>\n\n</div><br><br><b>GATE IT 2005 | Question: 83a</b></p>",
          "type": "single",
          "options": [
            "<p>\\( id + id + id + id \\)</p>",
            "<p>\\( id + (id* (id * id)) \\)</p>",
            "<p>\\( (id* (id * id)) + id \\)</p>",
            "<p>\\( ((id * id + id) * id) \\)</p>"
          ],
          "correct_answer": "<p>\\( id + id + id + id \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3849/gate-it-2005-question-83a\" target=\"_blank\">https://gateoverflow.in/3849/gate-it-2005-question-83a</a></p>"
        },
        {
          "id": 50,
          "question": "<p><a name=\"3442\"></a><div itemprop=\"text\"><p>Consider an ambiguous grammar \\( G \\) and its disambiguated version \\( D. \\) Let the language recognized by the two grammars be denoted by \\( L(G) \\) and \\( L(D) \\) respectively. Which one of the following is true?</p>\n\n</div><br><br><b>GATE IT 2007 | Question: 9</b></p>",
          "type": "single",
          "options": [
            "<p>\\( L (D) ⊂ L (G) \\)</p>",
            "<p>\\( L (D) ⊃ L (G) \\)</p>",
            "<p>\\( L (D)&nbsp;= L (G) \\)</p>",
            "<p>\\( L (D) \\) is empty</p>"
          ],
          "correct_answer": "<p>\\( L (D)&nbsp;= L (G) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3442/gate-it-2007-question-9\" target=\"_blank\">https://gateoverflow.in/3442/gate-it-2007-question-9</a></p>"
        },
        {
          "id": 51,
          "question": "<p><a name=\"3392\"></a><div itemprop=\"text\"><p>A CFG&nbsp;\\( G \\) is given with the following productions where \\( S \\) is the start symbol, \\( A \\) is a non-terminal and \\( a \\) and \\( b \\) are terminals.</p><ul><li>\\( S \\to aS \\mid A \\)</li><li>\\( A \\to aAb \\mid bAa \\mid \\epsilon \\)</li></ul><p>Which of the following strings is generated by the grammar above?</p></div><br><br><b>GATE IT 2008 | Question: 78</b></p>",
          "type": "single",
          "options": [
            "<p>\\( aabbaba \\)</p>",
            "<p>\\( aabaaba \\)</p>",
            "<p>\\( abababb \\)</p>",
            "<p>\\( aabbaab \\)</p>"
          ],
          "correct_answer": "<p>\\( aabbaab \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3392/gate-it-2008-question-78\" target=\"_blank\">https://gateoverflow.in/3392/gate-it-2008-question-78</a></p>"
        }
      ]
    }
  ]
});
