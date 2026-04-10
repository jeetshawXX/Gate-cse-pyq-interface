window.__examLoadCallback({
  "title": "Digital Logic - Carry Generator",
  "duration": 6,
  "sections": [
    {
      "name": "Carry Generator",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"1294\"></a><div itemprop=\"text\"><p>Given two three bit numbers \\( a_{2}a_{1}a_{0} \\)&nbsp;and \\( b_{2}b_{1}b_{0} \\)&nbsp;and \\( c \\)&nbsp;the carry in, the function&nbsp;that represents the&nbsp;c<em>arry</em>&nbsp;generate function when these two numbers are added&nbsp;is:&nbsp;</p>\n\n</div><br><br><b>GATE CSE 2006 | Question: 36</b></p>",
          "type": "single",
          "options": [
            "<p>\\( a_{2}b_{2}+a_{2}a_{1}b_{1}+a_{2}a_{1}a_{0}b_{0}+a_{2}a_{0}b_{1}b_{0}+a_{1}b_{2}b_{1}+a_{1}a_{0}b_{2}b_{0}+a_{0}b_{2}b_{1}b_{0} \\)</p>",
            "<p>\\( a_{2}b_{2}+a_{2}b_{1}b_{0}+a_{2}a_{1}b_{1}b_{0}+a_{1}a_{0}b_{2}b_{1}+a_{1}a_{0}b_{2}+a_{1}a_{0}b_{2}b_{0}+a_{2}a_{0}b_{1}b_{0} \\)</p>",
            "<p>\\( a_{2}+b_{2}+(a_{2}\\oplus b_{2}) ( a_{1}+b_{1}+(a_{1}\\oplus b_{1})+(a_{0}+b_{0})) \\)</p>",
            "<p>\\( a_{2}b_{2}+\\overline{a_{2}}a_{1}b_{1}+\\overline{a_{2}a_{1}}a_{0}b_{0}+\\overline{a_{2}}a_{0}\\overline{b_{1}}b_{0}+a_{1}\\overline{b_{2}}b_{1}+\\overline{a_{1}}a_{0}\\overline{b_{2}}b_{0}+a_{0}\\overline{b_{2}b_{1}}b_{0} \\)</p>"
          ],
          "correct_answer": "<p>\\( a_{2}b_{2}+a_{2}a_{1}b_{1}+a_{2}a_{1}a_{0}b_{0}+a_{2}a_{0}b_{1}b_{0}+a_{1}b_{2}b_{1}+a_{1}a_{0}b_{2}b_{0}+a_{0}b_{2}b_{1}b_{0} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1294/gate-cse-2006-question-36\" target=\"_blank\">https://gateoverflow.in/1294/gate-cse-2006-question-36</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"1233\"></a><div itemprop=\"text\"><p>In a look-ahead carry generator, the carry generate function \\( G_i \\) and the carry propagate function \\( P_i \\) for inputs \\( A_i \\) and \\( B_i \\) are given by:</p>\n\n<p>\\[ P_i = A_i \\oplus B_i \\text{&nbsp;and }G_i = A_iB_i \\]</p>\n\n<p>The expressions for the sum bit \\( S_i \\) and the carry bit \\( C_{i+1} \\) of the look ahead carry adder are given by:</p>\n\n<p>\\[ S_i = P_i \\oplus C_i \\text{ and } C_{i+1} = G_i + P_iC_i, \\text{ where }C_0 \\text{&nbsp;is the input carry}. \\]</p>\n\n<p>Consider a two-level logic implementation of the look-ahead carry generator. Assume that all&nbsp;\\( P_i \\) and \\( G_i \\) are available for the carry generator circuit and that the AND and OR gates can have any number of inputs. The number of AND gates and OR gates needed to implement the look-ahead carry generator for a \\( 4 \\)-bit adder with \\( S_3, S_2, S_1, S_0 \\) and \\( C_4 \\) as&nbsp; its outputs are respectively:</p>\n\n</div><br><br><b>GATE CSE 2007 | Question: 35</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 6, 3 \\)</p>",
            "<p>\\( 10, 4 \\)</p>",
            "<p>\\( 6, 4 \\)</p>",
            "<p>\\( 10, 5 \\)</p>"
          ],
          "correct_answer": "<p>\\( 10, 4 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1233/gate-cse-2007-question-35\" target=\"_blank\">https://gateoverflow.in/1233/gate-cse-2007-question-35</a></p>"
        }
      ]
    }
  ]
});
