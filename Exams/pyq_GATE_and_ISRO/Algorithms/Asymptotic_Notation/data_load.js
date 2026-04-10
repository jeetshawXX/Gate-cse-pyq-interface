window.__examLoadCallback({
  "title": "Algorithms - Asymptotic_Notation",
  "duration": 127,
  "sections": [
    {
      "name": "Asymptotic_Notation",
      "questions": [
        {
          "id": 1,
          "question": "<p>Given an integer array of size \\(N\\), we want to check if the array is sorted (in either\nascending or descending order). An algorithm solves this problem by making a\nsingle pass through the array and comparing each element of the array only with its\nadjacent elements. The worst-case time complexity of this algorithm is <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>both \\(\\mathrm{O}(N) \\) and \\(\\Omega(N) \\)</p>",
            "<b>B.</b> <p>\\(\\mathrm{O}(N) \\) but not \\(\\Omega(N) \\)</p>",
            "<b>C.</b> <p>\\(\\Omega(N) \\) but not \\(\\mathrm{O}(N) \\)</p>",
            "<b>D.</b> <p>neither \\(\\mathrm{O}(N) \\) nor \\(\\Omega(N) \\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>both \\(\\mathrm{O}(N) \\) and \\(\\Omega(N) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422835/gate-cse-2024-set-1-question-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Consider functions Function 1 and Function 2 expressed in pseudocode as\nfollows:<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Asymptotic_Notation\\q44_544299d1.jpg\"><br>Let \\(f_1(n)\\) and \\(f_2(n)\\) denote the number of times the statement \\(\"x = x + 1\"\\) is\nexecuted in Function 1 and Function 2, respectively.<br>\nWhich of the following statements is/are TRUE? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\( f_1(n)\\in \\Theta (f_2(n)) \\)</p>",
            "<b>B.</b> <p>\\( f_1(n)\\in o (f_2(n)) \\)</p>",
            "<b>C.</b> <p>\\( f_1(n)\\in \\omega  (f_2(n)) \\)</p>",
            "<b>D.</b> <p>\\( f_1(n)\\in O &nbsp;(n) \\)</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>\\( f_1(n)\\in \\Theta (f_2(n)) \\)</p>",
            "<b>D.</b> <p>\\( f_1(n)\\in O &nbsp;(n) \\)</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399267/gate-cse-2023-question-44#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Let \\(f\\) and \\(g\\) be functions of natural numbers given by \\(f(n)=n\\) and \\(g(n)=n^2\\).<br>\nWhich of the following statements is/are TRUE? <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(f \\in O(g)\\)</p>",
            "<b>B.</b> <p>\\(f \\in \\Omega (g)\\)</p>",
            "<b>C.</b> <p>\\(f \\in o(g)\\)</p>",
            "<b>D.</b> <p>\\(f \\in \\Theta  (g)\\)</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>\\(f \\in O(g)\\)</p>",
            "<b>C.</b> <p>\\(f \\in o(g)\\)</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399292/gate-cse-2023-question-19#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Which one of the following statements is TRUE for all positive functions \\(f(n)\\)? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(f(n^2)=\\theta (f(n)^2)\\), where \\(f(n)\\) is a polynomial</p>",
            "<b>B.</b> <p>\\(f(n^2)=o (f(n)^2)\\)</p>",
            "<b>C.</b> <p>\\(f(n^2)=O (f(n)^2)\\), where \\(f(n)\\) is an exponential function</p>",
            "<b>D.</b> <p>\\(f(n^2)=\\Omega  (f(n)^2)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(f(n^2)=\\theta (f(n)^2)\\), where \\(f(n)\\) is a polynomial</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/371935/Gate-cse-2022-question-1#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following three functions.\n<br><br>\n\\(f_1=10^n\\; f_2=n^{\\log n}\\;f_3=n^{\\sqrt {n}}\\)<br>\n<br>Which one of the following options arranges the functions in the increasing order of asymptotic growth rate? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(f_3, f_2, f_1\\)</p>",
            "<b>B.</b> <p>\\(f_2, f_1, f_3\\)</p>",
            "<b>C.</b> <p>\\(f_1, f_2, f_3\\)</p>",
            "<b>D.</b> <p>\\(f_2, f_3, f_1\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(f_2, f_3, f_1\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357449/gate-cse-2021-set-1-question-3#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>What is the complexity of the following code?<br><pre><code> sum=0;\n    for(i=1;i&lt;=n;i*=2)\n         for(j=1;j&lt;=n;j++)\n            sum++;</code></pre>Which of the following is not a valid string? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O\\left(n^{2}\\right)\\)</p>",
            "<b>B.</b> <p>\\(O(n \\log n)\\)</p>",
            "<b>C.</b> <p>\\(O(n)\\)</p>",
            "<b>D.</b> <p>\\(O(n \\log n \\log n)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(O(n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "NOTE: Question is excluded from the evaluation due to ambiguity.<br><a href=\"https://gateoverflow.in/331364/isro2020-36\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>There are n unsorted arrays: \\(A_1,A_2,...,A_n\\). Assume that n is odd. Each of \\(A_1,A_2,...,A_n\\) contains n distinct elements. There are no common elements between any two arrays. The worst-case Asymptotic Notation of computing the median of the medians of \\(A_1,A_2,...,A_n\\) is ________ . <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O(n)\\)</p>",
            "<b>B.</b> <p>\\(O(n \\log n)\\)</p>",
            "<b>C.</b> <p>\\(O(n^2)\\)</p>",
            "<b>D.</b> <p>\\(\\Omega(n^2 \\log n)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(O(n^2)\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/302811/gate2019-cs-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the following C function<pre><code>\nint fun (int n) {\n  int i, j;\n  for (i = 1; i &lt; = n; i++) {\n      for (j = 1 ; j &lt; n ; j+=i) {\n          printf (\"%d %d , i, j ) ;\n          }\n     }\n}</code></pre>\nAsymptotic Notation of fun in terms of \\(\\theta\\) notation is <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\theta (n\\sqrt{n})\\)</p>",
            "<b>B.</b> <p>\\(\\theta (n^{2})\\)</p>",
            "<b>C.</b> <p>\\(\\theta (n logn)\\)</p>",
            "<b>D.</b> <p>\\(\\theta (n^{2} logn)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\theta (n logn)\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118283/gate2017-2-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Match the algorithms with their time complexities: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Asymptotic_Notation\\q16_a76213c5.jpg\"> <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P-(iii),Q-(iv), R-(i), S-(ii)</p>",
            "<b>B.</b> <p>P-(iv),Q-(iii), R-(i), S-(ii)</p>",
            "<b>C.</b> <p>P-(iii),Q-(iv), R-(ii), S-(i)</p>",
            "<b>D.</b> <p>P-(iv),Q-(iii), R-(ii), S-(i)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P-(iii),Q-(iv), R-(ii), S-(i)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118156/gate-cse-2017-set-2-question-03#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the following functions from positive integers to real numbers:<br> <br>\\(10,\\sqrt{n},n, log_{2}n,\\frac{100}{n}\\).<br><br> The CORRECT arrangement of the above functions in increasing order of asymptotic complexity is: <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(log_{2}n,\\frac{100}{n}, 10,\\sqrt{n},n \\)</p>",
            "<b>B.</b> <p>\\(\\frac{100}{n}, 10,log_{2}n, \\sqrt{n}, n \\)</p>",
            "<b>C.</b> <p>\\(10, \\frac{100}{n},  \\sqrt{n}, log_{2}n, n \\)</p>",
            "<b>D.</b> <p>\\(\\frac{100}{n}, log_{2}n, 10,  \\sqrt{n}, n \\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\frac{100}{n}, 10,log_{2}n, \\sqrt{n}, n \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118703/gate2017-1-4#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>In an adjacency list representation of an undirected simple graph G = (V,E), each edge (u,v) has two adjacency list entries: [v] in the adjacency list of u, and [u] in the adjacency list of v. These are called twins of each other. A twin pointer is a pointer from an adjacency list entry to its twin. If |E|=m and |V|=n, and the memory size is not a constraint, what is the Asymptotic Notation of the most efficient algorithm to set the twin pointer in each entry in each adjacency list? <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (n^{2})\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (n+m)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (m^{2})\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (n^{4})\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\Theta (n+m)\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39620/gate2016-2-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>The given diagram shows the flowchart for a recursive function A(n). Assume that all statements, except for the recursive calls,have O(1) Asymptotic Notation. If the worst case Asymptotic Notation of this functionis \\(O(n^{\\alpha })\\), then the least possible value(accurate upto two decimal positions) of \\(\\alpha\\) is .<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Asymptotic_Notation\\q39_8d9d79a9.jpg\"> <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2.2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39581/gate2016-2-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider a carry lookahead adder for adding two n-bit integers,built using gates of fan-in at most two. The time to perform addition using this adder is <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (1)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (log(n))\\)</p>",
            "<b>C.</b> <p>\\(\\Theta \\sqrt{n}\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (n)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\Theta (log(n))\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39688/gate2016-1-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>The time complexity of the following C function is (assume n&gt;0)<br><pre><code> int recursive (int n) {\n    if(n == 1)\n        return (1);\n    else\n        return (recursive (n-1) + recursive (n-1));\n}</code></pre> <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O(n)</p>",
            "<b>B.</b> <p>\\(O(n \\log n)\\)</p>",
            "<b>C.</b> <p>\\(O\\left(n^{2}\\right)\\)</p>",
            "<b>D.</b> <p>\\(O\\left(2^{n}\\right)\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(O\\left(2^{n}\\right)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1077/gate2004-83-isro2015-40\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Let \\(f(n)=n\\) and \\(g(n)=n^{1+sin \\; n}\\) where n is a positive integer. Which of the following statements is/are correct? <br>I.   \\(f(n)=O(g(n)) \\)<br> II.   \\(f(n)= \\Omega (g(n))\\) <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only I</p>",
            "<b>B.</b> <p>Only II</p>",
            "<b>C.</b> <p>Both I and II</p>",
            "<b>D.</b> <p>Neither I nor II</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Neither I nor II</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8501/gate2015-3-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 16,
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
          "id": 17,
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
          "id": 18,
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
          "id": 19,
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
          "id": 20,
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
          "id": 21,
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
          "id": 22,
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
          "id": 23,
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
          "id": 24,
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
          "id": 25,
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
          "id": 26,
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
          "id": 27,
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
          "id": 28,
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
          "id": 29,
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
          "id": 30,
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
        },
        {
          "id": 31,
          "question": "<p>Consider the following C-function:<pre><code> double foo (int n)\n{\n    int i;\n    double sum;\n    if (n = = 0) return 1.0;\n    else\n    {\n        sum = 0.0;\n        for (i = 0; i &lt; n; i++)\n            sum += foo (i);\n        return sum;\n    }\n} </code></pre>Suppose we modify the above function foo() and store the values of foo (i), \\(0\\leq i \\lt n\\), as and when they are computed. With this modification, the time complexity for function foo() is significantly reduced.  The space complexity of the modified function would be: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O(1)</p>",
            "<b>B.</b> <p>O(n)</p>",
            "<b>C.</b> <p>O(n!)</p>",
            "<b>D.</b> <p>O(\\(n^{n}\\))</p>"
          ],
          "correct_answer": "<b>B.</b> <p>O(n)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/82146/gate2005-82#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 32,
          "question": "<p>Consider the following C-function:<pre><code> double foo (int n)\n{\n    int i;\n    double sum;\n    if (n = = 0) return 1.0;\n    else\n    {\n        sum = 0.0;\n        for (i = 0; i &lt; n; i++)\n            sum += foo (i);\n        return sum;\n    }\n} </code></pre>  The Asymptotic Notation of space complexity of the above function is: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O(1)</p>",
            "<b>B.</b> <p>O(n)</p>",
            "<b>C.</b> <p>O(n!)</p>",
            "<b>D.</b> <p>O(\\(n^{n}\\))</p>"
          ],
          "correct_answer": "<b>B.</b> <p>O(n)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1403/gate2005-81#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 33,
          "question": "<p>The Asymptotic Notation of computing the transitive closure of a binary relation on a set of n elements is known to be: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O(n)</p>",
            "<b>B.</b> <p>O(n log n)</p>",
            "<b>C.</b> <p>O(\\(n^{3/2}\\))</p>",
            "<b>D.</b> <p>O(\\(n^{3}\\))</p>"
          ],
          "correct_answer": "<b>D.</b> <p>O(\\(n^{3}\\))</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1349/gate2005-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 34,
          "question": "<p>Let f(n), g(n) and h(n) be functions defined for positive integers such that <br>\n\\(f(n) = O(g(n)), \\; g(n) \\neq O(f(n)), \\; g(n) = O(h(n)), \\text{ and  } h(n) = O(g(n)).\\)<br>\nWhich one of the following statements is FALSE? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(f(n) + g(n) = O(h(n) + h(n))\\)</p>",
            "<b>B.</b> <p>\\(f(n) = O(h(n))\\)</p>",
            "<b>C.</b> <p>\\(h(n) \\neq O(f(n))\\)</p>",
            "<b>D.</b> <p>\\(f(n)h(n) \\neq O(g(n)h(n))\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(f(n)h(n) \\neq O(g(n)h(n))\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3698/gate2004-it-55\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 35,
          "question": "<p>The Asymptotic Notation of the following C function is (assume n \\(\\gt\\) 0)<pre><code>int recursive (int n) {\n   if (n == 1)\n      return (1);\n   else\n      return (recursive (n - 1) + recursive (n - 1));\n} </code></pre> <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O(\\((n^{2})\\))</p>",
            "<b>B.</b> <p>O(nlog n)</p>",
            "<b>C.</b> <p>O(n)</p>",
            "<b>D.</b> <p>O(\\((2^{n})\\))</p>"
          ],
          "correct_answer": "<b>D.</b> <p>O(\\((2^{n})\\))</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1077/gate2004-83#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 36,
          "question": "<p>Let A[1,..., n] be an array storing a bit (1 or 0) at each location, and f(m) is a function whose Asymptotic Notation is \\(\\theta\\)(m). Consider the following program fragment written in a C like language:<pre><code> counter = 0;\nfor (i = 1; i &lt; = n; i++)\n{ \n      if (A[i] == 1) \n         counter++;\n      else {\n         f(counter); \n         counter = 0;\n      }\n}</code></pre>  The complexity of this program fragment is <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Omega (n^{2})\\)</p>",
            "<b>B.</b> <p>\\(\\Omega (n log n)\\) and \\(O (n^{2})\\)</p>",
            "<b>C.</b> <p>\\(\\theta\\)(n)</p>",
            "<b>D.</b> <p>o(n)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\theta\\)(n)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1076/gate2004-82#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 37,
          "question": "<p>The cube root of a natural number n is defined as the largest natural number m\nsuch that \\(m^{3}\\leq n\\). The complexity of computing the cube root of n(n is represented in binary notation) is <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O(n) but not O(\\(n^{0.5}\\))</p>",
            "<b>B.</b> <p>O(\\(n^{0.5}\\)) but not O(\\((log \\;n)^{k}\\)) for any constant k \\(&gt;\\) 0</p>",
            "<b>C.</b> <p>O(\\((log \\;n)^{k}\\)) for some constant k \\(&gt;\\) 0, but not O(\\((log \\;log \\; n)^{m}\\)) for any constant\nm \\(&gt;\\) 0</p>",
            "<b>D.</b> <p>O(\\((log \\;log \\; n)^{k}\\)) for some constant k \\(&gt;\\) 0.5, but not O(\\((log \\;log \\; n)^{0.5}\\))</p>"
          ],
          "correct_answer": "<b>C.</b> <p>O(\\((log \\;n)^{k}\\)) for some constant k \\(&gt;\\) 0, but not O(\\((log \\;log \\; n)^{m}\\)) for any constant\nm \\(&gt;\\) 0</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/258/gate2003-66#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 38,
          "question": "<p>Consider the following three claims <br>\n1. \\((n+k)^{m}=\\ominus (n^{m})\\) , where k and m are constants <br> 2. \\( 2^{n+1}=O(2^{n})\\) <br> 3. \\( 2^{2n+1}=O(2^{n})\\) <br>Which of these claims are correct? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1 and 2</p>",
            "<b>B.</b> <p>1 and 3</p>",
            "<b>C.</b> <p>2 and 3</p>",
            "<b>D.</b> <p>1, 2 and 3</p>"
          ],
          "correct_answer": "<b>A.</b> <p>1 and 2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/910/gate2003-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 39,
          "question": "<p>Consider the following functions<br>\n\\(f(n) = 3n^{\\sqrt{n}}\\)<br>\n\\(g(n) = 2^{\\sqrt{n}{\\log_{2}n}}\\)<br>\n\\(h(n) = n!\\)<br>\nWhich of the following is true? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>h(n) is O(f(n))</p>",
            "<b>B.</b> <p>h(n) is O(g(n))</p>",
            "<b>C.</b> <p>g(n) is not O(f(n))</p>",
            "<b>D.</b> <p>f(n) is O(g(n))</p>"
          ],
          "correct_answer": "<b>D.</b> <p>f(n) is O(g(n))</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/664/gate2000-2-17\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 40,
          "question": "<p>Let S be a sorted array of n integers. Let T(n) denote the time taken for the most efficient algorithm to determined if there are two elements with sum less than 1000 in S. Which of the following statement is true? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T (n) \\text{ is }O(1)\\)</p>",
            "<b>B.</b> <p>\\(n \\leq T(n) \\leq n \\log_2 n\\)</p>",
            "<b>C.</b> <p>\\(n \\log_2 n \\leq T(n) \\lt \\frac{n}{2}\\)</p>",
            "<b>D.</b> <p>\\(T(n) = \\left (\\frac{n}{2} \\right)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(T (n) \\text{ is }O(1)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/638/gate2000-1-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 41,
          "question": "<p>If \\(T_1 = O(1)\\), give the correct matching for the following pairs:<br>\n\\(\\begin{array}{l|l}\\hline \\text{(M) $T_n = T_{n-1} + n$} &amp; \\text{(U) $T_n = O(n)$} \\\\\\hline \\text{(N) $T_n = T_{n/2} + n$} &amp; \\text{(V) $T_n = O(n \\log n)$} \\\\\\hline \\text{(O) $T_n = T_{n/2} + n \\log n$} &amp; \\text{(W) $T_n = O(n^2)$} \\\\\\hline \\text{(P) $T_n = T_{n-1} + \\log n$} &amp; \\text{(X) $T_n = O(\\log^2 n)$} \\\\\\hline \\end{array}\\) <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\text{M-W, N-V, O-U, P-X}\\)</p>",
            "<b>B.</b> <p>\\(\\text{M-W, N-U, O-X, P-V}\\)</p>",
            "<b>C.</b> <p>\\(\\text{M-V, N-W, O-X, P-U}\\)</p>",
            "<b>D.</b> <p>\\(\\text{M-W, N-U, O-V, P-V}\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\text{M-W, N-U, O-V, P-V}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1498/gate1999-2-21\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 42,
          "question": "<p>Let T(n) be the function defined by<br> \\(T(1) =1, \\: T(n) = 2T (\\lfloor \\frac{n}{2} \\rfloor ) + \\sqrt{n} \\text{ for } n \\geq 2\\).<br>Which of the following statements is true? <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T(n) = O \\sqrt{n}\\)</p>",
            "<b>B.</b> <p>T(n)=O(n)</p>",
            "<b>C.</b> <p>\\(T(n) = O (\\log n)\\)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>T(n)=O(n)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2247/gate1997-4-6\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 43,
          "question": "<p>Which of the following is false? <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(100n \\log n=O(\\frac{n\\log n}{100})\\)</p>",
            "<b>B.</b> <p>\\(\\sqrt{\\log n} = O(\\log\\log n)\\)</p>",
            "<b>C.</b> <p>\\(\\text{If  } \\; 0 \\lt x \\lt y \\text{ then } n^x = O\\left(n^y\\right)\\)</p>",
            "<b>D.</b> <p>\\(2^n \\neq O\\left(nk\\right)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\sqrt{\\log n} = O(\\log\\log n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2715/gate1996-1-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 44,
          "question": "<p>Consider the following two functions: <br>\\(g_1(n) = \\begin{cases} n^3 \\text{ for } 0 \\leq n \\leq 10,000 \\\\ n^2 \\text{ for } n \\geq 10,000 \\end{cases}\\)<br>\\(g_2(n) = \\begin{cases} n \\text{ for } 0 \\leq n \\leq 100 \\\\ n^3 \\text{ for } n &gt; 100 \\end{cases}\\)<br>Which of the following is true? <br><br><strong>(GATE CSE 1994)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(g_1(n) \\text{ is } O(g_2(n))\\)</p>",
            "<b>B.</b> <p>\\(g_1(n) \\text{ is } O(n^3)\\)</p>",
            "<b>C.</b> <p>\\(g_2(n) \\text{ is } O(g_1(n))\\)</p>",
            "<b>D.</b> <p>\\(g_2(n) \\text{ is } O(n)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(g_1(n) \\text{ is } O(g_2(n))\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2466/gate1994-1-23\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 45,
          "question": "<p>\\( \\sum_{1\\leq k\\leq n} O(n)\\),  where \\(O(n)\\) stands for order \\(n\\) is: <br><br><strong>(GATE CSE 1993)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O(n)</p>",
            "<b>B.</b> <p>\\(O(n^2)\\)</p>",
            "<b>C.</b> <p>\\(O(n^3)\\)</p>",
            "<b>D.</b> <p>\\(O(3n^2)\\)</p>",
            "<b>E.</b> <p>\\(O(1.5n^2)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(O(n^2)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2305/gate1993-8-7\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 46,
          "question": "<p>Let  \\(f (n) =n^{2} logn\\)  and \\(g(n) = n(logn)^{10}\\) be two positive functions of n. Which of the following statements is correct ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>f (n) = O(g(n))and g(n) \\(\\neq\\) O(f (n))</p>",
            "<b>B.</b> <p>g(n) = O(f (n)) and f (n) \\(\\neq\\) O(g(n))</p>",
            "<b>C.</b> <p>f (n) \\(\\neq\\) O(g(n)) and g(n) \\(\\neq\\) O(f (n))</p>",
            "<b>D.</b> <p>f (n) = O(g(n))and g(n) = O(f (n))</p>"
          ],
          "correct_answer": "<b>B.</b> <p>g(n) = O(f (n)) and f (n) \\(\\neq\\) O(g(n))</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/709/gate2001-1-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
