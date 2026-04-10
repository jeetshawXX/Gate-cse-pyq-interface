window.__examLoadCallback({
  "title": "Deadlock - Deadlock - Slot 1",
  "duration": 42,
  "sections": [
    {
      "name": "Deadlock",
      "questions": [
        {
          "id": 1,
          "question": "<p>\\(P = \\{P_1, P_2, P_3, P_4\\} \\) consists of all active processes in an operating system.\n\\(R = \\{R_1, R_2, R_3, R_4\\} \\) consists of single instances of distinct types of resources in the system.  <br>\nThe resource allocation graph has the following assignment and claim edges.<br><br>\n\\(\n\\text{Assignment edges: } R_1 \\to P_1,  R_2 \\to P_2,  R_3 \\to P_3,  R_4 \\to P_4\n\\) (the assignment edge \\(R_1 \\to P_1\\) means resource \\(R_1\\) is assigned to process \\(P_1\\), and so on for others) <br><br>\n\\(\n\\text{Claim edges: } P_1 \\to R_2, P_2 \\to R_3, P_3 \\to R_1, P_2 \\to R_4, P_4 \\to R_2\n\\) (the claim edge \\(P_1 \\to R_2\\) means process \\(P_1\\) is waiting for resource \\(R_2\\), and so on for others)  <br><br>\nWhich of the following statement(s) is/are CORRECT? <br><br><strong>(GATE CSE 2025 SET-2)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Aborting \\(P_1 \\) makes the system deadlock free.</p>",
            "<b>B.</b> <p>Aborting \\(P_3 \\) makes the system deadlock free.</p>",
            "<b>C.</b> <p>Aborting \\(P_2 \\) makes the system deadlock free.</p>",
            "<b>D.</b> <p>Aborting \\(P_1 \\) and \\(P_4 \\) makes the system deadlock free.</p>"
          ],
          "correct_answer": [
            "<b>C.</b> <p>Aborting \\(P_2 \\) makes the system deadlock free.</p>",
            "<b>D.</b> <p>Aborting \\(P_1 \\) and \\(P_4 \\) makes the system deadlock free.</p>"
          ],
          "marks": 2,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/460797/gate-cse-2025-set-2-question-38#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>Which of the following statements is/are TRUE with respect to deadlocks? <br><br><strong>(GATE CSE 2022)</strong></p>",
          "type": "multiple",
          "options": [
            "<b>A.</b> <p>Circular wait is a necessary condition for the formation of deadlock.</p>",
            "<b>B.</b> <p>In a system where each resource has more than one instance, a cycle in its wait-for graph indicates the presence of a deadlock.</p>",
            "<b>C.</b> <p>If the current allocation of resources to processes leads the system to unsafe state, then deadlock will necessarily occur.</p>",
            "<b>D.</b> <p>In the resource-allocation graph of a system, if every edge is an assignment edge, then the system is not in deadlock state.</p>"
          ],
          "correct_answer": [
            "<b>A.</b> <p>Circular wait is a necessary condition for the formation of deadlock.</p>",
            "<b>D.</b> <p>In the resource-allocation graph of a system, if every edge is an assignment edge, then the system is not in deadlock state.</p>"
          ],
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/371920/Gate-cse-2022-question-16#a_list_title\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>An aid to determine the deadlock occurrence is <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>resource allocation graph</p>",
            "<b>B.</b> <p>starvation graph</p>",
            "<b>C.</b> <p>inversion graph</p>",
            "<b>D.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>A.</b> <p>resource allocation graph</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331251/isro2020-29\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>Raymonds tree based algorithm ensures <br><br><strong>(ISRO CSE 2020)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>no starvation, but deadlock may occur in rare cases</p>",
            "<b>B.</b> <p>no deadlock, but starvation may occur</p>",
            "<b>C.</b> <p>neither deadlock nor starvation can occur</p>",
            "<b>D.</b> <p>deadlock may occur in cases where the process is already starved</p>"
          ],
          "correct_answer": "<b>B.</b> <p>no deadlock, but starvation may occur</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/331328/isro2020-22\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
          "question": "<p>Consider the following snapshot of a system running n concurrent processes. Process \\(i\\) is holding \\(X_i\\) instances of a resource R, \\( 1\\leq i\\leq n\\). Assume that all instances of R are currently in use. Further, for all \\(i\\), process \\(i\\) can place a request for at most \\(Y_i\\) additional instances of R while holding the \\(X_i\\) instances it already has. Of the n processes, there are exactly two processes p and q such that \\(Y_p=Y_q=0\\). Which one of the following conditions guarantees that no other process apart from p and q can complete execution? <br><br><strong>(GATE CSE 2019)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(X_p+X_q \\lt Min \\{Y_k|1\\leq k\\leq n,k\\neq p,k\\neq q\\}\\)</p>",
            "<b>B.</b> <p>\\(X_p+X_q \\lt Max \\{Y_k|1\\leq k\\leq n,k\\neq p,k\\neq q\\}\\)</p>",
            "<b>C.</b> <p>\\(Min(X_p,X_q)\\geq Min \\{Y_k|1\\leq k\\leq n,k\\neq p,k\\neq q\\}\\)</p>",
            "<b>D.</b> <p>\\(Min(X_p,X_q)\\leq Max \\{Y_k|1\\leq k\\leq n,k\\neq p,k\\neq q\\}\\)</p>"
          ],
          "correct_answer": "<b>A.</b> <p>\\(X_p+X_q \\lt Min \\{Y_k|1\\leq k\\leq n,k\\neq p,k\\neq q\\}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/302809/gate2019-cs-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 6,
          "question": "<p>Consider a system having m resources of the same type. These resources are shared by 3 processes A,B,C, which have peak time demands of 3,4,6 respectively. The minimum value of m that ensures that deadlock will never occur is: <br><br><strong>(ISRO CSE 2018)</strong></p>",
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
          "explanation": "<a href=\"https://gateoverflow.in/213567/isro2018-21\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 7,
          "question": "<p>In a system, there are three types of resources: E, F and G. Four processes \\(P_0,P_1,P_2 \\; and \\; P_3\\) execute concurrently. At the outset, the processes have declared their maximum resource requirements using a matrix named Max as given below. For example, Max[\\(P_2\\),F] is the maximum number of instances of F that \\(P_2\\) would require. The number of instances of the resources allocated to the various processes at any given state is given by a matrix named Allocation. <br>\nConsider a state of the system with the Allocation matrix as shown below, and in which 3 instances of E and 3 instances of F are the only resources available. <br> <img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Deadlock\\q39_f1f4e800.jpg\"> <br> From the perspective of deadlock avoidance, which one of the following is true? <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The system is in safe state.</p>",
            "<b>B.</b> <p>The system is not in safe state, but would be safe if one more instance of E were available</p>",
            "<b>C.</b> <p>The system is not in safe state, but would be safe if one more instance of F were available</p>",
            "<b>D.</b> <p>The system is not in safe state, but would be safe if one more instance of G were available</p>"
          ],
          "correct_answer": "<b>A.</b> <p>The system is in safe state.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/204113/gate2018-39#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>Consider a system with 3 processes that share 4 instances of the same resource type. Each process can request a maximum of K instances. Resource instances can be requested and released only one at a time. The largest value of K that will always avoid deadlock is ____. <br><br><strong>(GATE CSE 2018)</strong></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<a href=\"https://gateoverflow.in/204098/gate2018-24#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>What problem is solved by Dijikstra banker' algorithm? <br><br><strong>(ISRO CSE 2017)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Mutual exclusion</p>",
            "<b>B.</b> <p>Deadlock recovery</p>",
            "<b>C.</b> <p>Deadlock avoidance</p>",
            "<b>D.</b> <p>Cache coherence</p>"
          ],
          "correct_answer": "<b>C.</b> <p>Deadlock avoidance</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/128692/isro2017-48\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>A system shares 9 tape drives. The current allocation and maximum requirement of tape\ndrives for three processes are shown below: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Deadlock\\q27_9ea2c7ce.jpg\"><br> Which of the following best describes current state of the system ? <br><br><strong>(GATE CSE 2017 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Safe, Deadlocked</p>",
            "<b>B.</b> <p>Safe, Not Deadlocked</p>",
            "<b>C.</b> <p>Not Safe, Deadlocked</p>",
            "<b>D.</b> <p>Not Safe, Not deadlocked</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Safe, Not Deadlocked</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118375/gate2017-2-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
          "question": "<p>A multithreaded program P executes with x number of threads and uses y number of locks for\nensuring mutual exclusion while operating on shared memory locations. All locks in the\nprogram are non-reentrant, i.e., if a thread holds a lock l, then it cannot re-acquire lock l\nwithout releasing it. If a thread is unable to acquire a lock, it blocks until the lock becomes\navailable. The minimum value of x and the minimum value of y together for which execution\nof P can result in a deadlock are: <br><br><strong>(GATE CSE 2017 SET-1)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>x = 1, y = 2</p>",
            "<b>B.</b> <p>x =2, y=1</p>",
            "<b>C.</b> <p>x = 2,y=2</p>",
            "<b>D.</b> <p>x = 1, y = 1</p>"
          ],
          "correct_answer": "<b>D.</b> <p>x = 1, y = 1</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/118307/gate2017-1-27#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 12,
          "question": "<p>A system has 3 processes sharing 4 resources. If each process needs a maximum of 2 units, then <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Deadlock can never occur</p>",
            "<b>B.</b> <p>Deadlock may occur</p>",
            "<b>C.</b> <p>Deadlock has to occur</p>",
            "<b>D.</b> <p>None of these</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Deadlock can never occur</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55698/isro2016-47\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>With single resource, deadlock occurs <br><br><strong>(ISRO CSE 2016)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>if there are more than two processes competing for that resources</p>",
            "<b>B.</b> <p>if there are only two processes competing for that resources</p>",
            "<b>C.</b> <p>if there is a single process competing for that resources</p>",
            "<b>D.</b> <p>none of these</p>"
          ],
          "correct_answer": "<b>D.</b> <p>none of these</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/55705/isro2016-46\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>Consider the following policies for preventing deadlock in a system with mutually exclusive resources. <br>\nI. Processes should acquire all their resources at the beginning of execution. If any resource is not available, all resources acquired so far are released <br>\nII. The resources are numbered uniquely, and processes are allowed to request for resources only in increasing resource numbers <br>\nIII. The resources are numbered uniquely, and processes are allowed to request for resources only in decreasing resource numbers <br>\nIV. The resources are numbered uniquely. A process is allowed to request only for a resource with resource number larger than its currently held resources <br>\nWhich of the above policies can be used for preventing deadlock? <br><br><strong>(GATE CSE 2015 SET-3)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Any one of I and III but not II or IV</p>",
            "<b>B.</b> <p>Any one of I, III, and IV but not II</p>",
            "<b>C.</b> <p>Any one of II and III but not I or IV</p>",
            "<b>D.</b> <p>Any one of I, II, III, and IV</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Any one of I, II, III, and IV</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/8561/gate2015-3-35#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>A system has 6 identical resources and N processes competing for them. Each process can request atmost 2 resources. Which one of the following values of N could lead to a deadlock? <br><br><strong>(GATE CSE 2015 SET-2)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>1</p>",
            "<b>B.</b> <p>2</p>",
            "<b>C.</b> <p>3</p>",
            "<b>D.</b> <p>4</p>"
          ],
          "correct_answer": "<b>D.</b> <p>4</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/8114/gate2015-2-20#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
