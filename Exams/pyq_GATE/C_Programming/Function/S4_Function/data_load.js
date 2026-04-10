window.__examLoadCallback({
  "title": "Function - Function - Slot 4",
  "duration": 42,
  "sections": [
    {
      "name": "Function",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the C program below. What does it print?<pre><code> #include &lt; stdio.h &gt;\n# define swapl (a, b) tmp = a; a = b; b = tmp\nvoid swap2 ( int a, int b)\n{\n        int tmp;\n        tmp = a; a = b; b = tmp;\n }\nvoid swap3 (int*a, int*b)\n{\n        int tmp;\n        tmp = *a; *a = *b; *b = tmp;\n}\nint main ()\n{\n        int num1 = 5, num2 = 4, tmp;\n        if (num1 &lt; num2) {swap1 (num1, num2);}\n        if (num1 &lt; num2) {swap2 (num1 + 1, num2);}\n        if (num1 &gt; = num2) {swap3 (&amp;num1, &amp;num2);}\n        printf (\"%d, %d\", num1, num2);\n}</code></pre> <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5,5</p>",
            "<b>B.</b> <p>5,4</p>",
            "<b>C.</b> <p>4,5</p>",
            "<b>D.</b> <p>4,4</p>"
          ],
          "correct_answer": "<b>C.</b> <p>4,5</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3360/gate2008-it-50\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the following C functions:<pre><code>int f1(int n)\n{\n  if(n == 0 || n == 1)\n    return n;\n  else\n    return (2*f1(n-1) + 3*f1(n-2));\n}\n \nint f2(int n)\n{\n  int i;\n  int X[N], Y[N], Z[N] ;\n  X[0] = Y[0] = Z[0] = 0;\n  X[1] = 1; Y[1] = 2; Z[1] = 3;\n  for(i = 2; i &lt;= n; i++)\n  {\n    X[i] = Y[i-1] + Z[i-2];\n    Y[i] = 2*X[i];\n    Z[i] = 3*X[i];\n  }\n  return X[n] ;\n}</code></pre> f1(8) and f2(8) return the values <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1661 and 1640</p>",
            "<b>B.</b> <p>59 and 59</p>",
            "<b>C.</b> <p>1640 and 1640</p>",
            "<b>D.</b> <p>1640 and 1661</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1640 and 1640</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43489/gate2008-75#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Choose the correct option to fill ? 1 and ? 2 so that the program below prints an\ninput string in reverse order. Assume that the input string is terminated by a\nnewline character.<pre><code> void recerse void {\n   int c;\n   if (?1) reverse ();\n   ?2\n}\nmain {\n    printf(\"Enter Text \"); printf(\"\\ n\") ;\n    reverse();  printf(\"\\ n\");\n}</code></pre> <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>?1 is (getchar ( )! = '\\ n') <br>\n?2 is getchar (c);</p>",
            "<b>B.</b> <p>?1 is (c = getchar ( ) )! = '\\ n')<br>\n?2 is getchar (c);</p>",
            "<b>C.</b> <p>?1 is (c ! = '\\ n')<br>\n?2 is putchar (c);</p>",
            "<b>D.</b> <p>?1 is ((c = getchar ( ) )! = '\\ n') <br>\n?2 is putchar (c);</p>"
          ],
          "correct_answer": "<b>D.</b> <p>?1 is ((c = getchar ( ) )! = '\\ n') <br>\n?2 is putchar (c);</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/484/gate2008-61#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>What is printed by the following C program?<pre><code> int f(int x, int *py, int **ppz)\t\t\t\n{\t\t\t\t\t\t                    \t\n    int y, z;\t\t\t\t\t                \t\t\n    **ppz += 1; z = **ppz;\t\t                \n    *py += 2; y = *py;\t\t\t\t\t                \t\n    x += 3;\t\t\t\t\t                    \t\n    return x+y+z;\n}\n\nvoid main()\n{\n    int c, *b, **a;\n    c = 4; b = &amp;c; a = &amp;b;\n    printf(\"%d\", f(c, b, a));\n    \t\n}</code></pre> <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>18</p>",
            "<b>B.</b> <p>19</p>",
            "<b>C.</b> <p>21</p>",
            "<b>D.</b> <p>22</p>"
          ],
          "correct_answer": "<b>B.</b> <p>19</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/483/gate2008-60#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the program below in a hypothetical programming language which allows global variables and a choice of static or dynamic scoping.<br><pre><code>int i ;\nprogram main ()\n{\n    i = 10;\n    call f();\n}\n\nprocedure f()\n{   \n    int i = 20;\n    call g ();\n}\nprocedure g ()\n{   \n    print i;\n} </code></pre> <br>Let x be the value printed under static scoping and y be the value printed under dynamic scoping. Then, x and y are: <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>x=10, y=20</p>",
            "<b>B.</b> <p>x=20, y=10</p>",
            "<b>C.</b> <p>x=10, y=10</p>",
            "<b>D.</b> <p>x=20, y=20</p>"
          ],
          "correct_answer": "<b>A.</b> <p>x=10, y=20</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3467/gate2007-it-34-ugcnet-dec2012-iii-52\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the program below in a hypothetical language which allows global variable and a choice of call by reference or call by value methods of parameter passing. <br><pre><code>int i ;\nprogram main ()\n{\n    int j = 60;\n    i = 50;\n    call f (i, j);\n    print i, j;\n}\nprocedure f (x, y)\n{           \n    i = 100;\n    x = 10;\n    y = y + i ;\n} </code></pre> <br>Which one of the following options represents the correct output of the program for the two parameter passing mechanisms? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Call by value : i = 70, j = 10; Call by reference :i = 60, j = 70</p>",
            "<b>B.</b> <p>Call by value : i = 50, j = 60; Call by reference :i = 50, j = 70</p>",
            "<b>C.</b> <p>Call by value : i = 10, j = 70; Call by reference :i = 100, j = 60</p>",
            "<b>D.</b> <p>Call by value : i = 100, j = 60; Call by reference :i = 10, j = 70</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Call by value : i = 100, j = 60; Call by reference :i = 10, j = 70</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3466/gate2007-it-33\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>The function f is defined as follows:<br><pre><code> int f (int n) {\n    if (n &lt;= 1) return 1;\n    else if (n % 2  ==  0) return f(n/2);\n    else return f(3n - 1);\n}</code></pre> <br>\nAssuming that arbitrarily large integers can be passed as a parameter to the function, consider the following statements.<br><br>i. The function f terminates for finitely many different values of \\(n \\geq 1\\).<br>\nii. The function f terminates for infinitely many different values of \\(n \\geq 1\\).<br>\niii. The function f does not terminate for finitely many different values of \\(n \\geq 1\\).<br>\niv. The function f does not terminate for infinitely many different values of \\(n \\geq 1\\).<br><br>\nWhich one of the following options is true of the above? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>i and iii</p>",
            "<b>B.</b> <p>i and iv</p>",
            "<b>C.</b> <p>ii and iii</p>",
            "<b>D.</b> <p>ii and iv</p>"
          ],
          "correct_answer": "<b>D.</b> <p>ii and iv</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3460/gate2007-it-27\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the following C function:<pre><code> #include &lt; stdio.h &gt;\nint f(int n)\n{\n    static int r = 0;\n    if (n &lt;= 0) return 1;\n    if (n &gt; 3)\n    {\n        r = n;\n        return f(n-2)+2;\n    }\n    return f(n-1)+r;\n}\n \nint main()\n{\n    printf(\"%d\", f(5));\n} </code></pre>\nWhat is the value of f(5)? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>7</p>",
            "<b>C.</b> <p>9</p>",
            "<b>D.</b> <p>18</p>"
          ],
          "correct_answer": "<b>D.</b> <p>18</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1240/gate2007-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>The following function computes the value of  \\(\\binom{m}{n}\\) correctly for all legal values \\(m\\) and \\(n\\) \\( (m \\geq 1, n \\geq 0 \\text{ and } m \\gt n)\\)<pre><code> int func(int m, int n)\n{\n    if (E) return 1;\n    else return(func(m -1, n) + func(m - 1, n - 1));\n}</code></pre>In the above function, which of the following is the correct expression for E? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(n = = 0) || (m = = 1)</p>",
            "<b>B.</b> <p>(n = = 0) &amp;&amp; (m = = 1)</p>",
            "<b>C.</b> <p>(n = = 0) || (m = = n)</p>",
            "<b>D.</b> <p>(n = = 0) &amp;&amp; (m = = n)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>(n = = 0) || (m = = n)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3595/gate2006-it-52\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Which one of the choices given below would be printed when the following program is executed?<br><pre><code>#include &lt; stdio.h &gt;\nvoid swap (int *x, int *y)\n{\n    static int *temp;\n    temp = x;\n    x = y;\n    y = temp;\n}\nvoid printab ()\n{\n    static int i, a = -3, b = -6;\n    i = 0;\n    while (i &lt;= 4)\n    {\n        if ((i++)%2 == 1) continue;\n        a = a + i;\n        b = b + i;\n    }\n    swap (&amp;a, &amp;b);\n    printf(\"a =  %d, b = %d\\n\", a, b);\n}\nmain()\n{\n    printab();\n    printab();\n} </code></pre> <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>a = 0, b = 3\na = 0, b = 3</p>",
            "<b>B.</b> <p>a = 3, b = 0\na = 12, b = 9</p>",
            "<b>C.</b> <p>a = 3, b = 6\na = 3, b = 6</p>",
            "<b>D.</b> <p>a = 6, b = 3\na = 15, b = 12</p>"
          ],
          "correct_answer": "<b>D.</b> <p>a = 6, b = 3\na = 15, b = 12</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3593/gate2006-it-50\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the C code to swap two integers and these five statements: the code<pre><code> void swap(int *px,int *py){\n*px=*px-*py;\n*py=*px+*py;\n*px=*py-*px;\n}</code></pre> S1 : will generate a compilation error <br>\nS2 : may generate a segmentation fault at runtime depending on the arguments passed <br>\nS3 : correctly implements the swap procedure for all input pointers referreing to integers stored in memory locations accessible tot he process <br>\nS4 : implements the swap procedure correctly for some but not all valid input pointers <br>\nS5 : may add or subtract integers and pointers <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1</p>",
            "<b>B.</b> <p>S2 and S3</p>",
            "<b>C.</b> <p>S2 and S4</p>",
            "<b>D.</b> <p>S2 and S5</p>"
          ],
          "correct_answer": "<b>C.</b> <p>S2 and S4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1835/gate2006-57#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the following code written in a pass-by reference language like FORTAN\nand these statements about the code.<pre><code>subroutine swap(ix,iy)\n     it = ix\nL1 : ix = iy\nL2 : iy = it\nend\n  ia = 3\n  ib = 8\n  call swap (ia, 1b+5)\n  print *, ia, ib\nend </code></pre>\nS1: The complier will generate code to allocate a temporary nameless cell,\ninitialize it to 13, and pass the address of the cell to swap <br>\nS2: On execution the code will generate a runtime error on line L1 <br>\nS3: On execution the code will generate a runtime error on line L2  <br> S4: The program will print 13 and 8 <br>\nS5: The program will print 13 and -2 <br>\nExactly the following set of statement (s) is correct: <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>S1 and S2</p>",
            "<b>B.</b> <p>S1 and S4</p>",
            "<b>C.</b> <p>S3</p>",
            "<b>D.</b> <p>S1 and S5</p>"
          ],
          "correct_answer": "<b>B.</b> <p>S1 and S4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1834/gate2006-56#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>What is the output printed by the following program?<br><pre><code> #include &lt; stdio.h &gt;\nint f(int n, int k) {\n    if (n == 0) return 0;\n    else if (n % 2) return f(n/2, 2*k) + k;\n    else return f(n/2, 2*k) - k;\n}\n\nint main () {\n    printf(\"%d\", f(20, 1));\n    return 0;\n}</code></pre> <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>9</p>",
            "<b>D.</b> <p>20</p>"
          ],
          "correct_answer": "<b>C.</b> <p>9</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3818/gate2005-it-57\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the following C-program:<pre><code>\ndouble foo (double); /* Line 1 */\nint main()\n{\n    double da, db;\n    // input da\n    db = foo(da);\n}\ndouble foo(double a)\n{\n    return a;\n}</code></pre>\nThe above code compiled without any error or warning. If Line 1 is deleted, the above code will\nshow: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>no compile warning or error</p>",
            "<b>B.</b> <p>some compiler-warnings not leading to unintended results</p>",
            "<b>C.</b> <p>some compiler-warnings due to type-mismatch eventually leading to unintended results</p>",
            "<b>D.</b> <p>compiler errors</p>"
          ],
          "correct_answer": "<b>D.</b> <p>compiler errors</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1368/gate2005-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the following C-program:<pre><code>void foo(int n, int sum)\n{\n  int k = 0, j = 0;\n  if (n == 0) return;\n    k = n % 10; \n  j = n / 10;\n  sum = sum + k;\n  foo (j, sum);\n  printf (\"%d,\", k);\n}\n  \nint main ()\n{\n  int a = 2048, sum = 0;\n  foo (a, sum);\n  printf (\"%dn\", sum);\n    \n  getchar();\n}</code></pre>\nWhat does the above program print? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8, 4, 0, 2, 14</p>",
            "<b>B.</b> <p>8, 4, 0, 2, 0</p>",
            "<b>C.</b> <p>2, 0, 4, 8, 14</p>",
            "<b>D.</b> <p>2, 0, 4, 8, 0</p>"
          ],
          "correct_answer": "<b>D.</b> <p>2, 0, 4, 8, 0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1367/gate2005-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
