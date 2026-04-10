window.__examLoadCallback({
  "title": "Array_and_Pointer - Array_and_Pointer - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Array_and_Pointer",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\n\nint main(){\n    int a;\n    int arr[5] = {30,50,10};\n    int *ptr;\n    ptr = &amp;arr[0] + 1;\n    a = *ptr;\n    (*ptr)++;\n    ptr++;\n    printf(\"%d\", a + (*ptr) + arr[1]);\n    return 0;\n}\n</code></pre>\nThe output of the above program is ___________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "111",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460841/gate-cse-2025-set-2-question-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
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
          "id": 3,
          "question": "<p><pre><code>\n#include &lt; stdio.h &gt;\nvoid foo(int *p, int x) {\n    *p = x;\n}\n\nint main() {\n    int *z;\n    int a = 20, b = 25;\n    z = &amp;a;\n    foo(z, b);\n    printf(\"%d\", a);\n    return 0;\n}\n</code></pre>\nThe output of the given C program is __________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "25",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460056/gate-cse-2025-set-1-question-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>The pseudocode of a function fun() is given below:<pre><code>\nfun(int A[0,...,n-1])\n{\n    for i=0 to n-2\n\tfor j=0 to n-i-2\n\t    if (A[j] &gt; A[j+1])\n\t\tthen swap A[j] and A[j+1]}\n}\n</code></pre>\nLet \\(A[0, \\dots, 29]\\) be an array storing 30 distinct integers in descending order. The number of swap operations that will be performed, if the function fun() is called with \\(A[0, \\dots, 29]\\) as argument, is __________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "435",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460057/gate-cse-2025-set-1-question-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
          "question": "<p>Consider the following C program.<pre><code>    #include &lt; stdio.h &gt;\n    int main ()  {\n        int  a[4] [5] = {{1, 2, 3, 4, 5},\n                        {6, 7,8, 9, 10},\n                        {11, 12, 13, 14, 15},\n                        {16, 17,18, 19, 20}};\n        printf(\"%d\\n\", *(*(a+**a+2)+3));\n        return(0);\n    }</code></pre>The output of the program is _______. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "19",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333209/gate2020-cs-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\nint main() { \n  int a[] = {2, 4, 6, 8, 10}; \n  int i, sum = 0, *b = a + 4; \n  for (i = 0; i &lt; 5; i++ ) \n  sum = sum + (*b - i) - *(b - i); \n  printf(\"%dn\", sum); \n  return 0; \n} </code></pre>\nThe output of above C program is __________ . Note: This was Numerical Type question. <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302795/gate2019-cs-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\n int main(){\n  int arr[] = {1,2,3,4,5,6,7,8,9,0,1,2,5}, *ip = arr + 4;\n  printf(\"%dn\", ip[1]);\n  return 0;\n}</code></pre>\nThe number that will be displayed on execution of the program is _________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302824/gate2019-cs-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
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
          "id": 15,
          "question": "<p>Consider the following C Program.<pre><code> #include &lt; stdio.h &gt;\n#include &lt; string.h &gt;\n#int main ( ) {\nchar* c = \"GATECSIT2017\";\nchar* p = c;\nprintf(\"%d\", (int) strlen (c+2[p]-6[p]-1));\nreturn 0;\n}\n</code></pre>The output of the program is _______________. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118335/gate2017-2-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
