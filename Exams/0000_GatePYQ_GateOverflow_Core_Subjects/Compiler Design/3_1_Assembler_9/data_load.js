window.__examLoadCallback({
  "title": "Compiler Design - Assembler",
  "duration": 25,
  "sections": [
    {
      "name": "Assembler",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"553\"></a><div itemprop=\"text\">The purpose of instruction location counter in an assembler is _______</div><br><br><b>GATE CSE 1992 | Question: 01,viii</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/553/gate-cse-1992-question-01-viii\" target=\"_blank\">https://gateoverflow.in/553/gate-cse-1992-question-01-viii</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"579\"></a><div itemprop=\"text\"><p>Mention the pass number for each of the following activities that occur in a two pass assembler:</p></div><br><br><b>GATE CSE 1992 | Question: 03,ii</b></p>",
          "type": "numeric",
          "options": [
            "<p>object code generation</p>",
            "<p>literals added to literal table</p>",
            "<p>listing printed</p>",
            "<p>address resolution of local symbols</p>"
          ],
          "correct_answer": "Q-Q",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/579/gate-cse-1992-question-03-ii\" target=\"_blank\">https://gateoverflow.in/579/gate-cse-1992-question-03-ii</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"578\"></a><div itemprop=\"text\"><p>Write short answers to the following:</p>\n\n<ol start=\"1\" style=\"list-style-type:lower-roman\">\n\t<li>Which of the following macros can put a macro assembler into an infinite loop?</li>\n</ol>\n\n<table border=\"0\" cellpadding=\"1\" style=\"width:500px\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<pre class=\"prettyprint lang-c_cpp\">.MACRO M1,X\n.IF EQ,X\nM1 X+1\n.ENDC\n.IF NE,X\n.WORD X\n.ENDC\n.ENDM\n</pre>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t<pre class=\"prettyprint lang-c_cpp\">.MACRO M2,X\n.IF EQ,X\nM2 X\n.ENDC\n.IF NE,X\n.WORD X+1\n.ENDC\n.ENDM </pre>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p>Give an example call that does so.</p></div><br><br><b>GATE CSE 1992 | Question: 3,i</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/578/gate-cse-1992-question-3-i\" target=\"_blank\">https://gateoverflow.in/578/gate-cse-1992-question-3-i</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"2294\"></a><div itemprop=\"text\"><p>A simple two-pass assembler does the following in the first pass:</p>\n\n</div><br><br><b>GATE CSE 1993 | Question: 7.6</b></p>",
          "type": "multiple",
          "options": [
            "<p>It allocates space for the literals.</p>",
            "<p>It computes the total length of the program.</p>",
            "<p>It builds the symbol table for the symbols and their values.</p>",
            "<p>It generates code for all the load and store register instructions.</p>",
            "<p>None of the above.</p>"
          ],
          "correct_answer": [
            "<p>It allocates space for the literals.</p>",
            "<p>It computes the total length of the program.</p>",
            "<p>It builds the symbol table for the symbols and their values.</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2294/gate-cse-1993-question-7-6\" target=\"_blank\">https://gateoverflow.in/2294/gate-cse-1993-question-7-6</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"2513\"></a><div itemprop=\"text\">State whether the following statements are True or False with reasons for your answer:<br>\n<br>\nCoroutine is just another name for a subroutine.</div><br><br><b>GATE CSE 1994 | Question: 17a</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "True",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2513/gate-cse-1994-question-17a\" target=\"_blank\">https://gateoverflow.in/2513/gate-cse-1994-question-17a</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"360171\"></a><div itemprop=\"text\">State whether the following statements are True or False with reasons for your answer:<br>\n<br>\nA two pass assembler uses its machine opcode table in the first pass of assembly.</div><br><br><b>GATE CSE 1994 | Question: 17b</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/360171/gate-cse-1994-question-17b\" target=\"_blank\">https://gateoverflow.in/360171/gate-cse-1994-question-17b</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"2514\"></a><div itemprop=\"text\">State whether the following statements are True or False with reasons for your answer<br>\n<br>\nA subroutine cannot always be used to replace a macro in an assembly language program.</div><br><br><b>GATE CSE 1994 | Question: 18a</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "True",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2514/gate-cse-1994-question-18a\" target=\"_blank\">https://gateoverflow.in/2514/gate-cse-1994-question-18a</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"360170\"></a><div itemprop=\"text\">State whether the following statements are True or False with reasons for your answer<br>\n<br>\nA symbol declared as ‘external’ in an assembly language program is assigned an address outside the program by the assembler itself.</div><br><br><b>GATE CSE 1994 | Question: 18b</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "False",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/360170/gate-cse-1994-question-18b\" target=\"_blank\">https://gateoverflow.in/360170/gate-cse-1994-question-18b</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"2721\"></a><div itemprop=\"text\"><p>The pass numbers for each of the following activities</p>\n\n<ol style=\"list-style-type:lower-roman\">\n\t<li>\n\t<p>object code generation</p>\n\t</li>\n\t<li>\n\t<p>literals added to literal table</p>\n\t</li>\n\t<li>\n\t<p>listing printed</p>\n\t</li>\n\t<li>\n\t<p>address resolution of local symbols that occur in a two pass assembler</p>\n\t</li>\n</ol>\n\n<p>respectively are</p>\n\n\n\n</div><br><br><b>GATE CSE 1996 | Question: 1.17</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 1, 2, 1, 2 \\)</p>",
            "<p>\\( 2, 1, 2, 1 \\)</p>",
            "<p>\\( 2, 1, 1, 2 \\)</p>",
            "<p>\\( 1, 2, 2, 2 \\)</p>"
          ],
          "correct_answer": "<p>\\( 2, 1, 2, 1 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2721/gate-cse-1996-question-1-17\" target=\"_blank\">https://gateoverflow.in/2721/gate-cse-1996-question-1-17</a></p>"
        }
      ]
    }
  ]
});
