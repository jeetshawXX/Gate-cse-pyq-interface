window.__examLoadCallback({
  "title": "Operating System - Fork System Call",
  "duration": 19,
  "sections": [
    {
      "name": "Fork System Call",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"765\"></a><div itemprop=\"text\"><pre class=\"prettyprint lang-c_cpp\">Consider the following code fragment:\nif (fork() == 0)\n{\n   a = a + 5;\n   printf(\"%d, %p n\", a, &amp;a);\n}\nelse\n{\n   a = a - 5;\n   printf (\"%d, %p n\", a,&amp; a);\n}\n\n</pre>\n\n<p>Let \\( u,v \\) be the values printed by the parent process and \\( x,y \\) be the values printed by the child process. Which one of the following is <strong>TRUE</strong>?</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 72</b></p>",
          "type": "single",
          "options": [
            "<p>\\( u = x + 10&nbsp; \\text{ and } v = y \\)</p>",
            "<p>\\( u = x + 10 \\text{ and } v != y \\)</p>",
            "<p>\\( u + 10 = x \\text{ and } v = y \\)</p>",
            "<p>\\( u + 10 = x \\text{ and } v != y \\)</p>"
          ],
          "correct_answer": "<p>\\( u + 10 = x \\text{ and } v = y \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/765/gate-cse-2005-question-72\" target=\"_blank\">https://gateoverflow.in/765/gate-cse-2005-question-72</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"489\"></a><div itemprop=\"text\"><p>A process executes the following code</p>\n\n<pre class=\"prettyprint lang-c_cpp\">for(i=0; i&lt;n; i++) fork();</pre>\n\n<p>The total number of child processes created is</p>\n\n</div><br><br><b>GATE CSE 2008 | Question: 66</b></p>",
          "type": "single",
          "options": [
            "<p>\\( n \\)</p>",
            "<p>\\( 2^n-1 \\)</p>",
            "<p>\\( 2^n \\)</p>",
            "<p>\\( 2^{n+1}&nbsp;- 1 \\)</p>"
          ],
          "correct_answer": "<p>\\( 2^n-1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/489/gate-cse-2008-question-66\" target=\"_blank\">https://gateoverflow.in/489/gate-cse-2008-question-66</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"40\"></a><div itemprop=\"text\"><p>A process executes the code</p><pre class=\"prettyprint lang-c_cpp\">fork();\nfork();\nfork();</pre><p>The total number of child&nbsp;processes created is</p></div><br><br><b>GATE CSE 2012 | Question: 8</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 3 \\)</p>",
            "<p>\\( 4 \\)</p>",
            "<p>\\( 7 \\)</p>",
            "<p>\\( 8 \\)</p>"
          ],
          "correct_answer": "<p>\\( 7 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/40/gate-cse-2012-question-8\" target=\"_blank\">https://gateoverflow.in/40/gate-cse-2012-question-8</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"302831\"></a><div itemprop=\"text\"><p>The following C program is executed on a Unix/Linux system :</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include&lt;unistd.h&gt;\nint main()\n{\n    int i;\n    for(i=0; i&lt;10; i++)\n        if(i%2 == 0)\n            fork();\n    return 0;\n}</pre>\n\n<p>The total number of child processes created is ________________ .</p></div><br><br><b>GATE CSE 2019 | Question: 17</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "31",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/302831/gate-cse-2019-question-17\" target=\"_blank\">https://gateoverflow.in/302831/gate-cse-2019-question-17</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"399299\"></a><div itemprop=\"text\"><p>Which one or more of the following options guarantee that a computer system will transition from user mode to kernel mode?</p>\n\n</div><br><br><b>GATE CSE 2023 | Question: 13</b></p>",
          "type": "multiple",
          "options": [
            "<p>Function Call</p>",
            "<p>malloc Call</p>",
            "<p>Page Fault</p>",
            "<p>System Call</p>"
          ],
          "correct_answer": [
            "<p>Page Fault</p>",
            "<p>System Call</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/399299/gate-cse-2023-question-13\" target=\"_blank\">https://gateoverflow.in/399299/gate-cse-2023-question-13</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"422795\"></a><div itemprop=\"text\"><p>Consider the following code snippet using the fork () and wait () system calls. Assume that the code compiles and runs correctly, and that the system calls run successfully without any errors.<br>\n&nbsp;</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int x=3;\n\nwhile (x&gt;0){\n\nfork ();\n\nprintf(\"hello\");\n\nwait (NULL) ;\n\nX-- ;\n\n}</pre>\n\n<p>The total number of times the printf statement is executed is __________.</p></div><br><br><b>GATE CSE 2024 | Set 1 | Question: 47</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "14",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/422795/gate-cse-2024-set-1-question-47\" target=\"_blank\">https://gateoverflow.in/422795/gate-cse-2024-set-1-question-47</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"3707\"></a><div itemprop=\"text\"><p>A process executes the following segment of code :</p>\n\n<pre class=\"prettyprint lang-c_cpp\">for(i = 1; i &lt;= n; i++)\n    fork ();</pre>\n\n<p><br>\nThe number of new processes created is</p>\n\n</div><br><br><b>GATE IT 2004 | Question: 64</b></p>",
          "type": "single",
          "options": [
            "<p>\\( n \\)</p>",
            "<p>\\( ((n(n + 1))/2) \\)</p>",
            "<p>\\( 2^n - 1 \\)</p>",
            "<p>\\( 3^n - 1 \\)</p>"
          ],
          "correct_answer": "<p>\\( 2^n - 1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3707/gate-it-2004-question-64\" target=\"_blank\">https://gateoverflow.in/3707/gate-it-2004-question-64</a></p>"
        }
      ]
    }
  ]
});
