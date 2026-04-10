window.__examLoadCallback({
  "title": "Programming in C - Array",
  "duration": 28,
  "sections": [
    {
      "name": "Array",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"2124\"></a><div itemprop=\"text\"><p>What does the following fragment of C program print?</p>\n\n<pre class=\"prettyprint lang-c_cpp\">    char c[] = \"GATE2011\";\n    char *p = c;\n    printf(\"%s\", p + p[3] - p[1]);</pre>\n\n</div><br><br><b>GATE CSE 2011 | Question: 22</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{GATE2011} \\)</p>",
            "<p>\\( \\text{E2011} \\)</p>",
            "<p>\\( 2011 \\)</p>",
            "<p>\\( 011 \\)</p>"
          ],
          "correct_answer": "<p>\\( 2011 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2124/gate-cse-2011-question-22\" target=\"_blank\">https://gateoverflow.in/2124/gate-cse-2011-question-22</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"8283\"></a><div itemprop=\"text\"><p>What is the output of the following C code? Assume that the address of \\( x \\) is \\( 2000 \\) (in decimal) and an integer requires four bytes of memory.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int main () { \n         unsigned int x [4] [3] = \n         {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {10, 11, 12}};\n         printf (\"%u, %u, %u\", x + 3, *(x + 3), *(x + 2) + 3); \n}</pre>\n\n</div><br><br><b>GATE CSE 2015 Set 1 | Question: 35</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2036, 2036, 2036 \\)</p>",
            "<p>\\( 2012, 4, 2204 \\)</p>",
            "<p>\\( 2036, 10, 10 \\)</p>",
            "<p>\\( 2012, 4, 6 \\)</p>"
          ],
          "correct_answer": "<p>\\( 2036, 2036, 2036 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8283/gate-cse-2015-set-1-question-35\" target=\"_blank\">https://gateoverflow.in/8283/gate-cse-2015-set-1-question-35</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"8486\"></a><div itemprop=\"text\"><p>Consider the following two C code segments. \\( Y \\) and \\( X \\) are one and two dimensional arrays of size \\( n \\) and \\(  n \\times n \\) respectively, where \\( 2 \\leq n \\leq 10 \\). Assume that in both code segments, elements of \\( Y \\) are initialized to \\( 0 \\) and each element \\( X[i][j] \\) of array \\( X \\) is initialized to \\( i+j \\). Further assume that when stored in main memory all elements of \\( X \\) are in same main memory page frame.</p>\n\n<p>Code segment \\( 1: \\)</p>\n\n<pre class=\"prettyprint lang-c_cpp\">// initialize elements of Y to 0\n// initialize elements of X[i][j] of X to i+j\nfor (i=0; i&lt;n; i++)\n    Y[i] += X[0][i];</pre>\n\n<p>Code segment \\( 2: \\)</p>\n\n<pre class=\"prettyprint lang-c_cpp\">// initialize elements of Y to 0\n// initialize elements of X[i][j] of X to i+j\nfor (i=0; i&lt;n; i++)\n    Y[i] += X[i][0];</pre>\n\n<p>Which of the following statements is/are correct?</p>\n\n<p>S1: Final contents of array \\( Y \\) will be same in both code segments</p>\n\n<p>S2: Elements of array \\( X \\) accessed inside the for loop shown in code segment \\( 1 \\) are contiguous in main memory</p>\n\n<p>S3:&nbsp;Elements of array \\( X \\) accessed inside the for loop shown in code segment \\( 2 \\) are contiguous in main memory</p>\n\n</div><br><br><b>GATE CSE 2015 Set 3 | Question: 30</b></p>",
          "type": "single",
          "options": [
            "<p>Only S2 is correct</p>",
            "<p>Only S3 is correct</p>",
            "<p>Only S1 and S2 are correct</p>",
            "<p>Only S1 and S3 are correct</p>"
          ],
          "correct_answer": "<p>Only S1 and S2 are correct</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8486/gate-cse-2015-set-3-question-30\" target=\"_blank\">https://gateoverflow.in/8486/gate-cse-2015-set-3-question-30</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"8401\"></a><div itemprop=\"text\"><p>Consider the following C program segment.</p>\n\n<pre class=\"prettyprint lang-c_cpp\"># include &lt;stdio.h&gt;\nint main()\n{\n    char s1[7] = \"1234\", *p;\n    p = s1 + 2;\n    *p = '0';\n    printf(\"%s\", s1);\n}</pre>\n\n<p>What will be printed by the program?</p>\n\n</div><br><br><b>GATE CSE 2015 Set 3 | Question: 7</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 12 \\)</p>",
            "<p>\\( 120400 \\)</p>",
            "<p>\\( 1204 \\)</p>",
            "<p>\\( 1034 \\)</p>"
          ],
          "correct_answer": "<p>\\( 1204 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8401/gate-cse-2015-set-3-question-7\" target=\"_blank\">https://gateoverflow.in/8401/gate-cse-2015-set-3-question-7</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"302824\"></a><div itemprop=\"text\"><p>Consider the following C program:</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt;\nint main() {\n        int arr[]={1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 5}, *ip=arr+4;\n        printf(“%d\\n”, ip[1]);\n        return 0;\n}</pre>\n\n<p>The number that will be displayed on execution of the program is _______</p></div><br><br><b>GATE CSE 2019 | Question: 24</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/302824/gate-cse-2019-question-24\" target=\"_blank\">https://gateoverflow.in/302824/gate-cse-2019-question-24</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"333209\"></a><div itemprop=\"text\"><p>Consider the following C program.</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt;\nint main ()&nbsp; {\n    int&nbsp; a[4] [5] = {{1, 2, 3, 4, 5},\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {6, 7,8, 9, 10},\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {11, 12, 13, 14, 15},\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {16, 17,18, 19, 20}};\n    printf(“%d\\n”, *(*(a+**a+2)+3));\n&nbsp; &nbsp; return(0);\n}</pre>\n\n<p>The output of the program is _______.</p></div><br><br><b>GATE CSE 2020 | Question: 22</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "19",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/333209/gate-cse-2020-question-22\" target=\"_blank\">https://gateoverflow.in/333209/gate-cse-2020-question-22</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"3701\"></a><div itemprop=\"text\"><p>Consider the following C program which is supposed to compute the transpose of a given \\( 4 \\times&nbsp;4 \\) matrix \\( M \\). Note that, there is an \\( X \\) in the program which indicates some missing statements. Choose the correct option to replace \\( X \\) in the program.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include&lt;stdio.h&gt;\n#define ROW 4\n#define COL 4\nint M[ROW][COL] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16};\nmain()\n{\n    int i, j, t;\n    for (i = 0; i &lt; 4; ++i)\n    {\n        X\n    }\n    for (i = 0; i &lt; 4; ++i)\n        for (j = 0; j &lt; 4; ++j)\n            printf (\"%d\", M[i][j]);\n}</pre>\n\n</div><br><br><b>GATE IT 2004 | Question: 58</b></p>",
          "type": "single",
          "options": [
            "<p><pre class=\"prettyprint lang-c_cpp\">for(j = 0; j &lt; 4; ++j){\n     t = M[i][j];\n     M[i][j] = M[j][i];\n     M[j][i] = t;\n}\n</pre></p>",
            "<p><pre class=\"prettyprint lang-c_cpp\">for(j = 0; j &lt; 4; ++j){\n     M[i][j] = t;\n     t = M[j][i];\n     M[j][i] = M[i][j];\n}\n</pre></p>",
            "<p><pre class=\"prettyprint lang-c_cpp\">for(j = i; j &lt; 4; ++j){\n     t = M[i][j];\n     M[i][j] = M[j][i];\n     M[j][i] = t;\n}\n</pre></p>",
            "<p><pre class=\"prettyprint lang-c_cpp\">for(j = i; j &lt; 4; ++j){\n     M[i][j] = t;\n     t = M[j][i];\n     M[j][i] = M[i][j];\n}</pre></p>"
          ],
          "correct_answer": "<p><pre class=\"prettyprint lang-c_cpp\">for(j = i; j &lt; 4; ++j){\n     t = M[i][j];\n     M[i][j] = M[j][i];\n     M[j][i] = t;\n}\n</pre></p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3701/gate-it-2004-question-58\" target=\"_blank\">https://gateoverflow.in/3701/gate-it-2004-question-58</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"3359\"></a><div itemprop=\"text\"><p>What is the output printed by the following C code?</p>\n\n<pre class=\"prettyprint lang-c_cpp\"># include &lt;stdio.h&gt;\nint main ()\n{\n    char a [6] = \"world\";\n    int i, j;\n    for (i = 0, j = 5; i &lt; j; a [i++] = a [j--]);\n    printf (\"%s\\n\", a);\n}</pre>\n\n</div><br><br><b>GATE IT 2008 | Question: 49</b></p>",
          "type": "single",
          "options": [
            "<p>dlrow</p>",
            "<p>Null string</p>",
            "<p>dlrld</p>",
            "<p>worow</p>"
          ],
          "correct_answer": "<p>Null string</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3359/gate-it-2008-question-49\" target=\"_blank\">https://gateoverflow.in/3359/gate-it-2008-question-49</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"3361\"></a><div itemprop=\"text\"><p>Consider the C program given below. What does it print?</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include &lt;stdio.h&gt;\nint main ()\n{\n        int i, j;\n        int a [8] = {1, 2, 3, 4, 5, 6, 7, 8};\n        for(i = 0; i &lt; 3; i++) {\n             a[i] = a[i] + 1;\n             i++;\n        }\n        i--;\n        for (j = 7; j &gt; 4; j--) {\n              int i = j/2;\n              a[i] = a[i] - 1;\n        }\n        printf (\"%d, %d\", i, a[i]);\n}</pre>\n\n</div><br><br><b>GATE IT 2008 | Question: 51</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2, 3 \\)</p>",
            "<p>\\( 2, 4 \\)</p>",
            "<p>\\( 3, 2 \\)</p>",
            "<p>\\( 3, 3 \\)</p>"
          ],
          "correct_answer": "<p>\\( 3, 2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3361/gate-it-2008-question-51\" target=\"_blank\">https://gateoverflow.in/3361/gate-it-2008-question-51</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"3362\"></a><div itemprop=\"text\"><p>C program is given below:</p>\n\n<pre class=\"prettyprint lang-c_cpp\"># include &lt;stdio.h&gt;\nint main ()\n{\n        int i, j;\n        char a [2] [3] = {{'a', 'b', 'c'}, {'d', 'e', 'f'}};\n        char b [3] [2];\n        char *p = *b;\n        for (i = 0; i &lt; 2; i++) {\n              for (j = 0; j &lt; 3; j++) {\n              *(p + 2*j + i) = a [i] [j];\n              }\n        }\n}\n</pre>\n\n<p>What should be the contents of the array b at the end of the program?</p>\n\n</div><br><br><b>GATE IT 2008 | Question: 52</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{a&nbsp;&nbsp;&nbsp; b} \\)<br>\n\t\\( \\text{c&nbsp;&nbsp;&nbsp; d} \\)<br>\n\t\\( \\text{e&nbsp;&nbsp;&nbsp; f} \\)<br>\n\t&nbsp;</p>",
            "<p>\\( \\text{a &nbsp;&nbsp; d} \\)<br>\n\t\\( \\text{b&nbsp;&nbsp;&nbsp; e} \\)<br>\n\t\\( \\text{c &nbsp;&nbsp; f} \\)<br>\n\t&nbsp;</p>",
            "<p>\\( \\text{a &nbsp;&nbsp; c} \\)<br>\n\t\\( \\text{e &nbsp;&nbsp; b} \\)<br>\n\t\\( \\text{d &nbsp;&nbsp; f} \\)<br>\n\t&nbsp;</p>",
            "<p>\\( \\text{a &nbsp;&nbsp; e} \\)<br>\n\t\\( \\text{d &nbsp;&nbsp; c} \\)<br>\n\t\\( \\text{b &nbsp;&nbsp; f} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{a &nbsp;&nbsp; d} \\)<br>\n\t\\( \\text{b&nbsp;&nbsp;&nbsp; e} \\)<br>\n\t\\( \\text{c &nbsp;&nbsp; f} \\)<br>\n\t&nbsp;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3362/gate-it-2008-question-52\" target=\"_blank\">https://gateoverflow.in/3362/gate-it-2008-question-52</a></p>"
        }
      ]
    }
  ]
});
