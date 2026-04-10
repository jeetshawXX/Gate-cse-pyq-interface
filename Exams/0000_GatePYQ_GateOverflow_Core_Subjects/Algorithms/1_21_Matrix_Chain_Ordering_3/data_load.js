window.__examLoadCallback({
  "title": "Algorithms - Matrix Chain Ordering",
  "duration": 8,
  "sections": [
    {
      "name": "Matrix Chain Ordering",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"2140\"></a><div itemprop=\"text\"><p>Four Matrices \\( M_1, M_2, M_3 \\) and \\( M_4 \\) of dimensions \\(  p \\times q, \\:\\:q \\times r, \\:\\:r \\times s \\) and \\( s \\times t \\) respectively can be multiplied in several ways with different number of total scalar multiplications. For example when multiplied as \\( ((M_1 \\times M_2) \\times (M_3 \\times M_4)) \\), the total number of scalar multiplications is \\( pqr + rst + prt \\). When multiplied as \\( (((M_1 \\times M_2) \\times M_3) \\times M_4) \\), the total number of scalar multiplications is \\( pqr + prs + pst \\).<br><br>If \\( p=10, q=100, r=20, s=5 \\) and \\( t=80 \\), then the minimum number of scalar multiplications needed is</p></div><br><br><b>GATE CSE 2011 | Question: 38</b></p>",
          "type": "single",
          "options": [
            "<p>&nbsp;\\( 248000 \\)</p>",
            "<p>&nbsp;\\( 44000 \\)</p>",
            "<p>&nbsp;\\( 19000 \\)</p>",
            "<p>&nbsp;\\( 25000 \\)</p>"
          ],
          "correct_answer": "<p>&nbsp;\\( 19000 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2140/gate-cse-2011-question-38\" target=\"_blank\">https://gateoverflow.in/2140/gate-cse-2011-question-38</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"39587\"></a><div itemprop=\"text\">Let \\( A_{1}, A_{2}, A_{3} \\) and \\( A_{4} \\) be four matrices of dimensions \\( 10 \\times 5, 5 \\times 20, 20 \\times 10 \\) and \\( 10 \\times 5 \\), respectively. The minimum number of scalar multiplications required to find the product \\( A_{1}A_{2}A_{3}A_{4} \\) using the basic matrix multiplication method is _________.</div><br><br><b>GATE CSE 2016 Set 2 | Question: 38</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "1500",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/39587/gate-cse-2016-set-2-question-38\" target=\"_blank\">https://gateoverflow.in/39587/gate-cse-2016-set-2-question-38</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"204105\"></a><div itemprop=\"text\"><p>Assume that multiplying a matrix \\( G_1 \\) of dimension \\(  p \\times q \\) with another matrix \\( G_2 \\) of dimension \\( q \\times r \\) requires \\( pqr \\) scalar multiplications. Computing the product of \\( n \\) matrices \\( G_1G_2G_3 \\dots G_n \\) can be done by parenthesizing in different ways. Define \\( G_i G_{i+1} \\) as an <strong>explicitly computed pair </strong>for a given paranthesization&nbsp;if they are directly multiplied. For example, in the matrix multiplication chain \\( G_1G_2G_3G_4G_5G_6 \\) using parenthesization&nbsp;\\( (G_1(G_2G_3))(G_4(G_5G_6)), G_2G_3 \\) and \\( G_5G_6 \\) are only explicitly computed pairs.</p><p>Consider a matrix multiplication chain \\( F_1F_2F_3F_4F_5 \\), where matrices \\( F_1, F_2, F_3, F_4 \\) and \\( F_5 \\) are of dimensions \\(  2 \\times 25, 25&nbsp;\\times 3, 3&nbsp;\\times 16, 16&nbsp;\\times 1  \\) and \\(  1&nbsp;\\times 1000 \\), respectively. In the parenthesization&nbsp;of \\( F_1F_2F_3F_4F_5 \\) that minimizes the total number of scalar multiplications, the explicitly computed pairs is/are</p></div><br><br><b>GATE CSE 2018 | Question: 31</b></p>",
          "type": "single",
          "options": [
            "<p>\\( F_1F_2 \\) and \\( F_3F_4 \\) only</p>",
            "<p>\\( F_2F_3 \\) only</p>",
            "<p>\\( F_3F_4 \\) only</p>",
            "<p>\\( F_1F_2 \\) and \\( F_4F_5 \\) only</p>"
          ],
          "correct_answer": "<p>\\( F_3F_4 \\) only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/204105/gate-cse-2018-question-31\" target=\"_blank\">https://gateoverflow.in/204105/gate-cse-2018-question-31</a></p>"
        }
      ]
    }
  ]
});
