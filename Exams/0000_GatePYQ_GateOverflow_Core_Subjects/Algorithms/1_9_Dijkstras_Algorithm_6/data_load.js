window.__examLoadCallback({
  "title": "Algorithms - Dijkstras Algorithm",
  "duration": 14,
  "sections": [
    {
      "name": "Dijkstras Algorithm",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"2769\"></a><div itemprop=\"text\"><p>Let \\( G \\) be the directed, weighted graph shown in below figure</p>\n\n<p><img alt=\"\" height=\"275\" src=\"images/gateOverflow_pyq_images/algorithms___dijkstras_algorithm/519d9b271246da0aec6b3bc796a75831.png\" width=\"426\"></p>\n\n<p>We are interested in the shortest paths from \\( A \\).</p>\n\n<ol style=\"list-style-type:lower-alpha\">\n\t<li>\n\t<p>Output the sequence of vertices identified by the Dijkstra’s algorithm for single source shortest path when the algorithm is started at node \\( A \\)</p>\n\t</li>\n\t<li>\n\t<p>Write down sequence of vertices in the shortest path from \\( A \\) to \\( E \\)</p>\n\t</li>\n\t<li>\n\t<p>What is the cost of the shortest path from \\( A \\) to \\( E \\)?</p>\n\t</li>\n</ol></div><br><br><b>GATE CSE 1996 | Question: 17</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2769/gate-cse-1996-question-17\" target=\"_blank\">https://gateoverflow.in/2769/gate-cse-1996-question-17</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"1041\"></a><div itemprop=\"text\"><p>Suppose we run Dijkstra’s single source shortest path algorithm on the following edge-weighted directed graph with vertex \\( P \\) as the source.</p>\n\n<p style=\"text-align:center\"><img alt=\"\" height=\"218\" src=\"images/gateOverflow_pyq_images/algorithms___dijkstras_algorithm/251cd8da9e0f51636bd9d3e0305585d7.png\" width=\"251\"></p>\n\n<p>In what order do the nodes get included into the set of vertices for which the shortest path distances are finalized?</p>\n\n</div><br><br><b>GATE CSE 2004 | Question: 44</b></p>",
          "type": "single",
          "options": [
            "<p>\\( P,Q,R,S,T,U \\)</p>",
            "<p>\\( P,Q,R,U,S,T \\)</p>",
            "<p>\\( P,Q,R,U,T,S \\)</p>",
            "<p>\\( P,Q,T,R,U,S \\)</p>"
          ],
          "correct_answer": "<p>\\( P,Q,R,U,S,T \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1041/gate-cse-2004-question-44\" target=\"_blank\">https://gateoverflow.in/1041/gate-cse-2004-question-44</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"1374\"></a><div itemprop=\"text\"><p>Let \\( G(V,E) \\) be an undirected graph with positive edge weights. Dijkstra’s single source shortest path algorithm can be implemented using the binary heap data structure with time complexity:</p></div><br><br><b>GATE CSE 2005 | Question: 38</b></p>",
          "type": "single",
          "options": [
            "<p>\\( O\\left(|V|^2\\right) \\)</p>",
            "<p>\\( O\\left(|E|+|V|\\log |V|\\right) \\)</p>",
            "<p>\\( O\\left(|V|\\log|V|\\right) \\)</p>",
            "<p>\\( O\\left(\\left(|E|+|V|\\right)\\log|V|\\right) \\)</p>"
          ],
          "correct_answer": "<p>\\( O\\left(\\left(|E|+|V|\\right)\\log|V|\\right) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1374/gate-cse-2005-question-38\" target=\"_blank\">https://gateoverflow.in/1374/gate-cse-2005-question-38</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"891\"></a><div itemprop=\"text\"><p>To implement Dijkstra’s shortest path algorithm on unweighted graphs so that it runs in linear time, the data structure to be used is:</p></div><br><br><b>GATE CSE 2006 | Question: 12</b></p>",
          "type": "single",
          "options": [
            "<p>Queue</p>",
            "<p>Stack</p>",
            "<p>Heap</p>",
            "<p>B-Tree</p>"
          ],
          "correct_answer": "<p>Queue</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/891/gate-cse-2006-question-12\" target=\"_blank\">https://gateoverflow.in/891/gate-cse-2006-question-12</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"457\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" src=\"images/gateOverflow_pyq_images/algorithms___dijkstras_algorithm/b3809fd5ef74f2fbe62fd71bccd499b2.png\"></p><p>Dijkstra's single source shortest path algorithm when run from vertex \\( a \\) in the above graph, computes the correct shortest path distance to</p></div><br><br><b>GATE CSE 2008 | Question: 45</b></p>",
          "type": "single",
          "options": [
            "<p>only vertex \\( a \\)</p>",
            "<p>only vertices \\( a, e, f, g, h \\)</p>",
            "<p>only vertices \\( a, b, c, d \\)</p>",
            "<p>all the vertices</p>"
          ],
          "correct_answer": "<p>all the vertices</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/457/gate-cse-2008-question-45\" target=\"_blank\">https://gateoverflow.in/457/gate-cse-2008-question-45</a></p>"
        }
      ]
    }
  ]
});
