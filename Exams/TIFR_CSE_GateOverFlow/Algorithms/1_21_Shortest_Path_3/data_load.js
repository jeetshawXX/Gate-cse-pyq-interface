window.__examLoadCallback({
  "title": "Algorithms - Shortest Path",
  "duration": 8,
  "sections": [
    {
      "name": "Shortest Path",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"179293\"></a><div itemprop=\"text\"><p>Let \\( G=(V,E) \\) be a DIRECTED graph, where each edge \\( \\large e \\) has a positive weight \\( \\large\\omega(e), \\) and all vertices can be reached from vertex \\( \\large s. \\) For each vertex \\( \\large v, \\) let \\( \\large \\phi(v) \\) be the length of the shortest path from \\( \\large s \\) to \\( \\large v. \\) Let \\( G'=(V,E) \\) be a new weighted graph with the same vertices and edges, but with the edge weight of every edge \\( \\large e=(u\\to v) \\) changed to \\( \\large \\omega'(e)=\\omega(e)+\\phi(v)-\\phi(u). \\) Let \\( P \\) be a path from \\( \\large s \\) to a vertex \\( \\large v, \\) and let \\( \\large \\omega(P)=\\sum_{e\\in P} \\omega_{e}, \\) and \\( \\large \\omega'(P)=\\sum_{e\\in P} \\omega'_{e}. \\)</p>\n\n<p>Which of the following options is NOT NECESSARILY TRUE ?</p>\n\n</div><br><br><b>Algorithms: TIFR CSE 2018 | Part B | Question: 9</b></p>",
          "type": "numeric",
          "options": [
            "<p>If \\( P \\) is a shortest path in \\( G, \\) then \\( P \\) is a shortest path in \\( G'. \\)</p>",
            "<p>If \\( P \\) is a shortest path in \\( F', \\) then P is a shortest path in \\( G. \\)</p>",
            "<p>If \\( P \\) is a shortest path in \\( G, \\) then \\( \\omega'(P)=2\\times \\omega(P). \\)</p>",
            "<p>If \\( P \\) is NOT a shortest path in \\( G, \\) then \\( \\omega'(P)&lt;2\\times&nbsp;\\omega(P). \\)</p>",
            "<p>All of the above options are necessarily TRUE.</p>"
          ],
          "correct_answer": "E",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/179293/tifr-cse-2018-part-b-question-9\" target=\"_blank\">https://gateoverflow.in/179293/tifr-cse-2018-part-b-question-9</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"381996\"></a><div itemprop=\"text\"><p>Consider a directed graph \\( G=(V, E) \\), where each edge \\( e \\in E \\) has a positive edge weight \\( c_e \\). Determine the appropriate choices for the blanks below so that the value of the following linear program is the length of the shortest directed path in \\( G \\) from \\( s \\) to \\( t \\). (Assume that the graph has at least one path from \\( s \\) to \\( t \\).)</p>\n\n<p>\\( \\begin{align}<br>\n\\quad \\underline{(\\text{blank } 1)\\text{imize}} \\qquad X_{t} &amp;&nbsp; \\\\&nbsp;<br>\n\\quad \\qquad {\\text{s.t.}} \\qquad&nbsp; X_{s}&amp;\\quad&nbsp; = \\quad 0 \\\\&nbsp;<br>\n\\quad \\qquad X_{w}-X_{v}&amp;\\quad \\underline{(\\text{blank } 2)} &amp; c_{e} \\quad \\text{(for each edge }e = (v, w) \\in E).<br>\n\\end{align} \\)&nbsp;</p>\n\n</div><br><br><b>Algorithms: TIFR CSE 2022 | Part B | Question: 13</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{blank }1: \\max, \\text{blank }2:\\; \\leq  \\)</p>",
            "<p>\\( \\text{blank&nbsp;}1: \\max, \\text{blank }2:\\; \\geq \\)</p>",
            "<p>\\( \\text{blank }1: \\min,&nbsp; \\text{blank }2:\\; \\leq \\)</p>",
            "<p>\\( \\text{blank }1:&nbsp;\\min,&nbsp; \\text{blank }2:\\; \\geq \\)</p>",
            "<p>\\( \\text{blank }1: \\min,&nbsp; \\text{blank&nbsp;}2:\\; = \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{blank }1: \\max, \\text{blank }2:\\; \\leq  \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/381996/tifr-cse-2022-part-b-question-13\" target=\"_blank\">https://gateoverflow.in/381996/tifr-cse-2022-part-b-question-13</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"473089\"></a><div itemprop=\"text\"><p>Let \\( G=(V, E) \\) be a weighted, undirected and connected graph, with weight \\( 1 \\leq \\) \\( \\mathrm{wt}_{G}(e) \\leq 99 \\) for edge \\( e \\in E \\). Suppose \\( G^{\\prime} \\) is the graph with the same set of vertices and edges, but with edge weights \\( \\mathrm{wt}_{G^{\\prime}}(e)=100-\\mathrm{wt}_{G}(e) \\). Assume that \\( |V| \\) is an even number.<br><br>Consider the following statements.</p><ol start=\"1\" style=\"list-style-type: lower-roman;\"><li>Any minimum-weight spanning-tree of \\( G \\) is also a maximum-weight spanning-tree of \\( G^{\\prime} \\).</li><li>For any pair of vertices \\( s, t \\in V \\), any shortest path from \\( s \\) to \\( t \\) in \\( G \\) is also a longest path from \\( s \\) to \\( t \\) in \\( G^{\\prime} \\)</li><li>Any minimum-weight perfect matching of \\( G \\) is also a maximum-weight perfect matching of \\( G^{\\prime} \\).</li></ol><p>Which of the above&nbsp;statements \\( \\text{ALWAYS TRUE} \\) for any such graphs \\( G, G^{\\prime}? \\)</p></div><br><br><b>Algorithms: TIFR CSE 2025 | Part B | Question: 8</b></p>",
          "type": "single",
          "options": [
            "<p>Only \\( \\text{(i)} \\)&nbsp;and&nbsp;\\( \\text{(ii)} \\)</p>",
            "<p>Only \\( \\text{(i)} \\)&nbsp;and&nbsp;\\( \\text{(iii)} \\)</p>",
            "<p>Only \\( \\text{(ii)} \\)&nbsp;and&nbsp;\\( \\text{(iii)} \\)</p>",
            "<p>\\( \\text{(i)},\\text{(ii)} \\)&nbsp;and&nbsp;\\( \\text{(iii)} \\)</p>",
            "<p>None of \\( \\text{(i)},\\text{(ii)} \\)&nbsp;or \\( \\text{(iii)} \\)&nbsp;is always true.</p>"
          ],
          "correct_answer": "<p>Only \\( \\text{(i)} \\)&nbsp;and&nbsp;\\( \\text{(iii)} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/473089/tifr-cse-2025-part-b-question-8\" target=\"_blank\">https://gateoverflow.in/473089/tifr-cse-2025-part-b-question-8</a></p>"
        }
      ]
    }
  ]
});
