window.__examLoadCallback({
  "title": "Operating System - Process Synchronization",
  "duration": 22,
  "sections": [
    {
      "name": "Process Synchronization",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"18751\"></a><div itemprop=\"text\"><p>Consider the <strong>concurrent</strong> program:</p>\n\n<pre class=\"prettyprint lang-c_cpp\">x: 1;\n    cobegin\n        x:= x + 3 || x := x + x + 2\n    coend</pre>\n\n<p>Reading and writing of variables is atomic, but the evaluation of an expression is not atomic.</p>\n\n<p>The set of possible values of variable \\( x \\) at the end of the execution of the program is:</p>\n\n</div><br><br><b>Operating System: TIFR CSE 2010 | Part B | Question: 28</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\{4\\} \\)</p>",
            "<p>\\( \\{8\\} \\)</p>",
            "<p>\\( \\{4, 7, 10\\} \\)</p>",
            "<p>\\( \\{4, 7, 8, 10\\} \\)</p>",
            "<p>\\( \\{4, 7, 8\\} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\{4, 7, 10\\} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/18751/tifr-cse-2010-part-b-question-28\" target=\"_blank\">https://gateoverflow.in/18751/tifr-cse-2010-part-b-question-28</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"19244\"></a><div itemprop=\"text\"><p>Consider the following solution (expressed in Dijkstra's guarded command notation) to the mutual exclusion problem.</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">process P1 is   \nbegin      \n    loop\n        Non_critical_section;\n        while not (Turn=1) do skip od;\n        Critical_section_1;\n        Turn:=2;\n    end loop\nend\n</pre>\n\n<p>&nbsp;</p>\n\n<pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">process P2 is  \nbegin\n    loop\n        Non_critical_section;\n        while not (Turn=2) do skip od;\n        Critical_section_2;\n        Turn:=1;\n    end loop\nend</pre>\n\n<p>Initially, Turn\\( =1 \\), Assume that the two process run forever and that no process stays in its critical and non-critical section infinitely. A mutual exclusion program is correct if it satisfies the following requirements.</p>\n\n<ol>\n\t<li>Only one process can be in a critical region at a time.</li>\n\t<li>Program is a dead-lock free, i.e., if both processes are trying to enter the critical region then at least one of them does enter the critical region.</li>\n\t<li>Program is starvation-free; i.e, a process trying to enter the critical region eventually manages to do so.</li>\n</ol>\n\n<p>The above mutual exclusion solution.</p>\n\n</div><br><br><b>Operating System: TIFR CSE 2010 | Part B | Question: 32</b></p>",
          "type": "numeric",
          "options": [
            "<p>Does not satisfy the requirement (1).</p>",
            "<p>Satisfy the requirement (1) but does not satisfy the requirement (2).</p>",
            "<p>Satisfies the requirements (1) and (2), but does not satisfies the requirement (3).</p>",
            "<p>Satisfies the requirement (1) and (3), but does not satisfies the requirement (2).</p>",
            "<p>Satisfies all the requirement (1), (2), and (3).</p>"
          ],
          "correct_answer": "E",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/19244/tifr-cse-2010-part-b-question-32\" target=\"_blank\">https://gateoverflow.in/19244/tifr-cse-2010-part-b-question-32</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"20330\"></a><div itemprop=\"text\"><p>Consider the program&nbsp;</p>\n\n<pre class=\"prettyprint lang-c_cpp prettyprinted\">P:: x:=1; y:=1; z:=1; u:=0</pre>\n\n<p>And the program</p>\n\n<pre class=\"prettyprint lang-c_cpp prettyprinted\">Q:: x, y, z, u := 1, 1, 1, 1; u:= 0</pre>\n\n<p>Which of the following is true?</p>\n\n</div><br><br><b>Operating System: TIFR CSE 2011 | Part B | Question: 22</b></p>",
          "type": "single",
          "options": [
            "<p>P and Q are equivalent for sequential processors.</p>",
            "<p>P and Q are equivalent for all multi-processor models.</p>",
            "<p>P and Q &nbsp;are equivalent for all multi-core machines.</p>",
            "<p>P and Q are equivalent for all networks of computers.</p>",
            "<p>None of the above</p>"
          ],
          "correct_answer": "<p>P and Q are equivalent for all networks of computers.</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/20330/tifr-cse-2011-part-b-question-22\" target=\"_blank\">https://gateoverflow.in/20330/tifr-cse-2011-part-b-question-22</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"20572\"></a><div itemprop=\"text\"><p>Consider the following two scenarios in the dining philosophers problem:</p>\n\n<ol style=\"list-style-type:lower-roman\">\n\t<li>First a philosopher has to enter a room with the table that restricts the number of philosophers to four.</li>\n\t<li>There is no restriction on the number of philosophers entering the room.</li>\n</ol>\n\n<p>Which of the following is true?</p>\n\n</div><br><br><b>Operating System: TIFR CSE 2011 | Part B | Question: 26</b></p>",
          "type": "single",
          "options": [
            "<p>Deadlock is possible in (i) and (ii).</p>",
            "<p>Deadlock is possible in (i).</p>",
            "<p>Starvation is possible in (i).</p>",
            "<p>Deadlock is not possible in (ii).</p>",
            "<p>Starvation is not possible in (ii)</p>"
          ],
          "correct_answer": "<p>Starvation is possible in (i).</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/20572/tifr-cse-2011-part-b-question-26\" target=\"_blank\">https://gateoverflow.in/20572/tifr-cse-2011-part-b-question-26</a></p>"
        },
        {
          "id": 5,
          "question": "<p><a name=\"20575\"></a><div itemprop=\"text\"><p>Consider a basic block:</p>\n\n<pre class=\"prettyprint lang-c_cpp prettyprinted\">x:= a[i]; a[j]:= y; z:= a[j]</pre>\n\n<p>optimized by removing common sub expression a[i] as follows:</p>\n\n<pre class=\"prettyprint lang-c_cpp prettyprinted\">x:= a[i]; z:= x; a[j]:= y.</pre>\n\n<p>Which of the following is true?</p>\n\n</div><br><br><b>Operating System: TIFR CSE 2011 | Part B | Question: 28</b></p>",
          "type": "numeric",
          "options": [
            "<p>Both are equivalent.</p>",
            "<p>The values computed by both are exactly the same.</p>",
            "<p>Both give exactly the same values only if \\( i \\) is not equal to \\( j \\).</p>",
            "<p>They will be equivalent in concurrent programming languages with shared memory.</p>",
            "<p>None of the above.</p>"
          ],
          "correct_answer": "E",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/20575/tifr-cse-2011-part-b-question-28\" target=\"_blank\">https://gateoverflow.in/20575/tifr-cse-2011-part-b-question-28</a></p>"
        },
        {
          "id": 6,
          "question": "<p><a name=\"20838\"></a><div itemprop=\"text\"><p>Consider the class of synchronization primitives. Which of the following is false?</p>\n\n</div><br><br><b>Operating System: TIFR CSE 2011 | Part B | Question: 34</b></p>",
          "type": "numeric",
          "options": [
            "<p>Test and set primitives are as powerful as semaphores.</p>",
            "<p>There are various synchronizations that can be implemented using an array of semaphores but not by binary semaphores.</p>",
            "<p>Split binary semaphores and binary semaphores are equivalent.</p>",
            "<p>All statements a - c are false.</p>",
            "<p>Petri nets with and without inhibitor arcs have the same power.</p>"
          ],
          "correct_answer": "TBA",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/20838/tifr-cse-2011-part-b-question-34\" target=\"_blank\">https://gateoverflow.in/20838/tifr-cse-2011-part-b-question-34</a></p>"
        },
        {
          "id": 7,
          "question": "<p><a name=\"25109\"></a><div itemprop=\"text\"><p>Consider the concurrent program&nbsp;</p>\n\n<pre class=\"prettyprint lang-c_cpp\">x := 1; \ncobegin \n&nbsp;   x := x + x + 1 || x := x + 2 \ncoend;</pre>\n\n<p>Reading and writing of a variable is atomic, but evaluation of an expression is not atomic. The set of possible values of variable \\( x \\) at the end of execution of the program is</p>\n\n</div><br><br><b>Operating System: TIFR CSE 2012 | Part B | Question: 9</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\left\\{3\\right\\} \\)</p>",
            "<p>\\( \\left\\{7\\right\\} \\)</p>",
            "<p>\\( \\left\\{3, 5, 7\\right\\} \\)</p>",
            "<p>\\( \\left\\{3, 7\\right\\} \\)</p>",
            "<p>\\( \\left\\{3, 5\\right\\} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\left\\{3, 5, 7\\right\\} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/25109/tifr-cse-2012-part-b-question-9\" target=\"_blank\">https://gateoverflow.in/25109/tifr-cse-2012-part-b-question-9</a></p>"
        },
        {
          "id": 8,
          "question": "<p><a name=\"30077\"></a><div itemprop=\"text\"><p>Consider the following concurrent program (where statements separated by | | with-in cobegin-coend are executed concurrently).</p>\n\n<pre class=\"prettyprint lang-c_cpp\">x:=1 \ncobegin \n&nbsp;  x:= x + 1 ||    x:= x + 1  ||    x:= x + 1  \ncoend</pre>\n\n<p>Reading and writing of variables is atomic but evaluation of expressions is not atomic. The set of possible values of \\( x \\) at the end of execution of the program is</p>\n\n</div><br><br><b>Operating System: TIFR CSE 2015 | Part B | Question: 14</b></p>",
          "type": "single",
          "options": [
            "<p>\\( \\left \\{ 4 \\right \\} \\)</p>",
            "<p>\\( \\left \\{ 2, 3, 4 \\right \\} \\)</p>",
            "<p>\\( \\left \\{2, 4 &nbsp;\\right \\} \\)</p>",
            "<p>\\( \\left \\{ 2, 3 \\right \\} \\)</p>",
            "<p>\\( \\left \\{2 &nbsp;\\right \\} \\)</p>"
          ],
          "correct_answer": "<p>\\( \\left \\{ 2, 3, 4 \\right \\} \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/30077/tifr-cse-2015-part-b-question-14\" target=\"_blank\">https://gateoverflow.in/30077/tifr-cse-2015-part-b-question-14</a></p>"
        }
      ]
    }
  ]
});
