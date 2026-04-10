window.__examLoadCallback({
  "title": "Algorithms - Algorithms - Slot 10",
  "duration": 42,
  "sections": [
    {
      "name": "Algorithms",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
