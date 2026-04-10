window.__examLoadCallback({
  "title": "Digital Logic - Flip Flop",
  "duration": 17,
  "sections": [
    {
      "name": "Flip Flop",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"752\"></a><div itemprop=\"text\"><p>A sequential circuit takes an input stream of \\( 0's \\) and \\( 1's \\) and produces an output stream of \\( 0's \\) and \\( 1's. \\) Initially it replicates the input on its output until two consecutive \\( 0's \\) are encountered on the input. From then onward, it produces an output stream, which is the bit-wise complement of input stream until it encounters two consecutive 1's, whereupon the process repeats. An example input and output stream is shown below.<br>\n<br>\n\\( \\begin{array}{ll}<br>\n\\text{The input stream:} &amp; &nbsp;101100|01001011|011\\\\<br>\n\\text{The desired output:}&amp; &nbsp;101100|10110100|011\\\\<br>\n\\end{array} \\)<br>\n<br>\n\\( \\text{J-K} \\) master-slave flip-flops are to be used to design the circuit.</p>\n\n<ol start=\"1\" style=\"list-style-type:lower-alpha\">\n\t<li>Give the state transition diagram</li>\n\t<li>Give the minimized sum-of-product expression for \\( \\text{J} \\) and \\( \\text{K} \\)&nbsp;inputs of one of its state flip-flops</li>\n</ol></div><br><br><b>GATE CSE 2001 | Question: 11</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/752/gate-cse-2001-question-11\" target=\"_blank\">https://gateoverflow.in/752/gate-cse-2001-question-11</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"1015\"></a><div itemprop=\"text\"><p>In an \\( SR \\) latch made by cross-coupling two NAND gates, if both \\( S \\) and \\( R \\) inputs are set to \\( 0 \\), then it will result in</p>\n\n</div><br><br><b>GATE CSE 2004 | Question: 18, ISRO2007-31</b></p>",
          "type": "single",
          "options": [
            "<p>\\( Q = 0, Q' = 1 \\)</p>",
            "<p>\\( Q = 1, Q' = 0 \\)</p>",
            "<p>\\( Q = 1, Q' = 1 \\)</p>",
            "<p>Indeterminate states</p>"
          ],
          "correct_answer": "<p>\\( Q = 1, Q' = 1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1015/gate-cse-2004-question-18-isro2007-31\" target=\"_blank\">https://gateoverflow.in/1015/gate-cse-2004-question-18-isro2007-31</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"8287\"></a><div itemprop=\"text\"><p>A positive edge-triggered \\( D \\) flip-flop is connected to a positive edge-triggered \\( JK \\) flip-flop as follows. The \\( Q \\) output of the \\( D \\) flip-flop is connected to both the \\( J \\) and \\( K \\) inputs of the \\( JK \\) flip-flop, while the \\( Q \\) output of the \\( JK \\) flip-flop is connected to the input of the \\( D \\) flip-flop. Initially, the output of the \\( D \\) flip-flop is set to logic one and the output of the \\( JK \\) flip-flop is cleared. Which one of the following is the bit sequence (including the initial state) generated at the \\( Q \\) output of the \\( JK \\) flip-flop when the flip-flops are connected to a free-running common clock? Assume that \\( J = K = 1 \\) is the toggle mode and \\( J = K = 0 \\) is the state holding mode of the \\( JK \\) flip-flops. Both the flip-flops have non-zero propagation delays.</p>\n\n</div><br><br><b>GATE CSE 2015 Set 1 | Question: 37</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 0110110\\ldots \\)</p>",
            "<p>\\( 0100100\\ldots \\)</p>",
            "<p>\\( 011101110\\ldots \\)</p>",
            "<p>\\( 011001100\\ldots \\)</p>"
          ],
          "correct_answer": "<p>\\( 0110110\\ldots \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8287/gate-cse-2015-set-1-question-37\" target=\"_blank\">https://gateoverflow.in/8287/gate-cse-2015-set-1-question-37</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"118315\"></a><div itemprop=\"text\"><p>Consider a combination of \\( \\text{T} \\) and \\( \\text{D} \\) flip-flops connected as shown below. The output of the \\( \\text{D} \\) flip-flop is connected to the input of the \\( \\text{T} \\) flip-flop&nbsp;and the output of the \\( \\text{T} \\) flip-flop is connected to the input of the \\( \\text{D} \\) flip-flop.</p>\n\n<p><img alt=\"\" src=\"images/gateOverflow_pyq_images/digital_logic___flip_flop/db7c557f1cb2a118a0322361337a1773.png\" width=\"500\"></p>\n\n<p>Initially, both&nbsp;\\( Q_{0} \\) and&nbsp;\\( Q_{1} \\) are set to \\( 1 \\) (before the \\( 1^{\\text{st}} \\) clock cycle). The outputs</p>\n\n</div><br><br><b>GATE CSE 2017 Set 1 | Question: 33</b></p>",
          "type": "single",
          "options": [
            "<p>\\( Q_{1}Q_{0} \\) after the \\( 3^{\\text{rd}} \\)&nbsp;cycle are \\( 11 \\) and after the \\( 4^{\\text{th}} \\)&nbsp;cycle are \\( 00 \\) respectively.</p>",
            "<p>\\( Q_{1}Q_{0} \\) after the \\( 3^{\\text{rd}} \\)&nbsp;cycle are \\( 11 \\) and after the \\( 4^{\\text{th}} \\)&nbsp;cycle are \\( 01 \\) respectively.</p>",
            "<p>\\( Q_{1}Q_{0} \\) after the \\( 3^{\\text{rd}} \\)&nbsp;cycle are \\( 00 \\) and after the \\( 4^{\\text{th}} \\)&nbsp;cycle are \\( 11 \\) respectively.</p>",
            "<p>\\( Q_{1}Q_{0} \\) after the \\( 3^{\\text{rd}} \\)&nbsp;cycle are \\( 01 \\) and after the \\( 4^{\\text{th}} \\)&nbsp;cycle are \\( 01 \\) respectively.</p>"
          ],
          "correct_answer": "<p>\\( Q_{1}Q_{0} \\) after the \\( 3^{\\text{rd}} \\)&nbsp;cycle are \\( 11 \\) and after the \\( 4^{\\text{th}} \\)&nbsp;cycle are \\( 01 \\) respectively.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/118315/gate-cse-2017-set-1-question-33\" target=\"_blank\">https://gateoverflow.in/118315/gate-cse-2017-set-1-question-33</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"204096\"></a><div itemprop=\"text\"><p>Consider the sequential circuit shown in the figure,&nbsp; where both flip-flops used are positive edge-triggered \\( \\text{D} \\) flip-flops.</p>\n\n<p><img alt=\"\" src=\"images/gateOverflow_pyq_images/digital_logic___flip_flop/def2b055548b3827789f43b10ed7fbee.png\" width=\"390\"></p>\n\n<p>The number of states in the state transition diagram of this circuit that have a transition back to the same state on some value of \"in\" is ____</p></div><br><br><b>GATE CSE 2018 | Question: 22</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/204096/gate-cse-2018-question-22\" target=\"_blank\">https://gateoverflow.in/204096/gate-cse-2018-question-22</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"3440\"></a><div itemprop=\"text\"><p>Which of the following input sequences for a cross-coupled \\( R-S \\) flip-flop realized with two \\( NAND \\) gates may lead to an oscillation?</p>\n\n</div><br><br><b>GATE IT 2007 | Question: 7</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 11, 00 \\)</p>",
            "<p>\\( 01, 10 \\)</p>",
            "<p>\\( 10, 01 \\)</p>",
            "<p>\\( 00, 11 \\)</p>"
          ],
          "correct_answer": "<p>\\( 00, 11 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3440/gate-it-2007-question-7\" target=\"_blank\">https://gateoverflow.in/3440/gate-it-2007-question-7</a></p>"
        }
      ]
    }
  ]
});
