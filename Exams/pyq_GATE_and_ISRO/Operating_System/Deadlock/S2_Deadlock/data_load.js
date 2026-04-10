window.__examLoadCallback({
  "title": "Deadlock - Deadlock - Slot 2",
  "duration": 42,
  "sections": [
    {
      "name": "Deadlock",
      "questions": [
        {
          "id": 1,
          "question": "<p>What is the minimum number of resources required to ensure that deadlock will never occur, if there are currently three processes \\(P_{1}\\),\\(P_{2}\\) and \\(P_{3}\\) running in a system whose maximum demand for the resources of same type are 3, 4, and 5 respectively. <br><br><strong>(ISRO CSE 2014)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>3</p>",
            "<b>B.</b> <p>7</p>",
            "<b>C.</b> <p>9</p>",
            "<b>D.</b> <p>10</p>"
          ],
          "correct_answer": "<b>D.</b> <p>10</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55085/isro2014-68\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>A system contains three programs and each requires three tape units for its operation. The minimum number of tape units which the system must have such that deadlocks never arise is _________. <br><br><strong>(GATE CSE 2014 SET-3)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "7",
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/2065/gate2014-3-31#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>An operating system uses the Banker's algorithm for deadlock avoidance when managing the\nallocation of three resource types X, Y, and Z to three processes P0, P1, and P2. The table\ngiven below presents the current system state. Here, the Allocation matrix shows the current\nnumber of resources of each type allocated to each process and the Max matrix shows the\nmaximum number of resources of each type required by each process during its execution. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Deadlock\\q31_dc5dbfd2.jpg\"><br>  There are 3 units of type X, 2 units of type Y and 2 units of type Z still available. The system\nis currently in a safe state. Consider the following independent requests for additional\nresources in the current state: <br>\nREQ1: P0 requests 0 units of X, 0 units of Y and 2 units of Z <br>\nREQ2: P1 requests 2 units of x, 0 units of Y and 0 units of Z  <br> Which one of the following is TRUE? <br><br><strong>(GATE CSE 2014 SET-1)</strong></p>",
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
          "id": 4,
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
          "id": 5,
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
          "id": 6,
          "question": "<p>A total of 9 units of a resource type available, and given the safe state shown below, which of the following sequence will be a safe state?<br><br>\\(\\begin{array}{lll} \\text {Process } &amp; \\text {Used } &amp; \\text {Max } \\\\ P_{1} &amp; 2 &amp; 7 \\\\ P_{2} &amp; 1 &amp; 6 \\\\ P_{3} &amp; 2 &amp; 5 \\\\ P_{4} &amp; 1 &amp; 4 \\end{array}\\) <br><br><strong>(ISRO CSE 2011)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\langle P_4, P_1, P_3, P_2\\rangle\\)</p>",
            "<b>B.</b> <p>\\(\\langle P_4, P_2, P_1, P_3\\rangle\\)</p>",
            "<b>C.</b> <p>\\(\\langle P_4, P_2, P_3, P_1\\rangle\\)</p>",
            "<b>D.</b> <p>\\(\\langle P_3, P_1, P_2, P_4 \\rangle\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\langle P_3, P_1, P_2, P_4 \\rangle\\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/52836/isro2011-60\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>A system has n resources \\(R_{0},...R_{n-1}\\), and k processes \\(P_{0},...P_{k-1}\\). The\nimplementation of the resource request logic of each process \\(P_{i}\\) is as follows:<pre><code> \nif (i%2= = 0) {\n        if (i\\(\\lt\\)n) request \\(R_{i}\\) ;\n        if (i+2\\(\\lt\\)n)request \\(R_{i+2}\\);\n}\nelse {\n         if (i\\(\\lt\\)n) request \\(R_{n-i}\\);\n         if (i+2\\(\\lt\\)n)request \\(R_{n-i-2}\\) ;\n} </code></pre>\nIn which one of the following situations is a deadlock possible? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>n = 40,k = 26</p>",
            "<b>B.</b> <p>n = 21,k = 12</p>",
            "<b>C.</b> <p>n = 20,k = 10</p>",
            "<b>D.</b> <p>n = 41,k = 19</p>"
          ],
          "correct_answer": "<b>B.</b> <p>n = 21,k = 12</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/2348/gate2010-46#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>When a process is rolled back as a result of deadlock the difficulty which arises is <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Starvation</p>",
            "<b>B.</b> <p>System throughput</p>",
            "<b>C.</b> <p>Low device utilization</p>",
            "<b>D.</b> <p>Cycle stealing</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Starvation</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/18583/isro2009-77\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Consider a system having \"n\" resources of same type. These resources are shared by 3 processes, A, B, C. These have peak demands of 3, 4, and 6 respectively. For what value of \"n\" deadlock won't occur <br><br><strong>(ISRO CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>15</p>",
            "<b>B.</b> <p>9</p>",
            "<b>C.</b> <p>10</p>",
            "<b>D.</b> <p>13</p>"
          ],
          "correct_answer": "<b>D.</b> <p>13</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/48037/isro2009-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>Consider a system with 4 types of resources R1 (3 units), R2 (2 units), R3 (3 units), R4 (2 units). A non-preemptive resource allocation policy is used. At any given instance, a request is not entertained if it cannot be completely satisfied. Three processes P1, P2, P3 request the sources as follows if executed\nindependently. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Deadlock\\q30_5bca0566.jpg\"> <br> Which one of the following statements is TRUE if all three processes run concurrently starting at time t=0? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>All processes will finish without any deadlock</p>",
            "<b>B.</b> <p>Only P1 and P2 will be in deadlock</p>",
            "<b>C.</b> <p>Only P1 and P3 will be in a deadlock</p>",
            "<b>D.</b> <p>All three processes will be in deadlock</p>"
          ],
          "correct_answer": "<b>A.</b> <p>All processes will finish without any deadlock</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1316/gate2009-30#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>In which of the following four necessary conditions for deadlock processes claim exclusive control of the resources they require? <br><br><strong>(ISRO CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>no preemption</p>",
            "<b>B.</b> <p>mutual exclusion</p>",
            "<b>C.</b> <p>circular wait</p>",
            "<b>D.</b> <p>hold and wait</p>"
          ],
          "correct_answer": "<b>B.</b> <p>mutual exclusion</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/17254/isro2008-62\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>An operating system implements a policy that requires a process to release all resources before making a request for another resource. Select the TRUE statement from the following: <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Both starvation and deadlock can occur</p>",
            "<b>B.</b> <p>Starvation can occur but deadlock cannot occur</p>",
            "<b>C.</b> <p>Starvation cannot occur but deadlock can occur</p>",
            "<b>D.</b> <p>Neither starvation nor deadlock can occur</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Starvation can occur but deadlock cannot occur</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3364/gate2008-it-54\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Which of the following is NOT true of deadlock prevention and deadlock\navoidance schemes? <br><br><strong>(GATE CSE 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>In deadlock prevention, the request for resources is always granted if the\nresulting state is safe</p>",
            "<b>B.</b> <p>In deadlock avoidance, the request for resources is always granted if the\nresult state is safe</p>",
            "<b>C.</b> <p>Deadlock avoidance is less restrictive than deadlock prevention</p>",
            "<b>D.</b> <p>Deadlock avoidance requires knowledge of resource requirements a priori</p>"
          ],
          "correct_answer": "<b>A.</b> <p>In deadlock prevention, the request for resources is always granted if the\nresulting state is safe</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/488/gate2008-65#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider a system having 'm' resources of the same type. The resources are shared by 3 processes A, B, C, which have peak time demands of 3, 4, 6 respectively. The minimum value of 'm' that ensures that deadlock will never occur is <br><br><strong>(ISRO CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>11</p>",
            "<b>B.</b> <p>12</p>",
            "<b>C.</b> <p>13</p>",
            "<b>D.</b> <p>14</p>"
          ],
          "correct_answer": "<b>A.</b> <p>11</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/49515/isro2007-40\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>A single processor system has three resource types X, Y and Z, which are shared by three processes. There are 5 units of each resource type. Consider the following scenario, where the column alloc denotes the number of units of each resource type allocated to each process, and the column request denotes the number of units of each resource type requested by a process in order to\ncomplete execution. Which of these processes will finish LAST? <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Deadlock\\q57_d0cca1a4.jpg\"> <br><br><strong>(GATE CSE 2007)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>P0</p>",
            "<b>B.</b> <p>P1</p>",
            "<b>C.</b> <p>P2</p>",
            "<b>D.</b> <p>None of the above, since the system is in a deadlock.</p>"
          ],
          "correct_answer": "<b>C.</b> <p>P2</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1255/gate2007-57#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
