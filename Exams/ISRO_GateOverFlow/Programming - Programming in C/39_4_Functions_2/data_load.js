window.__examLoadCallback({
  "title": "Programming - Programming in C - Functions",
  "duration": 6,
  "sections": [
    {
      "name": "Functions",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"331379\"></a><div itemprop=\"text\"><p>In the following procedure</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">Integer procedure P(X,Y);\nInteger X,Y;\nvalue x;\nbegin\n      K=5;\n      L=8;\n      P=x+y;\nend\n</pre>\n\n<p>\\( X \\) is called by value and \\( Y \\) is called by name. If the procedure were invoked by the following program fragment</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">K=0;\nL=0;\nZ=P(K,L);</pre>\n\n<p>then the value of \\( Z \\) will be set equal to</p>\n\n</div><br><br><b>Programming in C: ISRO CSE 2020 | Question: 78</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 5 \\)</p>",
            "<p>\\( 8 \\)</p>",
            "<p>\\( 13 \\)</p>",
            "<p>\\( 0 \\)</p>"
          ],
          "correct_answer": "<p>\\( 8 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/331379/isro-cse-2020-question-78\" target=\"_blank\">https://gateoverflow.in/331379/isro-cse-2020-question-78</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"52131\"></a><div itemprop=\"text\"><p>The following program</p>\n\n<pre class=\"prettyprint lang-c_cpp\">main()\n{\n    inc(); inc(); inc();\n}\ninc()\n{\n    static int x;\n    printf(\"%d\", ++x);\n}</pre>\n\n</div><br><br><b>Programming in C: ISRO2015</b></p>",
          "type": "single",
          "options": [
            "<p>prints 012</p>",
            "<p>prints 123</p>",
            "<p>prints 3 consecutive, but unpredictable numbers</p>",
            "<p>prints 111</p>"
          ],
          "correct_answer": "<p>prints 123</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/52131/isro2015-70\" target=\"_blank\">https://gateoverflow.in/52131/isro2015-70</a></p>"
        }
      ]
    }
  ]
});
