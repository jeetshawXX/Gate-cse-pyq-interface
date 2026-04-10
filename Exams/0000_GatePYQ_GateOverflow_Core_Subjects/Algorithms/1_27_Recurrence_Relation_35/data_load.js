window.__examLoadCallback({
  "title": "Algorithms - Recurrence Relation",
  "duration": 97,
  "sections": [
    {
      "name": "Recurrence Relation",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"82450\"></a><div itemprop=\"text\"><p>Solve the recurrence equations:</p>\n\n<ul>\n\t<li>\\( T(n) = T(n - 1)+ n \\)</li>\n\t<li>\\( T(1) = 1 \\)</li>\n</ul></div><br><br><b>GATE CSE 1987 | Question: 10a</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/82450/gate-cse-1987-question-10a\" target=\"_blank\">https://gateoverflow.in/82450/gate-cse-1987-question-10a</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"94637\"></a><div itemprop=\"text\"><p>Solve the recurrence equations:</p>\n\n<ul>\n\t<li>\\( T(n)= T( \\frac{n}{2})+1 \\)</li>\n\t<li>\\( T(1)=1 \\)</li>\n</ul></div><br><br><b>GATE CSE 1988 | Question: 13iv</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/94637/gate-cse-1988-question-13iv\" target=\"_blank\">https://gateoverflow.in/94637/gate-cse-1988-question-13iv</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"93175\"></a><div itemprop=\"text\"><p>Find a solution to the following recurrence equation:</p>\n\n<ul>\n\t<li>\\( T(n)=\\sqrt{n}+T\\left(\\frac{n}{2}\\right) \\)</li>\n\t<li>\\( T(1)=1 \\)</li>\n</ul></div><br><br><b>GATE CSE 1989 | Question: 13b</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/93175/gate-cse-1989-question-13b\" target=\"_blank\">https://gateoverflow.in/93175/gate-cse-1989-question-13b</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"86878\"></a><div itemprop=\"text\">Express \\( T(n) \\) in terms of the harmonic number \\( \\displaystyle H_{n}= \\sum_{i=1}^{n} \\frac{1}{i},\\quad n \\geq 1 \\), where \\( T(n) \\) satisfies the recurrence relation,<br>\n<br>\n\\( T(n)=\\frac{n+1}{n} T(n - 1)+1 \\), for \\( n \\geq \\sum \\) and \\( T(1) = 1 \\)<br>\n<br>\nWhat is the asymptotic behaviour of \\( T(n) \\) as a function of \\( n \\) ?</div><br><br><b>GATE CSE 1990 | Question: 17a</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/86878/gate-cse-1990-question-17a\" target=\"_blank\">https://gateoverflow.in/86878/gate-cse-1990-question-17a</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"586\"></a><div itemprop=\"text\"><p>Consider the function&nbsp;\\( F(n) \\) for which the pseudocode is given below :</p>\n\n<pre class=\"prettyprint lang-c_cpp\">Function F(n)\nbegin\nF1 ← 1\nif(n=1) then F ← 3\n else\n   For i = 1 to n do\n        begin\n            C ← 0\n           For j = 1 to n – 1 do\n           begin C ← C + 1 end\n           F1 = F1 * C\n       end\n F = F1\nend\n</pre>\n\n<p><br>\n[\\( n \\) is a positive integer greater than zero]</p>\n\n</div><br><br><b>GATE CSE 1992 | Question: 07a</b></p>",
          "type": "numeric",
          "options": [
            "<p>Derive a recurrence relation for \\( F(n) \\).</p>"
          ],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/586/gate-cse-1992-question-07a\" target=\"_blank\">https://gateoverflow.in/586/gate-cse-1992-question-07a</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"43600\"></a><div itemprop=\"text\"><p>Consider the function \\( F(n) \\) for which the pseudocode is given below :</p>\n\n<pre class=\"prettyprint lang-c_cpp\">Function F(n)\nbegin\nF1 ← 1\nif(n=1) then F ← 3\n else\n   For i = 1 to n do\n        begin\n            C ← 0\n           For j = 1 to n – 1 do\n           begin C ← C + 1 end\n           F1 = F1 * C\n       end\n F = F1\nend\n</pre>\n\n<p>[\\( n \\) is a positive integer greater than zero]</p>\n\n</div><br><br><b>GATE CSE 1992 | Question: 07b</b></p>",
          "type": "numeric",
          "options": [
            "<p>Solve the recurrence relation for a closed form solution of \\( F(n) \\).</p>"
          ],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/43600/gate-cse-1992-question-07b\" target=\"_blank\">https://gateoverflow.in/43600/gate-cse-1992-question-07b</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"2312\"></a><div itemprop=\"text\"><p>Consider the recursive algorithm given below:</p>\n\n<pre class=\"prettyprint lang-c_cpp\">procedure bubblesort (n);\nvar i,j: index; temp : item;\nbegin\n    for i:=1 to n-1 do\n        if A[i] &gt; A[i+1] then\n        begin\n            temp := A[i];\n            A[i] := A[i+1];\n            A[i+1] := temp;\n        end;\n    bubblesort (n-1)\nend\n</pre>\n\n<p>Let \\( a_n \\) be the number of times the ‘if…then…’ statement gets executed when the algorithm is run with value \\( n \\). Set up the recurrence relation by defining \\( a_n \\) in terms of \\( a_{n-1} \\). Solve for \\( a_n \\).</p></div><br><br><b>GATE CSE 1993 | Question: 15</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2312/gate-cse-1993-question-15\" target=\"_blank\">https://gateoverflow.in/2312/gate-cse-1993-question-15</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"2444\"></a><div itemprop=\"text\"><p>The recurrence relation that arises in relation with the complexity of binary search is:</p>\n\n</div><br><br><b>GATE CSE 1994 | Question: 1.7, ISRO2017-14</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T(n) = 2T\\left(\\frac{n}{2}\\right)+k, \\text{ k is a constant } \\)</p>",
            "<p>\\( T(n) = T\\left(\\frac{n}{2}\\right)+k, \\text{ k is a constant } \\)</p>",
            "<p>\\( T(n) = T\\left(\\frac{n}{2}\\right)+\\log n \\)</p>",
            "<p>\\( T(n) = T\\left(\\frac{n}{2}\\right)+n \\)</p>"
          ],
          "correct_answer": "<p>\\( T(n) = T\\left(\\frac{n}{2}\\right)+k, \\text{ k is a constant } \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2444/gate-cse-1994-question-1-7-isro2017-14\" target=\"_blank\">https://gateoverflow.in/2444/gate-cse-1994-question-1-7-isro2017-14</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"2741\"></a><div itemprop=\"text\"><p>The recurrence relation</p>\n\n<ul>\n\t<li>\\( T(1) = 2 \\)</li>\n\t<li>\\( T(n) = 3T (\\frac{n}{4}) +n \\)</li>\n</ul>\n\n<p>has the solution \\( T(n) \\) equal to</p>\n\n\n\n</div><br><br><b>GATE CSE 1996 | Question: 2.12</b></p>",
          "type": "single",
          "options": [
            "<p>\\( O(n) \\)</p>",
            "<p>\\( O (\\log n) \\)</p>",
            "<p>\\( O\\left(n^\\frac{3}{4}\\right) \\)&nbsp;</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>\\( O(n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2741/gate-cse-1996-question-2-12\" target=\"_blank\">https://gateoverflow.in/2741/gate-cse-1996-question-2-12</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"2275\"></a><div itemprop=\"text\"><p>Consider the following function.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">Function F(n, m:integer):integer;\nbegin\n    if (n&lt;=0) or (m&lt;=0) then F:=1\n    else\n      F:F(n-1, m) + F(n-1, m-1);\nend;\n</pre><p>Use the recurrence relation &nbsp;\\( \\begin{pmatrix} n \\\\ k \\end{pmatrix} = \\begin{pmatrix} n-1 \\\\ k \\end{pmatrix} + \\begin{pmatrix} n-1 \\\\ k-1 \\end{pmatrix} \\)&nbsp; to answer the following questions. Assume that \\( n, m \\) are positive integers. Write only the answers without any explanation.</p><ol style=\"list-style-type:lower-alpha\"><li><p>What is the value of \\( F(n, 2) \\)?</p></li><li><p>What is the value of \\( F(n, m) \\)?</p></li><li><p>How many recursive calls are made to the function \\( F \\), including the original call, when evaluating \\( F(n, m) \\).</p></li></ol></div><br><br><b>GATE CSE 1997 | Question: 15</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2275/gate-cse-1997-question-15\" target=\"_blank\">https://gateoverflow.in/2275/gate-cse-1997-question-15</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"2247\"></a><div itemprop=\"text\"><p>Let \\( T(n) \\) be the function defined by \\( T(1) =1, \\: T(n) = 2T (\\lfloor \\frac{n}{2} \\rfloor ) + \\sqrt{n} \\) for \\( n \\geq 2 \\).</p>\n\n<p>Which of the following statements is true?</p>\n\n</div><br><br><b>GATE CSE 1997 | Question: 4.6</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T(n) = O \\sqrt{n} \\)</p>",
            "<p>\\( T(n)=O(n) \\)</p>",
            "<p>\\( T(n) = O (\\log n) \\)</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>\\( T(n)=O(n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2247/gate-cse-1997-question-4-6\" target=\"_blank\">https://gateoverflow.in/2247/gate-cse-1997-question-4-6</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"44584\"></a><div itemprop=\"text\">Solve the following recurrence relation<br>\n<br>\n\\( x_n = 2x_{n-1}-1, n&gt;1 \\)<br>\n<br>\n\\( x_1=2 \\)</div><br><br><b>GATE CSE 1998 | Question: 6a</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/44584/gate-cse-1998-question-6a\" target=\"_blank\">https://gateoverflow.in/44584/gate-cse-1998-question-6a</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"807\"></a><div itemprop=\"text\"><p>The solution to the recurrence equation \\( T(2^k) = 3T(2^{k-1})+1, T(1) =1 \\) is</p>\n\n</div><br><br><b>GATE CSE 2002 | Question: 1.3</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2^k \\)</p>",
            "<p>\\( \\frac{(3^{k+1}-1)}{2} \\)</p>",
            "<p>\\( 3^{\\log_2 k} \\)</p>",
            "<p>\\( 2^{\\log_3 k} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\frac{(3^{k+1}-1)}{2} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/807/gate-cse-2002-question-1-3\" target=\"_blank\">https://gateoverflow.in/807/gate-cse-2002-question-1-3</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"841\"></a><div itemprop=\"text\"><p>The running time of the following algorithm</p>\n\n<p><strong>Procedure </strong>\\( A(n) \\)</p>\n\n<p>If \\( n \\leqslant 2 \\) return (\\( 1 \\)) else return \\( (A( \\lceil &nbsp;\\sqrt{n} &nbsp;\\rceil)) \\);</p>\n\n<p>is best described by</p>\n\n</div><br><br><b>GATE CSE 2002 | Question: 2.11</b></p>",
          "type": "single",
          "options": [
            "<p>\\( O(n) \\)</p>",
            "<p>\\( O(\\log n) \\)</p>",
            "<p>\\( O(\\log \\log n) \\)</p>",
            "<p>\\( O(1) \\)</p>"
          ],
          "correct_answer": "<p>\\( O(\\log \\log n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/841/gate-cse-2002-question-2-11\" target=\"_blank\">https://gateoverflow.in/841/gate-cse-2002-question-2-11</a></p>"
        },
        {
          "id": 15,
          "question": "<p><a name=\"925\"></a><div itemprop=\"text\"><p>Consider the following recurrence relation</p>\n\n<p>\\( T(1)=1 \\)</p>\n\n<p>\\( T(n+1) = T(n)+\\lfloor \\sqrt{n+1} \\rfloor \\) for all \\( n \\geq 1 \\)</p>\n\n<p>The value of \\( T(m^2) \\) for \\( m \\geq 1 \\) is</p>\n\n</div><br><br><b>GATE CSE 2003 | Question: 35</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\frac{m}{6}\\left(21m-39\\right)+4 \\)</p>",
            "<p>\\( \\frac{m}{6}\\left(4m^2-3m+5\\right) \\)</p>",
            "<p>\\( \\frac{m}{2}\\left(3m^{2.5}-11m+20\\right)-5 \\)</p>",
            "<p>\\( \\frac{m}{6}\\left(5m^3-34m^2+137m-104\\right)+\\frac{5}{6} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\frac{m}{6}\\left(4m^2-3m+5\\right) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/925/gate-cse-2003-question-35\" target=\"_blank\">https://gateoverflow.in/925/gate-cse-2003-question-35</a></p>"
        },
        {
          "id": 16,
          "question": "<p><a name=\"1077\"></a><div itemprop=\"text\"><p>The time complexity of the following C function is (assume \\( n &gt; 0 \\))</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int recursive (int n) {\n    if(n == 1)\n        return (1);\n    else\n        return (recursive (n-1) + recursive (n-1));\n}</pre>\n\n</div><br><br><b>GATE CSE 2004 | Question: 83, ISRO2015-40</b></p>",
          "type": "single",
          "options": [
            "<p>\\( O(n) \\)</p>",
            "<p>\\( O(n \\log n) \\)</p>",
            "<p>\\( O(n^2) \\)</p>",
            "<p>\\( O(2^n) \\)</p>"
          ],
          "correct_answer": "<p>\\( O(2^n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1077/gate-cse-2004-question-83-isro2015-40\" target=\"_blank\">https://gateoverflow.in/1077/gate-cse-2004-question-83-isro2015-40</a></p>"
        },
        {
          "id": 17,
          "question": "<p><a name=\"1078\"></a><div itemprop=\"text\"><p>The recurrence equation<br>\n\\(  T(1) = 1 \\)<br>\n\\( T(n) = 2T(n-1) + n, n \\geq 2 \\)<br>\n<br>\nevaluates to</p>\n\n</div><br><br><b>GATE CSE 2004 | Question: 84</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2^{n+1} - n - 2 \\)</p>",
            "<p>\\( 2^n - n \\)</p>",
            "<p>\\( 2^{n+1} - 2n - 2 \\)</p>",
            "<p>\\( 2^n + n  \\)</p>"
          ],
          "correct_answer": "<p>\\( 2^{n+1} - n - 2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1078/gate-cse-2004-question-84\" target=\"_blank\">https://gateoverflow.in/1078/gate-cse-2004-question-84</a></p>"
        },
        {
          "id": 18,
          "question": "<p><a name=\"1829\"></a><div itemprop=\"text\"><p>Consider the following recurrence:<br>\n<br>\n\\(  T(n)=2T\\left ( \\sqrt{n}\\right )+1, \\) \\( T(1)=1 \\)<br>\n<br>\nWhich one of the following is true?</p>\n\n</div><br><br><b>GATE CSE 2006 | Question: 51, ISRO2016-34</b></p>",
          "type": "single",
          "options": [
            "<p>\\(  T(n)=\\Theta (\\log\\log n) \\)</p>",
            "<p>\\(  T(n)=\\Theta (\\log n) \\)</p>",
            "<p>\\(  T(n)=\\Theta (\\sqrt{n}) \\)</p>",
            "<p>\\(  T(n)=\\Theta (n) \\)</p>"
          ],
          "correct_answer": "<p>\\(  T(n)=\\Theta (\\log n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1829/gate-cse-2006-question-51-isro2016-34\" target=\"_blank\">https://gateoverflow.in/1829/gate-cse-2006-question-51-isro2016-34</a></p>"
        },
        {
          "id": 19,
          "question": "<p><a name=\"497\"></a><div itemprop=\"text\"><p>Let \\( x_n \\) denote the number of binary strings of length \\( n \\) that contain no consecutive \\( 0 \\)s.</p>\n\n<p>Which of the following recurrences does \\( x_n \\) satisfy?</p>\n\n</div><br><br><b>GATE CSE 2008 | Question: 78</b></p>",
          "type": "single",
          "options": [
            "<p>\\( x_n = 2x_{n-1} \\)</p>",
            "<p>\\( x_n = x_{\\lfloor n/2 \\rfloor} + 1 \\)</p>",
            "<p>\\( x_n = x_{\\lfloor n/2 \\rfloor} + n \\)</p>",
            "<p>\\( x_n = x_{n-1} + x_{n-2} \\)</p>"
          ],
          "correct_answer": "<p>\\( x_n = x_{n-1} + x_{n-2} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/497/gate-cse-2008-question-78\" target=\"_blank\">https://gateoverflow.in/497/gate-cse-2008-question-78</a></p>"
        },
        {
          "id": 20,
          "question": "<p><a name=\"43485\"></a><div itemprop=\"text\"><p>Let \\( x_n \\) denote the number of binary strings of length \\( n \\) that contain no consecutive \\( 0 \\)s.</p>\n\n<p>The value of \\( x_5 \\) is&nbsp;</p>\n\n</div><br><br><b>GATE CSE 2008 | Question: 79</b></p>",
          "type": "numeric",
          "options": [
            "<p>\\( 5 \\)</p>",
            "<p>\\( 7 \\)</p>",
            "<p>\\( 8 \\)</p>",
            "<p>\\( 16 \\)</p>"
          ],
          "correct_answer": "X",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/43485/gate-cse-2008-question-79\" target=\"_blank\">https://gateoverflow.in/43485/gate-cse-2008-question-79</a></p>"
        },
        {
          "id": 21,
          "question": "<p><a name=\"1321\"></a><div itemprop=\"text\"><p>The running time of an algorithm is represented by the following recurrence relation:</p>\n\n<p>\\( T(n) = &nbsp;\\begin{cases}<br>\n&nbsp; n&nbsp;&amp;&nbsp;n \\leq 3&nbsp;\\\\<br>\n&nbsp; T(\\frac{n}{3})+cn&nbsp;&amp; \\text{ otherwise }<br>\n&nbsp;\\end{cases} \\)</p>\n\n<p>Which one of the following represents the time complexity of the algorithm?</p>\n\n\n\n</div><br><br><b>GATE CSE 2009 | Question: 35</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Theta(n) \\)</p>",
            "<p>\\( \\Theta(n \\log &nbsp;n) \\)</p>",
            "<p>\\( \\Theta(n^2) \\)</p>",
            "<p>\\( \\Theta(n^2 \\log &nbsp;n) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\Theta(n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1321/gate-cse-2009-question-35\" target=\"_blank\">https://gateoverflow.in/1321/gate-cse-2009-question-35</a></p>"
        },
        {
          "id": 22,
          "question": "<p><a name=\"48\"></a><div itemprop=\"text\"><p>The recurrence relation capturing the optimal execution time of the \\( Towers \\&nbsp;of \\ Hanoi \\) problem with \\( n \\) discs is</p>\n\n</div><br><br><b>GATE CSE 2012 | Question: 16</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T(n) = &nbsp;2T(n − 2) + 2 \\)</p>",
            "<p>\\( T (n) = &nbsp;2T(n − 1) + n \\)</p>",
            "<p>\\( T (n) = &nbsp;2T(n/2) + 1 \\)</p>",
            "<p>\\( T (n) = &nbsp;2T(n − 1) + 1 \\)</p>"
          ],
          "correct_answer": "<p>\\( T (n) = &nbsp;2T(n − 1) + 1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/48/gate-cse-2012-question-16\" target=\"_blank\">https://gateoverflow.in/48/gate-cse-2012-question-16</a></p>"
        },
        {
          "id": 23,
          "question": "<p><a name=\"1968\"></a><div itemprop=\"text\"><p>Which one of the following correctly determines the solution of the recurrence relation with \\( T(1) = 1 \\)?</p>\n\n<p>\\[ T(n)= 2T\\left(\\frac {n} {2}\\right) + \\log n \\]</p>\n\n</div><br><br><b>GATE CSE 2014 Set 2 | Question: 13</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Theta(n) \\)</p>",
            "<p>\\( \\Theta(n\\log n) \\)</p>",
            "<p>\\( \\Theta(n^2) \\)</p>",
            "<p>\\( \\Theta(\\log n) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\Theta(n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1968/gate-cse-2014-set-2-question-13\" target=\"_blank\">https://gateoverflow.in/1968/gate-cse-2014-set-2-question-13</a></p>"
        },
        {
          "id": 24,
          "question": "<p><a name=\"8355\"></a><div itemprop=\"text\"><p>Let a\\( _{n} \\) represent the number of bit strings of length n containing two consecutive \\( 1 \\)s. What is the recurrence relation for \\( a_{n} \\)?</p>\n\n</div><br><br><b>GATE CSE 2015 Set 1 | Question: 49</b></p>",
          "type": "single",
          "options": [
            "<p>\\( a_{n - 2} + a_{n - 1} + 2^{n - 2} \\)</p>",
            "<p>\\( a_{n - 2} + 2a_{n - 1} + 2^{n - 2} \\)</p>",
            "<p>\\( 2a_{n - 2} + a_{n - 1} + 2^{n - 2} \\)</p>",
            "<p>\\( 2a_{n - 2} + 2a_{n - 1} + 2^{n - 2} \\)</p>"
          ],
          "correct_answer": "<p>\\( a_{n - 2} + a_{n - 1} + 2^{n - 2} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8355/gate-cse-2015-set-1-question-49\" target=\"_blank\">https://gateoverflow.in/8355/gate-cse-2015-set-1-question-49</a></p>"
        },
        {
          "id": 25,
          "question": "<p><a name=\"8498\"></a><div itemprop=\"text\"><p>Consider the following recursive C function.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">void get(int n)\n{\n    if (n&lt;1) return;\n    get (n-1);\n    get (n-3);\n    printf(\"%d\", n);\n}</pre>\n\n<p>If \\( get(6) \\) function is being called in \\( main() \\) then how many times will the \\( get() \\) function be invoked before returning to the \\( main() \\)?</p>\n\n</div><br><br><b>GATE CSE 2015 Set 3 | Question: 39</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 15 \\)</p>",
            "<p>\\( 25 \\)</p>",
            "<p>\\( 35 \\)</p>",
            "<p>\\( 45 \\)</p>"
          ],
          "correct_answer": "<p>\\( 25 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8498/gate-cse-2015-set-3-question-39\" target=\"_blank\">https://gateoverflow.in/8498/gate-cse-2015-set-3-question-39</a></p>"
        },
        {
          "id": 26,
          "question": "<p><a name=\"39581\"></a><div itemprop=\"text\"><p>The given diagram shows the flowchart for a recursive function \\( A(n) \\). Assume that all statements, except for the recursive calls, have \\( O(1) \\) time complexity. If the worst case time complexity of this function is \\( O(n^{\\alpha}) \\), then the least possible value (accurate up to two decimal positions) of \\( \\alpha \\) is ________.</p>\n\n<p>Flow chart for Recursive Function \\( A(n) \\).</p>\n\n<p style=\"text-align:center\"><img alt=\"\" height=\"421\" src=\"images/gateOverflow_pyq_images/algorithms___recurrence_relation/febe502815292e132dd57c2c87c3875e.png\" width=\"800\"></p></div><br><br><b>GATE CSE 2016 Set 2 | Question: 39</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2.32:2.33",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/39581/gate-cse-2016-set-2-question-39\" target=\"_blank\">https://gateoverflow.in/39581/gate-cse-2016-set-2-question-39</a></p>"
        },
        {
          "id": 27,
          "question": "<p><a name=\"118623\"></a><div itemprop=\"text\"><p>Consider the recurrence function</p>\n\n<p>\\[ T(n) = \\begin{cases} 2T(\\sqrt{n})+1, &amp; n&gt;2 \\\\ 2, &amp; 0 &lt; n \\leq 2 \\end{cases} \\]</p>\n\n<p>Then \\( T(n) \\) in terms of \\( \\Theta \\) notation is</p>\n\n</div><br><br><b>GATE CSE 2017 Set 2 | Question: 30</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Theta(\\log \\log n) \\)</p>",
            "<p>\\( \\Theta( \\log n) \\)</p>",
            "<p>\\( \\Theta (\\sqrt{n}) \\)</p>",
            "<p>\\( \\Theta(n) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\Theta( \\log n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/118623/gate-cse-2017-set-2-question-30\" target=\"_blank\">https://gateoverflow.in/118623/gate-cse-2017-set-2-question-30</a></p>"
        },
        {
          "id": 28,
          "question": "<p><a name=\"333229\"></a><div itemprop=\"text\"><p>For parameters \\( a \\) and \\( b \\), both of which are \\( \\omega(1) \\), \\( T(n) = T(n^{1/a})+1 \\), and \\( T(b)=1 \\). Then \\( T(n) \\) is</p>\n\n</div><br><br><b>GATE CSE 2020 | Question: 2</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Theta (\\log_a &nbsp;\\log _b&nbsp;&nbsp;n) \\)&nbsp; &nbsp;</p>",
            "<p>\\( \\Theta (\\log_{ab}&nbsp;n \\))</p>",
            "<p>\\( \\Theta (\\log_{b} &nbsp;\\log_{a}&nbsp; \\: n \\))</p>",
            "<p>\\( \\Theta (\\log_{2} \\log_{2} n \\))</p>"
          ],
          "correct_answer": "<p>\\( \\Theta (\\log_a &nbsp;\\log _b&nbsp;&nbsp;n) \\)&nbsp; &nbsp;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/333229/gate-cse-2020-question-2\" target=\"_blank\">https://gateoverflow.in/333229/gate-cse-2020-question-2</a></p>"
        },
        {
          "id": 29,
          "question": "<p><a name=\"357421\"></a><div itemprop=\"text\"><p>Consider the following recurrence relation.</p>\n\n<p>\\[ T\\left ( n&nbsp;\\right )=\\left\\{\\begin{array}&nbsp; {lcl} T(n ∕&nbsp;2)+T(2n∕5)+7n&nbsp;&amp; \\text{if} \\; n&gt;0\\\\1 &amp; \\text{if}\\; n=0&nbsp;\\end{array}\\right. \\]</p>\n\n<p>Which one of the following options is correct?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 1 | Question: 30</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T(n)=\\Theta (n^{5/2}) \\)</p>",
            "<p>\\( T(n)=\\Theta (n\\log n) \\)</p>",
            "<p>\\( T(n)=\\Theta (n) \\)</p>",
            "<p>\\( T(n)=\\Theta ((\\log n)^{5/2}) \\)</p>"
          ],
          "correct_answer": "<p>\\( T(n)=\\Theta (n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357421/gate-cse-2021-set-1-question-30\" target=\"_blank\">https://gateoverflow.in/357421/gate-cse-2021-set-1-question-30</a></p>"
        },
        {
          "id": 30,
          "question": "<p><a name=\"357501\"></a><div itemprop=\"text\"><p>For constants \\( a \\geq 1 \\) and \\( b&gt;1 \\), consider the following recurrence defined on the non-negative integers:</p>\n\n<p>\\[ T(n) = a \\cdot T \\left(\\dfrac{n}{b} \\right) + f(n) \\] Which one of the following options is correct about the recurrence \\( T(n) \\)?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 2 | Question: 39</b></p>",
          "type": "single",
          "options": [
            "<p>If \\( f(n) \\) is \\( n \\log_2(n) \\), then \\( T(n) \\) is \\( \\Theta(n \\log_2(n)) \\)</p>",
            "<p>If \\( f(n) \\) is \\( \\dfrac{n}{\\log_2(n)} \\), then \\( T(n) \\) is \\( \\Theta(\\log_2(n)) \\)</p>",
            "<p>If \\( f(n) \\) is \\( O(n^{\\log_b(a)-\\epsilon}) \\) for some \\( \\epsilon &gt;0 \\), then \\( T(n) \\) is \\( \\Theta(n^{\\log_b(a)}) \\)</p>",
            "<p>If \\( f(n) \\) is \\( \\Theta(n^{\\log_b(a)}) \\), then \\( T(n) \\) is \\( \\Theta(n^{\\log_b(a)}) \\)</p>"
          ],
          "correct_answer": "<p>If \\( f(n) \\) is \\( O(n^{\\log_b(a)-\\epsilon}) \\) for some \\( \\epsilon &gt;0 \\), then \\( T(n) \\) is \\( \\Theta(n^{\\log_b(a)}) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357501/gate-cse-2021-set-2-question-39\" target=\"_blank\">https://gateoverflow.in/357501/gate-cse-2021-set-2-question-39</a></p>"
        },
        {
          "id": 31,
          "question": "<p><a name=\"422810\"></a><div itemprop=\"text\"><p>Consider the following recurrence relation:</p><p>\\( T(n)=\\left\\{\\begin{array}{c}\\sqrt{n} T(\\sqrt{n})+n \\text { for } n \\geq 1, \\\\ 1 \\quad \\text { for } n=1\\end{array}\\right. \\)</p><p>Which one of the following options is CORRECT?</p><p>&nbsp;</p></div><br><br><b>GATE CSE 2024 | Set 1 | Question: 32</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T(n)=\\Theta(n \\log \\log n) \\)</p>",
            "<p>\\( T(n)=\\Theta(n \\log n) \\)</p>",
            "<p>\\( T(n)=\\Theta\\left(n^2 \\log n\\right) \\)</p>",
            "<p>\\( T(n)=\\Theta\\left(n^2 \\log \\log n\\right) \\)</p>"
          ],
          "correct_answer": "<p>\\( T(n)=\\Theta(n \\log \\log n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422810/gate-cse-2024-set-1-question-32\" target=\"_blank\">https://gateoverflow.in/422810/gate-cse-2024-set-1-question-32</a></p>"
        },
        {
          "id": 32,
          "question": "<p><a name=\"460070\"></a><div itemprop=\"text\"><p>Consider the following recurrence relation:<br>\\[  T(n)=2 T(n-1)+n 2^{n} \\text { for } n&gt;0, \\quad T(0)=1 \\]</p><p>Which ONE of the following options is CORRECT?</p></div><br><br><b>GATE CSE 2025 | Set 1 | Question: 10</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T(n)=\\Theta\\left(n^{2} 2^{n}\\right) \\)</p>",
            "<p>\\( T(n)=\\Theta\\left(n 2^{n}\\right) \\)</p>",
            "<p>\\( T(n)=\\Theta\\left((\\log n)^{2} 2^{n}\\right) \\)</p>",
            "<p>\\( T(n)=\\Theta\\left(4^{n}\\right) \\)</p>"
          ],
          "correct_answer": "<p>\\( T(n)=\\Theta\\left(n^{2} 2^{n}\\right) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/460070/gate-cse-2025-set-1-question-10\" target=\"_blank\">https://gateoverflow.in/460070/gate-cse-2025-set-1-question-10</a></p>"
        },
        {
          "id": 33,
          "question": "<p><a name=\"3700\"></a><div itemprop=\"text\"><p>Consider a list of recursive algorithms and a list of recurrence relations as shown below. Each recurrence relation corresponds to exactly one algorithm and is used to derive the time complexity of the algorithm.</p>\n\n<p>\\[ \\begin{array}{|l|l|l|l|}\\hline \\text{}&nbsp; &amp;&nbsp; \\textbf{Recursive Algorithm } &amp; \\text{} &amp; \\textbf{Recurrence Relation} \\\\\\hline&nbsp; \\text{P} &amp; \\text{Binary search} &amp; \\text{l.} &amp; \\text{\\( T(n) = T(n-k) +T(k) +cn \\)} \\\\\\hline&nbsp; \\text{Q.} &amp; \\text{Merge sort} &amp;\\text{ll.}&nbsp; &amp;&nbsp; \\text{\\( T(n) = 2T(n-1) + 1 \\) }\\\\\\hline\\text{R.}&nbsp; &amp;&nbsp; \\text{Quick sort}&amp; \\text{lll.}&nbsp; &amp;&nbsp; \\text{\\( T(n) = 2T(n/2) + cn \\)}\\\\\\hline&nbsp;\\text{S.}&nbsp; &amp;&nbsp; \\text{Tower of Hanoi} &amp; \\text{lV.}&nbsp; &amp;&nbsp; \\text{\\( T(n) = T(n/2) + 1 \\)} \\\\\\hline \\end{array} \\]</p>\n\n<p>Which of the following is the correct match between the algorithms and their recurrence relations?</p>\n\n</div><br><br><b>GATE IT 2004 | Question: 57</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{P-II, Q-III, R-IV, S-I} \\)</p>",
            "<p>\\( \\text{P-IV, Q-III, R-I, S-II} \\)</p>",
            "<p>\\( \\text{P-III, Q-II, R-IV, S-I} \\)</p>",
            "<p>\\( \\text{P-IV, Q-II, R-I, S-III} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{P-IV, Q-III, R-I, S-II} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3700/gate-it-2004-question-57\" target=\"_blank\">https://gateoverflow.in/3700/gate-it-2004-question-57</a></p>"
        },
        {
          "id": 34,
          "question": "<p><a name=\"3812\"></a><div itemprop=\"text\"><p>Let \\( T(n) \\) be a function defined by the recurrence</p>\n\n<p>\\( T(n) = 2T(n/2) + \\sqrt n \\) for \\( n \\geq 2 \\) and<br>\n\\( T(1) = 1 \\)</p>\n\n<p>Which of the following statements is <strong>TRUE</strong>?</p>\n\n</div><br><br><b>GATE IT 2005 | Question: 51</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T(n) = \\Theta(\\log n) \\)</p>",
            "<p>\\( T(n) = \\Theta(\\sqrt n) \\)</p>",
            "<p>\\( T(n) = \\Theta(n) \\)</p>",
            "<p>\\( T(n) = \\Theta(n \\log n) \\)</p>"
          ],
          "correct_answer": "<p>\\( T(n) = \\Theta(n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3812/gate-it-2005-question-51\" target=\"_blank\">https://gateoverflow.in/3812/gate-it-2005-question-51</a></p>"
        },
        {
          "id": 35,
          "question": "<p><a name=\"3354\"></a><div itemprop=\"text\"><p>When \\( n = 2^{2k} \\)&nbsp;for some \\( k \\geqslant&nbsp;0 \\), the recurrence relation</p>\n\n<p>\\( T(n) = √(2) T(n/2) + √n \\), \\( T(1) = 1 \\)</p>\n\n<p>evaluates to :</p>\n\n</div><br><br><b>GATE IT 2008 | Question: 44</b></p>",
          "type": "single",
          "options": [
            "<p>\\( √(n) (\\log n + 1) \\)</p>",
            "<p>\\( √(n) \\log n \\)</p>",
            "<p>\\( √(n) \\log √(n) \\)</p>",
            "<p>\\( n \\log √n \\)</p>"
          ],
          "correct_answer": "<p>\\( √(n) (\\log n + 1) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3354/gate-it-2008-question-44\" target=\"_blank\">https://gateoverflow.in/3354/gate-it-2008-question-44</a></p>"
        }
      ]
    }
  ]
});
