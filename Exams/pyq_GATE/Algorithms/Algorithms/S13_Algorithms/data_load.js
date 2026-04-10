window.__examLoadCallback({
  "title": "Algorithms - Algorithms - Slot 13",
  "duration": 42,
  "sections": [
    {
      "name": "Algorithms",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
          "question": "<p>The recurrence equation <br><br> T(1) = 1 <br> T(n) = 2T(n - 1) + n, n \\(\\geq\\) 2 <br><br> evaluates to <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(2^{n+1}-n-2\\)</p>",
            "<b>B.</b> <p>\\(2^{n}-n\\)</p>",
            "<b>C.</b> <p>\\(2^{n+1}-2n-2\\)</p>",
            "<b>D.</b> <p>\\(2^{n}+n\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(2^{n+1}-n-2\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1078/gate2004-84#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
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
          "id": 4,
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
          "id": 5,
          "question": "<p>Suppose we run Dijkstra's single source shortest-path algorithm on the following edge-weighted\ndirected graph with vertex P as the source. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q44_a86a1440.jpg\"><br> In what order do the nodes get included into the set of vertices for which the shortest path distances are finalized? <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P,Q,R,S,T,U</p>",
            "<b>B.</b> <p>P,Q,R,U,S,T</p>",
            "<b>C.</b> <p>P,Q,R,U,T,S</p>",
            "<b>D.</b> <p>P,Q,T,R,U,S</p>"
          ],
          "correct_answer": "<b>B.</b> <p>P,Q,R,U,S,T</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1041/gate2004-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>The problem 3-SAT and 2-SAT are <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>both in P</p>",
            "<b>B.</b> <p>both NP complete</p>",
            "<b>C.</b> <p>NP-complete and in P respectively</p>",
            "<b>D.</b> <p>undecidable and NP-complete respectively</p>"
          ],
          "correct_answer": "<b>C.</b> <p>NP-complete and in P respectively</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1027/gate2004-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>The tightest lower bound on the number of comparisons, in the worst case, for comparison-based\nsorting is of the order of <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n</p>",
            "<b>B.</b> <p>\\(n^{2}\\)</p>",
            "<b>C.</b> <p>nlogn</p>",
            "<b>D.</b> <p>\\(nlog^{2}n\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>nlogn</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1026/gate2004-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>What is the weight of a minimum spanning tree of the following graph? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q68_3abc224c.jpg\"> <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>29</p>",
            "<b>B.</b> <p>31</p>",
            "<b>C.</b> <p>38</p>",
            "<b>D.</b> <p>41</p>"
          ],
          "correct_answer": "<b>B.</b> <p>31</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/955/gate2003-68#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Let G = (V,E) be an undirected graph with a sub-graph G1 = (V1,E1), Weight are\nassigned to edges of G as follows <br>\\(w(e)=\\left\\{\\begin{matrix} 0 &amp;if \\;  e \\in E1, \\\\ 1&amp;  otherwise \\end{matrix}\\right.\\) <br><br>A single-source shortest path algorithm is executed on the weighted graph (V,E,w) with an arbitrary vertex v1 of V1 as the source. Which of the following can always be inferred from the path costs computed? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The number of edges in the shortest paths from v1 to all vertices of G</p>",
            "<b>B.</b> <p>G1 is connected</p>",
            "<b>C.</b> <p>V1 forms a clique in G</p>",
            "<b>D.</b> <p>G1 is a tree</p>"
          ],
          "correct_answer": "<b>B.</b> <p>G1 is connected</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/954/gate2003-67#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
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
          "id": 11,
          "question": "<p>In a permutation \\(a_1.....a_n\\) of n distinct integers, an inversion is a pair  \\((a_i, a_j) \\) such that \\(i \\lt j\\) and \\(a_i \\gt a_j\\). <br><br> What would be the worst case time complexity of the insertion Sort algorithm, if\nthe inputs are restricted to permutations of 1....n with at most n inversions? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (n^{2})\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (nlogn)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (n^{1.5})\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (n)\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\Theta (n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43576/gate2003-62#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>Consider the following recurrence relation <br>T(1)=1 <br> T(n+1)=T(n)+\\(\\left \\lfloor \\sqrt{n+1} \\right \\rfloor\\)\nfor all n \\(\\geq\\) 1<br> The value of T(\\(m^{2}\\)\n) for m \\(\\geq\\) 1 is <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(m/6) (21m - 39) + 4</p>",
            "<b>B.</b> <p>(m/6) (4\\(m^{2}\\) - 3m + 5)</p>",
            "<b>C.</b> <p>(m/2) (\\(m^{2.5}\\) - 11m + 20) - 5</p>",
            "<b>D.</b> <p>(m/6) (5\\(m^{3}\\) - 34\\(m^{2}\\) + 137m - 104) + (5/6)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>(m/6) (4\\(m^{2}\\) - 3m + 5)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/925/gate2003-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>The usual \\(\\Theta (n^{2})\\)  implementation of Insertion Sort to sort ab array uses linear\nsearch to identify the position where an element is to be inserted into the already\nsorted part of the array. If, instead, we use binary search to identify the position,\nthe worst case running time will <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>remain \\(\\Theta (n^{2})\\)</p>",
            "<b>B.</b> <p>become \\(\\Theta (n(logn)^{2})\\)</p>",
            "<b>C.</b> <p>become\\(\\Theta\\)(nogn)</p>",
            "<b>D.</b> <p>become\\(\\Theta\\)(n)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>remain \\(\\Theta (n^{2})\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/912/gate2003-22#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the following graph <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q21_0bd25948.jpg\"> <br> Among the following sequences <br> (I) a b e g h f <br>\n(II) a b f e h g <br>\n(III) a b f h g e  <br>\n(IV) a f g h b e  <br>\nWhich are depth first traversals of the above graph? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I, II and IV only</p>",
            "<b>B.</b> <p>I and IV only</p>",
            "<b>C.</b> <p>II, III and IV only</p>",
            "<b>D.</b> <p>I, III and IV only</p>"
          ],
          "correct_answer": "<b>D.</b> <p>I, III and IV only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/911/gate2003-21#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the following three claims <br>\n1. \\((n+k)^{m}=\\ominus (n^{m})\\) , where k and m are constants <br> 2. \\( 2^{n+1}=O(2^{n})\\) <br> 3. \\( 2^{2^{n}}+1=O(2^{n})\\) <br>Which of these claims are correct? <br><br><strong>(GATE CSE 2003)</strong></p>",
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
        }
      ]
    }
  ]
});
