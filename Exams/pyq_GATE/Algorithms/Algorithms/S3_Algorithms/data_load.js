window.__examLoadCallback({
  "title": "Algorithms - Algorithms - Slot 3",
  "duration": 42,
  "sections": [
    {
      "name": "Algorithms",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
          "question": "<p>Consider a sequence of 14 elements: A = [-5, -10, 6, 3, -1, -2, 13, 4, -9, -1, 4, 12, -3, 0]. The sequence sum \\(S(i,j)=\\sum_{k=i}^{j}A[k]\\). Determine the maximum of S(i,j), where \\(0 \\leq i \\leq j \\lt 14\\). (Divide and conquer approach may be used). Answer:______ <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "29",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302823/gate2019-cs-25#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>An array of 25 distinct elements is to be sorted using quicksort. Assume that the pivot element is chosen uniformly at random. The probability that the pivot element gets placed in the worst possible location in the first round of partitioning (rounded off to 2 decimal places) is _________. <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "0.08",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/302828/gate2019-cs-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider the weights and values of items listed below. Note that there is only one unit of each item. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q48_ac42f524.jpg\"> <br>  The task is to pick a subset of these items such that their total weight is no more than 11 Kgs\nand their total value is maximized. Moreover, no item may be split. The total value of items picked by an optimal algorithm is denoted by  \\(V_{opt}\\). A greedy algorithm sorts the items by their value-to-weight ratios in descending order and packs them greedily, starting from the first item in the ordered list. The total value of items picked by the greedy algorithm is denoted by \\(V_{greedy}\\).<br>\nThe value of \\(V_{opt}\\)-\\(V_{greedy}\\) is ____________. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "16",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204123/gate2018-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider the following undirected graph G:<br> <img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q47_241ae69c.jpg\"> <br>  Choose a value for x that will maximize the number of minimum weight spanning trees (MWSTs) of G. The number of MWSTs of G for this value of x is ______. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "4",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204122/gate2018-47#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
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
          "id": 11,
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
          "id": 12,
          "question": "<p>A message is made up entirely of characters from the set X= {P,Q,R,S,T}. The table of\nprobabilities for each of the characters is shown below: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Algorithms\\q41_1d66a9cf.jpg\"> <br>If a message of 100 characters over X is encoded using Huffman coding, then the expected\nlength of the encoded message in bits is_____ <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "225",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/118395/gate2017-2-50#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
