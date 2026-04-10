window.__examLoadCallback({
  "title": "Algorithms - Recursion",
  "duration": 11,
  "sections": [
    {
      "name": "Recursion",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"2621\"></a><div itemprop=\"text\"><p>A language with string manipulation facilities uses the following operations</p>\n\n<pre class=\"prettyprint lang-c_cpp\"><strong>head(s)</strong>: first character of a string\n<strong>tail(s)</strong>: all but exclude the first character of a string</pre>\n\n<pre class=\"prettyprint lang-c_cpp\">concat(s1, s2): s1s2</pre>\n\n<p>For the string \"\\( acbc \\)\" what will be the output of</p>\n\n<pre class=\"prettyprint lang-c_cpp\">concat(head(s), head(tail(tail(s))))</pre>\n\n</div><br><br><b>GATE CSE 1995 | Question: 2.9</b></p>",
          "type": "single",
          "options": [
            "<p>\\( ac \\)</p>",
            "<p>\\( bc \\)</p>",
            "<p>\\( ab \\)</p>",
            "<p>\\( cc \\)</p>"
          ],
          "correct_answer": "<p>\\( ab \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2621/gate-cse-1995-question-2-9\" target=\"_blank\">https://gateoverflow.in/2621/gate-cse-1995-question-2-9</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"1242\"></a><div itemprop=\"text\"><p>In the following C function, let \\( n \\geq m \\).</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int gcd(n,m)  {\n    if (n%m == 0) return m;\n    n = n%m;\n    return gcd(m,n);\n}  </pre>\n\n<p>How many recursive calls are made by this function?</p>\n\n</div><br><br><b>GATE CSE 2007 | Question: 44</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\Theta(\\log_2n) \\)</p>",
            "<p>\\( \\Omega(n) \\)</p>",
            "<p>\\( \\Theta(\\log_2\\log_2n) \\)</p>",
            "<p>\\( \\Theta(\\sqrt{n}) \\)</p>"
          ],
          "correct_answer": "<p>\\( \\Theta(\\log_2n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1242/gate-cse-2007-question-44\" target=\"_blank\">https://gateoverflow.in/1242/gate-cse-2007-question-44</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"204120\"></a><div itemprop=\"text\"><p>Consider the following program written in pseudo-code. Assume that \\( x \\) and \\( y \\) are integers.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">Count (x, y) {\n    if (y !=1 ) {\n        if (x !=1) {\n            print(\"*\");\n            Count (x/2, y);\n        }\n        else {\n            y=y-1;\n            Count (1024, y);\n        }\n    }\n}</pre>\n\n<p>The number of times that the \\( print \\) statement is executed by the call \\( Count(1024, 1024) \\) is _____</p></div><br><br><b>GATE CSE 2018 | Question: 45</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10230",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/204120/gate-cse-2018-question-45\" target=\"_blank\">https://gateoverflow.in/204120/gate-cse-2018-question-45</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"357488\"></a><div itemprop=\"text\"><p>Consider the following \\( \\text{ANSI C} \\) program</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt;\nint foo(int x, int y, int q)&nbsp;\n    {\n        if ((x&lt;=0) &amp;&amp; (y&lt;=0))\n        return q;\n        if (x&lt;=0)\n        return foo(x, y-q, q);\n        if (y&lt;=0)\n        return foo(x-q, y, q);\n        return foo(x, y-q, q) + foo(x-q, y, q);\n    }\nint main( )\n{\n    int r = foo(15, 15, 10);\n    printf(“%d”, r);\n    return 0;\n}</pre>\n\n<p>The output of the program upon execution is _________</p></div><br><br><b>GATE CSE 2021 Set 2 | Question: 49</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "60:60",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/357488/gate-cse-2021-set-2-question-49\" target=\"_blank\">https://gateoverflow.in/357488/gate-cse-2021-set-2-question-49</a></p>"
        }
      ]
    }
  ]
});
