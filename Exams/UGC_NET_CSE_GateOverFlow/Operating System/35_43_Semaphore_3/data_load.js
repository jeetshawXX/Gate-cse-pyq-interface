window.__examLoadCallback({
  "title": "Operating System - Semaphore",
  "duration": 8,
  "sections": [
    {
      "name": "Semaphore",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"152930\"></a><div itemprop=\"text\">A semaphore count of negative n means (s = – n) that the queue contains ________ waiting processes.<br>\n<br>\n(A) n + 1<br>\n<br>\n(B) n<br>\n<br>\n(C) n – 1<br>\n<br>\n(D) 0</div><br><br><b>Operating System: UGC NET CSE | December 2009 | Part 2 | Question: 38</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "Q-Q",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/152930/ugc-net-cse-december-2009-part-2-question-38\" target=\"_blank\">https://gateoverflow.in/152930/ugc-net-cse-december-2009-part-2-question-38</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"335127\"></a><div itemprop=\"text\"><p>There are three processes \\( P_{1}, P_{2} \\) and \\( P_{3} \\)&nbsp;sharing a semaphore for synchronizing a variable. Initial value of semaphore is one. Assume that negative value of semaphore tells us how many processes are waiting in queue. Processes access the semaphore in following order :</p>\n\n\n\n<ol start=\"2\" style=\"list-style-type:lower-alpha\" type=\"a\">\n\t<li>\\( P1 \\) needs to access</li>\n</ol>\n\n<ol start=\"100\" style=\"list-style-type:lower-roman\" type=\"i\">\n\t<li>\\( P3 \\) needs to access</li>\n</ol>\n\n<ol start=\"500\" style=\"list-style-type:lower-roman\" type=\"i\">\n\t<li>\\( P2 \\) exits critical section</li>\n</ol>\n\n<ol start=\"5\" style=\"list-style-type:lower-alpha\" type=\"a\">\n\t<li>\\( P1 \\) exits critical section</li>\n</ol>\n\n<p>The final value of semaphore will be :</p>\n\n<ol start=\"1\" style=\"list-style-type:upper-alpha\">\n\t<li>\\( 0 \\)</li>\n\t<li>\\( 1 \\)</li>\n\t<li>\\( -1 \\)</li>\n\t<li>\\( -2 \\)</li>\n</ol></div><br><br><b>Operating System: UGC NET CSE | January 2017 | Part 2 | Question: 36</b></p>",
          "type": "single",
          "options": [
            "<p>\\( P2 \\) needs to access</p>"
          ],
          "correct_answer": "<p>\\( P2 \\) needs to access</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/335127/ugc-net-cse-january-2017-part-2-question-36\" target=\"_blank\">https://gateoverflow.in/335127/ugc-net-cse-january-2017-part-2-question-36</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"58837\"></a><div itemprop=\"text\"><p>Suppose \\( \\text{S} \\) and \\( \\text{Q} \\) are two semaphores initialized to \\( 1.\\;\\text{P1} \\) and \\( \\text{P2} \\) are two processes which are sharing resources.</p><p>\\( \\begin{array}{} \\textbf{P1 has statements} &amp; \\textbf{P2 has statements}&nbsp;\\\\&nbsp;\\text{wait(S);} &amp; \\text{wait(Q);} \\\\ \\text{wait(Q);} &amp; \\text{wait(S);} \\\\ \\text{critical-section 1;}&amp; \\text{critical-section 2;} \\\\ \\text{signal(S);} &amp; \\text{signal(Q);} \\\\ \\text{Signal(Q);} &amp; \\text{signal(S);} \\\\&nbsp;\\end{array} \\)</p><p>Their execution may sometimes lead to an undesirable situation called:</p></div><br><br><b>Operating System: UGC NET CSE | June 2013 | Part 3 | Question: 60</b></p>",
          "type": "single",
          "options": [
            "<p>Starvation</p>",
            "<p>Race condition</p>",
            "<p>Multithreading</p>",
            "<p>Deadlock</p>"
          ],
          "correct_answer": "<p>Deadlock</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/58837/ugc-net-cse-june-2013-part-3-question-60\" target=\"_blank\">https://gateoverflow.in/58837/ugc-net-cse-june-2013-part-3-question-60</a></p>"
        }
      ]
    }
  ]
});
