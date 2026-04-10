window.__examLoadCallback({
  "title": "Programming in C - Identify Function",
  "duration": 17,
  "sections": [
    {
      "name": "Identify Function",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"2639\"></a><div itemprop=\"text\"><p>Consider the following high level programming segment. Give the contents of the memory locations for variables \\( W, X, Y \\) and \\( Z \\) after the execution of the program segment. The values of the variables \\( A \\) and \\( B \\) are \\( 5CH \\) and \\( 92H \\), respectively. Also indicate error conditions if any.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">var\n    A, B, W, X, Y   :unsigned byte;\n    Z               :unsigned integer, (each integer is represented by two bytes)\nbegin\n    X               :=A+B\n    Y               :=abs(A-B);\n    W               :=A-B\n    Z               :=A*B\nend;\n</pre></div><br><br><b>GATE CSE 1995 | Question: 3</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2639/gate-cse-1995-question-3\" target=\"_blank\">https://gateoverflow.in/2639/gate-cse-1995-question-3</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"1685\"></a><div itemprop=\"text\"><p>What is the result of the following program?</p>\n\n<pre class=\"prettyprint lang-c_cpp\">    program side-effect (input, output);\n    var x, result: integer;\n    function f (var x:integer):integer;\n    begin\n        x:x+1;f:=x;\n    end\nbegin\n    x:=5;\n    result:=f(x)*f(x);\n    writeln(result);\n    end\n</pre>\n\n</div><br><br><b>GATE CSE 1998 | Question: 2.13</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 5 \\)</p>",
            "<p>\\( 25 \\)</p>",
            "<p>\\( 36 \\)</p>",
            "<p>\\( 42 \\)</p>"
          ],
          "correct_answer": "<p>\\( 36 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1685/gate-cse-1998-question-2-13\" target=\"_blank\">https://gateoverflow.in/1685/gate-cse-1998-question-2-13</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"118245\"></a><div itemprop=\"text\"><p>Consider the following function implemented in C:</p>\n\n<pre class=\"prettyprint lang-c_cpp\">void printxy(int x, int y) {\n    int *ptr;\n    x=0;\n    ptr=&amp;x;\n    y=*ptr;\n    *ptr=1;\n    printf(“%d, %d”, x, y);\n}</pre>\n\n<p>The output of invoking \\( printxy(1,1) \\) is:</p>\n\n</div><br><br><b>GATE CSE 2017 Set 2 | Question: 14</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 0, 0 \\)</p>",
            "<p>\\( 0, 1 \\)</p>",
            "<p>\\( 1, 0 \\)</p>",
            "<p>\\( 1, 1 \\)</p>"
          ],
          "correct_answer": "<p>\\( 1, 0 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/118245/gate-cse-2017-set-2-question-14\" target=\"_blank\">https://gateoverflow.in/118245/gate-cse-2017-set-2-question-14</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"118388\"></a><div itemprop=\"text\"><p>Consider the following snippet of a C program. Assume that swap \\( (\\&amp;x, \\&amp;y) \\) exchanges the content of \\( x \\) and \\( y \\):</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int main () {\n    int array[] = {3, 5, 1, 4, 6, 2};\n    int done =0;\n    int i;\n    while (done==0) {\n        done =1;\n        for (i=0; i&lt;=4; i++) {\n            if (array[i] &lt; array[i+1]) {\n                swap(&amp;array[i], &amp;array[i+1]);\n                done=0;\n            }\n        }\n        for (i=5; i&gt;=1; i--) {\n            if (array[i] &gt; array[i-1]) {\n                swap(&amp;array[i], &amp;array[i-1]);\n                done =0;\n            }\n        }\n    }\n    printf(“%d”, array[3]);\n}</pre>\n\n<p>The output of the program is _______</p></div><br><br><b>GATE CSE 2017 Set 2 | Question: 43</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/118388/gate-cse-2017-set-2-question-43\" target=\"_blank\">https://gateoverflow.in/118388/gate-cse-2017-set-2-question-43</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"302830\"></a><div itemprop=\"text\"><p>Consider the following C program :</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include&lt;stdio.h&gt;\nint jumble(int x, int y){\n    x = 2*x+y;\n    return x;\n}\nint main(){\n    int x=2, y=5;\n    y=jumble(y,x);\n    x=jumble(y,x);\n    printf(\"%d \\n\",x);\n    return 0;\n}</pre>\n\n<p>The value printed by the program is ______________.</p></div><br><br><b>GATE CSE 2019 | Question: 18</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "26",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/302830/gate-cse-2019-question-18\" target=\"_blank\">https://gateoverflow.in/302830/gate-cse-2019-question-18</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"3656\"></a><div itemprop=\"text\"><p>Let \\( x \\) be an integer which can take a value of \\( 0 \\) or \\( 1 \\). The statement</p>\n\n<pre class=\"prettyprint lang-c_cpp\">if (x == 0) x = 1; else x = 0;</pre>\n\n<p>is equivalent to which one of the following ?</p>\n\n</div><br><br><b>GATE IT 2004 | Question: 15</b></p>",
          "type": "single",
          "options": [
            "<p>\\( x = 1 + x; \\)</p>",
            "<p>\\( x &nbsp;= 1 - x; \\)</p>",
            "<p>\\( x = x - 1; \\)</p>",
            "<p>\\( x = 1\\% x; \\)</p>"
          ],
          "correct_answer": "<p>\\( x &nbsp;= 1 - x; \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3656/gate-it-2004-question-15\" target=\"_blank\">https://gateoverflow.in/3656/gate-it-2004-question-15</a></p>"
        }
      ]
    }
  ]
});
