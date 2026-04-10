window.__examLoadCallback({
  "title": "Operating System - Resource Allocation Graph",
  "duration": 3,
  "sections": [
    {
      "name": "Resource Allocation Graph",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"460797\"></a><div itemprop=\"text\"><p>\\( P=\\left\\{P_{1}, P_{2}, P_{3}, P_{4}\\right\\} \\) consists of all active processes in an operating system.</p><p>\\( R=\\left\\{R_{1}, R_{2}, R_{3}, R_{4}\\right\\} \\) consists of single instances of distinct types of resources in the system.</p><p>The resource allocation graph has the following assignment and claim edges.</p><p>Assignment edges: \\( R_{1} \\rightarrow P_{1}, R_{2} \\rightarrow P_{2}, R_{3} \\rightarrow P_{3}, R_{4} \\rightarrow P_{4} \\) (the assignment edge \\( R_{1} \\rightarrow P_{1} \\) means resource \\( R_{1} \\) is assigned to process \\( P_{1} \\), and so on for others)</p><p>Claim edges: \\( P_{1} \\rightarrow R_{2}, P_{2} \\rightarrow R_{3}, P_{3} \\rightarrow R_{1}, P_{2} \\rightarrow R_{4}, P_{4} \\rightarrow R_{2} \\) (the claim edge \\( P_{1} \\rightarrow R_{2} \\) means process \\( P_{1} \\) is waiting for resource \\( R_{2} \\), and so on for others)</p><p>Which of the following statement(s) is/are CORRECT?</p></div><br><br><b>GATE CSE 2025 | Set 2 | Question: 38</b></p>",
          "type": "multiple",
          "options": [
            "<p>Aborting \\( P_{1} \\) makes the system deadlock free.</p>",
            "<p>Aborting \\( P_{3} \\) makes the system deadlock free.</p>",
            "<p>Aborting \\( P_{2} \\) makes the system deadlock free.</p>",
            "<p>Aborting \\( P_{1} \\) and \\( P_{4} \\) makes the system deadlock free.</p>"
          ],
          "correct_answer": [
            "<p>Aborting \\( P_{2} \\) makes the system deadlock free.</p>",
            "<p>Aborting \\( P_{1} \\) and \\( P_{4} \\) makes the system deadlock free.</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/460797/gate-cse-2025-set-2-question-38\" target=\"_blank\">https://gateoverflow.in/460797/gate-cse-2025-set-2-question-38</a></p>"
        }
      ]
    }
  ]
});
