window.__examLoadCallback({
  "title": "Algorithms - Recurrence Relation",
  "duration": 11,
  "sections": [
    {
      "name": "Recurrence Relation",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"27308\"></a><div itemprop=\"text\"><p>Consider the following recurrence relation:</p>\n\n<p>\\( T\\left(n\\right)=<br>\n\\begin{cases}<br>\nT\\left(\\frac{n}{k}\\right)+ T\\left(\\frac{3n}{4}\\right)+ n &amp; \\text{if } n \\geq 2 &nbsp; \\\\<br>\n&nbsp;1&amp; \\text{if } n=1 &nbsp;&nbsp;<br>\n\\end{cases} \\)</p>\n\n<p>Which of the following statements is FALSE?</p>\n\n</div><br><br><b>Algorithms: TIFR CSE 2014 | Part B | Question: 11</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T(n) \\) is \\( O(n^{3/2}) \\) when \\( k=3 \\).</p>",
            "<p>\\( T(n) \\) is \\( O(n \\log n) \\) when \\( k=3 \\).</p>",
            "<p>\\( T(n) \\) is \\( O(n \\log n) \\) when \\( k=4 \\).</p>",
            "<p>\\( T(n) \\) is \\( O(n \\log n) \\) when \\( k=5 \\).</p>",
            "<p>\\( T(n) \\) is \\( O(n) \\) when \\( k=5 \\).</p>"
          ],
          "correct_answer": "<p>\\( T(n) \\) is \\( O(n \\log n) \\) when \\( k=3 \\).</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/27308/tifr-cse-2014-part-b-question-11\" target=\"_blank\">https://gateoverflow.in/27308/tifr-cse-2014-part-b-question-11</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"29657\"></a><div itemprop=\"text\"><p>Consider the following recurrence relation:</p>\n\n<p>\\( T(n)<br>\n= \\begin{cases}<br>\n2T (\\lfloor\\sqrt{n}\\rfloor)+ \\log n &amp; \\text{if }n \\geq 2 &nbsp; \\\\<br>\n&nbsp;1&amp; \\text{if }n = 1 &nbsp;&nbsp;<br>\n\\end{cases} \\)</p>\n\n<p>Which of the following statements is TRUE?</p>\n\n</div><br><br><b>Algorithms: TIFR CSE 2015 | Part B | Question: 1</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T(n) \\) is \\( O(\\log n) \\).</p>",
            "<p>\\( T(n) \\) is \\( O(\\log n \\cdot&nbsp;\\log \\log n) \\) but not \\( O(\\log n) \\).</p>",
            "<p>\\( T(n) \\) is \\( O(\\log^{3/2} n) \\) but not \\( O(\\log n \\cdot&nbsp;\\log \\log n) \\).</p>",
            "<p>\\( T(n) \\) is \\( O(\\log^{2} n) \\) but not \\( O(\\log^{3/2} n) \\).</p>",
            "<p>\\( T(n) \\) is \\( O(\\log^{2} n&nbsp;\\cdot&nbsp;\\log \\log n) \\) but not \\( O(\\log^{2} n) \\).</p>"
          ],
          "correct_answer": "<p>\\( T(n) \\) is \\( O(\\log n \\cdot&nbsp;\\log \\log n) \\) but not \\( O(\\log n) \\).</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/29657/tifr-cse-2015-part-b-question-1\" target=\"_blank\">https://gateoverflow.in/29657/tifr-cse-2015-part-b-question-1</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"95664\"></a><div itemprop=\"text\"><p>Let \\( T(a, b) \\) be the function with two arguments (both nonnegative integral powers of 2) defined by the following recurrence:</p>\n\n<ul>\n\t<li>\\(  T(a, b) = T \\left( \\frac{a}{2}, b \\right) +T\\left( a, \\frac{b}{2}&nbsp;\\right)\\quad&nbsp;\\quad \\quad \\text{if } a, b \\geq 2 \\);</li>\n\t<li>\\(  T(a, 1) = T \\left( \\frac{a}{2}, 1&nbsp;\\right) \\quad \\quad \\quad\\quad\\quad \\quad&nbsp;\\quad \\:\\:\\:\\text{if } a&nbsp;\\geq 2 \\);</li>\n\t<li>\\(  T(1, b) = T \\left( 1, \\frac{b}{2} \\right) \\quad \\quad \\quad\\quad \\quad\\quad\\quad \\quad \\text{if } b&nbsp;\\geq 2 \\);</li>\n\t<li>\\( T(1, 1)=1 \\).</li>\n</ul>\n\n<p>What is \\( T(2^r, 2^s) \\)?</p>\n\n</div><br><br><b>Algorithms: TIFR CSE 2017 | Part A | Question: 15</b></p>",
          "type": "single",
          "options": [
            "<p>\\( rs \\)</p>",
            "<p>\\( r+s \\)</p>",
            "<p>\\( \\begin{pmatrix} 2^r+2^s \\\\ 2^r \\end{pmatrix} \\)</p>",
            "<p>\\( \\begin{pmatrix} r+s&nbsp;\\\\ r \\end{pmatrix} \\)</p>",
            "<p>\\( 2^{r-s} \\) if \\( r \\geq s \\), otherwise \\( 2^{s-r} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\begin{pmatrix} r+s&nbsp;\\\\ r \\end{pmatrix} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/95664/tifr-cse-2017-part-a-question-15\" target=\"_blank\">https://gateoverflow.in/95664/tifr-cse-2017-part-a-question-15</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"400152\"></a><div itemprop=\"text\"><p>What is the solution to the following recurrence?<br>\n\\[<br>\nT(n)=\\left\\{\\begin{array}{ll}<br>\n1 &amp; \\text { if } n \\leq 10,&nbsp;\\\\<br>\n\\sqrt{n} \\cdot T(\\sqrt{n})+n &amp; \\text { if } n&gt;10.<br>\n\\end{array}\\right.<br>\n\\]</p>\n\n</div><br><br><b>Algorithms: TIFR CSE 2023 | Part B | Question: 6</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T(n)=\\Theta\\left(n^{2}\\right) \\)</p>",
            "<p>\\( T(n)=\\Theta(n \\log n) \\)</p>",
            "<p>\\( T(n)=\\Theta(n \\sqrt{\\log n}) \\)</p>",
            "<p>\\( T(n)=\\Theta(n \\log \\log n) \\)</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>\\( T(n)=\\Theta(n \\log \\log n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/400152/tifr-cse-2023-part-b-question-6\" target=\"_blank\">https://gateoverflow.in/400152/tifr-cse-2023-part-b-question-6</a></p>"
        }
      ]
    }
  ]
});
