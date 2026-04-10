window.__examLoadCallback({
  "title": "Operating System - Disk Scheduling",
  "duration": 39,
  "sections": [
    {
      "name": "Disk Scheduling",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"88222\"></a><div itemprop=\"text\"><p>Disk requests come to disk driver for cylinders \\( 10, 22, 20, 2, 40, 6 \\) and \\( 38 \\), in that order at a time when the disk drive is reading from cylinder \\( 20 \\). The seek time is \\( 6 \\) msec per cylinder. Compute the total seek time if the disk arm scheduling algorithm is.</p>\n\n</div><br><br><b>GATE CSE 1989 | Question: 4-xii</b></p>",
          "type": "numeric",
          "options": [
            "<p>First come first served.</p>",
            "<p>Closest cylinder next.</p>"
          ],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/88222/gate-cse-1989-question-4-xii\" target=\"_blank\">https://gateoverflow.in/88222/gate-cse-1989-question-4-xii</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"85678\"></a><div itemprop=\"text\"><p>Assuming the current disk cylinder to be \\( 50 \\) and the sequence for the cylinders to be \\( 1, 36, 49, 65, 53, 12, 3, 20, 55, 16, 65 \\) and \\( 78 \\) find the sequence of servicing using&nbsp;</p>\n\n<ol>\n\t<li>Shortest seek time first (SSTF) and</li>\n\t<li>Elevator disk scheduling policies.</li>\n</ol></div><br><br><b>GATE CSE 1990 | Question: 9b</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/85678/gate-cse-1990-question-9b\" target=\"_blank\">https://gateoverflow.in/85678/gate-cse-1990-question-9b</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"2658\"></a><div itemprop=\"text\">The head of a moving head disk with \\( 100 \\) tracks numbered \\( 0 \\) to \\( 99 \\) is currently serving a request at track \\( 55 \\). If the queue of requests kept in FIFO order is \\[ 10, 70, 75, 23, 65 \\] which of the two disk scheduling algorithms FCFS (First Come First Served) and SSTF (Shortest Seek Time First) will require less head movement? Find the head movement for each of the algorithms.</div><br><br><b>GATE CSE 1995 | Question: 20</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "N/A",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2658/gate-cse-1995-question-20\" target=\"_blank\">https://gateoverflow.in/2658/gate-cse-1995-question-20</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"2237\"></a><div itemprop=\"text\"><p>The correct matching for the following pairs is:\\[ \\small \\begin{array}{|cl|cl|}\\hline \\text{(A)} &amp;\\text{Disk Scheduling}&nbsp; &amp;&nbsp; \\text{(1)} &amp;\\text{Round robin}&nbsp; \\\\\\hline&nbsp;<br>\\text{(B)} &amp;\\text{Batch Processing} &amp; \\text{(2)} &amp;\\text{SCAN} \\\\\\hline&nbsp;<br>\\text{(C)} &amp; \\text{Time-sharing} &amp; \\text{(3)}&amp;\\text {LIFO} \\\\\\hline&nbsp;<br>\\text{(D)} &amp;\\text{Interrupt processing} &amp; \\text{(4)} &amp;\\text{FIFO} \\\\\\hline \\end{array} \\]</p></div><br><br><b>GATE CSE 1997 | Question: 3.6</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\text{A-3&nbsp;B-4 C-2 D-1} \\)</p>",
            "<p>\\( \\text{A-4 B-3 C-2 D-1} \\)</p>",
            "<p>\\( \\text{A-2 B-4 C-1 D-3} \\)</p>",
            "<p>\\( \\text{A-3 B-4 C-3 D-2} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\text{A-2 B-4 C-1 D-3} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2237/gate-cse-1997-question-3-6\" target=\"_blank\">https://gateoverflow.in/2237/gate-cse-1997-question-3-6</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"1463\"></a><div itemprop=\"text\"><p>Which of the following disk scheduling strategies is likely to give the best throughput?</p>\n\n</div><br><br><b>GATE CSE 1999 | Question: 1.10</b></p>",
          "type": "single",
          "options": [
            "<p>Farthest cylinder next</p>",
            "<p>Nearest cylinder next</p>",
            "<p>First come first served</p>",
            "<p>Elevator algorithm</p>"
          ],
          "correct_answer": "<p>Nearest cylinder next</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1463/gate-cse-1999-question-1-10\" target=\"_blank\">https://gateoverflow.in/1463/gate-cse-1999-question-1-10</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"1009\"></a><div itemprop=\"text\"><p>Consider an operating system capable of loading and executing a single sequential user process at a time. The disk head scheduling algorithm used is First Come First Served (FCFS). If FCFS is replaced by Shortest Seek Time First (SSTF), claimed by the vendor to give \\( 50 \\% \\) better benchmark results, what is the expected improvement in the I/O performance of user programs?</p>\n\n</div><br><br><b>GATE CSE 2004 | Question: 12</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 50 \\% \\)</p>",
            "<p>\\( 40\\% \\)</p>",
            "<p>\\( 25\\% \\)</p>",
            "<p>\\( 0\\% \\)</p>"
          ],
          "correct_answer": "<p>\\( 0\\% \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1009/gate-cse-2004-question-12\" target=\"_blank\">https://gateoverflow.in/1009/gate-cse-2004-question-12</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"1317\"></a><div itemprop=\"text\"><p>Consider a disk system with \\( 100 \\) cylinders. The requests to access the cylinders occur in following sequence:</p>\n\n<p>\\( 4, 34, 10, 7, 19, 73, 2, 15, 6, 20 \\)</p>\n\n<p>Assuming that the head is currently at cylinder \\( 50 \\), what is the time taken to satisfy all requests if it takes \\( 1\\;\\text{ms} \\) to move from one cylinder to adjacent one and shortest seek time first policy is used?</p>\n\n</div><br><br><b>GATE CSE 2009 | Question: 31</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 95 \\;\\text{ms} \\)</p>",
            "<p>\\( 119\\;\\text{ms} \\)</p>",
            "<p>\\( 233\\;\\text{ms} \\)</p>",
            "<p>\\( 276\\;\\text{ms} \\)</p>"
          ],
          "correct_answer": "<p>\\( 119\\;\\text{ms} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1317/gate-cse-2009-question-31\" target=\"_blank\">https://gateoverflow.in/1317/gate-cse-2009-question-31</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"1786\"></a><div itemprop=\"text\">Suppose a disk has \\( 201 \\) cylinders, numbered from \\( 0 \\) to \\( 200 \\). At some time the disk arm is at cylinder \\( 100 \\), and there is a queue of disk access requests for cylinders \\( 30, 85, 90, 100, 105, 110, 135 \\) and \\( 145 \\). If Shortest-Seek Time First (SSTF) is being used for scheduling the disk access, the request for cylinder \\( 90 \\) is serviced after servicing ____________ number of requests.</div><br><br><b>GATE CSE 2014 Set 1 | Question: 19</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/1786/gate-cse-2014-set-1-question-19\" target=\"_blank\">https://gateoverflow.in/1786/gate-cse-2014-set-1-question-19</a></p>"
        },
        {
          "id": 9,
          "question": "<p><a name=\"8227\"></a><div itemprop=\"text\">Suppose the following disk request sequence (track numbers) for a disk with \\( 100 \\) tracks is given:<br>\n<br>\n\\( 45, 20, 90, 10, 50, 60, 80, 25, 70. \\)<br>\n<br>\nAssume that the initial position of the R/W head is on track \\( 50 \\). The additional distance that will be traversed by the R/W head when the Shortest Seek Time First (SSTF) algorithm is used compared to the SCAN (Elevator) algorithm (assuming that SCAN algorithm moves towards \\( 100 \\) when it starts execution) is________________tracks.</div><br><br><b>GATE CSE 2015 Set 1 | Question: 30</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "10",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/8227/gate-cse-2015-set-1-question-30\" target=\"_blank\">https://gateoverflow.in/8227/gate-cse-2015-set-1-question-30</a></p>"
        },
        {
          "id": 10,
          "question": "<p><a name=\"39716\"></a><div itemprop=\"text\">Cylinder a disk queue with requests for \\( I/O \\) to blocks on cylinders \\( 47, 38, 121, 191, 87, 11, 92, 10. \\) The C-LOOK scheduling algorithm is used. The head is initially at cylinder number \\( 63 \\), moving towards larger cylinder numbers on its servicing pass. The cylinders are numbered from \\( 0 \\) to \\( 199 \\). The total head movement (in number of cylinders) incurred while servicing these requests is__________.</div><br><br><b>GATE CSE 2016 Set 1 | Question: 48</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "346",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/39716/gate-cse-2016-set-1-question-48\" target=\"_blank\">https://gateoverflow.in/39716/gate-cse-2016-set-1-question-48</a></p>"
        },
        {
          "id": 11,
          "question": "<p><a name=\"333196\"></a><div itemprop=\"text\"><p>Consider the following five disk access requests of the form (request id, cylinder number) that are present in the disk scheduler queue at a given time.</p><p>\\( (P, 155), (Q,85), (R,110),(S, 30), (T,115) \\)</p><p>Assume the head is positioned at cylinder \\( 100 \\). The scheduler follows Shortest Seek Time First scheduling to service the requests.</p><p>Which one of the following statements is FALSE?</p></div><br><br><b>GATE CSE 2020 | Question: 35</b></p>",
          "type": "single",
          "options": [
            "<p>\\( T \\) is serviced before \\( P \\).</p>",
            "<p>\\( Q \\) is serviced after \\( S \\),but before \\( T \\).</p>",
            "<p>The head reverses its direction of movement between servicing of \\( Q \\) and \\( P \\).</p>",
            "<p>\\( R \\) is serviced before \\( P \\).</p>"
          ],
          "correct_answer": "<p>\\( Q \\) is serviced after \\( S \\),but before \\( T \\).</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/333196/gate-cse-2020-question-35\" target=\"_blank\">https://gateoverflow.in/333196/gate-cse-2020-question-35</a></p>"
        },
        {
          "id": 12,
          "question": "<p><a name=\"3705\"></a><div itemprop=\"text\"><p>A disk has \\( 200 \\) tracks (numbered \\( 0 \\) through \\( 199 \\)). At a given time, it was servicing the request of reading data from track \\( 120 \\), and at the previous&nbsp;request, service was for track \\( 90 \\). The pending requests (in order of their arrival) are for track numbers.</p>\n\n<p>\\( 30 \\ 70 \\ 115 \\ 130 \\ 110 \\ 80 \\ 20 \\ 25. \\)</p>\n\n<p>How many times will the head change its direction for the disk scheduling policies SSTF(Shortest Seek Time First) and FCFS (First Come First Serve)?</p>\n\n</div><br><br><b>GATE IT 2004 | Question: 62</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 2 \\) and \\( 3 \\)</p>",
            "<p>\\( 3 \\) and \\( 3 \\)</p>",
            "<p>\\( 3 \\) and \\( 4 \\)</p>",
            "<p>\\( 4 \\) and \\( 4 \\)</p>"
          ],
          "correct_answer": "<p>\\( 3 \\) and \\( 4 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3705/gate-it-2004-question-62\" target=\"_blank\">https://gateoverflow.in/3705/gate-it-2004-question-62</a></p>"
        },
        {
          "id": 13,
          "question": "<p><a name=\"3534\"></a><div itemprop=\"text\"><p>The head of a hard disk serves requests following the shortest seek time first \\( \\textsf{(SSTF)} \\) policy. The head is initially positioned at track number \\( 180 \\).</p>\n\n<p>Which of the request sets will cause the head to change its direction after servicing every request assuming that the head does not change direction if there is a tie in \\( \\textsf{SSTF} \\) and all the requests arrive before the servicing starts?</p>\n\n</div><br><br><b>GATE IT 2007 | Question: 82</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 11, 139, 170, 178, 181, 184, 201, 265 \\)</p>",
            "<p>\\( 10, 138, 170, 178, 181, 185, 201, 265 \\)</p>",
            "<p>\\( 10, 139, 169, 178, 181, 184, 201, 265 \\)</p>",
            "<p>\\( 10, 138, 170, 178, 181, 185, 200, 265 \\)</p>"
          ],
          "correct_answer": "<p>\\( 10, 138, 170, 178, 181, 185, 201, 265 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3534/gate-it-2007-question-82\" target=\"_blank\">https://gateoverflow.in/3534/gate-it-2007-question-82</a></p>"
        },
        {
          "id": 14,
          "question": "<p><a name=\"3535\"></a><div itemprop=\"text\"><p>The head of a hard disk serves requests following the shortest seek time first (SSTF) policy.&nbsp;</p>\n\n<p>What is the maximum cardinality of the request set, so that the head changes its direction after servicing every request if the total number of tracks are \\( 2048 \\) and the head can start from any track?</p>\n\n</div><br><br><b>GATE IT 2007 | Question: 83</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 9 \\)</p>",
            "<p>\\( 10 \\)</p>",
            "<p>\\( 11 \\)</p>",
            "<p>\\( 12 \\)</p>"
          ],
          "correct_answer": "<p>\\( 11 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3535/gate-it-2007-question-83\" target=\"_blank\">https://gateoverflow.in/3535/gate-it-2007-question-83</a></p>"
        }
      ]
    }
  ]
});
