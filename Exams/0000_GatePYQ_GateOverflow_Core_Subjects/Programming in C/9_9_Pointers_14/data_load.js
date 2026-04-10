window.__examLoadCallback({
  "title": "Programming in C - Pointers",
  "duration": 39,
  "sections": [
    {
      "name": "Pointers",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"635\"></a><div itemprop=\"text\"><p>The most appropriate matching for the following pairs\\[ \\begin{array}{|ll|ll|}\\hline X:&nbsp;&amp; \\text{m = malloc(5); m = NULL;} &amp; 1:&nbsp;&amp; \\text{using dangling pointers} \\\\\\hline&nbsp; Y:&nbsp;&amp; \\text{free(n); n -&gt; value = 5;} &amp; 2:&nbsp;&amp; \\text{using uninitialized pointers} \\\\\\hline&nbsp; &nbsp;Z:&nbsp;&amp; \\text{char *p , *p = ‘a’ ; } &amp; 3:&nbsp; &amp; \\text{lost memory} \\\\\\hline \\end{array} \\] is:</p>\n\n</div><br><br><b>GATE CSE 2000 | Question: 1.12</b></p>",
          "type": "single",
          "options": [
            "<p>\\( X - 1 \\ \\&nbsp; Y - 3 \\ \\&nbsp; Z - 2 \\)</p>",
            "<p>\\( X - 2 \\ \\&nbsp; Y - 1 \\ \\&nbsp; Z - 3 \\)</p>",
            "<p>\\( X - 3 \\ \\&nbsp; Y - 2 \\ \\&nbsp; Z - 1 \\)</p>",
            "<p>\\( X - 3 \\ \\&nbsp; Y - 1 \\ \\ Z - 2 \\)</p>"
          ],
          "correct_answer": "<p>\\( X - 3 \\ \\&nbsp; Y - 1 \\ \\ Z - 2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/635/gate-cse-2000-question-1-12\" target=\"_blank\">https://gateoverflow.in/635/gate-cse-2000-question-1-12</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"736\"></a><div itemprop=\"text\"><p>Consider the following three C functions:</p>\n\n<p>\\( [P1] \\)&nbsp;</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int *g(void)\n{\n    int x = 10;\n    return (&amp;x);\n}</pre>\n\n<p>\\( [P2] \\)&nbsp;</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int *g(void)\n{\n    int *px;\n    *px = 10;\n    return px;\n}</pre>\n\n<p>\\( [P3] \\)&nbsp;</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int *g(void)\n{\n    int *px;\n    px = (int*) malloc (sizeof(int));\n    *px = 10;\n    return px;\n}</pre>\n\n<p>Which of the above three functions are likely to cause problems with pointers?</p>\n\n</div><br><br><b>GATE CSE 2001 | Question: 2.18</b></p>",
          "type": "single",
          "options": [
            "<p>Only \\( P3 \\)</p>",
            "<p>Only \\( P1 \\) and \\( P3 \\)</p>",
            "<p>Only \\( P1 \\) and \\( P2 \\)</p>",
            "<p>\\( P1, P2 \\) and \\( P3 \\)</p>"
          ],
          "correct_answer": "<p>Only \\( P1 \\) and \\( P2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/736/gate-cse-2001-question-2-18\" target=\"_blank\">https://gateoverflow.in/736/gate-cse-2001-question-2-18</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"893\"></a><div itemprop=\"text\"><p>Assume the following C variable declaration:</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int *A[10], B[10][10];</pre>\n\n<p>Of the following expressions:</p>\n\n<ol style=\"list-style-type:upper-roman\">\n\t<li>\\( A[2] \\)</li>\n\t<li>\\( A[2][3] \\)</li>\n\t<li>\\( B[1] \\)</li>\n\t<li>\\( B[2][3] \\)</li>\n</ol>\n\n<p>which will not give compile-time errors if used as left hand sides of assignment statements in a C program?</p>\n\n</div><br><br><b>GATE CSE 2003 | Question: 2</b></p>",
          "type": "single",
          "options": [
            "<p>I, II, and IV only</p>",
            "<p>II, III, and IV only</p>",
            "<p>II and IV only</p>",
            "<p>IV only</p>"
          ],
          "correct_answer": "<p>I, II, and IV only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/893/gate-cse-2003-question-2\" target=\"_blank\">https://gateoverflow.in/893/gate-cse-2003-question-2</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"972\"></a><div itemprop=\"text\"><p>Consider the C program shown below:</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include&lt;stdio.h&gt;\n#define print(x) printf(\"%d\", x)\n\nint x;\nvoid Q(int z)\n{\n        z+=x;\n        print(z);\n}\n\nvoid P(int *y)\n{\n        int x = *y + 2;\n        Q(x);\n        *y = x - 1;\n        print(x);\n}\nmain(void) {\n        x = 5;\n        P(&amp;x);\n        print(x);\n}\n</pre>\n\n<p>The output of this program is:</p>\n\n</div><br><br><b>GATE CSE 2003 | Question: 89</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 12 \\ 7 \\ 6 \\)</p>",
            "<p>\\( 22 \\&nbsp;12 \\ 11 \\)</p>",
            "<p>\\( 14 \\ 6 \\ 6 \\)</p>",
            "<p>\\( 7 \\ 6 \\ 6 \\)</p>"
          ],
          "correct_answer": "<p>\\( 12 \\ 7 \\ 6 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/972/gate-cse-2003-question-89\" target=\"_blank\">https://gateoverflow.in/972/gate-cse-2003-question-89</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"1343\"></a><div itemprop=\"text\"><p>What does the following C-statement declare?</p>\n\n<pre class=\"c_cpp\">int (*f) (int * );</pre>\n\n</div><br><br><b>GATE CSE 2005 | Question: 1, ISRO2017-55</b></p>",
          "type": "single",
          "options": [
            "<p>A function that takes an integer pointer as argument and returns an integer</p>",
            "<p>A function that takes an integer as argument and returns an integer pointer</p>",
            "<p>A pointer to a function that takes an integer pointer as argument and returns an integer</p>",
            "<p>A function that takes an integer pointer as argument and returns a function pointer</p>"
          ],
          "correct_answer": "<p>A pointer to a function that takes an integer pointer as argument and returns an integer</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1343/gate-cse-2005-question-1-isro2017-55\" target=\"_blank\">https://gateoverflow.in/1343/gate-cse-2005-question-1-isro2017-55</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"1835\"></a><div itemprop=\"text\"><p>Consider this C code to swap two integers and these five statements: the code</p><pre data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" class=\"prettyprint linenums lang-c_cpp\">void swap (int *px, int *py) \n{ \n&nbsp;       *px = *px - *py;\n&nbsp;       *py = *px + *py;\n&nbsp;       *px = *py - *px;      \n}</pre><p><strong>S1</strong>: will generate a compilation error&nbsp;</p><p><strong>S2</strong>: may generate a segmentation fault at runtime depending on the arguments&nbsp;passed&nbsp;</p><p><strong>S3</strong>: correctly implements the swap procedure for all input pointers referring to&nbsp;integers stored in memory locations accessible to the process</p><p><strong>S4</strong>: implements the swap procedure correctly for some but not all valid input&nbsp;pointers&nbsp;</p><p><strong>S5</strong>: may add or subtract integers and pointers</p></div><br><br><b>GATE CSE 2006 | Question: 57</b></p>",
          "type": "single",
          "options": [
            "<p>S1</p>",
            "<p>S2 and S3</p>",
            "<p>S2 and S4</p>",
            "<p>S2 and S5</p>"
          ],
          "correct_answer": "<p>S2 and S4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1835/gate-cse-2006-question-57\" target=\"_blank\">https://gateoverflow.in/1835/gate-cse-2006-question-57</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"1770\"></a><div itemprop=\"text\"><p>Consider the following program in C language:</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include &lt;stdio.h&gt;\n\nmain()\n{\n   int i;\n   int*pi = &amp;i; \n   \n   scanf(\"%d\",pi);\n   printf(\"%d\\n\", i+5);\n}</pre>\n\n<p>Which one of the following statements is&nbsp;<strong>TRUE?</strong></p>\n\n</div><br><br><b>GATE CSE 2014 Set 1 | Question: 10</b></p>",
          "type": "single",
          "options": [
            "<p>Compilation fails.</p>",
            "<p>Execution results in a run-time error.</p>",
            "<p>On execution, the value printed is \\( 5 \\) more than the address of variable \\( i \\).</p>",
            "<p>On execution, the value printed is \\( 5 \\) more than the integer value entered.</p>"
          ],
          "correct_answer": "<p>On execution, the value printed is \\( 5 \\) more than the integer value entered.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1770/gate-cse-2014-set-1-question-10\" target=\"_blank\">https://gateoverflow.in/1770/gate-cse-2014-set-1-question-10</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"8478\"></a><div itemprop=\"text\"><p>Consider the following C program</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include&lt;stdio.h&gt;  \nint main()  {\n    static int a[] = {10, 20, 30, 40, 50};\n    static int *p[] = {a, a+3, a+4, a+1, a+2};\n    int **ptr = p;\n    ptr++;\n    printf(\"%d%d\", ptr-p, **ptr);  \n    \n}  </pre>\n\n<p>The output of the program is _______.</p></div><br><br><b>GATE CSE 2015 Set 3 | Question: 26</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "140",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/8478/gate-cse-2015-set-3-question-26\" target=\"_blank\">https://gateoverflow.in/8478/gate-cse-2015-set-3-question-26</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"118293\"></a><div itemprop=\"text\"><p>Consider the following C code:</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include&lt;stdio.h&gt;\nint *assignval (int *x, int val) {\n    *x = val;\n    return x;\n}\n\nvoid main () {\n    int *x = malloc(sizeof(int));\n    if (NULL == x) return;\n    x = assignval (x,0);\n    if (x) {\n        x = (int *)malloc(sizeof(int));\n        if (NULL == x) return;\n        x = assignval (x,10);\n    }\n    printf(\"%d\\n\", *x);\n    free(x);\n}</pre>\n\n<p>The code suffers from which one of the following problems:</p>\n\n</div><br><br><b>GATE CSE 2017 Set 1 | Question: 13</b></p>",
          "type": "single",
          "options": [
            "<p>compiler error as the return of \\( malloc \\) is not typecast appropriately.</p>",
            "<p>compiler error because the comparison should be made as \\( x == \\text{NULL} \\) and not as shown.</p>",
            "<p>compiles successfully but execution may result in dangling pointer.</p>",
            "<p>compiles successfully but execution may result in memory leak.</p>"
          ],
          "correct_answer": "<p>compiles successfully but execution may result in memory leak.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/118293/gate-cse-2017-set-1-question-13\" target=\"_blank\">https://gateoverflow.in/118293/gate-cse-2017-set-1-question-13</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"118335\"></a><div itemprop=\"text\"><p>Consider the following C program.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include&lt;stdio.h&gt;\n#include&lt;string.h&gt;\nint main() {\n    char* c=\"GATECSIT2017\";\n    char* p=c;\n    printf(\"%d\", (int)strlen(c+2[p]-6[p]-1));\n    return 0;\n}</pre>\n\n<p>The output of the program is _______</p></div><br><br><b>GATE CSE 2017 Set 2 | Question: 55</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/118335/gate-cse-2017-set-2-question-55\" target=\"_blank\">https://gateoverflow.in/118335/gate-cse-2017-set-2-question-55</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"371925\"></a><div itemprop=\"text\"><p>What is printed by the following \\( \\text{ANSI C} \\) program?</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include&lt;stdio.h&gt;\n\nint main(int argc, char *argv[])\n\n{\n\n    int x = 1, z[2] = {10, 11};\n\n    int *p = NULL;\n\n    p = &amp;x;\n\n    *p = 10;\n\n    p = &amp;z[1];\n\n    *(&amp;z[0] + 1) += 3;\n\n    printf(“%d, %d, %d\\n”, x, z[0], z[1]);\n\n    return 0;\n\n}</pre>\n\n</div><br><br><b>GATE CSE 2022 | Question: 11</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 1, 10, 11 \\)</p>",
            "<p>\\( 1, 10, 14 \\)</p>",
            "<p>\\( 10, 14, 11 \\)</p>",
            "<p>\\( 10, 10, 14 \\)</p>"
          ],
          "correct_answer": "<p>\\( 10, 10, 14 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/371925/gate-cse-2022-question-11\" target=\"_blank\">https://gateoverflow.in/371925/gate-cse-2022-question-11</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"422871\"></a><div itemprop=\"text\"><p>​​​​​What is the output of the following \\( \\text{C} \\) program?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt;\nint main()&nbsp; {\ndouble a[2]={20.0,25.0},* p,* q;\np=a ;\nq=p+1 ;\nprintf(\"%d,%d\", (int) (q-p),( int)(* q- * p));\nreturn 0;} </pre></div><br><br><b>GATE CSE 2024 | Set 2 | Question: 26</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 4,8 \\)</p>",
            "<p>\\( 1,5 \\)</p>",
            "<p>\\( 8,5 \\)</p>",
            "<p>\\( 1,8 \\)</p>"
          ],
          "correct_answer": "<p>\\( 1,5 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422871/gate-cse-2024-set-2-question-26\" target=\"_blank\">https://gateoverflow.in/422871/gate-cse-2024-set-2-question-26</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"460056\"></a><div itemprop=\"text\"><p>&nbsp;</p><pre data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" class=\"prettyprint linenums lang-c_cpp\">#include &lt;stdio.h&gt;\nvoid foo(int *p, int x) {\n*p=x;\n}\nint main(){\nint *z;\nint a = 20, b = 25;\nz = &amp;a;\nfoo(z,b);\nprintf(\"%d\",a);\nreturn 0;\n}</pre><p>The output of the given \\( \\text{C} \\) program is __________. (Answer in integer)</p></div><br><br><b>GATE CSE 2025 | Set 1 | Question: 24</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "25:25",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/460056/gate-cse-2025-set-1-question-24\" target=\"_blank\">https://gateoverflow.in/460056/gate-cse-2025-set-1-question-24</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"460841\"></a><div itemprop=\"text\"><p>Consider the following C program:</p><pre data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" class=\"prettyprint linenums lang-c_cpp\">#include&lt;stdio.h&gt;\nint main(){\n     int a;\n     int arr[5] = {30,50,10};\n     int *ptr;\n     ptr = &amp;arr[0] + 1;\n     a = *ptr;\n     (*ptr)++;\n     ptr++;\n     printf(\"%d\", a + (*ptr) + arr[1]);\n     return 0;\n}</pre><p><br>The output of the above program is _________. (Answer in integer)</p></div><br><br><b>GATE CSE 2025 | Set 2 | Question: 52</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "111:111",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/460841/gate-cse-2025-set-2-question-52\" target=\"_blank\">https://gateoverflow.in/460841/gate-cse-2025-set-2-question-52</a></p>"
        }
      ]
    }
  ]
});
