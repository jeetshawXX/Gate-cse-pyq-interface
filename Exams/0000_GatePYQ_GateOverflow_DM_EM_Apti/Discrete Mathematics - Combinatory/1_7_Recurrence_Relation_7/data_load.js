window.__examLoadCallback({
  "title": "Discrete Mathematics - Combinatory - Recurrence Relation",
  "duration": 19,
  "sections": [
    {
      "name": "Recurrence Relation",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"2761\"></a><div itemprop=\"text\">The Fibonacci sequence \\( \\{f_1, f_2, f_3 \\ldots f_n\\} \\) is defined by the following recurrence:\\[ f_{n+2} = f_{n+1} + f_n, n \\geq 1; f_2 =1:f_1=1 \\]Prove by induction that every third element of the sequence is even.</div><br><br><b>GATE CSE 1996 | Question: 9</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2761/gate-cse-1996-question-9\" target=\"_blank\">https://gateoverflow.in/2761/gate-cse-1996-question-9</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"39636\"></a><div itemprop=\"text\"><p>Let&nbsp;\\( a_n \\) be the number of \\( n \\)-bit strings that do <strong>NOT</strong> contain two consecutive \\( 1's \\). Which one of the following is the recurrence relation for&nbsp;\\( a_n \\)?</p></div><br><br><b>GATE CSE 2016 Set 1 | Question: 2</b></p>",
          "type": "single",
          "options": [
            "<p>\\( a_n = a_{n-1}+ 2a_{n-2} \\)</p>",
            "<p>\\( a_n = a_{n-1}+ a_{n-2} \\)</p>",
            "<p>\\( a_n = 2a_{n-1}+ a_{n-2} \\)</p>",
            "<p>\\( a_n = 2a_{n-1}+ 2a_{n-2} \\)</p>"
          ],
          "correct_answer": "<p>\\( a_n = a_{n-1}+ a_{n-2} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/39636/gate-cse-2016-set-1-question-2\" target=\"_blank\">https://gateoverflow.in/39636/gate-cse-2016-set-1-question-2</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"39714\"></a><div itemprop=\"text\">Consider the recurrence relation \\( a_1 =8 , a_n =6n^2 +2n+a_{n-1} \\). Let &nbsp;\\( a_{99}=K\\times 10^4 \\). The value of \\( K \\) is __________.</div><br><br><b>GATE CSE 2016 Set 1 | Question: 27</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "197.9:198.1",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/39714/gate-cse-2016-set-1-question-27\" target=\"_blank\">https://gateoverflow.in/39714/gate-cse-2016-set-1-question-27</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"371895\"></a><div itemprop=\"text\"><p>Consider the following recurrence:</p>\n\n<p>\\[ \\begin{array}{}&nbsp;f(1) &amp;&nbsp; =&nbsp; &amp;&nbsp; 1; \\\\ f(2n) &amp;&nbsp; = &amp;&nbsp; 2f(n) – 1, &amp;&nbsp; \\; \\text{for}\\; n \\geq 1;&nbsp; \\\\&nbsp;f(2n+1) &amp;&nbsp; = &amp;&nbsp; 2f(n) + 1, &amp;&nbsp; \\; \\text{for}\\; n \\geq 1. &nbsp; \\end{array} \\]</p>\n\n<p>Then, which of the following statements is/are \\( \\text{TRUE}? \\)</p>\n\n</div><br><br><b>GATE CSE 2022 | Question: 41</b></p>",
          "type": "multiple",
          "options": [
            "<p>\\( f(2^{n} – 1) = 2^{n} – 1 \\)</p>",
            "<p>\\( f(2^{n}) = 1 \\)</p>",
            "<p>\\( f(5 \\cdot 2^{n}) = 2^{n+1} + 1 \\)</p>",
            "<p>\\( f(2^{n} + 1) = 2^{n} + 1 \\)</p>"
          ],
          "correct_answer": [
            "<p>\\( f(2^{n} – 1) = 2^{n} – 1 \\)</p>",
            "<p>\\( f(2^{n}) = 1 \\)</p>",
            "<p>\\( f(5 \\cdot 2^{n}) = 2^{n+1} + 1 \\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/371895/gate-cse-2022-question-41\" target=\"_blank\">https://gateoverflow.in/371895/gate-cse-2022-question-41</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"399307\"></a><div itemprop=\"text\"><p>The Lucas sequence \\( L_{n} \\) is defined by the recurrence relation:<br>\n\\[<br>\nL_{n}=L_{n-1}+L_{n-2}, \\quad \\text { for } \\quad n \\geq 3,<br>\n\\]<br>\nwith \\( L_{1}=1 \\) and \\( L_{2}=3 \\).</p>\n\n<p>Which one of the options given is TRUE?</p>\n\n</div><br><br><b>GATE CSE 2023 | Question: 5</b></p>",
          "type": "single",
          "options": [
            "<p>\\( L_{n}=\\left(\\frac{1+\\sqrt{5}}{2}\\right)^{n}+\\left(\\frac{1-\\sqrt{5}}{2}\\right)^{n} \\)</p>",
            "<p>\\( L_{n}=\\left(\\frac{1+\\sqrt{5}}{2}\\right)^{n}-\\left(\\frac{1-\\sqrt{5}}{3}\\right)^{n} \\)</p>",
            "<p>\\( L_{n}=\\left(\\frac{1+\\sqrt{5}}{2}\\right)^{n}+\\left(\\frac{1-\\sqrt{5}}{3}\\right)^{n} \\)</p>",
            "<p>\\( L_{n}=\\left(\\frac{1+\\sqrt{5}}{2}\\right)^{n}-\\left(\\frac{1-\\sqrt{5}}{2}\\right)^{n} \\)</p>"
          ],
          "correct_answer": "<p>\\( L_{n}=\\left(\\frac{1+\\sqrt{5}}{2}\\right)^{n}+\\left(\\frac{1-\\sqrt{5}}{2}\\right)^{n} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/399307/gate-cse-2023-question-5\" target=\"_blank\">https://gateoverflow.in/399307/gate-cse-2023-question-5</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"3677\"></a><div itemprop=\"text\"><p>Let \\( H_1, H_2, H_3, \\) ... be harmonic numbers. Then, for \\( n \\in&nbsp;Z^+ \\), &nbsp;\\( \\sum_{j=1}^{n} H_j \\) can be expressed as</p>\n\n</div><br><br><b>GATE IT 2004 | Question: 34</b></p>",
          "type": "single",
          "options": [
            "<p>\\( nH_{n+1} - (n + 1) \\)</p>",
            "<p>\\( (n + 1)H_n - n \\)</p>",
            "<p>\\( nH_n - n \\)</p>",
            "<p>\\( (n + 1) H_{n+1} - (n + 1) \\)</p>"
          ],
          "correct_answer": "<p>\\( (n + 1)H_n - n \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3677/gate-it-2004-question-34\" target=\"_blank\">https://gateoverflow.in/3677/gate-it-2004-question-34</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"3528\"></a><div itemprop=\"text\"><p>Consider the sequence \\( \\langle x_n \\rangle , \\: n \\geq 0 \\) defined by the recurrence relation \\( x_{n+1} = c . x^2_n -2 \\), where \\( c &gt; 0 \\).</p>\n\n<p>Suppose there exists a <strong><em>non-empty, open</em></strong> interval \\( (a, b) \\) such that for all \\( x_0 \\)&nbsp;satisfying \\( a &lt; x_0 &lt; b \\),&nbsp;the sequence converges to a limit. The sequence converges to the value?</p>\n\n</div><br><br><b>GATE IT 2007 | Question: 76</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\frac{1+\\sqrt{1+8c}}{2c} \\)</p>",
            "<p>\\( \\frac{1-\\sqrt{1+8c}}{2c} \\)</p>",
            "<p>\\( 2 \\)</p>",
            "<p>\\( \\frac{2}{2c-1} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\frac{1-\\sqrt{1+8c}}{2c} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3528/gate-it-2007-question-76\" target=\"_blank\">https://gateoverflow.in/3528/gate-it-2007-question-76</a></p>"
        }
      ]
    }
  ]
});
