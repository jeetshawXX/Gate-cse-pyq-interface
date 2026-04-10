window.__examLoadCallback({
  "title": "Discrete_Mathematics - Discrete_Mathematics - Slot 21",
  "duration": 42,
  "sections": [
    {
      "name": "Discrete_Mathematics",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the binary relation: <br><br>\nS = {(x, y)|y = x + 1 and x, y \\(\\in\\) {0, 1, 2,...}} <br><br>\nThe reflexive transitive closure of S is <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{(x, y)|y \\(\\gt\\) x and x, y \\(\\in\\) {0, 1, 2,...}}</p>",
            "<b>B.</b> <p>{(x, y)|y \\(\\geq\\) x and x, y \\(\\in\\) {0, 1, 2,...}}</p>",
            "<b>C.</b> <p>{(x, y)|y \\(\\lt\\) x and x, y \\(\\in\\) {0, 1, 2,...}}</p>",
            "<b>D.</b> <p>{(x, y)|y \\(\\leq\\) x and x, y \\(\\in\\) {0, 1, 2,...}}</p>"
          ],
          "correct_answer": "<b>B.</b> <p>{(x, y)|y \\(\\geq\\) x and x, y \\(\\in\\) {0, 1, 2,...}}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1021/gate2004-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Identify the correct translation into logical notation of the following assertion. <br><br> Some boys in the class\nare taller than all the girls <br><br>\nNote: taller (x, y) is true if x is taller than y. <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\((\\exists x)(boy(x)\\rightarrow \\forall (y)(girl(y)\\wedge taller(x,y)))\\)</p>",
            "<b>B.</b> <p>\\((\\exists x)(boy(x)\\wedge \\forall (y)(girl(y)\\wedge taller(x,y)))\\)</p>",
            "<b>C.</b> <p>\\((\\exists x)(boy(x)\\rightarrow \\forall (y)(girl(y)\\rightarrow taller(x,y)))\\)</p>",
            "<b>D.</b> <p>\\((\\exists x)(boy(x)\\wedge \\forall (y)(girl(y)\\rightarrow taller(x,y)))\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\((\\exists x)(boy(x)\\wedge \\forall (y)(girl(y)\\rightarrow taller(x,y)))\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1020/gate2004-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>the following resolution rule is used in logic programming: <br>\nDerive clause(P \\(\\vee\\) Q) from clauses (P \\(\\vee\\) R),(Q \\(\\vee \\neg\\) JR) <br>\nWhich of the following statements related to this rule is FASLE? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(((P \\vee R) \\wedge (Q \\vee \\neg R)) \\Rightarrow (P \\vee Q)\\)\nis logically valid</p>",
            "<b>B.</b> <p>\\((P \\vee Q) \\Rightarrow ((P \\vee R)\\wedge (Q \\vee \\neg R))\\)\nis logically valid</p>",
            "<b>C.</b> <p>\\((P \\vee Q)\\) is satisfiable if and only if \\((P \\vee R)\\wedge (Q \\vee \\neg R)\\)\nis satisfiable</p>",
            "<b>D.</b> <p>\\((P \\vee Q)\\Rightarrow\\) FALSE if and only if both P and Q are unsatisfiable</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\((P \\vee Q) \\Rightarrow ((P \\vee R)\\wedge (Q \\vee \\neg R))\\)\nis logically valid</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/959/gate2003-72#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the following logic program P <br>\n\\(A(x)\\leftarrow B(x,y),C(y) \\leftarrow B(x,x)\\) <br>\nWhich of the following first order sentences is equivalent to P? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Discrete_Mathematics\\q71_1baeed35.jpg\"> <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>C.</b> <p>C</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/958/gate2003-71#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Let G = (V,E) be a direction graph with n vertices. A path from \\(v_{i}\\)\nto \\(v_{i}\\) in G is\nsequence of vertices (\\(v_{i}\\),\\(v_{i+1}\\),....., \\(v_{j}\\)) such that (\\(v_{k}\\),\\(v_{k+1}\\))\\(\\in\\)E for all k in i through\nj - 1. A simple path is a path in which no vertex appears more than once. <br>\nLet A be an n x n array initialized as follows. <br> \\(A[j,k]=\\left\\{\\begin{matrix} 1 &amp; if (j,k) \\in E \\\\ 0&amp;  otherwise \\end{matrix}\\right.\\)<br> Consider the following algorithm<pre><code> for i = 1 to n\n   for j = 1 to n\n      for k = 1 to n\n         A [j , k] = max (A[j, k] (A[j, i] + A [i, k]); </code></pre>\nWhich of the following statements is necessarily true for all j and k after terminal\nof the above algorithm? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(A[j,k]\\leq n\\)</p>",
            "<b>B.</b> <p>If \\(A[j,k]\\geq n- 1\\), then G has a Haniltonian cycle</p>",
            "<b>C.</b> <p>If there exists a path from j to k,A[j,k] contains the longest path lens from\nj to k</p>",
            "<b>D.</b> <p>If there exists a path from j to k , every simple path from j to k contain\nmost A[j,k] edges</p>"
          ],
          "correct_answer": "<b>D.</b> <p>If there exists a path from j to k , every simple path from j to k contain\nmost A[j,k] edges</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/957/gate2003-70#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>In a permutation \\(a_1.....a_n\\) of n distinct integers, an inversion is a pair  \\((a_i, a_j) \\) such that \\(i \\lt j\\) and \\(a_i \\gt a_j\\). <br><br>If all permutation are equally likely, what is the expected number of inversions in\na randomly chosen permutation of 1.....n? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n(n - 1)/2</p>",
            "<b>B.</b> <p>n(n - 1)/4</p>",
            "<b>C.</b> <p>n(n + 1)/4</p>",
            "<b>D.</b> <p>\\(2n[log_{2}n]\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>n(n - 1)/4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/949/gate2003-61#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>A program consists of two modules executed sequentially. Let f1(t) and f2(t)\nrespectively denote the probability density functions of time taken to execute the\ntwo modules. The probability density function of the overall time taken to execute\nthe program is given by <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(f_{1}(t)+f_{2}(t)\\)</p>",
            "<b>B.</b> <p>\\(\\int_{0}^{t}f_{1}(x)f_{2}(x)dx\\)</p>",
            "<b>C.</b> <p>\\(\\int_{0}^{t}f_{1}(x)f_{2}(t-x)dx\\)</p>",
            "<b>D.</b> <p>max{\\(f_{1}(t),f_{2}(t)\\)\n}</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\int_{0}^{t}f_{1}(x)f_{2}(t-x)dx\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/948/gate2003-60#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>A graph G = (V, E) satisfies |E| \\(\\leq\\)3|V|-6. The min-degree of G is defined as \\(\\underset{v \\in V}{min}\\{degree(v)\\}\\).<br> Therefore, min-degree of G cannot be <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>4</p>",
            "<b>C.</b> <p>5</p>",
            "<b>D.</b> <p>6</p>"
          ],
          "correct_answer": "<b>D.</b> <p>6</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/931/gate2003-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Let \\(\\Sigma\\) = (a, b, c, d, e) be an alphabet. We define an encoding scheme as follows : g(a) = 3, g(b) = 5, g(c) = 7, g(d) = 9, g(e) = 11. <br> Let \\(p_{i}\\) denote the i-th prime number (\\(p_{i}\\)=2).  <br> For a non-empty string \\(s=a_{1}...a_{n}\\), where each \\(a_{i} \\in \\Sigma\\), define \\(f(i)=\\prod_{i=1}^{n}{P_{i}}^{g(a_{i})}\\). <br>\nFor a non-empty sequence \\(&lt; s_{j},...,s_{n} &gt;\\) of strings from \\(\\Sigma^{+}\\), <br>\ndefine \\(h(<s_{i}...s_{n}>)=\\prod_{i=1}^{n}{P_{i}}^{f(s_{i})}\\) <br>\nWhich of the following numbers is the encoding, h, of a non-empty sequence of\nstrings?</s_{i}...s_{n}> <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(2^{7}3^{7}5^{7}\\)</p>",
            "<b>B.</b> <p>\\(2^{8}3^{8}5^{8}\\)</p>",
            "<b>C.</b> <p>\\(2^{9}3^{9}5^{9}\\)</p>",
            "<b>D.</b> <p>\\(2^{10}5^{10}7^{10}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(2^{8}3^{8}5^{8}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/930/gate2003-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Let : A\\(\\rightarrow\\)B be injective (one-to-one) function. <br><br>Define \\(g:2^{A}\\rightarrow 2^{B}\\) as: <br><br>\ng(C) = {f (x)| x \\(\\in\\)C), for all subsets C of A. <br><br>\nDefine\\(g:2^{B}\\rightarrow 2^{A}\\) as : <br><br> h(D) = {x | x \\(\\in\\) A, f (x) \\(\\in\\) D}, for all subsets D of B. <br><br>\nWhich of the following statements is always true? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>g(h(D)) \\(\\subseteq\\)\n3D</p>",
            "<b>B.</b> <p>g(h(D)) \\(\\supseteq\\) 4D</p>",
            "<b>C.</b> <p>g(h(D)) \\(\\cap D=\\phi\\)</p>",
            "<b>D.</b> <p>g(h(D)) \\(\\cap (B-D)\\neq  \\phi\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>g(h(D)) \\(\\subseteq\\)\n3D</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/927/gate2003-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>How many perfect matching are there in a complete graph of 6 vertices? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>15</p>",
            "<b>B.</b> <p>24</p>",
            "<b>C.</b> <p>30</p>",
            "<b>D.</b> <p>60</p>"
          ],
          "correct_answer": "<b>A.</b> <p>15</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/926/gate2003-36#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>m identical balls are to be placed in n distinct bags. You are given that m \\(\\geq\\)kn,\nwhere k is a natural number \\(\\geq\\)1. In how many ways can the balls be placed in\nthe bags if each bag must contain at least k balls? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Discrete_Mathematics\\q34_5ebdef8e.jpg\"> <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>B.</b> <p>B</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/924/gate2003-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider the following formula \\(\\alpha\\)\nand its two interpretations \\(I_{1} \\; and \\; I_{2}\\)  <br><br> \\(\\alpha :(\\forall x)[P_{x}\\leftrightarrow (\\forall y)[Q_{xy}\\leftrightarrow \\neg Q_{yy}]]\\rightarrow (\\forall x)[\\neg P_{x}]\\) <br><br>I1: Domain : the set of natural numbers<br>\n\\(P_{x}\\equiv x\\) is a prime number <br>\n\\(Q_{xy}\\equiv y\\)  divides x <br><br>\nI2; same as I1 except that \\(P_{x}\\equiv x\\) is a composite number. <br><br>\nWhich of the following statements is true? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I1 satisfies \\(\\alpha\\)\n, I2 does not</p>",
            "<b>B.</b> <p>I2 satisfies \\(\\alpha\\)\n,I1 does not</p>",
            "<b>C.</b> <p>Neither I2 nor I2 satisfies \\(\\alpha\\)</p>",
            "<b>D.</b> <p>Both I1 and I2 satisfy \\(\\alpha\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Both I1 and I2 satisfy \\(\\alpha\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/923/gate2003-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Which of the following is a valid first order formula?\n(Here \\(\\alpha \\)\nand \\(\\beta\\)\nare first order formulae with x as their only free variable)<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Discrete_Mathematics\\q32_3d05448c.jpg\"> <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>D.</b> <p>D</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/922/gate2003-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Let (S,\\(\\leq\\)) be a partial order with two minimal elements a and b, and a maximum element c. <br> Let P:S \\(\\rightarrow\\)\n{True, False} be a predicate defined on S . Suppose that\nP(a) = True, P(b) =False and P(x) \\(\\Rightarrow\\) p(y) for all x,y \\(\\in\\) S satisfying x\\(\\leq\\)y, where \\(\\Rightarrow\\) stands for logical implication. Which of the following statements CANNOT be true? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P(x) =True for all x \\(\\in\\) S such that x  \\(\\neq\\) b</p>",
            "<b>B.</b> <p>P(x) =False for all x \\(\\in\\) S such that x \\(\\neq\\) a and x \\(\\neq\\) c</p>",
            "<b>C.</b> <p>P(x) =False for all x \\(\\in\\) S such that b \\(\\leq\\) x and x \\(\\neq\\) c</p>",
            "<b>D.</b> <p>P(x) =False for all x \\(\\in\\) S such that a \\(\\leq\\) x and b \\(\\leq\\) x</p>"
          ],
          "correct_answer": "<b>D.</b> <p>P(x) =False for all x \\(\\in\\) S such that a \\(\\leq\\) x and b \\(\\leq\\) x</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/921/gate2003-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
