window.__examLoadCallback({
  "title": "C_Programming - C_Programming - Slot 7",
  "duration": 42,
  "sections": [
    {
      "name": "C_Programming",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
          "question": "<p>Suppose c=(c[0],...,c[k-1]) is an array of length k, where all the entries are from the set {0,1}. For any positive integers a and n, consider the following pseudocode.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\C_Programming\\q53_ddb61680.jpg\"> <br>  If k=4, c=(1,0,1,1), a=2 and n=8, then the output of DOSOMETHING(c,a,n) is _____. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8558/gate2015-3-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the following C program: <br><pre><code>#include &lt; stdio.h &gt;\nint main( )\n{\n    int i, j, k = 0;\n    j = 2 * 3 / 4 + 2.0 / 5 + 8 / 5;\n    k -=  --j;\n    for(i = 0; i &lt; 5; i++)\n    {\n         switch(i + k)\n        {\n          case 1:\n          case 2: printf(\"\\n%d\", i+k);\n          case 3: printf(\"\\n%d\", i+k);\n          default: printf(\"\\n%d\", i+k);\n        }\n   }\nreturn 0;\n}</code></pre> The number of times printf statement is executed is ________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8557/gate2015-3-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the following C program.<pre><code> #include &lt; stdio.h &gt;\nint main( )\n{\nstatic int a[ ] = {10, 20, 30, 40, 50};\nstatic int *p[ ] = {a, a+3, a+4, a+1, a+2};\nint **ptr = p;\nptr++;\nprintf(\"%d%d\", ptr-p,**ptr);\n}</code></pre>The output of the program is ______________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "140",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8478/gate2015-3-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the following C program.<pre><code> #include &lt; stdio.h &gt;\nint f1(void);\nint f2(void);\nint f3(void);\nint x = 10;\nint main( )\n{\n   int x = 1;\n   x += f1( ) + f2( ) + f3( ) + f2( );\n   printf(\"%d\", x);\n   return 0;\n}\nint f1() { int x = 25; x++; return x;}\nint f2() { static int x = 50; x++; return x;}\nint f3() { x *= 10; return x};</code></pre> The output of the program is ________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "230",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8563/gate2015-3-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
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
          "id": 12,
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
          "id": 13,
          "question": "<p>Consider the C program below.<pre><code>\n#include &lt; stdio.h &gt;\nint *A, stkTop;\nint stkFunc(int opcode, int val)\n{\n    static int size=0, stkTop=0;\n    switch (opcode) {\n        case -1: size = val; break;\n        case 0: if (stkTop &lt; size) A[stkTop++] = val; break;\n        default: if (stkTop) return A[--stkTop];\n        }\n       return -1;\n}\nint main()\n{\n    int B[20]; A = B; stkTop = -1;\n    stkFunc (-1, 10);\n    stkFunc ( 0, 5);\n    stkFunc ( 0, 10);\n    printf (\"%d\\n\", stkFunc(1, 0) + stkFunc(1, 0));\n}</code></pre> The value printed by the above program is __________. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "15",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8164/gate2015-2-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the following C function.<pre><code>int fun(int n){\n   int x=1,k;\n   if (n==1) return x;\n   for (k=1; k &lt; n; ++k)\n       x = x + fun(k) * fun(n-k);\n   return x;\n}</code></pre> The return value of fun(5) is ________. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "51",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8060/gate2015-2-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
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
        }
      ]
    }
  ]
});
