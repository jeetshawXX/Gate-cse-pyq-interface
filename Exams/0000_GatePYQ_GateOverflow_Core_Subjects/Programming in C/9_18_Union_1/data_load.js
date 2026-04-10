window.__examLoadCallback({
  "title": "Programming in C - Union",
  "duration": 3,
  "sections": [
    {
      "name": "Union",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"640\"></a><div itemprop=\"text\"><p>Consider the following C declaration:</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">struct {\n    short x[5];  \n    union { \n        float y; \n        long z; \n    } u;\n )t;</pre>\n\n<p>Assume that the objects of the type short, float and long occupy \\( 2 \\) bytes, \\( 4 \\) bytes and \\( 8 \\) bytes, respectively. The memory requirement for variable \\( t \\), ignoring alignment consideration, is:</p>\n\n</div><br><br><b>GATE CSE 2000 | Question: 1.17, ISRO2015-79</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 22 \\) bytes</p>",
            "<p>\\( 14 \\) bytes</p>",
            "<p>\\( 18 \\) bytes</p>",
            "<p>\\( 10 \\) bytes</p>"
          ],
          "correct_answer": "<p>\\( 18 \\) bytes</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/640/gate-cse-2000-question-1-17-isro2015-79\" target=\"_blank\">https://gateoverflow.in/640/gate-cse-2000-question-1-17-isro2015-79</a></p>"
        }
      ]
    }
  ]
});
