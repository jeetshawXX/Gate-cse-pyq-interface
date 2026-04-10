window.__examLoadCallback({
  "title": "Discrete Mathematics - Graph Theory - Graph Matching",
  "duration": 11,
  "sections": [
    {
      "name": "Graph Matching",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"26480\"></a><div itemprop=\"text\"><p>This question concerns the classes \\( P \\) and \\( NP. \\) If you are familiar with them, you may skip the&nbsp;definitions and go directly to the question.<br>\nLet \\( L \\) be a set. We say that \\( L \\) is in \\( P \\) if there is some algorithm which given input \\( x \\) decides if \\( x \\) is in \\( L \\) or not in time bounded by a polynomial in the length of \\( x. \\) For example, the set of all connected graphs is&nbsp;in \\( P, \\) because there is an algorithm which, given a graph graph, can decide if it is connected or not in time&nbsp;roughly proportional to the number of edges of the graph.</p>\n\n<p>The class \\( NP \\) is a superset of class \\( P. \\) It contains those sets that have membership witnesses that can&nbsp;be verified in polynomial time. For example, the set of composite numbers is in \\( NP. \\) To see this take the&nbsp;witness for a composite number to be one of its divisors. Then the verification process consists of performing&nbsp;just one division using two reasonable size numbers. Similarly, the set of those graphs that have a Hamilton&nbsp;cycle, i.e. a cycle containing all the vertices of the graph, is in in \\( NP. \\) To verify that the graph has a Hamilton&nbsp;cycle we just check if the witnessing sequence of vertices indeed a cycle of the graph that passes through all&nbsp;the vertices of the graph. This can be done in time that is polynomial in the size of the graph.</p>\n\n<p>More precisely, if \\( L \\) is a set in \\( P \\) consisting of elements of the form \\( (x, w), \\) then the set \\[ M = \\{x : \\exists w, |w| ≤ |x|^k\\text{ and }(x, w) \\in&nbsp;L\\}, \\]<br>\nis in N P .<br>\nLet \\( G = (V, E) \\) be a graph. \\( G \\) is said to have perfect matching if there is a subset \\( M \\) of the edges of \\( G \\) so that</p>\n\n<ol style=\"list-style-type:lower-roman\">\n\t<li>No two edges in \\( M \\) intersect (have a vertex in common); and</li>\n\t<li>Every vertex of \\( G \\) has an edge in \\( M. \\)</li>\n</ol>\n\n<p>Let \\( \\text{MATCH} \\)&nbsp;be the set of all graphs that have a perfect matching. Let \\( \\overline{\\text{MATCH}} \\) be the set of graphs that&nbsp;do not have a perfect matching. Let \\( o(G) \\) be the number of components of \\( G \\) that have an odd number of&nbsp;vertices.</p>\n\n<p>\\( \\text{Tutte’s Theorem:} \\) \\( G \\in \\text{MATCH} \\)<em> </em>if and only if for all subsets \\( S \\) of \\( V, \\) the number of components in \\( G − S \\) (the graph formed by deleting the vertices in \\( S) \\) with an odd number of vertices is at most \\( |S|. \\) That is, \\[ G \\in&nbsp;\\text{MATCH} ↔ \\forall S \\subseteq&nbsp;V o(G − S) \\leq&nbsp;|S|. \\]</p>\n\n<p>Which of the following is true?</p>\n\n</div><br><br><b>Graph Theory: TIFR CSE 2012 | Part B | Question: 20</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{MATCH} ∈ NP\\text{ and }\\overline{\\text{MATCH}} \\notin NP \\)</p>",
            "<p>\\( \\overline{\\text{MATCH}} ∈ NP\\text{ and }\\text{MATCH} \\notin NP \\)</p>",
            "<p>\\( \\text{MATCH} ∈ NP\\text{ and }\\overline{\\text{MATCH}} ∈ NP \\)</p>",
            "<p>\\( \\text{MATCH} \\notin P\\text{ and } \\overline{\\text{MATCH}} \\notin P \\)</p>",
            "<p>none of the above</p>"
          ],
          "correct_answer": "<p>\\( \\text{MATCH} ∈ NP\\text{ and }\\overline{\\text{MATCH}} ∈ NP \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/26480/tifr-cse-2012-part-b-question-20\" target=\"_blank\">https://gateoverflow.in/26480/tifr-cse-2012-part-b-question-20</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"358962\"></a><div itemprop=\"text\"><p>A matching in a graph is a set of edges such that no two edges in the set share a common vertex. Let \\( G \\) be a graph on \\( n \\) \\( \\textit{vertices} \\) in which there is a subset \\( M \\) of \\( m \\) \\( \\textit{edges} \\) which is a matching. Consider a random process where each vertex in the graph is independently selected with probability \\( 0&lt; p&lt; 1 \\) and let \\( B \\) be the set of vertices so obtained. What is the probability that there exists at least one edge from the matching \\( M \\) with both end points in the set \\( B \\)?</p>\n\n</div><br><br><b>Graph Theory: TIFR CSE 2021 | Part A | Question: 6</b></p>",
          "type": "single",
          "options": [
            "<p>\\( p^{2} \\)</p>",
            "<p>\\( 1-\\left ( 1-p^{2} \\right )^{m} \\)</p>",
            "<p>\\( p^{2m} \\)</p>",
            "<p>\\( \\left ( 1-p^{2} \\right )^{m} \\)</p>",
            "<p>\\( 1-\\left ( 1-p\\left ( 1-p \\right ) \\right )^{m} \\)</p>"
          ],
          "correct_answer": "<p>\\( 1-\\left ( 1-p^{2} \\right )^{m} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/358962/tifr-cse-2021-part-a-question-6\" target=\"_blank\">https://gateoverflow.in/358962/tifr-cse-2021-part-a-question-6</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"382007\"></a><div itemprop=\"text\"><p>Let \\( G=(V, E) \\) be an undirected simple graph. A subset \\( M \\subseteq E \\) is a <em>matching</em> in \\( G \\) if distinct edges in \\( M \\) do not share a vertex. A matching is <em>maximal </em>if no strict superset of \\( M \\) is a matching. How many maximal matchings does the following graph have?</p><p><img alt=\"\" width=\"500\" height=\"56\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=13435088323123927580\"></p></div><br><br><b>Graph Theory: TIFR CSE 2022 | Part B | Question: 2</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 1 \\)</p>",
            "<p>\\( 2 \\)</p>",
            "<p>\\( 3 \\)</p>",
            "<p>\\( 4 \\)</p>",
            "<p>\\( 5 \\)</p>"
          ],
          "correct_answer": "<p>\\( 4 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/382007/tifr-cse-2022-part-b-question-2\" target=\"_blank\">https://gateoverflow.in/382007/tifr-cse-2022-part-b-question-2</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"382003\"></a><div itemprop=\"text\"><p>We are given a graph \\( G \\) along with a matching \\( M \\) and a vertex cover \\( C \\) in it such that \\( |M|=|C| \\). Consider the following statements:</p>\n\n<ol>\n\t<li>\\( M \\) is a maximum matching in \\( G \\).</li>\n\t<li>\\( C \\) is a minimum vertex cover in \\( G \\).</li>\n\t<li>\\( G \\) is a bipartite graph.</li>\n</ol>\n\n<p>Which of the following is \\( \\text{TRUE} \\)?</p>\n\n</div><br><br><b>Graph Theory: TIFR CSE 2022 | Part B | Question: 6</b></p>",
          "type": "single",
          "options": [
            "<p>Only statement \\( (1) \\) is correct</p>",
            "<p>Only statement \\( (2) \\) is correct</p>",
            "<p>Only statement \\( (3) \\) is correct</p>",
            "<p>Only statements \\( (1) \\) and \\( (2) \\) are correct</p>",
            "<p>All the three statements \\( (1), (2), \\) and \\( (3) \\) are correct</p>"
          ],
          "correct_answer": "<p>Only statements \\( (1) \\) and \\( (2) \\) are correct</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/382003/tifr-cse-2022-part-b-question-6\" target=\"_blank\">https://gateoverflow.in/382003/tifr-cse-2022-part-b-question-6</a></p>"
        }
      ]
    }
  ]
});
