window.__examLoadCallback({
  "title": "Computer Networks - Sockets",
  "duration": 11,
  "sections": [
    {
      "name": "Sockets",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"415\"></a><div itemprop=\"text\"><p>Which of the following system calls results in the sending of SYN packets?</p>\n\n</div><br><br><b>GATE CSE 2008 | Question: 17</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\textsf{socket} \\)</p>",
            "<p>\\( \\textsf{bind} \\)</p>",
            "<p>\\( \\textsf{listen} \\)</p>",
            "<p>\\( \\textsf{connect} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\textsf{connect} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/415/gate-cse-2008-question-17\" target=\"_blank\">https://gateoverflow.in/415/gate-cse-2008-question-17</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"482\"></a><div itemprop=\"text\"><p>A client process P needs to make a TCP connection to a server process S. Consider the following situation: the server process S executes a \\( \\text{socket()} \\), a \\( \\text{bind()} \\) and a \\( \\text{listen()} \\) system call in that order, following which it is preempted. Subsequently, the client process P executes a \\( \\text{socket()} \\) system call followed by \\( \\text{connect()} \\) system call to connect to the server process S. The server process has not executed any \\( \\text{accept()} \\) system call. Which one of the following events could take place?</p>\n\n</div><br><br><b>GATE CSE 2008 | Question: 59</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{connect()} \\) system call returns successfully</p>",
            "<p>\\( \\text{connect()} \\) system call blocks</p>",
            "<p>\\( \\text{connect()} \\) system call returns an error</p>",
            "<p>\\( \\text{connect()} \\) system call results in a core dump</p>"
          ],
          "correct_answer": "<p>\\( \\text{connect()} \\) system call returns an error</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/482/gate-cse-2008-question-59\" target=\"_blank\">https://gateoverflow.in/482/gate-cse-2008-question-59</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"1982\"></a><div itemprop=\"text\"><p>Which of the following socket API functions converts an unconnected active TCP socket into a passive socket?</p>\n\n</div><br><br><b>GATE CSE 2014 Set 2 | Question: 24</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\textsf{connect} \\)</p>",
            "<p>\\( \\textsf{bind} \\)</p>",
            "<p>\\( \\textsf{listen} \\)</p>",
            "<p>\\( \\textsf{accept} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\textsf{listen} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1982/gate-cse-2014-set-2-question-24\" target=\"_blank\">https://gateoverflow.in/1982/gate-cse-2014-set-2-question-24</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"8108\"></a><div itemprop=\"text\"><p>Identify the correct order in which a server process must invoke the function calls accept, bind, listen, and recv according to UNIX socket API.</p>\n\n</div><br><br><b>GATE CSE 2015 Set 2 | Question: 20</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\textsf{listen, accept, bind, recv} \\)</p>",
            "<p>\\( \\textsf{bind, listen, accept, recv} \\)</p>",
            "<p>\\( \\textsf{bind, accept, listen, recv} \\)</p>",
            "<p>\\( \\textsf{accept, listen, bind, recv} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\textsf{bind, listen, accept, recv} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/8108/gate-cse-2015-set-2-question-20\" target=\"_blank\">https://gateoverflow.in/8108/gate-cse-2015-set-2-question-20</a></p>"
        }
      ]
    }
  ]
});
