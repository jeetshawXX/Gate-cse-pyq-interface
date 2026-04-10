window.__examLoadCallback({
  "title": "Shortest_Path - Shortest_Path - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Shortest_Path",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
          "question": "<p>Consider the weighted undirected graph with 4 vertices,where the weigh to edge {i, j} is given by the entry Wij in the matrix W. <br> \\(W=\\begin{bmatrix} 0 &amp; 2&amp;8 &amp; 5\\\\ 2&amp; 0&amp; 5 &amp;8 \\\\ 8 &amp; 5 &amp; 0&amp; x\\\\ 5&amp;8 &amp; x&amp;0 \\end{bmatrix}\\) <br>The largest possible integer value of x, for which at least one shortest path between some pair\nof vertices will contain the edge with weight x is ____. <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "12",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39731/gate2016-1-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
          "question": "<p>Consider the directed graph shown in the figure below. There are multiple shortest paths between\nvertices S and T. Which one will be reported by Dijkstra's shortest path algorithm? Assume that, in\nany iteration, the shortest path to a vertex v is updated only when a strictly shorter path to v is\ndiscovered <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Shortest_Path\\q40_17a15b5c.jpg\"> <br><br><strong>(GATE CSE 2012)</strong></p>",
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
          "question": "<p><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Shortest_Path\\q45_821c052a.jpg\">  <br> Dijkstra's single source shortest path algorithm when run from vertex a in the\nabove graph, computes the correct shortest path distance to <br><br><strong>(GATE CSE 2008)</strong></p>",
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
          "id": 15,
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
        }
      ]
    }
  ]
});
