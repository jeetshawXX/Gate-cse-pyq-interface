window.__examLoadCallback({
  "title": "C_Programming - C_Programming - Slot 6",
  "duration": 42,
  "sections": [
    {
      "name": "C_Programming",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
          "question": "<p>Consider thefollowingprogram:<pre><code>\nint f(int*p, int n)\n{\n   if (n&lt;=1)return0;\n    else returnmax(f(p+1,n-1),p[0]-p[1]);\n}\nint main()\n{\n    int a[]={3,5,2,6,4};\n    printf(\"%d\", f(a,5));\n }</code></pre>\nNote: max(x,y) returns the maxi mumof x and y.\nThe value printed by this program is____________ . <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39602/gate2016-2-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
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
          "id": 4,
          "question": "<p>The value printed by the following program is .<pre><code>\nvoid f(int*p, int m){\n     m =m+5;\n     *p =*p+m;\n      return;\n}\nvoid main(){\n     int i=5, j=10;\n     f(&amp;i, j);\n     printf(\"%d\", i+j);\n}</code></pre> <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "30",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39565/gate2016-2-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>The attributes of three arithmetic operators in some programming language are given below.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\C_Programming\\q45_b4da3cf0.jpg\"> <br>\nThe value of the expression 2-5+1-7*3 in this language is_______ . <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "9",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39697/gate2016-1-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
          "question": "<p>Consider  the following C program.<pre><code>\n#include &lt; stdio.h &gt;\nvoid mystery(int *ptra,int *ptrb){\n   int *temp;\n   temp =ptrb; \n   ptrb =ptra;\n   ptra =temp;\n}\nint main(){\n   int a=2016,b=0,c=4,d=42;\n   mystery(&amp;a, &amp;b);\n   if (a &lt; c)\n            mystery(&amp;c, &amp;a);\n   mystery(&amp;a, &amp;d);\n   printf(\"%d\\n\", a);\n}</code></pre>\nThe output of the program is _________. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2016",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39642/gate2016-1-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
