window.__examLoadCallback({
  "title": "C_Programming - Loops",
  "duration": 47,
  "sections": [
    {
      "name": "Loops",
      "questions": [
        {
          "id": 1,
          "question": "<p><pre><code>\nint x=126,y=105;\n do {\n\t if(x&gt;y) x=x-y; \n\telse y=y-x; \n      } while(x!=y); \n\nprintf(\"%d\",x); </code></pre>\nThe output of the given C code segment is ________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "21",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460812/gate-cse-2025-set-2-question-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the following C program:<pre><code>\n#include &lt; stdio.h &gt;  \nint gate(int n) {  \n    int d, t, newnum, turn;  \n    newnum = turn = 0; t=1;  \n    while(n &gt;= t) t *= 10;  \n    t /= 10;  \n    while(t &gt; 0) {  \n        d = n / t;  \n        n = n % t;  \n        t /= 10;  \n        if(turn) newnum = 10 * newnum + d;  \n        turn = (turn + 1) % 2;  \n    }  \n    return newnum;  \n}  \nint main () {  \n    printf(\"%d\", gate(14362));  \n    return 0;  \n}\n</code></pre>\nThe value printed by the given C program is _________. (Answer in integer) <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "46",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460027/gate-cse-2025-set-1-question-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
          "question": "<p>Consider the following pseudo code, where x and y are positive integers.<pre><code> begin\n   q := 0\n    r := x \n    while r &gt;= y  do\n         begin\n               r := r - y\n              q := q + 1\n        end\nend </code></pre> The post condition that needs to be satisfied after the program terminates is <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{\\(r=qx+y \\; \\wedge \\; r \\lt y\\)}</p>",
            "<b>B.</b> <p>{\\(x=qy+r \\; \\wedge \\; r \\lt y\\)}</p>",
            "<b>C.</b> <p>{\\(y=qx+r  \\; \\wedge \\; 0 \\lt r \\lt y\\)}</p>",
            "<b>D.</b> <p>{\\( q+1 \\lt r-y \\; \\wedge  \\; y \\gt 0\\)}</p>"
          ],
          "correct_answer": "<b>B.</b> <p>{\\(x=qy+r \\; \\wedge \\; r \\lt y\\)}</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8276/gate2015-1-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the following pseudo code. What is the total number of multiplications to be performed?<pre><code> D= 2\nfor i = 1 to n do\n   for j = i to n do\n      for k = j + 1 to n do\n           D = D * 3 </code></pre> <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Half of the product of the 3 consecutive integers</p>",
            "<b>B.</b> <p>One-third of the product of the 3 consecutive integers.</p>",
            "<b>C.</b> <p>One-sixth of the product of the 3 consecutive integers</p>",
            "<b>D.</b> <p>None of the above.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>One-sixth of the product of the 3 consecutive integers</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1920/gate2014-1-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the following C function in which size is the number of elements in the array E:<pre><code> int MyX(int *E, unsigned int size)\n{\n  int Y = 0;\n  int Z;\n  int i, j, k; \n    for(i = 0; i &lt; size; i++)\n    Y = Y + E[i];\n  for(i = 0; i &lt; size; i++)\n    for(j = i; j &lt; size; j++)\n    {\n       Z = 0;\n       for(k = i; k &lt;= j; k++)\n           Z= Z + E[k];\n       if (Z &gt; Y)\n            Y = Z;\n   }\nreturn Y;\n}</code></pre>\nThe value returned by the function MyX is the <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>maximum possible sum of elements in any sub-array of array E.</p>",
            "<b>B.</b> <p>maximum element in any sub-array of array E.</p>",
            "<b>C.</b> <p>sum of the maximum elements in all possible sub-arrays of array E.</p>",
            "<b>D.</b> <p>the sum of all the elements in the array E.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>maximum possible sum of elements in any sub-array of array E.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1919/gate2014-1-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the following segment of C-code:<pre><code> int j, n;\n   j = 1;\n   while (j &lt;=n)\n   j=j*2; </code></pre>\nThe number of comparisons made in the execution of the loop for any \\(n \\gt 0\\) is: <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\left \\lceil log_{2}n \\right \\rceil +1\\)</p>",
            "<b>B.</b> <p>n</p>",
            "<b>C.</b> <p>\\(\\left \\lceil log_{2}n \\right \\rceil \\)</p>",
            "<b>D.</b> <p>\\(\\left \\lfloor log_{2}n \\right \\rfloor +1\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\left \\lfloor log_{2}n \\right \\rfloor +1\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/56129/gate2007-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the following C-function in which a[n] and b[m] are two sorted\ninteger arrays and c[n+m] be another integer array.<pre><code>\nvoid xyz (int a[],int b[],int c[]){\n   int i, j, k;\n   i=j=k=0;\n   while((i &lt; n) &amp;&amp; (j &lt; m))\n            if (a[i] &lt; b[j]) c[k++]=a[i++];\n            else c[k++]=b[j++];\n}</code></pre>\nWhich of the following condition(s) hold(s) after the termination of the while loop ?<br><br>\nI.  j\\(\\lt\\)m, k=n+j-1, and a [n-1]\\(\\lt\\)b[j] if i=n <br>\nII.  i\\(\\lt\\)n, k=m+i-1, and b[m-1]\\(\\leq\\)a[i] if j=m <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>only (I)</p>",
            "<b>B.</b> <p>only (II)</p>",
            "<b>C.</b> <p>either (I) or (II) but not both</p>",
            "<b>D.</b> <p>neither (I) nor (II)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>neither (I) nor (II)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1831/gate2006-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider line number 3 of the following C-program.<pre><code>\nint main ( ) { /* Line 1 */\nint I, N; /* Line 2 */\nfro (I =0, I &lt; N, I++); /* Line 3 */\n}</code></pre>\nIdentify the compiler's response about this line while creating the object-module: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>No compilation error</p>",
            "<b>B.</b> <p>Only a lexical error</p>",
            "<b>C.</b> <p>Only syntactic errors</p>",
            "<b>D.</b> <p>Both lexical and syntactic errors</p>"
          ],
          "correct_answer": "<b>A.</b> <p>No compilation error</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/4066/gate2005-61#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>What does the following algorithm approximate? (Assume \\(m \\gt 1, e \\gt 0\\)).<pre><code>x = m;\ny = 1;\nwhile (x - y &gt; e)\n{\n    x = (x + y)/2;\n    y = m/x;\n}\nprint(x); </code></pre> <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>logm</p>",
            "<b>B.</b> <p>\\(m^{2}\\)</p>",
            "<b>C.</b> <p>\\(m^{1/2}\\)</p>",
            "<b>D.</b> <p>\\(m^{1/3}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(m^{1/2}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1039/gate2004-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the following C program<pre><code>main()\n{\n    int x, y, m, n;\n    scanf (\"%d %d\", &amp;x, &amp;y);\n    /* Assume x  &gt;  0 and y  &gt;  0  */\n    m = x;\n    n = y;\n    while (m! = n)\n    {\n        if (m  &gt;  n)\n            m = m - n;\n        else\n            n = n - m;\n    }\n    print f (\"% d\", n);\n} </code></pre>\nThe program computes <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>x + y using repeated subtraction</p>",
            "<b>B.</b> <p>x mod y using repeated subtraction</p>",
            "<b>C.</b> <p>the greatest common divisor of x and y</p>",
            "<b>D.</b> <p>the least common multiple of x and y</p>"
          ],
          "correct_answer": "<b>C.</b> <p>the greatest common divisor of x and y</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1038/gate2004-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
          "question": "<p>Consider the following program fragment for reversing the digits in a given integer to obtain a new\ninteger. Let \\(n=d_{1}d_{2}...d_{m}\\).<pre><code>int n, rev;\nrev = 0;\nwhile (n  &gt;  0)\n{\n   rev = rev*10 + n%10;\n   n = n/10;\n} </code></pre>\nThe loop invariant condition at the end of the \\(i^{th}\\) iteration is: <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(n=d_{1}d_{2}...d_{m-i}\\) and \\(rev=d_{m}d_{m-1}...d_{m-i+1}\\)</p>",
            "<b>B.</b> <p>\\(d_{m-i+1}...d_{m-1}d_{m}\\) or \\(rev=d_{m-i}...d_{2}d_{1}\\)</p>",
            "<b>C.</b> <p>n \\(\\neq\\)rev</p>",
            "<b>D.</b> <p>\\(n=d_{1}d_{2}...d_{m}\\)  or \\(rev=d_{m}...d_{2}d_{1}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(n=d_{1}d_{2}...d_{m-i}\\) and \\(rev=d_{m}d_{m-1}...d_{m-i+1}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1029/gate2004-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 17,
          "question": "<p>Consider the following C function.<pre><code>\nfloat f(float x, int y)\n{\n  float p, s; int i;\n  for (s=1, p=1, i=1; i &lt; y; i ++)\n  {\n    p*= x/i;\n    s+=p;\n  }\n  return s;\n}  </code></pre>\nFor large values of y, the return value of the function f best approximates <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(x^{y}\\)</p>",
            "<b>B.</b> <p>\\(e^{x}\\)</p>",
            "<b>C.</b> <p>ln(1+x)</p>",
            "<b>D.</b> <p>\\(x^{x}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(e^{x}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/892/gate2003-1#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
