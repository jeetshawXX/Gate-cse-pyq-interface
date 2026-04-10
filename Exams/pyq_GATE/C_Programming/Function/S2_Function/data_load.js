window.__examLoadCallback({
  "title": "Function - Function - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "Function",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
          "question": "<p>Consider the following C program:<pre><code>  #include &lt; stdio.h &gt;\nint counter = 0;\nint calc (int a, int b) {\n    int c;\n    counter++;\n    if (b==3) return (a*a*a);\n    else {\n       c = calc(a, b/3);\n       return (c*c*c);\n           }\n}\nint main (){\ncalc(4, 81);\nprintf (\"%d\", counter);\n}</code></pre> The output of this program is _____. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204095/gate2018-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>The output of executing the following C program is ________.<pre><code> # include <stdio.h>\nint total (int v) {\nwhile (v) {\n    static int count + = v &amp; 1;\n    v&gt;&gt; = 1;\n }\n    return count;\n }\nvoid main ( ) {\nstatic int x = 0;\nint i = 5;\nfor (; i&gt; 0; i--) {\nx=x + total (i) ; \n}\nprintf (\"%d\\n\", x) ; } </stdio.h></code></pre> <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "23",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118442/gate2017-1-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
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
          "id": 5,
          "question": "<p>Consider the following two functions.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Function\\q52_7b87d5d2.jpg\">\nThe output printed when fun1(5) is called is <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
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
          "id": 6,
          "question": "<p>Consider thefollowingprogram:<pre><code>\nint f(int*p, int n)\n{\n   if (n&lt;=1)return0;\n    else returnmax(f(p+1,n-1),p[0]-p[1]);\n}\nint main()\n{\n    int a[]={3,5,2,6,4};\n    printf(\"%d\", f(a,5));\n }</code></pre>\nNote: max(x,y) returns the maxi mumof x and y.\nThe value printed by this program is____________ . <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39602/gate2016-2-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>The value printed by the following program is .<pre><code>\nvoid f(int*p, int m){\n     m =m+5;\n     *p =*p+m;\n      return;\n}\nvoid main(){\n     int i=5, j=10;\n     f(&amp;i, j);\n     printf(\"%d\", i+j);\n}</code></pre> <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "30",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39565/gate2016-2-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
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
          "id": 9,
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
          "id": 10,
          "question": "<p>Consider  the following C program.<pre><code>\n#include &lt; stdio.h &gt;\nvoid mystery(int *ptra,int *ptrb){\n   int *temp;\n   temp =ptrb; \n   ptrb =ptra;\n   ptra =temp;\n}\nint main(){\n   int a=2016,b=0,c=4,d=42;\n   mystery(&amp;a, &amp;b);\n   if (a &lt; c)\n            mystery(&amp;c, &amp;a);\n   mystery(&amp;a, &amp;d);\n   printf(\"%d\\n\", a);\n}</code></pre>\nThe output of the program is _________. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2016",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39642/gate2016-1-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
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
          "id": 12,
          "question": "<p>Suppose c=(c[0],...,c[k-1]) is an array of length k, where all the entries are from the set {0,1}. For any positive integers a and n, consider the following pseudocode.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Function\\q53_ddb61680.jpg\"> <br>  If k=4, c=(1,0,1,1), a=2 and n=8, then the output of DOSOMETHING(c,a,n) is _____. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8558/gate2015-3-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the following C program.<pre><code> #include &lt; stdio.h &gt;\nint f1(void);\nint f2(void);\nint f3(void);\nint x = 10;\nint main( )\n{\n   int x = 1;\n   x += f1( ) + f2( ) + f3( ) + f2( );\n   printf(\"%d\", x);\n   return 0;\n}\nint f1() { int x = 25; x++; return x;}\nint f2() { static int x = 50; x++; return x;}\nint f3() { x *= 10; return x};</code></pre> The output of the program is ________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "230",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8563/gate2015-3-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
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
          "id": 15,
          "question": "<p>Consider the following C function.<pre><code>int fun(int n){\n   int x=1,k;\n   if (n==1) return x;\n   for (k=1; k &lt; n; ++k)\n       x = x + fun(k) * fun(n-k);\n   return x;\n}</code></pre> The return value of fun(5) is ________. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "51",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8060/gate2015-2-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
