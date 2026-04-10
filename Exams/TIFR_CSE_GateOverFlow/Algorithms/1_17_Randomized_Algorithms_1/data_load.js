window.__examLoadCallback({
  "title": "Algorithms - Randomized Algorithms",
  "duration": 3,
  "sections": [
    {
      "name": "Randomized Algorithms",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"473084\"></a><div itemprop=\"text\"><p>There are \\( n \\) people in a house and \\( n \\) pairs of shoes such that the \\( i \\)-th shoe fits the \\( i \\)-th person's feet (and no one else's). A burglar comes and throws the shoes around in some indescribable manner. The people want to determine whose feet fit which shoe and they can only use the following oracles:</p><ul><li>\\( \\textsf{Fit} \\) : Takes as input a person and a shoe and outputs \\( &lt; \\) if the person's feet are too small for the shoe, \\( = \\) if they fit, and \\( &gt; \\) if they are too large.</li><li>\\( \\textsf{Compare} \\) : Takes as input two people or two shoes and outputs \\( &lt; \\) if the first is smaller than the second, \\( = \\) if they are the same size, and \\( &gt; \\) if the first is larger than the second.</li></ul><p>Which of the following statements are \\( \\text{TRUE} \\) (assuming access to randomness)?</p><ol><li>If they only have the \\( \\textsf{Fit} \\)&nbsp; oracle, the determination can be made in \\( O(n \\log n) \\) calls to the oracle in expectation.</li><li>If they only have the \\( \\textsf{Compare} \\) &nbsp;oracle, the determination can be made in \\( O(n \\log n) \\) calls to the oracle in expectation.</li><li>If they have both oracles, the determination can be made in \\( O(\\sqrt{n}) \\) calls to the oracles in expectation.</li></ol><p>&nbsp;</p></div><br><br><b>Algorithms: TIFR CSE 2025 | Part B | Question: 13</b></p>",
          "type": "single",
          "options": [
            "<p>Only \\( 1 \\).</p>",
            "<p>Only \\( 2 \\).</p>",
            "<p>Only \\( 3 \\) .</p>",
            "<p>Only \\( 1 \\) and \\( 2 \\).</p>",
            "<p>All three statements are true.<p>&nbsp;</p></p>"
          ],
          "correct_answer": "<p>Only \\( 1 \\) and \\( 2 \\).</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/473084/tifr-cse-2025-part-b-question-13\" target=\"_blank\">https://gateoverflow.in/473084/tifr-cse-2025-part-b-question-13</a></p>"
        }
      ]
    }
  ]
});
