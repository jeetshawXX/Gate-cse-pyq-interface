window.__examLoadCallback({
  "title": "CO and Architecture - 8085 Microprocessor",
  "duration": 17,
  "sections": [
    {
      "name": "8085 Microprocessor",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"49921\"></a><div itemprop=\"text\"><p>Consider the following Assembly language program</p>\n\n<table border=\"0\" cellpadding=\"1\" style=\"width:134px; border-spacing: 1px;\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td style=\"width:50px\">MVIA</td>\n\t\t\t<td style=\"width:71px\">30 H</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td style=\"width:50px\">ACI</td>\n\t\t\t<td style=\"width:71px\">30 H</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td style=\"width:50px\">XRA</td>\n\t\t\t<td style=\"width:71px\">A</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td style=\"width:50px\">POP</td>\n\t\t\t<td style=\"width:71px\">H</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p>After the execution of the above program, the contents of the accumulator will be</p>\n\n</div><br><br><b>CO & Architecture: ISRO CSE 2008 | Question: 39</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\textsf{30 H} \\)</p>",
            "<p>\\( \\textsf{60 H} \\)</p>",
            "<p>\\( \\textsf{00 H} \\)</p>",
            "<p>contents of stack</p>"
          ],
          "correct_answer": "<p>\\( \\textsf{00 H} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/49921/isro-cse-2008-question-39\" target=\"_blank\">https://gateoverflow.in/49921/isro-cse-2008-question-39</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"47657\"></a><div itemprop=\"text\"><p>The TRAP is one of the interrupts available in \\( \\textsf{INTEL 8085}. \\) Which one of the following statements is true of TRAP ?</p>\n\n</div><br><br><b>CO & Architecture: ISRO CSE 2008 | Question: 45</b></p>",
          "type": "single",
          "options": [
            "<p>it is level triggered</p>",
            "<p>it is negative edge triggered</p>",
            "<p>it is \\( \\textsf{+ve} \\) edge triggered</p>",
            "<p>it is both \\( \\textsf{+ve} \\) and \\( \\textsf{-ve} \\) edges triggered</p>"
          ],
          "correct_answer": "<p>it is both \\( \\textsf{+ve} \\) and \\( \\textsf{-ve} \\) edges triggered</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/47657/isro-cse-2008-question-45\" target=\"_blank\">https://gateoverflow.in/47657/isro-cse-2008-question-45</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"128631\"></a><div itemprop=\"text\"><p>Which interrupt in \\( 8085 \\) Microprocessor is unmaskable?</p>\n\n</div><br><br><b>CO & Architecture: ISRO CSE 2017 | Question: 20</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\textsf{RST 5.5} \\)</p>",
            "<p>\\( \\textsf{RST 7.5} \\)</p>",
            "<p>\\( \\textsf{TRAP} \\)</p>",
            "<p>Both (a) and (b)</p>"
          ],
          "correct_answer": "<p>\\( \\textsf{TRAP} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/128631/isro-cse-2017-question-20\" target=\"_blank\">https://gateoverflow.in/128631/isro-cse-2017-question-20</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"43970\"></a><div itemprop=\"text\">\n<p>How many number of times the instruction sequence below will loop before coming out of the loop?</p>\n\n<p><span style=\"line-height: 1.6;\">&nbsp; &nbsp; &nbsp; &nbsp; MOV AL, 00H</span></p>\n\n<p><span style=\"line-height: 1.6;\">&nbsp;A1: &nbsp;INC AL</span></p>\n\n<p>&nbsp; &nbsp; &nbsp; &nbsp; JNZ A1</p>\n\n\n</div><br><br><b>CO & Architecture: ISRO</b></p>",
          "type": "single",
          "options": [
            "<p>1</p>",
            "<p>255</p>",
            "<p>256</p>",
            "<p>Will not come out of the loop.</p>"
          ],
          "correct_answer": "<p>256</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43970/isro-2013-35\" target=\"_blank\">https://gateoverflow.in/43970/isro-2013-35</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"43971\"></a><div itemprop=\"text\">\n<p>In 8085 microprocessor, the ISR for handling trap interrupt is at which location?</p>\n\n\n</div><br><br><b>CO & Architecture: ISRO</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 3CH \\)</p>",
            "<p>\\( 34H \\)</p>",
            "<p>\\( 74H \\)</p>",
            "<p>\\( 24H \\)</p>"
          ],
          "correct_answer": "<p>\\( 24H \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/43971/isro-2013-36\" target=\"_blank\">https://gateoverflow.in/43971/isro-2013-36</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"46026\"></a><div itemprop=\"text\"><p>The contents of the flag register after execution of the following program by&nbsp;\\( 8085 \\) microprocessor will be</p>\n\n<p>\\( \\textbf{Program} \\)<br>\n\\( \\textsf{SUB A} \\)<br>\n\\( \\textsf{MVI B,(01)}_\\textsf{H} \\)<br>\n\\( \\textsf{DCR B} \\)<br>\n\\( \\textsf{HLT} \\)</p>\n\n</div><br><br><b>CO & Architecture: ISRO2015</b></p>",
          "type": "single",
          "options": [
            "<p>&nbsp;\\( (54)_\\textsf{H} \\)</p>",
            "<p>\\( (00)_\\textsf{H} \\)</p>",
            "<p>\\( (01)_\\textsf{H} \\)</p>",
            "<p>\\( (45)_\\textsf{H} \\)</p>"
          ],
          "correct_answer": "<p>&nbsp;\\( (54)_\\textsf{H} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/46026/isro2015-61\" target=\"_blank\">https://gateoverflow.in/46026/isro2015-61</a></p>"
        }
      ]
    }
  ]
});
