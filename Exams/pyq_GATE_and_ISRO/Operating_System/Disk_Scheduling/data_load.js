window.__examLoadCallback({
  "title": "Operating_System - Disk_Scheduling",
  "duration": 42,
  "sections": [
    {
      "name": "Disk_Scheduling",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following five disk five disk access requests of the form (request id, cylinder number) that are present in the disk scheduler queue at a given time.<br><br>\n(P,155),(Q,85),(R,110),(S,30),(T,115)<br><br>\nAssume the head is positioned at cylinder 100. The scheduler follows Shortest Seek Time First scheduling to service the requests.\n<br><br>\nWhich one of the following statements is FALSE? <br><br><strong>(GATE CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>T is serviced before P.</p>",
            "<b>B.</b> <p>Q is serviced after S, but before T.</p>",
            "<b>C.</b> <p>The head reverses its direction of movement between servicing of Q and P.</p>",
            "<b>D.</b> <p>R is serviced before P.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Q is serviced after S, but before T.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/333196/gate2020-cs-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Disk requests come to a disk driver for cylinders in the order 10, 22, 20, 2, 40, 6 and 38 at a time when the disk drive is reading from cylinder 20. The seek time is 6 ms/cylinder. The total seek time, if the disk arm scheduling algorithms is first-come-first-served is <br><br><strong>(ISRO CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>360</p>",
            "<b>B.</b> <p>850</p>",
            "<b>C.</b> <p>900</p>",
            "<b>D.</b> <p>None of the above</p>"
          ],
          "correct_answer": "<b>D.</b> <p>None of the above</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/213565/isro2018-23\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Consider a storage disk with 4 platters (numbered as 0, 1, 2 and 3), 200 cylinders (numbered as 0, 1, ... , 199), and 256 sectors per track (numbered as 0, 1, ... , 255). The following 6 disk requests of the form [sector number, cylinder number, platter number] are received by the disk controller at the same time:<br><br>\n[120, 72, 2] , [180, 134, 1] , [60, 20, 0] , [212, 86, 3] , [56, 116, 2] , [118, 16, 1]<br><br>\nCurrently the head is positioned at sector number 100 of cylinder 80, and is moving towards higher cylinder numbers. The average power dissipation in moving the head over 100 cylinders is 20 milliwatts and for reversing the direction of the head movement once is 15 milliwatts. Power dissipation associated with rotational latency and switching of head between different platters is negligible. <br><br>\nThe total power consumption in milliwatts to satisfy all of the above disk requests using the Shortest Seek Time First disk scheduling algorithm is _______. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "85",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204128/gate2018-53#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Consider the disk system with 100 cylinders. The request to access the cylinders occur in the following sequence.<br>4, 37, 10,7,19,73,2,15,6,20<br>Assuming the head is currently at cylinder 50 what is the time taken to satisfy all requests if it takes 1 ms to move from one cylinder to adjacent one and shortest seek ime first algorithm is used. <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>95 ms</p>",
            "<b>B.</b> <p>119 ms</p>",
            "<b>C.</b> <p>233 ms</p>",
            "<b>D.</b> <p>276 ms</p>"
          ],
          "correct_answer": "<b>B.</b> <p>119 ms</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128760/isro2017-66\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider a disk queue with requests for I/O to blocks on cylinders 47,38,121,191,87,11, 92, 10. The C-LOOK scheduling algorithm is used. The head is initially at cylinder number 63, moving to wards larger cylinder numbers on its servicing pass. The cylinders are numbered from 0to 199. The total head movement (in number of cylinders) incurred while servicing these requests is____ . <br><br><strong>(GATE CSE 2016 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "346",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/39716/gate2016-1-48#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Suppose the following disk request sequence (track numbers) for a disk with 100 tracks is given: 45, 20, 90, 10, 50, 60, 80, 25, 70. Assume that the initial position of the R/W head is on track 50. The additional distance that will be traversed by the R/W head when the Shortest Seek Time First (SSTF) algorithm is used compared to the SCAN (Elevator) algorithm (assuming that SCAN algorithm moves towards 100 when it starts execution) is____________ tracks. <br><br><strong>(GATE CSE 2015 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/8227/gate2015-1-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>There are 200 tracks on a disc platter and the pending requests have come in the order - 36, 69, 167, 76, 42, 51, 126, 12 and 199. Assume the arm is located at the 100th track and moving towards track 200. If sequence of disc access is 126, 167, 199, 12, 36, 42, 51, 69 and 76 then which disc access scheduling policy is used? <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Elevator</p>",
            "<b>B.</b> <p>Shortest seek-time first</p>",
            "<b>C.</b> <p>C-SCAN</p>",
            "<b>D.</b> <p>First Come First Served</p>"
          ],
          "correct_answer": "<b>C.</b> <p>C-SCAN</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/16939/isro2014-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Suppose a disk has 201 cylinders, numbered from 0 to 200. At some time the disk arm is at\ncylinder 100, and there is a queue of disk access requests for cylinders 30, 85, 90, 100, 105,\n110, 135 and 145. If Shortest-Seek Time First (SSTF) is being used for scheduling the disk\naccess, the request for cylinder 90 is serviced after servicing ____________ number of\nrequests. <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1786/gate2014-1-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider a disk system with 100 cylinders. The requests to access the cylinders\noccur in following sequence: <br><br>\n4, 34, 10, 7, 19, 73, 2, 15, 6, 20<br><br>\nAssuming that the head is currently at cylinder 50, what is the time taken to\nsatisfy all requests if it takes 1ms to move from one cylinder to adjacent one and\nshortest seek time first policy is used? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>95ms</p>",
            "<b>B.</b> <p>119ms</p>",
            "<b>C.</b> <p>233ms</p>",
            "<b>D.</b> <p>276ms</p>"
          ],
          "correct_answer": "<b>B.</b> <p>119ms</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1317/gate2009-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Disk requests are received by a disk drive for cylinder 5, 25, 18, 3, 39, 8 and 35 in that order. A seek takes 5 msec per cylinder moved. How much seek time is needed to serve these requests for a Shortest Seek First (SSF) algorithm? Assume that the arm is at cylinder 20 when the last of these requests is made with none of the requests yet served <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>125 msec</p>",
            "<b>B.</b> <p>295 msec</p>",
            "<b>C.</b> <p>575 msec</p>",
            "<b>D.</b> <p>750 msec</p>"
          ],
          "correct_answer": "<b>B.</b> <p>295 msec</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49514/isro2007-39\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>The head of a hard disk serves requests following the shortest seek time first (SSTF) policy. <br>\nWhat is the maximum cardinality of the request set, so that the head changes its direction after servicing every request if the total number of tracks are 2048 and the head can start from any track? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>9</p>",
            "<b>B.</b> <p>10</p>",
            "<b>C.</b> <p>11</p>",
            "<b>D.</b> <p>12</p>"
          ],
          "correct_answer": "<b>C.</b> <p>11</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3535/gate2007-it-83\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>The head of a hard disk serves requests following the shortest seek time first (SSTF) policy. The head is initially positioned at track number 180.<br>Which of the request sets will cause the head to change its direction after servicing every request assuming that the head does not change direction if there is a tie in SSTF and all the requests arrive before the servicing starts? <br><br><strong>(GATE IT 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>11, 139, 170, 178, 181, 184, 201, 265</p>",
            "<b>B.</b> <p>10, 138, 170, 178, 181, 185, 201, 265</p>",
            "<b>C.</b> <p>10, 139, 169, 178, 181, 184, 201, 265</p>",
            "<b>D.</b> <p>10, 138, 170, 178, 181, 185, 200, 265</p>"
          ],
          "correct_answer": "<b>B.</b> <p>10, 138, 170, 178, 181, 185, 201, 265</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3534/gate2007-it-82\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>A disk has 200 tracks (numbered 0 through 199). At a given time, it was servicing the request of reading data from track 120, and at the previous request, service was for track 90. The pending requests (in order of their arrival) are for track numbers.<br><br>\n30 70 115 130 110 80 20 25.<br><br>\nHow many times will the head change its direction for the disk scheduling policies SSTF(Shortest Seek Time First) and FCFS (First Come First Serve)? <br><br><strong>(GATE IT 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>2 and 3</p>",
            "<b>B.</b> <p>3 and 3</p>",
            "<b>C.</b> <p>3 and 4</p>",
            "<b>D.</b> <p>4 and 4</p>"
          ],
          "correct_answer": "<b>C.</b> <p>3 and 4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3705/gate2004-it-62\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider an operating system capable of loading and executing a single sequential user process at a\ntime. The disk head scheduling algorithm used is First Come First Served (FCFS). If FCFS is replaced\nby Shortest Seek Time First (SSTF), claimed by the vendor to give 50% better benchmark results,\nwhat is the expected improvement in the I/O performance of user programs? <br><br><strong>(GATE CSE 2004)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>50%</p>",
            "<b>B.</b> <p>40%</p>",
            "<b>C.</b> <p>25%</p>",
            "<b>D.</b> <p>0%</p>"
          ],
          "correct_answer": "<b>D.</b> <p>0%</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1009/gate2004-12#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Which of the following disk scheduling strategies is likely to give the best throughput? <br><br><strong>(GATE CSE 1999)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Farthest cylinder next</p>",
            "<b>B.</b> <p>Nearest cylinder next</p>",
            "<b>C.</b> <p>First come first served</p>",
            "<b>D.</b> <p>Elevator algorithm</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Nearest cylinder next</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1463/gate1999-1-10\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
