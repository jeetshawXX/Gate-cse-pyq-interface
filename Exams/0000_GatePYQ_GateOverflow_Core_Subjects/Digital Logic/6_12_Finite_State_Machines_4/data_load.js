window.__examLoadCallback({
  "title": "Digital Logic - Finite State Machines",
  "duration": 11,
  "sections": [
    {
      "name": "Finite State Machines",
      "questions": [
        {
          "id": 1,
          "question": "<p><a name=\"2480\"></a><div itemprop=\"text\">State True or False with one line explanation<br>\n<br>\nA FSM (Finite State Machine) can be designed to add two integers of any arbitrary length (arbitrary number of digits).</div><br><br><b>GATE CSE 1994 | Question: 3.3</b></p>",
          "type": "numeric",
          "options": [],
          "correct_answer": "True",
          "marks": 1,
          "negative_marks": 0,
          "explanation": "<p><a href=\"https://gateoverflow.in/2480/gate-cse-1994-question-3-3\" target=\"_blank\">https://gateoverflow.in/2480/gate-cse-1994-question-3-3</a></p>"
        },
        {
          "id": 2,
          "question": "<p><a name=\"2636\"></a><div itemprop=\"text\"><p>A finite state machine with the following state table has a single input \\( x \\) and a single out \\( z \\).</p><p>\\[ \\begin{array}{|c|ll|}\\hline<br>\\textbf{present state} &amp; \\qquad \\textbf{next state, z} \\\\ &amp; \\text{x=1}&nbsp; &amp; \\text{x=0} \\\\\\hline&nbsp; \\text{A} &amp; \\text{D,0} &amp; \\text{B,0} \\\\\\hline&nbsp;&nbsp; \\text{B} &amp; \\text{B,1} &amp; \\text{C,1} \\\\\\hline&nbsp; \\text{C} &amp; \\text{B,0} &amp; \\text{D,1}&nbsp; \\\\\\hline \\text{D} &amp; \\text{B,1} &amp; \\text{C,0}&nbsp; \\\\\\hline \\end{array} \\]</p><p>If the initial state is unknown, then the shortest input sequence to reach the final state \\( C \\) is:</p></div><br><br><b>GATE CSE 1995 | Question: 2.23</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 01 \\)</p>",
            "<p>\\( 10 \\)</p>",
            "<p>\\( 101 \\)</p>",
            "<p>\\( 110 \\)</p>"
          ],
          "correct_answer": "<p>\\( 10 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2636/gate-cse-1995-question-2-23\" target=\"_blank\">https://gateoverflow.in/2636/gate-cse-1995-question-2-23</a></p>"
        },
        {
          "id": 3,
          "question": "<p><a name=\"2752\"></a><div itemprop=\"text\"><p>Consider the following state table for a sequential machine. The number of states in the minimized machine will be</p><p>\\[ \\begin{array}{|l|l|ll|}\\hline \\text{} &amp; \\text{} &amp; \\textbf{Input}\\\\\\hline &amp;&amp; \\text{0} &amp; \\text{1} \\\\\\hline&nbsp; \\textbf{Present State} &amp; \\textbf{A} &amp; \\text{D,0} &amp; \\text{B,1} \\\\&nbsp;&nbsp; \\text{} &amp; \\textbf{B} &amp; \\text{A,0} &amp; \\text{C,1}\\\\&nbsp;&nbsp; &amp; \\textbf{C} &amp; \\text{A,0} &amp; \\text{B,1} \\\\&nbsp; \\text{} &amp; \\textbf{D} &amp; \\text{A,1} &amp; \\text{C,1} \\\\\\hline \\text{} &amp; \\text{} &amp; \\textbf{Next state, Output}\\\\\\hline \\end{array} \\]</p></div><br><br><b>GATE CSE 1996 | Question: 2.23</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 4 \\)</p>",
            "<p>\\( 3 \\)</p>",
            "<p>\\( 2 \\)</p>",
            "<p>\\( 1 \\)</p>"
          ],
          "correct_answer": "<p>\\( 3 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/2752/gate-cse-1996-question-2-23\" target=\"_blank\">https://gateoverflow.in/2752/gate-cse-1996-question-2-23</a></p>"
        },
        {
          "id": 4,
          "question": "<p><a name=\"1313\"></a><div itemprop=\"text\"><p>Given the following state table of an FSM with two states \\( A \\) and \\( B \\),one input and one output.</p><p>\\[ \\small\\begin{array}{|c|c|c|c|c|c|}\\hline \\textbf{PRESENT} &amp; \\textbf{PRESENT} &amp; &nbsp;&amp; \\textbf{Next State&nbsp;} &amp; \\textbf{Next State} &amp; \\\\ \\textbf{STATE A}&nbsp;&amp; \\textbf{STATE&nbsp;B} &amp; \\bf {Input}&amp; \\bf {A} &amp; \\bf {B} &amp; \\bf{Output}\\\\\\hline&nbsp; \\text{0} &amp; \\text{0}&nbsp; &amp; \\text{0} &amp; \\text{0}&nbsp; &amp; \\text{0}&nbsp; &amp; \\text{1} \\\\\\hline&nbsp; \\text{0} &amp; \\text{1}&nbsp; &amp; \\text{0} &amp; \\text{1}&nbsp; &amp; \\text{0} &amp; \\text{0}\\\\\\hline&nbsp;\\text{1} &amp; \\text{0}&nbsp; &amp; \\text{0} &amp; \\text{0}&nbsp; &amp; \\text{1} &amp; \\text{0}\\\\\\hline&nbsp;\\text{1} &amp; \\text{1}&nbsp; &amp; \\text{0} &amp; \\text{1}&nbsp; &amp; \\text{0} &amp; \\text{0}\\\\\\hline&nbsp;\\text{0} &amp; \\text{0}&nbsp; &amp; \\text{1} &amp; \\text{0}&nbsp; &amp; \\text{1}&nbsp; &amp; \\text{0} \\\\\\hline&nbsp;\\text{0} &amp; \\text{1}&nbsp; &amp; \\text{1} &amp; \\text{0}&nbsp; &amp; \\text{0} &amp; \\text{1} \\\\\\hline&nbsp;\\text{1} &amp; \\text{0}&nbsp; &amp; \\text{1} &amp; \\text{0}&nbsp; &amp; \\text{1}&nbsp; &amp; \\text{1} \\\\\\hline&nbsp;\\text{1} &amp; \\text{1}&nbsp; &amp; \\text{1} &amp; \\text{0}&nbsp; &amp; \\text{0}&nbsp; &amp; \\text{1} \\\\\\hline&nbsp; \\end{array} \\]If the initial state is \\( A=0 ,B=0 \\) what is the minimum length of &nbsp;an input string&nbsp;which will take the machine to the state \\( A=0,B=1 \\) with \\( output=1 \\).</p></div><br><br><b>GATE CSE 2009 | Question: 27</b></p>",
          "type": "single",
          "options": [
            "<p>\\( 3 \\)</p>",
            "<p>\\( 4 \\)</p>",
            "<p>\\( 5 \\)</p>",
            "<p>\\( 6 \\)</p>"
          ],
          "correct_answer": "<p>\\( 3 \\)</p>",
          "marks": 1,
          "negative_marks": 0.33,
          "explanation": "<p><a href=\"https://gateoverflow.in/1313/gate-cse-2009-question-27\" target=\"_blank\">https://gateoverflow.in/1313/gate-cse-2009-question-27</a></p>"
        }
      ]
    }
  ]
});
