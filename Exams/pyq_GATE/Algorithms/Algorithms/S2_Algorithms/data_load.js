window.__examLoadCallback({
  "title": "Algorithms - Algorithms - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "Algorithms",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
          "question": "<p>Let \\(G(V, E)\\) be a directed graph, where \\(V =  \\{1, 2, 3, 4, 5 \\}\\) is the set of vertices and\n\\(E\\) is the set of directed edges, as defined by the following adjacency matrix \\(A\\).<br>\\(A[i][j]= \\left \\{ \\begin{matrix}\n1 &amp;1 \\leq j \\leq i \\leq 5  \\\\\n0&amp; otherwise\n\\end{matrix} \\right.\\)<br> \\(A[i][j]=1 \\)indicates a directed edge from node \\(i \\) to node \\(j \\). A directed spanning tree of \\(G \\), rooted at \\( r  \\in V\\) , is defined as a subgraph \\(T \\) of \\(G \\) such that the undirected\nversion of \\(T \\) is a tree, and \\(T \\) contains a directed path from \\(r \\) to every other vertex in \\(V \\). The   number   of   such   directed   spanning   trees   rooted   at   vertex  5 is ____ <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "24",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371888/Gate-cse-2022-question-48#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
          "question": "<p>Consider the following undirected graph with edge weights as shown:<br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q17_3427ef34.jpg\"><br>The number of minimum-weight spanning trees of the graph is __________ <br><br><strong>(GATE CSE 2021 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/357434/gate-cse-2021-set-1-question-17#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
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
          "id": 14,
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
          "id": 15,
          "question": "<p>Consider a graph \\(G=(V,E)\\), where \\(V=\\{v_1,v_2,...,v_{100}\\}\\), \\(E=\\{(v_i,v_j)|1\\leq i \\lt j\\leq 100\\}\\), and weight of the edge \\((v_i,v_j)\\; is \\; |i-j|\\). The weight of minimum spanning tree of G is _________ <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "99",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/333182/gate2020-cs-49#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
