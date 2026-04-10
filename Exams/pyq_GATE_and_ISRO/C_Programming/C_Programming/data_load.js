window.__examLoadCallback({
  "title": "C_Programming - C_Programming",
  "duration": 648,
  "sections": [
    {
      "name": "C_Programming",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\n\nint g(int n) {\n    return (n+10);\n}\n\nint f(int n) {\n    return g(n*2);\n}\n\nint main() {\n    int sum, n;\n    sum=0;\n    for (n=1; n&lt;3; n++)\n        sum += g(f(n));\n    printf (\"%d\", sum);\n    return 0;\n}\n</code></pre>\nThe output of the given C program is ________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "46",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460840/gate-cse-2025-set-2-question-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\n\nint main(){\n    int a;\n    int arr[5] = {30,50,10};\n    int *ptr;\n    ptr = &amp;arr[0] + 1;\n    a = *ptr;\n    (*ptr)++;\n    ptr++;\n    printf(\"%d\", a + (*ptr) + arr[1]);\n    return 0;\n}\n</code></pre>\nThe output of the above program is ___________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "111",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460841/gate-cse-2025-set-2-question-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p><pre><code>\nint x=126,y=105;\n do {\n\t if(x&gt;y) x=x-y; \n\telse y=y-x; \n      } while(x!=y); \n\nprintf(\"%d\",x); </code></pre>\nThe output of the given C code segment is ________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "21",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460812/gate-cse-2025-set-2-question-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\n\nvoid stringcopy(char *, char *);\n\nint main(){\n    char a[30] = \"@#Hello World!\";\n    stringcopy(a, a + 2);\n    printf(\"%s\\n\", a);\n    return 0;\n}\n\nvoid stringcopy(char *s, char *t) {\n    while(*t)\n        *s++ = *t++;\n}\n</code></pre>Which ONE of the following will be the output of the program? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>@#Hello World!</p>",
            "<b>B.</b> <p>Hello World!</p>",
            "<b>C.</b> <p>ello World!</p>",
            "<b>D.</b> <p>Hello World!d!</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Hello World!d!</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460826/gate-cse-2025-set-2-question-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;  \nint gate(int n) {  \n    int d, t, newnum, turn;  \n    newnum = turn = 0; t=1;  \n    while(n &gt;= t) t *= 10;  \n    t /= 10;  \n    while(t &gt; 0) {  \n        d = n / t;  \n        n = n % t;  \n        t /= 10;  \n        if(turn) newnum = 10 * newnum + d;  \n        turn = (turn + 1) % 2;  \n    }  \n    return newnum;  \n}  \nint main () {  \n    printf(\"%d\", gate(14362));  \n    return 0;  \n}\n</code></pre>\nThe value printed by the given C program is _________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "46",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460027/gate-cse-2025-set-1-question-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p><pre><code>#include &lt; stdio.h &gt;  \nint foo(int S[],int size){  \n    if(size == 0) return 0;  \n    if(size == 1) return 1;  \n    if(S[0] != S[1]) return 1+foo(S+1,size-1);  \n    return foo(S+1,size-1);  \n}  \nint main(){  \n    int A[]={0,1,2,2,2,0,0,1,1};  \n    printf(\"%d\",foo(A,9));  \n    return 0;  \n}  \n</code></pre>The value printed by the given C program is _________. (Answer in integer). <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460029/gate-cse-2025-set-1-question-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p><pre><code>\n#include &lt; stdio.h &gt;\nvoid foo(int *p, int x) {\n    *p = x;\n}\n\nint main() {\n    int *z;\n    int a = 20, b = 25;\n    z = &amp;a;\n    foo(z, b);\n    printf(\"%d\", a);\n    return 0;\n}\n</code></pre>\nThe output of the given C program is __________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "25",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460056/gate-cse-2025-set-1-question-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>The pseudocode of a function fun() is given below:<pre><code>\nfun(int A[0,...,n-1])\n{\n    for i=0 to n-2\n\tfor j=0 to n-i-2\n\t    if (A[j] &gt; A[j+1])\n\t\tthen swap A[j] and A[j+1]}\n}\n</code></pre>\nLet \\(A[0, \\dots, 29]\\) be an array storing 30 distinct integers in descending order. The number of swap operations that will be performed, if the function fun() is called with \\(A[0, \\dots, 29]\\) as argument, is __________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "435",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460057/gate-cse-2025-set-1-question-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider an array X that contains n positive integers. A subarray of X is defined to\nbe a sequence of array locations with consecutive indices.<br>\nThe C code snippet given below has been written to compute the length of the\nlongest subarray of X that contains at most two distinct integers. The code has two\nmissing expressions labelled (P) and (Q).<br><pre><code>\nint first=0, second=0, len1=0, len2=0, maxlen=0;\nfor (int i=0; i &lt; n; i++) {\n\t if (X[i] == first) {\n\t\tlen2++; len1++;\n\t } else if (X[i] == second) {\n\t\tlen2++;\n\t\tlen1 = (P) ;\n\t\tsecond = first;\n\t } else {\n\t\tlen2 = (Q) ;\n\t\tlen1 = 1; second = first;\n\t }\n\t if (len2 &gt; maxlen) {\n\t\tmaxlen = len2;\n\t}\n\t  first = X[i];\n}</code></pre>\nWhich one of the following options gives the CORRECT missing expressions?<br><br>\n(Hint: At the end of the i-th iteration, the value of len1 is the length of the longest\nsubarray ending with X[i] that contains all equal values, and len2 is the length\nof the longest subarray ending with X[i] that contains at most two distinct values.) <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(P)   len1+1    (Q)     len2+1</p>",
            "<b>B.</b> <p>(P)   1         (Q)     len1+1</p>",
            "<b>C.</b> <p>(P)   1         (Q)     len2+1</p>",
            "<b>D.</b> <p>(P)   len2+1    (Q)     len1+1</p>"
          ],
          "correct_answer": "<b>B.</b> <p>(P)   1         (Q)     len1+1</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422865/gate-cse-2024-set-2-question-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>What is the output of the following C program?<pre><code>\n#include &lt; stdio.h &gt;\nint main() {\ndouble a[2]={20.0, 25.0}, *p, *q;\np = a;\nq = p + 1;\nprintf(\"%d,%d\", (int)(q - p), (int)(*q - *p));\nreturn 0;}</code></pre> <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4,8</p>",
            "<b>B.</b> <p>1,5</p>",
            "<b>C.</b> <p>8,5</p>",
            "<b>D.</b> <p>1,8</p>"
          ],
          "correct_answer": "<b>B.</b> <p>1,5</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422871/gate-cse-2024-set-2-question-26#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the following C function definition.<pre><code>\nint fX(char *a){ \nchar *b = a; \nwhile(*b)\nb++;\nreturn b - a;}</code></pre>\nWhich of the following statements is/are TRUE? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The function call fX(\"abcd\") will always return a value</p>",
            "<b>B.</b> <p>Assuming a character array c is declared as char c[] = \"abcd\" in main(), the function call fX(c)will always return a value</p>",
            "<b>C.</b> <p>The code of the function will not compile</p>",
            "<b>D.</b> <p>Assuming a character pointer c is declared as char *c = \"abcd\" in main(), the function call fX(c)will always return a value</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The function call fX(\"abcd\") will always return a value</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422874/gate-cse-2024-set-2-question-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the following C program. Assume parameters to a function are evaluated\nfrom right to left.<pre><code>\n#include &lt; stdio.h &gt;\nint g(int p) { printf(\"%d\", p); return p; }\nint h(int q) { printf(\"%d\", q); return q; }\nvoid f(int x, int y) {\ng(x);\nh(y);\n}\nint main() {\nf(g(10),h(20));\n}</code></pre>\nWhich one of the following options is the CORRECT output of the above\nC program? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>20101020</p>",
            "<b>B.</b> <p>10202010</p>",
            "<b>C.</b> <p>20102010</p>",
            "<b>D.</b> <p>10201020</p>"
          ],
          "correct_answer": "<b>A.</b> <p>20101020</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422894/gate-cse-2024-set-2-question-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the following C function definition.<pre><code>\nint f(int x, int y) {\nfor (int i=0; i &lt; y; i++) {\nx=x+x+y;\n}\nreturn x;\n}</code></pre>\nWhich of the following statements is/are TRUE about the above function? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>If the inputs are \\( x=20, y=10 \\), then the return value is greater than \\( 2^{20} \\)</p>",
            "<b>B.</b> <p>If the inputs are \\( x=20, y=20 \\), then the return value is greater than \\( 2^{20} \\)</p>",
            "<b>C.</b> <p>If the inputs are \\( x=20, y=10 \\), then the return value is less than \\( 2^{10} \\)</p>",
            "<b>D.</b> <p>If the inputs are \\( x=10, y=20 \\), then the return value is greater than \\( 2^{20} \\)</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>If the inputs are \\( x=20, y=20 \\), then the return value is greater than \\( 2^{20} \\)</p>",
            "<b>D.</b> <p>If the inputs are \\( x=10, y=20 \\), then the return value is greater than \\( 2^{20} \\)</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422804/gate-cse-2024-set-1-question-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\nvoid fX();\nint main(){\nfX();\nreturn 0;}\n\nvoid fX(){\nchar a;\nif((a=getchar()) != '\\n')\nfX();\nif(a != '\\n')\nputchar(a);}</code></pre>\nAssume that the input to the program from the command line is 1234 followed by\na newline character. Which one of the following statements is CORRECT? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The program will not terminate</p>",
            "<b>B.</b> <p>The program will terminate with no outpu</p>",
            "<b>C.</b> <p>The program will terminate with 4321 as output</p>",
            "<b>D.</b> <p>The program will terminate with 1234 as output</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The program will terminate with 4321 as output</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422833/gate-cse-2024-set-1-question-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\nint main(){\nint a = 6;\nint b = 0;\nwhile(a &lt; 10) {\na = a / 12 + 1;\na += b;}\nprintf(\"%d\", a);\nreturn 0;}\n</code></pre>Which one of the following statements is CORRECT? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The program prints 9 as output</p>",
            "<b>B.</b> <p>The program prints 10 as output</p>",
            "<b>C.</b> <p>The program gets stuck in an infinite loop</p>",
            "<b>D.</b> <p>The program prints 6 as output</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The program gets stuck in an infinite loop</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422834/gate-cse-2024-set-1-question-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
          "question": "<p>Consider the following program:<br><pre><code>\nint main()\n{\n  f1();\n  f2(2);\n  f3();\n  return(0);\n}\n\nint f1()\n{\n  return(1);\n}\n\nint f2(int X)\n{\n  f3();\n  if (X==1)\n     return f1();\n  else\n     return (X*f2(X-1));\n}\n\nint f3()\n{\n  return(5);\n}\n\n</code></pre><br>Which one of the following options represents the activation tree corresponding to\nthe main function?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\C_Programming\\q26_acb7b40e.jpg\"><br> <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/399285/gate-cse-2023-question-26#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>The integer value printed by the ANSI-C program given below is ______.<br><pre><code>#include &lt; stdio.h &gt;\nint funcp(){\n   static int x = 1;\n   x++;\n   return x;\n}\nint main(){\n   int x,y;\n   x = funcp();\n   y = funcp()+x;\n   printf(\"%d\\n\", (x+y));\n   return 0;\n}\n</code></pre> <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399286/gate-cse-2023-question-25#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>What is printed by the following ANSI C program?<pre><code>#include &lt; stdio.h &gt;\nint main(int argc, char *argv[]){ \n char a = 'P';\n char b = 'x';\n char c = (a  &amp;  b) + '*';\n char d = (a | b) - '-';\n char e = (a ^ b) + '+'; \n printf(\"%c %c %c \\n\", c, d, e); \n return 0;\n}\n</code></pre><br>ASCII encoding for relevant characters is given below<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\C_Programming\\q34_c5d530be.jpg\"><br> <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>z K  S</p>",
            "<b>B.</b> <p>122 75  83</p>",
            "<b>C.</b> <p>* - +</p>",
            "<b>D.</b> <p>P x  +</p>"
          ],
          "correct_answer": "<b>A.</b> <p>z K  S</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/371902/Gate-cse-2022-question-34#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
          "question": "<p>What is printed by the following ANSI C program?<pre><code>#include &lt; stdio.h &gt;\nint main(int argc, char *argv[])\n{\n int a[3][3][3] =\n {{1, 2, 3, 4, 5, 6, 7, 8, 9},\n {10, 11, 12, 13, 14, 15, 16, 17, 18},\n {19, 20, 21, 22, 23, 24, 25, 26, 27}};\nint i = 0, j = 0, k = 0; \nfor( i = 0; i &lt; 3; i++ ){\n\n     for(k = 0; k &lt; 3; k++ ) \n      printf(\"%d \", a[i][j][k]);\n printf(\" \\n\");\n}\nreturn 0;\n}\n</code></pre> <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1 2  3\n<br>\n10  11  12\n<br>\n19  20  21</p>",
            "<b>B.</b> <p>1 4  7<br>\n10  13  16<br>\n19  22  25</p>",
            "<b>C.</b> <p>1  2  3\n<br>\n4  5  6\n<br>\n7  8  9</p>",
            "<b>D.</b> <p>1 2  3\n<br>\n13  14  15\n<br>\n25  26  27</p>"
          ],
          "correct_answer": "<b>A.</b> <p>1 2  3\n<br>\n10  11  12\n<br>\n19  20  21</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/371903/Gate-cse-2022-question-33#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 20,
          "question": "<p>What is printed by the following ANSI C program?<pre><code>\n#include &lt; stdio.h &gt;\nint main(int argc, char *argv[])\n{\nint x = 1, z[2] = {10, 11};\nint *p=NULL; p=&amp;x;\n*p=10;\np =&amp;z[1];\n*(&amp;z[0]+1)+=3;\nprintf(\"%d, %d, %d \\n\",x,z[0],z[1]); return   0;\n}\n</code></pre> <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1, 10, 11</p>",
            "<b>B.</b> <p>1, 10, 14</p>",
            "<b>C.</b> <p>10, 14, 11</p>",
            "<b>D.</b> <p>10, 10, 14</p>"
          ],
          "correct_answer": "<b>D.</b> <p>10, 10, 14</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/371925/Gate-cse-2022-question-11#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
          "question": "<p>Consider the following ANSI C program<pre><code> #include &lt; stdio.h &gt;\nint foo(int x, int y, int q) \n    {\n        if ((x &lt; = 0) &amp;&amp; (y &lt; = 0))\n        return q;\n        if (x &lt; = 0)\n        return foo(x, y-q, q);\n        if (y &lt; = 0)\n        return foo(x-q, y, q);\n        return foo(x, y-q, q) + foo(x-q, y, q);\n    }\nint main( )\n{\n    int r = foo(15, 15, 10);\n    printf(\"%d\", r);\n    return 0;\n}</code></pre>  The output of the program upon execution is ____ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "60",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357488/gate-cse-2021-set-2-question-49#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
          "question": "<p>Consider the following ANSI C function:<pre><code>int SomeFunction (int x, int y)\n{\n    if ((x==1) || (y==1)) return 1;\n    if (x==y) return x;\n    if (x &gt; y) return SomeFunction(x-y, y);\n    if (y &gt; x) return SomeFunction (x, y-x);\n \n} </code></pre>The value returned by SomeFunction(15, 255) is __________ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "15",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357517/gate-cse-2021-set-2-question-23#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
          "question": "<p>Consider the following ANSI C program.<pre><code> #include &lt; stdio.h &gt;\nint main( ) \n{\n    int arr[4][5];\n    int  i, j;\n    for (i=0; i &lt; 4; i++) \n  {\n        for (j=0; j &lt; 5; j++) \n        {\n            arr[i][j] = 10 * i + j;\n        }\n    }\n    printf(\"%d\", *(arr[1]+9));\n    return 0;\n}</code></pre>  What is the output of the above program? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>14</p>",
            "<b>B.</b> <p>20</p>",
            "<b>C.</b> <p>24</p>",
            "<b>D.</b> <p>30</p>"
          ],
          "correct_answer": "<b>C.</b> <p>24</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357530/gate-cse-2021-set-2-question-10#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 24,
          "question": "<p>Consider the following ANSI C function:<pre><code> int SimpleFunction(int Y[], int n, int x)\n{\nint total = Y[0], loopIndex;\nfor (loopIndex=1; loopIndex&lt;=n-1; loopIndex++)\n    total=x*total +Y[loopIndex];\nreturn total;\n}</code></pre> Let Z be an array of 10 elements with Z[i]=1, for all i such that \\(0\\leq i \\leq 9\\). The value returned by SimpleFunction(Z,10,2) is __________ <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1023",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357403/gate-cse-2021-set-1-question-48#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 25,
          "question": "<p>Consider the following ANSI C program.<pre><code> #include &lt; stdio.h &gt;\nint main()\n{\n    int i, j, count;\n    count=0;\n    i=0;\n    for (j=-3; j &lt; =3; j++)\n    {\n        if (( j &gt; = 0) &amp;&amp; (i++))\n        count = count + j;\n    }\n    count = count +i;\n    printf(\"%d\", count);\n    return 0;\n}</code></pre>Which one of the following options is correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The program will not compile successfully</p>",
            "<b>B.</b> <p>The program will compile successfully and output 10 when executed</p>",
            "<b>C.</b> <p>The program will compile successfully and output 8 when executed</p>",
            "<b>D.</b> <p>The program will compile successfully and output 13 when executed</p>"
          ],
          "correct_answer": "<b>B.</b> <p>The program will compile successfully and output 10 when executed</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357414/gate-cse-2021-set-1-question-37#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 26,
          "question": "<p>In the following procedure<br><pre><code> Integer procedure P(X,Y);\nInteger X,Y;\nvalue x;\nbegin\n      K=5;\n      L=8;\n      P=x+y;\nend</code></pre>X  is called by value and Y is called by name. If the procedure were invoked by the following program fragment<br><pre><code> K=0;\nL=0;\nZ=P(K,L);</code></pre>then the value of Z will be set equal to <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>13</p>",
            "<b>D.</b> <p>0</p>"
          ],
          "correct_answer": "<b>B.</b> <p>8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331379/isro2020-78\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 27,
          "question": "<p>Following declaration of an array of struct, assumes size of byte, short, int and long are 1,2,3 and 4 respectively. Alignment rule stipulates that n byte field must be located at an address divisible by n, the fields in the struct are not rearranged, padding is used to ensure alignment. All elements of array should be of same size.<br><pre><code> Struct complx\n       Short s\n       Byte b\n       Long l\n       Int i\nEnd Complx\nComplx C[10]</code></pre>Assuming C is located at an address divisble by 8, what is the total size of C, in bytes? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>150</p>",
            "<b>B.</b> <p>160</p>",
            "<b>C.</b> <p>200</p>",
            "<b>D.</b> <p>240</p>"
          ],
          "correct_answer": "<b>B.</b> <p>160</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "NOTE: This question is Excluded\nfor\nevaluation. <br><a href=\"https://gateoverflow.in/331318/isro2020-74\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 28,
          "question": "<p>What is the output in a 32 bit machine with 32 bit compiler?<br><pre><code> #include &lt; stdio.h &gt;\nrer(int **ptr2, int **ptr1)\n{\n    int *ii;\n    ii=*ptr2;\n    *ptr2=*ptr1;\n    *ptr1=ii;\n    **ptr1*=**ptr2;\n    **ptr2+=**ptr1;\n}\nvoid main(){\n    int var1=5, var2=10;\n    int *ptr1=&amp;var1,*ptr2=&amp;var2;\n    rer(&amp;ptr1,&amp;ptr2);\n    printf(\"%d %d\",var2,var1);\n}</code></pre> <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>60,70</p>",
            "<b>B.</b> <p>50,50</p>",
            "<b>C.</b> <p>50,60</p>",
            "<b>D.</b> <p>60,50</p>"
          ],
          "correct_answer": "<b>D.</b> <p>60,50</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331226/isro2020-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 29,
          "question": "<p>What is output of the following 'C' code assuming it runs on a byte addressed little endian machine?<br><pre><code> #include &lt; stdio.h &gt;\nint main()\n{\n    int x;\n    char *ptr;\n    x=622,100,101;\n    printf(\"%d\",(*(char *)&amp;x)*(x%3));\n    return 0;\n}</code></pre> <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>622</p>",
            "<b>B.</b> <p>311</p>",
            "<b>C.</b> <p>22</p>",
            "<b>D.</b> <p>110</p>"
          ],
          "correct_answer": "<b>D.</b> <p>110</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331225/isro2020-62\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 30,
          "question": "<p>What is the output of the code given below?<br><pre><code> #include &lt; stdio.h &gt;\nint main()\n{\n    char name[]=\"satellites\";\n    int len;\n    int size;\n    len= strlen(name);\n    size = sizeof(name);\n    printf(\"%d\",len*size);\n    return 0;\n}</code></pre> <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>100</p>",
            "<b>B.</b> <p>110</p>",
            "<b>C.</b> <p>40</p>",
            "<b>D.</b> <p>44</p>"
          ],
          "correct_answer": "<b>B.</b> <p>110</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331463/isro2020-61\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 31,
          "question": "<p>Consider the following recursive C function that takes two arguments<br><pre><code> unsigned int rer(unsigned int n, unsigned int r){\n    if(n&gt;0)return(n%r + rer(n/r,r));\n    else retturn 0;\n}</code></pre>What is the return value of the function rer when it is called as rer(513,2)? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>9</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>2</p>"
          ],
          "correct_answer": "<b>D.</b> <p>2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331460/isro2020-59\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 32,
          "question": "<p>Consider the following C functions.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\C_Programming\\q48_1495b619.jpg\"><br>The value returned by pp(3,4) is _____ <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "81",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333183/gate2020-cs-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 33,
          "question": "<p>Consider the following C functions.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\C_Programming\\q46_8e3cceff.jpg\"><br>The return value of fun2(5) is ______ <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "55",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333185/gate2020-cs-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 34,
          "question": "<p>Consider the following C program.<pre><code>    #include &lt; stdio.h &gt;\n    int main ()  {\n        int  a[4] [5] = {{1, 2, 3, 4, 5},\n                        {6, 7,8, 9, 10},\n                        {11, 12, 13, 14, 15},\n                        {16, 17,18, 19, 20}};\n        printf(\"%d\\n\", *(*(a+**a+2)+3));\n        return(0);\n    }</code></pre>The output of the program is _______. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "19",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333209/gate2020-cs-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 35,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\nint main() { \n  int a[] = {2, 4, 6, 8, 10}; \n  int i, sum = 0, *b = a + 4; \n  for (i = 0; i &lt; 5; i++ ) \n  sum = sum + (*b - i) - *(b - i); \n  printf(\"%dn\", sum); \n  return 0; \n} </code></pre>\nThe output of above C program is __________ . Note: This was Numerical Type question. <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302795/gate2019-cs-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 36,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\nint main() {\n float sum = 0.0, j = 1.0, i = 2.0;\n while (i / j &gt; 0.0625) {\n    j = j + j; \n    sum = sum + i/j;\n    printf(\"%f \\n\", sum);\n }\n return 0;\n}</code></pre>\nThe number of times variable sum will be printed When the above program is executed is _________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302796/gate2019-cs-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 37,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\nint r(){\n int static num=7;\n return num--;\n}\nint main() {\n for(r();r();r()) {\n  printf(\"%d \",r());\n  };\n return 0;\n}</code></pre>\nWhich one of the following values will be displayed on execution of the programs? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>41</p>",
            "<b>B.</b> <p>52</p>",
            "<b>C.</b> <p>63</p>",
            "<b>D.</b> <p>630</p>"
          ],
          "correct_answer": "<b>B.</b> <p>52</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/302821/gate2019-cs-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 38,
          "question": "<p>Consider the following C program:<pre><code>\nvoid convert(int n) {\n  if (n&lt;0)\n    printf(\"%d\",n);\n  else {\n    convert(n/2);\n    printf(\"%d\",n%2);\n  }\n}</code></pre>\nWhich one of the following will happen when the function convert is called with any positive integer n as argument? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It will print the binary representation of n and terminate.</p>",
            "<b>B.</b> <p>It will print the binary representation of n in the reverse order and terminate.</p>",
            "<b>C.</b> <p>It will print the binary representation of n but will not terminate.</p>",
            "<b>D.</b> <p>It will not print anything and will not terminate.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>It will not print anything and will not terminate.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/302822/gate2019-cs-26#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 39,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\n int main(){\n  int arr[] = {1,2,3,4,5,6,7,8,9,0,1,2,5}, *ip = arr + 4;\n  printf(\"%dn\", ip[1]);\n  return 0;\n}</code></pre>\nThe number that will be displayed on execution of the program is _________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302824/gate2019-cs-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 40,
          "question": "<p>Consider the following C program:<pre><code> \n#include <stdio.h>\n  int jumble(int x, int y) {\n    x = 2 * x + y;\n    return x;\n  }\nint main() {\n  int x = 2, y = 5;\n  y = jumble(y, x);\n  x = jumble(y, x);\n  printf(\"%dn\", x);\n  return 0;\n}</stdio.h></code></pre>\nThe value printed by program is __________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "26",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302830/gate2019-cs-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 41,
          "question": "<p>Consider the following C code segment<br><pre><code> int f(int x)\n{\n    if(x&lt;1) return 1;\n    else return (f(x-1) + g(x));\n}\nint g(int x)\n{\n    if(x&lt;2) return 2;\n    else return (f(x-1) + g(x/2));\n}</code></pre>Of the following, which best describes the growth of f(x) as a function of x ? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Linear</p>",
            "<b>B.</b> <p>Exponential</p>",
            "<b>C.</b> <p>Quadratic</p>",
            "<b>D.</b> <p>Cubic</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Exponential</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213516/isro2018-72\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 42,
          "question": "<p>Consider the following C program:<br><pre><code> main()\n{\nfloat sum= 0.0, j=1.0,i=2.0;\nwhile(i/j&gt;0.001){\n    j=j+1;\n    sum=sum+i/j;\n    printf(\"%f/n\", sum);\n  }\n}</code></pre> <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0  - 9 lines of output</p>",
            "<b>B.</b> <p>10 - 19 lines out output</p>",
            "<b>C.</b> <p>20  - 29 lines of output</p>",
            "<b>D.</b> <p>More than 29 lines of output</p>"
          ],
          "correct_answer": "<b>D.</b> <p>More than 29 lines of output</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213518/isro2018-70\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 43,
          "question": "<p>What is the output of tho following program?<br><pre><code> main(){\n    int x=2, y=5;\n    if(x &lt; y) return (x=x+y);\n    else printf(\"z1\");\n    printf(\"z2\");\n}</code></pre> <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>z2</p>",
            "<b>B.</b> <p>z1z2</p>",
            "<b>C.</b> <p>Compilation error</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of these</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213528/isro2018-60\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 44,
          "question": "<p>Consider the following C++ program<br><pre><code> int a (int m)\n{return ++m;}\nint b(int&amp;m)\n{return ++m;}\nint{char &amp;m}\n{return ++m;}\nvoid main()\n{             \n       int p = 0, q=0, r = 0;\n       p += a(b(p)) ;\n       q+= b(a(q);)\n       r+=a(c(r));\n       cout &lt;&lt; p &lt;&lt; q &lt;&lt; r;\n}</code></pre> Assuming the required header first are already included, the above program <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>results in compilation error</p>",
            "<b>B.</b> <p>print 123</p>",
            "<b>C.</b> <p>print 111</p>",
            "<b>D.</b> <p>print 322</p>"
          ],
          "correct_answer": "<b>A.</b> <p>results in compilation error</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213545/isro2018-43\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 45,
          "question": "<p>Consider the following C code segment:<br><pre><code> #include &lt; stdio.h &gt;\nmain()\n{\n    int i, j, x;\n    scanf(\"%d\", &amp;x);\n    i=1; j=1;\n    while (i&lt;10) {\n            j =j*i;\n            i= i+1;\n            if(i==x) break;\n        }\n}</code></pre>For the program fragment above, which of the following statements about the variables i and j must be true after execution of this program? [ !(exclamation) sign denotes factorial in the answer] <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((j=(x-1) !) \\wedge(i \\geq x)\\)</p>",
            "<b>B.</b> <p>\\((j=9 !) \\wedge(j=10)\\)</p>",
            "<b>C.</b> <p>\\(((j=10 !) \\wedge(i=10)) \\vee((j=(x-1) !) \\wedge(i=x))\\)</p>",
            "<b>D.</b> <p>\\((j=9 !) \\wedge(i \\geqslant 10)) \\vee((j=(x-1) !) \\wedge(i=x))\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\((j=9 !) \\wedge(i \\geqslant 10)) \\vee((j=(x-1) !) \\wedge(i=x))\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213570/isro2018-18\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 46,
          "question": "<p>A language with string manipulation facilities uses the following operations.<br><br>\nhead(s)- returns the first character of the string s<br>tails(s)- returns all but the first character of the string s<br>concat(s1,s2)- concatenates string s1 with s2.<br>\n<br>The output of concat(head(s), head(tail(tail(s)))), where s is acbc is: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>ab</p>",
            "<b>B.</b> <p>ba</p>",
            "<b>C.</b> <p>ac</p>",
            "<b>D.</b> <p>aa</p>"
          ],
          "correct_answer": "<b>A.</b> <p>ab</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213580/isro2018-8\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 47,
          "question": "<p>Assume A and B are non-zero positive integers. The following code segment:<br><pre><code> while(A!=B){\n    if(A&gt; B)\n    A -= B;\n    else\n    B -= A;\n}\ncout &lt;&lt; A; // printing the value of A</code></pre> <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Computes the LCM of two numbers</p>",
            "<b>B.</b> <p>Divides the larger number by the smaller number</p>",
            "<b>C.</b> <p>Computes the GCD of two numbers</p>",
            "<b>D.</b> <p>Finds the smaller of two numbers</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Computes the GCD of two numbers</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213581/isro2018-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 48,
          "question": "<p>Consider the following declaration :<br><pre><code> structaddr {\n    char city[10];\n    char street[30];\n    int pin;\n};\nstruct {\n    char name[30];\n    int gender;\n    struct addr locate;\n} person, *kd = &amp;person;</code></pre>Then \\(^{\\star}(k d-&gt;\\text { name }+2)\\) can be used instead of: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>person.name+2</p>",
            "<b>B.</b> <p>\\(k d-&gt;(\\text { name }+2)\\)</p>",
            "<b>C.</b> <p>\\(*((* k d) . \\text { name }+2)\\)</p>",
            "<b>D.</b> <p>either (A) or(B), not (C)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(*((* k d) . \\text { name }+2)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213586/isro2018-2\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 49,
          "question": "<p>Consider the following program<pre><code>{\n    int x=1;\n    printf(\"%d\",(*char(char*)&amp;x));\n} </code></pre>Assuming required header files are included and if the machine in which this program is executed is little endian, then the output will be <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0</p>",
            "<b>B.</b> <p>99999999</p>",
            "<b>C.</b> <p>1</p>",
            "<b>D.</b> <p>unpredictable</p>"
          ],
          "correct_answer": "<b>D.</b> <p>unpredictable</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213587/isro2018-1\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 50,
          "question": "<p>Consider the following program written in pseudo-code. Assume that x and y are integers.<pre><code>\nCount(x,y) {\n     if (y != 1){\n        if (x != 1) {\n                  print(\"*\");\n                  Count(x/2, y);\n                  }\n            else {\n                     y = y-1;\n                    Count(1024, y);\n                  }\n      }\n} </code></pre>\nThe number of times that the print statement is executed by the call\nCount(1024,1024) is _____. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10230",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204120/gate2018-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 51,
          "question": "<p>Consider the following C code. Assume that unsigned long int type length is 64\nbits.<pre><code>\nunsigned long int fun(unsigned long int n){\nunsigned long int i, j = 0, sum = 0;\nfor (i = n; i &gt; 1; i = i/2) j++;\nfor ( ; j &gt; 1; j = j/2) sum++;\nreturn(sum);\n}  </code></pre>\nThe value returned when we call fun with the input \\(2^{40}\\) is <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>6</p>",
            "<b>D.</b> <p>40</p>"
          ],
          "correct_answer": "<b>B.</b> <p>5</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204106/gate2018-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 52,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\nvoid fun1(char *s1, char *s2){\nchar *tmp;\ntmp = s1;\ns1 = s2;\ns2 = tmp;\n}\nvoid fun2(char **s1, char **s2){\nchar *tmp;\ntmp = *s1;\n*s1 = *s2;\n*s2 = tmp;\n}\nint main(){\nchar *str1 = \"Hi\", *str2 = \"Bye\";\nfun1(str1, str2); \nprintf(\"%s %s \", str1, str2); \nfun2(&amp;str1, &amp;str2); \nprintf(\"%s %s\", str1, str2);\nreturn 0;\n}</code></pre>\nThe output of the program above is <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Hi Bye Bye Hi</p>",
            "<b>B.</b> <p>Hi Bye Hi Bye</p>",
            "<b>C.</b> <p>Bye Hi Hi Bye</p>",
            "<b>D.</b> <p>Bye Hi Bye Hi</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Hi Bye Bye Hi</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204103/gate2018-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 53,
          "question": "<p>Consider the following C program:<pre><code>  #include &lt; stdio.h &gt;\nint counter = 0;\nint calc (int a, int b) {\n    int c;\n    counter++;\n    if (b==3) return (a*a*a);\n    else {\n       c = calc(a, b/3);\n       return (c*c*c);\n           }\n}\nint main (){\ncalc(4, 81);\nprintf (\"%d\", counter);\n}</code></pre> The output of this program is _____. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204095/gate2018-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 54,
          "question": "<p>Consider the following C program.<pre><code>#include &lt; stdio.h &gt;\nstruct Ournode{\nchar x,y,z;\n};\nint main(){\nstruct Ournode p = {'1', '0','a'+2};  \nstruct Ournode *q = &amp;p;\nprintf(\"%c,%c\",*((char*)q+1),*((char*)q+2));\nreturn 0;\n}  </code></pre> The output of this program is: <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0, c</p>",
            "<b>B.</b> <p>0, a+2</p>",
            "<b>C.</b> <p>'0', 'a+2'</p>",
            "<b>D.</b> <p>'0', 'c'</p>"
          ],
          "correct_answer": "<b>A.</b> <p>0, c</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/204076/gate2018-2#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 55,
          "question": "<p>We use malloc and calloc for: <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Dynamic memory allocation</p>",
            "<b>B.</b> <p>Static memory allocation</p>",
            "<b>C.</b> <p>Both dynamic memory allocation and static memory allocation</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Dynamic memory allocation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128772/isro2017-70\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 56,
          "question": "<p>What is the output of the following program?<br><pre><code> #include &lt; stdio.h &gt;\nint tmp=20;\nmain()\n{\n  printf(\"%d\", tmp);\n  func();\n  printf(\"%d\", tmp);\n\n}\nfunc()\n{\n static int tmp=10;\n printf(\"%d\", tmp);\n}</code></pre> <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>20 10 10</p>",
            "<b>B.</b> <p>20 10 20</p>",
            "<b>C.</b> <p>20 20 20</p>",
            "<b>D.</b> <p>10 10 10</p>"
          ],
          "correct_answer": "<b>B.</b> <p>20 10 20</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128754/isro2017-64\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 57,
          "question": "<p>What does the following program do when the input is unsigned 16 bit integer?<br><pre><code> #include &lt; stdio.h &gt;\nmain(){\n  unsigned int num;\n  int i;\n  scanf(\"%u\", &amp;num);\n  for(i=0;i&lt;16;i++){\n    printf(\"%d\", (num &lt; &lt; i&amp;1 &lt; &lt; 15)?1:0);\n  }\n}</code></pre> <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It prints all even bits from num</p>",
            "<b>B.</b> <p>It prints all odd bits from num</p>",
            "<b>C.</b> <p>It prints binary equivalent of num</p>",
            "<b>D.</b> <p>None of above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>It prints binary equivalent of num</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128753/isro2017-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 58,
          "question": "<p>What will be the output of the following C code?<br><pre><code> #include &lt; stdio.h &gt;\nmain()\n{\n    int i;\n    for(i=0;i&lt;5;i++)\n    {\n        int i=10;\n        printf(\"%d\" , i);\n        i++;\n    }\n    return 0;\n}</code></pre><br> <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10 11 12 13 14</p>",
            "<b>B.</b> <p>10 10 10 10 10</p>",
            "<b>C.</b> <p>0 1 2 3 4</p>",
            "<b>D.</b> <p>Compilation error</p>"
          ],
          "correct_answer": "<b>B.</b> <p>10 10 10 10 10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128751/isro2017-62\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 59,
          "question": "<p>What does the following C-statement declare?<br><pre><code> int (*f) (int * );</code></pre> <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A function that takes an integer pointer as argument and returns an integer</p>",
            "<b>B.</b> <p>A function that takes an integer as argument and returns an integer pointer</p>",
            "<b>C.</b> <p>A pointer to a function that takes an integer pointer as argument and returns an integer</p>",
            "<b>D.</b> <p>A function that takes an integer pointer as argument and returns a function pointer</p>"
          ],
          "correct_answer": "<b>C.</b> <p>A pointer to a function that takes an integer pointer as argument and returns an integer</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1343/gate2005-1-isro2017-55\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 60,
          "question": "<p>Consider the following function<br><pre><code> void swap(int a, int b)  \n{       \n    int temp;\n    temp = a;\n    a = b;\n    b = temp;  \n}  </code></pre>In order to exchange the values of two variables x and y. <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>call swap(x,y)</p>",
            "<b>B.</b> <p>call swap(&amp;x,&amp;y)</p>",
            "<b>C.</b> <p>swap(x,y)  cannot be used as it does not return any value</p>",
            "<b>D.</b> <p>swap(x,y)  cannot be used as the parameters are passed by value</p>"
          ],
          "correct_answer": "<b>D.</b> <p>swap(x,y)  cannot be used as the parameters are passed by value</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/999/gate2004-2-isro2017-54\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 61,
          "question": "<p>What is the output of the C++ program?<br><pre><code> #include &lt; iostream &gt;\nusing namespace std;\n\nvoid square(int *x){\n    *x = (*x)++ * (*x);\n}\n\nvoid square(int *x, int *y){\n    *x = (*x) * --(*y);\n}\n\nint main()\n{\n  int number = 30;\n  square(&amp;number, &amp;number);\n  cout &lt; &lt; number;\n  return 0;\n}</code></pre> <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>910</p>",
            "<b>B.</b> <p>920</p>",
            "<b>C.</b> <p>870</p>",
            "<b>D.</b> <p>900</p>"
          ],
          "correct_answer": "<b>C.</b> <p>870</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128615/isro2017-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 62,
          "question": "<p>Consider the following C Program.<pre><code> #include &lt; stdio.h &gt;\n#include &lt; string.h &gt;\n#int main ( ) {\nchar* c = \"GATECSIT2017\";\nchar* p = c;\nprintf(\"%d\", (int) strlen (c+2[p]-6[p]-1));\nreturn 0;\n}\n</code></pre>The output of the program is _______________. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118335/gate2017-2-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 63,
          "question": "<p>Consider the following C program.<pre><code> #include &lt; stdio.h &gt;\nint main ( ) {\n    int m = 10;\n    int n, n1;\n    n = ++m;\n    n1 = m++;\n    n--;\n    --n1;\n    n-=n1;\nprintf (\"%d\", n) ;\nreturn 0;\n}</code></pre>\nThe output of the program is ______________. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118272/gate2017-2-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 64,
          "question": "<p>Consider the following snippet of a C program. Assume that swap (&amp;x, &amp;y) exchanges the\ncontents of x and y.<pre><code>\nint main ( ) {\nint array[]={3,5,1,4,6,2};\nint done =0 ;\nint i ;\nwhile (done = = 0) {\n   done = 1;\n   for (i = 0; i &lt;=4; i ++) {\n   if (array [i] &lt; array [i +1]) {\n       swap (&amp; array [i], &amp;array [i+1]);\n       done = 0;\n    }\n}\nfor (i = 5 ; i &gt; =1; i --) {\nif (array [i] &gt; array [ i-1]) {\n    swap ( &amp; array [i] , &amp;array [i-1]);\n     done = 0;\n  }\n} }\nprintf ( \" %d \" , array [3] );\n}</code></pre>\nThe output of the program is ____________. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118388/gate2017-2-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 65,
          "question": "<p>Consider the C program fragment below which is meant to divide x by y using repeated\nsubtractions. The variables x, y, q and r are all unsigned int.<pre><code>while (r &gt;= y) {\nr = r - y;\nq = q +1;\n}</code></pre>\nWhich of the following conditions on the variables x, y, q and r before the execution of the\nfragment will ensure that the loop terminates in a state satisfying the condition x==(y*q+r)? <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(q==r) &amp;&amp; (r==0)</p>",
            "<b>B.</b> <p>(x \\(\\gt\\) 0) &amp;&amp; (r==x) &amp;&amp; (y \\(\\gt\\) 0)</p>",
            "<b>C.</b> <p>(q==0) &amp;&amp; (r==x) &amp;&amp; (y \\(\\gt\\) 0)</p>",
            "<b>D.</b> <p>(q==0) &amp;&amp; (y \\(\\gt\\) 0)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>(q==0) &amp;&amp; (r==x) &amp;&amp; (y \\(\\gt\\) 0)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118381/gate2017-2-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 66,
          "question": "<p>Consider the following function implemented in C:<pre><code>void printxy (int x, int y) {\nint *ptr ;\nx = 0;\nptr = &amp;x;\ny = * ptr;\n* ptr = l;\nprint f (\"%d, %d,\" x, y);\n}</code></pre>\nThe output of invoking printxy (1,1) is <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0,0</p>",
            "<b>B.</b> <p>0,1</p>",
            "<b>C.</b> <p>1,0</p>",
            "<b>D.</b> <p>1,1</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1,0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118245/gate2017-2-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 67,
          "question": "<p>Match the following:  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\C_Programming\\q3_42abd6c6.jpg\"> <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P-(ii), Q-(iv), R-(i), S-(iii)</p>",
            "<b>B.</b> <p>P-(ii), Q-(i), R-(iv), S-(iii)</p>",
            "<b>C.</b> <p>P-(ii), Q-(iv), R-(iii), S-(i)</p>",
            "<b>D.</b> <p>P-(iii), Q-(iv), R-(i), S-(ii)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>P-(ii), Q-(iv), R-(i), S-(iii)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118171/gate2017-2-2#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 68,
          "question": "<p>The output of executing the following C program is ________.<pre><code> # include <stdio.h>\nint total (int v) {\nwhile (v) {\n    static int count + = v &amp; 1;\n    v&gt;&gt; = 1;\n }\n    return count;\n }\nvoid main ( ) {\nstatic int x = 0;\nint i = 5;\nfor (; i&gt; 0; i--) {\nx=x + total (i) ; \n}\nprintf (\"%d\\n\", x) ; } </stdio.h></code></pre> <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "23",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118442/gate2017-1-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 69,
          "question": "<p>Consider the following C program.<pre><code> #include &lt; stdio.h &gt;\n#include &lt; string.h &gt;\nvoid printlength (char *s, char *t) {\n unsigned int c = 0;\n int len = ((strlen(s) - strlen (t)) &gt; c) ? strlen(s): strlen(t);\n printf (\"%d\\n\", len);\n}\nvoid main ( ) {\n char *x = \"abc\";\n char *y =\"defgh\"; \n printlength (x,y); </code></pre>\nRecall that strlen is defined in string.h as returning a value of type size_t, which is an\nunsigned int. The output of the program is _____________. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118473/gate2017-1-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 70,
          "question": "<p>Consider the C functions foo and bar given below:<pre><code>int foo (int val ) {\n    int x = 0;\n    while (val &gt; 0) {\n    x = x + foo(val--);\n}\n   return val ;\n}\nint bar (int val ) {\nint x = 0;\nwhile (val &gt; 0) {\n    x = x + bar(val-1);}\n    return val ;\n}</code></pre>\nInvocations of foo(3) and bar(3) will result in: <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Return of 6 and 6 respectively.</p>",
            "<b>B.</b> <p>Infinite loop and abnormal termination respectively.</p>",
            "<b>C.</b> <p>Abnormal termination and infinite loop respectively.</p>",
            "<b>D.</b> <p>Both terminating abnormally</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Abnormal termination and infinite loop respectively.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118319/gate2017-1-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 71,
          "question": "<p>Consider the following two functions.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\C_Programming\\q52_7b87d5d2.jpg\">\nThe output printed when fun1(5) is called is <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(53423122233445\\)</p>",
            "<b>B.</b> <p>\\(53423120112233\\)</p>",
            "<b>C.</b> <p>\\(53423122132435\\)</p>",
            "<b>D.</b> <p>\\(53423120213243\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(53423122233445\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118317/gate2017-1-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 72,
          "question": "<p>Consider the following C code:<pre><code># include lt stdio.h &gt;\nint * assignval (int *x, int val) {\n      *x = val;\n      return x;\n}\nvoid main ( ) {\n    int * x= malloc (sizeof (int));\n    if (NULL = = x) return;\n    x = assignval (x,0);\n    if(x) { \n    x=(int *) malloc (sizeof (int));\n    if (NULL = = x) return;\n    x = assignval (x, 10);\n}\nprintf(\"%d\\n\", *x);\nfree (x);\n}</code></pre>\nThe code suffers from which one of the following problems: <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>compiler error as the return of malloc is not typecast appropriately.</p>",
            "<b>B.</b> <p>compiler error because the comparison should be made as x==NULL and not as shown.</p>",
            "<b>C.</b> <p>compiles successfully but execution may result in dangling pointer.</p>",
            "<b>D.</b> <p>compiles successfully but execution may result in memory leak.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>compiles successfully but execution may result in memory leak.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118293/gate2017-1-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 73,
          "question": "<p>Which one of the following is correct about the statements given below?<br>I.  All function calls are resolved at compile time in C lang<br>\nII. All function calls are resolved at compile time in C++ lang <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only II is correct</p>",
            "<b>B.</b> <p>Both I and II are correct</p>",
            "<b>C.</b> <p>Only I is correct</p>",
            "<b>D.</b> <p>Both I and II are incorrect</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Both I and II are incorrect</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55534/isro2016-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 74,
          "question": "<p>Consider the following segment of C-code:<br><pre><code>int j, n;\nj = 1;\nwhile (j &lt;= n)\n    j = j * 2;</code></pre>The number of comparisons made in the execution of the loop for any n&gt;0 is: <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\lceil \\log_2n \\rceil +1\\)</p>",
            "<b>B.</b> <p>n</p>",
            "<b>C.</b> <p>\\(\\lceil \\log_2n \\rceil\\)</p>",
            "<b>D.</b> <p>\\(\\lfloor \\log_2n \\rfloor +1\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\lfloor \\log_2n \\rfloor +1\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/56129/gate2007-15-isro2016-26\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 75,
          "question": "<p>What will be output of the following program? Assume that you are running this program in little-endian processor.<br><pre><code> #include &lt; stdio.h &gt;\nint main()\n{\n    short a=320;\n    char *ptr;\n    ptr=(char *)&amp;a;\n    printf(\"%d\",*ptr);\n    return 0;\n}</code></pre> <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>320</p>",
            "<b>C.</b> <p>64</p>",
            "<b>D.</b> <p>Compilation error</p>"
          ],
          "correct_answer": "<b>C.</b> <p>64</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55481/isro2016-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 76,
          "question": "<p>What is the output of this C  code?<br><pre><code> #include &lt; stdio.h &gt;\nvoid main()\n{\n    int k=5;\n    int *p=&amp;k;\n    int **m=&amp;p;\n    printf(\"%d %d %d\",k,*p,**m);\n    \n}</code></pre> <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5 5 5</p>",
            "<b>B.</b> <p>5 5 junk</p>",
            "<b>C.</b> <p>5 junk junk</p>",
            "<b>D.</b> <p>compile time error</p>"
          ],
          "correct_answer": "<b>A.</b> <p>5 5 5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55468/isro2016-20\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 77,
          "question": "<p>Consider thefollowingprogram:<pre><code>\nint f(int*p, int n)\n{\n   if (n&lt;=1)return0;\n    else returnmax(f(p+1,n-1),p[0]-p[1]);\n}\nint main()\n{\n    int a[]={3,5,2,6,4};\n    printf(\"%d\", f(a,5));\n }</code></pre>\nNote: max(x,y) returns the maxi mumof x and y.\nThe value printed by this program is____________ . <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39602/gate2016-2-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 78,
          "question": "<p>The following function computes \\(X^{Y}\\) for positive integers X and Y.<pre><code>\nint exp(int X,int Y){\n    int res=1, a=X, b=Y;\n    while (b!=0){\n    if(b%2==0){a=a*a;  b=b/2;}\n    else {res=res*a;  b=b-1;}\n   }\n   return res;\n}</code></pre>\nWhich one of the following conditions is TRUE before every iteration of the loop? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(X^{Y}=a^{b}\\)</p>",
            "<b>B.</b> <p>\\((res*a)^{Y}=(res*X)^{b}\\)</p>",
            "<b>C.</b> <p>\\(X^{Y}=res*a^{b}\\)</p>",
            "<b>D.</b> <p>\\(X^{Y}=(res*a)^{b}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(X^{Y}=res*a^{b}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39578/gate2016-2-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 79,
          "question": "<p>The value printed by the following program is .<pre><code>\nvoid f(int*p, int m){\n     m =m+5;\n     *p =*p+m;\n      return;\n}\nvoid main(){\n     int i=5, j=10;\n     f(&amp;i, j);\n     printf(\"%d\", i+j);\n}</code></pre> <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "30",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39565/gate2016-2-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 80,
          "question": "<p>The attributes of three arithmetic operators in some programming language are given below.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\C_Programming\\q45_b4da3cf0.jpg\"> <br>\nThe value of the expression 2-5+1-7*3 in this language is_______ . <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "9",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39697/gate2016-1-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 81,
          "question": "<p>What will be the output of the following pseudo-code when parameters are passed by reference and dynamic scoping is assumed?<pre><code>\na=3;\nvoid n(x){x=x*a;  print(x);}\nvoid m(y){a=1;a=y-a;n(a);print(a);}\nvoid main(){m(a);}</code></pre> <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>6,2</p>",
            "<b>B.</b> <p>6,6</p>",
            "<b>C.</b> <p>4,2</p>",
            "<b>D.</b> <p>4,4</p>"
          ],
          "correct_answer": "<b>D.</b> <p>4,4</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39701/gate2016-1-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 82,
          "question": "<p>What will be the output of the following C program?<pre><code>\nvoid count(intn){\n   static intd=1;\n   printf(\"%d \",n);\n   printf(\"%d \",d);\n   d++;\n   if(n&gt;1) count(n-1);\n   printf(\"%d \",d);\n}\nvoid main(){\n    count(3);\n}</code></pre> <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>312213444</p>",
            "<b>B.</b> <p>312111222</p>",
            "<b>C.</b> <p>3122134</p>",
            "<b>D.</b> <p>3121112</p>"
          ],
          "correct_answer": "<b>A.</b> <p>312213444</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39730/gate2016-1-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 83,
          "question": "<p>The following function computes the maximum value contained in an integer array p[] of size n (n&gt;=1).<pre><code> \nint max(int*p, int n){\n   int a=0,b=n-1;\n   while (__________){\n   if (p[a]&lt;=p[b]){a=a+1;} \n   else {b=b-1;}\n   }\n   return p[a];\n}</code></pre>\nThe missing loop condition is <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>a !=n</p>",
            "<b>B.</b> <p>b !=0</p>",
            "<b>C.</b> <p>b \\(\\gt\\) (a+1)</p>",
            "<b>D.</b> <p>b !=a</p>"
          ],
          "correct_answer": "<b>D.</b> <p>b !=a</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39704/gate2016-1-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 84,
          "question": "<p>Consider  the following C program.<pre><code>\n#include &lt; stdio.h &gt;\nvoid mystery(int *ptra,int *ptrb){\n   int *temp;\n   temp =ptrb; \n   ptrb =ptra;\n   ptra =temp;\n}\nint main(){\n   int a=2016,b=0,c=4,d=42;\n   mystery(&amp;a, &amp;b);\n   if (a &lt; c)\n            mystery(&amp;c, &amp;a);\n   mystery(&amp;a, &amp;d);\n   printf(\"%d\\n\", a);\n}</code></pre>\nThe output of the program is _________. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2016",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39642/gate2016-1-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 85,
          "question": "<p>Consider the following C program.<pre><code> void f(int,short);\nvoid main()\n{\nint i=100;\nshort s=12;\nshort *p=&amp;s;\n__________ ;//calltof()\n} </code></pre> Which one of the following expressions, when placed in the blank above, will NOT result in a typec hecking error? <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>f(s,*s)</p>",
            "<b>B.</b> <p>i=f(i,s)</p>",
            "<b>C.</b> <p>f(i,*s)</p>",
            "<b>D.</b> <p>f(i,*p)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>f(i,*p)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39638/gate2016-1-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 86,
          "question": "<p>Consider the following code fragment<br><pre><code> void foo(int x, int y)\n{\n    x+=y;\n    y+=x;\n}\nmain()\n{\n    int x=5.5;\n    foo(x,x);\n}</code></pre>What is the final value of x in both call by value and call by reference, respectively? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5 and 16</p>",
            "<b>B.</b> <p>5 and 12</p>",
            "<b>C.</b> <p>5 and 20</p>",
            "<b>D.</b> <p>12 and 20</p>"
          ],
          "correct_answer": "<b>C.</b> <p>5 and 20</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52145/isro2015-80\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 87,
          "question": "<p>Consider the following C declaration:<br><pre><code> struct ( \n    short x[5];  \n    union { \n        float y; \n        long z; \n    } u;\n )t;</code></pre>Assume that the objects of the type short, float and long occupy 2 bytes, 4 bytes and 8 bytes, respectively. The memory requirement for variable t, ignoring alignment consideration, is: <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>22  bytes</p>",
            "<b>B.</b> <p>14 bytes</p>",
            "<b>C.</b> <p>18 bytes</p>",
            "<b>D.</b> <p>10 bytes</p>"
          ],
          "correct_answer": "<b>C.</b> <p>18 bytes</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/640/gate2000-1-17-isro2015-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 88,
          "question": "<p>Consider the following statements<br><pre><code> #define hypotenuse (a, b) sqrt (a*a+b*b);</code></pre>The macro call hypotenuse(a+2,b+3); <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Finds the hypotenuse of a triangle with sides a+2 and b+3</p>",
            "<b>B.</b> <p>Finds the square root of \\((a+2)^{2}\\) and \\((b+3)^{2}\\)</p>",
            "<b>C.</b> <p>Is invalid</p>",
            "<b>D.</b> <p>Find the square root of 3*a+4*b+5</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Find the square root of 3*a+4*b+5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/37955/isro2015-76\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 89,
          "question": "<p>The for loop<br><pre><code> for (i=0; i&lt;10; ++i)\nprintf(\"%d\", i&amp;1);</code></pre>prints <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(0101010101\\)</p>",
            "<b>B.</b> <p>\\(0111111111\\)</p>",
            "<b>C.</b> <p>\\(0000000000\\)</p>",
            "<b>D.</b> <p>\\(1111111111\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(0101010101\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52141/isro2015-75\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 90,
          "question": "<p>Which of the following has the compilation error in C? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>int n = 17;</p>",
            "<b>B.</b> <p>char c = 99;</p>",
            "<b>C.</b> <p>float f = (float)99.32;</p>",
            "<b>D.</b> <p>#include &lt; stdio.h &gt;</p>"
          ],
          "correct_answer": "<b>D.</b> <p>#include &lt; stdio.h &gt;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/19791/isro2015-74\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 91,
          "question": "<p>The output of the following program is<br><pre><code> main()\n{\n    static int x[] = {1,2,3,4,5,6,7,8}\n    int i;\n    for (i=2; i&lt;6; ++i)\n    x[x[i]]=x[i];\n    for (i=0; i&lt;8; ++i)\n    printf(\"%d\", x[i]);\n}</code></pre> <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1 2 3 3 5 5 7 8</p>",
            "<b>B.</b> <p>1 2 3 4 5 6 7 8</p>",
            "<b>C.</b> <p>8 7 6 5 4 3 2 1</p>",
            "<b>D.</b> <p>1 2 3 5 4 6 7 8</p>"
          ],
          "correct_answer": "<b>A.</b> <p>1 2 3 3 5 5 7 8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52137/isro2015-73\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 92,
          "question": "<p>Consider the following declaration:<pre><code> int a, *b=&amp;a, **c=&amp;b;</code></pre>The following program fragment<pre><code> a=4;    **c=5;</code></pre> <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>does not change the value of a</p>",
            "<b>B.</b> <p>assigns address of c to a</p>",
            "<b>C.</b> <p>assigns the value of b to a</p>",
            "<b>D.</b> <p>assigns 5 to a</p>"
          ],
          "correct_answer": "<b>D.</b> <p>assigns 5 to a</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/19444/isro2015-72\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 93,
          "question": "<p>Consider the following program fragment<br><pre><code> i=6720; j=4;\nwhile (i%j)==0\n{\n    i=i/j;\n    j=j+1;\n}</code></pre>On termination j will have the value <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>9</p>",
            "<b>D.</b> <p>6720</p>"
          ],
          "correct_answer": "<b>C.</b> <p>9</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52135/isro2015-71\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 94,
          "question": "<p>The following program<br><pre><code> main()\n{\n    inc(); inc(); inc();\n}\ninc()\n{\n    static int x;\n    printf(\"%d\", ++x);\n}</code></pre> <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>prints 012</p>",
            "<b>B.</b> <p>prints 123</p>",
            "<b>C.</b> <p>prints 3 consecutive, but unpredictable numbers</p>",
            "<b>D.</b> <p>prints 111</p>"
          ],
          "correct_answer": "<b>B.</b> <p>prints 123</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52131/isro2015-70\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 95,
          "question": "<p>If n has  3, then the statement a[++n]=n++; <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>assigns 3 to a[5]</p>",
            "<b>B.</b> <p>assigns 4 to a[5]</p>",
            "<b>C.</b> <p>assigns 4 to a[4]</p>",
            "<b>D.</b> <p>what is assigned is compiler dependent</p>"
          ],
          "correct_answer": "<b>D.</b> <p>what is assigned is compiler dependent</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50408/isro2015-69\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 96,
          "question": "<p>Consider the following program fragment<br><pre><code> if(a &gt; b)  if(b &gt; c)     s1;  else s2;</code></pre>s2 will be executed if <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>a &lt;= b</p>",
            "<b>B.</b> <p>b &gt; c</p>",
            "<b>C.</b> <p>b &gt;= c and a &lt;= b</p>",
            "<b>D.</b> <p>a &gt; b and b &lt;= c</p>"
          ],
          "correct_answer": "<b>D.</b> <p>a &gt; b and b &lt;= c</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/19445/isro2015-68\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 97,
          "question": "<p>Suppose c=(c[0],...,c[k-1]) is an array of length k, where all the entries are from the set {0,1}. For any positive integers a and n, consider the following pseudocode.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\C_Programming\\q53_ddb61680.jpg\"> <br>  If k=4, c=(1,0,1,1), a=2 and n=8, then the output of DOSOMETHING(c,a,n) is _____. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8558/gate2015-3-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 98,
          "question": "<p>Consider the following C program: <br><pre><code>#include &lt; stdio.h &gt;\nint main( )\n{\n    int i, j, k = 0;\n    j = 2 * 3 / 4 + 2.0 / 5 + 8 / 5;\n    k -=  --j;\n    for(i = 0; i &lt; 5; i++)\n    {\n         switch(i + k)\n        {\n          case 1:\n          case 2: printf(\"\\n%d\", i+k);\n          case 3: printf(\"\\n%d\", i+k);\n          default: printf(\"\\n%d\", i+k);\n        }\n   }\nreturn 0;\n}</code></pre> The number of times printf statement is executed is ________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8557/gate2015-3-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 99,
          "question": "<p>Consider the following C program.<pre><code> #include &lt; stdio.h &gt;\nint main( )\n{\nstatic int a[ ] = {10, 20, 30, 40, 50};\nstatic int *p[ ] = {a, a+3, a+4, a+1, a+2};\nint **ptr = p;\nptr++;\nprintf(\"%d%d\", ptr-p,**ptr);\n}</code></pre>The output of the program is ______________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "140",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8478/gate2015-3-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 100,
          "question": "<p>Consider the following C program.<pre><code> #include &lt; stdio.h &gt;\nint f1(void);\nint f2(void);\nint f3(void);\nint x = 10;\nint main( )\n{\n   int x = 1;\n   x += f1( ) + f2( ) + f3( ) + f2( );\n   printf(\"%d\", x);\n   return 0;\n}\nint f1() { int x = 25; x++; return x;}\nint f2() { static int x = 50; x++; return x;}\nint f3() { x *= 10; return x};</code></pre> The output of the program is ________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "230",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8563/gate2015-3-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 101,
          "question": "<p>Consider the following recursive C function.<pre><code> void get(int n)\n{\nif (n&lt;1) return;\nget(n-1);\nget(n-3);\nprintf(\"%d\", n);\n}</code></pre> If get(6) function is being called in main()then how many times will the get()function be invoked before returning to the main()? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>15</p>",
            "<b>B.</b> <p>25</p>",
            "<b>C.</b> <p>35</p>",
            "<b>D.</b> <p>45</p>"
          ],
          "correct_answer": "<b>B.</b> <p>25</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8498/gate2015-3-28#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 102,
          "question": "<p>Consider the following C program segment.<pre><code> #include &lt; stdio.h &gt;\nint main()\n{\nchar s1[7] = \"1234\", *p;\np = s1 + 2;\n*p = '0';\nprintf(\"%s\", s1);\n} </code></pre>  What will be printed by the program? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>12</p>",
            "<b>B.</b> <p>120400</p>",
            "<b>C.</b> <p>1204</p>",
            "<b>D.</b> <p>1034</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1204</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8401/gate2015-3-1#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 103,
          "question": "<p>Consider the C program below.<pre><code>\n#include &lt; stdio.h &gt;\nint *A, stkTop;\nint stkFunc(int opcode, int val)\n{\n    static int size=0, stkTop=0;\n    switch (opcode) {\n        case -1: size = val; break;\n        case 0: if (stkTop &lt; size) A[stkTop++] = val; break;\n        default: if (stkTop) return A[--stkTop];\n        }\n       return -1;\n}\nint main()\n{\n    int B[20]; A = B; stkTop = -1;\n    stkFunc (-1, 10);\n    stkFunc ( 0, 5);\n    stkFunc ( 0, 10);\n    printf (\"%d\\n\", stkFunc(1, 0) + stkFunc(1, 0));\n}</code></pre> The value printed by the above program is __________. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "15",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8164/gate2015-2-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 104,
          "question": "<p>Consider the following C function.<pre><code>int fun(int n){\n   int x=1,k;\n   if (n==1) return x;\n   for (k=1; k &lt; n; ++k)\n       x = x + fun(k) * fun(n-k);\n   return x;\n}</code></pre> The return value of fun(5) is ________. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "51",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8060/gate2015-2-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 105,
          "question": "<p>Consider the following function written in the C programming language.<pre><code>   void foo(char *a){\n     if ( *a &amp;&amp; *a != '  '){\n          foo(a+1);\n          putchar(*a);\n       }\n} </code></pre> The output of the above function on input \\(\"ABCD \\;  \\; EFGH\"\\) is <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>ABCD EFGH</p>",
            "<b>B.</b> <p>ABCD</p>",
            "<b>C.</b> <p>HGFE DCBA</p>",
            "<b>D.</b> <p>DCBA</p>"
          ],
          "correct_answer": "<b>D.</b> <p>DCBA</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8086/gate2015-2-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 106,
          "question": "<p>Consider the following pseudo code, where x and y are positive integers.<pre><code> begin\n   q := 0\n    r := x \n    while r &gt;= y  do\n         begin\n               r := r - y\n              q := q + 1\n        end\nend </code></pre> The post condition that needs to be satisfied after the program terminates is <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{\\(r=qx+y \\; \\wedge \\; r \\lt y\\)}</p>",
            "<b>B.</b> <p>{\\(x=qy+r \\; \\wedge \\; r \\lt y\\)}</p>",
            "<b>C.</b> <p>{\\(y=qx+r  \\; \\wedge \\; 0 \\lt r \\lt y\\)}</p>",
            "<b>D.</b> <p>{\\( q+1 \\lt r-y \\; \\wedge  \\; y \\gt 0\\)}</p>"
          ],
          "correct_answer": "<b>B.</b> <p>{\\(x=qy+r \\; \\wedge \\; r \\lt y\\)}</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8276/gate2015-1-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 107,
          "question": "<p>What is the output of the following C code? Assume that the address of x is 2000 (in decimal) and an integer requires four bytes of memory.<pre><code>int main () {\nunsigned int x[4][3] ={{1,2,3},{4,5,6},{7,8,9},{10,11,12}};\nprintf(\"%u, %u, %u\", x+3, *(x+3), *(x+2)+3);\n}</code></pre> <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2036, 2036, 2036</p>",
            "<b>B.</b> <p>2012, 4, 2204</p>",
            "<b>C.</b> <p>2036, 10, 10</p>",
            "<b>D.</b> <p>2012, 4, 6</p>"
          ],
          "correct_answer": "<b>A.</b> <p>2036, 2036, 2036</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8283/gate2015-1-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 108,
          "question": "<p>The output of the following C program is__________.<pre><code>  void f1(int a, int b) {\n    int c;\n    c=a; a=b; b=c;\n}\nvoid f2(int *a, int *b) {\n    int c;\n    c=*a; *a=*b; *b=c;\n}\nint main(){\n    int a=4, b=5, c=6;\n    f1(a,b);\n    f2(&amp;b, &amp;c);\n     printf(\"%d\",c-a-b);\n}</code></pre> <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "-5",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8185/gate2015-1-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 109,
          "question": "<p>What is the time complexity for the following C module? Assume that \\(n \\gt 0\\).<br><pre><code>\nint module(int n)\n{\n    if (n == 1)\n        return 1;\n    else\n        return (n + module(n-1));\n}</code></pre> <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O(n)</p>",
            "<b>B.</b> <p>\\(O(\\log n)\\)</p>",
            "<b>C.</b> <p>\\(O\\left(n^{2}\\right)\\)</p>",
            "<b>D.</b> <p>O(n!)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>O(n)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55082/isro2014-67\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 110,
          "question": "<p>The following three 'C' language statements is equivalent to which single statement?<br><pre><code>y=y+1;\nz=x+y;\nx=x+1</code></pre> <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>z = x + y + 2;</p>",
            "<b>B.</b> <p>z = (x++) + (++y);</p>",
            "<b>C.</b> <p>z = (x++) + (y++);</p>",
            "<b>D.</b> <p>z = (x++) + (++y) + 1;</p>"
          ],
          "correct_answer": "<b>B.</b> <p>z = (x++) + (++y);</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/53362/isro2014-47\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 111,
          "question": "<p>How many lines of output does the following C code produce?<br><pre><code> #include &lt; stdio.h &gt;\nfloat i=2.0;\nfloat j=1.0;\nfloat sum = 0.0;\nmain()\n{\n    while (i/j &gt; 0.001)\n    {\n        j+=j;\n        sum=sum+(i/j);\n        printf(\"%f\\n\", sum);\n    }\n}</code></pre> <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8</p>",
            "<b>B.</b> <p>9</p>",
            "<b>C.</b> <p>10</p>",
            "<b>D.</b> <p>11</p>"
          ],
          "correct_answer": "<b>D.</b> <p>11</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52437/isro2014-38\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 112,
          "question": "<p>What is the output of the following C program?<br><pre><code> #include &lt; stdio.h &gt;    \nvoid main(void){\n    int shifty;\n    shifty=0570;\n    shifty=shifty&gt;&gt;4;\n    shifty=shifty&lt;&lt;6;\n    printf(\"The value  of shifty is %o \\n\",shifty);  \n}</code></pre><br> <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The value of shifty is 15c0</p>",
            "<b>B.</b> <p>The value of shifty is 4300</p>",
            "<b>C.</b> <p>The value of shifty is 5700</p>",
            "<b>D.</b> <p>The value of shifty is 2700</p>"
          ],
          "correct_answer": "<b>D.</b> <p>The value of shifty is 2700</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/15906/isro2014-32\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 113,
          "question": "<p>Which of the following is true with respect to Reference? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A reference can never be NULL</p>",
            "<b>B.</b> <p>A reference needs an explicit dereferencing mechanism</p>",
            "<b>C.</b> <p>A reference can be reassigned after it is established</p>",
            "<b>D.</b> <p>A reference and pointer are synonymous</p>"
          ],
          "correct_answer": "<b>A.</b> <p>A reference can never be NULL</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17420/isro2014-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 114,
          "question": "<p>What is the output of the following C program? <br><pre><code> #include &lt; stdio.h &gt;\n#define SQR(x) (x*x)  \n\nint main()\n{\n    int a;\n    int b=4;\n    a=SQR(b+2);\n    printf(\"%d\\n\",a); \n    return 0;\n}</code></pre> <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>14</p>",
            "<b>B.</b> <p>36</p>",
            "<b>C.</b> <p>18</p>",
            "<b>D.</b> <p>20</p>"
          ],
          "correct_answer": "<b>A.</b> <p>14</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52570/isro2014-3\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 115,
          "question": "<p>Consider the C function given below. Assume that the array listA contains n (&gt; 0) elements,\nsorted in ascending order.<pre><code>int ProcessArray(int *listA, int x, int n)\n{\n   int i, j, k;\n   i = 0;\n   j = n-1;\n   do {\n          k = (i+j)/2;\n          if (x &lt;= listA[k])\n               j = k-1;\n          if (listA[k] &lt;= x)\n              i = k+1;\n       }while (i &lt;= j);\nif (listA[k] == x)\n     return(k);\nelse\n    return -1;\n} </code></pre>\nWhich one of the following statements about the function ProcessArray is CORRECT? <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It will run into an infinite loop when x is not in listA</p>",
            "<b>B.</b> <p>It is an implementation of binary search</p>",
            "<b>C.</b> <p>It will always find the maximum element in listA.</p>",
            "<b>D.</b> <p>It will return ? 1 even when x is present in listA.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>It is an implementation of binary search</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2076/gate2014-3-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 116,
          "question": "<p>Consider the C function given below<pre><code> int f(int j)\n{\nstatic int i = 50;\nint k;\nif (i == j)\n{\nprintf(\"something\");\nk = f(i);\nreturn 0;\n}\nelse return 0;\n} </code></pre>\nWhich one of the following is TRUE? <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The function returns 0 for all values of j.</p>",
            "<b>B.</b> <p>The function prints the string something for all values of j.</p>",
            "<b>C.</b> <p>The function returns 0 when j = 50.</p>",
            "<b>D.</b> <p>The function will exhaust the runtime stack or run into an infinite loop when j = 50</p>"
          ],
          "correct_answer": "<b>D.</b> <p>The function will exhaust the runtime stack or run into an infinite loop when j = 50</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2008/gate2014-2-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 117,
          "question": "<p>Consider the following function<pre><code> double f (double x) {\nif ( abs (x*x - 3) &lt; 0. 01) return x;\nelse return f (x / 2 + 1.5/x);\n} </code></pre>\nGive a value q (to 2 decimals) such that f(q) will return q:______ <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1.72",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2000/gate2014-2-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 118,
          "question": "<p>Suppose n and p are unsigned int variables in a C program. We wish to set p to \\(^nC_3\\). If n is large, which one of the following statements is most likely to set p correctly? <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>p = n * (n - 1) * (n-2) / 6;</p>",
            "<b>B.</b> <p>p = n * (n - 1) / 2 * (n-2) / 3;</p>",
            "<b>C.</b> <p>p = n * (n - 1) / 3 * (n-2) / 2;</p>",
            "<b>D.</b> <p>p = n * (n - 1) / 2 * (n-2) / 6.0;</p>"
          ],
          "correct_answer": "<b>B.</b> <p>p = n * (n - 1) / 2 * (n-2) / 3;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1965/gate2014-2-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 119,
          "question": "<p>Consider the function func shown below:<pre><code> int func(int num) {\nint count = 0;\nwhile (num) {\n    count++;\n    num &gt;&gt; = 1;\n}\nreturn (count);\n} </code></pre>\nThe value returned by func(435)is __________. <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "9",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1964/gate2014-2-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 120,
          "question": "<p>Consider the following pseudo code. What is the total number of multiplications to be performed?<pre><code> D= 2\nfor i = 1 to n do\n   for j = i to n do\n      for k = j + 1 to n do\n           D = D * 3 </code></pre> <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Half of the product of the 3 consecutive integers</p>",
            "<b>B.</b> <p>One-third of the product of the 3 consecutive integers.</p>",
            "<b>C.</b> <p>One-sixth of the product of the 3 consecutive integers</p>",
            "<b>D.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>One-sixth of the product of the 3 consecutive integers</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1920/gate2014-1-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 121,
          "question": "<p>Consider the following C function in which size is the number of elements in the array E:<pre><code> int MyX(int *E, unsigned int size)\n{\n  int Y = 0;\n  int Z;\n  int i, j, k; \n    for(i = 0; i &lt; size; i++)\n    Y = Y + E[i];\n  for(i = 0; i &lt; size; i++)\n    for(j = i; j &lt; size; j++)\n    {\n       Z = 0;\n       for(k = i; k &lt;= j; k++)\n           Z= Z + E[k];\n       if (Z &gt; Y)\n            Y = Z;\n   }\nreturn Y;\n}</code></pre>\nThe value returned by the function MyX is the <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>maximum possible sum of elements in any sub-array of array E.</p>",
            "<b>B.</b> <p>maximum element in any sub-array of array E.</p>",
            "<b>C.</b> <p>sum of the maximum elements in all possible sub-arrays of array E.</p>",
            "<b>D.</b> <p>the sum of all the elements in the array E.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>maximum possible sum of elements in any sub-array of array E.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1919/gate2014-1-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 122,
          "question": "<p>Consider the following program in C language:<pre><code># include &lt; stdio.h &gt;\nmain()\n{\n  int i;\n  int * pi=&amp;i;\n  scanf( \"%d\", pi) ;\n  printf (\"%d \\ n\", i+5) ;\n}</code></pre>\nWhich one of the following statements is TRUE? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Compilation fails.</p>",
            "<b>B.</b> <p>Execution results in a run-time error.</p>",
            "<b>C.</b> <p>On execution, the value printed is 5 more than the address of variable i.</p>",
            "<b>D.</b> <p>On execution, the value printed is 5 more than the integer value entered</p>"
          ],
          "correct_answer": "<b>D.</b> <p>On execution, the value printed is 5 more than the integer value entered</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1770/gate2014-1-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 123,
          "question": "<p>What is the output of the following program?<br><pre><code> Class Test\n{ \n    public static void main (String [] args) \n    {  \n        int x = 0; \n        int y = 0 \n        for (int z = 0; z &lt; 5; z++)\n        { \n            if((++x &gt;2)||(++y  &gt; 2)) \n            {\n                x++;\n            }\n        }\n    System.out.printIn (x+ \"\" + y); \n    }\n}</code></pre> <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8 2</p>",
            "<b>B.</b> <p>8 5</p>",
            "<b>C.</b> <p>8 3</p>",
            "<b>D.</b> <p>5 3</p>"
          ],
          "correct_answer": "<b>A.</b> <p>8 2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44842/isro-2013-64\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 124,
          "question": "<p>Consider the following C code.<br><pre><code> #include &lt; stdio.h &gt; \n#include &lt; math.h &gt; \nvoid main ()  \n{  \n      double pi = 3.1415926535;   \n      int a = 1;  \n      int i;    \n      for (i=0; i &lt; 3; i++) \n            if (a = cos(pi * i/2)) \n                  printf(\"% d\", 1);  \n            else printf(\"%d\", 0); \n}</code></pre> <br>\nWhat would the program print? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>000</p>",
            "<b>B.</b> <p>010</p>",
            "<b>C.</b> <p>101</p>",
            "<b>D.</b> <p>111</p>"
          ],
          "correct_answer": "<b>C.</b> <p>101</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44833/isro-2013-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 125,
          "question": "<p>Consider the following psuedocode:<br><pre><code>x: integer := 1  \ny: integer := 2   \nprocedure add  \n    x:= x + y    \nprocedure second (P: Procedure)  \n    x: integer := 2      \n    p()   \nprocedure first  \n    y: integer := 3\n    second (add) \nfirst () \nwrite_integer(x) </code></pre> What does it print if the language uses dynamic scoping with deep binding? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>3</p>",
            "<b>C.</b> <p>4</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>C.</b> <p>4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43764/isro-2013-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 126,
          "question": "<p>What is the return value of f(p,p), if the value of p is initialized to 5 before the call? Note that\nthe first parameter is passed by reference, whereas the second parameter is passed by value.<pre><code> int f (int &amp;x, int c) {\n  c = c - 1;\n  if (c==0) return 1;\n   x = x + 1;\nreturn f(x,c) * x;\n} </code></pre> <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3024</p>",
            "<b>B.</b> <p>6561</p>",
            "<b>C.</b> <p>55440</p>",
            "<b>D.</b> <p>161051</p>"
          ],
          "correct_answer": "<b>B.</b> <p>6561</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/60/gate2013-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 127,
          "question": "<p>Consider the following C code segment.<pre><code>\nint a, b, c = 0;\nvoid prtFun(void);\nmain( )\n{ static int a = 1; /* Line 1 */\n   prtFun( );\n   a += 1;\n   prtFun( );\n   printf(\" \\n %d %d \", a, b);\n}\nvoid prtFun(void)\n{ static int a = 2; /* Line 2 */\n   int b = 1;\n   a += ++b;\n   printf(\" \\n %d %d \", a, b);\n}</code></pre>What output will be generated by the given code segment if: <br><br>\nLine 1 is replaced by auto int a = 1; <br>\nLine 2 is replaced by register int a = 2; <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3 1 <br>\n4 1 <br>\n4 2</p>",
            "<b>B.</b> <p>4 2 <br>\n6 1<br>\n6 1</p>",
            "<b>C.</b> <p>4 2<br>\n6 2<br>\n2 0</p>",
            "<b>D.</b> <p>4 2<br>\n4 2<br>\n2 0</p>"
          ],
          "correct_answer": "<b>D.</b> <p>4 2<br>\n4 2<br>\n2 0</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43314/gate2012-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 128,
          "question": "<p>Consider the following C code segment.<pre><code>\nint a, b, c = 0;\nvoid prtFun(void);\nmain( )\n{ static int a = 1; /* Line 1 */\n   prtFun( );\n   a += 1;\n   prtFun( );\n   printf(\" \\n %d %d \", a, b);\n}\nvoid prtFun(void)\n{ static int a = 2; /* Line 2 */\n   int b = 1;\n   a += ++b;\n   printf(\" \\n %d %d \", a, b);\n}</code></pre>What output will be generated by the given code segment? <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3 1<br>\n4 1 <br>\n4 2</p>",
            "<b>B.</b> <p>4 2<br>\n6 1 <br>\n6 1</p>",
            "<b>C.</b> <p>4 2 <br>\n6 2 <br>\n2 0</p>",
            "<b>D.</b> <p>3 1 <br>\n5 2 <br>\n5 2</p>"
          ],
          "correct_answer": "<b>C.</b> <p>4 2 <br>\n6 2 <br>\n2 0</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2176/gate2012-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 129,
          "question": "<p>What will be the output of the following C program segment?<pre><code> char inChar = 'A' ;\nswitch ( inChar ) {\ncase 'A' : printf (\"Choice A\\ n\") ;\ncase 'B' :\ncase 'C' : printf (\"Choice B\") ;\ncase 'D' :\ncase 'E' :\ndefault : printf ( \" No Choice\" ) ; } </code></pre> <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>No Choice</p>",
            "<b>B.</b> <p>Choice A</p>",
            "<b>C.</b> <p>Choice A <br>\nChoice B  No Choice</p>",
            "<b>D.</b> <p>Program gives no output as it is erroneous</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Choice A <br>\nChoice B  No Choice</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/35/gate2012-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 130,
          "question": "<p>Find the output of the following Java code line <br><pre><code>System.out.printIn(math.floor(-7.4)) </code></pre> <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>-7</p>",
            "<b>B.</b> <p>-8</p>",
            "<b>C.</b> <p>-7.4</p>",
            "<b>D.</b> <p>-7</p>"
          ],
          "correct_answer": "<b>B.</b> <p>-8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52870/isro2011-72\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 131,
          "question": "<p>What is the output of the following C code?<br><pre><code>#include &lt; stdio.h &gt;\nint main()\n{\n    int index;\n    for(index=1; index&lt;=5; index++)\n    {\n        printf(\"%d\", index);\n        if (index==3)\n            continue;\n    }\n}\n </code></pre> <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1245</p>",
            "<b>B.</b> <p>12345</p>",
            "<b>C.</b> <p>12245</p>",
            "<b>D.</b> <p>12354</p>"
          ],
          "correct_answer": "<b>B.</b> <p>12345</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52841/isro2011-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 132,
          "question": "<p>In Java, after executing the following code what are the values of x, y and z?<br>\nint x, y=10; z=12;<br>\nx=y++ + z++;<br> <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>x=22, y=10, z=12</p>",
            "<b>B.</b> <p>x=24, y=10, z=12</p>",
            "<b>C.</b> <p>x=24, y=11, z=13</p>",
            "<b>D.</b> <p>x=22, y=11, z=13</p>"
          ],
          "correct_answer": "<b>D.</b> <p>x=22, y=11, z=13</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52501/isro2011-44\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 133,
          "question": "<p>Consider the following pseudocode<br><pre><code>x:=1;\ni:=1;\nwhile (x \\leq 500)\nbegin\nx:=2^x;\ni:=i+1;\nend\n</code></pre> <br>What is the value of i at the end of the pseudocode? <br><br><strong>(ISRO CSE 2011)</strong></p>",
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
          "explanation": "<a href=\"https://gateoverflow.in/52489/isro2011-40\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 134,
          "question": "<p>Consider the following recursive C function that takes two arguments<pre><code> unsigned int foo(unsigned int n, unsigned int r) {\n  if (n  &gt; 0) return (n%r +  foo (n/r, r ));\n  else return 0;\n}</code></pre>What is the return value of the function foo when it is called as foo (513, 2)? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>9</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>2</p>"
          ],
          "correct_answer": "<b>D.</b> <p>2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43324/gate2011-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 135,
          "question": "<p>Consider the following recursive C function that takes two arguments<pre><code> unsigned int foo(unsigned int n, unsigned int r) {\n  if (n  &gt; 0) return (n%r +  foo (n/r, r ));\n  else return 0;\n}</code></pre>   <br>What is the return value of the function foo when it is called as foo (345, 10) ? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>345</p>",
            "<b>B.</b> <p>12</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>3</p>"
          ],
          "correct_answer": "<b>B.</b> <p>12</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2154/gate2011-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 136,
          "question": "<p>What does the following fragment of C-program print? <br>\nchar c []=\"GATE2011\"; <br>\nchar *p =c; <br>\nprintf (\"%s\", p + p[3]- p[ 1 ]); <br> <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>GATE2011</p>",
            "<b>B.</b> <p>E2011</p>",
            "<b>C.</b> <p>2011</p>",
            "<b>D.</b> <p>11</p>"
          ],
          "correct_answer": "<b>C.</b> <p>2011</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2124/gate2011-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 137,
          "question": "<p>What is the value printed by the following C program?<pre><code> #include &lt; stdio.h &gt;\nint f(int * a, int n)\n{\n    if(n&lt;=0)return 0;\n    else if(*a% 2 ==0) return *a+f(a+1,n-1);\n    else return *a-f(a+1,n-1);\n}\nint main ( )\n{\n    int a[ ] {12, 7, 13, 4, 11, 6};\n    printf (\"%d\", f(a,6));\n    return 0;\n} </code></pre> <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>-9</p>",
            "<b>B.</b> <p>5</p>",
            "<b>C.</b> <p>15</p>",
            "<b>D.</b> <p>19</p>"
          ],
          "correct_answer": "<b>C.</b> <p>15</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2336/gate2010-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 138,
          "question": "<p>What does the following program print?<pre><code> #include &lt; stdio.h &gt;\nvoid f (int *p, int * q) {\n       p=q;\n       *p=2;\n}\nint i= 0, j= 1;\nint main ( ){\n     f(&amp;i, &amp; j);\n     printf( \"%d%d \\ n\", i,j);\n     return 0;\n} </code></pre> <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2 2</p>",
            "<b>B.</b> <p>2 1</p>",
            "<b>C.</b> <p>0 1</p>",
            "<b>D.</b> <p>0 2</p>"
          ],
          "correct_answer": "<b>D.</b> <p>0 2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2184/gate2010-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 139,
          "question": "<p>Consider the following code written in a pass-by-reference language like FORTRAN and these statements about the code. <br><pre><code> subroutine swap(ix,iy) \n     it = ix \nL1 : ix = iy \nL2 : iy = it \n    end \n    ia = 3 \n    ib = 8 \n    call swap (ia, ib+5)\n    print *, ia, ib \n    end </code></pre><br>S1: The compiler will  generate code to allocate a temporary nameless cell, initialize it to 13, and pass the address of the cell to swap <br>\nS2: On execution the code will generate a runtime error on line L1 <br>\nS3: On execution the code will generate a runtime error on line L2 <br>\nS4: The program will print 13 and 8 <br>\nS5: The program will print 13 and -2 <br>\nExactly the following set of statement(s) is correct: <br><br><strong>(ISRO CSE 2009)</strong></p>",
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
          "explanation": "<a href=\"https://gateoverflow.in/1834/gate2006-56-isro2009-58\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 140,
          "question": "<p>Consider the program below:<pre><code> # include &lt; stdio.h &gt;\nint fun(int n, int * f_p) {\n   int t, f;\n   if (n &lt;=1) {\n         *f_p =1;\n          return 1;\n   }\n   t = fun (n-1, f_p);\n   f = t+*f_p;\n   *f_p = t;\n   return f;\n}\nint main() {\n    int x = 15;\n    printf (\"%d\\ n\", fun(5,&amp; x));\n    return 0;\n} </code></pre>\nThe value printed is <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>6</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>14</p>",
            "<b>D.</b> <p>15</p>"
          ],
          "correct_answer": "<b>B.</b> <p>8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1310/gate2009-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 141,
          "question": "<p>In C, what is the effect of a negative number in a field width specifier? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the values are displayed right justified</p>",
            "<b>B.</b> <p>the values are displayed centered</p>",
            "<b>C.</b> <p>the values are displayed left justified</p>",
            "<b>D.</b> <p>the values are displayed as negative numbers</p>"
          ],
          "correct_answer": "<b>C.</b> <p>the values are displayed left justified</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50148/isro2008-80\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 142,
          "question": "<p>What is the value of F(4) using the following procedure:<br><pre><code>function F(K : integer)\ninteger;\nbegin\nif (k&lt;3) then F:=k else F:=F(k-1)*F(k-2)+F(k-3)\nend; </code></pre> <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>6</p>",
            "<b>C.</b> <p>7</p>",
            "<b>D.</b> <p>8</p>"
          ],
          "correct_answer": "<b>A.</b> <p>5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50136/isro2008-69\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 143,
          "question": "<p>Consider the following code segment:<br><pre><code> for (int k=0; k&lt;20; k=k+2)\n{\n    if (k % 3 == 1)\n        system.out.print(k+ \" \");\n}</code></pre>\nWhat is printed as a result of executing the code segment? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4 16</p>",
            "<b>B.</b> <p>4 10 16</p>",
            "<b>C.</b> <p>0 6 12 18</p>",
            "<b>D.</b> <p>1 4 7 10 13 16 19</p>"
          ],
          "correct_answer": "<b>B.</b> <p>4 10 16</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49973/isro2008-43\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 144,
          "question": "<p>Consider the following C function:<br><pre><code> int f(int n)\n{\n    static int i = 1;\n    if(n &gt;= 5) return n;\n    n = n+i;\n    i++;\n    return f(n);\n}</code></pre> <br>\nThe value returned by f(1) is: <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>6</p>",
            "<b>C.</b> <p>7</p>",
            "<b>D.</b> <p>8</p>"
          ],
          "correct_answer": "<b>C.</b> <p>7</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1028/gate2004-31-isro2008-40\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 145,
          "question": "<p>Which of the following is an illegal array definition? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Type COLONGE : (LIME, PINE, MUSK, MENTHOL); <br> var a : array [COLONGE] of REAL;</p>",
            "<b>B.</b> <p>var a : array [REAL] of REAL;</p>",
            "<b>C.</b> <p>var a : array ['A'..'Z'] of REAL;</p>",
            "<b>D.</b> <p>var a : array [BOOLEAN] of REAL;</p>"
          ],
          "correct_answer": "<b>B.</b> <p>var a : array [REAL] of REAL;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18461/isro2008-1\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 146,
          "question": "<p>Consider the code fragment written in C below :<br><pre><code>void f (int n)\n{ \n    if (n &lt;= 1)  {\n        printf (\"%d\", n);\n    }\n    else {\n        f (n/2);\n        printf (\"%d\", n%2);\n    }\n}</code></pre> Which of the following implementations will produce the same output for f(173) as the above code?<br>P1<br><pre><code>void f (int n)\n{ \n    if (n/2)  {\n        f(n/2);\n    }\n    printf (\"%d\", n%2);\n}</code></pre> <br>P2<br><pre><code> void f (int n)\n{ \n    if (n &lt;=1)  {\n        printf (\"%d\", n);\n    }\n    else {\n        printf (\"%d\", n%2);\n        f (n/2);\n    }\n}</code></pre> <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both P1 and P2</p>",
            "<b>B.</b> <p>P2 only</p>",
            "<b>C.</b> <p>P1 only</p>",
            "<b>D.</b> <p>Neither P1 nor P2</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P1 only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3407/gate2008-it-83\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 147,
          "question": "<p>Consider the code fragment written in C below :<pre><code> void f (int n)\n{ \n  if (n &lt;=1)  {\n   printf (\"%d\", n);\n  }\n  else {\n   f (n/2);\n   printf (\"%d\", n%2);\n  }\n}</code></pre> <br>What does f(173) print? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10110101</p>",
            "<b>B.</b> <p>010101101</p>",
            "<b>C.</b> <p>010110101</p>",
            "<b>D.</b> <p>10101101</p>"
          ],
          "correct_answer": "<b>D.</b> <p>10101101</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3406/gate2008-it-82\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 148,
          "question": "<p>C program is given below:<pre><code> #include &lt; stdio.h &gt;\nint main ()\n{\n        int i, j;\n        char a [2] [3] = {{'a', 'b', 'c'}, {'d', 'e', 'f'}};\n        char b [3] [2];\n        char *p = *b;\n        for (i = 0; i &lt; 2; i++) {\n              for (j = 0; j &lt; 3; j++) {\n              *(p + 2*j + i) = a [i] [j];\n              }\n        }\n}</code></pre> <br>What should be the contents of the array b at the end of the program? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\begin{array}{ll} \\mathrm{a} &amp; \\mathrm{b} \\\\ \\mathrm{c} &amp; \\mathrm{d} \\\\ \\mathrm{e} &amp; \\mathrm{f} \\end{array}\\)</p>",
            "<b>B.</b> <p>\\(\\begin{array}{ll} \\mathrm{a} &amp; \\mathrm{d} \\\\ \\mathrm{b} &amp; \\mathrm{e} \\\\ \\mathrm{c} &amp; \\mathrm{f} \\end{array}\\)</p>",
            "<b>C.</b> <p>\\(\\begin{array}{ll} \\mathrm{a} &amp; \\mathrm{c} \\\\ \\mathrm{e} &amp; \\mathrm{b} \\\\ \\mathrm{d} &amp; \\mathrm{f} \\end{array}\\)</p>",
            "<b>D.</b> <p>\\(\\begin{array}{ll} \\mathrm{a} &amp; \\mathrm{e} \\\\ \\mathrm{d} &amp; \\mathrm{c} \\\\ \\mathrm{b} &amp; \\mathrm{f} \\end{array}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\begin{array}{ll} \\mathrm{a} &amp; \\mathrm{d} \\\\ \\mathrm{b} &amp; \\mathrm{e} \\\\ \\mathrm{c} &amp; \\mathrm{f} \\end{array}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3362/gate2008-it-52\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 149,
          "question": "<p>Consider the C program given below. What does it print?<pre><code> #include &lt; stdio.h &gt;\nint main ()\n{\n        int i, j;\n        int a [8] = {1, 2, 3, 4, 5, 6, 7, 8};\n        for(i = 0; i &lt; 3; i++) {\n             a[i] = a[i] + 1;\n             i++;\n        }\n        i--;\n        for (j = 7; j &gt; 4; j--) {\n              int i = j/2;\n              a[i] = a[i] - 1;\n        }\n        printf (\"%d, %d\", i, a[i]);</code></pre> <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2,3</p>",
            "<b>B.</b> <p>2,4</p>",
            "<b>C.</b> <p>3,2</p>",
            "<b>D.</b> <p>3,3</p>"
          ],
          "correct_answer": "<b>C.</b> <p>3,2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3361/gate2008-it-51\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 150,
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
          "id": 151,
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
          "id": 152,
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
          "id": 153,
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
          "id": 154,
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
          "id": 155,
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
          "id": 156,
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
          "id": 157,
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
          "id": 158,
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
          "id": 159,
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
          "id": 160,
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
          "id": 161,
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
          "id": 162,
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
          "id": 163,
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
          "id": 164,
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
          "id": 165,
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
          "id": 166,
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
          "id": 167,
          "question": "<p>Consider the following segment of C-code:<pre><code> int j, n;\n   j = 1;\n   while (j &lt;=n)\n   j=j*2; </code></pre>\nThe number of comparisons made in the execution of the loop for any \\(n \\gt 0\\) is: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\left \\lceil log_{2}n \\right \\rceil +1\\)</p>",
            "<b>B.</b> <p>n</p>",
            "<b>C.</b> <p>\\(\\left \\lceil log_{2}n \\right \\rceil \\)</p>",
            "<b>D.</b> <p>\\(\\left \\lfloor log_{2}n \\right \\rfloor +1\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\left \\lfloor log_{2}n \\right \\rfloor +1\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/56129/gate2007-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 168,
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
          "id": 169,
          "question": "<p>Which one of the choices given below would be printed when the following program is executed?<br><pre><code> #include &lt; stdio.h &gt;\nint a1[] = {6, 7, 8, 18, 34, 67};\nint a2[] = {23, 56, 28, 29};\nint a3[] = {-12, 27, -31};\nint *x[] = {a1, a2, a3};\nvoid print(int *a[])\n{\n    printf(\"%d,\", a[0][2]);\n    printf(\"%d,\", *a[2]);\n    printf(\"%d,\", *++a[0]);\n    printf(\"%d,\", *(++a)[0]);\n    printf(\"%d\\n\", a[-1][+1]);\n}\nmain()\n{\n     print(x);\n}</code></pre> <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8, -12, 7, 23, 8</p>",
            "<b>B.</b> <p>8, 8, 7, 23, 7</p>",
            "<b>C.</b> <p>-12, -12, 27, -31, 23</p>",
            "<b>D.</b> <p>-12, -12, 27, -31, 56</p>"
          ],
          "correct_answer": "<b>A.</b> <p>8, -12, 7, 23, 8</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3594/gate2006-it-51\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 170,
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
          "id": 171,
          "question": "<p>Which one of the choices given below would be printed when the following program is executed ?<br><pre><code> #include &lt; stdio.h &gt;\nstruct test {\n               int i;\n               char *c;\n}st[] = {5, \"become\", 4, \"better\", 6, \"jungle\", 8, \"ancestor\", 7, \"brother\"};\nmain ()\n{ \n    struct test *p = st;\n    p += 1;\n    ++p -&gt; c;\n    printf(\"%s,\", p++ -&gt; c);\n    printf(\"%c,\", *++p -&gt; c);\n    printf(\"%d,\", p[0].i);\n    printf(\"%s \\n\", p -&gt; c);\n}</code></pre> <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>jungle, n, 8, nclastor</p>",
            "<b>B.</b> <p>etter, u, 6, ungle</p>",
            "<b>C.</b> <p>cetter, k, 6, jungle</p>",
            "<b>D.</b> <p>etter, u, 8, ncestor</p>"
          ],
          "correct_answer": "<b>B.</b> <p>etter, u, 6, ungle</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3592/gate2006-it-49\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 172,
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
          "id": 173,
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
          "id": 174,
          "question": "<p>Consider the following C-function in which a[n] and b[m] are two sorted\ninteger arrays and c[n+m] be another integer array.<pre><code>\nvoid xyz (int a[],int b[],int c[]){\n   int i, j, k;\n   i=j=k=0;\n   while((i &lt; n) &amp;&amp; (j &lt; m))\n            if (a[i] &lt; b[j]) c[k++]=a[i++];\n            else c[k++]=b[j++];\n}</code></pre>\nWhich of the following condition(s) hold(s) after the termination of the while loop ?<br><br>\nI.  j\\(\\lt\\)m, k=n+j-1, and a [n-1]\\(\\lt\\)b[j] if i=n <br>\nII.  i\\(\\lt\\)n, k=m+i-1, and b[m-1]\\(\\leq\\)a[i] if j=m <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>only (I)</p>",
            "<b>B.</b> <p>only (II)</p>",
            "<b>C.</b> <p>either (I) or (II) but not both</p>",
            "<b>D.</b> <p>neither (I) nor (II)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>neither (I) nor (II)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1831/gate2006-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 175,
          "question": "<p>Let a be an array containing n integers in increasing order. The following algorithm determines whether there are two distinct numbers in the array whose difference is a specified number S &gt; 0.<br><pre><code> i = 0; j = 1;\nwhile (j &lt; n ){\n         if (E) j++;\n         else if (a[j] - a[i] == S) break;\n         else i++;\n}\nif (j &lt; n) printf(\"yes\") else printf (\"no\");</code></pre> <br>Choose the correct expression for E. <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>a[j] - a[i] &gt; S</p>",
            "<b>B.</b> <p>a[j] - a[i] &lt; S</p>",
            "<b>C.</b> <p>a[i] - a[j] &lt; S</p>",
            "<b>D.</b> <p>a[i] - a[j] &gt; S</p>"
          ],
          "correct_answer": "<b>B.</b> <p>a[j] - a[i] &lt; S</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3819/gate2005-it-58\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 176,
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
          "id": 177,
          "question": "<p>The following C function takes two ASCII strings and determines whether one is an anagram of the other. An anagram of a string s is a string obtained by permuting the letters in s.<br><pre><code>int anagram (char *a, char *b) {\n    int count [128], j;\n    for (j = 0;  j &lt; 128; j++) count[j] = 0;\n    j = 0;\n    while (a[j] &amp;&amp; b[j]) {\n        A;\n        B;\n    }\n    for (j = 0; j &lt; 128; j++) if (count [j]) return 0;\n    return 1;\n} </code></pre> <br>\nChoose the correct alternative for statements A and B. <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A : count [a[j]]++  and  B : count[b[j]]--</p>",
            "<b>B.</b> <p>A : count [a[j]]++  and  B : count[b[j]]++</p>",
            "<b>C.</b> <p>A : count [a[j++]]++  and  B : count[b[j]]--</p>",
            "<b>D.</b> <p>A : count [a[j]]++  and  B : count[b[j++]]--</p>"
          ],
          "correct_answer": "<b>D.</b> <p>A : count [a[j]]++  and  B : count[b[j++]]--</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3814/gate2005-it-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 178,
          "question": "<p>Consider line number 3 of the following C-program.<pre><code>\nint main ( ) { /* Line 1 */\nint I, N; /* Line 2 */\nfro (I =0, I &lt; N, I++); /* Line 3 */\n}</code></pre>\nIdentify the compiler's response about this line while creating the object-module: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>No compilation error</p>",
            "<b>B.</b> <p>Only a lexical error</p>",
            "<b>C.</b> <p>Only syntactic errors</p>",
            "<b>D.</b> <p>Both lexical and syntactic errors</p>"
          ],
          "correct_answer": "<b>A.</b> <p>No compilation error</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/4066/gate2005-61#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 179,
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
          "id": 180,
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
        },
        {
          "id": 181,
          "question": "<p>A common property of logic programming languages and functional languages is: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>both are procedural languages</p>",
            "<b>B.</b> <p>both are based on \\(\\lambda\\)-calculus</p>",
            "<b>C.</b> <p>both are declarative</p>",
            "<b>D.</b> <p>both use Horn-clauses</p>"
          ],
          "correct_answer": "<b>C.</b> <p>both are declarative</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1345/gate2005-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 182,
          "question": "<p>What does the following C-statement declare?<pre><code>int ( * f) (int * ) ; </code></pre> <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A function that takes an integer pointer as argument and returns an integer</p>",
            "<b>B.</b> <p>A function that takes an integer as argument and returns an integer pointer</p>",
            "<b>C.</b> <p>A pointer to a function that takes an integer pointer as argument and returns an integer.</p>",
            "<b>D.</b> <p>A function that takes an integer pointer as argument and returns a function pointer</p>"
          ],
          "correct_answer": "<b>C.</b> <p>A pointer to a function that takes an integer pointer as argument and returns an integer.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1343/gate2005-1#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 183,
          "question": "<p>Consider the following C program:<br><pre><code>#include &lt; stdio.h &gt;\ntypedef struct {\n    char *a;\n    char *b;\n    } t;\nvoid f1 (t s);\nvoid f2 (t *p);\nmain()\n{\n    static t s = {\"A\", \"B\"};\n    printf (\"%s %s\\n\", s.a, s.b);\n    f1(s);\n    printf (\"%s %s\\n\", s.a, s.b);\n    f2(&amp;s);\n}\nvoid f1 (t s)\n{\n    s.a = \"U\";\n    s.b = \"V\";\n    printf (\"%s %s\\n\", s.a, s.b);\n    return;\n}\nvoid f2(t *p)\n{\n    p -&gt; a  = \"V\";\n    p -&gt; b = \"W\";\n    printf(\"%s %s\\n\", p -&gt; a, p -&gt; b);\n    return;\n}</code></pre> What is the output generated by the program ? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A  B <br>\nU  V<br>\nV  W<br>\nV  W</p>",
            "<b>B.</b> <p>A  B<br>\nU  V<br>\nA  B<br>\nV  W</p>",
            "<b>C.</b> <p>A  B<br>\nU  V<br>\nU  V<br>\nV  W</p>",
            "<b>D.</b> <p>A  B<br>\nU  V<br>\nV  W<br>\nU  V</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A  B<br>\nU  V<br>\nA  B<br>\nV  W</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3704/gate2004-it-61\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 184,
          "question": "<p>Choose the correct option to fill the ?1 and ?2 so that the program prints an input string in reverse order. Assume that the input string is terminated by a new line character.<br><pre><code>#include &lt; stdio.h &gt;\nvoid wrt_it (void);\nint main (void)\n{\n    printf(\"Enter Text\"); \n    printf (\"\\n\");\n    wrt_it();\n    printf (\"\\n\");\n    return 0;\n}\nvoid wrt_it (void)\n{\n    int c;\n    if (?1)\n        wrt_it();\n    ?2\n} </code></pre> <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>?1 is  getchar()!= '\\n' <br>?2 is  getchar(c);</p>",
            "<b>B.</b> <p>?1 is  (c=getchar());!= '\\n'<br>?2 is  getchar(c);</p>",
            "<b>C.</b> <p>?1 is  c!= '\\n'<br>?2 is  putchar(c);</p>",
            "<b>D.</b> <p>?1 is  (c=getchar())!= '\\n'<br>?2 is  putchar(c);</p>"
          ],
          "correct_answer": "<b>D.</b> <p>?1 is  (c=getchar())!= '\\n'<br>?2 is  putchar(c);</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3703/gate2004-it-60\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 185,
          "question": "<p>What is the output of the following program?<br><pre><code>#include &lt; stdio.h &gt;\nint funcf (int x);\nint funcg (int y);\nmain ()\n{\n    int x = 5, y = 10, count;\n    for (count = 1; count &lt;= 2; ++count) {\n        y += funcf(x) + funcg(x);\n        printf (\"%d\", y);\n    }\n}\nfuncf (int x) {\n    int y;\n    y = funcg(x);\n    return (y);\n}\nfuncg (int x) {\n    static int y = 10;\n    y += 1;\n    return (y + x);\n}\n </code></pre> <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>43 80</p>",
            "<b>B.</b> <p>42 74</p>",
            "<b>C.</b> <p>33 37</p>",
            "<b>D.</b> <p>32 32</p>"
          ],
          "correct_answer": "<b>A.</b> <p>43 80</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3702/gate2004-it-59\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 186,
          "question": "<p>Consider the following C program which is supposed to compute the transpose of a given \\(4 \\times 4\\) matrix M. Note that, there is an X in the program which indicates some missing statements. Choose the correct option to replace X in the program.<br><pre><code> #include &lt; stdio.h &gt;\n#define ROW 4\n#define COL 4\nint M[ROW][COL] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16};\nmain()\n{\n    int i, j, t;\n    for (i = 0; i &lt; 4; ++i)\n    {\n        X\n    }\n    for (i = 0; i &lt; 4; ++i)\n        for (j = 0; j &lt; 4; ++j)\n            printf (\"%d\", M[i][j]);\n}</code></pre> <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p><pre><code> for(j = 0; j &lt; 4; ++j){\n     t = M[i][j];\n     M[i][j] = M[j][i];\n     M[j][i] = t;\n}</code></pre></p>",
            "<b>B.</b> <p><pre><code> for(j = 0; j &lt; 4; ++j){\n     M[i][j] = t;\n     t = M[j][i];\n     M[j][i] = M[i][j];\n}</code></pre></p>",
            "<b>C.</b> <p><pre><code>for(j = i; j &lt; 4; ++j){\n     t = M[i][j];\n     M[i][j] = M[j][i];\n     M[j][i] = t;\n} </code></pre></p>",
            "<b>D.</b> <p><pre><code>for(j = i; j &lt; 4; ++j){\n     M[i][j] = t;\n     t = M[j][i];\n     M[j][i] = M[i][j];\n} </code></pre></p>"
          ],
          "correct_answer": "<b>C.</b> <p><pre><code>for(j = i; j &lt; 4; ++j){\n     t = M[i][j];\n     M[i][j] = M[j][i];\n     M[j][i] = t;\n} </code></pre></p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3701/gate2004-it-58\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 187,
          "question": "<p>Let x be an integer which can take a value of 0 or 1. The statement<pre><code>if (x == 0) x = 1; else x = 0; </code></pre>\nis equivalent to which one of the following ? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>x = 1 + x;</p>",
            "<b>B.</b> <p>x  = 1 - x;</p>",
            "<b>C.</b> <p>x = x - 1;</p>",
            "<b>D.</b> <p>x = 1% x;</p>"
          ],
          "correct_answer": "<b>B.</b> <p>x  = 1 - x;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3656/gate2004-it-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 188,
          "question": "<p>Choose the best matching between the programming styles in Group 1 and their characteristics in Group 2.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\C_Programming\\q90_dd92bc70.jpg\"><br> <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P-2, Q-3, R-4, S-1</p>",
            "<b>B.</b> <p>P-4, Q-3, R-2, S-1</p>",
            "<b>C.</b> <p>P-3, Q-4, R-1, S-2</p>",
            "<b>D.</b> <p>P-3, Q-4, R-2, S-1</p>"
          ],
          "correct_answer": "<b>D.</b> <p>P-3, Q-4, R-2, S-1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1084/gate2004-90#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 189,
          "question": "<p>What does the following algorithm approximate? (Assume \\(m \\gt 1, e \\gt 0\\)).<pre><code>x = m;\ny = 1;\nwhile (x - y &gt; e)\n{\n    x = (x + y)/2;\n    y = m/x;\n}\nprint(x); </code></pre> <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>logm</p>",
            "<b>B.</b> <p>\\(m^{2}\\)</p>",
            "<b>C.</b> <p>\\(m^{1/2}\\)</p>",
            "<b>D.</b> <p>\\(m^{1/3}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(m^{1/2}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1039/gate2004-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 190,
          "question": "<p>Consider the following C program<pre><code>main()\n{\n    int x, y, m, n;\n    scanf (\"%d %d\", &amp;x, &amp;y);\n    /* Assume x  &gt;  0 and y  &gt;  0  */\n    m = x;\n    n = y;\n    while (m! = n)\n    {\n        if (m  &gt;  n)\n            m = m - n;\n        else\n            n = n - m;\n    }\n    print f (\"% d\", n);\n} </code></pre>\nThe program computes <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>x + y using repeated subtraction</p>",
            "<b>B.</b> <p>x mod y using repeated subtraction</p>",
            "<b>C.</b> <p>the greatest common divisor of x and y</p>",
            "<b>D.</b> <p>the least common multiple of x and y</p>"
          ],
          "correct_answer": "<b>C.</b> <p>the greatest common divisor of x and y</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1038/gate2004-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 191,
          "question": "<p>Consider the following C program segment:<pre><code>char p[20];\nchar *s = \"string\";\nint length = strlen(s);\nint i;\nfor (i = 0; i &lt; length; i++)\n     p[i] = s[length - i];\nprintf(\"%s\",p); </code></pre>\nThe output of the program is <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>gnirts</p>",
            "<b>B.</b> <p>string</p>",
            "<b>C.</b> <p>gnirts</p>",
            "<b>D.</b> <p>no output is printed</p>"
          ],
          "correct_answer": "<b>D.</b> <p>no output is printed</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1030/gate2004-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 192,
          "question": "<p>Consider the following program fragment for reversing the digits in a given integer to obtain a new\ninteger. Let \\(n=d_{1}d_{2}...d_{m}\\).<pre><code>int n, rev;\nrev = 0;\nwhile (n  &gt;  0)\n{\n   rev = rev*10 + n%10;\n   n = n/10;\n} </code></pre>\nThe loop invariant condition at the end of the \\(i^{th}\\) iteration is: <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(n=d_{1}d_{2}...d_{m-i}\\) and \\(rev=d_{m}d_{m-1}...d_{m-i+1}\\)</p>",
            "<b>B.</b> <p>\\(d_{m-i+1}...d_{m-1}d_{m}\\) or \\(rev=d_{m-i}...d_{2}d_{1}\\)</p>",
            "<b>C.</b> <p>n \\(\\neq\\)rev</p>",
            "<b>D.</b> <p>\\(n=d_{1}d_{2}...d_{m}\\)  or \\(rev=d_{m}...d_{2}d_{1}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(n=d_{1}d_{2}...d_{m-i}\\) and \\(rev=d_{m}d_{m-1}...d_{m-i+1}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1029/gate2004-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 193,
          "question": "<p>Consider the following C function:<pre><code> int f(int n)\n{\n   static int i = 1;\n   if (n &gt; = 5)\n      return n;\n   n = n+i;\n   i++;\n   return f(n);\n}</code></pre>\nThe value returned by f(1) is <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>6</p>",
            "<b>C.</b> <p>7</p>",
            "<b>D.</b> <p>8</p>"
          ],
          "correct_answer": "<b>C.</b> <p>7</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1028/gate2004-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 194,
          "question": "<p>Consider the following C function<pre><code> void swap (int a, int b)\n{\n   int temp;\n   temp = a;\n   a = b;\n   b = temp;\n}</code></pre>\nIn order to exchange the values of two variables x and y. <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>call swap (x, y)</p>",
            "<b>B.</b> <p>call swap (&amp;x, &amp;y)</p>",
            "<b>C.</b> <p>swap (x,y) cannot be used as it does not return any value</p>",
            "<b>D.</b> <p>swap (x,y) cannot be used as the parameters are passed by value</p>"
          ],
          "correct_answer": "<b>D.</b> <p>swap (x,y) cannot be used as the parameters are passed by value</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/999/gate2004-2#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 195,
          "question": "<p>The goal of structured programming is to <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>have well indented programs</p>",
            "<b>B.</b> <p>be able to infer the flow of control from the compiled code</p>",
            "<b>C.</b> <p>be able to infer the flow of control form the program text</p>",
            "<b>D.</b> <p>avoid the use of GOTO statements</p>"
          ],
          "correct_answer": "<b>C.</b> <p>be able to infer the flow of control form the program text</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/998/gate2004-1#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 196,
          "question": "<p>Consider the C program shown below.<pre><code>  #include &lt; stdio.h &gt; \n#define print(x) printf(\"%d \", x)\nint x;\nvoid Q(int z)\n{\n    z += x;\n    print(z);\n}\nvoid P(int *y)\n{\n    int x = *y + 2;\n    Q(x);\n    *y = x - 1;\n    print(x);\n}\nmain(void)\n{\n    x = 5;\n    P(&amp;x);\n    print(x);\n}</code></pre>\nThe output of this program is <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>12 7 6</p>",
            "<b>B.</b> <p>22 12 11</p>",
            "<b>C.</b> <p>14 6 6</p>",
            "<b>D.</b> <p>7 6 6</p>"
          ],
          "correct_answer": "<b>A.</b> <p>12 7 6</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/972/gate2003-89#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 197,
          "question": "<p>In the following C program fragment, j, k, n and TwoLog_n are integer\nvariables, and A is an array of integers. The variable n is initialized to an integer\n\\(\\geq\\) 3, and TwoLog_n is initialized to the value of \\(2*\\left \\lceil log_{2}n \\right \\rceil\\)<pre><code> for (k = 3; k &lt; = n; k++)\n    A[k] = 0;\nfor (k = 2; k &lt; = TwoLog_n; k++)\n    for (j = k + 1; j &lt; = n; j++)\n        A[j] = A[j] || (j % k);\nfor (j = 3; j &lt; = n; j++)\n    if (!A[j]) printf(\"%d\", j);</code></pre>\nThe set of number printed by this program fragment is <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{m | m \\(\\leq\\)n, (\\(\\exists\\) i) [m = i!]} Here i! mean factorial of i</p>",
            "<b>B.</b> <p>{m | m \\(\\leq\\) n, \\((\\exists  i) [m = i^{2}]\\)}</p>",
            "<b>C.</b> <p>{m | m \\(\\leq\\) n, m is prime}</p>",
            "<b>D.</b> <p>{}</p>"
          ],
          "correct_answer": "<b>D.</b> <p>{}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/971/gate2003-88#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 198,
          "question": "<p>The following program fragment is written in a programming language that allows\nvariables and does not allow nested declarations of functions.<pre><code> global int i = 100, j = 5;\nvoid P(x)\n{\n    int i = 10;\n    print(x + 10);\n    i = 200;\n    j = 20;\n    print(x);\n}\nmain()\n{\n    P(i + j);\n} </code></pre> If the programming language uses dynamic scoping and call by name parameter\npassing mechanism, the values printed by the above program are <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>115,220</p>",
            "<b>B.</b> <p>25,220</p>",
            "<b>C.</b> <p>25,15</p>",
            "<b>D.</b> <p>115,105</p>"
          ],
          "correct_answer": "<b>A.</b> <p>115,220</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43575/gate2003-74#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 199,
          "question": "<p>The following program fragment is written in a programming language that allows\nvariables and does not allow nested declarations of functions.<pre><code> global int i = 100, j = 5;\nvoid P(x)\n{\n    int i = 10;\n    print(x + 10);\n    i = 200;\n    j = 20;\n    print(x);\n}\nmain()\n{\n    P(i + j);\n} </code></pre>\nIf the programming language uses static scoping and call by need parameter\npassing mechanism, the values printed by the above program are <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>115,220</p>",
            "<b>B.</b> <p>25,220</p>",
            "<b>C.</b> <p>25,15</p>",
            "<b>D.</b> <p>115,105</p>"
          ],
          "correct_answer": "<b>D.</b> <p>115,105</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/960/gate2003-73#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 200,
          "question": "<p>Assume the following C variable declaration <br>\nint *A [10], B[10][10];   <br>\nOf the following expressions  <br> I A[2]   <br>  II A[2][3]  <br>  III B[1]   <br>  IV B[2][3] <br> which will not give compile-time errors if used as left hand sides of assignment statements in a C program? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I, II, and IV only</p>",
            "<b>B.</b> <p>II, III, and IV only</p>",
            "<b>C.</b> <p>II and IV only</p>",
            "<b>D.</b> <p>IV only</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I, II, and IV only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/893/gate2003-2#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 201,
          "question": "<p>Consider the following C function.<pre><code>\nfloat f(float x, int y)\n{\n  float p, s; int i;\n  for (s=1, p=1, i=1; i &lt; y; i ++)\n  {\n    p*= x/i;\n    s+=p;\n  }\n  return s;\n}  </code></pre>\nFor large values of y, the return value of the function f best approximates <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(x^{y}\\)</p>",
            "<b>B.</b> <p>\\(e^{x}\\)</p>",
            "<b>C.</b> <p>ln(1+x)</p>",
            "<b>D.</b> <p>\\(x^{x}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(e^{x}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/892/gate2003-1#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 202,
          "question": "<p>The results returned by function under value-result and reference parameter\npassing conventions <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Do not differ</p>",
            "<b>B.</b> <p>Differ in the presence of loops</p>",
            "<b>C.</b> <p>Differ in all cases</p>",
            "<b>D.</b> <p>May differ in the presence of exception</p>"
          ],
          "correct_answer": "<b>D.</b> <p>May differ in the presence of exception</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/823/gate2002-1-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 203,
          "question": "<p>The value of j at the end of the execution of the following C program:<br><pre><code> int incr (int i)\n{ \n    static int count = 0;\n    count = count + i;\n    return (count);\n} \nmain () { \n    int i, j; \n    for (i = 0; i &lt;= 4; i++)\n       j = incr (i);\n} </code></pre>\nis: <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>6</p>",
            "<b>D.</b> <p>7</p>"
          ],
          "correct_answer": "<b>A.</b> <p>10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/667/gate2000-2-20\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 204,
          "question": "<p>Consider the following C declaration:<br><pre><code> struct ( \n    short x[5];  \n    union { \n        float y; \n        long z; \n    } u;\n )t;</code></pre> <br>\nAssume that the objects of the type short, float and long occupy 2 bytes, 4 bytes and 8 bytes, respectively. The memory requirement for variable t, ignoring alignment consideration, is: <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>22 bytes</p>",
            "<b>B.</b> <p>14 bytes</p>",
            "<b>C.</b> <p>18 bytes</p>",
            "<b>D.</b> <p>10 bytes</p>"
          ],
          "correct_answer": "<b>C.</b> <p>18 bytes</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/640/gate2000-1-17-isro2015-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 205,
          "question": "<p>Aliasing in the context of programming languages refers to <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>multiple variables having the same memory location</p>",
            "<b>B.</b> <p>multiple variables having the same value</p>",
            "<b>C.</b> <p>multiple variables having the same identifier</p>",
            "<b>D.</b> <p>multiple uses of the same variable</p>"
          ],
          "correct_answer": "<b>A.</b> <p>multiple variables having the same memory location</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/639/gate2000-1-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 206,
          "question": "<p>The most appropriate matching for the following pairs is: <br><br>\\(\\begin{array}{|ll|ll|}\\hline X: &amp; \\text{m = malloc(5); m = NULL;} &amp; 1: &amp; \\text{using dangling pointers} \\\\\\hline Y: &amp; \\text{free(n); n -&gt; value = 5;} &amp; 2: &amp; \\text{using uninitialized pointers} \\\\\\hline Z: &amp; \\text{char *p , *p = 'a' ; } &amp; 3: &amp; \\text{lost memory} \\\\\\hline \\end{array}\\) <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>X-1  Y-3  Z-2</p>",
            "<b>B.</b> <p>X-2  Y-1  Z-3</p>",
            "<b>C.</b> <p>X-3  Y-2  Z-1</p>",
            "<b>D.</b> <p>X-3  Y-1  Z-2</p>"
          ],
          "correct_answer": "<b>D.</b> <p>X-3  Y-1  Z-2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/635/gate2000-1-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 207,
          "question": "<p>The following C declarations:<br><pre><code> struct node { \n    int i:\n    float j;\n };\n struct node *s[10];</code></pre> define s to be: <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>An array, each element of which is a pointer to a structure of type node</p>",
            "<b>B.</b> <p>A structure of 2 fields, each field being a pointer to an array of 10 elements</p>",
            "<b>C.</b> <p>A structure of 3 fields: an integer, a float, and an array of 10 elements</p>",
            "<b>D.</b> <p>An array, each element of which is a structure of type node</p>"
          ],
          "correct_answer": "<b>A.</b> <p>An array, each element of which is a pointer to a structure of type node</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/634/gate2000-1-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 208,
          "question": "<p>Consider the following C function definition<br><pre><code>int Trial (int a, int b, int c)\n{\n    if ((a&gt;=b) &amp;&amp; (c &lt; b)) return b;\n    else if (a &gt;= b) return Trial(a, c, b);\n    else return Trial(b, a, c);\n} </code></pre>The functional Trial: <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Finds the maximum of a, b, and c</p>",
            "<b>B.</b> <p>Finds the minimum of a, b, and c</p>",
            "<b>C.</b> <p>Finds the middle number of a, b, c</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1501/gate1999-2-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 209,
          "question": "<p>Consider the following program in a language that has dynamic scooping:<br><pre><code>var x: real;\nprocedure show:\n    begin print(x);end;\nprocedure small;\n    var x: real;\n        begin x: = 0.125; show; end;\nbegin x:=0.25\n    show; small\n    end. </code></pre>\nThen the output of the program is: <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0.125 0.125</p>",
            "<b>B.</b> <p>0.25 0.25</p>",
            "<b>C.</b> <p>0.25 0.125</p>",
            "<b>D.</b> <p>0.125 0.25</p>"
          ],
          "correct_answer": "<b>C.</b> <p>0.25 0.125</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1491/gate1999-2-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 210,
          "question": "<p>Given the programming constructs<br>\nI. assignment<br>\nII. for loops where the loop parameter cannot be changed within the loop<br>\nIII. if-then-else<br>\nIV. forward go to<br>\nV. arbitrary go to<br>\nVI. non-recursive procedure call<br>\nVII. recursive procedure/function call<br>\nVIII. repeat loop,<br>\nwhich constructs will you not include in a programming language such that it should be possible to program the terminates (i.e., halting) function in the same programming language <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(II), (III), (IV)</p>",
            "<b>B.</b> <p>(V), (VII), (VIII)</p>",
            "<b>C.</b> <p>(VI), (VII), (VIII)</p>",
            "<b>D.</b> <p>(III), (VII), (VIII)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>(V), (VII), (VIII)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1483/gate1999-2-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 211,
          "question": "<p>What is the result of the following program?<br><pre><code>    program side-effect (input, output);\n    var x, result: integer;\n    function f (var x:integer:integer;\n    begin\n        x:x+1;f:=x;\n    end\n    begin\n    x:=5;\n    result:=f(x)*f(x);\n    writeln(result);\n    end</code></pre> <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>25</p>",
            "<b>C.</b> <p>36</p>",
            "<b>D.</b> <p>42</p>"
          ],
          "correct_answer": "<b>C.</b> <p>36</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1685/gate1998-2-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 212,
          "question": "<p>What value would the following function return for the input x=95?<br><pre><code> Function fun (x:integer):integer;\nBegin\n    If x &gt; 100 then fun = x- 10\n    Else fun = fun(fun (x+11))\nEnd;</code></pre> <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>89</p>",
            "<b>B.</b> <p>90</p>",
            "<b>C.</b> <p>91</p>",
            "<b>D.</b> <p>92</p>"
          ],
          "correct_answer": "<b>C.</b> <p>91</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1684/gate1998-2-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 213,
          "question": "<p>The conditional expansion facility of macro processor is provided to <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>test a condition during the execution of the expanded program</p>",
            "<b>B.</b> <p>to expand certain model statements depending upon the value of a condition during the execution of the expanded program</p>",
            "<b>C.</b> <p>to implement recursion</p>",
            "<b>D.</b> <p>to expand certain model statements depending upon the value of a condition during the process of macro expansion</p>"
          ],
          "correct_answer": "<b>D.</b> <p>to expand certain model statements depending upon the value of a condition during the process of macro expansion</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2225/gate1997-1-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 214,
          "question": "<p>Which of the following macros can put a macro assembler into an infinite loop?<br>I.<pre><code>.MACRO M1, X\n.IF EQ, X   ;if X=0 then\nM1 X + 1\n.ENDC\n.IF NE, X   ;if X \\(\\neq\\) O then\n.WORD X  ;address (X) is stored here\n.ENDC\n.ENDM</code></pre> <br> II.<pre><code>.MACRO M2, X\n.IF EQ, X\nM2 X\n.ENDC\n.IF NE, X\n.WORD X + 1\n.ENDC\n.ENDM </code></pre> <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>II only</p>",
            "<b>B.</b> <p>I only</p>",
            "<b>C.</b> <p>both I and II</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>II only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2745/gate1996-2-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 215,
          "question": "<p>A language with string manipulation facilities uses the following operations<br><pre><code>head(s): first character of a string\ntail(s): all but exclude the first character of a string</code></pre><pre><code> concat(s1, s2): s1s2</code></pre>\nFor the string \"acbc\" what will be the output of<pre><code>concat(head(s), head(tail(tail(s)))) </code></pre> <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>ac</p>",
            "<b>B.</b> <p>bc</p>",
            "<b>C.</b> <p>ab</p>",
            "<b>D.</b> <p>cc</p>"
          ],
          "correct_answer": "<b>C.</b> <p>ab</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2621/gate1995-2-9\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 216,
          "question": "<p>What is the value of X printed by the following program?<br><pre><code>program COMPUTE (input, output);\nvar X:integer;\nprocedure FIND (X:real);\n    begin\n        X:=sqrt(X);\n    end;\nbegin\n    X:=2\n    FIND(X);\n    writeln(X);\nend.\n </code></pre> <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2</p>",
            "<b>B.</b> <p>\\(\\sqrt{2}\\)</p>",
            "<b>C.</b> <p>Run time error</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2616/gate1995-2-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 217,
          "question": "<p>Assume that X and Y are non-zero positive integers. What does the following Pascal program segment do?<br><pre><code>while X &lt;&gt; Y do\nif  X &gt; Y then\n    X := X - Y\nelse\n    Y := Y - X;\nwrite(X);\n </code></pre> <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Computes the LCM of two numbers</p>",
            "<b>B.</b> <p>Divides the larger number by the smaller number</p>",
            "<b>C.</b> <p>Computes the GCD of two numbers</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Computes the GCD of two numbers</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2615/gate1995-2-3\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 218,
          "question": "<p>What are x and y in the following macro definition?<br><pre><code>macro\tAdd x, y\n        Load y\n        Mul x\n        Store y\nend macro\t </code></pre> <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Variables</p>",
            "<b>B.</b> <p>Identifiers</p>",
            "<b>C.</b> <p>Actual parameters</p>",
            "<b>D.</b> <p>Formal parameters</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Formal parameters</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2598/gate1995-1-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 219,
          "question": "<p>In the following Pascal program segment, what is the value of X after the execution of the program segment?<br><pre><code>X := -10; Y := 20;\nIf X &gt; Y then if X &lt; 0 then X := abs(X) else X := 2*X; </code></pre> <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>-20</p>",
            "<b>C.</b> <p>-10</p>",
            "<b>D.</b> <p>None</p>"
          ],
          "correct_answer": "<b>C.</b> <p>-10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2591/gate1995-1-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 220,
          "question": "<p>In which of the following cases is it possible to obtain different results for call-by-reference and call-by-name parameter passing methods? <br><br><strong>(GATE CSE 1994)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Passing a constant value as a parameter</p>",
            "<b>B.</b> <p>Passing the address of an array as a parameter</p>",
            "<b>C.</b> <p>Passing an array element as a parameter</p>",
            "<b>D.</b> <p>Passing an array</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Passing an array element as a parameter</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/305/gate1994-1-20\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 221,
          "question": "<p>An unrestricted use of the \"goto\" statement is harmful because <br><br><strong>(GATE CSE 1994)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>it makes it more difficult to verify programs</p>",
            "<b>B.</b> <p>it increases the running time of the programs</p>",
            "<b>C.</b> <p>it increases the memory required for the programs</p>",
            "<b>D.</b> <p>it results in the compiler generating longer machine code</p>"
          ],
          "correct_answer": "<b>A.</b> <p>it makes it more difficult to verify programs</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2442/gate1994-1-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 222,
          "question": "<p>What does the following code do?<br><pre><code> var a, b: integer;\nbegin\n    a:=a+b;\n    b:=a-b;\n    a:=a-b;\nend;</code></pre> <br><br><strong>(GATE CSE 1993)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>exchanges a and b</p>",
            "<b>B.</b> <p>doubles a and stores in b</p>",
            "<b>C.</b> <p>doubles b and stores in a</p>",
            "<b>D.</b> <p>leaves a and b unchanged</p>",
            "<b>E.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>exchanges a and b</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2292/gate1993-7-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 223,
          "question": "<p>Refer to the PASCAL program shown below.<br><pre><code>Program PARAM (input, output);\nvar m, n : integer;\nprocedure P (var, x, y : integer);\nvar m : integer;\nbegin\nm : = 1;\nx : = y + 1\nend;\nprocedure Q (x:integer; vary : integer);\nbegin\nx:=y+1;\nend;\nbegin\nm:=0; P(m,m); write (m);\nn:=0; Q(n*1,n); write (n)\nend</code></pre> <br>What is the scope of m declared in the main program? <br><br><strong>(GATE CSE 1993)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>PARAM, P, Q</p>",
            "<b>B.</b> <p>PARAM, P</p>",
            "<b>C.</b> <p>PARAM, Q</p>",
            "<b>D.</b> <p>P, Q (e)</p>",
            "<b>E.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>PARAM, P, Q</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://drive.google.com/file/d/0B2D2Vl5_6vK1V0p0NnMydFMxWjQ/view\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 224,
          "question": "<p>Refer to the PASCAL program shown below.<br><pre><code>Program PARAM (input, output);\nvar m, n : integer;\nprocedure P (var, x, y : integer);\nvar m : integer;\nbegin\nm : = 1;\nx : = y + 1\nend;\nprocedure Q (x:integer; vary : integer);\nbegin\nx:=y+1;\nend;\nbegin\nm:=0; P(m,m); write (m);\nn:=0; Q(n*1,n); write (n)\nend</code></pre> <br>The value of n, output by the program PARAM is: <br><br><strong>(GATE CSE 1993)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0, because n is the actual parameter corresponding to x in procedure Q.</p>",
            "<b>B.</b> <p>0, because n is the actual parameter to y in procedure Q.</p>",
            "<b>C.</b> <p>1, because n is the actual parameter corresponding to x in procedure Q.</p>",
            "<b>D.</b> <p>1, because n is the actual parameter corresponding to y in procedure Q.</p>",
            "<b>E.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>E.</b> <p>none of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://drive.google.com/file/d/0B2D2Vl5_6vK1V0p0NnMydFMxWjQ/view\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 225,
          "question": "<p>Refer to the PASCAL program shown below.<br><pre><code> Program PARAM (input, output);\nvar m, n : integer;\nprocedure P (var, x, y : integer);\nvar m : integer;\nbegin\nm : = 1;\nx : = y + 1\nend;\nprocedure Q (x:integer; vary : integer);\nbegin\nx:=y+1;\nend;\nbegin\nm:=0; P(m,m); write (m);\nn:=0; Q(n*1,n); write (n)\nend</code></pre> <br>The value of m, output by the program PARAM is: <br><br><strong>(GATE CSE 1993)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1, because m is a local variable in P</p>",
            "<b>B.</b> <p>0, because m is the actual parameter that corresponds to the formal parameter in p</p>",
            "<b>C.</b> <p>0, because both x and y are just reference to m, and y has the value 0</p>",
            "<b>D.</b> <p>1, because both x and y are just references to m which gets modified in procedure P</p>",
            "<b>E.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>0, because m is the actual parameter that corresponds to the formal parameter in p</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2291/gate1993-7-1-2-3\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 226,
          "question": "<p>Consider the following program<pre><code> Program P2 \n    var n: int: \n     procedure W(var x: int) \n     begin \n         x=x+1; \n         print x;   \n     end \n\n     procedure D \n     begin  \n         var n: int; \n         n=3; \n         W(n);  \n     end \nbegin //beginP2 \n  n=10; \n  D; \nend </code></pre>\nIf the language has dynamic scooping and parameters are passed by reference,\nwhat will be printed by the program ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10</p>",
            "<b>B.</b> <p>11</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/737/gate2001-2-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 227,
          "question": "<p>Consider the following three functions :\n<br>[P1]<pre><code>  int * g (void) \n{ \n  int x= 10; \n  return (&amp;x); \n}</code></pre>\n[P2]<pre><code>   int * g (void) \n{ \n  int * px; \n  *px= 10; \n  return px; \n} </code></pre>\n[P3]<pre><code>  int *g (void) \n{ \n  int *px; \n  px = (int *) malloc (sizeof(int)); \n  *px= 10; \n  return px; \n} </code></pre>\nWhich of the above three functions are likely to cause problems with pointers ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only P3</p>",
            "<b>B.</b> <p>Only P1 and P3</p>",
            "<b>C.</b> <p>Only P1 and P2</p>",
            "<b>D.</b> <p>P1, P2 and P3</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Only P1 and P2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/736/gate2001-2-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 228,
          "question": "<p>What is printed by the print statements in the program P1 assuming call by\nreference parameter passing ?<pre><code> Program P1()\n{\n   x = 10;\n   y = 3;\n   func1(y,x,x);\n   print x;\n   print y;\n}\nfunc1(x,y,z)\n{\n   y = y+4;\n   z = x+y+z;\n}\n</code></pre> <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10, 3</p>",
            "<b>B.</b> <p>31, 3</p>",
            "<b>C.</b> <p>27, 7</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>31, 3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/735/gate2001-2-17#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 229,
          "question": "<p>What type of parameter passing mechanism (call-by-value, call-by-reference, call-by-name, or-by-value result) is the following sequence of actions trying to implement for a procedure call P(A[i]) where P (i:integer) is a procedure and A is an integer array? <br>Is the implementation correct? Explain and correct it if necessary. You are supposed to make only small changes\n<br><br>Create a new local variable, say z.<br>\nAssign to z the value of A[i].<br>\nExecute the body of P using z for A[i]<br>\nSet A[i] to z.? <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>call-by-value</p>",
            "<b>B.</b> <p>call-by-reference</p>",
            "<b>C.</b> <p>call-by-name</p>",
            "<b>D.</b> <p>call-by-value result</p>"
          ],
          "correct_answer": "<b>D.</b> <p>call-by-value result</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/589/gate1992-10a\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 230,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:<br>Consider the following Pascal function:<br><pre><code>Function X(M:integer):integer;\nVar i:integer;\nBegin\n    i := 0;\n    while i*i &lt; M\n    do i:= i+1\n    X := i\n end </code></pre> <br>The function call X(N), if N is positive, will return <br><br><strong>(GATE CSE 1991)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\lfloor\\sqrt N \\rfloor\\)</p>",
            "<b>B.</b> <p>\\(\\lfloor\\sqrt N \\rfloor\\)</p>",
            "<b>C.</b> <p>\\(\\lceil \\sqrt N \\rceil\\)</p>",
            "<b>D.</b> <p>\\(\\lceil \\sqrt N \\rceil +1\\)</p>",
            "<b>E.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\lceil \\sqrt N \\rceil\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/523/gate1991-03-viii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 231,
          "question": "<p>An unrestricted use of the \"go to\" statement is harmful because of which of the following reason (s): <br><br><strong>(GATE CSE 1989)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It makes it more difficult to verify programs.</p>",
            "<b>B.</b> <p>It makes programs more inefficient.</p>",
            "<b>C.</b> <p>It makes it more difficult to modify existing programs.</p>",
            "<b>D.</b> <p>It results in the compiler generating longer machine code.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>It makes it more difficult to verify programs.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/87095/gate1989-3-i\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 232,
          "question": "<p>In which of the following case(s) is it possible to obtain different results for call-by-reference and call-by-name parameter passing? <br><br><strong>(GATE CSE 1989)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Passing an expression as a parameter</p>",
            "<b>B.</b> <p>Passing an array as a parameter</p>",
            "<b>C.</b> <p>Passing a pointer as a parameter</p>",
            "<b>D.</b> <p>Passing as array element as a parameter</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Passing an expression as a parameter</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/37264/gate1989-3-viii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 233,
          "question": "<p>For the program given below what will be printed by the write statements marked (1) and (2) in the program if the variables are dynamically scoped?<br><pre><code> Var x, y:interger; \nprocedure P(n:interger);\nbegin\n     x := (n+2)/(n-3);\nend;\n\nprocedure Q \nVar x, y:interger;\nbegin   \n    x:=3;\n    y:=4; \n    P(y);\n    Write(x);           __(1)\nend;\n \nbegin\n    x:=7;\n    y:=8;\n    Q; \n    Write(x);           __(2)\nend.</code></pre> <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3, 6</p>",
            "<b>B.</b> <p>6, 7</p>",
            "<b>C.</b> <p>3, 7</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>6, 7</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80374/gate1987-1-xx\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 234,
          "question": "<p>Study the following program written in a block-structured language:<br><pre><code> Var x, y:interger; \nprocedure P(n:interger);\nbegin\n     x:=(n+2)/(n-3);\nend;\n\nprocedure Q \nVar x, y:interger;\nbegin   \n    x:=3;\n    y:=4; \n    P(y);\n    Write(x)          __(1)\nend;\n \nbegin\n    x:=7;\n    y:=8;\n    Q; \nWrite(x);             __(2) \nend.</code></pre> <br>\nWhat will be printed by the write statements marked (1) and (2) in the program if the variables are statically scoped? <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3, 6</p>",
            "<b>B.</b> <p>6, 7</p>",
            "<b>C.</b> <p>3, 7</p>",
            "<b>D.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>3, 6</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80373/gate1987-1-xix\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
