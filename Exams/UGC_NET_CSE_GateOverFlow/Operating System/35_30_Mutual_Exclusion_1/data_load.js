window.__examLoadCallback({
  "title": "Operating System - Mutual Exclusion",
  "duration": 3,
  "sections": [
    {
      "name": "Mutual Exclusion",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"56420\"></a><div itemprop=\"text\"><p>Consider the methods used by processes \\( P_1 \\) and \\( P_2 \\) for accessing their critical sections.&nbsp; The initial values of shared Boolean variables \\( S_1 \\) and \\( S_2 \\) are randomly assigned,</p>\n\n<table border=\"0\" cellpadding=\"1\" style=\"width:500px; border-spacing: 1px;\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<p>\\( P_1 \\)</p>\n\n\t\t\t<p>while (\\( S_1 \\)==\\( S_2 \\));</p>\n\n\t\t\t<p>critical section</p>\n\n\t\t\t<p>\\( S_1 \\)=\\( S_2 \\);</p>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<p>\\( P_2 \\)</p>\n\n\t\t\t<p>while (\\( S_1 \\)==S2);</p>\n\n\t\t\t<p>critical section</p>\n\n\t\t\t<p>\\( S_1 \\)=\\( S_2 \\);</p>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p>Which one of the following statements describes the properties achieved?</p>\n\n</div><br><br><b>Operating System: UGC NET CSE | June 2012 | Part 3 | Question: 65</b></p>",
          "type": "single",
          "options": [
            "<p>Mutual exclusion but not progress</p>",
            "<p>Progress but not mutual exclusion</p>",
            "<p>Neither mutual exclusion nor progress</p>",
            "<p>Both mutual exclusion and progress</p>"
          ],
          "correct_answer": "<p>Neither mutual exclusion nor progress</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/56420/ugc-net-cse-june-2012-part-3-question-65\" target=\"_blank\">https://gateoverflow.in/56420/ugc-net-cse-june-2012-part-3-question-65</a></p>"
        }
      ]
    }
  ]
});
