window.__examLoadCallback({
  "title": "Algorithms - Asymptotic Notation",
  "duration": 19,
  "sections": [
    {
      "name": "Asymptotic Notation",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"1498\"></a><div itemprop=\"text\"><p>If \\( T_1 = O(1) \\), give the correct matching for the following pairs:<br>\\[ \\begin{array}{|ll|ll|}\\hline &amp; \\text{(M) \\( T_n = T_{n-1} + n \\)}&nbsp; &amp;&nbsp; \\text{(U) \\( T_n = O(n) \\)} \\\\\\hline &amp; \\text{(N) \\( T_n = T_{n/2} + n \\)} &amp; \\text{(V) \\( T_n = O(n \\log n) \\)} \\\\\\hline&nbsp; &amp; \\text{(O) \\( T_n = T_{n/2} + n \\log n \\)} &amp; \\text{(W) \\( T_n = O(n^2) \\)} \\\\\\hline &amp; \\text{(P) \\( T_n = T_{n-1} + \\log n \\)} &amp; \\text{(X) \\( T_n = O(\\log^2 n) \\)} \\\\\\hline \\end{array} \\]</p></div><br><br><b>GATE CSE 1999 | Question: 2.21</b></p>",
          "type": "numeric",
          "options": [
            "<p>\\( \\text{M-W, N-V, O-U, P-X} \\)</p>",
            "<p>\\( \\text{M-W, N-U, O-X, P-V} \\)</p>",
            "<p>\\( \\text{M-V, N-W, O-X, P-U} \\)</p>",
            "<p>\\( \\text{M-W, N-U, O-V, P-X} \\)</p>"
          ],
          "correct_answer": "X",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/1498/gate-cse-1999-question-2-21\" target=\"_blank\">https://gateoverflow.in/1498/gate-cse-1999-question-2-21</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"118703\"></a><div itemprop=\"text\"><p>Consider the following functions from positive integers to real numbers:<br>\n<br>\n\\( 10 \\), \\( \\sqrt{n} \\), \\( n \\), \\( \\log_{2}n \\), \\( \\frac{100}{n} \\).<br>\nThe CORRECT arrangement of the above functions in increasing order of asymptotic complexity is:</p>\n\n</div><br><br><b>GATE CSE 2017 Set 1 | Question: 04</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\log_{2}n \\), \\( \\frac{100}{n} \\), \\( 10 \\), \\( \\sqrt{n} \\), \\( n \\)</p>",
            "<p>\\( \\frac{100}{n} \\), \\( 10 \\), \\( \\log_{2}n \\), \\( \\sqrt{n} \\), \\( n \\)</p>",
            "<p>\\( 10 \\), \\( \\frac{100}{n} \\), \\( \\sqrt{n} \\), \\( \\log_{2}n \\), \\( n \\)</p>",
            "<p>\\( \\frac{100}{n} \\), \\( \\log_{2}n \\), \\( 10 \\), \\( \\sqrt{n} \\), \\( n \\)</p>"
          ],
          "correct_answer": "<p>\\( \\frac{100}{n} \\), \\( 10 \\), \\( \\log_{2}n \\), \\( \\sqrt{n} \\), \\( n \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/118703/gate-cse-2017-set-1-question-04\" target=\"_blank\">https://gateoverflow.in/118703/gate-cse-2017-set-1-question-04</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"357449\"></a><div itemprop=\"text\"><p>Consider the following three functions.</p>\n\n<p>\\[ f_1=10^n\\quad&nbsp;f_2=n^{\\log n}\\quad f_3=n^{\\sqrt {n}} \\]</p>\n\n<p>Which one of the following options arranges the functions in the increasing order of asymptotic growth rate?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 1 | Question: 3</b></p>",
          "type": "single",
          "options": [
            "<p>\\( f_3, f_2, f_1 \\)</p>",
            "<p>\\( f_2, f_1, f_3 \\)</p>",
            "<p>\\( f_1, f_2,f_3 \\)</p>",
            "<p>\\( f_2, f_3, f_1 \\)</p>"
          ],
          "correct_answer": "<p>\\( f_2, f_3, f_1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357449/gate-cse-2021-set-1-question-3\" target=\"_blank\">https://gateoverflow.in/357449/gate-cse-2021-set-1-question-3</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"371935\"></a><div itemprop=\"text\"><p>Which one of the following statements is \\( \\text{TRUE} \\) for all positive functions \\( f(n)? \\)</p>\n\n</div><br><br><b>GATE CSE 2022 | Question: 1</b></p>",
          "type": "single",
          "options": [
            "<p>\\( f(n^{2}) = \\theta (f(n)^{2}), \\) when \\( f(n) \\) is a polynomial</p>",
            "<p>\\( f(n^{2}) = o (f(n)^{2}) \\)</p>",
            "<p>\\( f(n^{2}) = O (f(n)^{2}), \\) when \\( f(n) \\) is an exponential function</p>",
            "<p>\\( f(n^{2}) = \\Omega (f(n)^{2}) \\)</p>"
          ],
          "correct_answer": "<p>\\( f(n^{2}) = \\theta (f(n)^{2}), \\) when \\( f(n) \\) is a polynomial</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/371935/gate-cse-2022-question-1\" target=\"_blank\">https://gateoverflow.in/371935/gate-cse-2022-question-1</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"399292\"></a><div itemprop=\"text\"><p>Let \\( f \\) and \\( g \\) be functions of natural numbers given by \\( f(n)=n \\) and \\( g(n)=n^{2}. \\) Which of the following statements is/are \\( \\text{TRUE}? \\)</p>\n\n</div><br><br><b>GATE CSE 2023 | Question: 19</b></p>",
          "type": "multiple",
          "options": [
            "<p>\\( f \\in O(g) \\)</p>",
            "<p>\\( f \\in \\Omega(g) \\)</p>",
            "<p>\\( f \\in o(g) \\)</p>",
            "<p>\\( f \\in \\Theta(g) \\)</p>"
          ],
          "correct_answer": [
            "<p>\\( f \\in O(g) \\)</p>",
            "<p>\\( f \\in o(g) \\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/399292/gate-cse-2023-question-19\" target=\"_blank\">https://gateoverflow.in/399292/gate-cse-2023-question-19</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"399267\"></a><div itemprop=\"text\"><p>Consider functions \\( \\textsf{Function_1} \\) and \\( \\textsf{Function_2} \\)&nbsp;expressed in pseudocode as follows:</p><table border=\"1\" cellpadding=\"1\" style=\"width:100%\"><tbody><tr><td style=\"width:220px\"><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" style=\"text-align: left;\">Function_1\n    while n&gt;1 do\n        for i=1 to n do\n            x = x + 1;\n        end for\n        n = ⌊n/2⌋;\n    end while\n</pre></td><td style=\"width:240px\"><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" style=\"text-align: left;\">Function_2\n   for i = 1 to 100 * n do\n       x = x + 1;\n   end for\n</pre></td></tr></tbody></table><p>&nbsp;</p><p>Let \\( f_{1}(n) \\) and \\( f_{2}(n) \\) denote the number of times the statement \\( \\textsf{“x = x + 1”} \\)&nbsp;is executed in \\( \\textsf{Function_1} \\) and \\( \\textsf{Function_2}, \\) respectively.</p><p>Which of the following statements is/are \\( \\text{TRUE}? \\)</p></div><br><br><b>GATE CSE 2023 | Question: 44</b></p>",
          "type": "multiple",
          "options": [
            "<p>\\( f_{1}(n) \\in \\Theta\\left(f_{2}(n)\\right) \\)</p>",
            "<p>\\( f_{1}(n) \\in o\\left(f_{2}(n)\\right) \\)</p>",
            "<p>\\( f_{1}(n) \\in \\omega\\left(f_{2}(n)\\right) \\)</p>",
            "<p>\\( f_{1}(n) \\in O(n) \\)</p>"
          ],
          "correct_answer": [
            "<p>\\( f_{1}(n) \\in \\Theta\\left(f_{2}(n)\\right) \\)</p>",
            "<p>\\( f_{1}(n) \\in O(n) \\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/399267/gate-cse-2023-question-44\" target=\"_blank\">https://gateoverflow.in/399267/gate-cse-2023-question-44</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"422892\"></a><div itemprop=\"text\"><p>​​​​​Let \\( \\text{T(n)} \\) be the recurrence relation defined as follows:</p><p>\\[<br>\\begin{array}{l}<br>T(0)=1, \\\\<br>T(1)=2, \\text { and } \\\\<br>T(n)=5 T(n-1)-6 T(n-2) \\text { for } n \\geq 2<br>\\end{array}<br>\\]<br><br>Which one of the following statements is TRUE?</p></div><br><br><b>GATE CSE 2024 | Set 2 | Question: 5</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T(n)=\\Theta\\left(2^{n}\\right) \\)</p>",
            "<p>\\( T(n)=\\Theta\\left(n 2^{n}\\right) \\)</p>",
            "<p>\\( T(n)=\\Theta\\left(3^{n}\\right) \\)</p>",
            "<p>\\( T(n)=\\Theta\\left(n 3^{n}\\right) \\)</p>"
          ],
          "correct_answer": "<p>\\( T(n)=\\Theta\\left(2^{n}\\right) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422892/gate-cse-2024-set-2-question-5\" target=\"_blank\">https://gateoverflow.in/422892/gate-cse-2024-set-2-question-5</a></p>"
        }
      ]
    }
  ]
});
