window.__examLoadCallback({
  "title": "Asymptotic_Notation - Asymptotic_Notation - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "Asymptotic_Notation",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the equality \\(\\sum_{i=0}^{n}i^{3}=X\\) and the following choices for X  <br>  I.\\( \\Theta (n^{4}) \\)<br>II. \\( \\Theta (n^{5})  \\)<br> III. \\(O (n^{5})  \\)<br> IV. \\( \\Omega (n^{3})\\)  <br>The equality above remains correct if X is replaced by <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only I</p>",
            "<b>B.</b> <p>Only II</p>",
            "<b>C.</b> <p>I or III or IV but not II</p>",
            "<b>D.</b> <p>II or III or IV but not I</p>"
          ],
          "correct_answer": "<b>C.</b> <p>I or III or IV but not II</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8398/gate2015-3-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider the following C function.<pre><code>int fun1(int n){\n    int i,j,k,p,q=0;\n    for (i=1; i &lt; n; ++i) {\n        p=0;\n        for (j=n; j &gt; 1; j=j/2)\n              ++p;\n        for (k=1; k &lt; p; k=k*2) \n             ++q;\n        }\n    return q;\n} </code></pre> Which one of the following most closely approximates the return value of the function fun1? <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(n^{3}\\)</p>",
            "<b>B.</b> <p>\\(n(log n)^{2}\\)</p>",
            "<b>C.</b> <p>\\(n log n\\)</p>",
            "<b>D.</b> <p>\\(n log(log n)\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(n log(log n)\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8263/gate2015-1-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider the following function:<pre><code> int unknown(int n){\n   int i, j, k=0;\n   for (i=n/2; i&lt;=n; i++)\n        for (j=2; j&lt;=n; j=j*2)\n             k = k + n/2;\n    return (k);\n} </code></pre>\nThe return value of the function is <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (n^{2})\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (n^{2}logn)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (n^{3})\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (n^{3}logn)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\Theta (n^{2}logn)\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1542/gate2013-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Let W(n) and A(n) denote respectively, the worst case and average case running time of an\nalgorithm executed on an input of size n. Which of the following is ALWAYS TRUE? <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A(n)=\\(\\Omega\\)(W(n))</p>",
            "<b>B.</b> <p>A(n) =\\(\\Theta\\)(W(n))</p>",
            "<b>C.</b> <p>A(n) =O(W(n))</p>",
            "<b>D.</b> <p>A(n) = o(W(n))</p>"
          ],
          "correct_answer": "<b>C.</b> <p>A(n) =O(W(n))</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50/gate2012-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Which of the given options provides the increasing order of asymptotic\ncomplexityoffunctions f1, f2, f3 and f4?<br><br> \\(f_{1}(n)=2^{n};\\) <br> \\(f_{2}(n)=n^{3/2}; \\) <br> \\( f_{3}(n)=nlog_{2}n; \\) <br> \\( f_{4}(n)=n^{log_{2}n}\\) <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(f_3, f_2, f_4, f_1\\)</p>",
            "<b>B.</b> <p>\\(f_3, f_2, f_1, f_4\\)</p>",
            "<b>C.</b> <p>\\(f_2, f_3, f_1, f_4\\)</p>",
            "<b>D.</b> <p>\\(f_2, f_3, f_4, f_1\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(f_3, f_2, f_4, f_1\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2139/gate2011-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Two alternative packages A and B are available for processing a database having\n\\(10^{k}\\) records. Package A requires 0.0001\\(n^{2}\\) time units and package B requires\n\\(10n \\log _{{10}} n\\) time units to process n records. What is the smallest value of k for\nwhich package B will be preferred over A? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>12</p>",
            "<b>B.</b> <p>10</p>",
            "<b>C.</b> <p>6</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>C.</b> <p>6</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2185/gate2010-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Arrange the following functions in increasing asymptotic order:<br>\na. \\(n^{1/3}\\)<br>\nb. \\(e^n\\)<br>\nc. \\(n^{7/4}\\)  <br>\nd. \\(n \\log^9n\\)<br>\ne. \\(1.0000001^n\\)<br> <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>a, d, c, e, b</p>",
            "<b>B.</b> <p>d, a, c, e, b</p>",
            "<b>C.</b> <p>a, c, d, e, b</p>",
            "<b>D.</b> <p>a, c, d, b, e</p>"
          ],
          "correct_answer": "<b>A.</b> <p>a, d, c, e, b</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3270/gate2008-it-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the following C functions:<pre><code>int f1(int n)\n{\n  if(n == 0 || n == 1)\n    return n;\n  else\n    return (2*f1(n-1) + 3*f1(n-2));\n}\n \nint f2(int n)\n{\n  int i;\n  int X[N], Y[N], Z[N] ;\n  X[0] = Y[0] = Z[0] = 0;\n  X[1] = 1; Y[1] = 2; Z[1] = 3;\n  for(i = 2; i &lt;= n; i++)\n  {\n    X[i] = Y[i-1] + Z[i-2];\n    Y[i] = 2*X[i];\n    Z[i] = 3*X[i];\n  }\n  return X[n] ;\n}</code></pre>   The running time of f1(n) and f2(n) are <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (n) \\; and \\; \\Theta (n)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (2^{n}) \\; and \\; \\Theta (n)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (n) \\; and \\;  \\Theta (2^{n})\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (2^{n}) \\; and \\; \\Theta (2^{n})\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\Theta (2^{n}) \\; and \\; \\Theta (n)\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/495/gate2008-74#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the following functions:<br> \\(f(n)=2^{n} \\)<br> \\( g(n)=n!  \\)<br> \\( h(n)=n^{log n}\\)<br><br>\nWhich of the following statements about the asymptotic behaviour of f(n), g(n),\nand h(n) is true? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>f (n) = O(g(n)); g(n) = O(h(n))</p>",
            "<b>B.</b> <p>f (n) = \\(\\Omega\\)(g(n)); g(n) = O(h(n))</p>",
            "<b>C.</b> <p>g(n) = O(f (n)); h(n) = O(f (n))</p>",
            "<b>D.</b> <p>h(n) = O(f (n)); g(n) = \\(\\Omega\\)(f (n))</p>"
          ],
          "correct_answer": "<b>D.</b> <p>h(n) = O(f (n)); g(n) = \\(\\Omega\\)(f (n))</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/450/gate2008-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>The time taken by binary search algorithm to search a key in a sorted array of n elements is <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O (\\log_2 \\: n)\\)</p>",
            "<b>B.</b> <p>\\(O  (n)\\)</p>",
            "<b>C.</b> <p>\\(O  (n \\log_2 \\: n)\\)</p>",
            "<b>D.</b> <p>\\(O  (n^2)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(O (\\log_2 \\: n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49626/isro2007-59\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Exponentiation is a heavily used operation in public key cryptography. Which of the following options is the tightest upper bound on the number of multiplications required to compute \\(b^n \\bmod{m}, 0 \\leq b, n \\leq m\\) ? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O(\\log n)\\)</p>",
            "<b>B.</b> <p>\\(O(\\sqrt n)\\)</p>",
            "<b>C.</b> <p>\\(O\\Biggl (\\frac{n}{\\log n} \\Biggr )\\)</p>",
            "<b>D.</b> <p>\\(O(n)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(O(\\log n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3450/gate2007-it-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the following C code segment:<pre><code> int IsPrime(n)\n{\n  int i,n;\n  for(i=2;i&lt;=sqrt(n);i++)\n     if(n%i == 0)\n      {printf(\"Not Primen\"); return 0;}\n  return 1;\n} </code></pre>\nLet T(n)denote the number of times the for loop is executed by the program on\ninput n. Which of the following is TRUE? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T(n)=O(\\sqrt{n}) \\; and \\; T(n)=\\Omega (\\sqrt{n})\\)</p>",
            "<b>B.</b> <p>\\(T(n)=O(n)  \\; and \\;  T(n)=\\Omega (\\sqrt{n})\\)</p>",
            "<b>C.</b> <p>\\(T(n)=O(\\sqrt{n})  \\; and \\;  T(n)=\\Omega (1)\\)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(T(n)=O(\\sqrt{n})  \\; and \\;  T(n)=\\Omega (1)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1249/gate2007-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>What is the Asymptotic Notation of the following recursive function:<pre><code> int DoSomething (int n) \n{\n  if (n &lt;= 2)\n    return 1;\n  else \n    return (DoSomething (floor(sqrt(n))) + n);\n}</code></pre> <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (n^{2})\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (n log_{2} n)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (log_{2} n)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (log_{2} log_{2}n)\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\Theta (log_{2} log_{2}n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1243/gate2007-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>In the following C function, let n\\(\\geq\\)m.<pre><code>int gcd(n,m)\n{\n  if (n%m ==0) return m;  \n  n = n%m;\n  return gcd(m,n);\n}</code></pre>\nHow many recursive calls are made by this function? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (logn)\\)</p>",
            "<b>B.</b> <p>\\(\\Omega (n)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (log logn)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (\\sqrt{n})\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\Theta (logn)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1242/gate2007-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the following C-program fragment in which i, j,and n are integer variables.<pre><code>for (i = n, j = 0; i &gt; 0; i/=2, j += i);</code></pre>\nLet Val(j) denote the value stored in the variable j after termination of the for\nloop. Which one of the following is true? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>val(j)=\\(\\Theta\\)(logn)</p>",
            "<b>B.</b> <p>val(j)=\\(\\Theta\\)(sqrt(n))</p>",
            "<b>C.</b> <p>val(j)=\\(\\Theta\\)(n)</p>",
            "<b>D.</b> <p>val(j)=\\(\\Theta\\)(nlogn)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>val(j)=\\(\\Theta\\)(n)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/976/gate2006-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
