window.__examLoadCallback({
  "title": "Compiler Design - Grammar",
  "duration": 14,
  "sections": [
    {
      "name": "Grammar",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"995\"></a><div itemprop=\"text\"><p>Consider the following statements about the context free grammar<br><br>\\[ G = \\left \\{ S \\rightarrow SS, S \\rightarrow ab, S \\rightarrow ba, S \\rightarrow \\epsilon \\right \\}  \\]</p><ol style=\"list-style-type:upper-roman\"><li>\\( G \\) is ambiguous</li><li>\\( G \\) produces all strings with equal number of \\( a \\)’s and \\( b \\)’s</li><li>\\( G \\) can be accepted by a deterministic PDA.</li></ol><p>Which combination below expresses all the true statements about \\( G \\)?</p></div><br><br><b>Compiler Design: GATE CSE 2006 | Question: 32, ISRO2016</b></p>",
          "type": "single",
          "options": [
            "<p>I only</p>",
            "<p>I and III only</p>",
            "<p>II and III only</p>",
            "<p>I, II and III</p>"
          ],
          "correct_answer": "<p>I and III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/995/gate-cse-2006-question-32-isro2016-35\" target=\"_blank\">https://gateoverflow.in/995/gate-cse-2006-question-32-isro2016-35</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"54994\"></a><div itemprop=\"text\"><p>Consider the following grammar.</p>\n\n<ul>\n\t<li>\\( S \\rightarrow AB \\)</li>\n\t<li>\\( A&nbsp; \\rightarrow a \\)</li>\n\t<li>\\( A&nbsp; \\rightarrow BaB \\)</li>\n\t<li>\\( B&nbsp; \\rightarrow bbA \\)</li>\n</ul>\n\n<p>Which of the following statements is FALSE?</p>\n\n</div><br><br><b>Compiler Design: ISRO CSE 2014 | Question: 52</b></p>",
          "type": "single",
          "options": [
            "<p>The length of every string produced by this grammar is even</p>",
            "<p>No string produced by this grammar has three consecutive \\( a's \\)</p>",
            "<p>The length of substring produced by \\( B \\) is always odd</p>",
            "<p>No string produced by this grammar&nbsp;has four consecutive \\( b's \\)</p>"
          ],
          "correct_answer": "<p>No string produced by this grammar&nbsp;has four consecutive \\( b's \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/54994/isro-cse-2014-question-52\" target=\"_blank\">https://gateoverflow.in/54994/isro-cse-2014-question-52</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"331360\"></a><div itemprop=\"text\"><p>Given the grammar</p>\n\n<ul>\n\t<li>\\( s \\rightarrow T ^{\\ast} S\\ \\mid T \\)</li>\n\t<li>\\( T \\rightarrow U+T\\ \\mid U \\)</li>\n\t<li>\\( U \\rightarrow a&nbsp; \\mid b \\)</li>\n</ul>\n\n<p>Which of the following statements is wrong?</p>\n\n</div><br><br><b>Compiler Design: ISRO CSE 2020 | Question: 35</b></p>",
          "type": "single",
          "options": [
            "<p>Grammar is not ambiguous</p>",
            "<p>Priority of \\( + \\) over \\( ^{\\ast} \\) is ensured</p>",
            "<p>Right to left evaluation of \\( ^{\\ast} \\) and \\( + \\) happens</p>",
            "<p>None of these</p>"
          ],
          "correct_answer": "<p>None of these</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/331360/isro-cse-2020-question-35\" target=\"_blank\">https://gateoverflow.in/331360/isro-cse-2020-question-35</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"331302\"></a><div itemprop=\"text\"><p>A grammar is defined as</p>\n\n<ul>\n\t<li>\\( A \\rightarrow BC \\)</li>\n\t<li>\\( B \\rightarrow&nbsp; x \\mid Bx \\)</li>\n\t<li>\\( C \\rightarrow B \\mid D \\)</li>\n\t<li>\\( D \\rightarrow y \\mid Ey \\)</li>\n\t<li>\\( E \\rightarrow z \\)</li>\n</ul>\n\n<p>The non terminal alphabet of the grammar is</p>\n\n</div><br><br><b>Compiler Design: ISRO CSE 2020 | Question: 75</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\{A,B,C,D,E\\} \\)</p>",
            "<p>\\( \\{B,C,D,E\\} \\)</p>",
            "<p>\\( \\{A,B,C,D,E,x,y,z\\} \\)</p>",
            "<p>\\( \\{x,y,z\\} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\{A,B,C,D,E\\} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/331302/isro-cse-2020-question-75\" target=\"_blank\">https://gateoverflow.in/331302/isro-cse-2020-question-75</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"43760\"></a><div itemprop=\"text\">\n<p>Which of the following productions eliminate left recursion in the productions given below:</p>\n\n<p>\\( S \\rightarrow Aa \\mid b \\)</p>\n\n<p>\\( A \\rightarrow Ac \\mid Sd \\mid \\epsilon \\)</p>\n\n\n</div><br><br><b>Compiler Design: ISRO</b></p>",
          "type": "single",
          "options": [
            "<p>\\( S \\rightarrow Aa \\mid b, &nbsp;A \\rightarrow bdA', &nbsp;A' \\rightarrow A'c \\mid A'ba \\mid A \\mid \\epsilon \\)</p>",
            "<p>\\( S \\rightarrow Aa \\mid b, &nbsp;A \\rightarrow A' \\mid bdA', &nbsp;A' \\rightarrow cA' \\mid adA' \\mid \\epsilon \\)</p>",
            "<p>\\( S \\rightarrow Aa \\mid b, &nbsp;A \\rightarrow A'c \\mid A'd , &nbsp;A' \\rightarrow bdA' \\mid cA \\mid \\epsilon \\)</p>",
            "<p>\\( S \\rightarrow Aa \\mid b, &nbsp;A \\rightarrow cA' \\mid adA' \\mid bdA', &nbsp;A' \\rightarrow A \\mid \\epsilon \\)</p>"
          ],
          "correct_answer": "<p>\\( S \\rightarrow Aa \\mid b, &nbsp;A \\rightarrow A' \\mid bdA', &nbsp;A' \\rightarrow cA' \\mid adA' \\mid \\epsilon \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43760/isro-2013-6\" target=\"_blank\">https://gateoverflow.in/43760/isro-2013-6</a></p>"
        }
      ]
    }
  ]
});
