window.__examLoadCallback({
  "title": "Programming - Programming in C - Recursion",
  "duration": 14,
  "sections": [
    {
      "name": "Recursion",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"26484\"></a><div itemprop=\"text\"><p>Consider the following computation rules. <strong>Parallel-outermost rule</strong>: Replace all the outermost occurrences of F (i.e., all occurrences of F which do not occur as arguments of other F's) simultaneously. <strong>Parallel - innermost rule</strong>: Replace all the innermost occurrences of F (i.e.,all occurrences of F with all arguments free of F's) simultaneously. Now consider the evaluations of the recursive program over the integers. &nbsp;</p>\n\n<pre class=\"prettyprint lang-c_cpp\">F(x, y) &lt;== if x = 0 then 0 else   \n            [ F(x + 1, F(x, y)) * F(x - 1, F(x, y))] </pre>\n\n<p>&nbsp;where the multiplication functions * is extended as follows: &nbsp;</p>\n\n<pre class=\"prettyprint lang-c_cpp\">0 * w &amp; w * 0 are 0\na * w &amp; w * a are w (for any non-zero integer a)\nw * w is w  </pre>\n\n<p>We say that \\( F(x, y) = \\) w when the evaluation of \\( F(x, y) \\) does not terminate. Computing \\( F(1, 0) \\) using the parallel - innermost and parallel - outermost rule yields</p>\n\n</div><br><br><b>Programming in C: TIFR CSE 2010 | Part B | Question: 31</b></p>",
          "type": "single",
          "options": [
            "<p>\\( w \\) and \\( 0 \\) respectively</p>",
            "<p>\\( 0 \\) and \\( 0 \\) respectively</p>",
            "<p>\\( w \\) and \\( w \\) respectively</p>",
            "<p>\\( w \\) and \\( 1 \\) respectively</p>",
            "<p>none of the above<br>\n\t&nbsp;</p>"
          ],
          "correct_answer": "<p>\\( w \\) and \\( 0 \\) respectively</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/26484/tifr-cse-2010-part-b-question-31\" target=\"_blank\">https://gateoverflow.in/26484/tifr-cse-2010-part-b-question-31</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"20923\"></a><div itemprop=\"text\"><p>Consider the class of recursive and iterative programs. Which of the following is false?</p>\n\n</div><br><br><b>Programming in C: TIFR CSE 2011 | Part B | Question: 38</b></p>",
          "type": "numeric",
          "options": [
            "<p>Recursive programs are more powerful than iterative programs.</p>",
            "<p>For every iterative program there is an equivalent recursive program.</p>",
            "<p>Recursive programs require dynamic memory management.</p>",
            "<p>Recursive programs do not terminate sometimes.</p>",
            "<p>Iterative programs and recursive programs are equally expressive.</p>"
          ],
          "correct_answer": "E",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/20923/tifr-cse-2011-part-b-question-38\" target=\"_blank\">https://gateoverflow.in/20923/tifr-cse-2011-part-b-question-38</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"97643\"></a><div itemprop=\"text\"><p>Consider the recursive function \\( \\mathsf{mc91} \\).</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int mc91(int n)\n{\n    print n\n    if (n &gt; 100) {\n            return n-10;\n    }\n    else {\n        return mc91(mc91(n+11));\n    }\n}\n</pre>\n\n<p>Let&nbsp;</p>\n\n<p>\\( \\mathsf{Out}=\\{n : \\text{ there is an } x \\in \\{0, 1, \\dots , 100 \\} \\text{ such that } n \\text{ is one of the integers printed by } \\mathsf{mc91}(x)\\} \\)</p>\n\n<p>Then which of the following is \\( \\mathsf{Out} \\)?</p>\n\n</div><br><br><b>Programming in C: TIFR CSE 2016 | Part B | Question: 5</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\{ n: &nbsp;- \\infty &lt; n \\leq 100 \\} \\)</p>",
            "<p>\\( \\{ n: &nbsp;0 \\leq n \\leq 101 \\} \\)</p>",
            "<p>\\( \\{ n: &nbsp;0 \\leq n \\leq 110 \\} \\)</p>",
            "<p>\\( \\{ n: &nbsp;0 \\leq n \\leq 111 \\} \\)</p>",
            "<p>\\( \\{ n: &nbsp;0 \\leq n &lt; + \\infty&nbsp;\\} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\{ n: &nbsp;0 \\leq n \\leq 111 \\} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/97643/tifr-cse-2016-part-b-question-5\" target=\"_blank\">https://gateoverflow.in/97643/tifr-cse-2016-part-b-question-5</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"179276\"></a><div itemprop=\"text\"><pre class=\"prettyprint lang-c_cpp\">Consider the following function definition.\nvoid greet(int n)\n{\n    if(n&gt;0)\n    {\n        printf(\"hello\");\n        greet(n-1);\n    }\n    printf(\"world\");\n}</pre>\n\n<p>If you run \\( \\textsf{greet(n)} \\) for some non-negative integer \\( \\textsf{n}, \\)&nbsp;what would it print?</p>\n\n</div><br><br><b>Programming in C: TIFR CSE 2018 | Part A | Question: 7</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\textsf{n} \\) times \"hello\", followed by \\( \\textsf{n+1} \\) times \"world\"</p>",
            "<p>\\( \\textsf{n} \\) times \"hello\", followed by \\( \\textsf{n} \\) times \"world\"</p>",
            "<p>\\( \\textsf{n} \\) times \"helloworld\"</p>",
            "<p>\\( \\textsf{n+1} \\) times \"helloworld\"</p>",
            "<p>\\( \\textsf{n} \\) times \"helloworld\", followed by \"world\"</p>"
          ],
          "correct_answer": "<p>\\( \\textsf{n} \\) times \"hello\", followed by \\( \\textsf{n+1} \\) times \"world\"</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/179276/tifr-cse-2018-part-a-question-7\" target=\"_blank\">https://gateoverflow.in/179276/tifr-cse-2018-part-a-question-7</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"358947\"></a><div itemprop=\"text\"><p>Consider the following pseudocode:</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">procedure HowManyDash(n)\n if n=0 then\n  print '-'\n else if n=1 then\n  print '-'\n else\n  HowManyDash(n-1)\n  HowManyDash(n-2)\n end if\nend procedure</pre>\n\n<p>How many ‘-’ does HowManyDash\\( (10) \\) print?</p>\n\n</div><br><br><b>Programming in C: TIFR CSE 2021 | Part B | Question: 6</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 9 \\)</p>",
            "<p>\\( 10 \\)</p>",
            "<p>\\( 55 \\)</p>",
            "<p>\\( 89 \\)</p>",
            "<p>\\( 1024 \\)</p>"
          ],
          "correct_answer": "<p>\\( 89 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/358947/tifr-cse-2021-part-b-question-6\" target=\"_blank\">https://gateoverflow.in/358947/tifr-cse-2021-part-b-question-6</a></p>"
        }
      ]
    }
  ]
});
