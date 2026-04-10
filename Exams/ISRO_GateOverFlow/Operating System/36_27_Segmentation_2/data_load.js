window.__examLoadCallback({
  "title": "Operating System - Segmentation",
  "duration": 6,
  "sections": [
    {
      "name": "Segmentation",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"16942\"></a><div itemprop=\"text\"><p>&nbsp;Consider the following segment table in segmentation scheme :</p>\n\n<p>\\( \\begin{array}{|l|l|l|l|l|}\\hline&nbsp;&nbsp;\\textbf{Segment ID} &amp; \\textbf{Base} &amp; \\textbf{Limit} \\\\\\hline \\text{0} &amp; \\text{200} &amp; \\text{200} \\\\\\hline \\text{1} &amp; \\text{5000} &amp; \\text{1210} \\\\\\hline \\text{2} &amp; \\text{1527} &amp; \\text{498} \\\\\\hline \\text{3} &amp; \\text{2500} &amp; \\text{50} \\\\\\hline&nbsp; \\end{array} \\)</p>\n\n<p>&nbsp;What happens if the logical address requested is – Segment Id \\( 2 \\) and offset \\( 1000 \\)?</p>\n\n</div><br><br><b>Operating System: ISRO CSE 2014 | Question: 18</b></p>",
          "type": "single",
          "options": [
            "<p>Fetches the entry at the physical address \\( 2527 \\) for segment Id \\( 2 \\)</p>",
            "<p>A trap is generated</p>",
            "<p>Deadlock</p>",
            "<p>Fetches the entry at offset \\( 27 \\) in Segment Id \\( 3 \\)</p>"
          ],
          "correct_answer": "<p>A trap is generated</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/16942/isro-cse-2014-question-18\" target=\"_blank\">https://gateoverflow.in/16942/isro-cse-2014-question-18</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"51212\"></a><div itemprop=\"text\">\n<p>If there are 32 segments, each size 1 k bytes, then the logical address should have</p>\n\n\n</div><br><br><b>Operating System: ISRO2015</b></p>",
          "type": "single",
          "options": [
            "<p>13 bits</p>",
            "<p>14 bits</p>",
            "<p>15 bits</p>",
            "<p>16 bits</p>"
          ],
          "correct_answer": "<p>15 bits</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/51212/isro2015-31\" target=\"_blank\">https://gateoverflow.in/51212/isro2015-31</a></p>"
        }
      ]
    }
  ]
});
