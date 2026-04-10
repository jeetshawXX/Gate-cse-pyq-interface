window.__examLoadCallback({
  "title": "Operating System - Context Switch",
  "duration": 11,
  "sections": [
    {
      "name": "Context Switch",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"1490\"></a><div itemprop=\"text\"><p>Which of the following actions is/are typically not performed by the operating system when switching context from process \\( A \\) to process \\( B \\)?</p>\n\n</div><br><br><b>GATE CSE 1999 | Question: 2.12</b></p>",
          "type": "single",
          "options": [
            "<p>Saving current register values and restoring saved register values for process \\( B \\).</p>",
            "<p>Changing address translation tables.</p>",
            "<p>Swapping out the memory image of process \\( A \\) to the disk.</p>",
            "<p>Invalidating the translation look-aside buffer.</p>"
          ],
          "correct_answer": "<p>Swapping out the memory image of process \\( A \\) to the disk.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1490/gate-cse-1999-question-2-12\" target=\"_blank\">https://gateoverflow.in/1490/gate-cse-1999-question-2-12</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"644\"></a><div itemprop=\"text\"><p>Which of the following need not necessarily be saved on a context switch between processes?</p>\n\n\n\n</div><br><br><b>GATE CSE 2000 | Question: 1.20, ISRO2008-47</b></p>",
          "type": "single",
          "options": [
            "<p>General purpose registers</p>",
            "<p>Translation look-aside buffer</p>",
            "<p>Program counter</p>",
            "<p>All of the above</p>"
          ],
          "correct_answer": "<p>Translation look-aside buffer</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/644/gate-cse-2000-question-1-20-isro2008-47\" target=\"_blank\">https://gateoverflow.in/644/gate-cse-2000-question-1-20-isro2008-47</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"2108\"></a><div itemprop=\"text\"><p>Let the time taken to switch from user mode to kernel mode of execution be \\( T1 \\) while time taken to switch between two user processes be \\( T2 \\). Which of the following is correct?</p>\n\n</div><br><br><b>GATE CSE 2011 | Question: 6, UGCNET-June2013-III: 62</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T1 &gt; T2 \\)</p>",
            "<p>\\( T1 = T2 \\)</p>",
            "<p>\\( T1 &lt; T2 \\)</p>",
            "<p>Nothing can be said about the relation between \\( T1 \\) and \\( T2 \\)</p>"
          ],
          "correct_answer": "<p>\\( T1 &lt; T2 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2108/gate-cse-2011-question-6-ugcnet-june2013-iii-62\" target=\"_blank\">https://gateoverflow.in/2108/gate-cse-2011-question-6-ugcnet-june2013-iii-62</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"422882\"></a><div itemprop=\"text\"><p>​​​​Consider a process \\( \\text{P} \\) running on a \\( \\text{CPU} \\). Which one or more of the following events will <em>always </em>trigger a context switch by the \\( \\text{OS} \\) that results in process \\( \\mathrm{P} \\) moving to a non-running state (e.g., ready, blocked)?</p></div><br><br><b>GATE CSE 2024 | Set 2 | Question: 15</b></p>",
          "type": "multiple",
          "options": [
            "<p>\\( \\text{P} \\) makes a blocking system call to read a block of data from the disk</p>",
            "<p>\\( \\text{P} \\) tries to access a page that is in the swap space, triggering a page fault</p>",
            "<p>An interrupt is raised by the disk to deliver data requested by some other process</p>",
            "<p>A timer interrupt is raised by the hardware</p>"
          ],
          "correct_answer": [
            "<p>\\( \\text{P} \\) makes a blocking system call to read a block of data from the disk</p>",
            "<p>\\( \\text{P} \\) tries to access a page that is in the swap space, triggering a page fault</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/422882/gate-cse-2024-set-2-question-15\" target=\"_blank\">https://gateoverflow.in/422882/gate-cse-2024-set-2-question-15</a></p>"
        }
      ]
    }
  ]
});
