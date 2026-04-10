window.__examLoadCallback({
  "title": "Algorithms - Algorithms - Slot 14",
  "duration": 42,
  "sections": [
    {
      "name": "Algorithms",
      "questions": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "id": 7,
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
          "id": 8,
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
          "id": 9,
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
          "id": 10,
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
          "id": 11,
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
          "id": 12,
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
          "id": 13,
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
          "id": 14,
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
          "id": 15,
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
        }
      ]
    }
  ]
});
