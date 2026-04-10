window.__examLoadCallback({
  "title": "Operating System - System Call",
  "duration": 6,
  "sections": [
    {
      "name": "System Call",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"166451\"></a><div itemprop=\"text\"><p>Match the following WINDOWS system calls and UNIX system calls with reference to process control and File manipulation. \\[ \\begin{array}{llll} &amp; \\textbf{Windows} &amp; &amp; \\textbf{UNIX} \\\\ (a) &amp; \\text{Create –&nbsp;process ( )} &amp; (i) &amp; \\text{Open ( )} \\\\ (b) &amp; \\text{WaitForSingleObject ( )} &amp; (ii) &amp; \\text{Close ( )} \\\\ (c)&nbsp;&amp; \\text{CreateFile ( )} &amp; (iii) &amp; \\text{Fork ( )} \\\\ (d) &amp; \\text{CloseHandle ( )} &amp; (iv) &amp; \\text{Wait ( )} \\end{array} \\]</p>\n\n</div><br><br><b>Operating System: UGC NET CSE | November 2017 | Part 3 | Question: 75</b></p>",
          "type": "single",
          "options": [
            "<p>\\( (a)-(iii) \\: (b)-(iv) \\: (c)-(i) \\: d-(ii) \\)</p>",
            "<p>\\( (a)-(iv)&nbsp;\\: (b)-(iii) \\: (c)-(i) \\: d-(ii) \\)</p>",
            "<p>\\( (a)-(iv) \\: (b)-(iii) \\: (c)-(ii) \\: d-(i) \\)</p>",
            "<p>\\( (a)-(iii) \\: (b)-(iv) \\: (c)-(ii) \\: d-(i) \\)</p>"
          ],
          "correct_answer": "<p>\\( (a)-(iii) \\: (b)-(iv) \\: (c)-(i) \\: d-(ii) \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/166451/ugc-net-cse-november-2017-part-3-question-75\" target=\"_blank\">https://gateoverflow.in/166451/ugc-net-cse-november-2017-part-3-question-75</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"349589\"></a><div itemprop=\"text\"><p>&nbsp;</p>\n\n<p>Assuming that the system call \\( \\text{fork}() \\) never fails, consider the following C program \\( P1 \\) and \\( P2 \\) executed on a UNIX/Linux system:</p>\n\n<p>\\( \\begin{array}{|ll|ll|} \\hline &amp; /*P1*/&nbsp; &amp; &amp;/*P2*/ \\\\ \\text{int} &amp; \\text{main}() \\{ &amp; \\text{int} &amp; \\text{main} () \\{ \\\\ &amp; \\text{fork} (); &amp; &amp; \\text{fork();}&nbsp;\\\\ &amp; \\text{fork}(); &amp;&amp;&nbsp; \\text{printf(“Happy \\n”)}; \\\\ &amp;&nbsp;\\text{fork}(); &amp;&nbsp; &amp; \\text{fork()};&nbsp;\\\\ &amp; \\text{printf(“Happy \\n”);}&nbsp; &amp; &amp;\\text{printf(“Happy \\n”);} \\\\ \\} &amp;&nbsp;&nbsp;&amp; &amp; \\text{fork()};\\\\ &amp;&amp; &amp; \\text{printf(“Happy \\n”);} \\\\ &amp;&amp;&nbsp;\\} \\\\ \\hline \\end{array} \\)</p>\n\n<p>Statement \\( I \\): \\( P1 \\) displays “Happy” \\( 8 \\) times</p>\n\n<p>Statement \\( II \\): \\( P2 \\) displays “Happy” \\( 12 \\) times</p>\n\n<p>In&nbsp;the light of the above statements, choose the correct answer from the options given below</p>\n\n</div><br><br><b>Operating System: UGC NET CSE | October 2020 | Part 2 | Question: 84</b></p>",
          "type": "single",
          "options": [
            "<p>Both Statement \\( I \\) and Statement \\( II \\) are true</p>",
            "<p>Both Statement \\( I \\) and Statement \\( II \\) are false</p>",
            "<p>Statement \\( I \\) is correct but Statement \\( II \\) is false</p>",
            "<p>Statement \\( I \\) is incorrect but Statement \\( II \\) is true</p>"
          ],
          "correct_answer": "<p>Statement \\( I \\) is correct but Statement \\( II \\) is false</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/349589/ugc-net-cse-october-2020-part-2-question-84\" target=\"_blank\">https://gateoverflow.in/349589/ugc-net-cse-october-2020-part-2-question-84</a></p>"
        }
      ]
    }
  ]
});
