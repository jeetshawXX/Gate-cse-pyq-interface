window.__examLoadCallback({
  "title": "Computer Networks - Bridges",
  "duration": 8,
  "sections": [
    {
      "name": "Bridges",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"1013\"></a><div itemprop=\"text\"><p>Which of the following is NOT true with respect to a transparent bridge and a router?</p></div><br><br><b>GATE CSE 2004 | Question: 16</b></p>",
          "type": "single",
          "options": [
            "<p>Both bridge and router selectively forward data packets</p>",
            "<p>A bridge uses IP addresses while a router uses MAC addresses</p>",
            "<p>A bridge builds up its routing table by inspecting incoming packets</p>",
            "<p>A router can connect between a LAN and a WAN</p>"
          ],
          "correct_answer": "<p>A bridge uses IP addresses while a router uses MAC addresses</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1013/gate-cse-2004-question-16\" target=\"_blank\">https://gateoverflow.in/1013/gate-cse-2004-question-16</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"1855\"></a><div itemprop=\"text\"><p>Consider the diagram shown below where a number of LANs are connected by&nbsp;(transparent) bridges. In order to avoid packets looping through circuits in the graph,&nbsp;the bridges organize themselves in a spanning tree. First, the root bridge is identified as&nbsp;the bridge with the least serial number. Next, the root sends out (one or more) data units to enable the setting up of the spanning tree of shortest paths from the root bridge&nbsp;to each bridge.&nbsp;</p><p>Each bridge identifies a port (the root port) through which it will forward frames to the&nbsp;root bridge. Port conflicts are always resolved in favour of the port with the lower index&nbsp;value. When there is a possibility of multiple bridges forwarding to the same LAN (but&nbsp;not through the root port), ties are broken as follows: bridges closest to the root get&nbsp;preference and between such bridges, the one with the lowest serial number is&nbsp;preferred.</p><p style=\"text-align:center\"><img alt=\"\" height=\"500\" width=\"562\" src=\"images/gateOverflow_pyq_images/computer_networks___bridges/612bffd8df2ff65753f1c5f5d209635e.png\"></p><p>For the given connection of LANs by bridges, which one of the following choices&nbsp;represents the depth first traversal of the spanning tree of bridges?</p></div><br><br><b>GATE CSE 2006 | Question: 82</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{B1, B5, B3, B4, B2} \\)</p>",
            "<p>\\( \\text{B1, B3, B5, B2, B4} \\)</p>",
            "<p>\\( \\text{B1, B5, B2, B3, B4} \\)</p>",
            "<p>\\( \\text{B1, B3, B4, B5, B2} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{B1, B5, B3, B4, B2} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1855/gate-cse-2006-question-82\" target=\"_blank\">https://gateoverflow.in/1855/gate-cse-2006-question-82</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"79790\"></a><div itemprop=\"text\"><p>Consider the diagram shown below where a number of LANs are connected by&nbsp;(transparent) bridges. In order to avoid packets looping through circuits in the graph,&nbsp;the bridges organize themselves in a spanning tree. First, the root bridge is identified as&nbsp;the bridge with the least serial number. Next, the root sends out (one or more) data&nbsp;<br>units to enable the setting up of the spanning tree of shortest paths from the root bridge&nbsp;to each bridge.&nbsp;</p><p>Each bridge identifies a port (the root port) through which it will forward frames to the&nbsp;root bridge. Port conflicts are always resolved in favour of the port with the lower index&nbsp;value. When there is a possibility of multiple bridges forwarding to the same LAN (but&nbsp;not through the root port), ties are broken as follows: bridges closest to the root get&nbsp;preference and between such bridges, the one with the lowest serial number is&nbsp;preferred.</p><p style=\"text-align:center\"><img alt=\"\" width=\"600\" height=\"534\" src=\"images/gateOverflow_pyq_images/computer_networks___bridges/612bffd8df2ff65753f1c5f5d209635e.png\"></p><p>Consider the spanning tree \\( B1, B5, B3, B4, B2 \\) for the given connection of LANs by bridges, that&nbsp;represents the depth first traversal of the spanning tree of bridges.&nbsp;Let host \\( H1 \\) send&nbsp;out a broadcast ping packet. Which of the following options represents the&nbsp;correct forwarding table on \\( B3 \\)?</p></div><br><br><b>GATE CSE 2006 | Question: 83</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\begin{array}{|l|l|}\\hline \\textbf{Hosts} &amp; \\textbf{Port} \\\\\\hline&nbsp; \\text{H1, H2, H3, H4} &amp; \\text{3}&nbsp;&nbsp; \\\\\\hline&nbsp;\\text{H5, H6, H9, H10} &amp; \\text{1} \\\\\\hline \\text{H7, H8, H11, H12} &amp; \\text{2}&nbsp; \\\\\\hline \\end{array} \\)</p>",
            "<p>\\( \\begin{array}{|l|l|}\\hline \\textbf{Hosts} &amp; \\textbf{Port} \\\\\\hline&nbsp; \\text{H1, H2} &amp; \\text{4} \\\\\\hline&nbsp;&nbsp; \\text{H3, H4} &amp; \\text{3} \\\\\\hline&nbsp; \\text{H5, H6} &amp; \\text{1}\\\\\\hline \\text{H7, H8, H9, H10, H11, H12} &amp; \\text{2}&nbsp; \\\\\\hline \\end{array} \\)</p>",
            "<p>\\( \\begin{array}{|l|l|}\\hline \\textbf{Hosts} &amp; \\textbf{Port} \\\\\\hline&nbsp; \\text{H3, H4} &amp; \\text{3} \\\\\\hline&nbsp;&nbsp; \\text{H5, H6, H9, H10} &amp; \\text{1} \\\\\\hline&nbsp; \\text{H1, H2} &amp; \\text{4}&nbsp; \\\\\\hline&nbsp; \\text{H7, H8, H11, H12} &amp; \\text{2}&nbsp; \\\\\\hline \\end{array} \\)</p>",
            "<p>\\( \\begin{array}{|l|l|}\\hline \\textbf{Hosts} &amp; \\textbf{Port} \\\\\\hline&nbsp; \\text{H1, H2, H3, H4} &amp; \\text{3} \\\\\\hline&nbsp;&nbsp; \\text{H5, H7, H9, H10} &amp; \\text{1} \\\\\\hline&nbsp; \\text{H7, H8, H11, H12} &amp; \\text{4}&nbsp; \\\\\\hline \\end{array} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\begin{array}{|l|l|}\\hline \\textbf{Hosts} &amp; \\textbf{Port} \\\\\\hline&nbsp; \\text{H1, H2, H3, H4} &amp; \\text{3}&nbsp;&nbsp; \\\\\\hline&nbsp;\\text{H5, H6, H9, H10} &amp; \\text{1} \\\\\\hline \\text{H7, H8, H11, H12} &amp; \\text{2}&nbsp; \\\\\\hline \\end{array} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/79790/gate-cse-2006-question-83\" target=\"_blank\">https://gateoverflow.in/79790/gate-cse-2006-question-83</a></p>"
        }
      ]
    }
  ]
});
