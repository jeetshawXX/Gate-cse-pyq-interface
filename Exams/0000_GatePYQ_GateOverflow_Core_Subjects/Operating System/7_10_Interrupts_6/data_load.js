window.__examLoadCallback({
  "title": "Operating System - Interrupts",
  "duration": 17,
  "sections": [
    {
      "name": "Interrupts",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"2290\"></a><div itemprop=\"text\"><p>The details of an interrupt cycle are shown in figure.</p>\n\n<p style=\"text-align:center\"><img alt=\"\" height=\"295\" src=\"images/gateOverflow_pyq_images/operating_system___interrupts/2aec2609b25c35cc8fcd3a7171e6b9fc.png\" width=\"570\"></p>\n\n<p>Given that an interrupt input arrives every \\( 1 \\)&nbsp;msec, what is the percentage &nbsp;of the&nbsp; total time that the CPU devotes for the main program execution.</p></div><br><br><b>GATE CSE 1993 | Question: 6.8</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "90.00",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2290/gate-cse-1993-question-6-8\" target=\"_blank\">https://gateoverflow.in/2290/gate-cse-1993-question-6-8</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"2239\"></a><div itemprop=\"text\"><p>When an interrupt occurs, an operating system</p>\n\n</div><br><br><b>GATE CSE 1997 | Question: 3.8</b></p>",
          "type": "single",
          "options": [
            "<p>ignores the interrupt</p>",
            "<p>always changes state of interrupted process after processing the interrupt</p>",
            "<p>always resumes execution of interrupted process after processing the interrupt</p>",
            "<p>may change state of interrupted process to ‘blocked’ and schedule another process.</p>"
          ],
          "correct_answer": "<p>may change state of interrupted process to ‘blocked’ and schedule another process.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2239/gate-cse-1997-question-3-8\" target=\"_blank\">https://gateoverflow.in/2239/gate-cse-1997-question-3-8</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"1655\"></a><div itemprop=\"text\"><p>Which of the following devices should get higher priority in assigning interrupts?</p>\n\n</div><br><br><b>GATE CSE 1998 | Question: 1.18</b></p>",
          "type": "single",
          "options": [
            "<p>Hard disk</p>",
            "<p>Printer</p>",
            "<p>Keyboard</p>",
            "<p>Floppy disk</p>"
          ],
          "correct_answer": "<p>Hard disk</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1655/gate-cse-1998-question-1-18\" target=\"_blank\">https://gateoverflow.in/1655/gate-cse-1998-question-1-18</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"1462\"></a><div itemprop=\"text\"><p>Listed below are some operating system abstractions (in the left column) and the hardware components (in the right column)\\[ \\small \\begin{array}{|cl|cl|}\\hline \\text{(A)}&amp; \\text{Thread}&nbsp; &amp;&nbsp; \\text{1.}&amp; \\text{Interrupt} \\\\\\hline&nbsp;<br>\\text{(B)}&amp; \\text{Virtual address space} &amp; \\text{2.}&amp; \\text{Memory} \\\\\\hline&nbsp;<br>\\text{(C)} &amp;\\text{File system} &amp; \\text{3.} &amp;\\text{CPU} \\\\\\hline&nbsp;<br>\\text{(D)} &amp;\\text{Signal} &amp; \\text{4.}&amp; \\text{Disk} \\\\\\hline \\end{array} \\]</p></div><br><br><b>GATE CSE 1999 | Question: 1.9</b></p>",
          "type": "single",
          "options": [
            "<p>(A) – 2 (B) – 4 (C) –&nbsp;3 (D) –&nbsp;1&nbsp;</p>",
            "<p>(A) –&nbsp;1 (B) – 2 (C) –&nbsp;3 (D) –&nbsp;4</p>",
            "<p>(A)&nbsp;–&nbsp;3 (B) – 2 (C)&nbsp;–&nbsp;4 (D)&nbsp;–&nbsp;1</p>",
            "<p>(A) – 4 (B) – 1 (C) –&nbsp;2 (D) – 3</p>"
          ],
          "correct_answer": "<p>(A)&nbsp;–&nbsp;3 (B) – 2 (C)&nbsp;–&nbsp;4 (D)&nbsp;–&nbsp;1</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1462/gate-cse-1999-question-1-9\" target=\"_blank\">https://gateoverflow.in/1462/gate-cse-1999-question-1-9</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"705\"></a><div itemprop=\"text\"><p>A processor needs software interrupt to</p>\n\n</div><br><br><b>GATE CSE 2001 | Question: 1.12</b></p>",
          "type": "single",
          "options": [
            "<p>test the interrupt system of the processor</p>",
            "<p>implement co-routines</p>",
            "<p>obtain system services which need execution of privileged instructions</p>",
            "<p>return from subroutine</p>"
          ],
          "correct_answer": "<p>obtain system services which need execution of privileged instructions</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/705/gate-cse-2001-question-1-12\" target=\"_blank\">https://gateoverflow.in/705/gate-cse-2001-question-1-12</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"2113\"></a><div itemprop=\"text\"><p>A computer handles several interrupt sources of which of the following are relevant for this question.</p><ul><li>Interrupt from CPU temperature sensor (raises interrupt if CPU temperature is too high)</li><li>Interrupt from Mouse (raises&nbsp;Interrupt if the mouse is moved or a button is pressed)</li><li>Interrupt from Keyboard (raises&nbsp;Interrupt if a key is pressed or released)</li><li>Interrupt from Hard Disk (raises&nbsp;Interrupt when a disk read is completed)</li></ul><div>Which one of these will be handled at the&nbsp;<strong>HIGHEST</strong>&nbsp;priority?</div></div><br><br><b>GATE CSE 2011 | Question: 11</b></p>",
          "type": "single",
          "options": [
            "<p>Interrupt from Hard Disk</p>",
            "<p>Interrupt from Mouse</p>",
            "<p>Interrupt from Keyboard</p>",
            "<p>Interrupt from CPU temperature sensor</p>"
          ],
          "correct_answer": "<p>Interrupt from CPU temperature sensor</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2113/gate-cse-2011-question-11\" target=\"_blank\">https://gateoverflow.in/2113/gate-cse-2011-question-11</a></p>"
        }
      ]
    }
  ]
});
