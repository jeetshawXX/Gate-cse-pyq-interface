window.__examLoadCallback({
  "title": "C_Programming - C_Programming - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "C_Programming",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
          "question": "<p>The integer value printed by the ANSI-C program given below is ______.<br><pre><code>#include &lt; stdio.h &gt;\nint funcp(){\n   static int x = 1;\n   x++;\n   return x;\n}\nint main(){\n   int x,y;\n   x = funcp();\n   y = funcp()+x;\n   printf(\"%d\\n\", (x+y));\n   return 0;\n}\n</code></pre> <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399286/gate-cse-2023-question-25#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
          "question": "<p>Consider the following ANSI C program<pre><code> #include &lt; stdio.h &gt;\nint foo(int x, int y, int q) \n    {\n        if ((x &lt; = 0) &amp;&amp; (y &lt; = 0))\n        return q;\n        if (x &lt; = 0)\n        return foo(x, y-q, q);\n        if (y &lt; = 0)\n        return foo(x-q, y, q);\n        return foo(x, y-q, q) + foo(x-q, y, q);\n    }\nint main( )\n{\n    int r = foo(15, 15, 10);\n    printf(\"%d\", r);\n    return 0;\n}</code></pre>  The output of the program upon execution is ____ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "60",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357488/gate-cse-2021-set-2-question-49#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Consider the following ANSI C function:<pre><code>int SomeFunction (int x, int y)\n{\n    if ((x==1) || (y==1)) return 1;\n    if (x==y) return x;\n    if (x &gt; y) return SomeFunction(x-y, y);\n    if (y &gt; x) return SomeFunction (x, y-x);\n \n} </code></pre>The value returned by SomeFunction(15, 255) is __________ <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "15",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357517/gate-cse-2021-set-2-question-23#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
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
          "id": 9,
          "question": "<p>Consider the following ANSI C function:<pre><code> int SimpleFunction(int Y[], int n, int x)\n{\nint total = Y[0], loopIndex;\nfor (loopIndex=1; loopIndex&lt;=n-1; loopIndex++)\n    total=x*total +Y[loopIndex];\nreturn total;\n}</code></pre> Let Z be an array of 10 elements with Z[i]=1, for all i such that \\(0\\leq i \\leq 9\\). The value returned by SimpleFunction(Z,10,2) is __________ <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1023",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357403/gate-cse-2021-set-1-question-48#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
