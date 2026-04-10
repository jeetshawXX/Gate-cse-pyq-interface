window.__examLoadCallback({
  "title": "C_Programming - C_Programming - Slot 11",
  "duration": 42,
  "sections": [
    {
      "name": "C_Programming",
      "questions": [
        {
          "id": 1,
          "question": "<p>What is the output printed by the following C code?<br><pre><code> #include &lt; stdio.h &gt;\nint main ()\n{\n    char a [6] = \"world\";\n    int i, j;\n    for (i = 0, j = 5; i &lt; j; a [i++] = a [j--]);\n    printf (\"%s\\n\", a);\n}</code></pre> <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A. dlrow</p>",
            "<b>B.</b> <p>B. Null string</p>",
            "<b>C.</b> <p>C. dlrld</p>",
            "<b>D.</b> <p>D. worow</p>"
          ],
          "correct_answer": "<b>B.</b> <p>B. Null string</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3359/gate2008-it-49\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Match the programming paradigms and languages given in the following table.<br> \\(\\begin{array}{|l|l|l|l|ll} \\hline &amp;\\text { Paradigms } &amp; &amp;\\text { Languages } \\\\ \\hline \\text { (I) } &amp; \\text { Imperative } &amp; \\text { (a) } &amp; \\text { Prolog } \\\\ \\hline \\text { (II) } &amp; \\text { Object Oriented } &amp; \\text { (b) } &amp; \\text { Lisp } \\\\ \\hline \\text { (III) } &amp; \\text { Functional } &amp; \\text { (c) } &amp; \\text { C, Fortran 77, Pascal } \\\\ \\hline \\text { (IV) } &amp; \\text { Logic } &amp; \\text { (d) } &amp; \\text { C++, Smalltalk, Java } \\\\ \\hline \\end{array}\\) <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I-c, II-d, III-b, IV-a</p>",
            "<b>B.</b> <p>I-a, II-d, III-c, IV-b</p>",
            "<b>C.</b> <p>I-d, II-c, III-b, IV-a</p>",
            "<b>D.</b> <p>I-c, II-d, III-a, IV-b</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I-c, II-d, III-b, IV-a</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3273/gate2008-it-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the following C program that attempts to locate an element x in an array Y[] using binary search. The program is erroneous.<pre><code> 1.   f(int Y[10], int x) {\n2.     int i, j, k;\n3.     i = 0; j = 9;\n4.     do {\n5.             k =  (i + j) /2;\n6.             if( Y[k] &lt; x)  i = k; else j = k;\n7.         } while(Y[k] != x &amp;&amp; i &lt; j);\n8.     if(Y[k] == x) printf (\"x is in the array \") ;\n9.     else printf (\" x is not in the array \") ;\n10. }</code></pre> The correction needed in the program to make it work properly is <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Change line 6 to: if (Y[k] \\(\\lt\\)x)   i=k+1; else j=k-1;</p>",
            "<b>B.</b> <p>Change line 6 to: if (Y[k]\\(\\lt\\)x) i=k-1; else j=k+1;</p>",
            "<b>C.</b> <p>Change line 6 to: if (Y[k] \\(\\leq\\)x) i=k; else j=k;</p>",
            "<b>D.</b> <p>Change line 7 to: } while ((Y[k]==x) &amp;&amp; (i\\(\\lt\\)j));</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Change line 6 to: if (Y[k] \\(\\lt\\)x)   i=k+1; else j=k-1;</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43508/gate2008-85#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the following C program that attempts to locate an element x in an array Y[] using binary search. The program is erroneous.<pre><code> 1.   f(int Y[10], int x) {\n2.     int i, j, k;\n3.     i = 0; j = 9;\n4.     do {\n5.             k =  (i + j) /2;\n6.             if( Y[k] &lt; x)  i = k; else j = k;\n7.         } while(Y[k] != x &amp;&amp; i &lt; j);\n8.     if(Y[k] == x) printf (\"x is in the array \") ;\n9.     else printf (\" x is not in the array \") ;\n10. }</code></pre> On which of the following contents of Y and x does the program fail? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Y is [1 2 3 4 5 6 7 8 9 10] and x \\(\\lt\\) 10</p>",
            "<b>B.</b> <p>Y is [1 3 5 7 9 11 13 15 17 19] and x \\(\\lt\\) 1</p>",
            "<b>C.</b> <p>Y is [2 2 2 2 2 2 2 2 2 2] and x\\(\\gt\\) 2</p>",
            "<b>D.</b> <p>Y is [2 4 6 8 10 12 14 16 18 20] and 2 \\(\\lt\\)x \\(\\lt\\) 20 and x is even</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Y is [2 2 2 2 2 2 2 2 2 2] and x\\(\\gt\\) 2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/394/gate2008-84#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
          "question": "<p>Which combination of the integer variables x, y and z makes the variable a get\nthe value 4 in the following expression?<pre><code>a = (x &gt; y) ? ((x &gt; z) ? x : z) : ((y &gt; z) ? y : z) </code></pre> <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>x = 3,y = 4, z = 2</p>",
            "<b>B.</b> <p>x = 6,y = 5,z = 3</p>",
            "<b>C.</b> <p>x = 6,y = 3,z = 5</p>",
            "<b>D.</b> <p>x = 5, y = 4,z = 5</p>"
          ],
          "correct_answer": "<b>A.</b> <p>x = 3,y = 4, z = 2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/416/gate2008-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Which of the following programming language(s) provides garbage collection automatically <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Lisp</p>",
            "<b>B.</b> <p>C++</p>",
            "<b>C.</b> <p>Fortan</p>",
            "<b>D.</b> <p>C</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Lisp</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49623/isro2007-57\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Study the following program<br><pre><code>//precondition: x&gt;=0\npublic void demo(int x)\n{\n    System.out.print(x % 10); \n    if (x % 10 != 0)\n    {\n        demo(x/10);\n    }\n    System.out.print(x%10);\n} </code></pre> <br>\nWhich of the following is printed as a result of the call demo (1234)? <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1441</p>",
            "<b>B.</b> <p>3443</p>",
            "<b>C.</b> <p>12344321</p>",
            "<b>D.</b> <p>43211234</p>"
          ],
          "correct_answer": "<b>D.</b> <p>43211234</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49496/isro2007-23\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the following pseudo-code<br><pre><code>x:=1;\ni:=1;\nwhile (x &lt;= 1000)\nbegin\n    x:=2^x;\n    i:=i+1;\nend; </code></pre> <br>\nWhat is the value of i at the end of the pseudo-code? <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>6</p>",
            "<b>D.</b> <p>7</p>"
          ],
          "correct_answer": "<b>B.</b> <p>5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49486/isro2007-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
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
          "id": 13,
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
          "id": 14,
          "question": "<p>Consider the C program given below : <br><pre><code> #include &lt; stdio.h &gt;\n\nint main ()    {\n    int sum = 0, maxsum = 0,  i,  n = 6;\n    int a [] = {2, -2, -1, 3, 4, 2};\n    for (i = 0; i &lt; n; i++)    {\n            if (i == 0 || a [i]  &lt; 0  || a [i] &lt; a [i - 1])  {\n                     if (sum &gt; maxsum) maxsum = sum;\n                     sum = (a [i] &gt; 0) ? a [i] : 0;\n            }\n            else sum += a [i];\n    }\n    if (sum &gt; maxsum) maxsum = sum ;\n    printf (\"%d\\n\", maxsum);\n\n}</code></pre> <br>What is the value printed out when this program is executed? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>9</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>7</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>C.</b> <p>7</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3464/gate2007-it-31\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
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
        }
      ]
    }
  ]
});
