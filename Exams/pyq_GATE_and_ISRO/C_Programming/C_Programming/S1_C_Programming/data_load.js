window.__examLoadCallback({
  "title": "C_Programming - C_Programming - Slot 1",
  "duration": 42,
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
        }
      ]
    }
  ]
});
