window.__examLoadCallback({
  "title": "Programming - Programming in C - Output",
  "duration": 14,
  "sections": [
    {
      "name": "Output",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"15906\"></a><div itemprop=\"text\"><p>What is the output of the following C program?</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include&lt;stdio.h&gt;    \nvoid main(void){\n    int shifty;\n    shifty=0570;\n    shifty=shifty&gt;&gt;4;\n    shifty=shifty&lt;&lt;6;\n    printf(\"The value  of shifty is %o \\n\",shifty);  \n}</pre>\n\n</div><br><br><b>Programming in C: ISRO CSE 2014 | Question: 32</b></p>",
          "type": "single",
          "options": [
            "<p>The value of shifty is 15c0</p>",
            "<p>The value of shifty is 4300</p>",
            "<p>The value of shifty is 5700</p>",
            "<p>The value of shifty is 2700</p>"
          ],
          "correct_answer": "<p>The value of shifty is 2700</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/15906/isro-cse-2014-question-32\" target=\"_blank\">https://gateoverflow.in/15906/isro-cse-2014-question-32</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"128754\"></a><div itemprop=\"text\"><p>What is the output of the following program?</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include&lt;stdio.h&gt;\nint tmp=20;\nmain()\n{\n  printf(\"%d\", tmp);\n  func();\n  printf(\"%d\", tmp);\n\n}\nfunc()\n{\n static int tmp=10;\n printf(\"%d\", tmp);\n}</pre>\n\n</div><br><br><b>Programming in C: ISRO CSE 2017 | Question: 64</b></p>",
          "type": "single",
          "options": [
            "<p>20 10 10</p>",
            "<p>20 10 20</p>",
            "<p>20 20 20</p>",
            "<p>10 10 10</p>"
          ],
          "correct_answer": "<p>20 10 20</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/128754/isro-cse-2017-question-64\" target=\"_blank\">https://gateoverflow.in/128754/isro-cse-2017-question-64</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"213587\"></a><div itemprop=\"text\"><p>Consider the following program</p>\n\n<pre class=\"prettyprint lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">{\n    int x=1;\n    printf(\"%d\",(*char(char*)&amp;x));\n}</pre>\n\n<p>Assuming required header files are included and if the machine in which this program is executed is little endian, then the output will be</p>\n\n</div><br><br><b>Programming in C: ISRO CSE 2018 | Question: 1</b></p>",
          "type": "numeric",
          "options": [
            "<p>0</p>",
            "<p>99999999</p>",
            "<p>1</p>",
            "<p>unpredictable</p>"
          ],
          "correct_answer": "X",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/213587/isro-cse-2018-question-1\" target=\"_blank\">https://gateoverflow.in/213587/isro-cse-2018-question-1</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"213528\"></a><div itemprop=\"text\"><p>What is the output of tho following program?</p>\n\n<pre class=\"prettyprint lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">main(){\n    int x=2, y=5;\n    if(x&lt;y) return (x=x+y);\n            else printf(\"z1\");\n    printf(\"z2\");\n}</pre>\n\n</div><br><br><b>Programming in C: ISRO CSE 2018 | Question: 60</b></p>",
          "type": "single",
          "options": [
            "<p>\\( z2 \\)</p>",
            "<p>\\( z1z2 \\)</p>",
            "<p>Compilation error</p>",
            "<p>None of these</p>"
          ],
          "correct_answer": "<p>None of these</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/213528/isro-cse-2018-question-60\" target=\"_blank\">https://gateoverflow.in/213528/isro-cse-2018-question-60</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"213580\"></a><div itemprop=\"text\">\n\n<p>A language with string manipulation facilities uses the following operations.</p>\n\n<p>head\\( (s) \\)- returns the first character of the string \\( s \\)</p>\n\n<p>tails\\( (s) \\)- returns all but the first character of the string \\( s \\)</p>\n\n<p>concat\\( (s1, s2) \\)- concatenates string \\( s1 \\) with \\( s2. \\)</p>\n\n<p>The output of concat(head\\( (s) \\), head(tail(tail\\( (s) \\)))), where s is \\( acbc \\) is:</p>\n\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp;</p></div><br><br><b>Programming in C: ISRO CSE 2018 | Question: 8</b></p>",
          "type": "single",
          "options": [
            "<p>ab</p>",
            "<p>ba</p>",
            "<p>ac</p>",
            "<p>aa</p>"
          ],
          "correct_answer": "<p>ab</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/213580/isro-cse-2018-question-8\" target=\"_blank\">https://gateoverflow.in/213580/isro-cse-2018-question-8</a></p>"
        }
      ]
    }
  ]
});
