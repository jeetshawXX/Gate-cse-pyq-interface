window.__examLoadCallback({
  "title": "Graph_Traversal - Graph_Traversal - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Graph_Traversal",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following algorithm someAlgo that takes an undirected graph \\(G\\) as input.\n<br><br>\\(\\texttt{someAlgo(G)}:\\)<br>\n1. Let \\(v\\) be any vertex in \\(G\\). Run BFS on \\(G\\) starting at \\(v\\). Let \\(u\\) be a vertex in \\(G\\) at maximum distance from \\(v\\) as given by the BFS.<br>\n2. Run BFS on \\(G\\) again with \\(u\\) as the starting vertex. Let \\(z\\) be the vertex at maximum distance from \\(u\\) as given by the BFS.<br>\n3. Output the distance between \\(u\\) and \\(z\\) in \\(G\\).\n<br><br>The output of \\(\\texttt{someAlgo(T)}\\) for the tree shown in the given figure is __________. (Answer in integer) <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Graph_Traversal\\q49_ae33f918.webp\"><br> <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460844/gate-cse-2025-set-2-question-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
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
          "id": 3,
          "question": "<p>Let \\(U = \\{1, 2, 3\\}\\). Let \\(2^U\\) denote the powerset of  \\(U\\). Consider an undirected graph\n\\(G\\) whose vertex set is  \\(2^U\\). For any  \\(A,B \\in 2^U, (A,B)\\) is an edge in  \\(G\\) if and only\nif (i)  \\(A \\neq B\\), and (ii) either \\(A \\subseteq B\\)   or \\(B \\subseteq A\\). For any vertex \\(A\\) in \\(G\\), the set of\nall possible orderings in which the vertices of \\(G\\) can be visited in a Breadth First\nSearch (BFS) starting from \\(A\\) is denoted by \\(B(A)\\).<br>\nIf \\(\\phi \\)  denotes the empty set, then the cardinality of \\(B(\\phi ) \\)  is ____. <br><br><strong>(GATE CSE 2023)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "5040",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/399265/gate-cse-2023-question-46#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
          "question": "<p>The Breadth First Search (BFS) algorithm has been implemented using the queue data\nstructure. Which one of the following is a possible order of visiting the nodes in the graph\nbelow? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Graph_Traversal\\q7_689784b4.jpg\"> <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
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
          "id": 9,
          "question": "<p>Breadth First Search(BFS) is started on a binary tree beginning from the root vertex. There is a vertex t at a distance four from the root. If t is the n-th vertex in this BFS traversal, then the maximum possible value of n is______ . <br><br><strong>(GATE CSE 2016 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "31",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39563/gate2016-2-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the following directed graph: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Graph_Traversal\\q11_81240da5.jpg\"> <br>\nThe number of different topological orderings of the vertices of the graph is <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "6",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39669/gate2016-1-11#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
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
          "id": 12,
          "question": "<p>Suppose depth first search is executed on the graph below starting at some unknown vertex. Assume that a recursive call to visit a vertex is made only after first checking that the vertex has not been visited earlier. Then the maximum possible recursion depth (including the initial call) is _________.  <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Graph_Traversal\\q13_494e6aeb.jpg\"> <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "19",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2047/gate2014-3-13#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
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
          "id": 14,
          "question": "<p>Consider the following sequence of nodes for the undirected graph given below:<br>\n1.a b e f d g c<br>\n2.a b e f c g d<br>\n3.a d g e b c f<br>\n4.a d b c g e f<br>\nA Depth First Search (DFS) is started at node a. The nodes are listed in the order they are first visited. Which of the above is/are possible output(s)?<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Graph_Traversal\\q47_3d5ab5a5.jpg\"><br> <br><br><strong>(GATE IT 2008)</strong></p>",
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
          "id": 15,
          "question": "<p>The Breadth First Search algorithm has been implemented using the queue data\nstructure. One possible order of visiting the nodes of the following graph is <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Graph_Traversal\\q19_8b840044.jpg\"> <br><br><strong>(GATE CSE 2008)</strong></p>",
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
        }
      ]
    }
  ]
});
