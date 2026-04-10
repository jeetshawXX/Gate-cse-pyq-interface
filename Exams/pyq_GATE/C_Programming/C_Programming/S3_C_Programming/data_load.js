window.__examLoadCallback({
  "title": "C_Programming - C_Programming - Slot 3",
  "duration": 42,
  "sections": [
    {
      "name": "C_Programming",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\n int main(){\n  int arr[] = {1,2,3,4,5,6,7,8,9,0,1,2,5}, *ip = arr + 4;\n  printf(\"%dn\", ip[1]);\n  return 0;\n}</code></pre>\nThe number that will be displayed on execution of the program is _________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302824/gate2019-cs-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the following C program:<pre><code> \n#include <stdio.h>\n  int jumble(int x, int y) {\n    x = 2 * x + y;\n    return x;\n  }\nint main() {\n  int x = 2, y = 5;\n  y = jumble(y, x);\n  x = jumble(y, x);\n  printf(\"%dn\", x);\n  return 0;\n}</stdio.h></code></pre>\nThe value printed by program is __________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "26",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302830/gate2019-cs-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following program written in pseudo-code. Assume that x and y are integers.<pre><code>\nCount(x,y) {\n     if (y != 1){\n        if (x != 1) {\n                  print(\"*\");\n                  Count(x/2, y);\n                  }\n            else {\n                     y = y-1;\n                    Count(1024, y);\n                  }\n      }\n} </code></pre>\nThe number of times that the print statement is executed by the call\nCount(1024,1024) is _____. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10230",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204120/gate2018-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
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
          "id": 7,
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
          "id": 8,
          "question": "<p>Consider the following C program:<pre><code>  #include &lt; stdio.h &gt;\nint counter = 0;\nint calc (int a, int b) {\n    int c;\n    counter++;\n    if (b==3) return (a*a*a);\n    else {\n       c = calc(a, b/3);\n       return (c*c*c);\n           }\n}\nint main (){\ncalc(4, 81);\nprintf (\"%d\", counter);\n}</code></pre> The output of this program is _____. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204095/gate2018-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
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
          "id": 10,
          "question": "<p>Consider the following C Program.<pre><code> #include &lt; stdio.h &gt;\n#include &lt; string.h &gt;\n#int main ( ) {\nchar* c = \"GATECSIT2017\";\nchar* p = c;\nprintf(\"%d\", (int) strlen (c+2[p]-6[p]-1));\nreturn 0;\n}\n</code></pre>The output of the program is _______________. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118335/gate2017-2-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the following C program.<pre><code> #include &lt; stdio.h &gt;\nint main ( ) {\n    int m = 10;\n    int n, n1;\n    n = ++m;\n    n1 = m++;\n    n--;\n    --n1;\n    n-=n1;\nprintf (\"%d\", n) ;\nreturn 0;\n}</code></pre>\nThe output of the program is ______________. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118272/gate2017-2-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the following snippet of a C program. Assume that swap (&amp;x, &amp;y) exchanges the\ncontents of x and y.<pre><code>\nint main ( ) {\nint array[]={3,5,1,4,6,2};\nint done =0 ;\nint i ;\nwhile (done = = 0) {\n   done = 1;\n   for (i = 0; i &lt;=4; i ++) {\n   if (array [i] &lt; array [i +1]) {\n       swap (&amp; array [i], &amp;array [i+1]);\n       done = 0;\n    }\n}\nfor (i = 5 ; i &gt; =1; i --) {\nif (array [i] &gt; array [ i-1]) {\n    swap ( &amp; array [i] , &amp;array [i-1]);\n     done = 0;\n  }\n} }\nprintf ( \" %d \" , array [3] );\n}</code></pre>\nThe output of the program is ____________. <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118388/gate2017-2-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
