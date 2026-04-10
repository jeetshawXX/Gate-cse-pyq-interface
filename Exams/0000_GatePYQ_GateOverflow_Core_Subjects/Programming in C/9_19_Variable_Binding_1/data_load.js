window.__examLoadCallback({
  "title": "Programming in C - Variable Binding",
  "duration": 3,
  "sections": [
    {
      "name": "Variable Binding",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"3467\"></a><div itemprop=\"text\"><p>Consider the program below in a hypothetical programming language which allows global variables and a choice of static or dynamic scoping.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int i;\nprogram main()\n{\n    i = 10;\n    call f();\n}\n\nprocedure f()\n{   \n    int i = 20;\n    call g ();\n}\nprocedure g()\n{   \n    print i;\n}</pre>\n\n<p>Let \\( x \\)&nbsp;be the value printed under static scoping and \\( y \\) be the value printed under dynamic scoping. Then, \\( x \\) and \\( y \\) are:</p>\n\n</div><br><br><b>GATE IT 2007 | Question: 34, UGCNET-Dec2012-III: 52</b></p>",
          "type": "single",
          "options": [
            "<p>\\( x=10, y=20 \\)</p>",
            "<p>\\( x=20, y=10 \\)</p>",
            "<p>\\( x=10, y=10 \\)</p>",
            "<p>\\( x=20, y=20 \\)</p>"
          ],
          "correct_answer": "<p>\\( x=10, y=20 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3467/gate-it-2007-question-34-ugcnet-dec2012-iii-52\" target=\"_blank\">https://gateoverflow.in/3467/gate-it-2007-question-34-ugcnet-dec2012-iii-52</a></p>"
        }
      ]
    }
  ]
});
