window.__examLoadCallback({
  "title": "Databases - Transaction and Concurrency",
  "duration": 14,
  "sections": [
    {
      "name": "Transaction and Concurrency",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"336295\"></a><div itemprop=\"text\"><p>In conservative two phase locking protocol, a transaction</p>\n\n</div><br><br><b>Databases: NIELIT 2017 DEC Scientist B</b></p>",
          "type": "single",
          "options": [
            "<p>Should release all the locks only at the beginning of transaction</p>",
            "<p>Should release exclusive&nbsp;locks only after&nbsp;the commit operation</p>",
            "<p>Should acquire&nbsp;all the exclusive&nbsp;locks&nbsp;at the beginning of transaction</p>",
            "<p>Should acquire&nbsp;all the locks&nbsp;at the beginning of transaction</p>"
          ],
          "correct_answer": "<p>Should acquire&nbsp;all the locks&nbsp;at the beginning of transaction</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336295/nielit-2017-dec-scientist-b-section-b-18\" target=\"_blank\">https://gateoverflow.in/336295/nielit-2017-dec-scientist-b-section-b-18</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"336922\"></a><div itemprop=\"text\"><p>When transaction \\( Ti \\) requests a data item currently held by \\( Tj,Ti \\) is allowed to wait only if it has a timestamp smaller than that of \\( Tj \\) (that is \\( Ti \\) is order than Tj). Otherwise, \\( Ti \\) is rolled back (dies). This is</p>\n\n</div><br><br><b>Databases: NIELIT 2017 OCT Scientific Assistant A (CS)</b></p>",
          "type": "single",
          "options": [
            "<p>Wait-die</p>",
            "<p>Wait-wound</p>",
            "<p>Wound-wait</p>",
            "<p>Wait</p>"
          ],
          "correct_answer": "<p>Wait-die</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336922/nielit-2017-oct-scientific-assistant-a-cs-section-c-10\" target=\"_blank\">https://gateoverflow.in/336922/nielit-2017-oct-scientific-assistant-a-cs-section-c-10</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"336954\"></a><div itemprop=\"text\"><p>When transaction \\( Ti \\) requests a data item currently held by \\( Tj,Ti \\) is allowed to wait only if it has a time stamp smaller than that of \\( Tj \\) (that is \\( Ti \\) is order than Tj). Otherwise, \\( Ti \\) is rolled back (dies). This is</p>\n\n</div><br><br><b>Databases: NIELIT 2017 OCT Scientific Assistant A (IT)</b></p>",
          "type": "single",
          "options": [
            "<p>Wait-die</p>",
            "<p>Wait-wound</p>",
            "<p>Wound-wait</p>",
            "<p>Wait</p>"
          ],
          "correct_answer": "<p>Wait-die</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/336954/nielit-2017-oct-scientific-assistant-a-it-section-b-31\" target=\"_blank\">https://gateoverflow.in/336954/nielit-2017-oct-scientific-assistant-a-it-section-b-31</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"378685\"></a><div itemprop=\"text\"><p>Which of the following is not a \\( \\text{JDBC} \\) connection isolation levels?</p>\n\n</div><br><br><b>Databases: NIELIT 2021 Dec Scientist B</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{TRANSACTION_NONE} \\)</p>",
            "<p>\\( \\text{TRANSACTION_READ_COMMITTED} \\)</p>",
            "<p>\\( \\text{TRANSACTION_REPEATABLE_READ} \\)</p>",
            "<p>\\( \\text{TRANSACTION_NONREPEATABLE_READ} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{TRANSACTION_NONREPEATABLE_READ} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/378685/nielit-2021-dec-scientist-b-section-b-78\" target=\"_blank\">https://gateoverflow.in/378685/nielit-2021-dec-scientist-b-section-b-78</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"351382\"></a><div itemprop=\"text\"><p>Which of the following scenarios may lead to an irrecoverable error in a database system?</p>\n\n</div><br><br><b>Databases: NIELIT Scientific Assistant A 2020 November: 78</b></p>",
          "type": "single",
          "options": [
            "<p>A transaction writes a data item after it is read by an uncommitted transaction</p>",
            "<p>A transaction reads a data item after it is read by an uncommitted transaction</p>",
            "<p>A transaction reads a data item after it is written by a committed transaction</p>",
            "<p>A transaction reads a data item after it is written by an uncommitted transaction</p>"
          ],
          "correct_answer": "<p>A transaction reads a data item after it is written by an uncommitted transaction</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/351382/nielit-scientific-assistant-a-2020-november-78\" target=\"_blank\">https://gateoverflow.in/351382/nielit-scientific-assistant-a-2020-november-78</a></p>"
        }
      ]
    }
  ]
});
