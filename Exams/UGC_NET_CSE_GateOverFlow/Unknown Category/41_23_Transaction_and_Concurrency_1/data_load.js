window.__examLoadCallback({
  "title": "Unknown Category - Transaction and Concurrency",
  "duration": 3,
  "sections": [
    {
      "name": "Transaction and Concurrency",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"288294\"></a><div itemprop=\"text\"><p>​​​​​​​Consider the following sequence of two transactions on a bank account \\( (A) \\) with initial balance \\( 20,000 \\) that transfers \\( 5,000 \\) to another account \\( (B) \\) and then apply \\( 10 \\% \\) interest.</p>\n\n<ol style=\"list-style-type:lower-roman\" type=\"i\">\n\t<li>T1 start</li>\n\t<li>T1 A old=\\( 20,000 \\) new \\( 15,000 \\)</li>\n\t<li>T1 B old = \\( 12,000 \\) new = \\( 17,000 \\)</li>\n\t<li>T1 commit</li>\n\t<li>T2 start</li>\n\t<li>T2 A old = \\( 15,000 \\) new = \\( 16,500 \\)</li>\n\t<li>T2 commit</li>\n</ol>\n\n<p>Suppose the database&nbsp;system crashes just before log record (vii) is written. When the system is restarted, which one statement is true of the recovery process?</p>\n\n</div><br><br><b>Databases: UGC NET CSE | December 2018 | Part 2 | Question: 83</b></p>",
          "type": "numeric",
          "options": [
            "<p>We must redo log record (vi) to set \\( A \\) to \\( 16,500 \\)</p>",
            "<p>We must redo log record (vi) to set \\( A \\) to \\( 16,500 \\) and then redo log records (ii) and (iii)</p>",
            "<p>We need not redo log records (ii) and (iii) because transaction \\( T1 \\) is committed</p>",
            "<p>We can apply redo and undo operations in arbitrary order because they are idempotent</p>"
          ],
          "correct_answer": "Q-Q",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/288294/ugc-net-cse-december-2018-part-2-question-83\" target=\"_blank\">https://gateoverflow.in/288294/ugc-net-cse-december-2018-part-2-question-83</a></p>"
        }
      ]
    }
  ]
});
