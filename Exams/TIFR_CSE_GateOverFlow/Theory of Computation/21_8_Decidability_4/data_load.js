window.__examLoadCallback({
  "title": "Theory of Computation - Decidability",
  "duration": 11,
  "sections": [
    {
      "name": "Decidability",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"18745\"></a><div itemprop=\"text\"><p>Which of the following problems is decidable?&nbsp;(Here, CFG means context free grammar and CFL means context free language.)</p>\n\n</div><br><br><b>Theory of Computation: TIFR CSE 2010 | Part B | Question: 25</b></p>",
          "type": "single",
          "options": [
            "<p>Given a CFG \\( G \\), find whether \\( L(G) = R \\), where \\( R \\) is regular set.</p>",
            "<p>Given a CFG \\( G \\), find whether \\( L(G) = \\{\\} \\).</p>",
            "<p>Find whether the intersection of two CFLs is empty.</p>",
            "<p>Find whether the complement of CFL is a CFL.</p>",
            "<p>Find whether CFG \\( G_1 \\) and CFG \\( G_2 \\) generate the same language, i.e, \\( L\\left (G_1 \\right ) = L\\left (G_2 \\right) \\).</p>"
          ],
          "correct_answer": "<p>Given a CFG \\( G \\), find whether \\( L(G) = \\{\\} \\).</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/18745/tifr-cse-2010-part-b-question-25\" target=\"_blank\">https://gateoverflow.in/18745/tifr-cse-2010-part-b-question-25</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"20404\"></a><div itemprop=\"text\"><p>Let \\( A_{TM} \\) be defined as follows:</p>\n\n<p>\\( A_{TM}=\\left \\{ \\left \\langle M, w \\right \\rangle \\mid \\text{ The Turing machine  \\)M\\(  accepts the word } w \\right \\} \\)</p>\n\n<p>And let \\( L \\) be some \\( \\mathbf{NP}- \\) complete language. Which of the following statements is FALSE?</p>\n\n</div><br><br><b>Theory of Computation: TIFR CSE 2011 | Part B | Question: 25</b></p>",
          "type": "single",
          "options": [
            "<p>\\( L\\in \\mathbf{NP} \\)</p>",
            "<p>Every problem in \\( \\mathbf{NP} \\) is polynomial time reducible to \\( L \\).</p>",
            "<p>Every problem in \\( \\mathbf{NP} \\) is polynomial time reducible to \\( A_{TM} \\).</p>",
            "<p>Since \\( L \\) is \\( \\mathbf{NP}- \\) complete, \\( A_{TM} \\) is polynomial time reducible to \\( L \\).</p>",
            "<p>\\( A_{TM} \\notin&nbsp;\\mathbf{NP} \\).</p>"
          ],
          "correct_answer": "<p>Since \\( L \\) is \\( \\mathbf{NP}- \\) complete, \\( A_{TM} \\) is polynomial time reducible to \\( L \\).</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/20404/tifr-cse-2011-part-b-question-25\" target=\"_blank\">https://gateoverflow.in/20404/tifr-cse-2011-part-b-question-25</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"333121\"></a><div itemprop=\"text\"><p>Consider the following statements.</p>\n\n<ol>\n\t<li>The intersection of two context-free languages is always context-free</li>\n\t<li>The super-set of a context-free languages is never regular</li>\n\t<li>The subset of a decidable language is always decidable</li>\n\t<li>Let \\( \\Sigma = \\{a,b,c\\}. \\) Let \\( L\\subseteq&nbsp;\\Sigma \\) be the language of all strings in which either the number of occurrences of \\( a \\) is the same as the number of occurrences of \\( b \\) OR the number occurrences of \\( b \\) is the same as the number of occurrences of \\( c \\). Then, \\( L \\) is not context-free.</li>\n</ol>\n\n<p>Which of the&nbsp;above statements are true?</p>\n\n</div><br><br><b>Theory of Computation: TIFR CSE 2020 | Part B | Question: 2</b></p>",
          "type": "numeric",
          "options": [
            "<p>Only \\( (1) \\)</p>",
            "<p>Only \\( (1) \\) and \\( (2) \\)</p>",
            "<p>Only \\( (1),(2) \\) and \\( (3) \\)</p>",
            "<p>Only \\( (4) \\)</p>",
            "<p>None of \\( (1),(2),(3),(4) \\) are true.</p>"
          ],
          "correct_answer": "E",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/333121/tifr-cse-2020-part-b-question-2\" target=\"_blank\">https://gateoverflow.in/333121/tifr-cse-2020-part-b-question-2</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"419342\"></a><div itemprop=\"text\"><p>For two languages \\( \\text{A, B} \\) over the alphabet \\( \\Sigma \\), let the perfect shuffle of \\( \\text{A} \\) and \\( \\text{B} \\) be the language</p>\n\n<p>\\begin{Bmatrix}<br>\nw=a_1 b_1 a_2 b_2 \\cdots a_k b_k \\text{where}&nbsp;a_1 a_2 \\cdots a_k \\in \\text{A}&nbsp;and b_1 b_2 \\cdots b_k \\in B.&amp; \\\\&nbsp;\\text{and}&nbsp;k \\in\\mathbb{N}<br>\n&nbsp;&amp;&nbsp;<br>\n\\end{Bmatrix}<br>\n<br>\nConsider the following statements.</p>\n\n<ol start=\"1\" style=\"list-style-type:lower-roman\">\n\t<li>If \\( \\text{A} \\) and \\( \\text{B} \\) are regular, then perfect shuffle of&nbsp;\\( \\text{A} \\)&nbsp;and&nbsp;\\( \\text{B} \\)&nbsp;is regular.</li>\n\t<li>If \\( \\text{A} \\)&nbsp;and \\( \\text{B} \\)&nbsp;are regular, then perfect shuffle of \\( \\text{A} \\)&nbsp;and \\( \\text{B} \\)&nbsp;is context-free.</li>\n\t<li>If \\( \\text{A} \\)&nbsp;and \\( \\text{B} \\)&nbsp;are decidable, then perfect shuffle of \\( \\text{A} \\)&nbsp;and \\( \\text{B} \\)&nbsp;is decidable.</li>\n</ol>\n\n<p>Which of above statements is/are true?</p>\n\n</div><br><br><b>Theory of Computation: TIFR CSE 2024 | Part B | Question: 5</b></p>",
          "type": "single",
          "options": [
            "<p>All of \\( \\text{(i), (ii) and (iii)} \\).</p>",
            "<p>Only \\( \\text{(i) and (ii)} \\).</p>",
            "<p>Only \\( \\text{(ii)} \\).</p>",
            "<p>Only \\( \\text{(ii) and (iii)} \\).</p>",
            "<p>None of \\( \\text{(i), (ii), (iii)} \\) is true.\n\t<p>&nbsp;</p></p>"
          ],
          "correct_answer": "<p>All of \\( \\text{(i), (ii) and (iii)} \\).</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/419342/tifr-cse-2024-part-b-question-5\" target=\"_blank\">https://gateoverflow.in/419342/tifr-cse-2024-part-b-question-5</a></p>"
        }
      ]
    }
  ]
});
