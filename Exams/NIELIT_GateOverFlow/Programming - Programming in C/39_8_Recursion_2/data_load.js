window.__examLoadCallback({
  "title": "Programming - Programming in C - Recursion",
  "duration": 6,
  "sections": [
    {
      "name": "Recursion",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"378731\"></a><div itemprop=\"text\"><p>Consider the following \\( \\text{C} \\) function :</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int f(int n) {\n    static int i = 1;\n    if (n &gt; = 5) return n;\n    n=n + i;i++;\n    return f(n); }</pre>\n\n<p>The value returned by \\( \\text{f}(1) \\) is :</p>\n\n</div><br><br><b>Programming in C: NIELIT 2021 Dec Scientist B</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 5 \\)</p>",
            "<p>\\( 6 \\)</p>",
            "<p>\\( 7 \\)</p>",
            "<p>\\( 8 \\)</p>"
          ],
          "correct_answer": "<p>\\( 7 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/378731/nielit-2021-dec-scientist-b-section-b-32\" target=\"_blank\">https://gateoverflow.in/378731/nielit-2021-dec-scientist-b-section-b-32</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"366945\"></a><div itemprop=\"text\"><p>What is the value of \\( f(4) \\) using the following \\( C \\) code:</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int f(int k){\n    if(k&lt;3)\n        return k;\n    else\n        return f(k-1) * f(k-2) + f(k-3);\n}</pre>\n\n</div><br><br><b>Programming in C: NIELIT 2021 Dec Scientist B</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 5 \\)</p>",
            "<p>\\( 6 \\)</p>",
            "<p>\\( 7 \\)</p>",
            "<p>\\( 8 \\)</p>"
          ],
          "correct_answer": "<p>\\( 5 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/366945/nielit-2021-dec-scientist-b-section-b-72\" target=\"_blank\">https://gateoverflow.in/366945/nielit-2021-dec-scientist-b-section-b-72</a></p>"
        }
      ]
    }
  ]
});
