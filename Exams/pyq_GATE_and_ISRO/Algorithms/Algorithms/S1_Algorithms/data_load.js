window.__examLoadCallback({
  "title": "Algorithms - Algorithms - Slot 1",
  "duration": 42,
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
        }
      ]
    }
  ]
});
