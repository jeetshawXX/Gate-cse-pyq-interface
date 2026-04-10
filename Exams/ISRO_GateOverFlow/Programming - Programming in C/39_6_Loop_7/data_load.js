window.__examLoadCallback({
  "title": "Programming - Programming in C - Loop",
  "duration": 19,
  "sections": [
    {
      "name": "Loop",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"52841\"></a><div itemprop=\"text\"><p>What is the output of the following C code?</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include &lt;stdio.h&gt;\n\nint main()\n{\n    int index;\n    for(index=1; index&lt;=5; index++)\n    {\n        printf(\"%d\", index);\n        if (index==3)\n            continue;\n    }\n}</pre>\n\n</div><br><br><b>Programming in C: ISRO CSE 2011 | Question: 63</b></p>",
          "type": "single",
          "options": [
            "<p>1245</p>",
            "<p>12345</p>",
            "<p>12245</p>",
            "<p>12354</p>"
          ],
          "correct_answer": "<p>12345</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/52841/isro-cse-2011-question-63\" target=\"_blank\">https://gateoverflow.in/52841/isro-cse-2011-question-63</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"52437\"></a><div itemprop=\"text\"><p>How many lines of output does the following C code produce?</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include&lt;stdio.h&gt;\nfloat i=2.0;\nfloat j=1.0;\nfloat sum = 0.0;\nmain()\n{\n    while (i/j &gt; 0.001)\n    {\n        j+=j;\n        sum=sum+(i/j);\n        printf(\"%f\\n\", sum);\n    }\n}\n</pre>\n\n</div><br><br><b>Programming in C: ISRO CSE 2014 | Question: 38</b></p>",
          "type": "single",
          "options": [
            "<p>8</p>",
            "<p>9</p>",
            "<p>10</p>",
            "<p>11</p>"
          ],
          "correct_answer": "<p>11</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/52437/isro-cse-2014-question-38\" target=\"_blank\">https://gateoverflow.in/52437/isro-cse-2014-question-38</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"128751\"></a><div itemprop=\"text\"><p>What will be the output of the following C code?</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include &lt;stdio.h&gt;\nmain()\n{\n    int i;\n    for(i=0;i&lt;5;i++)\n    {\n        int i=10;\n        printf(\"%d\" , i);\n        i++;\n    }\n    return 0;\n}\n</pre>\n\n</div><br><br><b>Programming in C: ISRO CSE 2017 | Question: 62</b></p>",
          "type": "single",
          "options": [
            "<p>10 11 12 13 14</p>",
            "<p>10 10 10 10 10</p>",
            "<p>0 1 2 3 4</p>",
            "<p>Compilation error</p>"
          ],
          "correct_answer": "<p>10 10 10 10 10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/128751/isro-cse-2017-question-62\" target=\"_blank\">https://gateoverflow.in/128751/isro-cse-2017-question-62</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"128753\"></a><div itemprop=\"text\"><p>What does the following program do when the input is unsigned 16 bit integer?</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include&lt;stdio.h&gt;\nmain(){\n  unsigned int num;\n  int i;\n  scanf(\"%u\", &amp;num);\n  for(i=0;i&lt;16;i++){\n    printf(\"%d\", (num&lt;&lt;i&amp;1&lt;&lt;15)?1:0);\n  }\n}</pre>\n\n</div><br><br><b>Programming in C: ISRO CSE 2017 | Question: 63</b></p>",
          "type": "single",
          "options": [
            "<p>It prints all even bits from num</p>",
            "<p>It prints all odd bits from num</p>",
            "<p>It prints binary equivalent of num</p>",
            "<p>None of above</p>"
          ],
          "correct_answer": "<p>It prints binary equivalent of num</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/128753/isro-cse-2017-question-63\" target=\"_blank\">https://gateoverflow.in/128753/isro-cse-2017-question-63</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"52135\"></a><div itemprop=\"text\"><p>Consider the following program fragment</p>\n\n<pre class=\"prettyprint lang-c_cpp\">i=6720; j=4;\nwhile (i%j)==0\n{\n    i=i/j;\n    j=j+1;\n}</pre>\n\n<p>On termination j will have the value</p>\n\n</div><br><br><b>Programming in C: ISRO2015</b></p>",
          "type": "single",
          "options": [
            "<p>4</p>",
            "<p>8</p>",
            "<p>9</p>",
            "<p>6720</p>"
          ],
          "correct_answer": "<p>9</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/52135/isro2015-71\" target=\"_blank\">https://gateoverflow.in/52135/isro2015-71</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"52137\"></a><div itemprop=\"text\"><p>The output of the following program is</p>\n\n<pre class=\"prettyprint lang-c_cpp\">main()\n{\n    static int x[] = {1,2,3,4,5,6,7,8}\n    int i;\n    for (i=2; i&lt;6; ++i)\n    x[x[i]]=x[i];\n    for (i=0; i&lt;8; ++i)\n    printf(\"%d\", x[i]);\n}</pre>\n\n</div><br><br><b>Programming in C: ISRO2015</b></p>",
          "type": "single",
          "options": [
            "<p>1 2 3 3 5 5 7 8</p>",
            "<p>1 2 3 4 5 6 7 8</p>",
            "<p>8 7 6 5 4 3 2 1</p>",
            "<p>1 2 3 5 4 6 7 8</p>"
          ],
          "correct_answer": "<p>1 2 3 3 5 5 7 8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/52137/isro2015-73\" target=\"_blank\">https://gateoverflow.in/52137/isro2015-73</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"52141\"></a><div itemprop=\"text\"><p>The for loop</p>\n\n<pre class=\"prettyprint lang-c_cpp\">for (i=0; i&lt;10; ++i)\nprintf(\"%d\", i&amp;1);</pre>\n\n<p>prints</p>\n\n</div><br><br><b>Programming in C: ISRO2015</b></p>",
          "type": "single",
          "options": [
            "<p>0101010101</p>",
            "<p>0111111111</p>",
            "<p>0000000000</p>",
            "<p>1111111111</p>"
          ],
          "correct_answer": "<p>0101010101</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/52141/isro2015-75\" target=\"_blank\">https://gateoverflow.in/52141/isro2015-75</a></p>"
        }
      ]
    }
  ]
});
