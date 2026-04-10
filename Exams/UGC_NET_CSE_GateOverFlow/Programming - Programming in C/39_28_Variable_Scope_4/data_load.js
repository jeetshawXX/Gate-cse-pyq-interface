window.__examLoadCallback({
  "title": "Programming - Programming in C - Variable Scope",
  "duration": 11,
  "sections": [
    {
      "name": "Variable Scope",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"155185\"></a><div itemprop=\"text\"><p>Which one of the following describes correctly a static variable?</p>\n\n</div><br><br><b>Programming in C: UGC NET CSE | December 2008 | Part 2 | Question: 25</b></p>",
          "type": "numeric",
          "options": [
            "<p>It cannot be initialized</p>",
            "<p>It is initialized once at the commencement of execution and cannot be changed at run time</p>",
            "<p>It retains its value during the life of the program</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "Q-Q",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/155185/ugc-net-cse-december-2008-part-2-question-25\" target=\"_blank\">https://gateoverflow.in/155185/ugc-net-cse-december-2008-part-2-question-25</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"335452\"></a><div itemprop=\"text\"><p>After \\( 3 \\) calls of the \\( c \\) function bug ( ) below, the values of \\( i \\) and \\( j \\) will be :</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int j = 1;\nbug ()\n{\n    static int i = 0; int j = 0;\n    i++; j++;\n    return (i);\n}</pre>\n\n</div><br><br><b>Programming in C: UGC NET CSE | June 2005 | Part 2 | Question: 11</b></p>",
          "type": "numeric",
          "options": [
            "<p>\\( i = 0, j = 0 \\)</p>",
            "<p>\\( i = 3, j = 3 \\)</p>",
            "<p>\\( i = 3, j = 0 \\)</p>",
            "<p>\\( i = 3, j = 1 \\)</p>"
          ],
          "correct_answer": "Q-Q",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/335452/ugc-net-cse-june-2005-part-2-question-11\" target=\"_blank\">https://gateoverflow.in/335452/ugc-net-cse-june-2005-part-2-question-11</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"335451\"></a><div itemprop=\"text\"><p>Find the output of the following \\( “C” \\) code :</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">Main()\n{ int x=20, y=35;\n      x=y++ + x++;\n      y=++y + ++x;\n    printf (“%d, %d\\n”, x, y);\n}    \n   </pre>\n\n</div><br><br><b>Programming in C: UGC NET CSE | June 2005 | Part 2 | Question: 12</b></p>",
          "type": "numeric",
          "options": [
            "<p>\\( 55, 93 \\)</p>",
            "<p>\\( 53, 97 \\)</p>",
            "<p>\\( 56, 95 \\)</p>",
            "<p>\\( 57, 94 \\)</p>"
          ],
          "correct_answer": "Q-Q",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/335451/ugc-net-cse-june-2005-part-2-question-12\" target=\"_blank\">https://gateoverflow.in/335451/ugc-net-cse-june-2005-part-2-question-12</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"335448\"></a><div itemprop=\"text\"><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">Main()\n{ char *str=\"abcde\";\nprintf(\"%c\",*str);\nprintf(\"%c\",*str++);\nprintf(\"%c\",*(str++));\nprintf(\"%s\",str);\n}</pre>\n\n<p>The output of the above \\( ‘C’ \\) code will be :</p>\n\n</div><br><br><b>Programming in C: UGC NET CSE | June 2005 | Part 2 | Question: 15</b></p>",
          "type": "numeric",
          "options": [
            "<p>\\( \\text{a a c b c d e} \\)</p>",
            "<p>\\( \\text{a a c c c d e} \\)</p>",
            "<p>\\( \\text{a a b c d e} \\)</p>",
            "<p>None of these</p>"
          ],
          "correct_answer": "Q-Q",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/335448/ugc-net-cse-june-2005-part-2-question-15\" target=\"_blank\">https://gateoverflow.in/335448/ugc-net-cse-june-2005-part-2-question-15</a></p>"
        }
      ]
    }
  ]
});
