window.__examLoadCallback({
  "title": "Operating_System - Operating_System - Slot 11",
  "duration": 42,
  "sections": [
    {
      "name": "Operating_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the following set of processes that need to be scheduled on a single CPU. All the\ntimes are given in milliseconds <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q32_3726bcc5.jpg\"> <br> Using the shortest remaining time first scheduling algorithm, the average process turnaround time (in msec) is ________. <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7.2",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1803/gate2014-1-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>An operating system uses the Banker's algorithm for deadlock avoidance when managing the\nallocation of three resource types X, Y, and Z to three processes P0, P1, and P2. The table\ngiven below presents the current system state. Here, the Allocation matrix shows the current\nnumber of resources of each type allocated to each process and the Max matrix shows the\nmaximum number of resources of each type required by each process during its execution. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q31_dc5dbfd2.jpg\"><br>  There are 3 units of type X, 2 units of type Y and 2 units of type Z still available. The system\nis currently in a safe state. Consider the following independent requests for additional\nresources in the current state: <br>\nREQ1: P0 requests 0 units of X, 0 units of Y and 2 units of Z <br>\nREQ2: P1 requests 2 units of x, 0 units of Y and 0 units of Z  <br> Which one of the following is TRUE? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Only REQ1 can be permitted.</p>",
            "<b>B.</b> <p>Only REQ2 can be permitted</p>",
            "<b>C.</b> <p>Both REQ1 and REQ2 can be permitted</p>",
            "<b>D.</b> <p>Neither REQ1 nor REQ2 can be permitted</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Only REQ2 can be permitted</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1800/gate2014-1-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>Which one of the following is FALSE? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>User level threads are not scheduled by the kernel</p>",
            "<b>B.</b> <p>When a user level thread is blocked, all other threads of its process are blocked.</p>",
            "<b>C.</b> <p>Context switching between user level threads is faster than context switching between\nkernel level threads.</p>",
            "<b>D.</b> <p>Kernel level threads cannot share the code segment</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Kernel level threads cannot share the code segment</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1787/gate2014-1-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Suppose a disk has 201 cylinders, numbered from 0 to 200. At some time the disk arm is at\ncylinder 100, and there is a queue of disk access requests for cylinders 30, 85, 90, 100, 105,\n110, 135 and 145. If Shortest-Seek Time First (SSTF) is being used for scheduling the disk\naccess, the request for cylinder 90 is serviced after servicing ____________ number of\nrequests. <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "3",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/1786/gate2014-1-19#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Which of the following strategy is employed for overcoming the priority inversion problem? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Temporarily raise the priority of lower priority level process</p>",
            "<b>B.</b> <p>Have a fixed priority level scheme.</p>",
            "<b>C.</b> <p>Implement Kernel pre-emption scheme.</p>",
            "<b>D.</b> <p>Allow lower priority process to complete its job.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Temporarily raise the priority of lower priority level process</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/45658/isro-2013-70\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider the list of page references in the time line as below:<br>\n9  6  2  3  4  4  4  4  3  4  4  2  5  8  6  8  5  5  3  2  3  3  9  6  2  7<br>What is the working set at the penultimate page reference if \\(\\Delta\\) is 5? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>{8, 5, 3, 2, 9, 6}</p>",
            "<b>B.</b> <p>{4, 3, 6, 2, 5}</p>",
            "<b>C.</b> <p>{3, 9, 6, 2, 7}</p>",
            "<b>D.</b> <p>{3, 9, 6, 2}</p>"
          ],
          "correct_answer": "<b>D.</b> <p>{3, 9, 6, 2}</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/45557/isro-2013-65\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>A particular parallel program computation requires 100 seconds when executed on a single CPU. If 20% of this computation is strictly sequential, then theoretically the best possible elapsed times for this program running on 2 CPUs and 4 CPUs respectively are <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>55 and 45 seconds</p>",
            "<b>B.</b> <p>80 and 20 seconds</p>",
            "<b>C.</b> <p>75 and 25 seconds</p>",
            "<b>D.</b> <p>60 and 40 seconds</p>"
          ],
          "correct_answer": "<b>D.</b> <p>60 and 40 seconds</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44830/isro-2013-62\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>The state of a process after it encounters an I/O instruction is? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Ready</p>",
            "<b>B.</b> <p>Blocked</p>",
            "<b>C.</b> <p>Idle</p>",
            "<b>D.</b> <p>Running</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Blocked</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44406/isro-2013-60\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>A starvation free job scheduling policy guarantees that no job indefinitely waits for a service. Which of the following job scheduling policies is starvation free? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Priority queing</p>",
            "<b>B.</b> <p>Shortest job first</p>",
            "<b>C.</b> <p>Youngest job first</p>",
            "<b>D.</b> <p>Round robin</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Round robin</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44405/isro-2013-59\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider the following process and resource requirement of each process.<br>\\(\\begin{array}{|c|c|c|c|c|} \\hline  {\\text { Process }} &amp;  {\\text { Type 1 }} &amp; {\\text { Type 1 }} &amp;  {\\text { Type 2 }}&amp;  {\\text { Type 2 }} \\\\ \\hline  &amp; \\text { Used } &amp; \\text { Max } &amp; \\text { Used } &amp; \\text { Max } \\\\ \\hline \\text { P1 } &amp; 1 &amp; 2 &amp; 1 &amp; 3 \\\\ \\hline \\text { P2 } &amp; 1 &amp; 3 &amp; 1 &amp; 2 \\\\ \\hline \\text { P3 } &amp; 2 &amp; 4 &amp; 1 &amp; 4 \\\\ \\hline \\end{array}\\)<br>Predict the state of this system, assuming that there are a total of 5 instances of resource type 1 and 4 instances of resource type 2. <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Can go to safe or unsafe state based on sequence</p>",
            "<b>B.</b> <p>Safe state</p>",
            "<b>C.</b> <p>Unsafe state</p>",
            "<b>D.</b> <p>Deadlock state</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Unsafe state</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44404/isro-2013-58\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>Which of the following is not a necessary condition for deadlock? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Mutual exclusion</p>",
            "<b>B.</b> <p>Reentrancy</p>",
            "<b>C.</b> <p>Hold and wait</p>",
            "<b>D.</b> <p>No pre-emption</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Reentrancy</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44403/isro-2013-57\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>In a 64- bit machine, with 2 GB RAM, and 8 KB page size, how many entries will be there in the page table if its is inverted? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(2^{18}\\)</p>",
            "<b>B.</b> <p>\\(2^{20}\\)</p>",
            "<b>C.</b> <p>\\(2^{33}\\)</p>",
            "<b>D.</b> <p>\\(2^{51}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(2^{18}\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44402/isro-2013-56\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Consider a logical address space of 8 pages of 1024 words each, mapped onto a physical memory of 32 frames. How many bits are there in the physical address and logical address respectively? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>5,3</p>",
            "<b>B.</b> <p>10,10</p>",
            "<b>C.</b> <p>15,13</p>",
            "<b>D.</b> <p>15,15</p>"
          ],
          "correct_answer": "<b>C.</b> <p>15,13</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44401/isro2013-55\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Which of the following are the likely causes of thrashing? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Page size was very small.</p>",
            "<b>B.</b> <p>There are too many users connected to the system.</p>",
            "<b>C.</b> <p>Least recently used policy is used for page replacement.</p>",
            "<b>D.</b> <p>First in First out policy is used for page replacement.</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Page size was very small.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44400/isro-2013-54\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>A CPU scheduling algorithm determines an order for the execution of its scheduled processes. Given \\('n'\\) processes to be scheduled on one processor, how many possible different schedules are there? <br><br><strong>(ISRO CSE 2013)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(n\\)</p>",
            "<b>B.</b> <p>\\(n^{2}\\)</p>",
            "<b>C.</b> <p>\\(n!\\)</p>",
            "<b>D.</b> <p>\\(2^{n}\\)</p>"
          ],
          "correct_answer": "<b>C.</b> <p>\\(n!\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/44399/isro-2013-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
