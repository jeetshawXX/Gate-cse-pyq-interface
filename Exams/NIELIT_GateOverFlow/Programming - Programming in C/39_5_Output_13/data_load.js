window.__examLoadCallback({
  "title": "Programming - Programming in C - Output",
  "duration": 36,
  "sections": [
    {
      "name": "Output",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"336525\"></a><div itemprop=\"text\"><p>What will be output if you will compile and execute the following C code?&nbsp;</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">void main() \n{\nprintf(\"%d\",sizeof(5.2));\n}</pre>\n\n</div><br><br><b>Programming in C: NIELIT 2016 DEC Scientist B (CS)</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 4 \\)</p>",
            "<p>\\( 8 \\)</p>",
            "<p>\\( 2 \\)</p>",
            "<p>\\( 16 \\)</p>"
          ],
          "correct_answer": "<p>\\( 8 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336525/nielit-2016-dec-scientist-b-cs-section-b-13\" target=\"_blank\">https://gateoverflow.in/336525/nielit-2016-dec-scientist-b-cs-section-b-13</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"336530\"></a><div itemprop=\"text\"><p>What will be output if you will compile and execute the following C code?</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">void main(){\nchar c=125;\nc=c+10;\nprintf(\"%d\",c);\n}</pre>\n\n</div><br><br><b>Programming in C: NIELIT 2016 DEC Scientist B (CS)</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 135 \\)</p>",
            "<p>\\( 115 \\)</p>",
            "<p>\\( -121 \\)</p>",
            "<p>\\( -8 \\)</p>"
          ],
          "correct_answer": "<p>\\( -121 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336530/nielit-2016-dec-scientist-b-cs-section-b-8\" target=\"_blank\">https://gateoverflow.in/336530/nielit-2016-dec-scientist-b-cs-section-b-8</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"336726\"></a><div itemprop=\"text\"><p>Output of the following loop is</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">for(putchar('c');putchar\n('a');putchar('r'))\nputchar('t');</pre>\n\n\n\n<p>&nbsp;</p></div><br><br><b>Programming in C: NIELIT 2016 MAR Scientist B</b></p>",
          "type": "single",
          "options": [
            "<p>a syntax error.</p>",
            "<p>cartrt.</p>",
            "<p>catrat.</p>",
            "<p>catratratratrat...</p>"
          ],
          "correct_answer": "<p>catratratratrat...</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336726/nielit-2016-mar-scientist-b-section-c-15\" target=\"_blank\">https://gateoverflow.in/336726/nielit-2016-mar-scientist-b-section-c-15</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"336403\"></a><div itemprop=\"text\"><p>Output of following program</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include&lt;stdio.h&gt; \nint main() \n{ \nint i=5; \nprintf(\"%d %d %d\", i++,i++,i++); \nreturn 0; \n}</pre>\n\n</div><br><br><b>Programming in C: NIELIT 2017 July Scientist B (IT)</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 7\\:6\\:5 \\)</p>",
            "<p>\\( 5\\:6\\:7 \\)</p>",
            "<p>\\( 7\\:7\\:7 \\)</p>",
            "<p>Compiler Dependent</p>"
          ],
          "correct_answer": "<p>Compiler Dependent</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336403/nielit-2017-july-scientist-b-it-section-b-32\" target=\"_blank\">https://gateoverflow.in/336403/nielit-2017-july-scientist-b-it-section-b-32</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"336402\"></a><div itemprop=\"text\"><p>Output of following program?&nbsp;</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include&lt;stdio.h&gt;\nvoid dynamic(int s,...) \n{ \nprintf(\"%d\",s); \n} \nint main() \n{ \ndynamic(2,4,6,8); \ndynamic(3,6,9); \nreturn 0; \n}</pre>\n\n</div><br><br><b>Programming in C: NIELIT 2017 July Scientist B (IT)</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2\\:3 \\)</p>",
            "<p>Compiler Error</p>",
            "<p>\\( 4\\:3 \\)</p>",
            "<p>\\( 3\\:2 \\)</p>"
          ],
          "correct_answer": "<p>\\( 2\\:3 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336402/nielit-2017-july-scientist-b-it-section-b-33\" target=\"_blank\">https://gateoverflow.in/336402/nielit-2017-july-scientist-b-it-section-b-33</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"336399\"></a><div itemprop=\"text\"><p>Assume that size of an integer is \\( 32 \\) bit. What is the output of following ANSI C program?&nbsp;</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include&lt;stdio.h&gt; \nstruct st \n{ \nint x; \nstatic int y;\n};\nint main()\n{\nprintf(%d\",sizeof(struct st));\nreturn 0;\n}</pre>\n\n</div><br><br><b>Programming in C: NIELIT 2017 July Scientist B (IT)</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 4 \\)</p>",
            "<p>\\( 8 \\)</p>",
            "<p>Compiler Error</p>",
            "<p>Runtime Error</p>"
          ],
          "correct_answer": "<p>Compiler Error</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336399/nielit-2017-july-scientist-b-it-section-b-36\" target=\"_blank\">https://gateoverflow.in/336399/nielit-2017-july-scientist-b-it-section-b-36</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"336397\"></a><div itemprop=\"text\"><p>Output of the following program?</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include&lt;stdio.h&gt;\nstruct st \n{ \n    int x; \n    struct st next; \n}; \nint main() \n{ \n    struct st temp; \n    temp.x=10; \n    temp.next=temp;\n    printf(\"%d\",temp.next,x); \n    return 0; \n}</pre>\n\n</div><br><br><b>Programming in C: NIELIT 2017 July Scientist B (IT)</b></p>",
          "type": "single",
          "options": [
            "<p>Compiler Error</p>",
            "<p>\\( 10 \\)</p>",
            "<p>Runtime Error</p>",
            "<p>Garbage Value</p>"
          ],
          "correct_answer": "<p>Compiler Error</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336397/nielit-2017-july-scientist-b-it-section-b-38\" target=\"_blank\">https://gateoverflow.in/336397/nielit-2017-july-scientist-b-it-section-b-38</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"336914\"></a><div itemprop=\"text\"><p>The question is based on the following program fragment.</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">f(intY[10],int x){\n\nint u,j,k;\n\ni=0;j=9;\n\ndo{\n\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; k=(i+j)/2;\n\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if(Y[k] &lt; x) i=k; else j=k;\n\n&nbsp; &nbsp; &nbsp; } while(Y[k]!=x) &amp;&amp; (i&lt;j));\n\n&nbsp; &nbsp; &nbsp; &nbsp;if (Y[k]==x) printf(“x is in the array.”);\n\n&nbsp; &nbsp; &nbsp; &nbsp; else printf(“x is not in the array.”);\n\n}</pre>\n\n<p>On which of the following contents of ‘Y’ and ‘x’ does the program fail?</p>\n\n</div><br><br><b>Programming in C: NIELIT 2017 OCT Scientific Assistant A (CS)</b></p>",
          "type": "single",
          "options": [
            "<p>\\( Y \\) is \\( [1\\;2\\;3\\;4\\;5\\;6\\;7\\;8\\;9\\;10] \\) and \\( x&lt;10 \\)</p>",
            "<p>\\( Y \\) is \\( [1\\;3\\;5\\;7\\;9\\;11\\;13\\;15\\;17\\;19] \\) and \\( x&lt;1 \\)</p>",
            "<p>\\( Y \\) is \\( [2\\;2\\;2\\;2\\;2\\;2\\;2\\;2\\;2\\;2] \\) and \\( x&gt;2 \\)</p>",
            "<p>\\( Y \\) is \\( [2\\;4\\;6\\;8\\;10\\;12\\;14\\;16\\;18\\;20] \\) and \\( 2&lt;x&lt;20 \\) and \\( ’x’ \\) is even&nbsp;</p>"
          ],
          "correct_answer": "<p>\\( Y \\) is \\( [2\\;2\\;2\\;2\\;2\\;2\\;2\\;2\\;2\\;2] \\) and \\( x&gt;2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336914/nielit-2017-oct-scientific-assistant-a-cs-section-b-6\" target=\"_blank\">https://gateoverflow.in/336914/nielit-2017-oct-scientific-assistant-a-cs-section-b-6</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"336921\"></a><div itemprop=\"text\"><p>What will be the output of following?</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">main()\n\n{\n\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Static int a = 3;\n\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Printf(“%d”,a--);\n\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;If(a)\n\n&nbsp; &nbsp; &nbsp; &nbsp;  main();\n\n}</pre>\n\n</div><br><br><b>Programming in C: NIELIT 2017 OCT Scientific Assistant A (CS)</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 3 \\)</p>",
            "<p>\\( 3\\;2\\;1 \\)</p>",
            "<p>\\( 3\\;3\\;3 \\)</p>",
            "<p>Program will fall in continuous loop and print \\( 3 \\)</p>"
          ],
          "correct_answer": "<p>\\( 3\\;2\\;1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336921/nielit-2017-oct-scientific-assistant-a-cs-section-c-11\" target=\"_blank\">https://gateoverflow.in/336921/nielit-2017-oct-scientific-assistant-a-cs-section-c-11</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"336929\"></a><div itemprop=\"text\"><p>The following program fragment prints</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int i = 5;\ndo { putchar(i+100); printf(“%d”, i--;) }\nwhile(i);</pre>\n\n</div><br><br><b>Programming in C: NIELIT 2017 OCT Scientific Assistant A (CS)</b></p>",
          "type": "single",
          "options": [
            "<p>i5h4g3f2el</p>",
            "<p>14h3g2f1e0</p>",
            "<p>An error message</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>i5h4g3f2el</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336929/nielit-2017-oct-scientific-assistant-a-cs-section-c-3\" target=\"_blank\">https://gateoverflow.in/336929/nielit-2017-oct-scientific-assistant-a-cs-section-c-3</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"336984\"></a><div itemprop=\"text\"><p>What will be the output of following?</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">main()\n\n{\n\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Static int a = 3;\n\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Printf(“%d”,a--);\n\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;If(a)\n\n&nbsp; &nbsp; &nbsp; &nbsp;  main();\n\n}</pre>\n\n</div><br><br><b>Programming in C: NIELIT 2017 OCT Scientific Assistant A (IT)</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 3 \\)</p>",
            "<p>\\( 3\\;2\\;1 \\)</p>",
            "<p>\\( 3\\;3\\;3 \\)</p>",
            "<p>Program will fall in continuous loop and print \\( 3 \\)</p>"
          ],
          "correct_answer": "<p>\\( 3\\;2\\;1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336984/nielit-2017-oct-scientific-assistant-a-it-section-b-1\" target=\"_blank\">https://gateoverflow.in/336984/nielit-2017-oct-scientific-assistant-a-it-section-b-1</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"336996\"></a><div itemprop=\"text\"><p>The question is based on the following program fragment.</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">f(intY[10],int x){\n\nint u,j,k;\n\ni=0;j=9;\n\ndo{\n\n            k=(i+j)/2;\n\n            if(Y[k] &lt; x) i=k; else j=k;\n\n      } while((Y[k]!=x) &amp;&amp; (i&lt;j));\n\n       if (Y[k]==x) printf(“x is in the array.”);\n\n        else printf(“x is not in the array.”);\n\n}</pre>\n\n<p>On which of the following contents of ‘Y’ and ‘x’ does the program fail?</p>\n\n</div><br><br><b>Programming in C: NIELIT 2017 OCT Scientific Assistant A (IT)</b></p>",
          "type": "single",
          "options": [
            "<p>\\( Y \\) is \\( [1\\;2\\;3\\;4\\;5\\;6\\;7\\;8\\;9\\;10] \\) and \\( x&lt;10 \\)</p>",
            "<p>\\( Y \\) is \\( [1\\;3\\;5\\;7\\;9\\;11\\;13\\;15\\;17\\;19] \\) and \\( x&lt;1 \\)</p>",
            "<p>\\( Y \\) is \\( [2\\;2\\;2\\;2\\;2\\;2\\;2\\;2\\;2\\;2] \\) and \\( x&gt;2 \\)</p>",
            "<p>\\( Y \\) is \\( [2\\;4\\;6\\;8\\;10\\;12\\;14\\;16\\;18\\;20] \\) and \\( 2&lt;x&lt;20 \\) and \\( ’x’ \\) is even&nbsp;</p>"
          ],
          "correct_answer": "<p>\\( Y \\) is \\( [2\\;2\\;2\\;2\\;2\\;2\\;2\\;2\\;2\\;2] \\) and \\( x&gt;2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336996/nielit-2017-oct-scientific-assistant-a-it-section-c-1\" target=\"_blank\">https://gateoverflow.in/336996/nielit-2017-oct-scientific-assistant-a-it-section-c-1</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"378742\"></a><div itemprop=\"text\"><p>What will be the output of the following \\( \\text{‘C’} \\) program?</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">void count(int n) \n{\nstatic int d = 1;\nprintf(\" %d\", n); \nprintf(\" %d\", d);\nd++;\nif (n&gt;1) count (n - 1);\nprintf(\" %d\", d);\n}\nvoid main()\n{\ncount(3);\n}</pre>\n\n</div><br><br><b>Programming in C: NIELIT 2021 Dec Scientist B</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 3\\;\\;1\\;\\;2\\;\\;2\\;\\;1\\;\\;3\\;\\;4\\;\\;4\\;\\;4 \\)</p>",
            "<p>\\( 3\\;\\;1\\;\\;2\\;\\;1\\;\\;1\\;\\;1\\;\\;2\\;\\;2\\;\\;2 \\)</p>",
            "<p>\\( 3\\;\\;1\\;\\;2\\;\\;2\\;\\;1\\;\\;3\\;\\;4 \\)</p>",
            "<p>\\( 3\\;\\;1\\;\\;2\\;\\;1\\;\\;1\\;\\;1\\;\\;2 \\)</p>"
          ],
          "correct_answer": "<p>\\( 3\\;\\;1\\;\\;2\\;\\;2\\;\\;1\\;\\;3\\;\\;4\\;\\;4\\;\\;4 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/378742/nielit-2021-dec-scientist-b-section-b-21\" target=\"_blank\">https://gateoverflow.in/378742/nielit-2021-dec-scientist-b-section-b-21</a></p>"
        }
      ]
    }
  ]
});
