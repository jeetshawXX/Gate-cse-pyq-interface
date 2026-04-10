window.__examLoadCallback({
  "title": "C_Programming - C_Programming - Slot 3",
  "duration": 42,
  "sections": [
    {
      "name": "C_Programming",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
          "question": "<p>Consider the following C functions.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\C_Programming\\q48_1495b619.jpg\"><br>The value returned by pp(3,4) is _____ <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "81",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333183/gate2020-cs-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the following C functions.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\C_Programming\\q46_8e3cceff.jpg\"><br>The return value of fun2(5) is ______ <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "55",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333185/gate2020-cs-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the following C program.<pre><code>    #include &lt; stdio.h &gt;\n    int main ()  {\n        int  a[4] [5] = {{1, 2, 3, 4, 5},\n                        {6, 7,8, 9, 10},\n                        {11, 12, 13, 14, 15},\n                        {16, 17,18, 19, 20}};\n        printf(\"%d\\n\", *(*(a+**a+2)+3));\n        return(0);\n    }</code></pre>The output of the program is _______. <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "19",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333209/gate2020-cs-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\nint main() { \n  int a[] = {2, 4, 6, 8, 10}; \n  int i, sum = 0, *b = a + 4; \n  for (i = 0; i &lt; 5; i++ ) \n  sum = sum + (*b - i) - *(b - i); \n  printf(\"%dn\", sum); \n  return 0; \n} </code></pre>\nThe output of above C program is __________ . Note: This was Numerical Type question. <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302795/gate2019-cs-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\nint main() {\n float sum = 0.0, j = 1.0, i = 2.0;\n while (i / j &gt; 0.0625) {\n    j = j + j; \n    sum = sum + i/j;\n    printf(\"%f \\n\", sum);\n }\n return 0;\n}</code></pre>\nThe number of times variable sum will be printed When the above program is executed is _________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302796/gate2019-cs-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
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
          "id": 8,
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
          "id": 9,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;\n int main(){\n  int arr[] = {1,2,3,4,5,6,7,8,9,0,1,2,5}, *ip = arr + 4;\n  printf(\"%dn\", ip[1]);\n  return 0;\n}</code></pre>\nThe number that will be displayed on execution of the program is _________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302824/gate2019-cs-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the following C program:<pre><code> \n#include <stdio.h>\n  int jumble(int x, int y) {\n    x = 2 * x + y;\n    return x;\n  }\nint main() {\n  int x = 2, y = 5;\n  y = jumble(y, x);\n  x = jumble(y, x);\n  printf(\"%dn\", x);\n  return 0;\n}</stdio.h></code></pre>\nThe value printed by program is __________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "26",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302830/gate2019-cs-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
