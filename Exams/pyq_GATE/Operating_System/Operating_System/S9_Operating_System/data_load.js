window.__examLoadCallback({
  "title": "Operating_System - Operating_System - Slot 9",
  "duration": 42,
  "sections": [
    {
      "name": "Operating_System",
      "questions": [
        {
          "id": 1,
          "question": "<p>Consider the methods used by processes P1 and P2 for accessing their critical\nsections whenever needed, as given below. The initial values of shared boolean\nvariables S1 and S2 are randomly assigned. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q23_0dd65df2.jpg\"> <br> Which one of the following statements describes the properties achieved? <br><br><strong>(GATE CSE 2010)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Mutual exclusion but not progress</p>",
            "<b>B.</b> <p>Progress but not mutual exclusion</p>",
            "<b>C.</b> <p>Neither mutual exclusion nor progress</p>",
            "<b>D.</b> <p>Both mutual exclusion and progress</p>"
          ],
          "correct_answer": "<b>A.</b> <p>Mutual exclusion but not progress</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/2202/gate2010-23#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 2,
          "question": "<p>A multilevel page table is preferred in comparison to a single level page table for\ntranslating virtual address to physical address because <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>It reduces the memory access time to read or write a memory location.</p>",
            "<b>B.</b> <p>It helps to reduce the size of page table needed to implement the virtual address space of a process.</p>",
            "<b>C.</b> <p>It is required by the translation lookaside buffer.</p>",
            "<b>D.</b> <p>It helps to reduce the number of page faults in page replacement algorithms.</p>"
          ],
          "correct_answer": "<b>B.</b> <p>It helps to reduce the size of page table needed to implement the virtual address space of a process.</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1320/gate2009-34#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 3,
          "question": "<p>The enter_CS() and leave_CS() functions to implement critical section of a\nprocess are realized using test-and-set instruction as follows:<pre><code> void enter_CS(x)\n{\n                while test-and-set(x) ;\n}\nvoid leave_CS(x)\n{\n              x=0;\n} </code></pre>\nIn the above solution, x is a memory location associated with the CS and is nitialized to 0.<br> Now consider the following statements: <br><br>\nI. The above solution to CS problem is deadlock-free <br>\nII. The solution is starvation free.       <br>                                                                    III. The processes enter CS in FIFO order.<br>\nIV More than one process can enter CS at the same time.<br><br>\nWhich of the above statements is TRUE? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I only</p>",
            "<b>B.</b> <p>I and II</p>",
            "<b>C.</b> <p>II and III</p>",
            "<b>D.</b> <p>IV only</p>"
          ],
          "correct_answer": "<b>A.</b> <p>I only</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1319/gate2009-33#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 4,
          "question": "<p>In the following process state transition diagram for a uniprocessor system,\nassume that there are always some processes in the ready state: <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q32_667f85ac.jpg\"> <br> Now consider the following statements:<br><br>\nI. If a process makes a transition D, it would result in another process making\ntransition A immediately. <br>\nII. A process P2 in blocked state can make transition E while another process P1\nis in running state. <br>\nIII. The OS uses preemptive scheduling. <br>\nIV. The OS uses non-preemptive scheduling. <br><br>\nWhich of the above statements are TRUE? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>I and II</p>",
            "<b>B.</b> <p>I and III</p>",
            "<b>C.</b> <p>II and III</p>",
            "<b>D.</b> <p>II and IV</p>"
          ],
          "correct_answer": "<b>C.</b> <p>II and III</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/1318/gate2009-32#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 5,
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
          "id": 6,
          "question": "<p>Consider a system with 4 types of resources R1 (3 units), R2 (2 units), R3 (3 units), R4 (2 units). A non-preemptive resource allocation policy is used. At any given instance, a request is not entertained if it cannot be completely satisfied. Three processes P1, P2, P3 request the sources as follows if executed\nindependently. <br><img style=\"max-width:50%;height:auto;border-radius:8px;\" data-lazyloaded=\"1\" decoding=\"async\" src=\"images\\gatePYQ\\Operating_System\\q30_5bca0566.jpg\"> <br> Which one of the following statements is TRUE if all three processes run concurrently starting at time t=0? <br><br><strong>(GATE CSE 2009)</strong></p>",
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
          "id": 7,
          "question": "<p>The essential content(s) in each entry of a page table is / are <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Virtual page number</p>",
            "<b>B.</b> <p>Page frame number</p>",
            "<b>C.</b> <p>Both virtual page number and page frame number</p>",
            "<b>D.</b> <p>Access right information</p>"
          ],
          "correct_answer": "<b>B.</b> <p>Page frame number</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1302/gate2009-10#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 8,
          "question": "<p>In which one of the following page replacement policies, Belady's anomaly may occur? <br><br><strong>(GATE CSE 2009)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>FIFO</p>",
            "<b>B.</b> <p>Optimal</p>",
            "<b>C.</b> <p>LRU</p>",
            "<b>D.</b> <p>MRU</p>"
          ],
          "correct_answer": "<b>A.</b> <p>FIFO</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/1301/gate2009-9#a_list\" targer=\"_blank\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 9,
          "question": "<p>Match the following flag bits used in the context of virtual memory management on the left side with the different purposes on the right side of the table below.<br>\\(\\begin{array}{l|ll} \\text { Name of the bit } &amp; \\text { Purpose } \\\\ \\hline \\text { I. } \\text { Dirty } &amp; \\text { a. }  \\text { Page initialization } \\\\ \\text { II. } \\text { R/W } &amp; \\text { b. } \\text { Write-back policy } \\\\ \\text { III. } \\text { Reference } &amp; \\text { c. } \\text { Page protection } \\\\ \\text { IV. } \\text { Valid } &amp; \\text { d. } \\text { Page replacement policy } \\end{array}\\) <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>\\(\\text{I-d, II-a, III-b, IV-c}\\)</p>",
            "<b>B.</b> <p>\\(\\text{I-b, II-c, III-a, IV-d}\\)</p>",
            "<b>C.</b> <p>\\(\\text{I-c, II-d, III-a, IV-b}\\)</p>",
            "<b>D.</b> <p>\\(\\text{I-b, II-c, III-d, IV-a}\\)</p>"
          ],
          "correct_answer": "<b>D.</b> <p>\\(\\text{I-b, II-c, III-d, IV-a}\\)</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3366/gate2008-it-56\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 10,
          "question": "<p>If the time-slice used in the round-robin scheduling policy is more than the maximum time required to execute any process, then the policy will <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>degenerate to hortest job first</p>",
            "<b>B.</b> <p>degenerate to priority scheduling</p>",
            "<b>C.</b> <p>degenerate to first come first serve</p>",
            "<b>D.</b> <p>none of the above</p>"
          ],
          "correct_answer": "<b>C.</b> <p>degenerate to first come first serve</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3365/gate2008-it-55\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 11,
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
          "id": 12,
          "question": "<p>The following is a code with two threads, producer and consumer, that can run in parallel. Further, S and Q are binary semaphores quipped with the standard P and V operations.<br><pre><code> semaphore S = 1, Q = 0; \ninteger x;\n\nproducer:                   consumer:\nwhile (true) do             while (true) do\n    P(S);                       P(Q);\n    x = produce ();             consume (x);\n    V(Q);                       V(S);\ndone                        done</code></pre> <br>Which of the following is TRUE about the program above? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>The process can deadlock</p>",
            "<b>B.</b> <p>One of the threads can starve</p>",
            "<b>C.</b> <p>Some of the items produced by the producer may be lost</p>",
            "<b>D.</b> <p>Values generated and stored in 'x' by the producer will always be consumed before the producer can generate a new value</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Values generated and stored in 'x' by the producer will always be consumed before the producer can generate a new value</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3363/gate2008-it-53\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 13,
          "question": "<p>Assume that a main memory with only 4 pages, each of 16 bytes, is initially empty. The CPU generates the following sequence of virtual addresses and uses the Least Recently Used (LRU) page replacement policy.<br>\n0, 4, 8, 20, 24, 36, 44, 12, 68, 72, 80, 84, 28, 32, 88, 92 <br>\nHow many page faults does this sequence cause? What are the page numbers of the pages present in the main memory at the end of the sequence? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>6 and 1, 2, 3, 4</p>",
            "<b>B.</b> <p>7 and 1, 2, 4, 5</p>",
            "<b>C.</b> <p>8 and 1, 2, 4, 5</p>",
            "<b>D.</b> <p>9 and 1, 2, 3, 5</p>"
          ],
          "correct_answer": "<b>B.</b> <p>7 and 1, 2, 4, 5</p>",
          "marks": 2,
          "negative_marks": 0.67,
          "explanation": "<a href=\"https://gateoverflow.in/3351/gate2008-it-41\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 14,
          "question": "<p>A paging scheme uses a Translation Look-aside Buffer (TLB). A TLB-access takes 10 ns and the main memory access takes 50 ns. What is the effective access time(in ns) if the TLB hit ratio is 90% and there is no page-fault? <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>54</p>",
            "<b>B.</b> <p>60</p>",
            "<b>C.</b> <p>65</p>",
            "<b>D.</b> <p>75</p>"
          ],
          "correct_answer": "<b>C.</b> <p>65</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<a href=\"https://gateoverflow.in/3276/gate2008-it-16\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        },
        {
          "id": 15,
          "question": "<p>Consider the execution of the following commands in a shell on a Linux operating system.<br><br>\nbash$ cat alpha<br>\nMathematics<br>\nbash$ In alpha beta<br>\nbash$ rm alpha<br>\nbash$ cat &gt;&gt; beta &lt;&lt; SAME<br>\nInformation Technology<br>\nSAME<br>\nbash$ cat beta<br><br>\nThe output of the last command will be: <br><br><strong>(GATE IT 2008)</strong></p>",
          "type": "single",
          "options": [
            "<b>A.</b> <p>Mathematics Information Technology SAME</p>",
            "<b>B.</b> <p>Mathematics Information Technology</p>",
            "<b>C.</b> <p>Information Technology</p>",
            "<b>D.</b> <p>Information Technology SAME</p>"
          ],
          "correct_answer": "<b>D.</b> <p>Information Technology SAME</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "NOTE: This question is out of Syllabus Now.<a href=\"https://gateoverflow.in/3274/gate2008-it-14\" target=\"_blank\" rel=\"noopener\">Click here for detail solution by gateoverflow</a>"
        }
      ]
    }
  ]
});
