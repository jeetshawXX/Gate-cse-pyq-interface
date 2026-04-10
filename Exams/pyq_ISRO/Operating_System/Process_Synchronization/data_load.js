window.__examLoadCallback({
  "title": "Operating_System - Process_Synchronization",
  "duration": 30,
  "sections": [
    {
      "name": "Process_Synchronization",
      "questions": [
        {
          "id": 1,
          "question": "<p>The hardware implementation which provides mutual exclusion is <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Semaphores</p>",
            "<b>B.</b> <p>Test and set instructions</p>",
            "<b>C.</b> <p>Both options</p>",
            "<b>D.</b> <p>None of the options</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Test and set instructions</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331484/isro2020-57\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>In multi-programmed systems, it is advantageous if some programs such as editors and compilers can be\nshared by several users.<br>\nWhich of the following must be true of multi-programmed systems in order that a single copy of a program can be shared by several\nusers?<br><br>\nI.   The program is a macro<br>\nII.  The program is recursive<br>\nIII. The program is reentrant<br> <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>III only</p>",
            "<b>D.</b> <p>I, II and III</p>"
          ],
          "correct_answer": "<b>C.</b> <p>III only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213520/isro2018-67\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Procedures P1 and P2 have a producer-consumer relationship, communicating by the use of a set of shared buffers.<br><br>P1 : <br>       repeat<br>Obtain an empty buffer<br>Fill it<br>Return a full buffer<br>forever<br><br>P2:<br> repeat<br>Obtain a full buffer<br>Empty it<br>Return an empty buffer<br>forever<br><br>Increasing the number of buffers is likely to do which of the following?<br><br>I. Increase the rate at which requests are satisfied (throughput)<br>\nII. Decrease the likelihood of deadlock<br>\nIII. Increase the ease of achieving a correct implementation <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>III only</p>",
            "<b>B.</b> <p>II only</p>",
            "<b>C.</b> <p>I only</p>",
            "<b>D.</b> <p>II and III only</p>"
          ],
          "correct_answer": "<b>C.</b> <p>I only</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213521/isro2018-67\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>At a particular time the value of counting semaphore is 10. It will become 7 after: <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3 V operations</p>",
            "<b>B.</b> <p>3 P operations</p>",
            "<b>C.</b> <p>5 V operations and 2 P operations</p>",
            "<b>D.</b> <p>2 V operations and 5 P operations</p>"
          ],
          "correct_answer": "<b>B.</b> <p>3 P operations</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128491/isro2017-71\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>A critical region <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>is a piece of code which only one process executes at a time</p>",
            "<b>B.</b> <p>is a region prone to deadlock</p>",
            "<b>C.</b> <p>is a piece of code which only a finite number of processes execute</p>",
            "<b>D.</b> <p>is found only in windows NT operating system</p>"
          ],
          "correct_answer": "<b>A.</b> <p>is a piece of code which only one process executes at a time</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128764/isro2017-68\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Mutual exclusion problem occurs <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>between two disjoint processes that do not interact</p>",
            "<b>B.</b> <p>among processes that share resources</p>",
            "<b>C.</b> <p>among processes that do not use the same resource</p>",
            "<b>D.</b> <p>between two processes that uses different resources of different machine</p>"
          ],
          "correct_answer": "<b>B.</b> <p>among processes that share resources</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128711/isro2017-56\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>At a particular time of computation the value of a counting semaphore is 7. Then 20 P operations and x V operations were completed on this semaphore. If the new value of semaphore is 5, x will be <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>18</p>",
            "<b>B.</b> <p>22</p>",
            "<b>C.</b> <p>15</p>",
            "<b>D.</b> <p>13</p>"
          ],
          "correct_answer": "<b>A.</b> <p>18</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/56082/isro2016-45\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:<br>At a particular time of computation, the value of a counting semaphore is 7. Then 20 P operations and 15 V operations were completed on this semaphore. The resulting value of the semaphore is : <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>42</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>7</p>",
            "<b>D.</b> <p>12</p>"
          ],
          "correct_answer": "<b>B.</b> <p>2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/564/gate1992-02-x-isro2015-35\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Semaphores are used to solve the problem of<br>I.  Race Condition<br>II.  Process Synchronization<br>III. Mutual Exclusion<br>IV.  None of the above <br><br><strong>(ISRO CSE 2015)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II</p>",
            "<b>B.</b> <p>II and III</p>",
            "<b>C.</b> <p>All of the above</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>B.</b> <p>II and III</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/19489/isro2015-30\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>A critical section is a program segment <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>which should run in a certain amount of time</p>",
            "<b>B.</b> <p>which avoids deadlocks</p>",
            "<b>C.</b> <p>where shared resources are accessed</p>",
            "<b>D.</b> <p>which must be enclosed by a pair of semaphore operations, P and V</p>"
          ],
          "correct_answer": "<b>C.</b> <p>where shared resources are accessed</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2723/gate1996-1-19-isro2008-61\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Semaphores <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>synchronize critical resources to prevent deadlock</p>",
            "<b>B.</b> <p>synchronize critical resources to prevent contention</p>",
            "<b>C.</b> <p>are used to do I/O</p>",
            "<b>D.</b> <p>are used for memory management</p>"
          ],
          "correct_answer": "<b>B.</b> <p>synchronize critical resources to prevent contention</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49517/isro2007-42-ugcnet-june2010-ii-37\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
