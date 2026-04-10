window.__examLoadCallback({
  "title": "Programming in C - Programming In C",
  "duration": 86,
  "sections": [
    {
      "name": "Programming In C",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"667\"></a><div itemprop=\"text\"><p>The value of \\( j \\) at the end of the execution of the following C program:</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int incr (int i)\n{ \n    static int count = 0;\n    count = count + i;\n    return (count);\n} \nmain () { \n    int i, j; \n    for (i = 0; i &lt;= 4; i++)\n       j = incr (i);\n} \n\n</pre>\n\n<p>is:</p>\n\n</div><br><br><b>GATE CSE 2000 | Question: 2.20</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 10 \\)</p>",
            "<p>\\( 4 \\)</p>",
            "<p>\\( 6 \\)</p>",
            "<p>\\( 7 \\)</p>"
          ],
          "correct_answer": "<p>\\( 10 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/667/gate-cse-2000-question-2-20\" target=\"_blank\">https://gateoverflow.in/667/gate-cse-2000-question-2-20</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"822\"></a><div itemprop=\"text\"><p>In the C language:</p>\n\n</div><br><br><b>GATE CSE 2002 | Question: 1.17</b></p>",
          "type": "single",
          "options": [
            "<p>At most one activation record exists between the current activation record and the activation record for the main</p>",
            "<p>The number of activation records between the current activation record and the activation records from the main depends on the actual function calling sequence.</p>",
            "<p>The visibility of global variables depends on the actual function calling sequence</p>",
            "<p>Recursion requires the activation record for the recursive function to be saved in a different stack before the recursive function can be called.</p>"
          ],
          "correct_answer": "<p>The number of activation records between the current activation record and the activation records from the main depends on the actual function calling sequence.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/822/gate-cse-2002-question-1-17\" target=\"_blank\">https://gateoverflow.in/822/gate-cse-2002-question-1-17</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"848\"></a><div itemprop=\"text\"><p>The C language is:</p>\n\n</div><br><br><b>GATE CSE 2002 | Question: 2.18</b></p>",
          "type": "single",
          "options": [
            "<p>A context free language</p>",
            "<p>A context sensitive language</p>",
            "<p>A regular language</p>",
            "<p>Parsable fully only by a Turing machine</p>"
          ],
          "correct_answer": "<p>A context sensitive language</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/848/gate-cse-2002-question-2-18\" target=\"_blank\">https://gateoverflow.in/848/gate-cse-2002-question-2-18</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"838\"></a><div itemprop=\"text\"><p>Consider the following declaration of a two-dimensional array in C:</p><p>char \\( a[100][100] \\);</p><p>Assuming that the main memory is byte-addressable and that the array is stored starting from memory address \\( 0 \\), the address of \\( a [40][50] \\) is:</p></div><br><br><b>GATE CSE 2002 | Question: 2.8</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 4040 \\)</p>",
            "<p>\\( 4050 \\)</p>",
            "<p>\\( 5040 \\)</p>",
            "<p>\\( 5050 \\)</p>"
          ],
          "correct_answer": "<p>\\( 4050 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/838/gate-cse-2002-question-2-8\" target=\"_blank\">https://gateoverflow.in/838/gate-cse-2002-question-2-8</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"1030\"></a><div itemprop=\"text\"><p>Consider the following C program segment:</p><pre class=\"prettyprint lang-c_cpp\">char p[20]; int i;\nchar* s = \"string\";\nint length = strlen(s);\nfor(i = 0; i &lt; length; i++)\n    p[i] = s[length-i];\nprintf(\"%s\", p);</pre><p>The output of the program is:</p></div><br><br><b>GATE CSE 2004 | Question: 33</b></p>",
          "type": "single",
          "options": [
            "<p>gnirts</p>",
            "<p>string</p>",
            "<p>gnirt</p>",
            "<p>no output is printed</p>"
          ],
          "correct_answer": "<p>no output is printed</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1030/gate-cse-2004-question-33\" target=\"_blank\">https://gateoverflow.in/1030/gate-cse-2004-question-33</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"1368\"></a><div itemprop=\"text\"><p>Consider the following C program:</p>\n\n<pre class=\"prettyprint lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">double foo (double);\t\t/* Line 1 */\nint main() {\n    double da, db;\n    //input da\n    db = foo(da);\n}\ndouble foo (double a) {\n    return a;\n}</pre>\n\n<p>The above code compiled without any error or warning. If Line \\( 1 \\) is deleted, the above code will show:</p>\n\n</div><br><br><b>GATE CSE 2005 | Question: 32</b></p>",
          "type": "single",
          "options": [
            "<p>no compile warning or error</p>",
            "<p>some compiler-warnings not leading to unintended results</p>",
            "<p>some compiler-warnings due to type-mismatch eventually leading to unintended results</p>",
            "<p>compiler errors</p>"
          ],
          "correct_answer": "<p>compiler errors</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1368/gate-cse-2005-question-32\" target=\"_blank\">https://gateoverflow.in/1368/gate-cse-2005-question-32</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"416\"></a><div itemprop=\"text\"><p>Which combination of the integer variables \\( x, y, \\) and \\( z \\) makes the variable \\( a \\) get the value \\( 4 \\) in the following expression?</p>\n\n<p>\\[ a=(x &gt; y)?((x &gt; z) ?x:z): ((y &gt; z) ?y:z) \\]</p>\n\n</div><br><br><b>GATE CSE 2008 | Question: 18</b></p>",
          "type": "single",
          "options": [
            "<p>\\( x=3, y=4, z=2 \\)</p>",
            "<p>\\( x=6, y=5, z=3 \\)</p>",
            "<p>\\( x=6, y=3, z=5 \\)</p>",
            "<p>\\( x=5, y=4, z=5 \\)</p>"
          ],
          "correct_answer": "<p>\\( x=3, y=4, z=2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/416/gate-cse-2008-question-18\" target=\"_blank\">https://gateoverflow.in/416/gate-cse-2008-question-18</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"484\"></a><div itemprop=\"text\"><p>Choose the correct option to fill \\( ?1 \\) and \\( ?2 \\) so that the program below prints an input string in reverse order. Assume that the input string is terminated by a new line character.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">void reverse(void) \n{ \n    int c;\n    if(?1) reverse();\n    ?2 \n} \nmain() \n{ \n    printf(\"Enter text\"); \n    printf(\"\\n\"); \n    reverse(); \n    printf(\"\\n\"); \n}</pre>\n\n</div><br><br><b>GATE CSE 2008 | Question: 61</b></p>",
          "type": "single",
          "options": [
            "<p>\\( ?1 \\) is&nbsp;\\( (getchar() !=&nbsp;’\\setminus&nbsp;n’) \\)</p>\n\t\\( ?2 \\) is \\( getchar(c); \\)",
            "<p>\\( ?1 \\) is \\( ((c = getchar() ) !=’\\setminus n’) \\)</p>\n\n\t<p>\\( ?2 \\) is \\( getchar(c); \\)</p>",
            "<p>\\( ?1 \\) is \\( (c != ’\\setminus n’) \\)</p>\n\n\t<p>\\( ?2 \\) is \\( putchar(c); \\)</p>",
            "<p>\\( ?1 \\) is \\( ((c = getchar() ) != ’\\setminus n’) \\)</p>\n\n\t<p>\\( ?2 \\) is \\( putchar(c); \\)</p>"
          ],
          "correct_answer": "<p>\\( ?1 \\) is \\( ((c = getchar() ) != ’\\setminus n’) \\)</p>\n\n\t<p>\\( ?2 \\) is \\( putchar(c); \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/484/gate-cse-2008-question-61\" target=\"_blank\">https://gateoverflow.in/484/gate-cse-2008-question-61</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"2176\"></a><div itemprop=\"text\"><p>Consider the following C code segment.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int a, b, c = 0; \nvoid prtFun(void); \nmain()\n{ \n    static int a = 1;       /* Line 1 */\n    prtFun(); \n    a += 1;\n    prtFun();\n    printf(“ \\n %d %d ”, a, b);\n}\n\nvoid prtFun(void)\n{\n    static int a = 2;       /* Line 2 */\n    int b = 1;\n    a += ++b;\n    printf(“ \\n %d %d ”, a, b);\n}\n</pre>\n\n<p>What output will be generated by the given code segment?<br>\n&nbsp;</p>\n\n</div><br><br><b>GATE CSE 2012 | Question: 48</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\begin{array}{llll}&nbsp;3 &amp; &nbsp;&amp; 1 &amp;&nbsp;&nbsp;\\\\&nbsp; 4&nbsp;&amp; &nbsp;&amp; 1 &amp;&nbsp;&nbsp;\\\\&nbsp; 4&nbsp;&amp; &nbsp;&amp; 2&nbsp;&amp;&nbsp; &nbsp; \\end{array} \\)</p>",
            "<p>\\( \\begin{array}{lll} 4&nbsp;&amp; &nbsp;&amp; 2&nbsp;&amp;&nbsp;&nbsp;\\\\&nbsp; 6&nbsp;&amp; &nbsp;&amp; 1 &amp;&nbsp;&nbsp;\\\\&nbsp; 6&nbsp;&amp; &nbsp;&amp; 1&nbsp;&amp;&nbsp;&nbsp;&nbsp;\\end{array} \\)&nbsp;</p>",
            "<p>\\( \\begin{array}{lll} 4&nbsp;&amp; &nbsp;&amp; 2&nbsp;&amp;&nbsp;&nbsp;\\\\&nbsp; 6&nbsp;&amp; &nbsp;&amp; 2&nbsp;&amp;&nbsp;&nbsp;\\\\&nbsp; 2&nbsp;&amp; &nbsp;&amp; 0&nbsp;&amp;&nbsp;&nbsp;&nbsp; \\end{array} \\)&nbsp;</p>",
            "<p>\\( \\begin{array}{lll} 3 &amp; &nbsp;&amp; 1 &amp;&nbsp;&nbsp;\\\\&nbsp; 5&nbsp;&amp; &nbsp;&amp; 2&nbsp;&amp;&nbsp;&nbsp;\\\\&nbsp; 5&nbsp;&amp; &nbsp;&amp; 2&nbsp;&amp;&nbsp; &nbsp;\\end{array} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\begin{array}{lll} 4&nbsp;&amp; &nbsp;&amp; 2&nbsp;&amp;&nbsp;&nbsp;\\\\&nbsp; 6&nbsp;&amp; &nbsp;&amp; 2&nbsp;&amp;&nbsp;&nbsp;\\\\&nbsp; 2&nbsp;&amp; &nbsp;&amp; 0&nbsp;&amp;&nbsp;&nbsp;&nbsp; \\end{array} \\)&nbsp;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2176/gate-cse-2012-question-48\" target=\"_blank\">https://gateoverflow.in/2176/gate-cse-2012-question-48</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"43314\"></a><div itemprop=\"text\"><p>Consider the following C code segment.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int a, b, c = 0; \nvoid prtFun(void); \nmain()\n{ \n    static int a = 1;       /* Line 1 */\n    prtFun(); \n    a += 1;\n    prtFun();\n    printf(“ \\n %d %d ”, a, b);\n}\n\nvoid prtFun(void)\n{\n    static int a = 2;       /* Line 2 */\n    int b = 1;\n    a += ++b;\n    printf(“ \\n %d %d ”, a, b);\n}\n</pre>\n\n<p>What output will be generated by the given code segment if:</p>\n\n<p>Line 1 is replaced by&nbsp;<strong>auto int </strong>\\( a = 1 \\)<strong>;</strong></p>\n\n<p>Line 2 is replaced by&nbsp;<strong>register int </strong>\\( a = 2 \\)<strong>;</strong>&nbsp;</p>\n\n</div><br><br><b>GATE CSE 2012 | Question: 49</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\begin{array}{ll}&nbsp; \\text{3} &nbsp;&amp; \\text{1} \\\\ \\text{4} &nbsp;&amp; \\text{1} \\\\ \\text{4} &nbsp;&amp; \\text{2} \\\\ \\end{array} \\)</p>",
            "<p>\\( \\begin{array}{ll}&nbsp; \\text{4} &nbsp;&amp; \\text{2} \\\\ \\text{6} &nbsp;&amp; \\text{1} \\\\ \\text{6} &nbsp;&amp; \\text{1} \\\\ \\end{array} \\)</p>",
            "<p>\\( \\begin{array}{ll}&nbsp; \\text{4} &nbsp;&amp; \\text{2} \\\\ \\text{6} &nbsp;&amp; \\text{2} \\\\ \\text{2} &nbsp;&amp; \\text{0} \\\\ \\end{array} \\)</p>",
            "<p>\\( \\begin{array}{ll}&nbsp; \\text{4} &nbsp;&amp; \\text{2} \\\\ \\text{4} &nbsp;&amp; \\text{2} \\\\ \\text{2} &nbsp;&amp; \\text{0} \\\\ \\end{array} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\begin{array}{ll}&nbsp; \\text{4} &nbsp;&amp; \\text{2} \\\\ \\text{4} &nbsp;&amp; \\text{2} \\\\ \\text{2} &nbsp;&amp; \\text{0} \\\\ \\end{array} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43314/gate-cse-2012-question-49\" target=\"_blank\">https://gateoverflow.in/43314/gate-cse-2012-question-49</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"1965\"></a><div itemprop=\"text\"><p>Suppose \\( n \\) and \\( p \\) are unsigned int variables in a C program. We wish to set \\( p \\) to \\( ^nC_3 \\). If \\( n \\) is large, which one of the following statements is most likely to set \\( p \\) correctly?</p>\n\n</div><br><br><b>GATE CSE 2014 Set 2 | Question: 11</b></p>",
          "type": "single",
          "options": [
            "<p>\\( p = n * (n-1) * (n-2) / 6; \\)</p>",
            "<p>\\( p = n * (n-1) / 2 * (n-2) / 3; \\)</p>",
            "<p>\\( p = n * (n-1) / 3 * (n-2) / 2; \\)</p>",
            "<p>\\( p = n * (n-1) * (n-2) / 6.0; \\)</p>"
          ],
          "correct_answer": "<p>\\( p = n * (n-1) / 2 * (n-2) / 3; \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1965/gate-cse-2014-set-2-question-11\" target=\"_blank\">https://gateoverflow.in/1965/gate-cse-2014-set-2-question-11</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"2008\"></a><div itemprop=\"text\"><p>Consider the C function given below.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int f(int j)\n{ \n    static int i = 50; \n    int k; \n    if (i == j) \n    { \n        printf(\"something\"); \n        k = f(i); \n        return 0; \n    } \n    else return 0; \n} \n</pre>\n\n<p>Which one of the following is&nbsp;<strong>TRUE</strong>?</p>\n\n</div><br><br><b>GATE CSE 2014 Set 2 | Question: 42</b></p>",
          "type": "single",
          "options": [
            "<p>The function returns \\( 0 \\) for all values of \\( j \\).</p>",
            "<p>The function prints the string&nbsp;<strong>something</strong>&nbsp;for all values of \\( j \\).</p>",
            "<p>The function returns \\( 0 \\) when \\( j = 50 \\).</p>",
            "<p>The function will exhaust the runtime stack or run into an infinite loop when \\( j = 50 \\).</p>"
          ],
          "correct_answer": "<p>The function will exhaust the runtime stack or run into an infinite loop when \\( j = 50 \\).</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2008/gate-cse-2014-set-2-question-42\" target=\"_blank\">https://gateoverflow.in/2008/gate-cse-2014-set-2-question-42</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"8185\"></a><div itemprop=\"text\"><p>The output of the following C program is_____________.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">void f1 ( int a, int b)  {  \n                int c; \n                c = a; a = b;\n                 b = c;  \n}   \nvoid f2 ( int * a, int * b) {   \n               int c; \n               c = * a; *a = *b; *b = c; \n} \nint main () { \n        int a = 4, b = 5, c = 6; \n        f1 ( a, b); \n        f2 (&amp;b, &amp;c); \n        printf (\"%d\", c - a - b);  \n }</pre></div><br><br><b>GATE CSE 2015 Set 1 | Question: 1‏1</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "-5",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/8185/gate-cse-2015-set-1-question-1-1\" target=\"_blank\">https://gateoverflow.in/8185/gate-cse-2015-set-1-question-1-1</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"8563\"></a><div itemprop=\"text\"><p>Consider the following C program:</p><pre class=\"prettyprint lang-c_cpp\">#include&lt;stdio.h&gt;\nint f1(void);\nint f2(void);\nint f3(void);\nint x=10;\nint main()\n{\n    int x=1;\n    x += f1() + f2 () + f3() + f2();\n    printf(\"%d\", x);\n    return 0;\n}\nint f1() { int x = 25; x++; return x;}\nint f2() { static int x = 50; x++; return x;}\nint f3() { x *= 10; return x;}</pre><p>The output of the program is ______.</p></div><br><br><b>GATE CSE 2015 Set 3 | Question: 54</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "230",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/8563/gate-cse-2015-set-3-question-54\" target=\"_blank\">https://gateoverflow.in/8563/gate-cse-2015-set-3-question-54</a></p>"
        },
        {
          "id": 15,
          "question": "<p><a name=\"39638\"></a><div itemprop=\"text\"><p>Consider the following \"C\" program.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">void f(int, short);\nvoid main()\n{\n    int i = 100;\n    short s = 12;\n    short *p = &amp;s;\n    ____________;  // call to f()\n}</pre>\n\n<p>&nbsp;Which one of the following expressions , when placed in the blank above, will NOT result in a type checking error?</p>\n\n</div><br><br><b>GATE CSE 2016 Set 1 | Question: 12</b></p>",
          "type": "single",
          "options": [
            "<p>\\( f(s, *s) \\)</p>",
            "<p>\\( i = f(i,s) \\)</p>",
            "<p>\\( f(i, *s) \\)</p>",
            "<p>\\( f(i, *p) \\)</p>"
          ],
          "correct_answer": "<p>\\( f(i, *p) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/39638/gate-cse-2016-set-1-question-12\" target=\"_blank\">https://gateoverflow.in/39638/gate-cse-2016-set-1-question-12</a></p>"
        },
        {
          "id": 16,
          "question": "<p><a name=\"39704\"></a><div itemprop=\"text\"><p>&nbsp;The following function computes the maximum value contained in an integer array \\( P[ \\&nbsp;] \\) of size \\( n \\) \\( (n&gt;=1) \\).&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>\n\n<pre class=\"prettyprint lang-c_cpp\">int max (int *p,int n) {\n    int a = 0, b=n-1;\n    \n    while (__________) {\n        if (p[a]&lt;= p[b]) {a = a+1;}\n        else             {b = b-1;}\n    }\n    return p[a];\n}</pre>\n\n<p>The missing loop condition is:</p>\n\n</div><br><br><b>GATE CSE 2016 Set 1 | Question: 34</b></p>",
          "type": "single",
          "options": [
            "<p>&nbsp;\\( a\\ \\ != n \\)&nbsp;</p>",
            "<p>&nbsp;\\( b\\ \\ != 0 \\)&nbsp;</p>",
            "<p>&nbsp;\\( b&gt;(a+1) \\)&nbsp;</p>",
            "<p>&nbsp;\\( b\\ \\ != a \\)&nbsp;</p>"
          ],
          "correct_answer": "<p>&nbsp;\\( b\\ \\ != a \\)&nbsp;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/39704/gate-cse-2016-set-1-question-34\" target=\"_blank\">https://gateoverflow.in/39704/gate-cse-2016-set-1-question-34</a></p>"
        },
        {
          "id": 17,
          "question": "<p><a name=\"118473\"></a><div itemprop=\"text\"><p>Consider the following C program.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include&lt;stdio.h&gt;\n#include&lt;string.h&gt;\n\nvoid printlength(char *s, char *t) {\n    unsigned int c=0;\n    int len = ((strlen(s) - strlen(t)) &gt; c) ? strlen(s) : strlen(t);\n    printf(\"%d\\n\", len);\n}\n\nvoid main() {\n    char *x = \"abc\";\n    char *y = \"defgh\";\n    printlength(x,y);\n}</pre>\n\n<p>Recall that \\( strlen \\) is defined in \\( string.h \\) as returning a value of type \\( size\\_t \\), which is an unsigned int. The output of the program is __________ .</p></div><br><br><b>GATE CSE 2017 Set 1 | Question: 53</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/118473/gate-cse-2017-set-1-question-53\" target=\"_blank\">https://gateoverflow.in/118473/gate-cse-2017-set-1-question-53</a></p>"
        },
        {
          "id": 18,
          "question": "<p><a name=\"118442\"></a><div itemprop=\"text\"><p>The output of executing the following C program is _______________ .</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include&lt;stdio.h&gt;\n\nint total(int v) {\n    static int count = 0;\n    while(v) {\n        count += v&amp;1;\n        v &gt;&gt;= 1;\n    }\n    return count;\n}\n\nvoid main() {\n    static int x=0;\n    int i=5;\n    for(; i&gt;0; i--) {\n        x = x + total(i);\n    }\n    printf(\"%d\\n\", x);\n}</pre>\n\n</div><br><br><b>GATE CSE 2017 Set 1 | Question: 55</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "23",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/118442/gate-cse-2017-set-1-question-55\" target=\"_blank\">https://gateoverflow.in/118442/gate-cse-2017-set-1-question-55</a></p>"
        },
        {
          "id": 19,
          "question": "<p><a name=\"118171\"></a><div itemprop=\"text\"><p>Match the following:\\[ \\begin{array}{|ll|ll|}\\hline P.&nbsp;&amp; \\text{static char var ;} &amp; \\text{i.}&nbsp;&amp; \\text{Sequence of memory locations to store addresses} \\\\\\hline&nbsp; Q.&nbsp;&amp; \\text{m = malloc(10); m =NULL ;} &amp; \\text{ii.}&nbsp;&amp; \\text{A variable located in data section of memory} \\\\\\hline R. &amp; \\text{char *ptr[10] ;} &amp; \\text{iii.} &amp; \\text{Request to allocate a CPU register to store data}&nbsp;\\\\\\hline S. &amp; \\text{&nbsp;register int varl;} &amp; \\text{iv.} &amp; \\text{A lost memory which cannot be freed}&nbsp;\\\\\\hline\\end{array} \\]</p>\n\n</div><br><br><b>GATE CSE 2017 Set 2 | Question: 2</b></p>",
          "type": "single",
          "options": [
            "<p>P-ii; Q-iv; R-i; S-iii</p>",
            "<p>P-ii; Q-i; R-iv; S-iii</p>",
            "<p>P-ii; Q-iv; R-iii; S-i</p>",
            "<p>P-iii; Q-iv; R-i; S-ii</p>"
          ],
          "correct_answer": "<p>P-ii; Q-iv; R-i; S-iii</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/118171/gate-cse-2017-set-2-question-2\" target=\"_blank\">https://gateoverflow.in/118171/gate-cse-2017-set-2-question-2</a></p>"
        },
        {
          "id": 20,
          "question": "<p><a name=\"118272\"></a><div itemprop=\"text\"><p>Consider the following C program.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include&lt;stdio.h&gt;\nint main () {\n    int m=10;\n    int n, n1;\n    n=++m;\n    n1=m++;\n    n--;\n    --n1;\n    n-=n1;\n    printf(“%d”, n);\n    return 0;\n}</pre>\n\n<p>The output of the program is ______</p></div><br><br><b>GATE CSE 2017 Set 2 | Question: 54</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/118272/gate-cse-2017-set-2-question-54\" target=\"_blank\">https://gateoverflow.in/118272/gate-cse-2017-set-2-question-54</a></p>"
        },
        {
          "id": 21,
          "question": "<p><a name=\"204106\"></a><div itemprop=\"text\"><p>Consider the following C code. Assume that unsigned long int type length is \\( 64 \\) bits.</p>\n\n<pre class=\"prettyprint lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">unsigned long int fun(unsigned long int n) {\n        unsigned long int i, j=0, sum = 0;\n        for( i=n; i&gt;1; i=i/2) j++;\n        for( ; j&gt;1; j=j/2) sum++;\n        return sum;\n}</pre>\n\n<p>The value returned when we call fun&nbsp;with the input \\( 2^{40} \\) is:</p>\n\n</div><br><br><b>GATE CSE 2018 | Question: 32</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 4 \\)</p>",
            "<p>\\( 5 \\)</p>",
            "<p>\\( 6 \\)</p>",
            "<p>\\( 40 \\)</p>"
          ],
          "correct_answer": "<p>\\( 5 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/204106/gate-cse-2018-question-32\" target=\"_blank\">https://gateoverflow.in/204106/gate-cse-2018-question-32</a></p>"
        },
        {
          "id": 22,
          "question": "<p><a name=\"302821\"></a><div itemprop=\"text\"><p>Consider the following C program:</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt;\nint r() {\n       static int num=7;\n       return num--;\n}\nint main() {\n       for (r();r();r())\n              printf(“%d”,r());\n       return 0;\n}</pre>\n\n<p>Which one of the following values will be displayed on execution of the programs?</p>\n\n</div><br><br><b>GATE CSE 2019 | Question: 27</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 41 \\)</p>",
            "<p>\\( 52 \\)</p>",
            "<p>\\( 63 \\)</p>",
            "<p>\\( 630 \\)</p>"
          ],
          "correct_answer": "<p>\\( 52 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/302821/gate-cse-2019-question-27\" target=\"_blank\">https://gateoverflow.in/302821/gate-cse-2019-question-27</a></p>"
        },
        {
          "id": 23,
          "question": "<p><a name=\"302796\"></a><div itemprop=\"text\"><p>Consider the following C program:</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt;\nint main() {\n    float sum = 0.0, j=1.0, i=2.0;\n    while (i/j &gt; 0.0625) {\n        j=j+j;\n        sum=sum+i/j;\n        printf(\"%f\\n\", sum);\n    }\n    return 0;\n}</pre>\n\n<p>The number of times the variable sum will be printed, when the above program is executed, is _________</p></div><br><br><b>GATE CSE 2019 | Question: 52</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/302796/gate-cse-2019-question-52\" target=\"_blank\">https://gateoverflow.in/302796/gate-cse-2019-question-52</a></p>"
        },
        {
          "id": 24,
          "question": "<p><a name=\"302795\"></a><div itemprop=\"text\"><p>Consider the following C program:</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt;\nint main()\n{\n    int a[] = {2, 4, 6, 8, 10};\n    int i, sum=0, *b=a+4;\n    for (i=0; i&lt;5; i++)\n        sum=sum+(*b-i)-*(b-i);\n    printf(\"%d\\n\", sum);\n    return 0;\n}</pre>\n\n<p>The output of the above C program is _______</p></div><br><br><b>GATE CSE 2019 | Question: 53</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/302795/gate-cse-2019-question-53\" target=\"_blank\">https://gateoverflow.in/302795/gate-cse-2019-question-53</a></p>"
        },
        {
          "id": 25,
          "question": "<p><a name=\"357414\"></a><div itemprop=\"text\"><p>​​​​​Consider the following\\( \\text{ ANSI C} \\)&nbsp;program.</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt;\nint main()\n{\n    int i, j, count;\n    count=0;\n    i=0;\n    for (j=-3; j&lt;=3; j++)\n    {\n        if (( j &gt;= 0) &amp;&amp; (i++))\n            count = count + j;\n    }\n    count = count +i;\n    printf(\"%d\", count);\n    return 0;\n}</pre>\n\n<p>Which one of the following options is correct?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 1 | Question: 37</b></p>",
          "type": "single",
          "options": [
            "<p>The program will not compile successfully</p>",
            "<p>The program will compile successfully and output \\( 10 \\) when executed</p>",
            "<p>The program will compile successfully and output \\( 8 \\) when executed</p>",
            "<p>The program will compile successfully and output \\( 13 \\) when executed</p>"
          ],
          "correct_answer": "<p>The program will compile successfully and output \\( 10 \\) when executed</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357414/gate-cse-2021-set-1-question-37\" target=\"_blank\">https://gateoverflow.in/357414/gate-cse-2021-set-1-question-37</a></p>"
        },
        {
          "id": 26,
          "question": "<p><a name=\"422804\"></a><div itemprop=\"text\"><p>​​Consider the following \\( \\mathrm{C} \\) function definition.</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int f (int x, int y){\nfor (int i=0 ; i&lt;y ; i++ ) {\nx= x + x + y;\n}\nreturn x;\n}</pre>\n\n<p>Which of the following statements is/are TRUE about the above function?</p>\n\n</div><br><br><b>GATE CSE 2024 | Set 1 | Question: 38</b></p>",
          "type": "multiple",
          "options": [
            "<p>If the inputs are \\( x=20, y=10 \\), then the return value is greater than \\( 2^{20} \\)</p>",
            "<p>If the inputs are \\( x=20, y=20 \\), then the return value is greater than \\( 2^{20} \\)</p>",
            "<p>If the inputs are \\( x=20, y=10 \\), then the return value is less than \\( 2^{10} \\)</p>",
            "<p>If the inputs are \\( x=10, y=20 \\), then the return value is greater than \\( 2^{20} \\)</p>"
          ],
          "correct_answer": [
            "<p>If the inputs are \\( x=20, y=20 \\), then the return value is greater than \\( 2^{20} \\)</p>",
            "<p>If the inputs are \\( x=10, y=20 \\), then the return value is greater than \\( 2^{20} \\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422804/gate-cse-2024-set-1-question-38\" target=\"_blank\">https://gateoverflow.in/422804/gate-cse-2024-set-1-question-38</a></p>"
        },
        {
          "id": 27,
          "question": "<p><a name=\"3702\"></a><div itemprop=\"text\"><p>What is the output of the following program?</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include&lt;stdio.h&gt;\nint funcf (int x);\nint funcg (int y);\nmain ()\n{\n    int x = 5, y = 10, count;\n    for (count = 1; count &lt;= 2; ++count) {\n        y += funcf(x) + funcg(x);\n        printf (\"%d\", y);\n    }\n}\nfuncf (int x) {\n    int y;\n    y = funcg(x);\n    return (y);\n}\nfuncg (int x) {\n    static int y = 10;\n    y += 1;\n    return (y + x);\n}</pre>\n\n</div><br><br><b>GATE IT 2004 | Question: 59</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 43 \\ 80 \\)</p>",
            "<p>\\( 42 \\ 74 \\)</p>",
            "<p>\\( 33 \\ 37 \\)</p>",
            "<p>\\( 32 \\ 32 \\)</p>"
          ],
          "correct_answer": "<p>\\( 43 \\ 80 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3702/gate-it-2004-question-59\" target=\"_blank\">https://gateoverflow.in/3702/gate-it-2004-question-59</a></p>"
        },
        {
          "id": 28,
          "question": "<p><a name=\"3703\"></a><div itemprop=\"text\"><p>Choose the correct option to fill the \\( ?1 \\) and \\( ?2 \\) so that the program prints an input string in reverse order. Assume that the input string is terminated by a new line character.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include &lt;stdio.h&gt;\nvoid wrt_it (void);\nint main (void)\n{\n    printf(\"Enter Text\"); \n    printf (\"\\n\");\n    wrt_it();\n    printf (\"\\n\");\n    return 0;\n}\nvoid wrt_it (void)\n{\n    int c;\n    if (?1)\n        wrt_it();\n    ?2\n}</pre>\n\n</div><br><br><b>GATE IT 2004 | Question: 60</b></p>",
          "type": "single",
          "options": [
            "<p>\\( ?1 \\) is&nbsp; \\( getchar() ! = \\) '\\n'<br>\n\t\\( ?2 \\) is&nbsp; \\( getchar(c); \\)</p>",
            "<p>\\( ?1 \\) is&nbsp; \\( (c = getchar()); ! = \\) '\\n'<br>\n\t\\( ?2 \\) is&nbsp; \\( getchar(c); \\)</p>",
            "<p>\\( ?1 \\) is&nbsp; \\( c! = \\) '\\n'<br>\n\t\\( ?2 \\) is&nbsp; \\( putchar(c); \\)</p>",
            "<p>\\( ?1 \\) is&nbsp; \\( (c = getchar()) ! = \\) '\\n'<br>\n\t\\( ?2 \\) is&nbsp; \\( putchar(c); \\)</p>"
          ],
          "correct_answer": "<p>\\( ?1 \\) is&nbsp; \\( (c = getchar()) ! = \\) '\\n'<br>\n\t\\( ?2 \\) is&nbsp; \\( putchar(c); \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3703/gate-it-2004-question-60\" target=\"_blank\">https://gateoverflow.in/3703/gate-it-2004-question-60</a></p>"
        },
        {
          "id": 29,
          "question": "<p><a name=\"3819\"></a><div itemprop=\"text\"><p>Let \\( a \\) be an array containing \\( n \\) integers in increasing order. The following algorithm determines whether there are two distinct numbers in the array whose difference is a specified number \\( S &gt; 0 \\).</p>\n\n<pre class=\"prettyprint lang-c_cpp\">i = 0; j = 1;\nwhile (j &lt; n ){\n         if (E) j++;\n         else if (a[j] - a[i] == S) break;\n         else i++;\n}\nif (j &lt; n) printf(\"yes\") else printf (\"no\");\n</pre>\n\n<p>Choose the correct expression for E.</p>\n\n</div><br><br><b>GATE IT 2005 | Question: 58</b></p>",
          "type": "single",
          "options": [
            "<p>\\( a[j] - a[i] &gt; S \\)</p>",
            "<p>\\( a[j] - a[i] &lt; S \\)</p>",
            "<p>\\( a[i] - a[j] &lt; S \\)</p>",
            "<p>\\( a[i] - a[j] &gt; S \\)</p>"
          ],
          "correct_answer": "<p>\\( a[j] - a[i] &lt; S \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3819/gate-it-2005-question-58\" target=\"_blank\">https://gateoverflow.in/3819/gate-it-2005-question-58</a></p>"
        },
        {
          "id": 30,
          "question": "<p><a name=\"3594\"></a><div itemprop=\"text\"><p>Which one of the choices given below would be printed when the following program is executed? &nbsp; &nbsp; &nbsp; &nbsp;</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include &lt;stdio.h&gt;\nint a1[] = {6, 7, 8, 18, 34, 67};\nint a2[] = {23, 56, 28, 29};\nint a3[] = {-12, 27, -31};\nint *x[] = {a1, a2, a3};\nvoid print(int *a[])\n{\n            printf(\"%d,\", a[0][2]);\n            printf(\"%d,\", *a[2]);\n            printf(\"%d,\", *++a[0]);\n            printf(\"%d,\", *(++a)[0]);\n            printf(\"%d\\n\", a[-1][+1]);\n}\nmain()\n{\n             print(x);\n}\n\n</pre>\n\n</div><br><br><b>GATE IT 2006 | Question: 51</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 8, -12, 7, 23, 8 \\)</p>",
            "<p>\\( 8, 8, 7, 23, 7 \\)</p>",
            "<p>\\( -12, -12, 27, -31, 23 \\)</p>",
            "<p>\\( -12, -12, 27, -31, 56 \\)</p>"
          ],
          "correct_answer": "<p>\\( 8, -12, 7, 23, 8 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3594/gate-it-2006-question-51\" target=\"_blank\">https://gateoverflow.in/3594/gate-it-2006-question-51</a></p>"
        },
        {
          "id": 31,
          "question": "<p><a name=\"3464\"></a><div itemprop=\"text\"><p>Consider the C program given below :&nbsp;</p>\n\n<pre class=\"prettyprint lang-c_cpp\">#include &lt;stdio.h&gt;\nint main ()    {\n    int sum = 0, maxsum = 0,  i,  n = 6;\n    int a [] = {2, -2, -1, 3, 4, 2};\n    for (i = 0; i &lt; n; i++)    {\n            if (i == 0 || a [i]  &lt; 0  || a [i] &lt; a [i - 1])  {\n                     if (sum &gt; maxsum) maxsum = sum;\n                     sum = (a [i] &gt; 0) ? a [i] : 0;\n            }\n            else sum += a [i];\n    }\n    if (sum &gt; maxsum) maxsum = sum ;\n    printf (\"%d\\n\", maxsum);\n\n}\n</pre>\n\n<p>What is the value printed out when this program is executed?</p>\n\n</div><br><br><b>GATE IT 2007 | Question: 31</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 9 \\)</p>",
            "<p>\\( 8 \\)</p>",
            "<p>\\( 7 \\)</p>",
            "<p>\\( 6 \\)</p>"
          ],
          "correct_answer": "<p>\\( 7 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3464/gate-it-2007-question-31\" target=\"_blank\">https://gateoverflow.in/3464/gate-it-2007-question-31</a></p>"
        }
      ]
    }
  ]
});
