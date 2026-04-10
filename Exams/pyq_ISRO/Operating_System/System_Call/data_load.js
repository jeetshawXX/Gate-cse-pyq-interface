window.__examLoadCallback({
  "title": "Operating_System - System_Call",
  "duration": 19,
  "sections": [
    {
      "name": "System_Call",
      "questions": [
        {
          "id": 1,
          "question": "<p>The difference between a named pipe and a regular file in Unix is that <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Unlike a regular file, named pipe is a special file</p>",
            "<b>B.</b> <p>The data in a pipe is transient, unlike the content of a regular file</p>",
            "<b>C.</b> <p>Pipes forbid random accessing, while regular files do allow this.</p>",
            "<b>D.</b> <p>All of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>All of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213575/isro2018-13\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>The following C program:<br><pre><code> {\n    fork(); fork(); printf(\"yes\");\n    \n}</code></pre>If we execute this core segment, how many times the string yes will be printed? <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only once</p>",
            "<b>B.</b> <p>2 times</p>",
            "<b>C.</b> <p>4 times</p>",
            "<b>D.</b> <p>8 times</p>"
          ],
          "correct_answer": "<b>C.</b> <p>4 times</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213584/isro2018-4\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>The Linux command<br><pre><code> mknod myfifo b 4 16</code></pre> <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>will create a character device if user is root</p>",
            "<b>B.</b> <p>will create a named pipe FIFO if user is root</p>",
            "<b>C.</b> <p>will create a block device if user is root</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>C.</b> <p>will create a block device if user is root</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128774/isro2017-72\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Wha is the output of the following program?<br><pre><code> main()\n{\n    int a = 10;\n    if(fork()) == 0))\n        a++;\n    printf(\"%d\\n\",a);  \n}</code></pre><br> <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>10 and 11</p>",
            "<b>B.</b> <p>10</p>",
            "<b>C.</b> <p>11</p>",
            "<b>D.</b> <p>11 and 11</p>"
          ],
          "correct_answer": "<b>A.</b> <p>10 and 11</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128699/isro2017-51\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following program.<br><pre><code> main()\n{\n    fork();\n    fork();\n    fork();\n}</code></pre>How many new processes will be created? <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>8</p>",
            "<b>B.</b> <p>6</p>",
            "<b>C.</b> <p>7</p>",
            "<b>D.</b> <p>5</p>"
          ],
          "correct_answer": "<b>C.</b> <p>7</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/51698/isro2015-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Which of the following UNIX command allows scheduling a program to be executed at the specifies time? <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>cron</p>",
            "<b>B.</b> <p>nice</p>",
            "<b>C.</b> <p>date and time</p>",
            "<b>D.</b> <p>schedule</p>"
          ],
          "correct_answer": "<b>A.</b> <p>cron</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52822/isro2011-57\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>Fork is <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>the creation of a new job</p>",
            "<b>B.</b> <p>the dispatching of a task</p>",
            "<b>C.</b> <p>increasing the priority of a task</p>",
            "<b>D.</b> <p>the creation of a new process</p>"
          ],
          "correct_answer": "<b>D.</b> <p>the creation of a new process</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/50002/isro2008-63\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
