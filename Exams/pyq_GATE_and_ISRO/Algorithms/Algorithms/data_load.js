window.__examLoadCallback({
  "title": "Algorithms - Algorithms",
  "duration": 720,
  "sections": [
    {
      "name": "Algorithms",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following algorithm someAlgo that takes an undirected graph \\(G\\) as input.\n<br><br>\\(\\texttt{someAlgo(G)}:\\)<br>\n1. Let \\(v\\) be any vertex in \\(G\\). Run BFS on \\(G\\) starting at \\(v\\). Let \\(u\\) be a vertex in \\(G\\) at maximum distance from \\(v\\) as given by the BFS.<br>\n2. Run BFS on \\(G\\) again with \\(u\\) as the starting vertex. Let \\(z\\) be the vertex at maximum distance from \\(u\\) as given by the BFS.<br>\n3. Output the distance between \\(u\\) and \\(z\\) in \\(G\\).\n<br><br>The output of \\(\\texttt{someAlgo(T)}\\) for the tree shown in the given figure is __________. (Answer in integer) <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q49_ae33f918.webp\"><br> <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460844/gate-cse-2025-set-2-question-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Let \\(G \\) be an edge-weighted undirected graph with positive edge weights. Suppose a positive constant \\(\\alpha \\) is added to the weight of every edge.  <br>\nWhich ONE of the following statements is TRUE about the minimum spanning trees (MSTs) and shortest paths (SPs) in \\(G \\) before and after the edge weight update? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Every MST remains an MST, and every SP remains an SP.</p>",
            "<b>B.</b> <p>MSTs need not remain MSTs, and every SP remains an SP.</p>",
            "<b>C.</b> <p>Every MST remains an MST, and SPs need not remain SPs.</p>",
            "<b>D.</b> <p>MSTs need not remain MSTs, and SPs need not remain SPs.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Every MST remains an MST, and SPs need not remain SPs.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460808/gate-cse-2025-set-2-question-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Which of the following statements regarding Breadth First Search (BFS) and Depth First Search (DFS) on an undirected simple graph \\(G \\) is/are TRUE? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>A DFS tree of \\(G \\) is a Shortest Path tree of \\(G \\).</p>",
            "<b>B.</b> <p>Every non-tree edge of \\(G \\) with respect to a DFS tree is a forward/back edge.</p>",
            "<b>C.</b> <p>If \\((u, v) \\) is a non-tree edge of \\(G \\) with respect to a BFS tree, then the distances from the source vertex \\(s \\) to \\(u \\) and \\(v \\) in the BFS tree are within \\(\\pm 1 \\) of each other.</p>",
            "<b>D.</b> <p>Both BFS and DFS can be used to find the connected components of \\(G \\).</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>Every non-tree edge of \\(G \\) with respect to a DFS tree is a forward/back edge.</p>",
            "<b>C.</b> <p>If \\((u, v) \\) is a non-tree edge of \\(G \\) with respect to a BFS tree, then the distances from the source vertex \\(s \\) to \\(u \\) and \\(v \\) in the BFS tree are within \\(\\pm 1 \\) of each other.</p>",
            "<b>D.</b> <p>Both BFS and DFS can be used to find the connected components of \\(G \\).</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460816/gate-cse-2025-set-2-question-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>The maximum value of \\( x \\) such that the edge between the nodes B and C is included in every minimum spanning tree of the given graph is _________. (Answer in integer) <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q54_ee64d343.webp\"><br> <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460026/gate-cse-2025-set-1-question-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Let \\(G(V, E)\\) be an undirected and unweighted graph with 100 vertices. Let \\(d(u, v)\\) denote the number of edges in a shortest path between vertices \\(u\\) and \\(v\\) in \\(V\\). Let the maximum value of \\(d(u, v)\\), \\(u, v \\in V\\) such that \\(u \\neq v\\), be 30. Let \\(T\\) be any breadth-first-search tree of \\(G\\). Which ONE of the given options is CORRECT for every such graph \\(G\\)? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The height of \\(T\\) is exactly 15.</p>",
            "<b>B.</b> <p>The height of \\(T\\) is exactly 30.</p>",
            "<b>C.</b> <p>The height of \\(T\\) is at least 15.</p>",
            "<b>D.</b> <p>The height of \\(T\\) is at least 30.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>The height of \\(T\\) is at least 15.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/460047/gate-cse-2025-set-1-question-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the following recurrence relation:\n<br><br>\n\\(T(n) = 2T(n-1) + n2^n \\quad \\text{for} \\quad n &gt; 0, \\quad T(0) = 1\\)\n<br><br>\nWhich ONE of the following options is CORRECT? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T(n) = \\Theta(n^2 2^n)\\)</p>",
            "<b>B.</b> <p>\\(T(n) = \\Theta(n 2^n)\\)</p>",
            "<b>C.</b> <p>\\(T(n) = \\Theta((\\log n)^2 2^n)\\)</p>",
            "<b>D.</b> <p>\\(T(n) = \\Theta(4^n)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(T(n) = \\Theta(n^2 2^n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460070/gate-cse-2025-set-1-question-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Let \\(G\\) be any undirected graph with positive edge weights, and \\(T\\) be a minimum spanning tree of \\(G\\). For any two vertices, \\(u\\) and \\(v\\), let \\(d_1(u, v)\\) and \\(d_2(u, v)\\) be the shortest distances between \\(u\\) and \\(v\\) in \\(G\\) and \\(T\\), respectively. Which ONE of the options is CORRECT for all possible \\(G\\), \\(T\\), \\(u\\), and \\(v\\)? <br><br><strong>(GATE CSE 2025 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(d_1(u, v) = d_2(u, v)\\)</p>",
            "<b>B.</b> <p>\\(d_1(u, v) \\leq d_2(u, v)\\)</p>",
            "<b>C.</b> <p>\\(d_1(u, v) \\geq d_2(u, v)\\)</p>",
            "<b>D.</b> <p>\\(d_1(u, v) \\neq d_2(u, v)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(d_1(u, v) \\leq d_2(u, v)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/460072/gate-cse-2025-set-1-question-8#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>The number of distinct minimum-weight spanning trees of the following graph\nis _______<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q49_7a80742a.webp\"><br> <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "9",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422848/gate-cse-2024-set-2-question-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Let \\(G\\) be an undirected connected graph in which every edge has a positive integer weight.  Suppose  that  every  spanning  tree  in  \\(G\\)  has  even  weight.  Which  of  the following statements is/are TRUE for every such graph \\(G\\) ? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>All edges in \\(G\\) have even weight</p>",
            "<b>B.</b> <p>All edges in \\(G\\) have even weight OR all edges in \\(G\\) have odd weight</p>",
            "<b>C.</b> <p>In each cycle \\(G\\) in \\(G\\), all edges in \\(G\\) have even weight</p>",
            "<b>D.</b> <p>In each cycle \\(G\\) in \\(G\\), either all edges in \\(G\\) have even weight OR all edges in \\(G\\) have odd weight</p>"
          ],
          "correct_answer": "<b>D.</b> <p>In each cycle \\(G\\) in \\(G\\), either all edges in \\(G\\) have even weight OR all edges in \\(G\\) have odd weight</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422856/gate-cse-2024-set-2-question-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Let \\( T(n) \\) be the recurrence relation defined as follows:\n<br> \\(\n\\begin{aligned}\n&amp; T(0)=1, \\\\\n&amp; T(1)=2, \\text { and } \\\\\n&amp; T(n)=5 T(n-1)-6 T(n-2) \\text { for } n \\geq 2\n\\end{aligned}\n\\) <br>Which one of the following statements is TRUE? <br><br><strong>(GATE CSE 2024 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\( T(n)=\\Theta\\left(2^n\\right)  \\)</p>",
            "<b>B.</b> <p>\\( T(n)=\\Theta\\left(n 2^n\\right)  \\)</p>",
            "<b>C.</b> <p>\\( T(n)=\\Theta\\left(3^n\\right)  \\)</p>",
            "<b>D.</b> <p>\\( T(n)=\\Theta\\left(n 3^n\\right)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\( T(n)=\\Theta\\left(2^n\\right)  \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/422892/gate-cse-2024-set-2-question-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Consider the following recurrence relation:\n<br> \\(\nT(n)=\\left\\{\\begin{array}{c}\n\\sqrt{n} T(\\sqrt{n})+n \\text { for } n \\geq 1, \\\\\n1 \\quad \\text { for } n=1 .\n\\end{array}\\right.\n\\) <br>Which one of the following options is CORRECT? <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T(n)=\\Theta(n \\log \\log n)</p>",
            "<b>B.</b> <p>T(n)=\\Theta(n \\log n)</p>",
            "<b>C.</b> <p>T(n)=\\Theta\\left(n^2 \\log n\\right)</p>",
            "<b>D.</b> <p>T(n)=\\Theta\\left(n^2 \\log \\log n\\right)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>T(n)=\\Theta(n \\log \\log n)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/422810/gate-cse-2024-set-1-question-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>The number of spanning trees in a complete graph of 4 vertices labelled A, B, C,\nand D is _________ <br><br><strong>(GATE CSE 2024 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "16",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/422818/gate-cse-2024-set-1-question-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
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
          "id": 14,
          "question": "<p>Let \\(U = \\{1, 2, 3\\}\\). Let \\(2^U\\) denote the powerset of  \\(U\\). Consider an undirected graph\n\\(G\\) whose vertex set is  \\(2^U\\). For any  \\(A,B \\in 2^U, (A,B)\\) is an edge in  \\(G\\) if and only\nif (i)  \\(A \\neq B\\), and (ii) either \\(A \\subseteq B\\)   or \\(B \\subseteq A\\). For any vertex \\(A\\) in \\(G\\), the set of\nall possible orderings in which the vertices of \\(G\\) can be visited in a Breadth First\nSearch (BFS) starting from \\(A\\) is denoted by \\(B(A)\\).<br>\nIf \\(\\phi \\)  denotes the empty set, then the cardinality of \\(B(\\phi ) \\)  is ____. <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5040",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399265/gate-cse-2023-question-46#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider functions Function 1 and Function 2 expressed in pseudocode as\nfollows:<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q44_544299d1.jpg\"><br>Let \\(f_1(n)\\) and \\(f_2(n)\\) denote the number of times the statement \\(\"x = x + 1\"\\) is\nexecuted in Function 1 and Function 2, respectively.<br>\nWhich of the following statements is/are TRUE? <br><br><strong>(GATE CSE 2023)</strong></p>",
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
          "id": 16,
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
          "id": 17,
          "question": "<p>Let \\(G(V, E)\\) be a directed graph, where \\(V =  \\{1, 2, 3, 4, 5 \\}\\) is the set of vertices and\n\\(E\\) is the set of directed edges, as defined by the following adjacency matrix \\(A\\).<br>\\(A[i][j]= \\left \\{ \\begin{matrix}\n1 &amp;1 \\leq j \\leq i \\leq 5  \\\\\n0&amp; otherwise\n\\end{matrix} \\right.\\)<br> \\(A[i][j]=1 \\)indicates a directed edge from node \\(i \\) to node \\(j \\). A directed spanning tree of \\(G \\), rooted at \\( r  \\in V\\) , is defined as a subgraph \\(T \\) of \\(G \\) such that the undirected\nversion of \\(T \\) is a tree, and \\(T \\) contains a directed path from \\(r \\) to every other vertex in \\(V \\). The   number   of   such   directed   spanning   trees   rooted   at   vertex  5 is ____ <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "24",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371888/Gate-cse-2022-question-48#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 18,
          "question": "<p>Consider a simple undirected weighted graph G, all of whose edge weights are distinct. Which of the following statements about the minimum spanning trees of G is/are TRUE? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>The edge with the second smallest weight is always part of any minimum spanning tree of G .</p>",
            "<b>B.</b> <p>One or both of the edges with the third smallest and the fourth smallest weights are part of any minimum spanning tree of G .</p>",
            "<b>C.</b> <p>Suppose \\(S\\subseteq V\\) be such that \\(S\\neq  \\phi \\) and \\(S\\neq  V\\) . Consider the edge with the minimum weight such that one of its vertices is in S and the other in V \\ S . Such an edge will always be part of any minimum spanning tree of G .</p>",
            "<b>D.</b> <p>G can have multiple minimum spanning trees.</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>The edge with the second smallest weight is always part of any minimum spanning tree of G .</p>",
            "<b>B.</b> <p>One or both of the edges with the third smallest and the fourth smallest weights are part of any minimum spanning tree of G .</p>",
            "<b>C.</b> <p>Suppose \\(S\\subseteq V\\) be such that \\(S\\neq  \\phi \\) and \\(S\\neq  V\\) . Consider the edge with the minimum weight such that one of its vertices is in S and the other in V \\ S . Such an edge will always be part of any minimum spanning tree of G .</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371897/Gate-cse-2022-question-39#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 19,
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
          "id": 20,
          "question": "<p>For constants \\(a\\geq 1\\) and \\(b \\gt 1\\), consider the following recurrence defined on the non-negative integers:\n<br><br>\n\\(T(n) = a \\cdot T \\left(\\dfrac{n}{b} \\right) + f(n)\\)\n<br><br>Which one of the following options is correct about the recurrence \\(T(n)\\)? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>if \\(f(n)\\) is \\(n \\log_2(n)\\), then \\(T(n)\\) is \\(\\Theta(n \\log_2(n))\\).</p>",
            "<b>B.</b> <p>if \\(f(n)\\) is \\(\\dfrac{n}{\\log_2(n)}\\), then \\(T(n)\\) is \\(\\Theta(\\log_2(n))\\).</p>",
            "<b>C.</b> <p>if \\(f(n)\\) is \\(O(n^{\\log_b(a)-\\epsilon})\\) for some \\(\\epsilon \\gt 0\\), then \\(T(n)\\) is \\(\\Theta(n ^{\\log_b(a)})\\).</p>",
            "<b>D.</b> <p>if \\(f(n)\\) is \\(\\Theta(n ^{\\log_b(a)})\\), then \\(T(n)\\) is \\(\\Theta(n ^{\\log_b(a)})\\).</p>"
          ],
          "correct_answer": "<b>C.</b> <p>if \\(f(n)\\) is \\(O(n^{\\log_b(a)-\\epsilon})\\) for some \\(\\epsilon \\gt 0\\), then \\(T(n)\\) is \\(\\Theta(n ^{\\log_b(a)})\\).</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357501/gate-cse-2021-set-2-question-39#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 21,
          "question": "<p>Consider the string abbccddeee. Each letter in the string must be assigned a binary code satisfying the following properties:\n<br><br>\nFor any two letters, the code assigned to one letter must not be a prefix of the code assigned to the other letter.<br>\nFor any two letters of the same frequency, the letter which occurs earlier in the dictionary order is assigned a code whose length is at most the length of the code assigned to the other letter.<br><br>\nAmong the set of all binary code assignments which satisfy the above two properties, what is the minimum length of the encoded string? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>21</p>",
            "<b>B.</b> <p>23</p>",
            "<b>C.</b> <p>25</p>",
            "<b>D.</b> <p>30</p>"
          ],
          "correct_answer": "<b>B.</b> <p>23</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357514/gate-cse-2021-set-2-question-26#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 22,
          "question": "<p>Let G be a connected undirected weighted graph. Consider the following two statements.<br><br>\nS1: There exists a minimum weight edge in G which is present in every minimum spanning tree of G.<br>\nS2: If every edge in G has distinct weight, then G has a unique minimum spanning tree.<br><br>\nWhich one of the following options is correct? <br><br><strong>(GATE CSE 2021 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both S1 and S2 are true</p>",
            "<b>B.</b> <p>S1 is true and S2 is false</p>",
            "<b>C.</b> <p>S1 is false and S2 is true</p>",
            "<b>D.</b> <p>Both S1 and S2 are false</p>"
          ],
          "correct_answer": "<b>C.</b> <p>S1 is false and S2 is true</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357539/gate-cse-2021-set-2-question-1#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 23,
          "question": "<p>An articulation point in a connected graph is a vertex such that removing the vertex and its incident edges disconnects the graph into two or more connected components.\n<br>\nLet T be a DFS tree obtained by doing DFS in a connected undirected graph G.\n<br>\nWhich of the following options is/are correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Root of T can never be an articulation point in G.</p>",
            "<b>B.</b> <p>Root of T is an articulation point in G if and only if it has 2 or more children.</p>",
            "<b>C.</b> <p>A leaf of T can be an articulation point in G.</p>",
            "<b>D.</b> <p>If u is an articulation point in G such that x is an ancestor of u in T and y is a descendent of u in T, then all paths from x to y in G must pass through u.</p>"
          ],
          "correct_answer": [
            "<b>B.</b> <p>Root of T is an articulation point in G if and only if it has 2 or more children.</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357410/gate-cse-2021-set-1-question-41#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 24,
          "question": "<p>Define \\(R_n\\) to be the maximum amount earned by cutting a rod of length n meters into one or more pieces of integer length and selling them. For \\(i &gt; 0\\), let \\(p[i]\\) denote the selling price of a rod whose length is \\(i\\) meters. Consider the array of prices:\n<br><br>\n\\(\\text{p}[1]=1,\\text{p}[2]=5,\\text{p}[3]=8,\\text{p}[4]=9,\\text{p}[5]=10,\\text{p}[6]=17,\\text{p}[7]=18\\)<br><br>\nwhich of the following statements is/are correct about \\(R_7\\)? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>\\(R_7=18\\)</p>",
            "<b>B.</b> <p>\\(R_7=19\\)</p>",
            "<b>C.</b> <p>\\(R_7\\) is achieved by three different solutions.</p>",
            "<b>D.</b> <p>\\(R_7\\) cannot be achieved by a solution consisting of three pieces.</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>\\(R_7=18\\)</p>",
            "<b>C.</b> <p>\\(R_7\\) is achieved by three different solutions.</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357411/gate-cse-2021-set-1-question-40#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 25,
          "question": "<p>Let \\(G=(V,E)\\) be an undirected unweighted connected graph. The diameter of \\(G\\) is defined as:\n<br>\n\\(diam(G)=\\displaystyle \\max_{u,v \\in V} \\{ \\text{the length of shortest path between }u \\text{ and }v \\}\\)\n<br><br>Let \\(M\\) be the adjacency matrix of \\(G\\).\n<br>\nDefine graph \\(G_2\\) on the same set of vertices with adjacency matrix \\(N\\), where\n<br><br>\n\\(N_{ij}=\\left\\{\\begin{array} {lcl} 1 &amp;\\text{if}\\; M_{ij}&gt;0 \\text{ or } P_{ij}&gt;0, \\text{ where }P=M^2\\\\0 &amp;\\text{otherwise} \\end{array}\\right.\\)<br><br>\nWhich one of the following statements is true? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(diam(G_2)\\leq \\left \\lceil diam(G)/2 \\right \\rceil\\)</p>",
            "<b>B.</b> <p>\\(\\left \\lceil diam(G)/2 \\right \\rceil \\lt diam(G_2) \\lt diam(G)\\)</p>",
            "<b>C.</b> <p>\\(diam(G_2) =diam(G)\\)</p>",
            "<b>D.</b> <p>\\(diam(G) \\lt diam(G_2) \\leq 2 \\; diam(G)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(diam(G_2)\\leq \\left \\lceil diam(G)/2 \\right \\rceil\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357415/gate-cse-2021-set-1-question-36#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 26,
          "question": "<p>Consider the following recurrence relation.<br>\n\\(T\\left ( n \\right )=\\left\\{\\begin{array} {lcl} T(n/2)+T(2n/5)+7n &amp; \\text{if} \\; n &gt; 0\\\\1 &amp; \\text{if}\\; n=0 \\end{array}\\right.\\)<br>\nWhich one of the following options is correct? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T(n)=\\Theta (n^{5/2})\\)</p>",
            "<b>B.</b> <p>\\(T(n)=\\Theta (n \\log n)\\)</p>",
            "<b>C.</b> <p>\\(T(n)=\\Theta (n)\\)</p>",
            "<b>D.</b> <p>\\(T(n)=\\Theta ((\\log n)^{5/2})\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(T(n)=\\Theta (n)\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/357421/gate-cse-2021-set-1-question-30#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 27,
          "question": "<p>Consider the following undirected graph with edge weights as shown:<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q17_3427ef34.jpg\"><br>The number of minimum-weight spanning trees of the graph is __________ <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357434/gate-cse-2021-set-1-question-17#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 28,
          "question": "<p>Consider the following array.<br><br>\\(\\begin{array}{|l|l|l|l|l|l|l|l|}  \\hline 23&amp;32&amp;45&amp;69&amp;72&amp;73&amp;89&amp;97 \\\\ \\hline\\end{array}\\)<br><br>\nWhich algorithm out of the following options uses the least number of comparisons (among the array elements) to sort the above array in ascending order? <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Selection sort</p>",
            "<b>B.</b> <p>Mergesort</p>",
            "<b>C.</b> <p>Insertion sort</p>",
            "<b>D.</b> <p>Quicksort using the last element as pivot</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Insertion sort</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/357443/gate-cse-2021-set-1-question-9#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 29,
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
          "id": 30,
          "question": "<p>Consider product of three matrices \\(M_{1}\\),\\(M_{2}\\) and \\(M_{3}\\) having w rows and x columns, x rows and y columns, and y rows and z columns. Under what condition will it take less time to compute the product as \\(\\left(M_{1} M_{2}\\right) M_{3}\\) than to compute \\(M_{1}\\left(M_{2} M_{3}\\right)\\) ? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Always take the same time</p>",
            "<b>B.</b> <p>\\((1 / x+1 / z) \\lt (1 / w+1 / y)\\)</p>",
            "<b>C.</b> <p>\\(x \\gt y\\)</p>",
            "<b>D.</b> <p>\\((w+x) \\gt (y+z)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\((1 / x+1 / z) \\lt (1 / w+1 / y)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331382/isro2020-79\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 31,
          "question": "<p>Of the following sort algorithms, which has execution time that is least dependant on initial ordering of the input? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Insertion sort</p>",
            "<b>B.</b> <p>Quick sort</p>",
            "<b>C.</b> <p>Merge sort</p>",
            "<b>D.</b> <p>Selection sort</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Merge sort</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331259/isro2020-65\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 32,
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
          "id": 33,
          "question": "<p>Huffman tree is constructed for the following data :{A,B,C,D,E} with frequency {0.17, 0.11, 0.24, 0.33 and 0.15} respectively. 100 00 01101 is decoded as <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>BACE</p>",
            "<b>B.</b> <p>CADE</p>",
            "<b>C.</b> <p>BAD</p>",
            "<b>D.</b> <p>CADD</p>"
          ],
          "correct_answer": "<b>A.</b> <p>BACE</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331358/isro2020-34\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 34,
          "question": "<p>G  is an undirected graph with vertex set {v1, v2, v3, v4, v5, v6, v7} and edge set {v1v2, v1v3, v1v4 ,v2v4, v2v5, v3v4, v4v5, v4v6, v5v6, v6v7 }. A breadth first search of the graph is performed with v1 as the root node. Which of the following is a tree edge? <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>v2v4</p>",
            "<b>B.</b> <p>v1v4</p>",
            "<b>C.</b> <p>v4v5</p>",
            "<b>D.</b> <p>v3v4</p>"
          ],
          "correct_answer": "<b>B.</b> <p>v1v4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331350/isro2020-32\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 35,
          "question": "<p>The master theorem <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>assumes the subproblems are unequal sizes</p>",
            "<b>B.</b> <p>can be used if the subproblems are of equal size</p>",
            "<b>C.</b> <p>cannot be used for divide and conquer algorithms</p>",
            "<b>D.</b> <p>cannot be used for asymptotic complexity analysis</p>"
          ],
          "correct_answer": "<b>B.</b> <p>can be used if the subproblems are of equal size</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331325/isro2020-21\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 36,
          "question": "<p>Consider a graph \\(G=(V,E)\\), where \\(V=\\{v_1,v_2,...,v_{100}\\}\\), \\(E=\\{(v_i,v_j)|1\\leq i \\lt j\\leq 100\\}\\), and weight of the edge \\((v_i,v_j)\\; is \\; |i-j|\\). The weight of minimum spanning tree of G is _________ <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "99",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333182/gate2020-cs-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 37,
          "question": "<p>Let \\(G=(V,E)\\) be a directed, weighed graph with weight function \\(w:E\\rightarrow \\mathbb{R}\\). For some function \\(f:V\\rightarrow \\mathbb{R}\\), for each edge \\((u,v) \\in E\\), define \\(w'(u,v)\\) as \\(w(u,v)+f(u)-f(v)\\). <br><br>\nWhich one of the options completes the following sentence so that it is TRUE?<br><br>\n\"The shortest paths in G under \\(w\\) are shortest paths under \\(w'\\) too,_________\". <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>for every \\(f:V\\rightarrow \\mathbb{R}\\)</p>",
            "<b>B.</b> <p>if and only if \\(\\forall u \\in V,f(u)\\) is positive</p>",
            "<b>C.</b> <p>if and only if \\(\\forall u \\in V,f(u)\\) is negative</p>",
            "<b>D.</b> <p>if and only if f(u) is the distance from s to u in the graph obtained by adding a new vertex s to G and edges of zero weight from s to every verex of G</p>"
          ],
          "correct_answer": "<b>A.</b> <p>for every \\(f:V\\rightarrow \\mathbb{R}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/333191/gate2020-cs-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 38,
          "question": "<p>Let  \\(G=(V,E)\\) be a weighted undirected graph and let T be a Minimum Spanning Tree (MST) of G maintained using adjacency lists. Suppose a new weighed edge \\((u,v)\\in V \\times V\\) is added to G. The worst case time complexity of determining if T is still an MST of the resultant graph is <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (|E|+|V|)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (|E||V|)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (|E|\\log |V|)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (|V|)\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\Theta (|V|)\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/333200/gate2020-cs-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 39,
          "question": "<p>For parameters a and b, both of which are \\(\\omega(1) , T(n)=T(n^{1/a})+1\\), and \\(T(b)=1\\). Then \\(T(n)\\) is <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (\\log _a \\log_b n)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (\\log _{ab} n)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (\\log _b \\log_a n)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (\\log _2 \\log_2 n)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\Theta (\\log _a \\log_b n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/333229/gate2020-cs-2#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 40,
          "question": "<p>Let G be any connection, weighted, undirected graph:<br><br>\nI. G has a unique minimum spanning tree if no two edges of G have the same weight.<br>\nII. G has a unique minimum spanning tree if, for every cut of G, there is a unique minimum weight edge crossing the cut. <br><br>\nWhich of the above two statements is/are TRUE? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>Both I and II</p>",
            "<b>D.</b> <p>Neither I nor II</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both I and II</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/302810/gate2019-cs-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 41,
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
          "id": 42,
          "question": "<p>Consider a sequence of 14 elements: A = [-5, -10, 6, 3, -1, -2, 13, 4, -9, -1, 4, 12, -3, 0]. The sequence sum \\(S(i,j)=\\sum_{k=i}^{j}A[k]\\). Determine the maximum of S(i,j), where \\(0 \\leq i \\leq j \\lt 14\\). (Divide and conquer approach may be used). Answer:______ <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "29",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302823/gate2019-cs-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 43,
          "question": "<p>An array of 25 distinct elements is to be sorted using quicksort. Assume that the pivot element is chosen uniformly at random. The probability that the pivot element gets placed in the worst possible location in the first round of partitioning (rounded off to 2 decimal places) is _________. <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0.08",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302828/gate2019-cs-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 44,
          "question": "<p>Of the following sorting algorithms, which has a running time that is least dependent on the initial ordering of the input? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Mege Sort</p>",
            "<b>B.</b> <p>Insertion Sort</p>",
            "<b>C.</b> <p>Selection Sort</p>",
            "<b>D.</b> <p>Quick Sort</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Mege Sort</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213522/isro2018-66\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 45,
          "question": "<p>The running time of an algorithm is given by:<br>\\(T(n)=\\left\\{\\begin{matrix} T(n-1)+T(n-2)-T(n-3), &amp;\\text {  if } n&gt;3\\\\  n, &amp;\\text{  otherwise}\\end{matrix}\\right.\\)<br>Then what should be the relation between \\(T(1),T(2),T(3)\\), so that the order of the algorithm is constant? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T(1) = T(2) = T(3)</p>",
            "<b>B.</b> <p>T(1) + T(3) = 2T(2)</p>",
            "<b>C.</b> <p>T(1) - T(3) = T(2)</p>",
            "<b>D.</b> <p>T(1) + T(2) = T(3)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>T(1) = T(2) = T(3)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213551/isro2018-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 46,
          "question": "<p>Given two sorted list of size m and n respectively. The number of comparisons needed the worst case by the merge sort algorithm will be: <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>m-n</p>",
            "<b>B.</b> <p>maximum of m and n</p>",
            "<b>C.</b> <p>minimum of m and n</p>",
            "<b>D.</b> <p>m+n-1</p>"
          ],
          "correct_answer": "<b>D.</b> <p>m+n-1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213553/isro2018-35\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 47,
          "question": "<p>Which of the following is application of Breath First Search on the graph? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Finding diameter of the graph</p>",
            "<b>B.</b> <p>Finding bipartite graph</p>",
            "<b>C.</b> <p>Both (A) and (B)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both (A) and (B)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213555/isro2018-33\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 48,
          "question": "<p>Consider the weights and values of items listed below. Note that there is only one unit of each item. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q48_ac42f524.jpg\"> <br>  The task is to pick a subset of these items such that their total weight is no more than 11 Kgs\nand their total value is maximized. Moreover, no item may be split. The total value of items picked by an optimal algorithm is denoted by  \\(V_{opt}\\). A greedy algorithm sorts the items by their value-to-weight ratios in descending order and packs them greedily, starting from the first item in the ordered list. The total value of items picked by the greedy algorithm is denoted by \\(V_{greedy}\\).<br>\nThe value of \\(V_{opt}\\)-\\(V_{greedy}\\) is ____________. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "16",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204123/gate2018-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 49,
          "question": "<p>Consider the following undirected graph G:<br> <img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q47_241ae69c.jpg\"> <br>  Choose a value for x that will maximize the number of minimum weight spanning trees (MWSTs) of G. The number of MWSTs of G for this value of x is ______. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204122/gate2018-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 50,
          "question": "<p>Assume that multiplying a matrix G1 of dimension pxq with another matrix G2 of\ndimension pxq requires pqr scalar multiplications. Computing the product of n  matrices G1G2G3...Gn can be done by parenthesizing in different ways. Define Gi Gi+1 as an explicitly computed pair for a given paranthesization if they are directly multiplied. For example, in the matrix multiplication chain G1G2G3G4G5G6 using parenthesization (G1(G2G3))(G4(G5G6)), G2G3 and G5G6 are the only explicitly computed pairs. Consider a matrix multiplication chain F1F2F3F4F5, where matrices F1, F2, F3, F4 and F5 are of dimensions 2x25, 25x3, 3x16, 16x1 and 1x1000, respectively. In the parenthesization of F1F2F3F4F5 that minimizes the total number of scalar multiplications, the explicitly computed pairs is/are <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>F1F2 and F3F4 only</p>",
            "<b>B.</b> <p>F2F3 only</p>",
            "<b>C.</b> <p>F3F4 only</p>",
            "<b>D.</b> <p>F1F2 and F4F5 only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>F3F4 only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204105/gate2018-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 51,
          "question": "<p>Let G be a simple undirected graph. Let TD be a depth first search tree of G. Let TB be a breadth first search tree of G. Consider the following statements. <br><br>\n(I) No edge of G is a cross edge with respect to TD. (A cross edge in G is between two\nnodes neither of which is an ancestor of the other in TD.) <br>\n(II) For every edge (u,v) of G, if u is at depth i and v is at depth j in TB, then |i-j|=1.<br><br>\nWhich of the statements above must necessarily be true? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>Both I and II</p>",
            "<b>D.</b> <p>Neither I nor II</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204104/gate2018-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 52,
          "question": "<p>Which of the following algorithms solves the all pair shortest path problem? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Prim's algorithm</p>",
            "<b>B.</b> <p>Dijkstra's algorithm</p>",
            "<b>C.</b> <p>Bellman ford algorithm</p>",
            "<b>D.</b> <p>Floyd warshalls algorithm</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Floyd warshalls algorithm</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128494/isro2017-76\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 53,
          "question": "<p>The number of swappings needed to sort the numbers 8 , 22, 7, 9, 31, 5, 13 in ascending order using bubble sort is <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>11</p>",
            "<b>B.</b> <p>12</p>",
            "<b>C.</b> <p>13</p>",
            "<b>D.</b> <p>10</p>"
          ],
          "correct_answer": "<b>D.</b> <p>10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128694/isro2017-49\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 54,
          "question": "<p>Which one of the following in-place sorting algorithms needs the minimum number of swaps? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Insertion Sort</p>",
            "<b>B.</b> <p>Quick Sort</p>",
            "<b>C.</b> <p>Heap Sort</p>",
            "<b>D.</b> <p>Selection Sort</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Selection Sort</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128545/isro2017-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 55,
          "question": "<p>The recurrence relation that arises in relation with the complexity of binary search is: <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T(n)=2 T\\left(\\frac{n}{2}\\right)+k, \\mathrm{k} \\text { is a constant }\\)</p>",
            "<b>B.</b> <p>\\(T(n)=T\\left(\\frac{n}{2}\\right)+k, \\mathrm{k} \\text { is a constant }\\)</p>",
            "<b>C.</b> <p>\\(T(n)=T\\left(\\frac{n}{2}\\right)+\\log n\\)</p>",
            "<b>D.</b> <p>\\(T(n)=T\\left(\\frac{n}{2}\\right)+n\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(T(n)=T\\left(\\frac{n}{2}\\right)+k, \\mathrm{k} \\text { is a constant }\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2444/gate1994-1-7-isro2017-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 56,
          "question": "<p>The problem 3-SAT and 2-SAT are <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>both in P</p>",
            "<b>B.</b> <p>both NP complete</p>",
            "<b>C.</b> <p>NP -complete and in P respectively</p>",
            "<b>D.</b> <p>undecidable and NP complete respectively</p>"
          ],
          "correct_answer": "<b>C.</b> <p>NP -complete and in P respectively</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1027/gate2004-30-isro2017-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 57,
          "question": "<p>A message is made up entirely of characters from the set X= {P,Q,R,S,T}. The table of\nprobabilities for each of the characters is shown below: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q41_1d66a9cf.jpg\"> <br>If a message of 100 characters over X is encoded using Huffman coding, then the expected\nlength of the encoded message in bits is_____ <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "225",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118395/gate2017-2-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 58,
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
          "id": 59,
          "question": "<p>Consider the recurrence function <br> \\(T(n)=\\left\\{\\begin{matrix} 2T(\\sqrt{n})+1, &amp; n \\gt 2\\\\ 2,&amp; 0 \\lt n\\leq 2 \\end{matrix}\\right.\\) <br>Then T(n) in terms of   \\(\\theta\\)   notation is <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\theta (log log n)\\)</p>",
            "<b>B.</b> <p>\\(\\theta  (logn)\\)</p>",
            "<b>C.</b> <p>\\(\\theta (\\sqrt{n})\\)</p>",
            "<b>D.</b> <p>\\(\\theta  (n)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\theta  (logn)\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118623/gate2017-2-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 60,
          "question": "<p>The Breadth First Search (BFS) algorithm has been implemented using the queue data\nstructure. Which one of the following is a possible order of visiting the nodes in the graph\nbelow? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q7_689784b4.jpg\"> <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>MNOPQR</p>",
            "<b>B.</b> <p>NQMPOR</p>",
            "<b>C.</b> <p>QMNROP</p>",
            "<b>D.</b> <p>POQNMR</p>"
          ],
          "correct_answer": "<b>D.</b> <p>POQNMR</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118196/gate2017-2-15#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 61,
          "question": "<p>Match the algorithms with their time complexities: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q16_a76213c5.jpg\"> <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
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
          "id": 62,
          "question": "<p>Let G = (V, E) be any connected undirected edge-weighted graph. The weights of the edges in\nE are positive and distinct. Consider the following statements:<br><br>\n(I) Minimum spanning tree of G is always unique. <br>\n(II) Shortest path between any two vertices of G is always unique. <br><br>\nWhich of the above statements is/are necessarily true? <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(I) only</p>",
            "<b>B.</b> <p>(II) only</p>",
            "<b>C.</b> <p>Both (I) and (II)</p>",
            "<b>D.</b> <p>Neither (I) nor (II)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>(I) only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118306/gate2017-1-26#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 63,
          "question": "<p>Consider the following table: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q4_e0e30ec7.jpg\"> <br>Match the algorithms to the design paradigms they are based on. <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P-(ii), Q-(iii),R-(i)</p>",
            "<b>B.</b> <p>P-(iii), Q-(i), R-(ii)</p>",
            "<b>C.</b> <p>P-(ii), Q-(i), R-(iii)</p>",
            "<b>D.</b> <p>P-(i), Q-(ii), R-(iii)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P-(ii), Q-(i), R-(iii)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/118707/gate2017-1-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 64,
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
          "id": 65,
          "question": "<p>Consider the following recurrence:<br>\\(T(n)=2T\\left ( \\sqrt{n}\\right )+1, T(1)=1\\)<br>Which one of the following is true? <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T(n)=\\Theta (\\log\\log n)\\)</p>",
            "<b>B.</b> <p>\\(T(n)=\\Theta (\\log n)\\)</p>",
            "<b>C.</b> <p>\\(T(n)=\\Theta (\\sqrt{n})\\)</p>",
            "<b>D.</b> <p>\\(T(n)=\\Theta (n)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(T(n)=\\Theta (\\log n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1829/gate2006-51-isro2016-34\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 66,
          "question": "<p>Algorithm design technique used in quicksort algorithm is? <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Dynamic programming</p>",
            "<b>B.</b> <p>Backtracking</p>",
            "<b>C.</b> <p>Divide and conquer</p>",
            "<b>D.</b> <p>Greedy method</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Divide and conquer</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2462/gate1994-1-19-isro2016-31\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 67,
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
          "id": 68,
          "question": "<p>The given diagram shows the flowchart for a recursive function A(n). Assume that all statements, except for the recursive calls,have O(1) Asymptotic Notation. If the worst case Asymptotic Notation of this functionis \\(O(n^{\\alpha })\\), then the least possible value(accurate upto two decimal positions) of \\(\\alpha\\) is .<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q39_8d9d79a9.jpg\"> <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2.2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39581/gate2016-2-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 69,
          "question": "<p>Let A1,A2,A3, and A4 be four matrices of dimensions 10x5, 5x20, 20x10, and 10x5, respectively. The minimum number of scalar multiplications required to find the product A1A2A3A4 using the basic matrix multiplication method is __________. <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1500",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39587/gate2016-2-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 70,
          "question": "<p>The Floyd-Warshall algorithm for all-pair shortest paths computation is based on <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Greedy paradigm</p>",
            "<b>B.</b> <p>Divide-and-Conquerparadigm.</p>",
            "<b>C.</b> <p>Dynamic Programing paradigm.</p>",
            "<b>D.</b> <p>neither Greedy nor Divide-and-Conquer nor Dynamic Programming paradigm.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Dynamic Programing paradigm.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39570/gate2016-2-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 71,
          "question": "<p>Assume that the algorithms considered here sort the input sequences in ascending order. If the input is already in ascending order, which of the following are TRUE? <br>\nI. Quicksort runs in \\(\\Theta (n^{2})\\) time  <br>\nII. Bubblesort runs in \\(\\Theta (n^{2})\\) time <br>\nIII. Merge sort runs in \\(\\Theta (n)\\) time <br>\nIV. Insertion sort runs in \\(\\Theta (n)\\) time <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II only</p>",
            "<b>B.</b> <p>I and III only</p>",
            "<b>C.</b> <p>II and IV only</p>",
            "<b>D.</b> <p>I and IV only</p>"
          ],
          "correct_answer": "<b>D.</b> <p>I and IV only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39561/gate2016-2-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 72,
          "question": "<p>Breadth First Search(BFS) is started on a binary tree beginning from the root vertex. There is a vertex t at a distance four from the root. If t is the n-th vertex in this BFS traversal, then the maximum possible value of n is______ . <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "31",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39563/gate2016-2-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 73,
          "question": "<p>G = (V,E) is an undirected simple graph in which each edge has a distinct weight,and e is a particular edgeof G. Which of the following statements about the minimum spanning trees (MSTs) of G is/are TRUE? <br>\nI. If e is the lightest edge of some cycle in G, then every MST of G includes e <br>\nII. If e is the heaviest edge of some cycle in G, then every MST of G excludes e <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>both I and II</p>",
            "<b>D.</b> <p>neither I nor II</p>"
          ],
          "correct_answer": "<b>B.</b> <p>II only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/39727/gate2016-1-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 74,
          "question": "<p>Let G be a complete undirected graph on 4 vertices, having 6 edges  with weights being 1,2,3,4,5, and 6. The maximum possible weight that a minimum weight spanning tree of G can haveis . <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39725/gate2016-1-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 75,
          "question": "<p>Consider the weighted undirected graph with 4 vertices,where the weigh to edge {i, j} is given by the entry Wij in the matrix W. <br> \\(W=\\begin{bmatrix} 0 &amp; 2&amp;8 &amp; 5\\\\ 2&amp; 0&amp; 5 &amp;8 \\\\ 8 &amp; 5 &amp; 0&amp; x\\\\ 5&amp;8 &amp; x&amp;0 \\end{bmatrix}\\) <br>The largest possible integer value of x, for which at least one shortest path between some pair\nof vertices will contain the edge with weight x is ____. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "12",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39731/gate2016-1-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 76,
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
          "id": 77,
          "question": "<p>Let G be a weighted connected undirected graph with distinct positive edge weights. If every edge weight is increasedby the same value ,then which of the following statements is/are TRUE?<br>\nP: Minimum spanning tree of G does not change <br>\nQ: Shortest path between any pair of vertices does not change <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P only</p>",
            "<b>B.</b> <p>Q only</p>",
            "<b>C.</b> <p>Neither P nor Q</p>",
            "<b>D.</b> <p>Both P and Q</p>"
          ],
          "correct_answer": "<b>A.</b> <p>P only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39673/gate2016-1-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 78,
          "question": "<p>The worst case running times of Insertion sort, Mergesort and Quicksort, respectively, are: <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta\\)(n logn), \\(\\Theta\\)(n logn), and \\(\\Theta(n^{2})\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (n^{2}),\\Theta(n^{2}), and \\Theta (n logn)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (n^{2}),\\Theta(n logn), and \\Theta (n logn)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (n^{2}),\\Theta(n logn), and \\Theta (n^{2})\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\Theta (n^{2}),\\Theta(n logn), and \\Theta (n^{2})\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/39660/gate2016-1-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 79,
          "question": "<p>Consider the following directed graph: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q11_81240da5.jpg\"> <br>\nThe number of different topological orderings of the vertices of the graph is <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39669/gate2016-1-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 80,
          "question": "<p>If one uses straight two-way merge sort algorithm to sort the following elements in ascending order:<br>20, 47, 15, 8, 9, 4, 40, 30, 12, 17<br>then the order of these elements after second pass of the algorithm is: <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8, 9, 15, 20, 47, 4, 12, 17, 30, 40</p>",
            "<b>B.</b> <p>8, 15, 20, 47, 4, 9, 30, 40, 12, 17</p>",
            "<b>C.</b> <p>15, 20, 47, 4, 8, 9, 12, 30, 40, 17</p>",
            "<b>D.</b> <p>4, 8, 9, 15, 20, 47, 12, 17, 30, 40</p>"
          ],
          "correct_answer": "<b>B.</b> <p>8, 15, 20, 47, 4, 9, 30, 40, 12, 17</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1467/gate1999-1-14-isro2015-42\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 81,
          "question": "<p>The number of spanning trees for a complete graph with seven vertices is <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(2^{5}\\)</p>",
            "<b>B.</b> <p>\\(7^{5}\\)</p>",
            "<b>C.</b> <p>\\(3^{5}\\)</p>",
            "<b>D.</b> <p>\\(2^{2 \\times 5}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(7^{5}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/48555/isro2015-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 82,
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
          "id": 83,
          "question": "<p>A machine needs a minimum of 100 sec to sort 1000 names by quick sort. The minimum time needed to sort 100 names will be approximately <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>50.2 sec</p>",
            "<b>B.</b> <p>6.7 sec</p>",
            "<b>C.</b> <p>72.7 sec</p>",
            "<b>D.</b> <p>11.2 sec</p>"
          ],
          "correct_answer": "<b>B.</b> <p>6.7 sec</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/10595/isro2015-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 84,
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
          "id": 85,
          "question": "<p>Let G be a connected undirected graph of 100 vertices and 300 edges. The weight of a minimum spanning tree of G is 500. When the weight of each edge of G is increased by five, the weight of a minimum spanning tree becomes ________. <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "995",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8499/gate2015-3-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 86,
          "question": "<p>Language \\(L_{1}\\) is polynomial time reducible to language \\(L_{2}\\). Language \\(L_{3}\\) is polynomial time reducible to \\(L_{2}\\), which in turn is polynomial time reducible to language \\(L_{4}\\). Which of the following is/are true?<br> I. if \\(L_{4} \\in P\\), then \\(L_{2} \\in P\\)<br>\nII. if \\(L_{1} \\in P\\) or \\(L_{3} \\in P\\), then \\(L_{2} \\in P\\) <br>     III. \\(L_{1} \\in P\\), if and only if \\(L_{3} \\in P\\)<br>   IV. if \\(L_{4} \\in P\\), then \\(L_{1} \\in P\\) and \\(L_{3} \\in P\\) <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>II only</p>",
            "<b>B.</b> <p>III only</p>",
            "<b>C.</b> <p>I and IV only</p>",
            "<b>D.</b> <p>I only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>I and IV only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8562/gate2015-3-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 87,
          "question": "<p>Assume that a mergesort algorithm in the worst case takes 30 seconds for an input of size 64. Which of the following most closely approximates the maximum input size of a problem that can be solved in 6 minutes? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>256</p>",
            "<b>B.</b> <p>512</p>",
            "<b>C.</b> <p>1024</p>",
            "<b>D.</b> <p>2048</p>"
          ],
          "correct_answer": "<b>B.</b> <p>512</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8480/gate2015-3-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 88,
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
          "id": 89,
          "question": "<p>Suppose you are provided with the following function declaration in the C programming language.<br><br> int partition(int a[ ], int n); <br><br> The function treats the first element of a[] as a pivot, and rearranges the array so that all elements less than or equal to the pivot is in the left part of the array, and all elements greater than the pivot is in the right part. In addition, it moves the pivot so that the pivot is the last element of the left part. The return value is the number of elements in the left part. <br>\nThe following partially given function in the C programming language is used to find the \\( k^{th}\\) smallest element in an array a[ ] of size n using the partition function. We assume \\( k \\leq n\\)<pre><code>  int kth_smallest(int a[], int n, int k)\n{\n    int left_end = partition(a,n);\n    if ( left_end+1 == k ){\n         return a[left_end];\n    }\n    if ( left_end+1 &gt; k ){\n         return kth_smallest( ________ );\n    } else {\n         return kth_smallest( ________ );\n    }\n} </code></pre><br> The missing argument lists are respectively <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(a, left_end, k) and (a+left_end+1, n-left_end-1, k-left_end-1)</p>",
            "<b>B.</b> <p>(a, left_end, k) and (a, n-left_end-1, k-left_end-1)</p>",
            "<b>C.</b> <p>(a+left_end+1, n-left_end-1, k-left_end-1) and (a, left_end, k)</p>",
            "<b>D.</b> <p>(a, n-left_end-1, k-left_end-1) and (a, left_end, k)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>(a, left_end, k) and (a+left_end+1, n-left_end-1, k-left_end-1)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8243/gate2015-2-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 90,
          "question": "<p>A Young tableau is a 2D array of integers increasing from left to right and from top to bottom. Any unfilled entries are marked with \\(\\infty\\), and hence there cannot be any entry to the right of, or below a \\(\\infty\\). The following Young tableau consists of unique entries.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q38_a55a5118.jpg\"><br> When an element is removed from a Young tableau, other elements should be moved into its place so that the resulting table is still a Young tableau (unfilled entries may be filled in with a \\(\\infty\\)). The minimum number of entries (other than 1) to be shifted, to remove 1 from the given Young tableau is _______. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8148/gate2015-2-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 91,
          "question": "<p>Given below are some algorithms, and some algorithm design paradigms.\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q37_6178654c.jpg\"><br>\nMatch the above algorithms on the left to the corresponding design paradigm they follow. <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1-i, 2-iii, 3-i, 4-v.</p>",
            "<b>B.</b> <p>1-iii, 2-iii, 3-i, 4-v</p>",
            "<b>C.</b> <p>1-iii, 2-ii, 3-i, 4-iv</p>",
            "<b>D.</b> <p>1-iii, 2-ii, 3-i, 4-v.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>1-iii, 2-ii, 3-i, 4-iv</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8161/gate2015-2-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 92,
          "question": "<p>Consider two decision problems Q1,Q2 such that Q1 reduces in polynomial time to 3-SAT and 3-SAT reduces in polynomial time to Q2. Then which one of the following is consistent with the above statement? <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Q1 is in NP, Q2 is NP hard.</p>",
            "<b>B.</b> <p>Q2 is in NP, Q1 is NP hard</p>",
            "<b>C.</b> <p>Both Q1 and Q2 are in NP .</p>",
            "<b>D.</b> <p>Both Q1 and Q2 are NP hard</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Q1 is in NP, Q2 is NP hard.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8048/gate2015-2-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 93,
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
          "id": 94,
          "question": "<p>The graph shown below has 8 edges with distinct integer edge weights. The minimum spanning tree (MST) is of weight 36 and contains the edges: {(A, C), (B, C), (B, E), (E, F), (D, F)}. The edge weights of only those edges which are in the MST are given in the figure shown below. The minimum possible sum of weights of all 8 edges of this graph is ___________. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q53_b563227e.jpg\"> <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "69",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8313/gate2015-1-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 95,
          "question": "<p>Let G = (V, E) be a simple undirected graph, and s be a particular vertex in it called the source. For \\(x \\in V\\), let d(x) denote the shortest distance in G from s to x. A breadth first search (BFS) is performed starting at s. Let T be the resultant BFS tree. If (u,v) is an edge of G that is not in T, then which one of the following CANNOT be the value of d(u)-d(v)? <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>-1</p>",
            "<b>B.</b> <p>0</p>",
            "<b>C.</b> <p>1</p>",
            "<b>D.</b> <p>2</p>"
          ],
          "correct_answer": "<b>D.</b> <p>2</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8321/gate2015-1-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 96,
          "question": "<p>Which one of the following is the recurrence equation for the worst case time complexity of the Quicksort algorithm for sorting n ( \\(\\geq\\)2) numbers? In the recurrence equations given in the options below, c is a constant. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T(n)=2T(n/2)+cn</p>",
            "<b>B.</b> <p>T(n)=T(n-1)+T(1)+cn</p>",
            "<b>C.</b> <p>T(n)=2T(n-1)+cn</p>",
            "<b>D.</b> <p>T(n)=T(n/2)+cn</p>"
          ],
          "correct_answer": "<b>B.</b> <p>T(n)=T(n-1)+T(1)+cn</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8017/gate2015-1-4#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 97,
          "question": "<p>Match the following:\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q3_33b11b5a.jpg\"> <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P-iii, Q-ii, R-iv, S-i</p>",
            "<b>B.</b> <p>P-i, Q-ii, R-iv, S-iii</p>",
            "<b>C.</b> <p>P-ii, Q-iii, R-iv, S-i</p>",
            "<b>D.</b> <p>P-ii, Q-i, R-iii, S-iv</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P-ii, Q-iii, R-iv, S-i</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8088/gate2015-1-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 98,
          "question": "<p>Consider the following sorting algorithms.<br>I.\nQuicksort<br>II.  Heapsort<br>III&gt; Mergesort<br>Which of them perform in least time in the worst case? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II only</p>",
            "<b>B.</b> <p>II and III only</p>",
            "<b>C.</b> <p>III only</p>",
            "<b>D.</b> <p>I, II and III</p>"
          ],
          "correct_answer": "<b>B.</b> <p>II and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55014/isro2014-62\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 99,
          "question": "<p>Consider the decision problem 2CNFSAT defined as follows: <br>\n{ \\(\\phi\\) | \\(\\phi\\)  is a satisfiable propositional formula in CNF with at most two literal per clause} <br>\nFor example, \\(\\phi =(x_{1} \\vee x_{2}) \\wedge (x_{1}  \\vee \\bar{x_{3}}) \\wedge (x_{2}  \\vee x_{4})\\) is a Boolean formula and it is in 2CNFSAT. <br> The decision problem 2CNFSAT is <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>NP-Complete</p>",
            "<b>B.</b> <p>solvable in polynomial time by reduction to directed graph reachability.</p>",
            "<b>C.</b> <p>solvable in constant time since any input instance is satisfiable</p>",
            "<b>D.</b> <p>NP-hard, but not NP-complete</p>"
          ],
          "correct_answer": "<b>B.</b> <p>solvable in polynomial time by reduction to directed graph reachability.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2072/gate2014-3-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 100,
          "question": "<p>Suppose you want to move from 0 to 100 on the number line. In each step, you either move right by a unit distance or you take a shortcut. A shortcut is simply a pre-specified pair of integers i,j with \\(i \\lt j\\). Given a shortcut i, j if you are at position i on the number line, you may directly move to j. Suppose T(k) denotes the smallest number of steps needed to move from k to 100. suppose further that there is at most 1 shortcut involving any number, and in particular from 9 there is a shortcut to 15. Let y and z be such that T(9) = 1 + min(T(y), T(z)). Then the value of the product yz is_______. <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "150",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2071/gate2014-3-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 101,
          "question": "<p>You have an array of n elements. Suppose you implement quick sort by always choosing the central element of the array as the pivot. Then the tightest upper bound for the worst case performance is <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O(n^{2})\\)</p>",
            "<b>B.</b> <p>\\(O(n logn)\\)</p>",
            "<b>C.</b> <p>\\(\\theta (n logn)\\)</p>",
            "<b>D.</b> <p>\\(O(n^{3})\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(O(n^{2})\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2048/gate2014-3-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 102,
          "question": "<p>Suppose depth first search is executed on the graph below starting at some unknown vertex. Assume that a recursive call to visit a vertex is made only after first checking that the vertex has not been visited earlier. Then the maximum possible recursion depth (including the initial call) is _________.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q13_494e6aeb.jpg\"> <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "19",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2047/gate2014-3-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 103,
          "question": "<p>The number of distinct minimum spanning trees for the weighted graph below is  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q52_d03ffa26.jpg\"> <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2019/gate2014-2-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 104,
          "question": "<p>Suppose P, Q, R, S, T are sorted sequences having lengths 20, 24, 30, 35, 50 respectively.\nThey are to be merged into a single sequence by merging together two sequences at a time.\nThe number of comparisons that will be needed in the worst case by the optimal algorithm for doing this is ____. <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "358",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1997/gate2014-2-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 105,
          "question": "<p>Consider two strings A=\"qpqrr\" and B=\"pqprqrp\". Let x be the length of the longest\ncommon subsequence (not necessarily contiguous) between A and B and let y be the number\nof such longest common subsequences between A and B. Then x + 10y = ___. <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "34",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1996/gate2014-2-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 106,
          "question": "<p>Consider the tree arcs of a BFS traversal from a source node W in an unweighted, connected,\nundirected graph. The tree T formed by the tree arcs is a data structure for computing <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the shortest path between every pair of vertices</p>",
            "<b>B.</b> <p>the shortest path from W to every vertex in the graph.</p>",
            "<b>C.</b> <p>the shortest paths from W to only those nodes that are leaves of T.</p>",
            "<b>D.</b> <p>the longest path in the graph.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>the shortest path from W to every vertex in the graph.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1969/gate2014-2-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 107,
          "question": "<p>Which one of the following correctly determines the solution of the recurrence relation with\nT(1) = 1? <br> \\(T(n)=2T(\\frac{n}{2})+logn\\) <br><br><strong>(GATE CSE 2014 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\theta (n)\\)</p>",
            "<b>B.</b> <p>\\(\\theta (n logn)\\)</p>",
            "<b>C.</b> <p>\\(\\theta (n^{2})\\)</p>",
            "<b>D.</b> <p>\\(\\theta (log n)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\theta (n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1968/gate2014-2-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 108,
          "question": "<p>The minimum number of comparisons required to find the minimum and the maximum of\n100 numbers is _________________. <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "147.1",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1917/gate2014-1-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 109,
          "question": "<p>Suppose a polynomial time algorithm is discovered that correctly computes the largest clique\nin a given graph. In this scenario, which one of the following represents the correct Venn\ndiagram of the complexity classes P, NP and NP Complete (NPC)?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q38a_1c6d1507.jpg\"> <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A</p>",
            "<b>B.</b> <p>B</p>",
            "<b>C.</b> <p>C</p>",
            "<b>D.</b> <p>D</p>"
          ],
          "correct_answer": "<b>D.</b> <p>D</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1916/gate2014-1-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 110,
          "question": "<p>Let P be a quick sort program to sort numbers in ascending order using the first element as\nthe pivot. Let t1 and t2 be the number of comparisons made by P for the inputs [1 2 3 4\n5] and [4 1 5 3 2] respectively. Which one of the following holds? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(t_{1}=5\\)</p>",
            "<b>B.</b> <p>\\(t_{1} \\lt t_{2}\\)</p>",
            "<b>C.</b> <p>\\(t_{1} \\gt t_{2}\\)</p>",
            "<b>D.</b> <p>\\(t_{1}=t_{2}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(t_{1} \\gt t_{2}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1780/gate2014-1-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 111,
          "question": "<p>Let G be a graph with n vertices and m edges. What is the tightest upper bound on the\nrunning time of Depth First Search on G, when G is represented as an adjacency matrix? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (n)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (n+m)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (n^{2})\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (m^{2})\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\Theta (n^{2})\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1771/gate2014-1-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 112,
          "question": "<p>Which of the following sorting algorithms has the minimum running time complexity in the best and average case? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Insertion sort, Quick sort</p>",
            "<b>B.</b> <p>Quick sort, Quick sort</p>",
            "<b>C.</b> <p>Quick sort, Insertion sort</p>",
            "<b>D.</b> <p>Insertion sort, Insertion sort</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Insertion sort, Quick sort</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43802/isro-2013-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 113,
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
          "id": 114,
          "question": "<p>The number of elements that can be sorted in \\(\\Theta (log n)\\) time using heap sort is <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (1)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (\\sqrt{logn})\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (\\frac{log n}{log log n})\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (log n)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\Theta (\\frac{log n}{log log n})\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1541/gate2013-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 115,
          "question": "<p>What is the time complexity of Bellman-Ford single-source shortest path algorithm on a complete\ngraph of n vertices? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (n^{2})\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (n^{2} log n)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (n^{3})\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (n^{3} log n)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\Theta (n^{3})\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1441/gate2013-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 116,
          "question": "<p>Which of the following statements are TRUE? <br>\n1. The problem of determining whether there exists a cycle in an undirected graph is in P. <br>\n2. The problem of determining whether there exists a cycle in an undirected graph is in NP. <br>\n3. If a problem A is NP-Complete, there exists a non-deterministic polynomial time algorithm\nto solve A. <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1, 2 and 3</p>",
            "<b>B.</b> <p>1 and 2 only</p>",
            "<b>C.</b> <p>2 and 3 only</p>",
            "<b>D.</b> <p>1 and 3 only</p>"
          ],
          "correct_answer": "<b>A.</b> <p>1, 2 and 3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1440/gate2013-18#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 117,
          "question": "<p>Which one of the following is the tightest upper bound that represents the number of swaps\nrequired to sort n numbers using selection sort? <br><br><strong>(GATE CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O(log n)</p>",
            "<b>B.</b> <p>O(n)</p>",
            "<b>C.</b> <p>O(n log n)</p>",
            "<b>D.</b> <p>\\(O(n^{2})\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>O(n)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1415/gate2013-6#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 118,
          "question": "<p>Consider the directed graph shown in the figure below. There are multiple shortest paths between\nvertices S and T. Which one will be reported by Dijkstra's shortest path algorithm? Assume that, in\nany iteration, the shortest path to a vertex v is updated only when a strictly shorter path to v is\ndiscovered <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q40_17a15b5c.jpg\"> <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>SDT</p>",
            "<b>B.</b> <p>SBDT</p>",
            "<b>C.</b> <p>SACDT</p>",
            "<b>D.</b> <p>SACET</p>"
          ],
          "correct_answer": "<b>D.</b> <p>SACET</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1765/gate2012-40#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 119,
          "question": "<p>A list of n strings, each of length n, is sorted into lexicographic order using the merge-sort\nalgorithm. The worst case running time of this computation is <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O (n log n)</p>",
            "<b>B.</b> <p>O (\\(n^{2} log n\\))</p>",
            "<b>C.</b> <p>O (\\(n^{2}+ log n\\))</p>",
            "<b>D.</b> <p>O (\\(n^{2}\\))</p>"
          ],
          "correct_answer": "<b>B.</b> <p>O (\\(n^{2} log n\\))</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1762/gate2012-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 120,
          "question": "<p>Let G be a weighted graph with edge weights greater than one and G' be the graph constructed by\nsquaring the weights of edges in G. Let T and T' be the minimum spanning trees of G and G',\nrespectively, with total weights t and t'. Which of the following statements is TRUE? <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T' = T with total weight  \\(t' = t^{2}\\)</p>",
            "<b>B.</b> <p>T' = T with total weight  \\(t' \\lt  t^{2}\\)</p>",
            "<b>C.</b> <p>T' \\(\\neq\\) T but total weight  \\(t' = t^{2}\\)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of the above</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/786/gate2012-29#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 121,
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
          "id": 122,
          "question": "<p>The recurrence relation capturing the optimal execution time of the Towers of Hanoi problem with n discs is <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T(n) = 2T(n - 2) + 2</p>",
            "<b>B.</b> <p>T(n) = 2T(n - 1) + n</p>",
            "<b>C.</b> <p>T(n) = 2T(n/2) + 1</p>",
            "<b>D.</b> <p>T(n) = 2T(n - 1) + 1</p>"
          ],
          "correct_answer": "<b>D.</b> <p>T(n) = 2T(n - 1) + 1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/48/gate2012-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 123,
          "question": "<p>Assuming P \\(\\neq\\) NP, which of the following is TRUE? <br><br><strong>(GATE CSE 2012)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>NP-complete = NP</p>",
            "<b>B.</b> <p>NP-complete \\(\\cap\\) P = \\(\\phi\\)</p>",
            "<b>C.</b> <p>NP-hard = NP</p>",
            "<b>D.</b> <p>P = NP-complete</p>"
          ],
          "correct_answer": "<b>B.</b> <p>NP-complete \\(\\cap\\) P = \\(\\phi\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/36/gate2012-4#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 124,
          "question": "<p>Which of the following algorithm design technique is used in merge sort? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Greedy method</p>",
            "<b>B.</b> <p>Backtracking</p>",
            "<b>C.</b> <p>Dynamic programming</p>",
            "<b>D.</b> <p>Divide and Conquer</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Divide and Conquer</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52859/isro2011-66\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 125,
          "question": "<p>Let \\(T(n)\\) be defined by \\(T(1)=10\\) and \\(T(n+1)=2n+T(n)\\) for all integers \\(n \\geq 1\\). Which of the following  represents the order of growth of \\(T(n)\\) as a function of n? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O(n)\\)</p>",
            "<b>B.</b> <p>\\(O(n \\log n)\\)</p>",
            "<b>C.</b> <p>\\(O(n^2)\\)</p>",
            "<b>D.</b> <p>\\(O(n^3)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(O(n^2)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/47492/isro2011-56\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 126,
          "question": "<p>Which one of the following in place sorting algorithms needs the minimum number of swaps? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Quick sort</p>",
            "<b>B.</b> <p>Insertion sort</p>",
            "<b>C.</b> <p>Selection sort</p>",
            "<b>D.</b> <p>Heap sort</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Selection sort</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/975/gate2006-14-isro2011-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 127,
          "question": "<p>An undirected graph G(V, E) contains n (n\\(&gt;\\)2) nodes named v1 , v2 ,...,vn. Two nodes vi , vj are connected if and only if 0\\(\\lt \\)|i-j|\\(\\leq\\)2.  Each edge (vi,vj ) is assigned a weight i+j. A sample graph with n=4 is shown below. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q52_bdf780ad.jpg\"> <br>The length of the path from v5 to v6 in the MST of previous question with n = 10 is <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>11</p>",
            "<b>B.</b> <p>25</p>",
            "<b>C.</b> <p>31</p>",
            "<b>D.</b> <p>41</p>"
          ],
          "correct_answer": "<b>C.</b> <p>31</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43325/gate2011-55#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 128,
          "question": "<p>An undirected graph G(V, E) contains n (n\\(&gt;\\)2) nodes named v1 , v2 ,...,vn. Two nodes vi , vj are connected if and only if 0\\(\\lt \\)|i-j|\\(\\leq\\)2.  Each edge (vi,vj ) is assigned a weight i+j. A sample graph with n=4 is shown below. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q52_bdf780ad.jpg\"> <br> What will be the cost of the minimum spanning tree (MST) of such a graph with n nodes? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\frac{1}{12}(11n^{2}-5n)\\)</p>",
            "<b>B.</b> <p>\\(n^{2}-n+1\\)</p>",
            "<b>C.</b> <p>6n-11</p>",
            "<b>D.</b> <p>2n+1</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(n^{2}-n+1\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2162/gate2011-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 129,
          "question": "<p>Four matrices M1, M2, M3 and M4 are dimensions p x q, q x r, r x s and s x t\nrespectively can be multiplied in several ways with different number of total\nscalar multiplications. For example When multiplied as \\(((M_{1} \\times  M_{2})\\times (M_{3}\\times M_{4})\\) the total number of scalar multiplications is pqr+rst+prt. When multiplied as \\((((M_{1}\\times M_{2})\\times M_{3})\\times M_{4})\\) , the total number of scalar multiplications is pqr+prs+pst.\nIf p=10, q=100, r=20, s=5 and t=80, then the minimum number of scalar\nmultiplications needed is <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>248000</p>",
            "<b>B.</b> <p>44000</p>",
            "<b>C.</b> <p>19000</p>",
            "<b>D.</b> <p>25000</p>"
          ],
          "correct_answer": "<b>C.</b> <p>19000</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2140/gate2011-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 130,
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
          "id": 131,
          "question": "<p>An algorithm to find the length of the longest monotonically increasing sequence of numbers in an array A[0 :n-1] is given below. <br>\nLet Li denote the length of the longest monotonically increasing sequence starting at index i in the array <br>\n<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q12_7de407b3.jpg\"> <br>Which of the following statements is TRUE? <br><br><strong>(GATE CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The algorithm uses dynamic programming paradigm</p>",
            "<b>B.</b> <p>The algorithm has a linear complexity and uses branch and bound paradigm</p>",
            "<b>C.</b> <p>The algorithm has a non-linear polynomial complexity and uses branch and\nbound paradigm</p>",
            "<b>D.</b> <p>The algorithm uses divide and conquer paradigm.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The algorithm uses dynamic programming paradigm</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2127/gate2011-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 132,
          "question": "<p>Consider a complete undirected graph with vertex set {0, 1, 2, 3, 4}. Entry \\(W_{ij}\\) in\nthe matrix W below is the weight of the edge {i, j}. <br><br>\\(\\begin{pmatrix} 0&amp;1 &amp; 8 &amp; 1 &amp;4 \\\\ 1&amp; 0 &amp; 12 &amp; 4 &amp; 9\\\\ 8 &amp; 12 &amp; 0 &amp; 7 &amp; 3\\\\ 1&amp; 4&amp; 7 &amp; 0 &amp;2 \\\\ 4&amp; 9 &amp; 3&amp; 2 &amp;0 \\end{pmatrix}\\)<br><br>What is the minimum possible weight of a path P from vertex 1 to vertex 2 in this\ngraph such that P contains at most 3 edges? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>7</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>9</p>",
            "<b>D.</b> <p>10</p>"
          ],
          "correct_answer": "<b>B.</b> <p>8</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43328/gate2010-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 133,
          "question": "<p>Consider a complete undirected graph with vertex set {0, 1, 2, 3, 4}. Entry \\(W_{ij}\\) in\nthe matrix W below is the weight of the edge {i, j}. <br><br>\\(\\begin{pmatrix} 0&amp;1 &amp; 8 &amp; 1 &amp;4 \\\\ 1&amp; 0 &amp; 12 &amp; 4 &amp; 9\\\\ 8 &amp; 12 &amp; 0 &amp; 7 &amp; 3\\\\ 1&amp; 4&amp; 7 &amp; 0 &amp;2 \\\\ 4&amp; 9 &amp; 3&amp; 2 &amp;0 \\end{pmatrix}\\)<br><br>What is the minimum possible weight of a spanning tree T in this graph such that\nvertex 0 is a leaf node in the tree T? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>7</p>",
            "<b>B.</b> <p>8</p>",
            "<b>C.</b> <p>9</p>",
            "<b>D.</b> <p>10</p>"
          ],
          "correct_answer": "<b>D.</b> <p>10</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2355/gate2010-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 134,
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
          "id": 135,
          "question": "<p>A sub-sequence of a given sequence is just the given sequence with some\nelements (possibly none or all) left out. We are given two sequences X[m] and\nY[n] of lengths m and n, respectively, with indexes of X and Y starting from 0. <br><br>We wish to find the length of the longest common sub-sequence (LCS) of x[m] and Y[n] as l(m,n), where an incomplete recursive definition for the function l(i,j) to compute the length of the LCS of x[m] and Y[n] is given below:<br><pre><code>l(i, j) = 0, if either i=0 or j=0\nl(i, j) = expr1, if i,j&gt;0 and x [i-1] = Y [j -1]\nl(i, j) = expr2, if i,j&gt;0 and x [i-1] != Y [j -1]</code></pre>The values of l(i,j) could be obtained by dynamic programming based on the\ncorrect recursive definition of l(i,j) of the form given above, using an array\nL[M,N], where M = m+1 and N=n+1, such that L[i,j] = l(i,j). <br><br>\nWhich one of the following statements would be TRUE regarding the dynamic\nprogramming solution for the recursive definition of l(i,j)? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>All elements L should be initialized to 0 for the values of l(i,j) to be properly computed.</p>",
            "<b>B.</b> <p>The values of l(i,j) may be computed in a row major order or column major order of L(M,N).</p>",
            "<b>C.</b> <p>The values of l(i,j) cannot be computed in either row major order or column\nmajor order of L(M,N).</p>",
            "<b>D.</b> <p>L[p,q] needs to be computed before L[r,s] if either p<r or=\"\" q<s.<=\"\" div=\"\"></r></p>"
          ],
          "correct_answer": "<b>B.</b> <p>The values of l(i,j) may be computed in a row major order or column major order of L(M,N).</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43476/gate2009-54#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 136,
          "question": "<p>A sub-sequence of a given sequence is just the given sequence with some\nelements (possibly none or all) left out. We are given two sequences X[m] and\nY[n] of lengths m and n, respectively, with indexes of X and Y starting from 0. <br><br>We wish to find the length of the longest common sub-sequence (LCS) of x[m] and Y[n] as l(m,n), where an incomplete recursive definition for the function l(i,j) to compute the length of the LCS of x[m] and Y[n] is given below:<pre><code> l(i, j) 0, if either i=0 or j=0\n= expr1, if i,j&gt;0 and x [i-1] Y [j -1]\n= expr2, if i,j&gt;0 and x [i-1] Y [j -1]</code></pre>\nWhich one of the following options is correct? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>expr1 = l(i-1, j) + 1</p>",
            "<b>B.</b> <p>expr1 = l(i, j-1)</p>",
            "<b>C.</b> <p>expr2 = max (l(i-1, j), l(i,j-1))</p>",
            "<b>D.</b> <p>expr2 = max(l(i-1, j-1), l(i,j))</p>"
          ],
          "correct_answer": "<b>C.</b> <p>expr2 = max (l(i-1, j), l(i,j-1))</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1338/gate2009-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 137,
          "question": "<p>In quick sort, for sorting n elements, the (n/4)th smallest element is selected as\npivot using an O(n) time algorithm. What is the worst case time complexity of the quick sort? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\theta (n)\\)</p>",
            "<b>B.</b> <p>\\(\\theta (n logn)\\)</p>",
            "<b>C.</b> <p>\\(\\theta (n^{2})\\)</p>",
            "<b>D.</b> <p>\\(\\theta (n^{2} logn)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\theta (n logn)\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1325/gate2009-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 138,
          "question": "<p>Consider the following graph: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q38_4d6aca33.jpg\"> <br>Which one of the following is NOT the sequence of edges added to the minimum spanning tree using Kruskal's algorithm? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(b,e) (e,f) (a,c) (b,c) (f,g) (c,d)</p>",
            "<b>B.</b> <p>(b,e) (e,f) (a,c) (f,g) (b,c) (c,d)</p>",
            "<b>C.</b> <p>(b,e) (a,c) (e,f) (b,c) (f,g) (c,d)</p>",
            "<b>D.</b> <p>(b,e) (e,f) (b,c) (a,c) (f,g) (c,d)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>(b,e) (e,f) (b,c) (a,c) (f,g) (c,d)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1324/gate2009-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 139,
          "question": "<p>The running time of an algorithm is represented by the following recurrence relation:<br> \\(T(n)=\\left\\{\\begin{matrix} n &amp; n\\leq 3\\\\ T(\\frac{n}{3})+cn&amp; otherwise \\end{matrix}\\right.\\) <br> Which one of the following represents the time complexity of the algorithm? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\theta\\)(n)</p>",
            "<b>B.</b> <p>\\(\\theta\\)(n log n)</p>",
            "<b>C.</b> <p>\\(\\theta (n^{2})\\)</p>",
            "<b>D.</b> <p>\\(\\theta (n^{2} logn)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\theta\\)(n)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1321/gate2009-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 140,
          "question": "<p>Let \\(\\pi _{A}\\) be a problem that belongs to the class NP. Then which one of the following is TRUE? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>There is no polynomial time algorithm for \\(\\pi _{A}\\).</p>",
            "<b>B.</b> <p>If \\(\\pi _{A}\\) can be solved deterministically in polynomial time, then P = NP.</p>",
            "<b>C.</b> <p>If \\(\\pi _{A}\\) is NP-hard, then it is NP-complete.</p>",
            "<b>D.</b> <p>\\(\\pi _{A}\\) may be undecidable</p>"
          ],
          "correct_answer": "<b>C.</b> <p>If \\(\\pi _{A}\\) is NP-hard, then it is NP-complete.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1306/gate2009-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 141,
          "question": "<p>Which of the following statement(s) is/are correct regarding Bellman-Ford\nshortest path algorithm?<br><br>\nP. Always finds a negative weighted cycle, if one exists. <br>\nQ. Finds whether any negative weighted cycle is reachable from the source. <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P only</p>",
            "<b>B.</b> <p>Q only</p>",
            "<b>C.</b> <p>both P and Q</p>",
            "<b>D.</b> <p>Neither P nor Q</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Q only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1305/gate2009-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 142,
          "question": "<p>What is the number of swaps required to sort n elements using selection sort, in the worst case? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\theta (n)\\)</p>",
            "<b>B.</b> <p>\\(\\theta (n logn)\\)</p>",
            "<b>C.</b> <p>\\(\\theta (n^{2})\\)</p>",
            "<b>D.</b> <p>\\(\\theta (n^{2} logn)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\theta (n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1303/gate2009-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 143,
          "question": "<p>How many comparisons are needed to sort an array of length 5 if a straight selection sort is used  and array is already in the opposite order? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>10</p>",
            "<b>C.</b> <p>15</p>",
            "<b>D.</b> <p>20</p>"
          ],
          "correct_answer": "<b>B.</b> <p>10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17268/isro2008-77\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 144,
          "question": "<p>Which one of the following algorithm design techniques is used in finding all pairs of shortest distances in a graph? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Dynamic programming</p>",
            "<b>B.</b> <p>Backtracking</p>",
            "<b>C.</b> <p>Greedy</p>",
            "<b>D.</b> <p>Divide and Conquer</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Dynamic programming</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1658/gate1998-1-21-isro2008-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 145,
          "question": "<p>Consider the following sequence of nodes for the undirected graph given below:<br>\n1.a b e f d g c<br>\n2.a b e f c g d<br>\n3.a d g e b c f<br>\n4.a d b c g e f<br>\nA Depth First Search (DFS) is started at node a. The nodes are listed in the order they are first visited. Which of the above is/are possible output(s)?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q47_3d5ab5a5.jpg\"><br> <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1 and 3 only</p>",
            "<b>B.</b> <p>2 and 3 only</p>",
            "<b>C.</b> <p>2, 3 and 4 only</p>",
            "<b>D.</b> <p>1, 2 and 3 only</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2 and 3 only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3357/gate2008-it-47\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 146,
          "question": "<p>For the undirected, weighted graph given below, which of the following sequences of edges represents a correct execution of Prim's algorithm to construct a Minimum Span?ning Tree?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q45_f6cfd604.jpg\"><br> <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(a, b), (d, f), (f, c), (g, i), (d, a), (g, h), (c, e), (f, h)</p>",
            "<b>B.</b> <p>(c, e), (c, f), (f, d), (d, a), (a, b), (g, h), (h, f), (g, i)</p>",
            "<b>C.</b> <p>(d, f), (f, c), (d, a), (a, b), (c, e), (f, h), (g, h), (g, i)</p>",
            "<b>D.</b> <p>(h, g), (g, i), (h, f), (f, c), (f, d), (d, a), (a, b), (c, e)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>(d, f), (f, c), (d, a), (a, b), (c, e), (f, h), (g, h), (g, i)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3355/gate2008-it-45\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 147,
          "question": "<p>When \\(n=2^{2 k}\\) for some \\(k \\geqslant 0\\), the recurrence relation \\(T(n)=\\sqrt{(} 2) T(n / 2)+\\sqrt{n}, T(1)=1\\)<br> evaluates to : <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\sqrt{(} n)(\\log n+1)\\)</p>",
            "<b>B.</b> <p>\\(\\sqrt{(} n) \\log n\\)</p>",
            "<b>C.</b> <p>\\(\\sqrt{(} n) \\log \\sqrt{(} n)\\)</p>",
            "<b>D.</b> <p>\\(n \\log \\sqrt{n}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\sqrt{(} n)(\\log n+1)\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3354/gate2008-it-44\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 148,
          "question": "<p>If we use Radix Sort to sort n integers in the range \\(\\left (n^{k/2}, n^k \\right )\\), for some k&gt;0 which is independent of n, the time taken would be? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta(n)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta(kn)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta(n \\log n)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta(n^2)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\Theta(n \\log n)\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3353/gate2008-it-43\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 149,
          "question": "<p>For problems X and Y, Y is NP-complete and X reduces to Y in polynomial time. Which of the following is TRUE? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>If X can be solved in polynomial time, then so can Y</p>",
            "<b>B.</b> <p>X is NP-complete</p>",
            "<b>C.</b> <p>X is NP-hard</p>",
            "<b>D.</b> <p>X is in NP, but not necessarily NP-complete</p>"
          ],
          "correct_answer": "<b>D.</b> <p>X is in NP, but not necessarily NP-complete</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3271/gate2008-it-11\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 150,
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
          "id": 151,
          "question": "<p>The subset-sum problem is defined as follows. Given a set of n positive integers,\nS={\\(a_{1},a_{2},...,a_{n}\\)} and positive integer W, is there a subset of S whose\nelements sum to W? A dynamic program for solving this problem uses a\n2-dimensional Boolean array, X, with n rows and W+1 columns.  X[i,j], \\(1\\leq i\\leq n\\), \\(0\\leq j \\leq W\\), is TRUE if and only if there is a subset of {\\(a_{1},a_{2},...,a_{i} \\)}whose elements sum to j.  <br> <br> Which entry of the array X, if TRUE, implies that there is a subset whose\nelements sum to W? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>X[1,W]</p>",
            "<b>B.</b> <p>X[n,0]</p>",
            "<b>C.</b> <p>X[n,W]</p>",
            "<b>D.</b> <p>X[n-1,n]</p>"
          ],
          "correct_answer": "<b>C.</b> <p>X[n,W]</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43484/gate2008-81#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 152,
          "question": "<p>The subset-sum problem is defined as follows. Given a set of n positive integers,\nS={\\(a_{1},a_{2},...,a_{n}\\)} and positive integer W, is there a subset of S whose\nelements sum to W? A dynamic program for solving this problem uses a\n2-dimensional Boolean array, X, with n rows and W+1 columns.  X[i,j], \\(1\\leq i\\leq n\\), \\(0\\leq j \\leq W\\), is TRUE if and only if there is a subset of {\\(a_{1},a_{2},...,a_{i} \\)}whose elements sum to j. <br> <br> Which of the following is valid for \\(2\\leq i\\leq n\\) and \\(a_{i} \\leq j \\leq W\\)? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(X[i,j]=X[i-1,j]\\vee X[i,j-a_{i}]\\)</p>",
            "<b>B.</b> <p>\\(X[i,j]=X[i-1,j]\\vee X[i-1,j-a_{i}]\\)</p>",
            "<b>C.</b> <p>\\(X[i,j]=X[i-1,j]\\wedge X[i,j-a_{i}]\\)</p>",
            "<b>D.</b> <p>\\(X[i,j]=X[i-1,j]\\wedge X[i-1,j-a_{i}]\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(X[i,j]=X[i-1,j]\\vee X[i-1,j-a_{i}]\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/498/gate2008-80#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 153,
          "question": "<p>Let \\(x_{n}\\) denote the number of binary strings of length n that contain no consecutive 0s. <br> <br>The value of \\(x_{5}\\) is <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5</p>",
            "<b>B.</b> <p>7</p>",
            "<b>C.</b> <p>13</p>",
            "<b>D.</b> <p>16</p>"
          ],
          "correct_answer": "<b>C.</b> <p>13</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/43485/gate2008-79#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 154,
          "question": "<p>Let \\(x_{n}\\) denote the number of binary strings of length n that contain no consecutive 0s. <br> <br>Which of the following recurrences does \\(x_{n}\\) satisfy? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(x_{n}=2x_{n-1}\\)</p>",
            "<b>B.</b> <p>\\(x_{n}=x_{\\left \\lfloor n/2 \\right \\rfloor}+1\\)</p>",
            "<b>C.</b> <p>\\(x_{n}=x_{\\left \\lfloor n/2 \\right \\rfloor}+n\\)</p>",
            "<b>D.</b> <p>\\(x_{n}=x_{n-1}+x_{n-2}\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(x_{n}=x_{n-1}+x_{n-2}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/497/gate2008-78#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 155,
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
          "id": 156,
          "question": "<p><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q45_821c052a.jpg\">  <br> Dijkstra's single source shortest path algorithm when run from vertex a in the\nabove graph, computes the correct shortest path distance to <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>only vertex a</p>",
            "<b>B.</b> <p>only vertices a, e, f, g, h</p>",
            "<b>C.</b> <p>only vertices a, b, c, d</p>",
            "<b>D.</b> <p>all the vertices</p>"
          ],
          "correct_answer": "<b>D.</b> <p>all the vertices</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/457/gate2008-45#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 157,
          "question": "<p>The subset-sum problem is defined as follows: Given a set S of n positive\nintegers and a positive integer W, determine whether there is a subset of S\nWhose elements sum to W. <br>\nAn algorithm Q solves this problem in O(nW) time. Which of the following\nstatements is false? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Q solves the subset-sum problem in polynomial time when the input is\nencoded in unary</p>",
            "<b>B.</b> <p>Q solves the subset-sum problem in polynomial time when the input is\nencoded in binary</p>",
            "<b>C.</b> <p>The subset sum problem belongs to the class NP</p>",
            "<b>D.</b> <p>The subset sum problem is NP-hard</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Q solves the subset-sum problem in polynomial time when the input is\nencoded in binary</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/456/gate2008-44#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 158,
          "question": "<p>Consider the Quicksort algorithm. Suppose there is a procedure for finding a pivot element which splits the list into two sub-lists each of which contains at least one-fifth of the elements. Let T(n) be the number of comparisons required to sort n elements. Then <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T(n)\\leq 2T (n/5)+n\\)</p>",
            "<b>B.</b> <p>\\(T(n)\\leq T (n/5)+T(4n/5)+n\\)</p>",
            "<b>C.</b> <p>\\(T(n)\\leq 2T (4n/5)+n\\)</p>",
            "<b>D.</b> <p>\\(T(n)\\leq 2T (n/2)+n\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(T(n)\\leq T (n/5)+T(4n/5)+n\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/455/gate2008-43#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 159,
          "question": "<p>G is a graph on n vertices and 2n-2 edges. The edges of G can be partitioned into\ntwo edge-disjoint spanning trees. Which of the following is NOT true for G? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>For every subset of k vertices, the induced subgraph has at most 2k-2 edges</p>",
            "<b>B.</b> <p>The minimum cut in G has at least two edges</p>",
            "<b>C.</b> <p>There are two edge-disjoint paths between every pair of vertices</p>",
            "<b>D.</b> <p>There are two vertex-disjoint paths between every pair of vertices</p>"
          ],
          "correct_answer": "<b>D.</b> <p>There are two vertex-disjoint paths between every pair of vertices</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1872/gate2008-42#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 160,
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
          "id": 161,
          "question": "<p>The Breadth First Search algorithm has been implemented using the queue data\nstructure. One possible order of visiting the nodes of the following graph is <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q19_8b840044.jpg\"> <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>MNOPQR</p>",
            "<b>B.</b> <p>NQMPOR</p>",
            "<b>C.</b> <p>QMNPRO</p>",
            "<b>D.</b> <p>QMNPOR</p>"
          ],
          "correct_answer": "<b>C.</b> <p>QMNPRO</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/417/gate2008-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 162,
          "question": "<p>The most efficient algorithm for finding the number of connected components in\nan undirected graph on n vertices and m edges has time complexity <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (n)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (m)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta (m+n)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (mn)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(\\Theta (m+n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/405/gate2008-7#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 163,
          "question": "<p>Djikstra's algorithm is used to <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Create LSAs</p>",
            "<b>B.</b> <p>Flood an internet with information</p>",
            "<b>C.</b> <p>Calculate the routing tables</p>",
            "<b>D.</b> <p>Create a link state database</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Calculate the routing tables</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49651/isro2007-80\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 164,
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
          "id": 165,
          "question": "<p>The average case and worst case complexities for Merge sort algorithm are <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O (n^2), O  (n^2)\\)</p>",
            "<b>B.</b> <p>\\(O  (n^2), O (n \\log_2 n)\\)</p>",
            "<b>C.</b> <p>\\(O (n \\log_2 n), O  (n^2)\\)</p>",
            "<b>D.</b> <p>\\(O(n \\log_2 n), O (n \\log_2 n)\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(O(n \\log_2 n), O (n \\log_2 n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49624/isro2007-58\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 166,
          "question": "<p>Selection sort algorithm design technique is an example of <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Greedy method</p>",
            "<b>B.</b> <p>Divide-and-conquer</p>",
            "<b>C.</b> <p>Dynamic Programming</p>",
            "<b>D.</b> <p>Backtracking</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Greedy method</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49537/isro2007-55\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 167,
          "question": "<p>Consider a job scheduling problem with 4 jobs \\(J_1, J_2, J_3\\) and \\(J_4\\) with corresponding deadlines: \\((d_1, d_2, d_3, d_4) = (4, 2, 4, 2)\\). Which of the following is not a feasible schedule without violating any job schedule? <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(J_2, J_4, J_1, J_3\\)</p>",
            "<b>B.</b> <p>\\(J_4, J_1, J_2, J_3\\)</p>",
            "<b>C.</b> <p>\\(J_4, J_2, J_1, J_3\\)</p>",
            "<b>D.</b> <p>\\(J_4, J_2, J_3, J_1\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(J_4, J_1, J_2, J_3\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49483/isro2007-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 168,
          "question": "<p>Consider n jobs \\(J_1, J_2 \\dots J_n\\) such that job \\(J_i\\) has execution time \\(t_i\\) and a non-negative integer weight \\(w_i\\). The weighted mean completion time of the jobs is defined to be \\(\\frac{\\sum_{i=1}^{n}w_iT_i}{\\sum_{i=1}^{n}w_i}\\), where \\(T_i\\) is the completion time of job \\(J_i\\). Assuming that there is only one processor available, in what order must the jobs be executed in order to minimize the weighted mean completion time of the jobs? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Non-decreasing order of \\(t_i\\)</p>",
            "<b>B.</b> <p>Non-increasing order of \\(w_i\\)</p>",
            "<b>C.</b> <p>Non-increasing order of \\(w_it_i\\)</p>",
            "<b>D.</b> <p>Non-increasing order of \\(w_i/t_i\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Non-increasing order of \\(w_i/t_i\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3459/gate2007-it-26\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 169,
          "question": "<p>What is the largest integer m such that every simple connected graph with n vertices and n edges contains at least m different spanning trees ? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>n</p>"
          ],
          "correct_answer": "<b>C.</b> <p>3</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3458/gate2007-it-25\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 170,
          "question": "<p>A depth-first search is performed on a directed acyclic graph. Let d[u] denote the time at which vertex u is visited for the first time and f[u] the time at which the DFS call to the vertex u terminates. Which of the following statements is always TRUE for all edges (u, v) in the graph ? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>d[u] &lt; d[v]</p>",
            "<b>B.</b> <p>d[u] &lt; f[v]</p>",
            "<b>C.</b> <p>f[u] &lt; f[v]</p>",
            "<b>D.</b> <p>f[u] &gt; f[v]</p>"
          ],
          "correct_answer": "<b>D.</b> <p>f[u] &gt; f[v]</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3457/gate2007-it-24\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 171,
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
          "id": 172,
          "question": "<p>Consider a weighted, undirected graph with positive edge weights and let \\(uv\\) be an edge in the graph. It is known that the shortest path from the source vertex \\(s\\) to \\(u\\) has weight 53 and the shortest path from \\(s\\) to \\(v\\) has weight 65. Which one of the following statements is always TRUE? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Weight \\((u,v) \\leq 12\\)</p>",
            "<b>B.</b> <p>Weight (u,v) = 12</p>",
            "<b>C.</b> <p>Weight \\((u,v) \\geq 12\\)</p>",
            "<b>D.</b> <p>Weight (u,v) &gt; 12</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Weight \\((u,v) \\geq 12\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3434/gate2007-it-3-ugcnet-june2012-iii-34\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 173,
          "question": "<p>Suppose that a robot is placed on the Cartesian plane. At each step it is allowed to move either one unit up or one unit right, i.e., if it is at (i,j) then it can move to either (i+1,j) or (i,j+1).  <br> <br> Suppose that the robot is not allowed to traverse the line segment from (4,4) to\n(5,4). With this constraint, how many distinct paths are there for the robot to\nreach (10,10) starting from (0,0)? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(2^{9}\\)</p>",
            "<b>B.</b> <p>\\(2^{19}\\)</p>",
            "<b>C.</b> <p>\\(\\begin{pmatrix} 8\\\\ 4 \\end{pmatrix}*\\begin{pmatrix} 11\\\\ 5 \\end{pmatrix}\\)</p>",
            "<b>D.</b> <p>\\(\\begin{pmatrix} 20\\\\ 10 \\end{pmatrix}-\\begin{pmatrix} 8\\\\ 4 \\end{pmatrix}*\\begin{pmatrix} 11\\\\ 5 \\end{pmatrix}\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\begin{pmatrix} 20\\\\ 10 \\end{pmatrix}-\\begin{pmatrix} 8\\\\ 4 \\end{pmatrix}*\\begin{pmatrix} 11\\\\ 5 \\end{pmatrix}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43509/gate2007-85#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 174,
          "question": "<p>Suppose that a robot is placed on the Cartesian plane. At each step it is allowed to move either one unit up or one unit right, i.e., if it is at (i,j) then it can move to either (i+1,j) or (i,j+1).  <br> <br> How many distinct paths are there for the robot to reach the point (10,10)\nstarting from the initial position (0,0)? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\begin{pmatrix} 20\\\\ 10 \\end{pmatrix}\\)</p>",
            "<b>B.</b> <p>\\(2^{20}\\)</p>",
            "<b>C.</b> <p>\\(2^{10}\\)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\begin{pmatrix} 20\\\\ 10 \\end{pmatrix}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1275/gate2007-84#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 175,
          "question": "<p>Suppose the letters a, b, c, d, e, f have probabilities 1/2, 1/4, 1/8, 1/16, 1/32, 1/32 respectively.  <br><br>What is the average length of  the Huffman code for the letters a,b,c,d,e,f? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>2.1875</p>",
            "<b>C.</b> <p>2.25</p>",
            "<b>D.</b> <p>1.9375</p>"
          ],
          "correct_answer": "<b>D.</b> <p>1.9375</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/43513/gate2007-77#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 176,
          "question": "<p>Suppose the letters a, b, c, d, e, f have probabilities 1/2, 1/4, 1/8, 1/16, 1/32, 1/32 respectively. <br><br>Which of the following is the Huffman code for the letter a, b, c, d, e, f? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>0, 10, 110, 1110, 11110, 11111</p>",
            "<b>B.</b> <p>11, 10, 011, 010, 001, 000</p>",
            "<b>C.</b> <p>11, 10, 01, 001, 0001, 0000</p>",
            "<b>D.</b> <p>110, 100, 010, 000, 001, 111</p>"
          ],
          "correct_answer": "<b>A.</b> <p>0, 10, 110, 1110, 11110, 11111</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1271/gate2007-76#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 177,
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
          "id": 178,
          "question": "<p>Let w be the minimum weight among all edge weights in an undirected connected\ngraph. Let e be a specific edge of weight w . Which of the following is FALSE? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>There is a minimum spanning tree containing e.</p>",
            "<b>B.</b> <p>If e is not in a minimum spanning tree T, then in the cycle formed by adding\ne to T, all edges have the same weight.</p>",
            "<b>C.</b> <p>Every minimum spanning tree has an edge of weight w .</p>",
            "<b>D.</b> <p>e is present in every minimum spanning tree.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>e is present in every minimum spanning tree.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1247/gate2007-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 179,
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
          "id": 180,
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
          "id": 181,
          "question": "<p>In an unweighted, undirected connected graph, the shortest path from a node S\nto every other node is computed most efficiently, in terms of time complexity, by <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Dijkstra's algorithm starting from S.</p>",
            "<b>B.</b> <p>Warshall's algorithm</p>",
            "<b>C.</b> <p>Performing a DFS starting from S.</p>",
            "<b>D.</b> <p>Performing a BFS starting from S.</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Performing a BFS starting from S.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1239/gate2007-41#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 182,
          "question": "<p>Which of the following sorting algorithms has the lowest worst-case complexity? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Merge sort</p>",
            "<b>B.</b> <p>Bubble sort</p>",
            "<b>C.</b> <p>Quick sort</p>",
            "<b>D.</b> <p>Selection sort</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Merge sort</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1212/gate2007-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 183,
          "question": "<p>Consider the DAG with V = {1,2,3,4,5,6}, shown below. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q5_a742cce6.jpg\"><br> Which of the following is NOT a topological ordering? <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1 2 3 4 5 6</p>",
            "<b>B.</b> <p>1 3 2 4 5 6</p>",
            "<b>C.</b> <p>1 3 2 4 6 5</p>",
            "<b>D.</b> <p>3 2 4 1 6 5</p>"
          ],
          "correct_answer": "<b>D.</b> <p>3 2 4 1 6 5</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/31821/gate2007-5#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 184,
          "question": "<p>The characters a to h have the set of frequencies based on the first 8 Fibonacci numbers as follows <br>\na:1, b:1, c:2, d:3, e:5, f:8, g:13, h:21<br>\nA Huffman code is used to represent the characters. What is the sequence of characters corresponding to the following code?<br>\n110111100111010 <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>fdheg</p>",
            "<b>B.</b> <p>ecgdf</p>",
            "<b>C.</b> <p>dchfg</p>",
            "<b>D.</b> <p>fehdg</p>"
          ],
          "correct_answer": "<b>A.</b> <p>fdheg</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3591/gate2006-it-48\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 185,
          "question": "<p>Consider the depth-first-search of an undirected graph with 3 vertices P, Q, and R. Let discovery time d(u) represent the time instant when the vertex u is first visited, and finish time f(u) represent the time instant when the vertex u is last visited. Given that<br>\n\\(\\begin{array}{l|l}\\hline \\text{$d(P) = 5$ units } &amp; \\text{ $f(P) = 12$ units } \\\\\\hline \\text{$d(Q) = 6$ units} &amp; \\text{ $f(Q) = 10$ units} \\\\\\hline \\text{$d(R) = 14$ unit} &amp; \\text{$f(R) = 18$ units} \\\\\\hline \\end{array}\\)<br>\nWhich one of the following statements is TRUE about the graph? <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>There is only one connected component</p>",
            "<b>B.</b> <p>There are two connected components, and P and R are connected</p>",
            "<b>C.</b> <p>There are two connected components, and Q and R are connected</p>",
            "<b>D.</b> <p>There are two connected components, and P and Q are connected</p>"
          ],
          "correct_answer": "<b>D.</b> <p>There are two connected components, and P and Q are connected</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3590/gate2006-it-47\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 186,
          "question": "<p>A problem in NP is NP-complete if <br><br><strong>(GATE IT 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>it can be reduced to the 3-SAT problem in polynomial time</p>",
            "<b>B.</b> <p>the 3-SAT problem can be reduced to it in polynomial time</p>",
            "<b>C.</b> <p>it can be reduced to any other problem in NP in polynomial time</p>",
            "<b>D.</b> <p>some problem in NP can be reduced to it in polynomial time</p>"
          ],
          "correct_answer": "<b>B.</b> <p>the 3-SAT problem can be reduced to it in polynomial time</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3549/gate2006-it-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 187,
          "question": "<p>The median of n elements can be found in O(n) time. Which one of the following\nis correct about the complexity of quick sort, in which median is selected as pivot? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\theta\\)(n)</p>",
            "<b>B.</b> <p>\\(\\theta\\)(nlogn)</p>",
            "<b>C.</b> <p>\\(\\theta (n^{2})\\)</p>",
            "<b>D.</b> <p>\\(\\theta (n^{3})\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\theta\\)(nlogn)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1830/gate2006-52#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 188,
          "question": "<p>Consider the following recurrence: <br>\nT(n)=2T(\\(\\left \\lceil \\sqrt{n} \\right \\rceil\\))+ 1,  T(1) = 1 <br>\nWhich one of the following is true? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T(n)=\\(\\Theta\\)(loglogn)</p>",
            "<b>B.</b> <p>T(n)=\\(\\Theta\\)(logn)</p>",
            "<b>C.</b> <p>T(n)=\\(\\Theta (\\sqrt{n})\\)</p>",
            "<b>D.</b> <p>T(n)=\\(\\Theta\\)(n)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>T(n)=\\(\\Theta\\)(logn)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1829/gate2006-51#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 189,
          "question": "<p>Let T be a depth first search tree in a undirected graph G Vertices u and v are\nleaves of this tree T. The degrees of both u and v in G are at least 2. Which one\nof the following statements is true? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>There must exist a vertex w adjacent to both u and v in G</p>",
            "<b>B.</b> <p>There must exist a vertex w whose removal disconnects u and v in G</p>",
            "<b>C.</b> <p>There must be exist a cycle in G containing u and v</p>",
            "<b>D.</b> <p>There must exist a cycle in G containing u and all its neighbours in G</p>"
          ],
          "correct_answer": "<b>D.</b> <p>There must exist a cycle in G containing u and all its neighbours in G</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1824/gate2006-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 190,
          "question": "<p>Consider the following graph: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q47_564dc013.jpg\"><br> Which one of the following cannot be the sequence of edges added, in that order, to a minimum spanning tree using Kruskal's algorithm? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(a - b),(d - f),(b - f).( d - c),(d - e)</p>",
            "<b>B.</b> <p>(a - b),(d - f),(d - c),(b - f),(d - e)</p>",
            "<b>C.</b> <p>(d - f),(a - b),(d - c),(b - f),(d - e)</p>",
            "<b>D.</b> <p>(d - f),(a - b),(b - f),(d - e),(d - c)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>(d - f),(a - b),(b - f),(d - e),(d - c)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1823/gate2006-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 191,
          "question": "<p>Let S be an NP-complete problem Q and R be two other problems not known to\nbe in NP. Q is polynomial-time reducible to S and S is polynomial-time reducible\nto R. Which one of the following statements is true? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>R is NP-complete</p>",
            "<b>B.</b> <p>R is NP-hard</p>",
            "<b>C.</b> <p>Q is NP-complete</p>",
            "<b>D.</b> <p>Q is NP-hard</p>"
          ],
          "correct_answer": "<b>B.</b> <p>R is NP-hard</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/977/gate2006-16#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 192,
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
          "id": 193,
          "question": "<p>Which one the following in place sorting algorithms needs the minimum number\nof swaps? <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Quick-sort</p>",
            "<b>B.</b> <p>Insertion sort</p>",
            "<b>C.</b> <p>Selection sort</p>",
            "<b>D.</b> <p>Heap sort</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Selection sort</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/975/gate2006-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 194,
          "question": "<p>To implement Dijkstra's shortest path algorithm on unweighted graphs so that it\nruns in linear time, then data structure to be used is <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Queue</p>",
            "<b>B.</b> <p>Stack</p>",
            "<b>C.</b> <p>Heap</p>",
            "<b>D.</b> <p>B-Tree</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Queue</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/891/gate2006-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 195,
          "question": "<p>Consider a weighted complete graph G on the vertex set {\\(v_{1},v_{2},...,v_{n}\\)} such that the weight of the edge (\\(v_{i},v_{j}\\)) is 2|i-j|. The weight of a minimum spanning tree <br><br><strong>(GATE CSE 2006)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n-1</p>",
            "<b>B.</b> <p>2n-2</p>",
            "<b>C.</b> <p>\\(\\binom{n}{2}\\)</p>",
            "<b>D.</b> <p>\\(n^{2}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2n-2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/890/gate2006-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 196,
          "question": "<p>Let \\(G\\) be a directed graph whose vertex set is the set of numbers from 1 to 100. There is an edge from a vertex \\(i\\) to a vertex \\(j\\) iff either \\(j = i + 1\\) or \\(j = 3i\\). The minimum number of edges in a path in G from vertex 1 to vertex 100 is <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>4</p>",
            "<b>B.</b> <p>7</p>",
            "<b>C.</b> <p>23</p>",
            "<b>D.</b> <p>99</p>"
          ],
          "correct_answer": "<b>B.</b> <p>7</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3817/gate2005-it-56\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 197,
          "question": "<p>Let G be a weighted undirected graph and e be an edge with maximum weight in G. Suppose there is a minimum weight spanning tree in G containing the edge e. Which of the following statements is always TRUE? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>There exists a cutset in G having all edges of maximum weight.</p>",
            "<b>B.</b> <p>There exists a cycle in G having all edges of maximum weight.</p>",
            "<b>C.</b> <p>Edge e cannot be contained in a cycle.</p>",
            "<b>D.</b> <p>All edges in G have the same weight</p>"
          ],
          "correct_answer": "<b>A.</b> <p>There exists a cutset in G having all edges of maximum weight.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3813/gate2005-it-52\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 198,
          "question": "<p>Let T(n) be a function defined by the recurrence <br>\n\\(T(n) = 2T(n/2) + \\sqrt n \\text{   for }n \\geq 2\\) and <br>\n\\(T(1) = 1\\)<br>\nWhich of the following statements is TRUE? <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T(n) = \\Theta(\\log n)\\)</p>",
            "<b>B.</b> <p>\\(T(n) = \\Theta(\\sqrt n)\\)</p>",
            "<b>C.</b> <p>\\(T(n) = \\Theta(n)\\)</p>",
            "<b>D.</b> <p>\\(T(n) = \\Theta(n \\log n)\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(T(n) = \\Theta(n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3812/gate2005-it-51\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 199,
          "question": "<p>In the following table, the left column contains the names of standard graph algorithms and the right column contains the time complexities of the algorithms. Match each algorithm with its time complexity.<br>\n\\(\\begin{array}{|ll|ll|}\\hline \\text{1.} &amp; \\text{Bellman-Ford algorithm} &amp; \\text{A:} &amp; \\text{$O(m\\log n)$} \\\\\\hline \\text{2.} &amp; \\text{Kruskal's algorithm} &amp; \\text{B:}&amp; \\text{$O(n^3)$} \\\\\\hline \\text{3.}&amp; \\text{Floyd-Warshall algorithm} &amp; \\text{C:} &amp; \\text{$O(nm)$} \\\\\\hline \\text{4.} &amp; \\text{Topological sorting} &amp;\\text{D:} &amp; \\text{$O(n+m)$} \\\\\\hline \\end{array}\\) <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1\\(\\rightarrow\\) C, 2 \\(\\rightarrow\\) A, 3 \\(\\rightarrow\\) B, 4 \\(\\rightarrow\\) D</p>",
            "<b>B.</b> <p>1\\(\\rightarrow\\) B, 2 \\(\\rightarrow\\) D, 3 \\(\\rightarrow\\) C, 4 \\(\\rightarrow\\) A</p>",
            "<b>C.</b> <p>1\\(\\rightarrow\\) C, 2 \\(\\rightarrow\\) D, 3 \\(\\rightarrow\\) A, 4 \\(\\rightarrow\\) B</p>",
            "<b>D.</b> <p>1\\(\\rightarrow\\) B, 2 \\(\\rightarrow\\) A, 3 \\(\\rightarrow\\) C, 4 \\(\\rightarrow\\) D</p>"
          ],
          "correct_answer": "<b>A.</b> <p>1\\(\\rightarrow\\) C, 2 \\(\\rightarrow\\) A, 3 \\(\\rightarrow\\) B, 4 \\(\\rightarrow\\) D</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3760/gate2005-it-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 200,
          "question": "<p>In a depth-first traversal of a graph G with n vertices, k edges are marked as tree edges. The number of connected components in G is <br><br><strong>(GATE IT 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>k</p>",
            "<b>B.</b> <p>k+1</p>",
            "<b>C.</b> <p>n-k-1</p>",
            "<b>D.</b> <p>n-k</p>"
          ],
          "correct_answer": "<b>D.</b> <p>n-k</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3759/gate2005-it-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 201,
          "question": "<p>We are given 9 tasks T1, T2... T9. The execution of each task requires one unit of time. We can execute one task at a time. Each task Ti has a profit Pi and a deadline di Profit Pi is earned if the task is completed before the end of the dith unit of time.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q87_3ccdd455.jpg\"> <br> What is the maximum profit earned? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>147</p>",
            "<b>B.</b> <p>165</p>",
            "<b>C.</b> <p>167</p>",
            "<b>D.</b> <p>175</p>"
          ],
          "correct_answer": "<b>A.</b> <p>147</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/82514/gate2005-88#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 202,
          "question": "<p>We are given 9 tasks T1, T2... T9. The execution of each task requires one unit of time. We can execute one task at a time. Each task Ti has a profit Pi and a deadline di Profit Pi is earned if the task is completed before the end of the dith unit of time.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q87_3ccdd455.jpg\"> <br> Are all tasks completed in the schedule that gives maximum profit? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>All tasks are completed</p>",
            "<b>B.</b> <p>T1 and T6 are left out</p>",
            "<b>C.</b> <p>T1 and T8 are left out</p>",
            "<b>D.</b> <p>T4 and T6 are left out</p>"
          ],
          "correct_answer": "<b>D.</b> <p>T4 and T6 are left out</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1406/gate2005-87#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 203,
          "question": "<p>Let s and t be two vertices in a undirected graph G=(V, E) having distinct positive edge weights. Let [X, Y] be a partition of V such that s\\(\\in\\)X and t\\(\\in\\)Y. Consider the edge e having the minimum weight amongst all those edges that have one vertex in X and one vertex in Y. <br><br> Let the weight of an edge e denote the congestion on that edge. The congestion on a path is defined to be the maximum of the congestions on the edges of the path. We wish to find the path from s to t having minimum congestion. Which one of the following paths is always such a path of minimum congestion? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>a path from s to t in the minimum weighted spanning tree</p>",
            "<b>B.</b> <p>a weighted shortest path from s to t</p>",
            "<b>C.</b> <p>an Euler walk from s to t</p>",
            "<b>D.</b> <p>a Hamiltonian path from s to t</p>"
          ],
          "correct_answer": "<b>A.</b> <p>a path from s to t in the minimum weighted spanning tree</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/82129/gate2005-84#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 204,
          "question": "<p>Let s and t be two vertices in a undirected graph G=(V, E) having distinct positive edge weights. Let [X, Y] be a partition of V such that s\\(\\in\\)X and t\\(\\in\\)Y. Consider the edge e having the minimum weight amongst all those edges that have one vertex in X and one vertex in Y. <br><br> The edge e must definitely belong to: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the minimum weighted spanning tree of G</p>",
            "<b>B.</b> <p>the weighted shortest path from s to t</p>",
            "<b>C.</b> <p>each path from s to t</p>",
            "<b>D.</b> <p>the weighted longest path from s to t</p>"
          ],
          "correct_answer": "<b>A.</b> <p>the minimum weighted spanning tree of G</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1404/gate2005-83#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 205,
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
          "id": 206,
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
          "id": 207,
          "question": "<p>Consider the following two problems on undirected graphs: <br><br>\n\\(\\alpha\\) : Given G(V,E), does G have an independent set of size |V|-4? <br>\n\\(\\beta\\) : Given G(V,E), does G have an independent set of size 5?<br><br>\nWhich one of the following is TRUE? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\alpha\\) is in P and \\(\\beta\\) is NP-complete</p>",
            "<b>B.</b> <p>\\(\\alpha\\) is NP-complete and \\(\\beta\\) is in P</p>",
            "<b>C.</b> <p>Both \\(\\alpha\\) and \\(\\beta\\) are NP-complete</p>",
            "<b>D.</b> <p>Both \\(\\alpha\\) and \\(\\beta\\) are in P</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Both \\(\\alpha\\) and \\(\\beta\\) are NP-complete</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1381/gate2005-58#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 208,
          "question": "<p>Let G(V,E) be an undirected graph with positive edge weights. Dijkstra's single source shortest path algorithm can be implemented using the binary heap data structure with time complexity: <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O(\\(|V|^{2}\\))</p>",
            "<b>B.</b> <p>O(|E| + |V|log|V|)</p>",
            "<b>C.</b> <p>O(|V|log|V|)</p>",
            "<b>D.</b> <p>O((|E| + |V|) log |V|)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>O((|E| + |V|) log |V|)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1374/gate2005-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 209,
          "question": "<p>Suppose \\(T (n) = 2T(n/2) + n, \\) T(0)=T(1)=1  <br>\nWhich one of the following is FALSE? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T(n)=O(\\(n^{2}\\))</p>",
            "<b>B.</b> <p>T(n)=\\(\\Theta\\)(n log n)</p>",
            "<b>C.</b> <p>T(n)=\\(\\Omega (n^{2}\\))</p>",
            "<b>D.</b> <p>T(n)=O(n log n)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>T(n)=\\(\\Omega (n^{2}\\))</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1373/gate2005-37#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 210,
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
          "id": 211,
          "question": "<p>An undirected graph G has n nodes. Its adjacency matrix is given by an nxn square matrix whose <br> (i) diagonal elements are 0's and <br> (ii) non-diagonal elements are 1's. <br> which one of the following is TRUE? <br><br><strong>(GATE CSE 2005)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Graph G has no minimum spanning tree (MST)</p>",
            "<b>B.</b> <p>Graph G has a unique MST of cost n-1</p>",
            "<b>C.</b> <p>Graph G has multiple distinct MSTs, each of cost n-1</p>",
            "<b>D.</b> <p>Graph G has multiple spanning trees of different costs</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Graph G has multiple distinct MSTs, each of cost n-1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1348/gate2005-6#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 212,
          "question": "<p>Consider a list of recursive algorithms and a list of recurrence relations as shown below. Each recurrence relation corresponds to exactly one algorithm and is used to derive the time complexity of the algorithm.<br><br>\n\\(\\begin{array}{|l|l|l|l|}\\hline \\text{} &amp; \\textbf{Recursive Algorithm } &amp; \\text{} &amp; \\textbf{Recurrence Relation} \\\\\\hline \\text{P} &amp; \\text{Binary search} &amp; \\text{l.} &amp; \\text{$T(n) = T(n-k) +T(k) +cn$} \\\\\\hline \\text{Q.} &amp; \\text{Merge sort} &amp;\\text{ll.} &amp; \\text{$T(n) = 2T(n-1) + 1$ }\\\\\\hline\\text{R.} &amp; \\text{Quick sort}&amp; \\text{lll.} &amp; \\text{$T(n) = 2T(n/2) + cn$}\\\\\\hline \\text{S.} &amp; \\text{Tower of Hanoi} &amp; \\text{lV.} &amp; \\text{$T(n) = T(n/2) + 1$} \\\\\\hline \\end{array}\\)<br><br>Which of the following is the correct match between the algorithms and their recurrence relations? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P-II, Q-III, R-IV, S-I</p>",
            "<b>B.</b> <p>P-IV, Q-III, R-I, S-II</p>",
            "<b>C.</b> <p>P-III, Q-II, R-IV, S-I</p>",
            "<b>D.</b> <p>P-IV, Q-II, R-I, S-III</p>"
          ],
          "correct_answer": "<b>B.</b> <p>P-IV, Q-III, R-I, S-II</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3700/gate2004-it-57\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 213,
          "question": "<p>Consider the undirected graph below:<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q56_2af842fc.jpg\"><br>Using Prim's algorithm to construct a minimum spanning tree starting with node A, which one of the following sequences of edges represents a possible order in which the edges would be added to construct the minimum spanning tree? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>(E, G), (C, F), (F, G), (A, D), (A, B), (A, C)</p>",
            "<b>B.</b> <p>(A, D), (A, B), (A, C), (C, F), (G, E), (F, G)</p>",
            "<b>C.</b> <p>(A, B), (A, D), (D, F), (F, G), (G, E), (F, C)</p>",
            "<b>D.</b> <p>(A, D), (A, B), (D, F), (F, C), (F, G), (G, E)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>(A, D), (A, B), (D, F), (F, C), (F, G), (G, E)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3699/gate2004-it-56\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 214,
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
          "id": 215,
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
          "id": 216,
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
          "id": 217,
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
          "id": 218,
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
          "id": 219,
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
          "id": 220,
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
          "id": 221,
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
          "id": 222,
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
          "id": 223,
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
          "id": 224,
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
          "id": 225,
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
          "id": 226,
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
          "id": 227,
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
          "id": 228,
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
        },
        {
          "id": 229,
          "question": "<p>Ram and Shyam have been asked to show that a certain problem P is NPcomplete.\nRam shows a polynomial time reduction from the 3-SAT problem to P\n, and Shyam shows a polynomial time reduction from P to 3-SAT. Which of the\nfollowing can be inferred from these reduction? <br><br><strong>(GATE CSE 2003)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P is NP-hard but not NP-complete</p>",
            "<b>B.</b> <p>P is in NP, but is not NP-complete</p>",
            "<b>C.</b> <p>P is NP-complete</p>",
            "<b>D.</b> <p>P is neither Np-hard, nor in NP</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P is NP-complete</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/903/gate2003-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 230,
          "question": "<p>The running time of the following algorithm <br><br>\nProcedure A(n)<br>\nIf n \\(\\leq\\) 2 return (1) else return (A(\\(\\sqrt{n}\\))); <br><br> is best discribed by <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O(n)</p>",
            "<b>B.</b> <p>O(log n)</p>",
            "<b>C.</b> <p>O(loglogn)</p>",
            "<b>D.</b> <p>O(1)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>O(loglogn)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/841/gate2002-2-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 231,
          "question": "<p>The solution to the recurrence equation \\(T(2^{k})=3T(2^{k-1})+1,T(1)=1\\) is <br><br><strong>(GATE CSE 2002)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(2^{k}\\)</p>",
            "<b>B.</b> <p>\\(\\frac{3^{k+1}-1}{2}\\)</p>",
            "<b>C.</b> <p>\\(3^{log_{2}^{k}}\\)</p>",
            "<b>D.</b> <p>\\(2^{log_{3}^{k}}\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(\\frac{3^{k+1}-1}{2}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/807/gate2002-1-3#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 232,
          "question": "<p>Let G be an undirected graph. Consider a depth-first traversal of G, and let T be the resulting depth-first search tree. Let u be a vertex in G and let v be the first new (unvisited) vertex visited after visiting u in the traversal. Which of the following statement is always true? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>u, v must be an edge in G, and u is a descendant of v in T</p>",
            "<b>B.</b> <p>u, v must be an edge in G, and v is a descendant of u in T</p>",
            "<b>C.</b> <p>If u, v is not an edge in G then u is a leaf in T</p>",
            "<b>D.</b> <p>If u, v is not an edge in G then u and v must have the same parent in T</p>"
          ],
          "correct_answer": "<b>C.</b> <p>If u, v is not an edge in G then u is a leaf in T</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/4208/gate2000-2-19\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 233,
          "question": "<p>Let G be an undirected connected graph with distinct edge weights. Let \\(e_{max}\\) be the edge with maximum weight and \\(e_{min}\\) the edge with minimum weight. Which of the following statements is false? <br><br><strong>(GATE CSE 2000)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Every minimum spanning tree of G must contain \\(e_{min}\\)</p>",
            "<b>B.</b> <p>If \\(e_{max}\\) is in a minimum spanning tree, then its removal must disconnect G</p>",
            "<b>C.</b> <p>No minimum spanning tree contains \\(e_{max}\\)</p>",
            "<b>D.</b> <p>G has a unique minimum spanning tree</p>"
          ],
          "correct_answer": "<b>C.</b> <p>No minimum spanning tree contains \\(e_{max}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/665/gate2000-2-18\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 234,
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
          "id": 235,
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
          "id": 236,
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
          "id": 237,
          "question": "<p>The minimum number of record movements required to merge five files A (with 10 records), B (with 20 records), C (with 15 records), D (with 5 records) and E (with 25 records) is: <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>165</p>",
            "<b>B.</b> <p>90</p>",
            "<b>C.</b> <p>75</p>",
            "<b>D.</b> <p>65</p>"
          ],
          "correct_answer": "<b>A.</b> <p>165</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/466/gate1999-2-20\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 238,
          "question": "<p>If n is a power of 2, then the minimum number of multiplications needed to compute \\(a^n\\) is <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\log_2 n\\)</p>",
            "<b>B.</b> <p>\\(\\sqrt n\\)</p>",
            "<b>C.</b> <p>n-1</p>",
            "<b>D.</b> <p>n</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\log_2 n\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1469/gate1999-1-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 239,
          "question": "<p>If one uses straight two-way merge sort algorithm to sort the following elements in ascending order:<br>\n20, 47, 15, 8, 9, 4, 40, 30, 12, 17<br>\nthen the order of these elements after second pass of the algorithm is: <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8, 9, 15, 20, 47, 4, 12, 17, 30, 40</p>",
            "<b>B.</b> <p>8, 15, 20, 47, 4, 9, 30, 40, 12, 17</p>",
            "<b>C.</b> <p>15, 20, 47, 4, 8, 9, 12, 30, 40, 17</p>",
            "<b>D.</b> <p>4, 8, 9, 15, 20, 47, 12, 17, 30, 40</p>"
          ],
          "correct_answer": "<b>B.</b> <p>8, 15, 20, 47, 4, 9, 30, 40, 12, 17</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1467/gate1999-1-14-isro2015-42\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 240,
          "question": "<p>A sorting technique is called stable if <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>it takes \\(O (n \\log n)\\) time</p>",
            "<b>B.</b> <p>it maintains the relative order of occurrence of non-distinct elements</p>",
            "<b>C.</b> <p>it uses divide and conquer paradigm</p>",
            "<b>D.</b> <p>it takes O(n) space</p>"
          ],
          "correct_answer": "<b>B.</b> <p>it maintains the relative order of occurrence of non-distinct elements</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1465/gate1999-1-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 241,
          "question": "<p>Give the correct matching for the following pairs: <br>\\(\\begin{array}{ll|ll}\\hline \\text{(A)} &amp; \\text{$O (\\log n)$} &amp; \\text{(P)} &amp; \\text{Selection sort} \\\\\\hline \\text{(B)} &amp; \\text{$O (n)$} &amp; \\text{(Q)}&amp; \\text{Insertion sort} \\\\\\hline \\text{(C)}&amp; \\text{$O (n \\log n)$} &amp; \\text{(R)} &amp; \\text{Binary search} \\\\\\hline \\text{(D)} &amp; \\text{$O (n^2)$} &amp;\\text{(S)} &amp; \\text{Merge sort} \\\\\\hline \\end{array}\\) <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A-R  B-P  C-Q  D-S</p>",
            "<b>B.</b> <p>A-R  B-P  C-S  D-Q</p>",
            "<b>C.</b> <p>A-P  B-R  C-S  D-Q</p>",
            "<b>D.</b> <p>A-P  B-S  C-R  D-Q</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A-R  B-P  C-S  D-Q</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1659/gate1998-1-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 242,
          "question": "<p>Which one of the following algorithm design techniques is used in finding all pairs of shortest distances in a graph? <br><br><strong>(GATE CSE 1998)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Dynamic programming</p>",
            "<b>B.</b> <p>Backtracking</p>",
            "<b>C.</b> <p>Greedy</p>",
            "<b>D.</b> <p>Divide and Conquer</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Dynamic programming</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1658/gate1998-1-21-isro2008-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 243,
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
          "id": 244,
          "question": "<p>The correct matching for the following pairs is <br>\\(\\begin{array}{ll|ll}\\hline \\text{A.} &amp; \\text{All pairs shortest path} &amp; \\text{1.} &amp; \\text{Greedy} \\\\\\hline \\text{B.} &amp; \\text{Quick Sort} &amp; \\text{2.}&amp; \\text{Depth-First Search} \\\\\\hline \\text{C.}&amp; \\text{Minimum weight spanning tree} &amp; \\text{3.} &amp; \\text{Dynamic Programming} \\\\\\hline \\text{D.} &amp; \\text{Connected Components} &amp;\\text{4.} &amp; \\text{Divide and Conquer} \\\\\\hline \\end{array}\\) <br><br><strong>(GATE CSE 1997)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>A-2 B-4 C-1 D-3</p>",
            "<b>B.</b> <p>A-3 B-4 C-1 D-2</p>",
            "<b>C.</b> <p>A-3 B-4 C-2 D-1</p>",
            "<b>D.</b> <p>A-4 B-1 C-2 D-3</p>"
          ],
          "correct_answer": "<b>B.</b> <p>A-3 B-4 C-1 D-2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2221/gate1997-1-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 245,
          "question": "<p>Quick-sort is run on two inputs shown below to sort in ascending order taking first element as pivot <br>\n(i).  \\(1, 2, 3, \\dots n\\)<br>\n(ii). \\(n, n-1, n-2, \\dots, 2, 1\\)<br>\nLet \\(C_1\\) and \\(C_2\\) be the number of comparisons made for the inputs (i) and (ii) respectively. Then, <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(C_1 \\lt C_2\\)</p>",
            "<b>B.</b> <p>\\(C_1 = C_2\\)</p>",
            "<b>C.</b> <p>\\(C_1 \\gt C_2\\)</p>",
            "<b>D.</b> <p>we cannot say anything for arbitrary n</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(C_1 = C_2\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2744/gate1996-2-15\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 246,
          "question": "<p>The recurrence relation <br>\n\\(T(1) = 2\\)<br>\n\\(T(n) = 3T (\\frac{n}{4}) +n\\)<br>\nhas the solution \\(T(n)\\) equal to <br><br><strong>(GATE CSE 1996)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O(n)\\)</p>",
            "<b>B.</b> <p>\\(O (\\log n)\\)</p>",
            "<b>C.</b> <p>\\(O\\left(n^\\frac{3}{4}\\right)\\)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(O(n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2741/gate1996-2-12\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 247,
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
          "id": 248,
          "question": "<p>Merge sort uses: <br><br><strong>(GATE CSE 1995)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Divide and conquer strategy</p>",
            "<b>B.</b> <p>Backtracking approach</p>",
            "<b>C.</b> <p>Heuristic search</p>",
            "<b>D.</b> <p>Greedy approach</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Divide and conquer strategy</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2592/gate1995-1-5\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 249,
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
          "id": 250,
          "question": "<p>Algorithm design technique used in quicksort algorithm is? <br><br><strong>(GATE CSE 1994)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Dynamic programming</p>",
            "<b>B.</b> <p>Backtracking</p>",
            "<b>C.</b> <p>Divide and conquer</p>",
            "<b>D.</b> <p>Greedy method</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Divide and conquer</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2462/gate1994-1-19-isro2016-31\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 251,
          "question": "<p>The recurrence relation that arises in relation with the complexity of binary search is: <br><br><strong>(GATE CSE 1994)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(T(n) = 2T\\left(\\frac{n}{2}\\right)+k, \\text{ k is a constant }\\)</p>",
            "<b>B.</b> <p>\\(T(n) = T\\left(\\frac{n}{2}\\right)+k, \\text{ k is a constant }\\)</p>",
            "<b>C.</b> <p>\\(T(n) = T\\left(\\frac{n}{2}\\right)+\\log n\\)</p>",
            "<b>D.</b> <p>\\(T(n) = T\\left(\\frac{n}{2}\\right)+n\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>\\(T(n) = T\\left(\\frac{n}{2}\\right)+k, \\text{ k is a constant }\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2444/gate1994-1-7-isro2017-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 252,
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
          "id": 253,
          "question": "<p>Consider the undirected unweighted graph G. Let a breadth-first traversal of\nG be done starting from a node r . Let d(r,u) and d(r,v) be the lengths of the\nshortest paths form r to u and v respectively in G. If u is visited before v during\nthe breadth-first traversal, which of the following statements is correct ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>d(r,u) \\(\\lt\\) d(r,v)</p>",
            "<b>B.</b> <p>d(r,u) \\(\\leq\\) d(r,v)</p>",
            "<b>C.</b> <p>d(r,u) \\(\\gt\\)d(r,v)</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>d(r,u) \\(\\leq\\) d(r,v)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/732/gate2001-2-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 254,
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
        },
        {
          "id": 255,
          "question": "<p>Randomized quicksort is an extension of quicksort where the pivot is chosen\nrandomly. What is the worst case complexity of sorting n numbers using\nrandomized quicksort ? <br><br><strong>(GATE CSE 2001)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>O(n)</p>",
            "<b>B.</b> <p>O(nlogn)</p>",
            "<b>C.</b> <p>O(\\(n^{2}\\)\n)</p>",
            "<b>D.</b> <p>O(n!)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>O(\\(n^{2}\\)\n)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/707/gate2001-1-14#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 256,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only: <br>\nWhich of the following problems is not NP-hard? <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Hamiltonian circuit problem</p>",
            "<b>B.</b> <p>The 0/1 Knapsack problem</p>",
            "<b>C.</b> <p>Finding bi-connected components of a graph</p>",
            "<b>D.</b> <p>The graph coloring problem</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Finding bi-connected components of a graph</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/561/gate1992-02-vi\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 257,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only: <br>\nFollowing algorithm(s) can be used to sort n in the range \\([1\\ldots n^3]\\) in O(n) time <br><br><strong>(GATE CSE 1992)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Heap sort</p>",
            "<b>B.</b> <p>Quick sort</p>",
            "<b>C.</b> <p>Merge sort</p>",
            "<b>D.</b> <p>Radix sort</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Radix sort</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/559/gate1992-02-ix\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 258,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:<br>Kruskal's algorithm for finding a minimum spanning tree of a weighted graph G with n vertices and m edges has the time complexity of: <br><br><strong>(GATE CSE 1991)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(O(n^{2})\\)</p>",
            "<b>B.</b> <p>O(mn)</p>",
            "<b>C.</b> <p>O(m+n)</p>",
            "<b>D.</b> <p>\\(O(m \\log n)\\)</p>",
            "<b>E.</b> <p>\\(O(m^2)\\)</p>"
          ],
          "correct_answer": "<b>B.</b> <p>O(mn)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/521/gate1991-03-vi\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 259,
          "question": "<p>Choose the correct alternatives (More than one may be correct).<br>The complexity of comparision based sorting algorithms is: <br><br><strong>(GATE CSE 1990)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\Theta (n \\log n)\\)</p>",
            "<b>B.</b> <p>\\(\\Theta (n)\\)</p>",
            "<b>C.</b> <p>\\(\\Theta \\left(n^2\\right)\\)</p>",
            "<b>D.</b> <p>\\(\\Theta (n\\sqrt n)\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(\\Theta (n \\log n)\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/84830/gate1990-3-v\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 260,
          "question": "<p>Let P be a quicksort program to sort numbers in ascending order. Let \\(t_{1}\\) and \\(t_{2}\\) be the time taken by the program for the inputs \\(\\left[1 \\ 2 \\ 3 \\ 4\\right]\\) and \\(\\left[5 \\ 4 \\ 3 \\ 2 \\ 1\\right]\\), respectively. Which of the following holds? <br><br><strong>(GATE CSE 1987)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(t_{1} = t_{2}\\)</p>",
            "<b>B.</b> <p>\\(t_{1} \\gt t_{2}\\)</p>",
            "<b>C.</b> <p>\\(t_{1} \\lt t_{2}\\)</p>",
            "<b>D.</b> <p>\\(t_{1}=t_{2}+5 \\log 5\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(t_{1} \\lt t_{2}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/80366/gate1987-1-xviii\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
