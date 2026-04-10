window.__examLoadCallback({
  "title": "Operating System - Deadlock Prevention Avoidance Detection",
  "duration": 11,
  "sections": [
    {
      "name": "Deadlock Prevention Avoidance Detection",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"204098\"></a><div itemprop=\"text\">Consider a system with \\( 3 \\) processes that share \\( 4 \\) instances of the same resource type. Each process can request a maximum of \\( K \\) instances. Resources can be requested and releases only one at a time. The largest value of \\( K \\) that will always avoid deadlock is ___</div><br><br><b>GATE CSE 2018 | Question: 24</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "2",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/204098/gate-cse-2018-question-24\" target=\"_blank\">https://gateoverflow.in/204098/gate-cse-2018-question-24</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"204113\"></a><div itemprop=\"text\"><p>In a system, there are three types of resources: \\( E, F \\) and \\( G \\). Four processes \\( P_0 \\), \\( P_1 \\), \\( P_2 \\) and \\( P_3 \\) execute concurrently. At the outset, the processes have declared their maximum resource requirements using a matrix named Max as given below. For example, Max[\\( P_2, F \\)] is the maximum number of instances of \\( F \\) that \\( P_2 \\) would require. The number of instances of the resources allocated to the various processes at any given state is given by a matrix named Allocation.</p><p>Consider a state of the system with the Allocation matrix as shown below, and in which \\( 3 \\) instances of \\( E \\) and \\( 3 \\) instances of \\( F \\) are only resources available.</p><p>\\[  \\begin{array}{|l|}\\hline \\textbf{Allocation}&nbsp;&nbsp; \\\\\\hline &amp; \\text{E} &amp; \\text{F} &amp; \\text{G}&nbsp; \\\\\\hline&nbsp; \\text{\\( P_0 \\)} &amp; \\text{1} &amp;&nbsp;\\text{0} &amp; \\text{1} \\\\\\hline&nbsp; \\text{\\( P_1 \\)} &amp; \\text{1} &amp; \\text{1}&nbsp; &amp; \\text{2}\\\\\\hline&nbsp; \\text{\\( P_2 \\)} &amp; \\text{1} &amp; \\text{0}&nbsp; &amp; \\text{3}\\\\\\hline&nbsp; \\text{\\( P_3 \\)} &amp; \\text{2} &amp; \\text{0}&nbsp; &amp; \\text{0}\\\\\\hline \\end{array} \\begin{array}{|l|}\\hline \\textbf{Max}&nbsp;&nbsp; \\\\\\hline &amp; \\text{E} &amp; \\text{F} &amp; \\text{G}&nbsp; \\\\\\hline&nbsp; \\text{\\( P_0 \\)} &amp; \\text{4} &amp;&nbsp;\\text{3} &amp; \\text{1} \\\\\\hline&nbsp; \\text{\\( P_1 \\)} &amp; \\text{2} &amp; \\text{1}&nbsp; &amp; \\text{4}\\\\\\hline&nbsp; \\text{\\( P_2 \\)} &amp; \\text{1} &amp; \\text{3}&nbsp; &amp; \\text{3}\\\\\\hline&nbsp; \\text{\\( P_3 \\)} &amp; \\text{5} &amp; \\text{4}&nbsp; &amp; \\text{1}\\\\\\hline \\end{array}&nbsp; \\]</p><p>From the perspective of deadlock avoidance, which one of the following is true?</p></div><br><br><b>GATE CSE 2018 | Question: 39</b></p>",
          "type": "single",
          "options": [
            "<p>The system is in \\( safe \\) state</p>",
            "<p>The system is not in \\( safe \\) state, but would be \\( safe \\) if one more instance of \\( E \\) were available</p>",
            "<p>The system is not in \\( safe \\) state, but would be \\( safe \\) if one more instance of \\( F \\) were available</p>",
            "<p>The system is not in \\( safe \\) state, but would be \\( safe \\) if one more instance of \\( G \\) were available</p>"
          ],
          "correct_answer": "<p>The system is in \\( safe \\) state</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/204113/gate-cse-2018-question-39\" target=\"_blank\">https://gateoverflow.in/204113/gate-cse-2018-question-39</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"357497\"></a><div itemprop=\"text\"><p>Consider a computer system with multiple shared resource types, with one instance per resource type. Each instance can be owned by only one process at a time. Owning and freeing of resources are done by holding a global lock \\( (L) \\). The following scheme is used to own a resource instance:</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">function OWNRESOURCE(Resource R)\n    Acquire lock L // a global lock\n    if R is available then\n        Acquire R    \n        Release lock L\n    else\n        if R is owned by another process P then     \n        Terminate P, after releasing all resources owned by P    \n        Acquire R    \n        Restart P   \n        Release lock L   \n        end if   \n    end if    \nend function\n\n</pre>\n\n<p>Which of the following choice(s) about the above scheme is/are correct?</p>\n\n</div><br><br><b>GATE CSE 2021 Set 2 | Question: 43</b></p>",
          "type": "multiple",
          "options": [
            "<p>The scheme ensures that deadlocks will not occur</p>",
            "<p>The scheme may lead to live-lock</p>",
            "<p>The scheme may lead to starvation</p>",
            "<p>The scheme violates the mutual exclusion property</p>"
          ],
          "correct_answer": [
            "<p>The scheme ensures that deadlocks will not occur</p>",
            "<p>The scheme may lead to live-lock</p>",
            "<p>The scheme may lead to starvation</p>"
          ],
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/357497/gate-cse-2021-set-2-question-43\" target=\"_blank\">https://gateoverflow.in/357497/gate-cse-2021-set-2-question-43</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"3706\"></a><div itemprop=\"text\"><p>In a certain operating system, deadlock prevention is attempted using the following scheme. Each process is assigned a unique timestamp, and is restarted with the same timestamp if killed. Let \\( P_h \\) be the process holding a resource \\( R, P_r \\)&nbsp;be a process requesting for the same resource \\( R, \\) and \\( T(P_h) \\) and \\( T(P_r) \\) be their timestamps respectively. The decision to wait or preempt one of the processes is based on the following algorithm.</p>\n\n<pre class=\"prettyprint lang-c_cpp\">if T(Pr) &lt; T(Ph) then \n    kill Pr \nelse wait</pre>\n\n<p>Which one of the following is TRUE?</p>\n\n</div><br><br><b>GATE IT 2004 | Question: 63</b></p>",
          "type": "single",
          "options": [
            "<p>The scheme is deadlock-free, but not starvation-free</p>",
            "<p>The scheme is not deadlock-free, but starvation-free</p>",
            "<p>The scheme is neither deadlock-free nor starvation-free</p>",
            "<p>The scheme is both deadlock-free and starvation-free</p>"
          ],
          "correct_answer": "<p>The scheme is deadlock-free, but not starvation-free</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/3706/gate-it-2004-question-63\" target=\"_blank\">https://gateoverflow.in/3706/gate-it-2004-question-63</a></p>"
        }
      ]
    }
  ]
});
