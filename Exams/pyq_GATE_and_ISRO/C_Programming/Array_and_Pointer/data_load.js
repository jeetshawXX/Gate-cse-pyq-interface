window.__examLoadCallback({
  "title": "C_Programming - Array_and_Pointer",
  "duration": 152,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
          "question": "<p>Consider the following C program.<pre><code>    #include &lt; stdio.h &gt;\n    int main ()  {\n        int  a[4] [5] = {{1, 2, 3, 4, 5},\n                        {6, 7,8, 9, 10},\n                        {11, 12, 13, 14, 15},\n                        {16, 17,18, 19, 20}};\n        printf(\"%d\\n\", *(*(a+**a+2)+3));\n        return(0);\n    }</code></pre>The output of the program is _______. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "19",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333209/gate2020-cs-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\nint main() { \n  int a[] = {2, 4, 6, 8, 10}; \n  int i, sum = 0, *b = a + 4; \n  for (i = 0; i &lt; 5; i++ ) \n  sum = sum + (*b - i) - *(b - i); \n  printf(\"%dn\", sum); \n  return 0; \n} </code></pre>\nThe output of above C program is __________ . Note: This was Numerical Type question. <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302795/gate2019-cs-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\n int main(){\n  int arr[] = {1,2,3,4,5,6,7,8,9,0,1,2,5}, *ip = arr + 4;\n  printf(\"%dn\", ip[1]);\n  return 0;\n}</code></pre>\nThe number that will be displayed on execution of the program is _________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302824/gate2019-cs-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
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
          "id": 18,
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
          "id": 19,
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
          "id": 20,
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
          "id": 21,
          "question": "<p>Consider the following C Program.<pre><code> #include &lt; stdio.h &gt;\n#include &lt; string.h &gt;\n#int main ( ) {\nchar* c = \"GATECSIT2017\";\nchar* p = c;\nprintf(\"%d\", (int) strlen (c+2[p]-6[p]-1));\nreturn 0;\n}\n</code></pre>The output of the program is _______________. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118335/gate2017-2-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
          "question": "<p>Consider the following snippet of a C program. Assume that swap (&amp;x, &amp;y) exchanges the\ncontents of x and y.<pre><code>\nint main ( ) {\nint array[]={3,5,1,4,6,2};\nint done =0 ;\nint i ;\nwhile (done = = 0) {\n   done = 1;\n   for (i = 0; i &lt;=4; i ++) {\n   if (array [i] &lt; array [i +1]) {\n       swap (&amp; array [i], &amp;array [i+1]);\n       done = 0;\n    }\n}\nfor (i = 5 ; i &gt; =1; i --) {\nif (array [i] &gt; array [ i-1]) {\n    swap ( &amp; array [i] , &amp;array [i-1]);\n     done = 0;\n  }\n} }\nprintf ( \" %d \" , array [3] );\n}</code></pre>\nThe output of the program is ____________. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118388/gate2017-2-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
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
          "id": 24,
          "question": "<p>Consider the following C program.<pre><code> #include &lt; stdio.h &gt;\n#include &lt; string.h &gt;\nvoid printlength (char *s, char *t) {\n unsigned int c = 0;\n int len = ((strlen(s) - strlen (t)) &gt; c) ? strlen(s): strlen(t);\n printf (\"%d\\n\", len);\n}\nvoid main ( ) {\n char *x = \"abc\";\n char *y =\"defgh\"; \n printlength (x,y); </code></pre>\nRecall that strlen is defined in string.h as returning a value of type size_t, which is an\nunsigned int. The output of the program is _____________. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118473/gate2017-1-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 25,
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
          "id": 26,
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
          "id": 27,
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
          "id": 28,
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
          "id": 29,
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
          "id": 30,
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
          "id": 31,
          "question": "<p>Consider the following C program.<pre><code> #include &lt; stdio.h &gt;\nint main( )\n{\nstatic int a[ ] = {10, 20, 30, 40, 50};\nstatic int *p[ ] = {a, a+3, a+4, a+1, a+2};\nint **ptr = p;\nptr++;\nprintf(\"%d%d\", ptr-p,**ptr);\n}</code></pre>The output of the program is ______________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "140",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8478/gate2015-3-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 32,
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
          "id": 33,
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
          "id": 34,
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
          "id": 35,
          "question": "<p>Consider the following program in C language:<pre><code># include &lt; stdio.h &gt;\nmain()\n{\n  int i;\n  int * pi = &amp;i;\n  scanf( \"%d\", pi) ;\n  printf (\"%d \\ n\", i+5) ;\n}</code></pre>\nWhich one of the following statements is TRUE? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
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
          "id": 36,
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
          "id": 37,
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
          "id": 38,
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
          "id": 39,
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
          "id": 40,
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
          "id": 41,
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
          "id": 42,
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
          "id": 43,
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
          "id": 44,
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
          "id": 45,
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
          "id": 46,
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
          "id": 47,
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
          "id": 48,
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
          "id": 49,
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
          "id": 50,
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
          "id": 51,
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
          "id": 52,
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
          "id": 53,
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
          "id": 54,
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
          "id": 55,
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
        }
      ]
    }
  ]
});
