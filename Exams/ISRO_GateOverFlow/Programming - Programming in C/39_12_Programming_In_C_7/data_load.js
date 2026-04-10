window.__examLoadCallback({
  "title": "Programming - Programming in C - Programming In C",
  "duration": 19,
  "sections": [
    {
      "name": "Programming In C",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"50148\"></a><div itemprop=\"text\"><p>In C, what is the effect of a negative number in a field width specifier?</p>\n\n</div><br><br><b>Programming in C: ISRO CSE 2008 | Question: 80</b></p>",
          "type": "single",
          "options": [
            "<p>the values are displayed right justified</p>",
            "<p>the values are displayed centered</p>",
            "<p>the values are displayed left justified</p>",
            "<p>the values are displayed as negative numbers</p>"
          ],
          "correct_answer": "<p>the values are displayed left justified</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/50148/isro-cse-2008-question-80\" target=\"_blank\">https://gateoverflow.in/50148/isro-cse-2008-question-80</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"53362\"></a><div itemprop=\"text\"><p>The following three 'C' language statements is equivalent to which single statement?</p>\n\n<pre class=\"prettyprint lang-c_cpp\">y=y+1;\nz=x+y;\nx=x+1</pre>\n\n</div><br><br><b>Programming in C: ISRO CSE 2014 | Question: 47</b></p>",
          "type": "single",
          "options": [
            "<p>z = x + y + 2;</p>",
            "<p>z = (x++) + (++y);</p>",
            "<p>z = (x++) + (y++);</p>",
            "<p>z = (x++) + (++y) + 1;</p>"
          ],
          "correct_answer": "<p>z = (x++) + (++y);</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/53362/isro-cse-2014-question-47\" target=\"_blank\">https://gateoverflow.in/53362/isro-cse-2014-question-47</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"55534\"></a><div itemprop=\"text\">\n<p>Which one of the following is correct about the statements given below?</p>\n\n<ol style=\"list-style-type: upper-roman;\"><li>All function calls are resolved at compile time in C lang</li>\n\t<li>All&nbsp;<span style=\"line-height: 20.8px;\">function calls are resolved at compile time in C++ lang</span></li>\n</ol>\n\n\n</div><br><br><b>Programming in C: ISRO CSE 2016 | Question: 79</b></p>",
          "type": "single",
          "options": [
            "<p><span style=\"line-height: 20.8px;\">Only II is correct</span></p>",
            "<p><span style=\"line-height: 20.8px;\">Both I and II are&nbsp;correct</span></p>",
            "<p><span style=\"line-height: 20.8px;\">Only I is correct</span></p>",
            "<p><span style=\"line-height: 20.8px;\">Both I and II are</span><span style=\"line-height: 20.8px;\">&nbsp;incorrect</span></p>"
          ],
          "correct_answer": "<p><span style=\"line-height: 20.8px;\">Both I and II are</span><span style=\"line-height: 20.8px;\">&nbsp;incorrect</span></p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/55534/isro-cse-2016-question-79\" target=\"_blank\">https://gateoverflow.in/55534/isro-cse-2016-question-79</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"213570\"></a><div itemprop=\"text\"><p>Consider the following C code segment:</p>\n\n<pre class=\"prettyprint lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt;\nmain()\n{\n    int i, j, x;\n    scanf(\"%d\", &amp;x);\n    i=1; j=1;\n    while (i&lt;10) {\n            j =j*i;\n            i= i+1;\n            if(i==x) break;\n        }\n}</pre>\n\n<p>For the program fragment above, which of the following statements about the variables i and j must be true after execution of this program? [ !(exclamation) sign denotes factorial in the answer]</p>\n\n</div><br><br><b>Programming in C: ISRO CSE 2018 | Question: 18</b></p>",
          "type": "single",
          "options": [
            "<p>\\( (j=(x-1)!) \\) \\( \\wedge \\) $(i\\[ \\geq x \\])$</p>",
            "<p>\\( (j=9!) \\) \\( \\wedge \\)&nbsp; \\( (j=10) \\)</p>",
            "<p>\\( ((j=10!) \\) \\( \\wedge \\)&nbsp;\\( (i=10)) \\) \\( \\vee \\) \\( ((j=(x-1)!) \\) \\( \\wedge \\) \\( (i=x)) \\)</p>",
            "<p>\\( (j=9!) \\) $\\wedge\\[  (i\\geqslant \\]10\\( ))&nbsp; \\)\\vee\\( &nbsp; \\)((j=(x-1)!) \\[ \\wedge \\] (i=x))$</p>"
          ],
          "correct_answer": "<p>\\( (j=9!) \\) $\\wedge\\[  (i\\geqslant \\]10\\( ))&nbsp; \\)\\vee\\( &nbsp; \\)((j=(x-1)!) \\[ \\wedge \\] (i=x))$</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/213570/isro-cse-2018-question-18\" target=\"_blank\">https://gateoverflow.in/213570/isro-cse-2018-question-18</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"213518\"></a><div itemprop=\"text\"><p>Consider the following C program:</p>\n\n<pre class=\"prettyprint lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">main()\n{\nfloat sum= 0.0, j=1.0,i=2.0;\nwhile(i/j&gt;0.001){\n    j=j+1;\n    sum=sum+i/j;\n    printf(\"%f/n\", sum);\n  }\n}</pre>\n\n</div><br><br><b>Programming in C: ISRO CSE 2018 | Question: 70</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 0 \\) - \\( 9 \\) lines of output</p>",
            "<p>\\( 10 \\) - \\( 19 \\) lines out output</p>",
            "<p>\\( 20 \\) -&nbsp;\\( 29 \\) lines of output</p>",
            "<p>More than \\( 29 \\) lines of output</p>"
          ],
          "correct_answer": "<p>More than \\( 29 \\) lines of output</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/213518/isro-cse-2018-question-70\" target=\"_blank\">https://gateoverflow.in/213518/isro-cse-2018-question-70</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"19445\"></a><div itemprop=\"text\"><p>Consider the following program fragment<br>\n&nbsp;</p>\n\n<pre class=\"prettyprint lang-c_cpp\">  if(a &gt; b)  if(b &gt; c)     s1;  else s2;</pre>\n\n<p><br>\n<br>\ns2 will be executed if</p>\n\n</div><br><br><b>Programming in C: ISRO2015</b></p>",
          "type": "single",
          "options": [
            "<p>a &lt;= b</p>",
            "<p>b &gt; c</p>",
            "<p>b &gt;= c and a &lt;= b</p>",
            "<p>a &gt; b and b &lt;= c</p>"
          ],
          "correct_answer": "<p>a &gt; b and b &lt;= c</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/19445/isro2015-68\" target=\"_blank\">https://gateoverflow.in/19445/isro2015-68</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"19791\"></a><div itemprop=\"text\">\n<p>Which of the following has the compilation error in C?</p>\n\n\n</div><br><br><b>Programming in C: ISRO2015</b></p>",
          "type": "numeric",
          "options": [
            "<p>int n = 17;</p>",
            "<p>char c = 99;</p>",
            "<p>float f = (float)99.32;</p>",
            "<p>#include &lt;stdio.h&gt;</p>"
          ],
          "correct_answer": "X",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/19791/isro2015-74\" target=\"_blank\">https://gateoverflow.in/19791/isro2015-74</a></p>"
        }
      ]
    }
  ]
});
