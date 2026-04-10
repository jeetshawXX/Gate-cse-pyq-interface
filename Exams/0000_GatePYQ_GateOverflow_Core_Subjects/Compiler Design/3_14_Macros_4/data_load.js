window.__examLoadCallback({
  "title": "Compiler Design - Macros",
  "duration": 11,
  "sections": [
    {
      "name": "Macros",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"552\"></a><div itemprop=\"text\">Macro expansion is done in pass one instead of pass two in a two pass macro assembler because _________</div><br><br><b>GATE CSE 1992 | Question: 01,vii</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/552/gate-cse-1992-question-01-vii\" target=\"_blank\">https://gateoverflow.in/552/gate-cse-1992-question-01-vii</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"2598\"></a><div itemprop=\"text\">\n<p>What are \\( x \\) and \\( y \\) in the following macro definition?</p>\n\n<pre class=\"prettyprint lang-c_cpp\">macro\tAdd x, y\n        Load y\n        Mul x\n        Store y\nend macro\t</pre>\n\n\n\n\n</div><br><br><b>GATE CSE 1995 | Question: 1.11</b></p>",
          "type": "single",
          "options": [
            "<p>Variables</p>",
            "<p>Identifiers</p>",
            "<p>Actual parameters</p>",
            "<p>Formal parameters</p>"
          ],
          "correct_answer": "<p>Formal parameters</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2598/gate-cse-1995-question-1-11\" target=\"_blank\">https://gateoverflow.in/2598/gate-cse-1995-question-1-11</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"2745\"></a><div itemprop=\"text\"><p>Which of the following macros can put a macro assembler into an infinite loop?</p>\n\n<ol style=\"list-style-type:lower-roman\">\n\t<li>\n\t<pre class=\"prettyprint lang-text\">.MACRO M1, X\n.IF EQ, X   ;if X=0 then\nM1 X + 1\n.ENDC\n.IF NE, X   ;if X ≠ O then\n.WORD X  ;address (X) is stored here\n.ENDC\n.ENDM\n</pre>\n\t</li>\n\t<li>\n\t<pre class=\"prettyprint lang-text\">.MACRO M2, X\n.IF EQ, X\nM2 X\n.ENDC\n.IF NE, X\n.WORD X + 1\n.ENDC\n.ENDM</pre>\n\t</li>\n</ol>\n\n\n\n</div><br><br><b>GATE CSE 1996 | Question: 2.16</b></p>",
          "type": "single",
          "options": [
            "<p>(ii) only</p>",
            "<p>(i) only</p>",
            "<p>both (i) and (ii)</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>(ii) only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2745/gate-cse-1996-question-2-16\" target=\"_blank\">https://gateoverflow.in/2745/gate-cse-1996-question-2-16</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"2225\"></a><div itemprop=\"text\"><p>The conditional expansion facility of macro processor is provided to</p>\n\n</div><br><br><b>GATE CSE 1997 | Question: 1.9</b></p>",
          "type": "single",
          "options": [
            "<p>test a condition during the execution of the expanded program</p>",
            "<p>to expand certain model statements depending upon the value of a condition during the execution of the expanded program</p>",
            "<p>to implement recursion</p>",
            "<p>to expand certain model statements depending upon the value of a condition during the process of macro expansion</p>"
          ],
          "correct_answer": "<p>to expand certain model statements depending upon the value of a condition during the process of macro expansion</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2225/gate-cse-1997-question-1-9\" target=\"_blank\">https://gateoverflow.in/2225/gate-cse-1997-question-1-9</a></p>"
        }
      ]
    }
  ]
});
