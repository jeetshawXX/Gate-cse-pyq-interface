window.__examLoadCallback({
  "title": "Databases - Serializability",
  "duration": 8,
  "sections": [
    {
      "name": "Serializability",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"336329\"></a><div itemprop=\"text\"><p>Consider the following four schedules due to three transactions (indicated by the subscript) using read and write on a data item \\( x \\), denoted by \\( r(x) \\) and \\( w(x) \\)respectively. Which one of them is conflict serializable?</p>\n\n<ol>\n\t<li>\\( r_1(x);r_2(x);w_1(x);r_3(x);w_2(x) \\)</li>\n\t<li>\\( r_2(x);r_1(x);w_2(x);r_3(x);w_1(x) \\)</li>\n\t<li>\\( r_3(x);r_2(x);r_1(x);w_2(x);w_1(x) \\)</li>\n\t<li>\\( r_2(x);w_2(x);r_3(x);r_1(x);w_1(x) \\)</li>\n</ol>\n\n</div><br><br><b>Databases: NIELIT 2017 July Scientist B (CS)</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 1 \\)</p>",
            "<p>\\( 2 \\)</p>",
            "<p>\\( 3 \\)</p>",
            "<p>\\( 4 \\)</p>"
          ],
          "correct_answer": "<p>\\( 4 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336329/nielit-2017-july-scientist-b-cs-section-b-46\" target=\"_blank\">https://gateoverflow.in/336329/nielit-2017-july-scientist-b-cs-section-b-46</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"366910\"></a><div itemprop=\"text\"><p>If all transactions obey the _____________ then all possible interleaved schedules (non-serial schedules) are serializable.</p>\n\n</div><br><br><b>Databases: NIELIT 2021 Dec Scientist B</b></p>",
          "type": "single",
          "options": [
            "<p>Lock based protocol</p>",
            "<p>Two phase Locking protocal</p>",
            "<p>Read-write lock based protocol&nbsp;</p>",
            "<p>Time stamp based protocol</p>"
          ],
          "correct_answer": "<p>Two phase Locking protocal</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/366910/nielit-2021-dec-scientist-b-section-b-107\" target=\"_blank\">https://gateoverflow.in/366910/nielit-2021-dec-scientist-b-section-b-107</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"373781\"></a><div itemprop=\"text\"><p>Consider the following two phase locking protocol. Suppose a transaction \\( \\text{T} \\) accesses (for read or write operations), a certain set of objects \\( \\{\\text{O1},\\ldots, \\text{Ok} \\} \\). This is done in the following manner:</p>\n\n<ul>\n\t<li>\\( \\text{Step 1}. \\text{T} \\) acquires exclusive locks to \\( \\text{O1},\\ldots, \\text{Ok} \\) in increasing order of their addresses.</li>\n\t<li>\\( \\text{Step 2} \\). The required operations are performed.</li>\n\t<li>\\( \\text{Step 3} \\). All locks are released</li>\n</ul>\n\n<p>This protocol will</p>\n\n</div><br><br><b>Databases: NIELIT 2022 April Scientist B | Section B | Question: 57</b></p>",
          "type": "single",
          "options": [
            "<p>&nbsp;guarantee serializability and &nbsp;deadlock-freedom&nbsp;</p>",
            "<p>&nbsp;guarantee neither serializability nor deadlock-freedom&nbsp;</p>",
            "<p>&nbsp;guarantee serializability but not deadlock-freedom &nbsp;</p>",
            "<p>&nbsp;guarantee deadlock-freedom but not serializability.</p>"
          ],
          "correct_answer": "<p>&nbsp;guarantee serializability and &nbsp;deadlock-freedom&nbsp;</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/373781/nielit-2022-april-scientist-b-section-b-question-57\" target=\"_blank\">https://gateoverflow.in/373781/nielit-2022-april-scientist-b-section-b-question-57</a></p>"
        }
      ]
    }
  ]
});
