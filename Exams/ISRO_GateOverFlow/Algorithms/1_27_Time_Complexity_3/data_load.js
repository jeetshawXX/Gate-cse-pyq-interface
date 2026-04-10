window.__examLoadCallback({
  "title": "Algorithms - Time Complexity",
  "duration": 8,
  "sections": [
    {
      "name": "Time Complexity",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"56129\"></a><div itemprop=\"text\"><p>Consider the following segment of C-code:</p>\n\n<pre class=\"prettyprint lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int j, n;\nj = 1;\nwhile (j &lt;= n)\n    j = j * 2;</pre>\n\n<p>The number of comparisons made in the execution of the loop for any \\( n &gt; 0 \\) is:</p>\n\n</div><br><br><b>Algorithms: GATE CSE 2007 | Question: 15, ISRO2016</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\lceil \\log_2n \\rceil +1 \\)</p>",
            "<p>\\( n \\)</p>",
            "<p>\\( \\lceil \\log_2n \\rceil \\)</p>",
            "<p>\\( \\lfloor \\log_2n \\rfloor +1 \\)</p>"
          ],
          "correct_answer": "<p>\\( \\lfloor \\log_2n \\rfloor +1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/56129/gate-cse-2007-question-15-isro2016-26\" target=\"_blank\">https://gateoverflow.in/56129/gate-cse-2007-question-15-isro2016-26</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"55082\"></a><div itemprop=\"text\">\n<p>What is the time complexity for the following C module? Assume that \\( n&gt;0 \\).</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int module(int n)\n{\n    if (n == 1)\n        return 1;\n    else\n        return (n + module(n-1));\n}</pre>\n\n\n</div><br><br><b>Algorithms: ISRO CSE 2014 | Question: 67</b></p>",
          "type": "single",
          "options": [
            "<p>\\( O(n) \\)</p>",
            "<p>\\( O(\\log n) \\)</p>",
            "<p>\\( O(n^2) \\)</p>",
            "<p>\\( O(n!) \\)</p>"
          ],
          "correct_answer": "<p>\\( O(n) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/55082/isro-cse-2014-question-67\" target=\"_blank\">https://gateoverflow.in/55082/isro-cse-2014-question-67</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"331364\"></a><div itemprop=\"text\"><p>What is the complexity of the following code?</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">sum=0;\n    for(i=1;i&lt;=n;i*=2)\n         for(j=1;j&lt;=n;j++)\n            sum++;</pre>\n\n<p>Which of the following is not a valid string?</p>\n\n</div><br><br><b>Algorithms: ISRO CSE 2020 | Question: 36</b></p>",
          "type": "numeric",
          "options": [
            "<p>\\( O(n^2) \\)</p>",
            "<p>\\( O(n\\log\\ n) \\)</p>",
            "<p>\\( O(n) \\)</p>",
            "<p>\\( O(n\\log\\ n\\log\\ n) \\)</p>"
          ],
          "correct_answer": "X",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/331364/isro-cse-2020-question-36\" target=\"_blank\">https://gateoverflow.in/331364/isro-cse-2020-question-36</a></p>"
        }
      ]
    }
  ]
});
