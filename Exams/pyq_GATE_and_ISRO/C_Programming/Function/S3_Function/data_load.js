window.__examLoadCallback({
  "title": "Function - Function - Slot 3",
  "duration": 42,
  "sections": [
    {
      "name": "Function",
      "questions": [
        {
          "id": 1,
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
          "question": "<p>The value printed by the following program is .<pre><code>\nvoid f(int*p, int m){\n     m =m+5;\n     *p =*p+m;\n      return;\n}\nvoid main(){\n     int i=5, j=10;\n     f(&amp;i, j);\n     printf(\"%d\", i+j);\n}</code></pre> <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "30",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39565/gate2016-2-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
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
          "id": 5,
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
          "id": 6,
          "question": "<p>Consider  the following C program.<pre><code>\n#include &lt; stdio.h &gt;\nvoid mystery(int *ptra,int *ptrb){\n   int *temp;\n   temp =ptrb; \n   ptrb =ptra;\n   ptra =temp;\n}\nint main(){\n   int a=2016,b=0,c=4,d=42;\n   mystery(&amp;a, &amp;b);\n   if (a &lt; c)\n            mystery(&amp;c, &amp;a);\n   mystery(&amp;a, &amp;d);\n   printf(\"%d\\n\", a);\n}</code></pre>\nThe output of the program is _________. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2016",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39642/gate2016-1-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
          "question": "<p>Suppose c=(c[0],...,c[k-1]) is an array of length k, where all the entries are from the set {0,1}. For any positive integers a and n, consider the following pseudocode.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Function\\q53_ddb61680.jpg\"> <br>  If k=4, c=(1,0,1,1), a=2 and n=8, then the output of DOSOMETHING(c,a,n) is _____. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8558/gate2015-3-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the following C program.<pre><code> #include &lt; stdio.h &gt;\nint f1(void);\nint f2(void);\nint f3(void);\nint x = 10;\nint main( )\n{\n   int x = 1;\n   x += f1( ) + f2( ) + f3( ) + f2( );\n   printf(\"%d\", x);\n   return 0;\n}\nint f1() { int x = 25; x++; return x;}\nint f2() { static int x = 50; x++; return x;}\nint f3() { x *= 10; return x};</code></pre> The output of the program is ________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "230",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8563/gate2015-3-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
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
          "id": 13,
          "question": "<p>Consider the following C function.<pre><code>int fun(int n){\n   int x=1,k;\n   if (n==1) return x;\n   for (k=1; k &lt; n; ++k)\n       x = x + fun(k) * fun(n-k);\n   return x;\n}</code></pre> The return value of fun(5) is ________. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "51",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8060/gate2015-2-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
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
          "id": 15,
          "question": "<p>The output of the following C program is__________.<pre><code>  void f1(int a, int b) {\n    int c;\n    c=a; a=b; b=c;\n}\nvoid f2(int *a, int *b) {\n    int c;\n    c=*a; *a=*b; *b=c;\n}\nint main(){\n    int a=4, b=5, c=6;\n    f1(a,b);\n    f2(&amp;b, &amp;c);\n     printf(\"%d\",c-a-b);\n}</code></pre> <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "-5",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8185/gate2015-1-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
